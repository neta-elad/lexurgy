// Generated from Lsc.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\'\u0134\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0003\u0002\u0005\u0002[\n\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002_\n\u0002\f\u0002\u000e\u0002b\u000b\u0002\u0003",
    "\u0002\u0007\u0002e\n\u0002\f\u0002\u000e\u0002h\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u0003n\n\u0003\u0003\u0004",
    "\u0005\u0004q\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004w\n\u0004\u0003\u0005\u0005\u0005z\n\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005~\n\u0005\u0003\u0006\u0005\u0006\u0081\n\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u0087\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0005\b\u008c\n\b\u0003\b\u0003\b\u0003",
    "\b\u0005\b\u0091\n\b\u0003\b\u0005\b\u0094\n\b\u0003\t\u0006\t\u0097",
    "\n\t\r\t\u000e\t\u0098\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0007\"\u0111\n\"\f\"",
    "\u000e\"\u0114\u000b\"\u0003#\u0003#\u0007#\u0118\n#\f#\u000e#\u011b",
    "\u000b#\u0003$\u0006$\u011e\n$\r$\u000e$\u011f\u0003%\u0003%\u0003&",
    "\u0006&\u0125\n&\r&\u000e&\u0126\u0003\'\u0003\'\u0003(\u0003(\u0003",
    ")\u0003)\u0003*\u0003*\u0003+\u0003+\u0003,\u0003,\u0002\u0002-\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a",
    "3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&K\'M\u0002O\u0002",
    "Q\u0002S\u0002U\u0002W\u0002\u0003\u0002\b\u0004\u0002\f\f\u000f\u000f",
    "\u0003\u0002C\\\u0003\u0002c|\u0005\u00022;C\\c|\u0003\u00022;\u000f",
    "\u0002\f\f\u000f\u000f\"#%&*/11<<?B]]__aa}}\u007f\u007f\u0002\u013f",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002",
    "\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002",
    "\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003",
    "\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002",
    "\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002",
    "\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002",
    "\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002",
    "=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003",
    "\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002",
    "\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002",
    "\u0002\u0002K\u0003\u0002\u0002\u0002\u0003Z\u0003\u0002\u0002\u0002",
    "\u0005k\u0003\u0002\u0002\u0002\u0007p\u0003\u0002\u0002\u0002\ty\u0003",
    "\u0002\u0002\u0002\u000b\u0080\u0003\u0002\u0002\u0002\r\u0088\u0003",
    "\u0002\u0002\u0002\u000f\u008b\u0003\u0002\u0002\u0002\u0011\u0096\u0003",
    "\u0002\u0002\u0002\u0013\u009a\u0003\u0002\u0002\u0002\u0015\u009c\u0003",
    "\u0002\u0002\u0002\u0017\u009e\u0003\u0002\u0002\u0002\u0019\u00a0\u0003",
    "\u0002\u0002\u0002\u001b\u00a2\u0003\u0002\u0002\u0002\u001d\u00a4\u0003",
    "\u0002\u0002\u0002\u001f\u00a6\u0003\u0002\u0002\u0002!\u00a8\u0003",
    "\u0002\u0002\u0002#\u00aa\u0003\u0002\u0002\u0002%\u00ac\u0003\u0002",
    "\u0002\u0002\'\u00ae\u0003\u0002\u0002\u0002)\u00b0\u0003\u0002\u0002",
    "\u0002+\u00b2\u0003\u0002\u0002\u0002-\u00b4\u0003\u0002\u0002\u0002",
    "/\u00b6\u0003\u0002\u0002\u00021\u00bc\u0003\u0002\u0002\u00023\u00c4",
    "\u0003\u0002\u0002\u00025\u00ce\u0003\u0002\u0002\u00027\u00d7\u0003",
    "\u0002\u0002\u00029\u00e2\u0003\u0002\u0002\u0002;\u00e9\u0003\u0002",
    "\u0002\u0002=\u00f5\u0003\u0002\u0002\u0002?\u00ff\u0003\u0002\u0002",
    "\u0002A\u0104\u0003\u0002\u0002\u0002C\u010e\u0003\u0002\u0002\u0002",
    "E\u0115\u0003\u0002\u0002\u0002G\u011d\u0003\u0002\u0002\u0002I\u0121",
    "\u0003\u0002\u0002\u0002K\u0124\u0003\u0002\u0002\u0002M\u0128\u0003",
    "\u0002\u0002\u0002O\u012a\u0003\u0002\u0002\u0002Q\u012c\u0003\u0002",
    "\u0002\u0002S\u012e\u0003\u0002\u0002\u0002U\u0130\u0003\u0002\u0002",
    "\u0002W\u0132\u0003\u0002\u0002\u0002Y[\u0005\u0011\t\u0002ZY\u0003",
    "\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002",
    "\\`\u0005W,\u0002]_\n\u0002\u0002\u0002^]\u0003\u0002\u0002\u0002_b",
    "\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002af\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002ce\u0005\u000f",
    "\b\u0002dc\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003",
    "\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gi\u0003\u0002\u0002\u0002",
    "hf\u0003\u0002\u0002\u0002ij\b\u0002\u0002\u0002j\u0004\u0003\u0002",
    "\u0002\u0002km\u0007.\u0002\u0002ln\u0005\u0011\t\u0002ml\u0003\u0002",
    "\u0002\u0002mn\u0003\u0002\u0002\u0002n\u0006\u0003\u0002\u0002\u0002",
    "oq\u0005\u0011\t\u0002po\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002",
    "\u0002qr\u0003\u0002\u0002\u0002rs\u0007?\u0002\u0002st\u0007@\u0002",
    "\u0002tv\u0003\u0002\u0002\u0002uw\u0005\u0011\t\u0002vu\u0003\u0002",
    "\u0002\u0002vw\u0003\u0002\u0002\u0002w\b\u0003\u0002\u0002\u0002xz",
    "\u0005\u0011\t\u0002yx\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002",
    "z{\u0003\u0002\u0002\u0002{}\u00071\u0002\u0002|~\u0005\u0011\t\u0002",
    "}|\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\n\u0003\u0002",
    "\u0002\u0002\u007f\u0081\u0005\u0011\t\u0002\u0080\u007f\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u00071\u0002\u0002\u0083\u0084\u00071\u0002",
    "\u0002\u0084\u0086\u0003\u0002\u0002\u0002\u0085\u0087\u0005\u0011\t",
    "\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002",
    "\u0002\u0087\f\u0003\u0002\u0002\u0002\u0088\u0089\u0007a\u0002\u0002",
    "\u0089\u000e\u0003\u0002\u0002\u0002\u008a\u008c\u0005\u0011\t\u0002",
    "\u008b\u008a\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c\u0090\u0003\u0002\u0002\u0002\u008d\u008e\u0007\u000f\u0002\u0002",
    "\u008e\u0091\u0007\f\u0002\u0002\u008f\u0091\u0007\f\u0002\u0002\u0090",
    "\u008d\u0003\u0002\u0002\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091",
    "\u0093\u0003\u0002\u0002\u0002\u0092\u0094\u0005\u0011\t\u0002\u0093",
    "\u0092\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094",
    "\u0010\u0003\u0002\u0002\u0002\u0095\u0097\u0007\"\u0002\u0002\u0096",
    "\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098",
    "\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099",
    "\u0012\u0003\u0002\u0002\u0002\u009a\u009b\u0007*\u0002\u0002\u009b",
    "\u0014\u0003\u0002\u0002\u0002\u009c\u009d\u0007+\u0002\u0002\u009d",
    "\u0016\u0003\u0002\u0002\u0002\u009e\u009f\u0007,\u0002\u0002\u009f",
    "\u0018\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007]\u0002\u0002\u00a1",
    "\u001a\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007_\u0002\u0002\u00a3",
    "\u001c\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007}\u0002\u0002\u00a5",
    "\u001e\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007\u007f\u0002\u0002\u00a7",
    " \u0003\u0002\u0002\u0002\u00a8\u00a9\u0007-\u0002\u0002\u00a9\"\u0003",
    "\u0002\u0002\u0002\u00aa\u00ab\u0007A\u0002\u0002\u00ab$\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0007/\u0002\u0002\u00ad&\u0003\u0002\u0002",
    "\u0002\u00ae\u00af\u0007<\u0002\u0002\u00af(\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0007#\u0002\u0002\u00b1*\u0003\u0002\u0002\u0002\u00b2",
    "\u00b3\u0007&\u0002\u0002\u00b3,\u0003\u0002\u0002\u0002\u00b4\u00b5",
    "\u0007B\u0002\u0002\u00b5.\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007",
    "E\u0002\u0002\u00b7\u00b8\u0007n\u0002\u0002\u00b8\u00b9\u0007c\u0002",
    "\u0002\u00b9\u00ba\u0007u\u0002\u0002\u00ba\u00bb\u0007u\u0002\u0002",
    "\u00bb0\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007H\u0002\u0002\u00bd",
    "\u00be\u0007g\u0002\u0002\u00be\u00bf\u0007c\u0002\u0002\u00bf\u00c0",
    "\u0007v\u0002\u0002\u00c0\u00c1\u0007w\u0002\u0002\u00c1\u00c2\u0007",
    "t\u0002\u0002\u00c2\u00c3\u0007g\u0002\u0002\u00c32\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0007F\u0002\u0002\u00c5\u00c6\u0007k\u0002\u0002",
    "\u00c6\u00c7\u0007c\u0002\u0002\u00c7\u00c8\u0007e\u0002\u0002\u00c8",
    "\u00c9\u0007t\u0002\u0002\u00c9\u00ca\u0007k\u0002\u0002\u00ca\u00cb",
    "\u0007v\u0002\u0002\u00cb\u00cc\u0007k\u0002\u0002\u00cc\u00cd\u0007",
    "e\u0002\u0002\u00cd4\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007*\u0002",
    "\u0002\u00cf\u00d0\u0007d\u0002\u0002\u00d0\u00d1\u0007g\u0002\u0002",
    "\u00d1\u00d2\u0007h\u0002\u0002\u00d2\u00d3\u0007q\u0002\u0002\u00d3",
    "\u00d4\u0007t\u0002\u0002\u00d4\u00d5\u0007g\u0002\u0002\u00d5\u00d6",
    "\u0007+\u0002\u0002\u00d66\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007",
    "*\u0002\u0002\u00d8\u00d9\u0007h\u0002\u0002\u00d9\u00da\u0007n\u0002",
    "\u0002\u00da\u00db\u0007q\u0002\u0002\u00db\u00dc\u0007c\u0002\u0002",
    "\u00dc\u00dd\u0007v\u0002\u0002\u00dd\u00de\u0007k\u0002\u0002\u00de",
    "\u00df\u0007p\u0002\u0002\u00df\u00e0\u0007i\u0002\u0002\u00e0\u00e1",
    "\u0007+\u0002\u0002\u00e18\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007",
    "U\u0002\u0002\u00e3\u00e4\u0007{\u0002\u0002\u00e4\u00e5\u0007o\u0002",
    "\u0002\u00e5\u00e6\u0007d\u0002\u0002\u00e6\u00e7\u0007q\u0002\u0002",
    "\u00e7\u00e8\u0007n\u0002\u0002\u00e8:\u0003\u0002\u0002\u0002\u00e9",
    "\u00ea\u0007F\u0002\u0002\u00ea\u00eb\u0007g\u0002\u0002\u00eb\u00ec",
    "\u0007t\u0002\u0002\u00ec\u00ed\u0007q\u0002\u0002\u00ed\u00ee\u0007",
    "o\u0002\u0002\u00ee\u00ef\u0007c\u0002\u0002\u00ef\u00f0\u0007p\u0002",
    "\u0002\u00f0\u00f1\u0007k\u0002\u0002\u00f1\u00f2\u0007|\u0002\u0002",
    "\u00f2\u00f3\u0007g\u0002\u0002\u00f3\u00f4\u0007t\u0002\u0002\u00f4",
    "<\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007T\u0002\u0002\u00f6\u00f7",
    "\u0007q\u0002\u0002\u00f7\u00f8\u0007o\u0002\u0002\u00f8\u00f9\u0007",
    "c\u0002\u0002\u00f9\u00fa\u0007p\u0002\u0002\u00fa\u00fb\u0007k\u0002",
    "\u0002\u00fb\u00fc\u0007|\u0002\u0002\u00fc\u00fd\u0007g\u0002\u0002",
    "\u00fd\u00fe\u0007t\u0002\u0002\u00fe>\u0003\u0002\u0002\u0002\u00ff",
    "\u0100\u0007V\u0002\u0002\u0100\u0101\u0007j\u0002\u0002\u0101\u0102",
    "\u0007g\u0002\u0002\u0102\u0103\u0007p\u0002\u0002\u0103@\u0003\u0002",
    "\u0002\u0002\u0104\u0105\u0007r\u0002\u0002\u0105\u0106\u0007t\u0002",
    "\u0002\u0106\u0107\u0007q\u0002\u0002\u0107\u0108\u0007r\u0002\u0002",
    "\u0108\u0109\u0007c\u0002\u0002\u0109\u010a\u0007i\u0002\u0002\u010a",
    "\u010b\u0007c\u0002\u0002\u010b\u010c\u0007v\u0002\u0002\u010c\u010d",
    "\u0007g\u0002\u0002\u010dB\u0003\u0002\u0002\u0002\u010e\u0112\u0005",
    "M\'\u0002\u010f\u0111\u0005Q)\u0002\u0110\u010f\u0003\u0002\u0002\u0002",
    "\u0111\u0114\u0003\u0002\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002",
    "\u0112\u0113\u0003\u0002\u0002\u0002\u0113D\u0003\u0002\u0002\u0002",
    "\u0114\u0112\u0003\u0002\u0002\u0002\u0115\u0119\u0005O(\u0002\u0116",
    "\u0118\u0005Q)\u0002\u0117\u0116\u0003\u0002\u0002\u0002\u0118\u011b",
    "\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002\u0119\u011a",
    "\u0003\u0002\u0002\u0002\u011aF\u0003\u0002\u0002\u0002\u011b\u0119",
    "\u0003\u0002\u0002\u0002\u011c\u011e\u0005S*\u0002\u011d\u011c\u0003",
    "\u0002\u0002\u0002\u011e\u011f\u0003\u0002\u0002\u0002\u011f\u011d\u0003",
    "\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002\u0120H\u0003",
    "\u0002\u0002\u0002\u0121\u0122\u0005U+\u0002\u0122J\u0003\u0002\u0002",
    "\u0002\u0123\u0125\u0005U+\u0002\u0124\u0123\u0003\u0002\u0002\u0002",
    "\u0125\u0126\u0003\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002\u0002",
    "\u0126\u0127\u0003\u0002\u0002\u0002\u0127L\u0003\u0002\u0002\u0002",
    "\u0128\u0129\t\u0003\u0002\u0002\u0129N\u0003\u0002\u0002\u0002\u012a",
    "\u012b\t\u0004\u0002\u0002\u012bP\u0003\u0002\u0002\u0002\u012c\u012d",
    "\t\u0005\u0002\u0002\u012dR\u0003\u0002\u0002\u0002\u012e\u012f\t\u0006",
    "\u0002\u0002\u012fT\u0003\u0002\u0002\u0002\u0130\u0131\n\u0007\u0002",
    "\u0002\u0131V\u0003\u0002\u0002\u0002\u0132\u0133\u0007%\u0002\u0002",
    "\u0133X\u0003\u0002\u0002\u0002\u0015\u0002Z`fmpvy}\u0080\u0086\u008b",
    "\u0090\u0093\u0098\u0112\u0119\u011f\u0126\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LscLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LscLexer.prototype = Object.create(antlr4.Lexer.prototype);
