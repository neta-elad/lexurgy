// Generated from Lsc.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LscVisitor = require('./LscVisitor').LscVisitor;

var grammarFileName = "Lsc.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003+\u0259\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0003\u0002\u0003\u0002\u0007\u0002{\n\u0002",
    "\f\u0002\u000e\u0002~\u000b\u0002\u0003\u0002\u0005\u0002\u0081\n\u0002",
    "\u0003\u0002\u0006\u0002\u0084\n\u0002\r\u0002\u000e\u0002\u0085\u0003",
    "\u0002\u0007\u0002\u0089\n\u0002\f\u0002\u000e\u0002\u008c\u000b\u0002",
    "\u0003\u0002\u0007\u0002\u008f\n\u0002\f\u0002\u000e\u0002\u0092\u000b",
    "\u0002\u0003\u0002\u0005\u0002\u0095\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u009f\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u00a9",
    "\n\u0004\f\u0004\u000e\u0004\u00ac\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0005\u0005\u00b2\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006\u00b9\n\u0006",
    "\f\u0006\u000e\u0006\u00bc\u000b\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006\u00c0\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006\u00c6\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007",
    "\u0006\u00cb\n\u0006\f\u0006\u000e\u0006\u00ce\u000b\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006\u00d2\n\u0006\u0003\u0007\u0005\u0007\u00d5",
    "\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00e3\n\t\f\t\u000e",
    "\t\u00e6\u000b\t\u0003\t\u0003\t\u0003\t\u0007\t\u00eb\n\t\f\t\u000e",
    "\t\u00ee\u000b\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000b\u00f7\n\u000b\f\u000b\u000e\u000b",
    "\u00fa\u000b\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00fe\n\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0005\r\u0105\n\r\u0003\r\u0003",
    "\r\u0006\r\u0109\n\r\r\r\u000e\r\u010a\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u0112\n\u000e\u0003\u000e\u0003\u000e",
    "\u0006\u000e\u0116\n\u000e\r\u000e\u000e\u000e\u0117\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u0121\n\u000f\u0003\u000f\u0003\u000f\u0006\u000f\u0125\n\u000f",
    "\r\u000f\u000e\u000f\u0126\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0007\u0010\u012e\n\u0010\f\u0010\u000e\u0010\u0131",
    "\u000b\u0010\u0003\u0010\u0005\u0010\u0134\n\u0010\u0003\u0010\u0006",
    "\u0010\u0137\n\u0010\r\u0010\u000e\u0010\u0138\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u013f\n\u0011\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u0143\n\u0012\u0003\u0013\u0003\u0013\u0006\u0013",
    "\u0147\n\u0013\r\u0013\u000e\u0013\u0148\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0006\u0013\u014f\n\u0013\r\u0013\u000e\u0013\u0150",
    "\u0005\u0013\u0153\n\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u0157",
    "\n\u0013\f\u0013\u000e\u0013\u015a\u000b\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0007\u0014\u015f\n\u0014\f\u0014\u000e\u0014\u0162\u000b",
    "\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u0166\n\u0014\f\u0014\u000e",
    "\u0014\u0169\u000b\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u016d\n",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0006\u0016\u0173",
    "\n\u0016\r\u0016\u000e\u0016\u0174\u0003\u0016\u0007\u0016\u0178\n\u0016",
    "\f\u0016\u000e\u0016\u017b\u000b\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0007\u0017\u0180\n\u0017\f\u0017\u000e\u0017\u0183\u000b\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0005\u0018\u018b\n\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u018f",
    "\n\u0018\u0005\u0018\u0191\n\u0018\u0003\u0019\u0003\u0019\u0005\u0019",
    "\u0195\n\u0019\u0003\u001a\u0003\u001a\u0005\u001a\u0199\n\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0007\u001d\u01a3\n\u001d\f\u001d\u000e\u001d\u01a6",
    "\u000b\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0005\u001e\u01ad\n\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005",
    "\u001e\u01b2\n\u001e\u0003\u001e\u0005\u001e\u01b5\n\u001e\u0005\u001e",
    "\u01b7\n\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0005!\u01c4\n!\u0003\"\u0003\"\u0003",
    "\"\u0006\"\u01c9\n\"\r\"\u000e\"\u01ca\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0005#\u01d3\n#\u0003$\u0003$\u0003$\u0003$\u0003$\u0005$\u01da",
    "\n$\u0003$\u0003$\u0003%\u0003%\u0003%\u0005%\u01e1\n%\u0003%\u0003",
    "%\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'\u0007",
    "\'\u01ed\n\'\f\'\u000e\'\u01f0\u000b\'\u0003\'\u0003\'\u0003(\u0003",
    "(\u0003(\u0006(\u01f7\n(\r(\u000e(\u01f8\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0005)\u0200\n)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0005*\u020a\n*\u0003+\u0003+\u0003+\u0003+\u0005+\u0210\n",
    "+\u0003,\u0003,\u0003,\u0003-\u0003-\u0003-\u0003.\u0003.\u0005.\u021a",
    "\n.\u0003.\u0003.\u0007.\u021e\n.\f.\u000e.\u0221\u000b.\u0003.\u0003",
    ".\u0003/\u0003/\u0003/\u0003/\u0003/\u0005/\u022a\n/\u00030\u00030\u0003",
    "0\u00031\u00031\u00031\u00032\u00032\u00032\u00033\u00033\u00034\u0003",
    "4\u00035\u00035\u00036\u00036\u00037\u00037\u00057\u023f\n7\u00037\u0003",
    "7\u00077\u0243\n7\f7\u000e7\u0246\u000b7\u00037\u00037\u00038\u0003",
    "8\u00058\u024c\n8\u00039\u00039\u00039\u0003:\u0003:\u0003;\u0003;\u0003",
    "<\u0003<\u0005<\u0257\n<\u0003<\u0002\u0002=\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.0246",
    "8:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtv\u0002\b\u0003\u0002\u001e\u001f\u0003",
    "\u0002#$\u0003\u0002()\u0004\u0002\r\r\u0012\u0013\u0004\u0002\u0012",
    "\u0012\u0014\u0014\u0003\u0002)+\u0002\u0280\u0002\u0094\u0003\u0002",
    "\u0002\u0002\u0004\u009e\u0003\u0002\u0002\u0002\u0006\u00a0\u0003\u0002",
    "\u0002\u0002\b\u00b1\u0003\u0002\u0002\u0002\n\u00b3\u0003\u0002\u0002",
    "\u0002\f\u00d4\u0003\u0002\u0002\u0002\u000e\u00d8\u0003\u0002\u0002",
    "\u0002\u0010\u00db\u0003\u0002\u0002\u0002\u0012\u00ef\u0003\u0002\u0002",
    "\u0002\u0014\u00f1\u0003\u0002\u0002\u0002\u0016\u00ff\u0003\u0002\u0002",
    "\u0002\u0018\u0101\u0003\u0002\u0002\u0002\u001a\u010e\u0003\u0002\u0002",
    "\u0002\u001c\u011b\u0003\u0002\u0002\u0002\u001e\u012a\u0003\u0002\u0002",
    "\u0002 \u013e\u0003\u0002\u0002\u0002\"\u0142\u0003\u0002\u0002\u0002",
    "$\u0144\u0003\u0002\u0002\u0002&\u016c\u0003\u0002\u0002\u0002(\u016e",
    "\u0003\u0002\u0002\u0002*\u0170\u0003\u0002\u0002\u0002,\u017c\u0003",
    "\u0002\u0002\u0002.\u0190\u0003\u0002\u0002\u00020\u0194\u0003\u0002",
    "\u0002\u00022\u0198\u0003\u0002\u0002\u00024\u019a\u0003\u0002\u0002",
    "\u00026\u019c\u0003\u0002\u0002\u00028\u019e\u0003\u0002\u0002\u0002",
    ":\u01b6\u0003\u0002\u0002\u0002<\u01b8\u0003\u0002\u0002\u0002>\u01ba",
    "\u0003\u0002\u0002\u0002@\u01c3\u0003\u0002\u0002\u0002B\u01c5\u0003",
    "\u0002\u0002\u0002D\u01d2\u0003\u0002\u0002\u0002F\u01d9\u0003\u0002",
    "\u0002\u0002H\u01e0\u0003\u0002\u0002\u0002J\u01e4\u0003\u0002\u0002",
    "\u0002L\u01e8\u0003\u0002\u0002\u0002N\u01f3\u0003\u0002\u0002\u0002",
    "P\u01ff\u0003\u0002\u0002\u0002R\u0209\u0003\u0002\u0002\u0002T\u020b",
    "\u0003\u0002\u0002\u0002V\u0211\u0003\u0002\u0002\u0002X\u0214\u0003",
    "\u0002\u0002\u0002Z\u0217\u0003\u0002\u0002\u0002\\\u0229\u0003\u0002",
    "\u0002\u0002^\u022b\u0003\u0002\u0002\u0002`\u022e\u0003\u0002\u0002",
    "\u0002b\u0231\u0003\u0002\u0002\u0002d\u0234\u0003\u0002\u0002\u0002",
    "f\u0236\u0003\u0002\u0002\u0002h\u0238\u0003\u0002\u0002\u0002j\u023a",
    "\u0003\u0002\u0002\u0002l\u023c\u0003\u0002\u0002\u0002n\u024b\u0003",
    "\u0002\u0002\u0002p\u024d\u0003\u0002\u0002\u0002r\u0250\u0003\u0002",
    "\u0002\u0002t\u0252\u0003\u0002\u0002\u0002v\u0254\u0003\u0002\u0002",
    "\u0002x\u0095\u0007\n\u0002\u0002y{\u0007\t\u0002\u0002zy\u0003\u0002",
    "\u0002\u0002{~\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003",
    "\u0002\u0002\u0002}\u0080\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002",
    "\u0002\u007f\u0081\u0005\u0004\u0003\u0002\u0080\u007f\u0003\u0002\u0002",
    "\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u008a\u0003\u0002\u0002",
    "\u0002\u0082\u0084\u0007\t\u0002\u0002\u0083\u0082\u0003\u0002\u0002",
    "\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002",
    "\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002",
    "\u0002\u0087\u0089\u0005\u0004\u0003\u0002\u0088\u0083\u0003\u0002\u0002",
    "\u0002\u0089\u008c\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u0090\u0003\u0002\u0002",
    "\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u008f\u0007\t\u0002",
    "\u0002\u008e\u008d\u0003\u0002\u0002\u0002\u008f\u0092\u0003\u0002\u0002",
    "\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002",
    "\u0002\u0091\u0093\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002",
    "\u0002\u0093\u0095\u0007\u0002\u0002\u0003\u0094x\u0003\u0002\u0002",
    "\u0002\u0094|\u0003\u0002\u0002\u0002\u0095\u0003\u0003\u0002\u0002",
    "\u0002\u0096\u009f\u0005\n\u0006\u0002\u0097\u009f\u0005\u0010\t\u0002",
    "\u0098\u009f\u0005\u0014\u000b\u0002\u0099\u009f\u0005\u0006\u0004\u0002",
    "\u009a\u009f\u0005\u0018\r\u0002\u009b\u009f\u0005\u001e\u0010\u0002",
    "\u009c\u009f\u0005\u001c\u000f\u0002\u009d\u009f\u0005\u001a\u000e\u0002",
    "\u009e\u0096\u0003\u0002\u0002\u0002\u009e\u0097\u0003\u0002\u0002\u0002",
    "\u009e\u0098\u0003\u0002\u0002\u0002\u009e\u0099\u0003\u0002\u0002\u0002",
    "\u009e\u009a\u0003\u0002\u0002\u0002\u009e\u009b\u0003\u0002\u0002\u0002",
    "\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009d\u0003\u0002\u0002\u0002",
    "\u009f\u0005\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007\u001b\u0002\u0002",
    "\u00a1\u00a2\u0007\n\u0002\u0002\u00a2\u00a3\u0005t;\u0002\u00a3\u00a4",
    "\u0007\n\u0002\u0002\u00a4\u00a5\u0007\u0010\u0002\u0002\u00a5\u00aa",
    "\u0005\b\u0005\u0002\u00a6\u00a7\u0007\u0004\u0002\u0002\u00a7\u00a9",
    "\u0005\b\u0005\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a9\u00ac",
    "\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab",
    "\u0003\u0002\u0002\u0002\u00ab\u00ad\u0003\u0002\u0002\u0002\u00ac\u00aa",
    "\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007\u0011\u0002\u0002\u00ae\u0007",
    "\u0003\u0002\u0002\u0002\u00af\u00b2\u0005V,\u0002\u00b0\u00b2\u0005",
    "v<\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003\u0002",
    "\u0002\u0002\u00b2\t\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007\u001c",
    "\u0002\u0002\u00b4\u00d1\u0007\n\u0002\u0002\u00b5\u00ba\u0005\f\u0007",
    "\u0002\u00b6\u00b7\u0007\u0004\u0002\u0002\u00b7\u00b9\u0005\f\u0007",
    "\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002\u0002",
    "\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002",
    "\u0002\u00bb\u00d2\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002",
    "\u0002\u00bd\u00bf\u0005t;\u0002\u00be\u00c0\u0007\n\u0002\u0002\u00bf",
    "\u00be\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0",
    "\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c5\u0007\u000b\u0002\u0002\u00c2",
    "\u00c3\u0005\u000e\b\u0002\u00c3\u00c4\u0007\u0004\u0002\u0002\u00c4",
    "\u00c6\u0003\u0002\u0002\u0002\u00c5\u00c2\u0003\u0002\u0002\u0002\u00c5",
    "\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7",
    "\u00cc\u0005r:\u0002\u00c8\u00c9\u0007\u0004\u0002\u0002\u00c9\u00cb",
    "\u0005r:\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00cb\u00ce\u0003",
    "\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003",
    "\u0002\u0002\u0002\u00cd\u00cf\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003",
    "\u0002\u0002\u0002\u00cf\u00d0\u0007\f\u0002\u0002\u00d0\u00d2\u0003",
    "\u0002\u0002\u0002\u00d1\u00b5\u0003\u0002\u0002\u0002\u00d1\u00bd\u0003",
    "\u0002\u0002\u0002\u00d2\u000b\u0003\u0002\u0002\u0002\u00d3\u00d5\u0007",
    "\u0012\u0002\u0002\u00d4\u00d3\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003",
    "\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d7\u0005",
    "t;\u0002\u00d7\r\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007\r\u0002\u0002",
    "\u00d9\u00da\u0005r:\u0002\u00da\u000f\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\u0007\u001d\u0002\u0002\u00dc\u00dd\u0007\n\u0002\u0002\u00dd",
    "\u00de\u0005v<\u0002\u00de\u00e4\u0007\n\u0002\u0002\u00df\u00e0\u0005",
    "\u0012\n\u0002\u00e0\u00e1\u0007\n\u0002\u0002\u00e1\u00e3\u0003\u0002",
    "\u0002\u0002\u00e2\u00df\u0003\u0002\u0002\u0002\u00e3\u00e6\u0003\u0002",
    "\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002",
    "\u0002\u0002\u00e5\u00e7\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003\u0002",
    "\u0002\u0002\u00e7\u00ec\u0005l7\u0002\u00e8\u00e9\u0007\n\u0002\u0002",
    "\u00e9\u00eb\u0005\u0012\n\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002",
    "\u00eb\u00ee\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002",
    "\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u0011\u0003\u0002\u0002\u0002",
    "\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef\u00f0\t\u0002\u0002\u0002",
    "\u00f0\u0013\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007 \u0002\u0002",
    "\u00f2\u00f3\u0007\n\u0002\u0002\u00f3\u00fd\u0005\u0016\f\u0002\u00f4",
    "\u00f5\u0007\u0004\u0002\u0002\u00f5\u00f7\u0005\u0016\f\u0002\u00f6",
    "\u00f4\u0003\u0002\u0002\u0002\u00f7\u00fa\u0003\u0002\u0002\u0002\u00f8",
    "\u00f6\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9",
    "\u00fe\u0003\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fb",
    "\u00fc\u0007\n\u0002\u0002\u00fc\u00fe\u0005l7\u0002\u00fd\u00f8\u0003",
    "\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fe\u0015\u0003",
    "\u0002\u0002\u0002\u00ff\u0100\u0005v<\u0002\u0100\u0017\u0003\u0002",
    "\u0002\u0002\u0101\u0104\u0007!\u0002\u0002\u0102\u0103\u0007\n\u0002",
    "\u0002\u0103\u0105\u0007&\u0002\u0002\u0104\u0102\u0003\u0002\u0002",
    "\u0002\u0104\u0105\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002",
    "\u0002\u0106\u0108\u0007\u0015\u0002\u0002\u0107\u0109\u0007\t\u0002",
    "\u0002\u0108\u0107\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002",
    "\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002",
    "\u0002\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u010d\u0005$\u0013",
    "\u0002\u010d\u0019\u0003\u0002\u0002\u0002\u010e\u0111\u0007\"\u0002",
    "\u0002\u010f\u0110\u0007\n\u0002\u0002\u0110\u0112\u0007&\u0002\u0002",
    "\u0111\u010f\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002",
    "\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u0115\u0007\u0015\u0002\u0002",
    "\u0114\u0116\u0007\t\u0002\u0002\u0115\u0114\u0003\u0002\u0002\u0002",
    "\u0116\u0117\u0003\u0002\u0002\u0002\u0117\u0115\u0003\u0002\u0002\u0002",
    "\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002",
    "\u0119\u011a\u0005$\u0013\u0002\u011a\u001b\u0003\u0002\u0002\u0002",
    "\u011b\u011c\u0007\"\u0002\u0002\u011c\u011d\u0007\u0014\u0002\u0002",
    "\u011d\u0120\u0005,\u0017\u0002\u011e\u011f\u0007\n\u0002\u0002\u011f",
    "\u0121\u0007&\u0002\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0120",
    "\u0121\u0003\u0002\u0002\u0002\u0121\u0122\u0003\u0002\u0002\u0002\u0122",
    "\u0124\u0007\u0015\u0002\u0002\u0123\u0125\u0007\t\u0002\u0002\u0124",
    "\u0123\u0003\u0002\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126",
    "\u0124\u0003\u0002\u0002\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127",
    "\u0128\u0003\u0002\u0002\u0002\u0128\u0129\u0005$\u0013\u0002\u0129",
    "\u001d\u0003\u0002\u0002\u0002\u012a\u012f\u0005,\u0017\u0002\u012b",
    "\u012c\u0007\n\u0002\u0002\u012c\u012e\u0005 \u0011\u0002\u012d\u012b",
    "\u0003\u0002\u0002\u0002\u012e\u0131\u0003\u0002\u0002\u0002\u012f\u012d",
    "\u0003\u0002\u0002\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u0130\u0133",
    "\u0003\u0002\u0002\u0002\u0131\u012f\u0003\u0002\u0002\u0002\u0132\u0134",
    "\u0007\u0015\u0002\u0002\u0133\u0132\u0003\u0002\u0002\u0002\u0133\u0134",
    "\u0003\u0002\u0002\u0002\u0134\u0136\u0003\u0002\u0002\u0002\u0135\u0137",
    "\u0007\t\u0002\u0002\u0136\u0135\u0003\u0002\u0002\u0002\u0137\u0138",
    "\u0003\u0002\u0002\u0002\u0138\u0136\u0003\u0002\u0002\u0002\u0138\u0139",
    "\u0003\u0002\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u013a\u013b",
    "\u0005$\u0013\u0002\u013b\u001f\u0003\u0002\u0002\u0002\u013c\u013f",
    "\u0005\"\u0012\u0002\u013d\u013f\u0007%\u0002\u0002\u013e\u013c\u0003",
    "\u0002\u0002\u0002\u013e\u013d\u0003\u0002\u0002\u0002\u013f!\u0003",
    "\u0002\u0002\u0002\u0140\u0143\u0005V,\u0002\u0141\u0143\u0005Z.\u0002",
    "\u0142\u0140\u0003\u0002\u0002\u0002\u0142\u0141\u0003\u0002\u0002\u0002",
    "\u0143#\u0003\u0002\u0002\u0002\u0144\u0158\u0005&\u0014\u0002\u0145",
    "\u0147\u0007\t\u0002\u0002\u0146\u0145\u0003\u0002\u0002\u0002\u0147",
    "\u0148\u0003\u0002\u0002\u0002\u0148\u0146\u0003\u0002\u0002\u0002\u0148",
    "\u0149\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a",
    "\u014b\u0005(\u0015\u0002\u014b\u0152\u0007\u0015\u0002\u0002\u014c",
    "\u0153\u0007\n\u0002\u0002\u014d\u014f\u0007\t\u0002\u0002\u014e\u014d",
    "\u0003\u0002\u0002\u0002\u014f\u0150\u0003\u0002\u0002\u0002\u0150\u014e",
    "\u0003\u0002\u0002\u0002\u0150\u0151\u0003\u0002\u0002\u0002\u0151\u0153",
    "\u0003\u0002\u0002\u0002\u0152\u014c\u0003\u0002\u0002\u0002\u0152\u014e",
    "\u0003\u0002\u0002\u0002\u0153\u0154\u0003\u0002\u0002\u0002\u0154\u0155",
    "\u0005&\u0014\u0002\u0155\u0157\u0003\u0002\u0002\u0002\u0156\u0146",
    "\u0003\u0002\u0002\u0002\u0157\u015a\u0003\u0002\u0002\u0002\u0158\u0156",
    "\u0003\u0002\u0002\u0002\u0158\u0159\u0003\u0002\u0002\u0002\u0159%",
    "\u0003\u0002\u0002\u0002\u015a\u0158\u0003\u0002\u0002\u0002\u015b\u016d",
    "\u0005*\u0016\u0002\u015c\u0160\u0007\u000b\u0002\u0002\u015d\u015f",
    "\u0007\t\u0002\u0002\u015e\u015d\u0003\u0002\u0002\u0002\u015f\u0162",
    "\u0003\u0002\u0002\u0002\u0160\u015e\u0003\u0002\u0002\u0002\u0160\u0161",
    "\u0003\u0002\u0002\u0002\u0161\u0163\u0003\u0002\u0002\u0002\u0162\u0160",
    "\u0003\u0002\u0002\u0002\u0163\u0167\u0005$\u0013\u0002\u0164\u0166",
    "\u0007\t\u0002\u0002\u0165\u0164\u0003\u0002\u0002\u0002\u0166\u0169",
    "\u0003\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002\u0002\u0167\u0168",
    "\u0003\u0002\u0002\u0002\u0168\u016a\u0003\u0002\u0002\u0002\u0169\u0167",
    "\u0003\u0002\u0002\u0002\u016a\u016b\u0007\f\u0002\u0002\u016b\u016d",
    "\u0003\u0002\u0002\u0002\u016c\u015b\u0003\u0002\u0002\u0002\u016c\u015c",
    "\u0003\u0002\u0002\u0002\u016d\'\u0003\u0002\u0002\u0002\u016e\u016f",
    "\t\u0003\u0002\u0002\u016f)\u0003\u0002\u0002\u0002\u0170\u0179\u0005",
    ".\u0018\u0002\u0171\u0173\u0007\t\u0002\u0002\u0172\u0171\u0003\u0002",
    "\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174\u0172\u0003\u0002",
    "\u0002\u0002\u0174\u0175\u0003\u0002\u0002\u0002\u0175\u0176\u0003\u0002",
    "\u0002\u0002\u0176\u0178\u0005.\u0018\u0002\u0177\u0172\u0003\u0002",
    "\u0002\u0002\u0178\u017b\u0003\u0002\u0002\u0002\u0179\u0177\u0003\u0002",
    "\u0002\u0002\u0179\u017a\u0003\u0002\u0002\u0002\u017a+\u0003\u0002",
    "\u0002\u0002\u017b\u0179\u0003\u0002\u0002\u0002\u017c\u0181\u0007)",
    "\u0002\u0002\u017d\u017e\u0007\u0014\u0002\u0002\u017e\u0180\t\u0004",
    "\u0002\u0002\u017f\u017d\u0003\u0002\u0002\u0002\u0180\u0183\u0003\u0002",
    "\u0002\u0002\u0181\u017f\u0003\u0002\u0002\u0002\u0181\u0182\u0003\u0002",
    "\u0002\u0002\u0182-\u0003\u0002\u0002\u0002\u0183\u0181\u0003\u0002",
    "\u0002\u0002\u0184\u0191\u0007\'\u0002\u0002\u0185\u0186\u00054\u001b",
    "\u0002\u0186\u0187\u0007\u0005\u0002\u0002\u0187\u018a\u00056\u001c",
    "\u0002\u0188\u0189\u0007\u0006\u0002\u0002\u0189\u018b\u00050\u0019",
    "\u0002\u018a\u0188\u0003\u0002\u0002\u0002\u018a\u018b\u0003\u0002\u0002",
    "\u0002\u018b\u018e\u0003\u0002\u0002\u0002\u018c\u018d\u0007\u0007\u0002",
    "\u0002\u018d\u018f\u00052\u001a\u0002\u018e\u018c\u0003\u0002\u0002",
    "\u0002\u018e\u018f\u0003\u0002\u0002\u0002\u018f\u0191\u0003\u0002\u0002",
    "\u0002\u0190\u0184\u0003\u0002\u0002\u0002\u0190\u0185\u0003\u0002\u0002",
    "\u0002\u0191/\u0003\u0002\u0002\u0002\u0192\u0195\u0005:\u001e\u0002",
    "\u0193\u0195\u00058\u001d\u0002\u0194\u0192\u0003\u0002\u0002\u0002",
    "\u0194\u0193\u0003\u0002\u0002\u0002\u01951\u0003\u0002\u0002\u0002",
    "\u0196\u0199\u0005:\u001e\u0002\u0197\u0199\u00058\u001d\u0002\u0198",
    "\u0196\u0003\u0002\u0002\u0002\u0198\u0197\u0003\u0002\u0002\u0002\u0199",
    "3\u0003\u0002\u0002\u0002\u019a\u019b\u0005@!\u0002\u019b5\u0003\u0002",
    "\u0002\u0002\u019c\u019d\u0005@!\u0002\u019d7\u0003\u0002\u0002\u0002",
    "\u019e\u019f\u0007\u0010\u0002\u0002\u019f\u01a4\u0005:\u001e\u0002",
    "\u01a0\u01a1\u0007\u0004\u0002\u0002\u01a1\u01a3\u0005:\u001e\u0002",
    "\u01a2\u01a0\u0003\u0002\u0002\u0002\u01a3\u01a6\u0003\u0002\u0002\u0002",
    "\u01a4\u01a2\u0003\u0002\u0002\u0002\u01a4\u01a5\u0003\u0002\u0002\u0002",
    "\u01a5\u01a7\u0003\u0002\u0002\u0002\u01a6\u01a4\u0003\u0002\u0002\u0002",
    "\u01a7\u01a8\u0007\u0011\u0002\u0002\u01a89\u0003\u0002\u0002\u0002",
    "\u01a9\u01aa\u0005<\u001f\u0002\u01aa\u01ab\u0007\n\u0002\u0002\u01ab",
    "\u01ad\u0003\u0002\u0002\u0002\u01ac\u01a9\u0003\u0002\u0002\u0002\u01ac",
    "\u01ad\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae",
    "\u01b1\u0007\b\u0002\u0002\u01af\u01b0\u0007\n\u0002\u0002\u01b0\u01b2",
    "\u0005> \u0002\u01b1\u01af\u0003\u0002\u0002\u0002\u01b1\u01b2\u0003",
    "\u0002\u0002\u0002\u01b2\u01b7\u0003\u0002\u0002\u0002\u01b3\u01b5\u0005",
    "<\u001f\u0002\u01b4\u01b3\u0003\u0002\u0002\u0002\u01b4\u01b5\u0003",
    "\u0002\u0002\u0002\u01b5\u01b7\u0003\u0002\u0002\u0002\u01b6\u01ac\u0003",
    "\u0002\u0002\u0002\u01b6\u01b4\u0003\u0002\u0002\u0002\u01b7;\u0003",
    "\u0002\u0002\u0002\u01b8\u01b9\u0005@!\u0002\u01b9=\u0003\u0002\u0002",
    "\u0002\u01ba\u01bb\u0005@!\u0002\u01bb?\u0003\u0002\u0002\u0002\u01bc",
    "\u01c4\u0005F$\u0002\u01bd\u01c4\u0005H%\u0002\u01be\u01c4\u0005J&\u0002",
    "\u01bf\u01c4\u0005L\'\u0002\u01c0\u01c4\u0005N(\u0002\u01c1\u01c4\u0005",
    "R*\u0002\u01c2\u01c4\u0005B\"\u0002\u01c3\u01bc\u0003\u0002\u0002\u0002",
    "\u01c3\u01bd\u0003\u0002\u0002\u0002\u01c3\u01be\u0003\u0002\u0002\u0002",
    "\u01c3\u01bf\u0003\u0002\u0002\u0002\u01c3\u01c0\u0003\u0002\u0002\u0002",
    "\u01c3\u01c1\u0003\u0002\u0002\u0002\u01c3\u01c2\u0003\u0002\u0002\u0002",
    "\u01c4A\u0003\u0002\u0002\u0002\u01c5\u01c8\u0005D#\u0002\u01c6\u01c7",
    "\u0007\n\u0002\u0002\u01c7\u01c9\u0005D#\u0002\u01c8\u01c6\u0003\u0002",
    "\u0002\u0002\u01c9\u01ca\u0003\u0002\u0002\u0002\u01ca\u01c8\u0003\u0002",
    "\u0002\u0002\u01ca\u01cb\u0003\u0002\u0002\u0002\u01cbC\u0003\u0002",
    "\u0002\u0002\u01cc\u01d3\u0005F$\u0002\u01cd\u01d3\u0005H%\u0002\u01ce",
    "\u01d3\u0005J&\u0002\u01cf\u01d3\u0005L\'\u0002\u01d0\u01d3\u0005N(",
    "\u0002\u01d1\u01d3\u0005R*\u0002\u01d2\u01cc\u0003\u0002\u0002\u0002",
    "\u01d2\u01cd\u0003\u0002\u0002\u0002\u01d2\u01ce\u0003\u0002\u0002\u0002",
    "\u01d2\u01cf\u0003\u0002\u0002\u0002\u01d2\u01d0\u0003\u0002\u0002\u0002",
    "\u01d2\u01d1\u0003\u0002\u0002\u0002\u01d3E\u0003\u0002\u0002\u0002",
    "\u01d4\u01da\u0005J&\u0002\u01d5\u01da\u0005L\'\u0002\u01d6\u01da\u0005",
    "T+\u0002\u01d7\u01da\u0005V,\u0002\u01d8\u01da\u0005Z.\u0002\u01d9\u01d4",
    "\u0003\u0002\u0002\u0002\u01d9\u01d5\u0003\u0002\u0002\u0002\u01d9\u01d6",
    "\u0003\u0002\u0002\u0002\u01d9\u01d7\u0003\u0002\u0002\u0002\u01d9\u01d8",
    "\u0003\u0002\u0002\u0002\u01da\u01db\u0003\u0002\u0002\u0002\u01db\u01dc",
    "\u0005X-\u0002\u01dcG\u0003\u0002\u0002\u0002\u01dd\u01e1\u0005J&\u0002",
    "\u01de\u01e1\u0005L\'\u0002\u01df\u01e1\u0005R*\u0002\u01e0\u01dd\u0003",
    "\u0002\u0002\u0002\u01e0\u01de\u0003\u0002\u0002\u0002\u01e0\u01df\u0003",
    "\u0002\u0002\u0002\u01e1\u01e2\u0003\u0002\u0002\u0002\u01e2\u01e3\u0005",
    "j6\u0002\u01e3I\u0003\u0002\u0002\u0002\u01e4\u01e5\u0007\u000b\u0002",
    "\u0002\u01e5\u01e6\u0005@!\u0002\u01e6\u01e7\u0007\f\u0002\u0002\u01e7",
    "K\u0003\u0002\u0002\u0002\u01e8\u01e9\u0007\u0010\u0002\u0002\u01e9",
    "\u01ee\u0005@!\u0002\u01ea\u01eb\u0007\u0004\u0002\u0002\u01eb\u01ed",
    "\u0005@!\u0002\u01ec\u01ea\u0003\u0002\u0002\u0002\u01ed\u01f0\u0003",
    "\u0002\u0002\u0002\u01ee\u01ec\u0003\u0002\u0002\u0002\u01ee\u01ef\u0003",
    "\u0002\u0002\u0002\u01ef\u01f1\u0003\u0002\u0002\u0002\u01f0\u01ee\u0003",
    "\u0002\u0002\u0002\u01f1\u01f2\u0007\u0011\u0002\u0002\u01f2M\u0003",
    "\u0002\u0002\u0002\u01f3\u01f6\u0005P)\u0002\u01f4\u01f5\u0007\u001a",
    "\u0002\u0002\u01f5\u01f7\u0005P)\u0002\u01f6\u01f4\u0003\u0002\u0002",
    "\u0002\u01f7\u01f8\u0003\u0002\u0002\u0002\u01f8\u01f6\u0003\u0002\u0002",
    "\u0002\u01f8\u01f9\u0003\u0002\u0002\u0002\u01f9O\u0003\u0002\u0002",
    "\u0002\u01fa\u0200\u0005F$\u0002\u01fb\u0200\u0005H%\u0002\u01fc\u0200",
    "\u0005J&\u0002\u01fd\u0200\u0005L\'\u0002\u01fe\u0200\u0005R*\u0002",
    "\u01ff\u01fa\u0003\u0002\u0002\u0002\u01ff\u01fb\u0003\u0002\u0002\u0002",
    "\u01ff\u01fc\u0003\u0002\u0002\u0002\u01ff\u01fd\u0003\u0002\u0002\u0002",
    "\u01ff\u01fe\u0003\u0002\u0002\u0002\u0200Q\u0003\u0002\u0002\u0002",
    "\u0201\u020a\u0005T+\u0002\u0202\u020a\u0005V,\u0002\u0203\u020a\u0005",
    "X-\u0002\u0204\u020a\u0005Z.\u0002\u0205\u020a\u0005d3\u0002\u0206\u020a",
    "\u0005f4\u0002\u0207\u020a\u0005h5\u0002\u0208\u020a\u0005v<\u0002\u0209",
    "\u0201\u0003\u0002\u0002\u0002\u0209\u0202\u0003\u0002\u0002\u0002\u0209",
    "\u0203\u0003\u0002\u0002\u0002\u0209\u0204\u0003\u0002\u0002\u0002\u0209",
    "\u0205\u0003\u0002\u0002\u0002\u0209\u0206\u0003\u0002\u0002\u0002\u0209",
    "\u0207\u0003\u0002\u0002\u0002\u0209\u0208\u0003\u0002\u0002\u0002\u020a",
    "S\u0003\u0002\u0002\u0002\u020b\u020f\u0007\u0016\u0002\u0002\u020c",
    "\u0210\u0005V,\u0002\u020d\u0210\u0005X-\u0002\u020e\u0210\u0005v<\u0002",
    "\u020f\u020c\u0003\u0002\u0002\u0002\u020f\u020d\u0003\u0002\u0002\u0002",
    "\u020f\u020e\u0003\u0002\u0002\u0002\u0210U\u0003\u0002\u0002\u0002",
    "\u0211\u0212\u0007\u0019\u0002\u0002\u0212\u0213\u0005t;\u0002\u0213",
    "W\u0003\u0002\u0002\u0002\u0214\u0215\u0007\u0017\u0002\u0002\u0215",
    "\u0216\u0007(\u0002\u0002\u0216Y\u0003\u0002\u0002\u0002\u0217\u0219",
    "\u0007\u000e\u0002\u0002\u0218\u021a\u0005\\/\u0002\u0219\u0218\u0003",
    "\u0002\u0002\u0002\u0219\u021a\u0003\u0002\u0002\u0002\u021a\u021f\u0003",
    "\u0002\u0002\u0002\u021b\u021c\u0007\n\u0002\u0002\u021c\u021e\u0005",
    "\\/\u0002\u021d\u021b\u0003\u0002\u0002\u0002\u021e\u0221\u0003\u0002",
    "\u0002\u0002\u021f\u021d\u0003\u0002\u0002\u0002\u021f\u0220\u0003\u0002",
    "\u0002\u0002\u0220\u0222\u0003\u0002\u0002\u0002\u0221\u021f\u0003\u0002",
    "\u0002\u0002\u0222\u0223\u0007\u000f\u0002\u0002\u0223[\u0003\u0002",
    "\u0002\u0002\u0224\u022a\u0005p9\u0002\u0225\u022a\u0005r:\u0002\u0226",
    "\u022a\u0005^0\u0002\u0227\u022a\u0005`1\u0002\u0228\u022a\u0005b2\u0002",
    "\u0229\u0224\u0003\u0002\u0002\u0002\u0229\u0225\u0003\u0002\u0002\u0002",
    "\u0229\u0226\u0003\u0002\u0002\u0002\u0229\u0227\u0003\u0002\u0002\u0002",
    "\u0229\u0228\u0003\u0002\u0002\u0002\u022a]\u0003\u0002\u0002\u0002",
    "\u022b\u022c\u0007\u0016\u0002\u0002\u022c\u022d\u0005t;\u0002\u022d",
    "_\u0003\u0002\u0002\u0002\u022e\u022f\u0007\r\u0002\u0002\u022f\u0230",
    "\u0005t;\u0002\u0230a\u0003\u0002\u0002\u0002\u0231\u0232\u0007\u0017",
    "\u0002\u0002\u0232\u0233\u0005t;\u0002\u0233c\u0003\u0002\u0002\u0002",
    "\u0234\u0235\u0007\r\u0002\u0002\u0235e\u0003\u0002\u0002\u0002\u0236",
    "\u0237\u0007\u0017\u0002\u0002\u0237g\u0003\u0002\u0002\u0002\u0238",
    "\u0239\u0007\u0018\u0002\u0002\u0239i\u0003\u0002\u0002\u0002\u023a",
    "\u023b\t\u0005\u0002\u0002\u023bk\u0003\u0002\u0002\u0002\u023c\u023e",
    "\u0007\u000e\u0002\u0002\u023d\u023f\u0005n8\u0002\u023e\u023d\u0003",
    "\u0002\u0002\u0002\u023e\u023f\u0003\u0002\u0002\u0002\u023f\u0244\u0003",
    "\u0002\u0002\u0002\u0240\u0241\u0007\n\u0002\u0002\u0241\u0243\u0005",
    "n8\u0002\u0242\u0240\u0003\u0002\u0002\u0002\u0243\u0246\u0003\u0002",
    "\u0002\u0002\u0244\u0242\u0003\u0002\u0002\u0002\u0244\u0245\u0003\u0002",
    "\u0002\u0002\u0245\u0247\u0003\u0002\u0002\u0002\u0246\u0244\u0003\u0002",
    "\u0002\u0002\u0247\u0248\u0007\u000f\u0002\u0002\u0248m\u0003\u0002",
    "\u0002\u0002\u0249\u024c\u0005p9\u0002\u024a\u024c\u0005r:\u0002\u024b",
    "\u0249\u0003\u0002\u0002\u0002\u024b\u024a\u0003\u0002\u0002\u0002\u024c",
    "o\u0003\u0002\u0002\u0002\u024d\u024e\t\u0006\u0002\u0002\u024e\u024f",
    "\u0005t;\u0002\u024fq\u0003\u0002\u0002\u0002\u0250\u0251\u0005t;\u0002",
    "\u0251s\u0003\u0002\u0002\u0002\u0252\u0253\u0007)\u0002\u0002\u0253",
    "u\u0003\u0002\u0002\u0002\u0254\u0256\t\u0007\u0002\u0002\u0255\u0257",
    "\u0007\u0016\u0002\u0002\u0256\u0255\u0003\u0002\u0002\u0002\u0256\u0257",
    "\u0003\u0002\u0002\u0002\u0257w\u0003\u0002\u0002\u0002E|\u0080\u0085",
    "\u008a\u0090\u0094\u009e\u00aa\u00b1\u00ba\u00bf\u00c5\u00cc\u00d1\u00d4",
    "\u00e4\u00ec\u00f8\u00fd\u0104\u010a\u0111\u0117\u0120\u0126\u012f\u0133",
    "\u0138\u013e\u0142\u0148\u0150\u0152\u0158\u0160\u0167\u016c\u0174\u0179",
    "\u0181\u018a\u018e\u0190\u0194\u0198\u01a4\u01ac\u01b1\u01b4\u01b6\u01c3",
    "\u01ca\u01d2\u01d9\u01e0\u01ee\u01f8\u01ff\u0209\u020f\u0219\u021f\u0229",
    "\u023e\u0244\u024b\u0256"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, "'_'", null, null, 
                     "'('", "')'", "'*'", "'['", "']'", "'{'", "'}'", "'+'", 
                     "'?'", "'-'", "':'", "'!'", "'$'", "'$$'", "'@'", "'&'" ];

