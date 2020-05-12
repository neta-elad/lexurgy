package com.meamoria.lexurgy.sc

class Matrix(val valueList: List<MatrixValue>) {
    val valueSet: Set<MatrixValue> = valueList.toSet()
    val simpleValues: Set<SimpleValue> = valueSet.filterIsInstanceTo(mutableSetOf())
    val simpleValueStrings: Set<String> = simpleValues.mapTo(mutableSetOf()) { it.name }

    fun bindVariables(bindings: Bindings): Matrix {
        var updated = false
        val values = valueList.toMutableList()
        for ((feature, value) in bindings.features) {
            val index = values.indexOfFirst { it is FeatureVariable && it.featureName == feature.name }
            if (index >= 0) {
                values.removeAt(index)
                values.add(value)
                updated = true
            }
        }
        return if (updated) Matrix(values) else this
    }

    override fun toString(): String = valueList.joinToString(separator = " ", prefix = "[", postfix = "]")

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false
        other as Matrix
        return valueSet == other.valueSet
    }

    override fun hashCode(): Int {
        return valueSet.hashCode()
    }
}

interface MatrixValue {
    fun matches(declarations: Declarations, matrix: Matrix, bindings: Bindings): Boolean
}

data class NegatedValue(val value: String): MatrixValue {
    override fun matches(declarations: Declarations, matrix: Matrix, bindings: Bindings): Boolean =
        value !in matrix.simpleValueStrings
}

data class AbsentFeature(val featureName: String): MatrixValue {
    override fun matches(declarations: Declarations, matrix: Matrix, bindings: Bindings): Boolean =
        with (declarations) {
            featureName.toFeature().values.none { it in matrix.valueSet }
        }
}

data class FeatureVariable(val featureName: String): MatrixValue {
    override fun matches(declarations: Declarations, matrix: Matrix, bindings: Bindings): Boolean {
        with (declarations) {
            val featureObject = featureName.toFeature()
            val match = featureObject.allValues.filter { it in matrix.valueSet }
            return match.firstOrNull()?.let {
                bindings.features[featureObject] = it
            } != null
        }
    }

    override fun toString(): String = "$$featureName"
}

data class SimpleValue(val name: String): MatrixValue {
    override fun matches(declarations: Declarations, matrix: Matrix, bindings: Bindings): Boolean =
        name in matrix.simpleValueStrings

    override fun toString(): String = name
}

class LscInvalidMatrix(val matrix: Matrix) :
    Exception("No combination of a symbol and diacritics has the matrix $matrix")