LscLexer.prototype.constructor = LscLexer;

Object.defineProperty(LscLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

LscLexer.EOF = antlr4.Token.EOF;
LscLexer.COMMENT = 1;
LscLexer.SEP = 2;
LscLexer.CHANGE = 3;
LscLexer.CONDITION = 4;
LscLexer.EXCLUSION = 5;
LscLexer.ANCHOR = 6;
LscLexer.NEWLINE = 7;
LscLexer.WHITESPACE = 8;
LscLexer.O_PAREN = 9;
LscLexer.C_PAREN = 10;
LscLexer.NULL = 11;
LscLexer.MATRIX_START = 12;
LscLexer.MATRIX_END = 13;
LscLexer.LIST_START = 14;
LscLexer.LIST_END = 15;
LscLexer.AT_LEAST_ONE = 16;
LscLexer.OPTIONAL = 17;
LscLexer.HYPHEN = 18;
LscLexer.RULE_START = 19;
LscLexer.NEGATION = 20;
LscLexer.WORD_BOUNDARY = 21;
LscLexer.CLASSREF = 22;
LscLexer.CLASS_DECL = 23;
LscLexer.FEATURE_DECL = 24;
LscLexer.DIACRITIC = 25;
LscLexer.DIA_BEFORE = 26;
LscLexer.DIA_FLOATING = 27;
LscLexer.SYMBOL = 28;
LscLexer.DEROMANIZER = 29;
LscLexer.ROMANIZER = 30;
LscLexer.SUBRULE = 31;
LscLexer.PROPAGATE = 32;
LscLexer.FEATURE = 33;
LscLexer.VALUE = 34;
LscLexer.NUMBER = 35;
LscLexer.STR1 = 36;
LscLexer.STR = 37;

LscLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

LscLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

LscLexer.prototype.literalNames = [ null, null, null, null, null, null, 
                                    "'_'", null, null, "'('", "')'", "'*'", 
                                    "'['", "']'", "'{'", "'}'", "'+'", "'?'", 
                                    "'-'", "':'", "'!'", "'$'", "'@'", "'Class'", 
                                    "'Feature'", "'Diacritic'", "'(before)'", 
                                    "'(floating)'", "'Symbol'", "'Deromanizer'", 
                                    "'Romanizer'", "'Then'", "'propagate'" ];

LscLexer.prototype.symbolicNames = [ null, "COMMENT", "SEP", "CHANGE", "CONDITION", 
                                     "EXCLUSION", "ANCHOR", "NEWLINE", "WHITESPACE", 
                                     "O_PAREN", "C_PAREN", "NULL", "MATRIX_START", 
                                     "MATRIX_END", "LIST_START", "LIST_END", 
                                     "AT_LEAST_ONE", "OPTIONAL", "HYPHEN", 
                                     "RULE_START", "NEGATION", "WORD_BOUNDARY", 
                                     "CLASSREF", "CLASS_DECL", "FEATURE_DECL", 
                                     "DIACRITIC", "DIA_BEFORE", "DIA_FLOATING", 
                                     "SYMBOL", "DEROMANIZER", "ROMANIZER", 
                                     "SUBRULE", "PROPAGATE", "FEATURE", 
                                     "VALUE", "NUMBER", "STR1", "STR" ];

LscLexer.prototype.ruleNames = [ "COMMENT", "SEP", "CHANGE", "CONDITION", 
                                 "EXCLUSION", "ANCHOR", "NEWLINE", "WHITESPACE", 
                                 "O_PAREN", "C_PAREN", "NULL", "MATRIX_START", 
                                 "MATRIX_END", "LIST_START", "LIST_END", 
                                 "AT_LEAST_ONE", "OPTIONAL", "HYPHEN", "RULE_START", 
                                 "NEGATION", "WORD_BOUNDARY", "CLASSREF", 
                                 "CLASS_DECL", "FEATURE_DECL", "DIACRITIC", 
                                 "DIA_BEFORE", "DIA_FLOATING", "SYMBOL", 
                                 "DEROMANIZER", "ROMANIZER", "SUBRULE", 
                                 "PROPAGATE", "FEATURE", "VALUE", "NUMBER", 
                                 "STR1", "STR", "UPPER", "LOWER", "CHAR", 
                                 "DIGIT", "ANY", "COMMENT_START" ];

LscLexer.prototype.grammarFileName = "Lsc.g4";



exports.LscLexer = LscLexer;