var symbolicNames = [ null, "COMMENT", "SEP", "CHANGE", "CONDITION", "EXCLUSION", 
                      "ANCHOR", "NEWLINE", "WHITESPACE", "O_PAREN", "C_PAREN", 
                      "NULL", "MATRIX_START", "MATRIX_END", "LIST_START", 
                      "LIST_END", "AT_LEAST_ONE", "OPTIONAL", "HYPHEN", 
                      "RULE_START", "NEGATION", "WORD_BOUNDARY", "BETWEEN_WORDS", 
                      "CLASSREF", "INTERSECTION", "CLASS_DECL", "FEATURE_DECL", 
                      "DIACRITIC", "DIA_BEFORE", "DIA_FLOATING", "SYMBOL", 
                      "DEROMANIZER", "ROMANIZER", "ALL_MATCHING", "FIRST_MATCHING", 
                      "PROPAGATE", "LITERAL", "UNCHANGED", "NUMBER", "NAME", 
                      "STR1", "STR" ];

var ruleNames =  [ "lscFile", "statement", "classDecl", "classElement", 
                   "featureDecl", "plusFeature", "nullAlias", "diacriticDecl", 
                   "diacriticModifier", "symbolDecl", "symbolName", "deromanizer", 
                   "romanizer", "interRomanizer", "changeRule", "changeRuleModifier", 
                   "filter", "block", "blockElement", "blockType", "expressionList", 
                   "ruleName", "expression", "condition", "exclusion", "from", 
                   "to", "environmentList", "environment", "environmentBefore", 
                   "environmentAfter", "ruleElement", "sequence", "sequenceElement", 
                   "capture", "repeater", "group", "list", "intersection", 
                   "intersectionElement", "simple", "negated", "classRef", 
                   "captureRef", "fancyMatrix", "fancyValue", "negatedValue", 
                   "absentFeature", "featureVariable", "empty", "boundary", 
                   "betweenWords", "repeaterType", "matrix", "matrixValue", 
                   "plusFeatureValue", "featureValue", "name", "text" ];

function LscParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LscParser.prototype = Object.create(antlr4.Parser.prototype);
LscParser.prototype.constructor = LscParser;

Object.defineProperty(LscParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LscParser.EOF = antlr4.Token.EOF;
LscParser.COMMENT = 1;
LscParser.SEP = 2;
LscParser.CHANGE = 3;
LscParser.CONDITION = 4;
LscParser.EXCLUSION = 5;
LscParser.ANCHOR = 6;
LscParser.NEWLINE = 7;
LscParser.WHITESPACE = 8;
LscParser.O_PAREN = 9;
LscParser.C_PAREN = 10;
LscParser.NULL = 11;
LscParser.MATRIX_START = 12;
LscParser.MATRIX_END = 13;
LscParser.LIST_START = 14;
LscParser.LIST_END = 15;
LscParser.AT_LEAST_ONE = 16;
LscParser.OPTIONAL = 17;
LscParser.HYPHEN = 18;
LscParser.RULE_START = 19;
LscParser.NEGATION = 20;
LscParser.WORD_BOUNDARY = 21;
LscParser.BETWEEN_WORDS = 22;
LscParser.CLASSREF = 23;
LscParser.INTERSECTION = 24;
LscParser.CLASS_DECL = 25;
LscParser.FEATURE_DECL = 26;
LscParser.DIACRITIC = 27;
LscParser.DIA_BEFORE = 28;
LscParser.DIA_FLOATING = 29;
LscParser.SYMBOL = 30;
LscParser.DEROMANIZER = 31;
LscParser.ROMANIZER = 32;
LscParser.ALL_MATCHING = 33;
LscParser.FIRST_MATCHING = 34;
LscParser.PROPAGATE = 35;
LscParser.LITERAL = 36;
LscParser.UNCHANGED = 37;
LscParser.NUMBER = 38;
LscParser.NAME = 39;
LscParser.STR1 = 40;
LscParser.STR = 41;

LscParser.RULE_lscFile = 0;
LscParser.RULE_statement = 1;
LscParser.RULE_classDecl = 2;
LscParser.RULE_classElement = 3;
LscParser.RULE_featureDecl = 4;
LscParser.RULE_plusFeature = 5;
LscParser.RULE_nullAlias = 6;
LscParser.RULE_diacriticDecl = 7;
LscParser.RULE_diacriticModifier = 8;
LscParser.RULE_symbolDecl = 9;
LscParser.RULE_symbolName = 10;
LscParser.RULE_deromanizer = 11;
LscParser.RULE_romanizer = 12;
LscParser.RULE_interRomanizer = 13;
LscParser.RULE_changeRule = 14;
LscParser.RULE_changeRuleModifier = 15;
LscParser.RULE_filter = 16;
LscParser.RULE_block = 17;
LscParser.RULE_blockElement = 18;
LscParser.RULE_blockType = 19;
LscParser.RULE_expressionList = 20;
LscParser.RULE_ruleName = 21;
LscParser.RULE_expression = 22;
LscParser.RULE_condition = 23;
LscParser.RULE_exclusion = 24;
LscParser.RULE_from = 25;
LscParser.RULE_to = 26;
LscParser.RULE_environmentList = 27;
LscParser.RULE_environment = 28;
LscParser.RULE_environmentBefore = 29;
LscParser.RULE_environmentAfter = 30;
LscParser.RULE_ruleElement = 31;
LscParser.RULE_sequence = 32;
LscParser.RULE_sequenceElement = 33;
LscParser.RULE_capture = 34;
LscParser.RULE_repeater = 35;
LscParser.RULE_group = 36;
LscParser.RULE_list = 37;
LscParser.RULE_intersection = 38;
LscParser.RULE_intersectionElement = 39;
LscParser.RULE_simple = 40;
LscParser.RULE_negated = 41;
LscParser.RULE_classRef = 42;
LscParser.RULE_captureRef = 43;
LscParser.RULE_fancyMatrix = 44;
LscParser.RULE_fancyValue = 45;
LscParser.RULE_negatedValue = 46;
LscParser.RULE_absentFeature = 47;
LscParser.RULE_featureVariable = 48;
LscParser.RULE_empty = 49;
LscParser.RULE_boundary = 50;
LscParser.RULE_betweenWords = 51;
LscParser.RULE_repeaterType = 52;
LscParser.RULE_matrix = 53;
LscParser.RULE_matrixValue = 54;
LscParser.RULE_plusFeatureValue = 55;
LscParser.RULE_featureValue = 56;
LscParser.RULE_name = 57;
LscParser.RULE_text = 58;


function LscFileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_lscFile;
    return this;
}

LscFileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LscFileContext.prototype.constructor = LscFileContext;

LscFileContext.prototype.WHITESPACE = function() {
    return this.getToken(LscParser.WHITESPACE, 0);
};

LscFileContext.prototype.EOF = function() {
    return this.getToken(LscParser.EOF, 0);
};

LscFileContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.NEWLINE);
    } else {
        return this.getToken(LscParser.NEWLINE, i);
    }
};


LscFileContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

LscFileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitLscFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.LscFileContext = LscFileContext;

LscParser.prototype.lscFile = function() {

    var localctx = new LscFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LscParser.RULE_lscFile);
    var _la = 0; // Token type
    try {
        this.state = 146;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LscParser.WHITESPACE:
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this.match(LscParser.WHITESPACE);
            break;
        case LscParser.EOF:
        case LscParser.NEWLINE:
        case LscParser.CLASS_DECL:
        case LscParser.FEATURE_DECL:
        case LscParser.DIACRITIC:
        case LscParser.SYMBOL:
        case LscParser.DEROMANIZER:
        case LscParser.ROMANIZER:
        case LscParser.NAME:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 119;
                    this.match(LscParser.NEWLINE); 
                }
                this.state = 124;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
            }

            this.state = 126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 25)) & ~0x1f) == 0 && ((1 << (_la - 25)) & ((1 << (LscParser.CLASS_DECL - 25)) | (1 << (LscParser.FEATURE_DECL - 25)) | (1 << (LscParser.DIACRITIC - 25)) | (1 << (LscParser.SYMBOL - 25)) | (1 << (LscParser.DEROMANIZER - 25)) | (1 << (LscParser.ROMANIZER - 25)) | (1 << (LscParser.NAME - 25)))) !== 0)) {
                this.state = 125;
                this.statement();
            }

            this.state = 136;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 129; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        this.state = 128;
                        this.match(LscParser.NEWLINE);
                        this.state = 131; 
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while(_la===LscParser.NEWLINE);
                    this.state = 133;
                    this.statement(); 
                }
                this.state = 138;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
            }

            this.state = 142;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LscParser.NEWLINE) {
                this.state = 139;
                this.match(LscParser.NEWLINE);
                this.state = 144;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 145;
            this.match(LscParser.EOF);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.featureDecl = function() {
    return this.getTypedRuleContext(FeatureDeclContext,0);
};

StatementContext.prototype.diacriticDecl = function() {
    return this.getTypedRuleContext(DiacriticDeclContext,0);
};

StatementContext.prototype.symbolDecl = function() {
    return this.getTypedRuleContext(SymbolDeclContext,0);
};

StatementContext.prototype.classDecl = function() {
    return this.getTypedRuleContext(ClassDeclContext,0);
};

StatementContext.prototype.deromanizer = function() {
    return this.getTypedRuleContext(DeromanizerContext,0);
};

StatementContext.prototype.changeRule = function() {
    return this.getTypedRuleContext(ChangeRuleContext,0);
};

StatementContext.prototype.interRomanizer = function() {
    return this.getTypedRuleContext(InterRomanizerContext,0);
};

StatementContext.prototype.romanizer = function() {
    return this.getTypedRuleContext(RomanizerContext,0);
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.StatementContext = StatementContext;

LscParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LscParser.RULE_statement);
    try {
        this.state = 156;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            this.featureDecl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this.diacriticDecl();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 150;
            this.symbolDecl();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 151;
            this.classDecl();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 152;
            this.deromanizer();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 153;
            this.changeRule();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 154;
            this.interRomanizer();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 155;
            this.romanizer();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClassDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_classDecl;
    return this;
}

ClassDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDeclContext.prototype.constructor = ClassDeclContext;

ClassDeclContext.prototype.CLASS_DECL = function() {
    return this.getToken(LscParser.CLASS_DECL, 0);
};

ClassDeclContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.WHITESPACE);
    } else {
        return this.getToken(LscParser.WHITESPACE, i);
    }
};


ClassDeclContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ClassDeclContext.prototype.LIST_START = function() {
    return this.getToken(LscParser.LIST_START, 0);
};

ClassDeclContext.prototype.classElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClassElementContext);
    } else {
        return this.getTypedRuleContext(ClassElementContext,i);
    }
};

ClassDeclContext.prototype.LIST_END = function() {
    return this.getToken(LscParser.LIST_END, 0);
};

ClassDeclContext.prototype.SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.SEP);
    } else {
        return this.getToken(LscParser.SEP, i);
    }
};


ClassDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitClassDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.ClassDeclContext = ClassDeclContext;

LscParser.prototype.classDecl = function() {

    var localctx = new ClassDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LscParser.RULE_classDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(LscParser.CLASS_DECL);
        this.state = 159;
        this.match(LscParser.WHITESPACE);
        this.state = 160;
        this.name();
        this.state = 161;
        this.match(LscParser.WHITESPACE);
        this.state = 162;
        this.match(LscParser.LIST_START);
        this.state = 163;
        this.classElement();
        this.state = 168;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LscParser.SEP) {
            this.state = 164;
            this.match(LscParser.SEP);
            this.state = 165;
            this.classElement();
            this.state = 170;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 171;
        this.match(LscParser.LIST_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClassElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_classElement;
    return this;
}

ClassElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassElementContext.prototype.constructor = ClassElementContext;

ClassElementContext.prototype.classRef = function() {
    return this.getTypedRuleContext(ClassRefContext,0);
};

ClassElementContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

ClassElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitClassElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.ClassElementContext = ClassElementContext;

LscParser.prototype.classElement = function() {

    var localctx = new ClassElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LscParser.RULE_classElement);
    try {
        this.state = 175;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LscParser.CLASSREF:
            this.enterOuterAlt(localctx, 1);
            this.state = 173;
            this.classRef();
            break;
        case LscParser.NAME:
        case LscParser.STR1:
        case LscParser.STR:
            this.enterOuterAlt(localctx, 2);
            this.state = 174;
            this.text();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FeatureDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_featureDecl;
    return this;
}

FeatureDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FeatureDeclContext.prototype.constructor = FeatureDeclContext;

FeatureDeclContext.prototype.FEATURE_DECL = function() {
    return this.getToken(LscParser.FEATURE_DECL, 0);
};

FeatureDeclContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.WHITESPACE);
    } else {
        return this.getToken(LscParser.WHITESPACE, i);
    }
};


FeatureDeclContext.prototype.plusFeature = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PlusFeatureContext);
    } else {
        return this.getTypedRuleContext(PlusFeatureContext,i);
    }
};

FeatureDeclContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

FeatureDeclContext.prototype.O_PAREN = function() {
    return this.getToken(LscParser.O_PAREN, 0);
};

FeatureDeclContext.prototype.featureValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FeatureValueContext);
    } else {
        return this.getTypedRuleContext(FeatureValueContext,i);
    }
};

FeatureDeclContext.prototype.C_PAREN = function() {
    return this.getToken(LscParser.C_PAREN, 0);
};

FeatureDeclContext.prototype.SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.SEP);
    } else {
        return this.getToken(LscParser.SEP, i);
    }
};


FeatureDeclContext.prototype.nullAlias = function() {
    return this.getTypedRuleContext(NullAliasContext,0);
};

FeatureDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitFeatureDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.FeatureDeclContext = FeatureDeclContext;

LscParser.prototype.featureDecl = function() {

    var localctx = new FeatureDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LscParser.RULE_featureDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(LscParser.FEATURE_DECL);
        this.state = 178;
        this.match(LscParser.WHITESPACE);
        this.state = 207;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.state = 179;
            this.plusFeature();
            this.state = 184;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LscParser.SEP) {
                this.state = 180;
                this.match(LscParser.SEP);
                this.state = 181;
                this.plusFeature();
                this.state = 186;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.state = 187;
            this.name();
            this.state = 189;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LscParser.WHITESPACE) {
                this.state = 188;
                this.match(LscParser.WHITESPACE);
            }

            this.state = 191;
            this.match(LscParser.O_PAREN);
            this.state = 195;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LscParser.NULL) {
                this.state = 192;
                this.nullAlias();
                this.state = 193;
                this.match(LscParser.SEP);
            }

            this.state = 197;
            this.featureValue();
            this.state = 202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LscParser.SEP) {
                this.state = 198;
                this.match(LscParser.SEP);
                this.state = 199;
                this.featureValue();
                this.state = 204;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 205;
            this.match(LscParser.C_PAREN);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PlusFeatureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_plusFeature;
    return this;
}

PlusFeatureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlusFeatureContext.prototype.constructor = PlusFeatureContext;

PlusFeatureContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

PlusFeatureContext.prototype.AT_LEAST_ONE = function() {
    return this.getToken(LscParser.AT_LEAST_ONE, 0);
};

PlusFeatureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitPlusFeature(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.PlusFeatureContext = PlusFeatureContext;

LscParser.prototype.plusFeature = function() {

    var localctx = new PlusFeatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LscParser.RULE_plusFeature);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LscParser.AT_LEAST_ONE) {
            this.state = 209;
            this.match(LscParser.AT_LEAST_ONE);
        }

        this.state = 212;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NullAliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_nullAlias;
    return this;
}

NullAliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NullAliasContext.prototype.constructor = NullAliasContext;

NullAliasContext.prototype.NULL = function() {
    return this.getToken(LscParser.NULL, 0);
};

NullAliasContext.prototype.featureValue = function() {
    return this.getTypedRuleContext(FeatureValueContext,0);
};

NullAliasContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitNullAlias(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.NullAliasContext = NullAliasContext;

LscParser.prototype.nullAlias = function() {

    var localctx = new NullAliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LscParser.RULE_nullAlias);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this.match(LscParser.NULL);
        this.state = 215;
        this.featureValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DiacriticDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_diacriticDecl;
    return this;
}

DiacriticDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DiacriticDeclContext.prototype.constructor = DiacriticDeclContext;

DiacriticDeclContext.prototype.DIACRITIC = function() {
    return this.getToken(LscParser.DIACRITIC, 0);
};

DiacriticDeclContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.WHITESPACE);
    } else {
        return this.getToken(LscParser.WHITESPACE, i);
    }
};


DiacriticDeclContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

DiacriticDeclContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};

DiacriticDeclContext.prototype.diacriticModifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DiacriticModifierContext);
    } else {
        return this.getTypedRuleContext(DiacriticModifierContext,i);
    }
};

DiacriticDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitDiacriticDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.DiacriticDeclContext = DiacriticDeclContext;

LscParser.prototype.diacriticDecl = function() {

    var localctx = new DiacriticDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LscParser.RULE_diacriticDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.match(LscParser.DIACRITIC);
        this.state = 218;
        this.match(LscParser.WHITESPACE);
        this.state = 219;
        this.text();
        this.state = 220;
        this.match(LscParser.WHITESPACE);
        this.state = 226;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LscParser.DIA_BEFORE || _la===LscParser.DIA_FLOATING) {
            this.state = 221;
            this.diacriticModifier();
            this.state = 222;
            this.match(LscParser.WHITESPACE);
            this.state = 228;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 229;
        this.matrix();
        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LscParser.WHITESPACE) {
            this.state = 230;
            this.match(LscParser.WHITESPACE);
            this.state = 231;
            this.diacriticModifier();
            this.state = 236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DiacriticModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_diacriticModifier;
    return this;
}

DiacriticModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DiacriticModifierContext.prototype.constructor = DiacriticModifierContext;

DiacriticModifierContext.prototype.DIA_BEFORE = function() {
    return this.getToken(LscParser.DIA_BEFORE, 0);
};

DiacriticModifierContext.prototype.DIA_FLOATING = function() {
    return this.getToken(LscParser.DIA_FLOATING, 0);
};

DiacriticModifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitDiacriticModifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.DiacriticModifierContext = DiacriticModifierContext;

LscParser.prototype.diacriticModifier = function() {

    var localctx = new DiacriticModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LscParser.RULE_diacriticModifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        _la = this._input.LA(1);
        if(!(_la===LscParser.DIA_BEFORE || _la===LscParser.DIA_FLOATING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SymbolDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_symbolDecl;
    return this;
}

SymbolDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolDeclContext.prototype.constructor = SymbolDeclContext;

SymbolDeclContext.prototype.SYMBOL = function() {
    return this.getToken(LscParser.SYMBOL, 0);
};

SymbolDeclContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.WHITESPACE);
    } else {
        return this.getToken(LscParser.WHITESPACE, i);
    }
};


SymbolDeclContext.prototype.symbolName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SymbolNameContext);
    } else {
        return this.getTypedRuleContext(SymbolNameContext,i);
    }
};

SymbolDeclContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};

SymbolDeclContext.prototype.SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.SEP);
    } else {
        return this.getToken(LscParser.SEP, i);
    }
};


SymbolDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitSymbolDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.SymbolDeclContext = SymbolDeclContext;

LscParser.prototype.symbolDecl = function() {

    var localctx = new SymbolDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LscParser.RULE_symbolDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        this.match(LscParser.SYMBOL);
        this.state = 240;
        this.match(LscParser.WHITESPACE);
        this.state = 241;
        this.symbolName();
        this.state = 251;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LscParser.EOF:
        case LscParser.SEP:
        case LscParser.NEWLINE:
            this.state = 246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LscParser.SEP) {
                this.state = 242;
                this.match(LscParser.SEP);
                this.state = 243;
                this.symbolName();
                this.state = 248;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case LscParser.WHITESPACE:
            this.state = 249;
            this.match(LscParser.WHITESPACE);
            this.state = 250;
            this.matrix();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SymbolNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_symbolName;
    return this;
}

SymbolNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolNameContext.prototype.constructor = SymbolNameContext;

SymbolNameContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

SymbolNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitSymbolName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.SymbolNameContext = SymbolNameContext;

LscParser.prototype.symbolName = function() {

    var localctx = new SymbolNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LscParser.RULE_symbolName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.text();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeromanizerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_deromanizer;
    return this;
}

DeromanizerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeromanizerContext.prototype.constructor = DeromanizerContext;

DeromanizerContext.prototype.DEROMANIZER = function() {
    return this.getToken(LscParser.DEROMANIZER, 0);
};

DeromanizerContext.prototype.RULE_START = function() {
    return this.getToken(LscParser.RULE_START, 0);
};

DeromanizerContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

DeromanizerContext.prototype.WHITESPACE = function() {
    return this.getToken(LscParser.WHITESPACE, 0);
};

DeromanizerContext.prototype.LITERAL = function() {
    return this.getToken(LscParser.LITERAL, 0);
};

DeromanizerContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.NEWLINE);
    } else {
        return this.getToken(LscParser.NEWLINE, i);
    }
};


DeromanizerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitDeromanizer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.DeromanizerContext = DeromanizerContext;

LscParser.prototype.deromanizer = function() {

    var localctx = new DeromanizerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, LscParser.RULE_deromanizer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.match(LscParser.DEROMANIZER);
        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LscParser.WHITESPACE) {
            this.state = 256;
            this.match(LscParser.WHITESPACE);
            this.state = 257;
            this.match(LscParser.LITERAL);
        }

        this.state = 260;
        this.match(LscParser.RULE_START);
        this.state = 262; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 261;
            this.match(LscParser.NEWLINE);
            this.state = 264; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===LscParser.NEWLINE);
        this.state = 266;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RomanizerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_romanizer;
    return this;
}

RomanizerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RomanizerContext.prototype.constructor = RomanizerContext;

RomanizerContext.prototype.ROMANIZER = function() {
    return this.getToken(LscParser.ROMANIZER, 0);
};

RomanizerContext.prototype.RULE_START = function() {
    return this.getToken(LscParser.RULE_START, 0);
};

RomanizerContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

RomanizerContext.prototype.WHITESPACE = function() {
    return this.getToken(LscParser.WHITESPACE, 0);
};

RomanizerContext.prototype.LITERAL = function() {
    return this.getToken(LscParser.LITERAL, 0);
};

RomanizerContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.NEWLINE);
    } else {
        return this.getToken(LscParser.NEWLINE, i);
    }
};


RomanizerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitRomanizer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.RomanizerContext = RomanizerContext;

LscParser.prototype.romanizer = function() {

    var localctx = new RomanizerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, LscParser.RULE_romanizer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.match(LscParser.ROMANIZER);
        this.state = 271;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LscParser.WHITESPACE) {
            this.state = 269;
            this.match(LscParser.WHITESPACE);
            this.state = 270;
            this.match(LscParser.LITERAL);
        }

        this.state = 273;
        this.match(LscParser.RULE_START);
        this.state = 275; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 274;
            this.match(LscParser.NEWLINE);
            this.state = 277; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===LscParser.NEWLINE);
        this.state = 279;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InterRomanizerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_interRomanizer;
    return this;
}

InterRomanizerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InterRomanizerContext.prototype.constructor = InterRomanizerContext;

InterRomanizerContext.prototype.ROMANIZER = function() {
    return this.getToken(LscParser.ROMANIZER, 0);
};

InterRomanizerContext.prototype.HYPHEN = function() {
    return this.getToken(LscParser.HYPHEN, 0);
};

InterRomanizerContext.prototype.ruleName = function() {
    return this.getTypedRuleContext(RuleNameContext,0);
};

InterRomanizerContext.prototype.RULE_START = function() {
    return this.getToken(LscParser.RULE_START, 0);
};

InterRomanizerContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

InterRomanizerContext.prototype.WHITESPACE = function() {
    return this.getToken(LscParser.WHITESPACE, 0);
};

InterRomanizerContext.prototype.LITERAL = function() {
    return this.getToken(LscParser.LITERAL, 0);
};

InterRomanizerContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.NEWLINE);
    } else {
        return this.getToken(LscParser.NEWLINE, i);
    }
};


InterRomanizerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitInterRomanizer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.InterRomanizerContext = InterRomanizerContext;

LscParser.prototype.interRomanizer = function() {

    var localctx = new InterRomanizerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, LscParser.RULE_interRomanizer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.match(LscParser.ROMANIZER);
        this.state = 282;
        this.match(LscParser.HYPHEN);
        this.state = 283;
        this.ruleName();
        this.state = 286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LscParser.WHITESPACE) {
            this.state = 284;
            this.match(LscParser.WHITESPACE);
            this.state = 285;
            this.match(LscParser.LITERAL);
        }

        this.state = 288;
        this.match(LscParser.RULE_START);
        this.state = 290; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 289;
            this.match(LscParser.NEWLINE);
            this.state = 292; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===LscParser.NEWLINE);
        this.state = 294;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ChangeRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_changeRule;
    return this;
}

ChangeRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChangeRuleContext.prototype.constructor = ChangeRuleContext;

ChangeRuleContext.prototype.ruleName = function() {
    return this.getTypedRuleContext(RuleNameContext,0);
};

ChangeRuleContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ChangeRuleContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.WHITESPACE);
    } else {
        return this.getToken(LscParser.WHITESPACE, i);
    }
};


ChangeRuleContext.prototype.changeRuleModifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ChangeRuleModifierContext);
    } else {
        return this.getTypedRuleContext(ChangeRuleModifierContext,i);
    }
};

ChangeRuleContext.prototype.RULE_START = function() {
    return this.getToken(LscParser.RULE_START, 0);
};

ChangeRuleContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.NEWLINE);
    } else {
        return this.getToken(LscParser.NEWLINE, i);
    }
};


ChangeRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitChangeRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.ChangeRuleContext = ChangeRuleContext;

LscParser.prototype.changeRule = function() {

    var localctx = new ChangeRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, LscParser.RULE_changeRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.ruleName();
        this.state = 301;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LscParser.WHITESPACE) {
            this.state = 297;
            this.match(LscParser.WHITESPACE);
            this.state = 298;
            this.changeRuleModifier();
            this.state = 303;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 305;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LscParser.RULE_START) {
            this.state = 304;
            this.match(LscParser.RULE_START);
        }

        this.state = 308; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 307;
            this.match(LscParser.NEWLINE);
            this.state = 310; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===LscParser.NEWLINE);
        this.state = 312;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ChangeRuleModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_changeRuleModifier;
    return this;
}

ChangeRuleModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChangeRuleModifierContext.prototype.constructor = ChangeRuleModifierContext;

ChangeRuleModifierContext.prototype.filter = function() {
    return this.getTypedRuleContext(FilterContext,0);
};

ChangeRuleModifierContext.prototype.PROPAGATE = function() {
    return this.getToken(LscParser.PROPAGATE, 0);
};

ChangeRuleModifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitChangeRuleModifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.ChangeRuleModifierContext = ChangeRuleModifierContext;

LscParser.prototype.changeRuleModifier = function() {

    var localctx = new ChangeRuleModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, LscParser.RULE_changeRuleModifier);
    try {
        this.state = 316;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LscParser.MATRIX_START:
        case LscParser.CLASSREF:
            this.enterOuterAlt(localctx, 1);
            this.state = 314;
            this.filter();
            break;
        case LscParser.PROPAGATE:
            this.enterOuterAlt(localctx, 2);
            this.state = 315;
            this.match(LscParser.PROPAGATE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FilterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_filter;
    return this;
}

FilterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FilterContext.prototype.constructor = FilterContext;

FilterContext.prototype.classRef = function() {
    return this.getTypedRuleContext(ClassRefContext,0);
};

FilterContext.prototype.fancyMatrix = function() {
    return this.getTypedRuleContext(FancyMatrixContext,0);
};

FilterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitFilter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.FilterContext = FilterContext;

LscParser.prototype.filter = function() {

    var localctx = new FilterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, LscParser.RULE_filter);
    try {
        this.state = 320;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LscParser.CLASSREF:
            this.enterOuterAlt(localctx, 1);
            this.state = 318;
            this.classRef();
            break;
        case LscParser.MATRIX_START:
            this.enterOuterAlt(localctx, 2);
            this.state = 319;
            this.fancyMatrix();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.blockElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockElementContext);
    } else {
        return this.getTypedRuleContext(BlockElementContext,i);
    }
};

BlockContext.prototype.blockType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockTypeContext);
    } else {
        return this.getTypedRuleContext(BlockTypeContext,i);
    }
};

BlockContext.prototype.RULE_START = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.RULE_START);
    } else {
        return this.getToken(LscParser.RULE_START, i);
    }
};


BlockContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.WHITESPACE);
    } else {
        return this.getToken(LscParser.WHITESPACE, i);
    }
};


BlockContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.NEWLINE);
    } else {
        return this.getToken(LscParser.NEWLINE, i);
    }
};


BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.BlockContext = BlockContext;

LscParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, LscParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 322;
        this.blockElement();
        this.state = 342;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 324; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 323;
                    this.match(LscParser.NEWLINE);
                    this.state = 326; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===LscParser.NEWLINE);
                this.state = 328;
                this.blockType();
                this.state = 329;
                this.match(LscParser.RULE_START);
                this.state = 336;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case LscParser.WHITESPACE:
                    this.state = 330;
                    this.match(LscParser.WHITESPACE);
                    break;
                case LscParser.NEWLINE:
                    this.state = 332; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        this.state = 331;
                        this.match(LscParser.NEWLINE);
                        this.state = 334; 
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while(_la===LscParser.NEWLINE);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 338;
                this.blockElement(); 
            }
            this.state = 344;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_blockElement;
    return this;
}

BlockElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockElementContext.prototype.constructor = BlockElementContext;

BlockElementContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

BlockElementContext.prototype.O_PAREN = function() {
    return this.getToken(LscParser.O_PAREN, 0);
};

BlockElementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

BlockElementContext.prototype.C_PAREN = function() {
    return this.getToken(LscParser.C_PAREN, 0);
};

BlockElementContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.NEWLINE);
    } else {
        return this.getToken(LscParser.NEWLINE, i);
    }
};


BlockElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitBlockElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.BlockElementContext = BlockElementContext;

LscParser.prototype.blockElement = function() {

    var localctx = new BlockElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, LscParser.RULE_blockElement);
    var _la = 0; // Token type
    try {
        this.state = 362;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 345;
            this.expressionList();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 346;
            this.match(LscParser.O_PAREN);
            this.state = 350;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LscParser.NEWLINE) {
                this.state = 347;
                this.match(LscParser.NEWLINE);
                this.state = 352;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 353;
            this.block();
            this.state = 357;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LscParser.NEWLINE) {
                this.state = 354;
                this.match(LscParser.NEWLINE);
                this.state = 359;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 360;
            this.match(LscParser.C_PAREN);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_blockType;
    return this;
}

BlockTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockTypeContext.prototype.constructor = BlockTypeContext;

BlockTypeContext.prototype.ALL_MATCHING = function() {
    return this.getToken(LscParser.ALL_MATCHING, 0);
};

BlockTypeContext.prototype.FIRST_MATCHING = function() {
    return this.getToken(LscParser.FIRST_MATCHING, 0);
};

BlockTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitBlockType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.BlockTypeContext = BlockTypeContext;

LscParser.prototype.blockType = function() {

    var localctx = new BlockTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, LscParser.RULE_blockType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 364;
        _la = this._input.LA(1);
        if(!(_la===LscParser.ALL_MATCHING || _la===LscParser.FIRST_MATCHING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionListContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.NEWLINE);
    } else {
        return this.getToken(LscParser.NEWLINE, i);
    }
};


ExpressionListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitExpressionList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.ExpressionListContext = ExpressionListContext;

LscParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, LscParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 366;
        this.expression();
        this.state = 375;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 368; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 367;
                    this.match(LscParser.NEWLINE);
                    this.state = 370; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===LscParser.NEWLINE);
                this.state = 372;
                this.expression(); 
            }
            this.state = 377;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RuleNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_ruleName;
    return this;
}

RuleNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleNameContext.prototype.constructor = RuleNameContext;

RuleNameContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.NAME);
    } else {
        return this.getToken(LscParser.NAME, i);
    }
};


RuleNameContext.prototype.HYPHEN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.HYPHEN);
    } else {
        return this.getToken(LscParser.HYPHEN, i);
    }
};


RuleNameContext.prototype.NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.NUMBER);
    } else {
        return this.getToken(LscParser.NUMBER, i);
    }
};


RuleNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitRuleName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.RuleNameContext = RuleNameContext;

LscParser.prototype.ruleName = function() {

    var localctx = new RuleNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, LscParser.RULE_ruleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 378;
        this.match(LscParser.NAME);
        this.state = 383;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LscParser.HYPHEN) {
            this.state = 379;
            this.match(LscParser.HYPHEN);
            this.state = 380;
            _la = this._input.LA(1);
            if(!(_la===LscParser.NUMBER || _la===LscParser.NAME)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 385;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.UNCHANGED = function() {
    return this.getToken(LscParser.UNCHANGED, 0);
};

ExpressionContext.prototype.from = function() {
    return this.getTypedRuleContext(FromContext,0);
};

ExpressionContext.prototype.CHANGE = function() {
    return this.getToken(LscParser.CHANGE, 0);
};

ExpressionContext.prototype.to = function() {
    return this.getTypedRuleContext(ToContext,0);
};

ExpressionContext.prototype.CONDITION = function() {
    return this.getToken(LscParser.CONDITION, 0);
};

ExpressionContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

ExpressionContext.prototype.EXCLUSION = function() {
    return this.getToken(LscParser.EXCLUSION, 0);
};

ExpressionContext.prototype.exclusion = function() {
    return this.getTypedRuleContext(ExclusionContext,0);
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.ExpressionContext = ExpressionContext;

LscParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, LscParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 398;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LscParser.UNCHANGED:
            this.enterOuterAlt(localctx, 1);
            this.state = 386;
            this.match(LscParser.UNCHANGED);
            break;
        case LscParser.O_PAREN:
        case LscParser.NULL:
        case LscParser.MATRIX_START:
        case LscParser.LIST_START:
        case LscParser.NEGATION:
        case LscParser.WORD_BOUNDARY:
        case LscParser.BETWEEN_WORDS:
        case LscParser.CLASSREF:
        case LscParser.NAME:
        case LscParser.STR1:
        case LscParser.STR:
            this.enterOuterAlt(localctx, 2);
            this.state = 387;
            this.from();
            this.state = 388;
            this.match(LscParser.CHANGE);
            this.state = 389;
            this.to();
            this.state = 392;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LscParser.CONDITION) {
                this.state = 390;
                this.match(LscParser.CONDITION);
                this.state = 391;
                this.condition();
            }

            this.state = 396;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LscParser.EXCLUSION) {
                this.state = 394;
                this.match(LscParser.EXCLUSION);
                this.state = 395;
                this.exclusion();
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.environment = function() {
    return this.getTypedRuleContext(EnvironmentContext,0);
};

ConditionContext.prototype.environmentList = function() {
    return this.getTypedRuleContext(EnvironmentListContext,0);
};

ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.ConditionContext = ConditionContext;

LscParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, LscParser.RULE_condition);
    try {
        this.state = 402;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 400;
            this.environment();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 401;
            this.environmentList();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExclusionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_exclusion;
    return this;
}

ExclusionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExclusionContext.prototype.constructor = ExclusionContext;

ExclusionContext.prototype.environment = function() {
    return this.getTypedRuleContext(EnvironmentContext,0);
};

ExclusionContext.prototype.environmentList = function() {
    return this.getTypedRuleContext(EnvironmentListContext,0);
};

ExclusionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitExclusion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.ExclusionContext = ExclusionContext;

LscParser.prototype.exclusion = function() {

    var localctx = new ExclusionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, LscParser.RULE_exclusion);
    try {
        this.state = 406;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 404;
            this.environment();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 405;
            this.environmentList();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FromContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_from;
    return this;
}

FromContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FromContext.prototype.constructor = FromContext;

FromContext.prototype.ruleElement = function() {
    return this.getTypedRuleContext(RuleElementContext,0);
};

FromContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitFrom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.FromContext = FromContext;

LscParser.prototype.from = function() {

    var localctx = new FromContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, LscParser.RULE_from);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 408;
        this.ruleElement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ToContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_to;
    return this;
}

ToContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ToContext.prototype.constructor = ToContext;

ToContext.prototype.ruleElement = function() {
    return this.getTypedRuleContext(RuleElementContext,0);
};

ToContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitTo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.ToContext = ToContext;

LscParser.prototype.to = function() {

    var localctx = new ToContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, LscParser.RULE_to);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 410;
        this.ruleElement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EnvironmentListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_environmentList;
    return this;
}

EnvironmentListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnvironmentListContext.prototype.constructor = EnvironmentListContext;

EnvironmentListContext.prototype.LIST_START = function() {
    return this.getToken(LscParser.LIST_START, 0);
};

EnvironmentListContext.prototype.environment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EnvironmentContext);
    } else {
        return this.getTypedRuleContext(EnvironmentContext,i);
    }
};

EnvironmentListContext.prototype.LIST_END = function() {
    return this.getToken(LscParser.LIST_END, 0);
};

EnvironmentListContext.prototype.SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.SEP);
    } else {
        return this.getToken(LscParser.SEP, i);
    }
};


EnvironmentListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitEnvironmentList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.EnvironmentListContext = EnvironmentListContext;

LscParser.prototype.environmentList = function() {

    var localctx = new EnvironmentListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, LscParser.RULE_environmentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this.match(LscParser.LIST_START);
        this.state = 413;
        this.environment();
        this.state = 418;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LscParser.SEP) {
            this.state = 414;
            this.match(LscParser.SEP);
            this.state = 415;
            this.environment();
            this.state = 420;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 421;
        this.match(LscParser.LIST_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EnvironmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_environment;
    return this;
}

EnvironmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnvironmentContext.prototype.constructor = EnvironmentContext;

EnvironmentContext.prototype.ANCHOR = function() {
    return this.getToken(LscParser.ANCHOR, 0);
};

EnvironmentContext.prototype.environmentBefore = function() {
    return this.getTypedRuleContext(EnvironmentBeforeContext,0);
};

EnvironmentContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.WHITESPACE);
    } else {
        return this.getToken(LscParser.WHITESPACE, i);
    }
};


EnvironmentContext.prototype.environmentAfter = function() {
    return this.getTypedRuleContext(EnvironmentAfterContext,0);
};

EnvironmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitEnvironment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.EnvironmentContext = EnvironmentContext;

LscParser.prototype.environment = function() {

    var localctx = new EnvironmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, LscParser.RULE_environment);
    var _la = 0; // Token type
    try {
        this.state = 436;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 426;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LscParser.O_PAREN) | (1 << LscParser.NULL) | (1 << LscParser.MATRIX_START) | (1 << LscParser.LIST_START) | (1 << LscParser.NEGATION) | (1 << LscParser.WORD_BOUNDARY) | (1 << LscParser.BETWEEN_WORDS) | (1 << LscParser.CLASSREF))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (LscParser.NAME - 39)) | (1 << (LscParser.STR1 - 39)) | (1 << (LscParser.STR - 39)))) !== 0)) {
                this.state = 423;
                this.environmentBefore();
                this.state = 424;
                this.match(LscParser.WHITESPACE);
            }

            this.state = 428;
            this.match(LscParser.ANCHOR);
            this.state = 431;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LscParser.WHITESPACE) {
                this.state = 429;
                this.match(LscParser.WHITESPACE);
                this.state = 430;
                this.environmentAfter();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 434;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LscParser.O_PAREN) | (1 << LscParser.NULL) | (1 << LscParser.MATRIX_START) | (1 << LscParser.LIST_START) | (1 << LscParser.NEGATION) | (1 << LscParser.WORD_BOUNDARY) | (1 << LscParser.BETWEEN_WORDS) | (1 << LscParser.CLASSREF))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (LscParser.NAME - 39)) | (1 << (LscParser.STR1 - 39)) | (1 << (LscParser.STR - 39)))) !== 0)) {
                this.state = 433;
                this.environmentBefore();
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EnvironmentBeforeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_environmentBefore;
    return this;
}

EnvironmentBeforeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnvironmentBeforeContext.prototype.constructor = EnvironmentBeforeContext;

EnvironmentBeforeContext.prototype.ruleElement = function() {
    return this.getTypedRuleContext(RuleElementContext,0);
};

EnvironmentBeforeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitEnvironmentBefore(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.EnvironmentBeforeContext = EnvironmentBeforeContext;

LscParser.prototype.environmentBefore = function() {

    var localctx = new EnvironmentBeforeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, LscParser.RULE_environmentBefore);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 438;
        this.ruleElement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EnvironmentAfterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_environmentAfter;
    return this;
}

EnvironmentAfterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnvironmentAfterContext.prototype.constructor = EnvironmentAfterContext;

EnvironmentAfterContext.prototype.ruleElement = function() {
    return this.getTypedRuleContext(RuleElementContext,0);
};

EnvironmentAfterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitEnvironmentAfter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.EnvironmentAfterContext = EnvironmentAfterContext;

LscParser.prototype.environmentAfter = function() {

    var localctx = new EnvironmentAfterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, LscParser.RULE_environmentAfter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 440;
        this.ruleElement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RuleElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_ruleElement;
    return this;
}

RuleElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleElementContext.prototype.constructor = RuleElementContext;

RuleElementContext.prototype.capture = function() {
    return this.getTypedRuleContext(CaptureContext,0);
};

RuleElementContext.prototype.repeater = function() {
    return this.getTypedRuleContext(RepeaterContext,0);
};

RuleElementContext.prototype.group = function() {
    return this.getTypedRuleContext(GroupContext,0);
};

RuleElementContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

RuleElementContext.prototype.intersection = function() {
    return this.getTypedRuleContext(IntersectionContext,0);
};

RuleElementContext.prototype.simple = function() {
    return this.getTypedRuleContext(SimpleContext,0);
};

RuleElementContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

RuleElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitRuleElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.RuleElementContext = RuleElementContext;

LscParser.prototype.ruleElement = function() {

    var localctx = new RuleElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, LscParser.RULE_ruleElement);
    try {
        this.state = 449;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 442;
            this.capture();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 443;
            this.repeater();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 444;
            this.group();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 445;
            this.list();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 446;
            this.intersection();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 447;
            this.simple();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 448;
            this.sequence();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_sequence;
    return this;
}

SequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceContext.prototype.constructor = SequenceContext;

SequenceContext.prototype.sequenceElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SequenceElementContext);
    } else {
        return this.getTypedRuleContext(SequenceElementContext,i);
    }
};

SequenceContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.WHITESPACE);
    } else {
        return this.getToken(LscParser.WHITESPACE, i);
    }
};


SequenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitSequence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.SequenceContext = SequenceContext;

LscParser.prototype.sequence = function() {

    var localctx = new SequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, LscParser.RULE_sequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this.sequenceElement();
        this.state = 454; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 452;
        		this.match(LscParser.WHITESPACE);
        		this.state = 453;
        		this.sequenceElement();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 456; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,51, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SequenceElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_sequenceElement;
    return this;
}

SequenceElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceElementContext.prototype.constructor = SequenceElementContext;

SequenceElementContext.prototype.capture = function() {
    return this.getTypedRuleContext(CaptureContext,0);
};

SequenceElementContext.prototype.repeater = function() {
    return this.getTypedRuleContext(RepeaterContext,0);
};

SequenceElementContext.prototype.group = function() {
    return this.getTypedRuleContext(GroupContext,0);
};

SequenceElementContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

SequenceElementContext.prototype.intersection = function() {
    return this.getTypedRuleContext(IntersectionContext,0);
};

SequenceElementContext.prototype.simple = function() {
    return this.getTypedRuleContext(SimpleContext,0);
};

SequenceElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitSequenceElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.SequenceElementContext = SequenceElementContext;

LscParser.prototype.sequenceElement = function() {

    var localctx = new SequenceElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, LscParser.RULE_sequenceElement);
    try {
        this.state = 464;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 458;
            this.capture();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 459;
            this.repeater();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 460;
            this.group();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 461;
            this.list();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 462;
            this.intersection();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 463;
            this.simple();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaptureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_capture;
    return this;
}

CaptureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaptureContext.prototype.constructor = CaptureContext;

CaptureContext.prototype.captureRef = function() {
    return this.getTypedRuleContext(CaptureRefContext,0);
};

CaptureContext.prototype.group = function() {
    return this.getTypedRuleContext(GroupContext,0);
};

CaptureContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

CaptureContext.prototype.negated = function() {
    return this.getTypedRuleContext(NegatedContext,0);
};

CaptureContext.prototype.classRef = function() {
    return this.getTypedRuleContext(ClassRefContext,0);
};

CaptureContext.prototype.fancyMatrix = function() {
    return this.getTypedRuleContext(FancyMatrixContext,0);
};

CaptureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitCapture(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.CaptureContext = CaptureContext;

LscParser.prototype.capture = function() {

    var localctx = new CaptureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, LscParser.RULE_capture);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LscParser.O_PAREN:
            this.state = 466;
            this.group();
            break;
        case LscParser.LIST_START:
            this.state = 467;
            this.list();
            break;
        case LscParser.NEGATION:
            this.state = 468;
            this.negated();
            break;
        case LscParser.CLASSREF:
            this.state = 469;
            this.classRef();
            break;
        case LscParser.MATRIX_START:
            this.state = 470;
            this.fancyMatrix();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 473;
        this.captureRef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RepeaterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_repeater;
    return this;
}

RepeaterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepeaterContext.prototype.constructor = RepeaterContext;

RepeaterContext.prototype.repeaterType = function() {
    return this.getTypedRuleContext(RepeaterTypeContext,0);
};

RepeaterContext.prototype.group = function() {
    return this.getTypedRuleContext(GroupContext,0);
};

RepeaterContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

RepeaterContext.prototype.simple = function() {
    return this.getTypedRuleContext(SimpleContext,0);
};

RepeaterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitRepeater(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.RepeaterContext = RepeaterContext;

LscParser.prototype.repeater = function() {

    var localctx = new RepeaterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, LscParser.RULE_repeater);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 478;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LscParser.O_PAREN:
            this.state = 475;
            this.group();
            break;
        case LscParser.LIST_START:
            this.state = 476;
            this.list();
            break;
        case LscParser.NULL:
        case LscParser.MATRIX_START:
        case LscParser.NEGATION:
        case LscParser.WORD_BOUNDARY:
        case LscParser.BETWEEN_WORDS:
        case LscParser.CLASSREF:
        case LscParser.NAME:
        case LscParser.STR1:
        case LscParser.STR:
            this.state = 477;
            this.simple();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 480;
        this.repeaterType();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_group;
    return this;
}

GroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupContext.prototype.constructor = GroupContext;

GroupContext.prototype.O_PAREN = function() {
    return this.getToken(LscParser.O_PAREN, 0);
};

GroupContext.prototype.ruleElement = function() {
    return this.getTypedRuleContext(RuleElementContext,0);
};

GroupContext.prototype.C_PAREN = function() {
    return this.getToken(LscParser.C_PAREN, 0);
};

GroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.GroupContext = GroupContext;

LscParser.prototype.group = function() {

    var localctx = new GroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, LscParser.RULE_group);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 482;
        this.match(LscParser.O_PAREN);
        this.state = 483;
        this.ruleElement();
        this.state = 484;
        this.match(LscParser.C_PAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LIST_START = function() {
    return this.getToken(LscParser.LIST_START, 0);
};

ListContext.prototype.ruleElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RuleElementContext);
    } else {
        return this.getTypedRuleContext(RuleElementContext,i);
    }
};

ListContext.prototype.LIST_END = function() {
    return this.getToken(LscParser.LIST_END, 0);
};

ListContext.prototype.SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.SEP);
    } else {
        return this.getToken(LscParser.SEP, i);
    }
};


ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.ListContext = ListContext;

LscParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, LscParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 486;
        this.match(LscParser.LIST_START);
        this.state = 487;
        this.ruleElement();
        this.state = 492;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LscParser.SEP) {
            this.state = 488;
            this.match(LscParser.SEP);
            this.state = 489;
            this.ruleElement();
            this.state = 494;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 495;
        this.match(LscParser.LIST_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IntersectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_intersection;
    return this;
}

IntersectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntersectionContext.prototype.constructor = IntersectionContext;

IntersectionContext.prototype.intersectionElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IntersectionElementContext);
    } else {
        return this.getTypedRuleContext(IntersectionElementContext,i);
    }
};

IntersectionContext.prototype.INTERSECTION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.INTERSECTION);
    } else {
        return this.getToken(LscParser.INTERSECTION, i);
    }
};


IntersectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitIntersection(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.IntersectionContext = IntersectionContext;

LscParser.prototype.intersection = function() {

    var localctx = new IntersectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, LscParser.RULE_intersection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 497;
        this.intersectionElement();
        this.state = 500; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 498;
            this.match(LscParser.INTERSECTION);
            this.state = 499;
            this.intersectionElement();
            this.state = 502; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===LscParser.INTERSECTION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IntersectionElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_intersectionElement;
    return this;
}

IntersectionElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntersectionElementContext.prototype.constructor = IntersectionElementContext;

IntersectionElementContext.prototype.capture = function() {
    return this.getTypedRuleContext(CaptureContext,0);
};

IntersectionElementContext.prototype.repeater = function() {
    return this.getTypedRuleContext(RepeaterContext,0);
};

IntersectionElementContext.prototype.group = function() {
    return this.getTypedRuleContext(GroupContext,0);
};

IntersectionElementContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

IntersectionElementContext.prototype.simple = function() {
    return this.getTypedRuleContext(SimpleContext,0);
};

IntersectionElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitIntersectionElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.IntersectionElementContext = IntersectionElementContext;

LscParser.prototype.intersectionElement = function() {

    var localctx = new IntersectionElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, LscParser.RULE_intersectionElement);
    try {
        this.state = 509;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 504;
            this.capture();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 505;
            this.repeater();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 506;
            this.group();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 507;
            this.list();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 508;
            this.simple();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SimpleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_simple;
    return this;
}

SimpleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleContext.prototype.constructor = SimpleContext;

SimpleContext.prototype.negated = function() {
    return this.getTypedRuleContext(NegatedContext,0);
};

SimpleContext.prototype.classRef = function() {
    return this.getTypedRuleContext(ClassRefContext,0);
};

SimpleContext.prototype.captureRef = function() {
    return this.getTypedRuleContext(CaptureRefContext,0);
};

SimpleContext.prototype.fancyMatrix = function() {
    return this.getTypedRuleContext(FancyMatrixContext,0);
};

SimpleContext.prototype.empty = function() {
    return this.getTypedRuleContext(EmptyContext,0);
};

SimpleContext.prototype.boundary = function() {
    return this.getTypedRuleContext(BoundaryContext,0);
};

SimpleContext.prototype.betweenWords = function() {
    return this.getTypedRuleContext(BetweenWordsContext,0);
};

SimpleContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

SimpleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitSimple(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.SimpleContext = SimpleContext;

LscParser.prototype.simple = function() {

    var localctx = new SimpleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, LscParser.RULE_simple);
    try {
        this.state = 519;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 511;
            this.negated();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 512;
            this.classRef();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 513;
            this.captureRef();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 514;
            this.fancyMatrix();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 515;
            this.empty();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 516;
            this.boundary();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 517;
            this.betweenWords();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 518;
            this.text();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NegatedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_negated;
    return this;
}

NegatedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegatedContext.prototype.constructor = NegatedContext;

NegatedContext.prototype.NEGATION = function() {
    return this.getToken(LscParser.NEGATION, 0);
};

NegatedContext.prototype.classRef = function() {
    return this.getTypedRuleContext(ClassRefContext,0);
};

NegatedContext.prototype.captureRef = function() {
    return this.getTypedRuleContext(CaptureRefContext,0);
};

NegatedContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

NegatedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitNegated(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.NegatedContext = NegatedContext;

LscParser.prototype.negated = function() {

    var localctx = new NegatedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, LscParser.RULE_negated);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 521;
        this.match(LscParser.NEGATION);
        this.state = 525;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LscParser.CLASSREF:
            this.state = 522;
            this.classRef();
            break;
        case LscParser.WORD_BOUNDARY:
            this.state = 523;
            this.captureRef();
            break;
        case LscParser.NAME:
        case LscParser.STR1:
        case LscParser.STR:
            this.state = 524;
            this.text();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClassRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_classRef;
    return this;
}

ClassRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassRefContext.prototype.constructor = ClassRefContext;

ClassRefContext.prototype.CLASSREF = function() {
    return this.getToken(LscParser.CLASSREF, 0);
};

ClassRefContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ClassRefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitClassRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.ClassRefContext = ClassRefContext;

LscParser.prototype.classRef = function() {

    var localctx = new ClassRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, LscParser.RULE_classRef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 527;
        this.match(LscParser.CLASSREF);
        this.state = 528;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaptureRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_captureRef;
    return this;
}

CaptureRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaptureRefContext.prototype.constructor = CaptureRefContext;

CaptureRefContext.prototype.WORD_BOUNDARY = function() {
    return this.getToken(LscParser.WORD_BOUNDARY, 0);
};

CaptureRefContext.prototype.NUMBER = function() {
    return this.getToken(LscParser.NUMBER, 0);
};

CaptureRefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitCaptureRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.CaptureRefContext = CaptureRefContext;

LscParser.prototype.captureRef = function() {

    var localctx = new CaptureRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, LscParser.RULE_captureRef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 530;
        this.match(LscParser.WORD_BOUNDARY);
        this.state = 531;
        this.match(LscParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FancyMatrixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_fancyMatrix;
    return this;
}

FancyMatrixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FancyMatrixContext.prototype.constructor = FancyMatrixContext;

FancyMatrixContext.prototype.MATRIX_START = function() {
    return this.getToken(LscParser.MATRIX_START, 0);
};

FancyMatrixContext.prototype.MATRIX_END = function() {
    return this.getToken(LscParser.MATRIX_END, 0);
};

FancyMatrixContext.prototype.fancyValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FancyValueContext);
    } else {
        return this.getTypedRuleContext(FancyValueContext,i);
    }
};

FancyMatrixContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.WHITESPACE);
    } else {
        return this.getToken(LscParser.WHITESPACE, i);
    }
};


FancyMatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitFancyMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.FancyMatrixContext = FancyMatrixContext;

LscParser.prototype.fancyMatrix = function() {

    var localctx = new FancyMatrixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, LscParser.RULE_fancyMatrix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 533;
        this.match(LscParser.MATRIX_START);
        this.state = 535;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (LscParser.NULL - 11)) | (1 << (LscParser.AT_LEAST_ONE - 11)) | (1 << (LscParser.HYPHEN - 11)) | (1 << (LscParser.NEGATION - 11)) | (1 << (LscParser.WORD_BOUNDARY - 11)) | (1 << (LscParser.NAME - 11)))) !== 0)) {
            this.state = 534;
            this.fancyValue();
        }

        this.state = 541;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LscParser.WHITESPACE) {
            this.state = 537;
            this.match(LscParser.WHITESPACE);
            this.state = 538;
            this.fancyValue();
            this.state = 543;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 544;
        this.match(LscParser.MATRIX_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FancyValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_fancyValue;
    return this;
}

FancyValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FancyValueContext.prototype.constructor = FancyValueContext;

FancyValueContext.prototype.plusFeatureValue = function() {
    return this.getTypedRuleContext(PlusFeatureValueContext,0);
};

FancyValueContext.prototype.featureValue = function() {
    return this.getTypedRuleContext(FeatureValueContext,0);
};

FancyValueContext.prototype.negatedValue = function() {
    return this.getTypedRuleContext(NegatedValueContext,0);
};

FancyValueContext.prototype.absentFeature = function() {
    return this.getTypedRuleContext(AbsentFeatureContext,0);
};

FancyValueContext.prototype.featureVariable = function() {
    return this.getTypedRuleContext(FeatureVariableContext,0);
};

FancyValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitFancyValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.FancyValueContext = FancyValueContext;

LscParser.prototype.fancyValue = function() {

    var localctx = new FancyValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, LscParser.RULE_fancyValue);
    try {
        this.state = 551;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LscParser.AT_LEAST_ONE:
        case LscParser.HYPHEN:
            this.enterOuterAlt(localctx, 1);
            this.state = 546;
            this.plusFeatureValue();
            break;
        case LscParser.NAME:
            this.enterOuterAlt(localctx, 2);
            this.state = 547;
            this.featureValue();
            break;
        case LscParser.NEGATION:
            this.enterOuterAlt(localctx, 3);
            this.state = 548;
            this.negatedValue();
            break;
        case LscParser.NULL:
            this.enterOuterAlt(localctx, 4);
            this.state = 549;
            this.absentFeature();
            break;
        case LscParser.WORD_BOUNDARY:
            this.enterOuterAlt(localctx, 5);
            this.state = 550;
            this.featureVariable();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NegatedValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_negatedValue;
    return this;
}

NegatedValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegatedValueContext.prototype.constructor = NegatedValueContext;

NegatedValueContext.prototype.NEGATION = function() {
    return this.getToken(LscParser.NEGATION, 0);
};

NegatedValueContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

NegatedValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitNegatedValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.NegatedValueContext = NegatedValueContext;

LscParser.prototype.negatedValue = function() {

    var localctx = new NegatedValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, LscParser.RULE_negatedValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 553;
        this.match(LscParser.NEGATION);
        this.state = 554;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AbsentFeatureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_absentFeature;
    return this;
}

AbsentFeatureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AbsentFeatureContext.prototype.constructor = AbsentFeatureContext;

AbsentFeatureContext.prototype.NULL = function() {
    return this.getToken(LscParser.NULL, 0);
};

AbsentFeatureContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

AbsentFeatureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitAbsentFeature(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.AbsentFeatureContext = AbsentFeatureContext;

LscParser.prototype.absentFeature = function() {

    var localctx = new AbsentFeatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, LscParser.RULE_absentFeature);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 556;
        this.match(LscParser.NULL);
        this.state = 557;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FeatureVariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_featureVariable;
    return this;
}

FeatureVariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FeatureVariableContext.prototype.constructor = FeatureVariableContext;

FeatureVariableContext.prototype.WORD_BOUNDARY = function() {
    return this.getToken(LscParser.WORD_BOUNDARY, 0);
};

FeatureVariableContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

FeatureVariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitFeatureVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.FeatureVariableContext = FeatureVariableContext;

LscParser.prototype.featureVariable = function() {

    var localctx = new FeatureVariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, LscParser.RULE_featureVariable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 559;
        this.match(LscParser.WORD_BOUNDARY);
        this.state = 560;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EmptyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_empty;
    return this;
}

EmptyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyContext.prototype.constructor = EmptyContext;

EmptyContext.prototype.NULL = function() {
    return this.getToken(LscParser.NULL, 0);
};

EmptyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitEmpty(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.EmptyContext = EmptyContext;

LscParser.prototype.empty = function() {

    var localctx = new EmptyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, LscParser.RULE_empty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 562;
        this.match(LscParser.NULL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BoundaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_boundary;
    return this;
}

BoundaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoundaryContext.prototype.constructor = BoundaryContext;

BoundaryContext.prototype.WORD_BOUNDARY = function() {
    return this.getToken(LscParser.WORD_BOUNDARY, 0);
};

BoundaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitBoundary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.BoundaryContext = BoundaryContext;

LscParser.prototype.boundary = function() {

    var localctx = new BoundaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, LscParser.RULE_boundary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 564;
        this.match(LscParser.WORD_BOUNDARY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BetweenWordsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_betweenWords;
    return this;
}

BetweenWordsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BetweenWordsContext.prototype.constructor = BetweenWordsContext;

BetweenWordsContext.prototype.BETWEEN_WORDS = function() {
    return this.getToken(LscParser.BETWEEN_WORDS, 0);
};

BetweenWordsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitBetweenWords(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.BetweenWordsContext = BetweenWordsContext;

LscParser.prototype.betweenWords = function() {

    var localctx = new BetweenWordsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, LscParser.RULE_betweenWords);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 566;
        this.match(LscParser.BETWEEN_WORDS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RepeaterTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_repeaterType;
    return this;
}

RepeaterTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepeaterTypeContext.prototype.constructor = RepeaterTypeContext;

RepeaterTypeContext.prototype.AT_LEAST_ONE = function() {
    return this.getToken(LscParser.AT_LEAST_ONE, 0);
};

RepeaterTypeContext.prototype.NULL = function() {
    return this.getToken(LscParser.NULL, 0);
};

RepeaterTypeContext.prototype.OPTIONAL = function() {
    return this.getToken(LscParser.OPTIONAL, 0);
};

RepeaterTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitRepeaterType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.RepeaterTypeContext = RepeaterTypeContext;

LscParser.prototype.repeaterType = function() {

    var localctx = new RepeaterTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, LscParser.RULE_repeaterType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 568;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LscParser.NULL) | (1 << LscParser.AT_LEAST_ONE) | (1 << LscParser.OPTIONAL))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MatrixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_matrix;
    return this;
}

MatrixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixContext.prototype.constructor = MatrixContext;

MatrixContext.prototype.MATRIX_START = function() {
    return this.getToken(LscParser.MATRIX_START, 0);
};

MatrixContext.prototype.MATRIX_END = function() {
    return this.getToken(LscParser.MATRIX_END, 0);
};

MatrixContext.prototype.matrixValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MatrixValueContext);
    } else {
        return this.getTypedRuleContext(MatrixValueContext,i);
    }
};

MatrixContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LscParser.WHITESPACE);
    } else {
        return this.getToken(LscParser.WHITESPACE, i);
    }
};


MatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.MatrixContext = MatrixContext;

LscParser.prototype.matrix = function() {

    var localctx = new MatrixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, LscParser.RULE_matrix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 570;
        this.match(LscParser.MATRIX_START);
        this.state = 572;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (LscParser.AT_LEAST_ONE - 16)) | (1 << (LscParser.HYPHEN - 16)) | (1 << (LscParser.NAME - 16)))) !== 0)) {
            this.state = 571;
            this.matrixValue();
        }

        this.state = 578;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LscParser.WHITESPACE) {
            this.state = 574;
            this.match(LscParser.WHITESPACE);
            this.state = 575;
            this.matrixValue();
            this.state = 580;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 581;
        this.match(LscParser.MATRIX_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MatrixValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_matrixValue;
    return this;
}

MatrixValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixValueContext.prototype.constructor = MatrixValueContext;

MatrixValueContext.prototype.plusFeatureValue = function() {
    return this.getTypedRuleContext(PlusFeatureValueContext,0);
};

MatrixValueContext.prototype.featureValue = function() {
    return this.getTypedRuleContext(FeatureValueContext,0);
};

MatrixValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitMatrixValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.MatrixValueContext = MatrixValueContext;

LscParser.prototype.matrixValue = function() {

    var localctx = new MatrixValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, LscParser.RULE_matrixValue);
    try {
        this.state = 585;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LscParser.AT_LEAST_ONE:
        case LscParser.HYPHEN:
            this.enterOuterAlt(localctx, 1);
            this.state = 583;
            this.plusFeatureValue();
            break;
        case LscParser.NAME:
            this.enterOuterAlt(localctx, 2);
            this.state = 584;
            this.featureValue();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PlusFeatureValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_plusFeatureValue;
    return this;
}

PlusFeatureValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlusFeatureValueContext.prototype.constructor = PlusFeatureValueContext;

PlusFeatureValueContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

PlusFeatureValueContext.prototype.AT_LEAST_ONE = function() {
    return this.getToken(LscParser.AT_LEAST_ONE, 0);
};

PlusFeatureValueContext.prototype.HYPHEN = function() {
    return this.getToken(LscParser.HYPHEN, 0);
};

PlusFeatureValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitPlusFeatureValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.PlusFeatureValueContext = PlusFeatureValueContext;

LscParser.prototype.plusFeatureValue = function() {

    var localctx = new PlusFeatureValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, LscParser.RULE_plusFeatureValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 587;
        _la = this._input.LA(1);
        if(!(_la===LscParser.AT_LEAST_ONE || _la===LscParser.HYPHEN)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 588;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FeatureValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_featureValue;
    return this;
}

FeatureValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FeatureValueContext.prototype.constructor = FeatureValueContext;

FeatureValueContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

FeatureValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitFeatureValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.FeatureValueContext = FeatureValueContext;

LscParser.prototype.featureValue = function() {

    var localctx = new FeatureValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, LscParser.RULE_featureValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 590;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.NAME = function() {
    return this.getToken(LscParser.NAME, 0);
};

NameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.NameContext = NameContext;

LscParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, LscParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 592;
        this.match(LscParser.NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LscParser.RULE_text;
    return this;
}

TextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextContext.prototype.constructor = TextContext;

TextContext.prototype.NAME = function() {
    return this.getToken(LscParser.NAME, 0);
};

TextContext.prototype.STR1 = function() {
    return this.getToken(LscParser.STR1, 0);
};

TextContext.prototype.STR = function() {
    return this.getToken(LscParser.STR, 0);
};

TextContext.prototype.NEGATION = function() {
    return this.getToken(LscParser.NEGATION, 0);
};

TextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LscVisitor ) {
        return visitor.visitText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LscParser.TextContext = TextContext;

LscParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, LscParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 594;
        _la = this._input.LA(1);
        if(!(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (LscParser.NAME - 39)) | (1 << (LscParser.STR1 - 39)) | (1 << (LscParser.STR - 39)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 596;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LscParser.NEGATION) {
            this.state = 595;
            this.match(LscParser.NEGATION);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.LscParser = LscParser;
