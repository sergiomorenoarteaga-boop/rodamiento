// ========================================
// BASE DE DATOS DE RODAMIENTOS SKF
// ========================================
window.bearingDatabase = {
    "6200": {
        name: "SKF 6200",
        type: "Rodamiento de bolas",
        innerDiameter: 10,
        outerDiameter: 30,
        width: 9,
        ballCount: 7,
        ballDiameter: 6.35,
        contactAngle: 0,
        frequencies: { BPFO: 2.82, BPFI: 4.18, BSF: 1.99, FTF: 0.403 }
    },
    "6201": {
        name: "SKF 6201",
        type: "Rodamiento de bolas",
        innerDiameter: 12,
        outerDiameter: 32,
        width: 10,
        ballCount: 7,
        ballDiameter: 6.75,
        contactAngle: 0,
        frequencies: { BPFO: 2.82, BPFI: 4.18, BSF: 1.99, FTF: 0.403 }
    },
    "6202": {
        name: "SKF 6202",
        type: "Rodamiento de bolas",
        innerDiameter: 15,
        outerDiameter: 35,
        width: 11,
        ballCount: 7,
        ballDiameter: 7.14,
        contactAngle: 0,
        frequencies: { BPFO: 2.82, BPFI: 4.18, BSF: 1.99, FTF: 0.403 }
    },
    "6203": {
        name: "SKF 6203",
        type: "Rodamiento de bolas",
        innerDiameter: 17,
        outerDiameter: 40,
        width: 12,
        ballCount: 8,
        ballDiameter: 7.14,
        contactAngle: 0,
        frequencies: { BPFO: 3.18, BPFI: 4.82, BSF: 2.15, FTF: 0.398 }
    },
    "6204": {
        name: "SKF 6204",
        type: "Rodamiento de bolas",
        innerDiameter: 20,
        outerDiameter: 47,
        width: 14,
        ballCount: 8,
        ballDiameter: 7.94,
        contactAngle: 0,
        frequencies: { BPFO: 3.18, BPFI: 4.82, BSF: 2.15, FTF: 0.398 }
    },
    "6205": {
        name: "SKF 6205",
        type: "Rodamiento de bolas",
        innerDiameter: 25,
        outerDiameter: 52,
        width: 15,
        ballCount: 9,
        ballDiameter: 7.94,
        contactAngle: 0,
        frequencies: { BPFO: 3.58, BPFI: 5.42, BSF: 2.32, FTF: 0.398 }
    },
    "6206": {
        name: "SKF 6206",
        type: "Rodamiento de bolas",
        innerDiameter: 30,
        outerDiameter: 62,
        width: 16,
        ballCount: 9,
        ballDiameter: 9.52,
        contactAngle: 0,
        frequencies: { BPFO: 3.57, BPFI: 5.43, BSF: 2.32, FTF: 0.397 }
    },
    "6207": {
        name: "SKF 6207",
        type: "Rodamiento de bolas",
        innerDiameter: 35,
        outerDiameter: 72,
        width: 17,
        ballCount: 9,
        ballDiameter: 11.11,
        contactAngle: 0,
        frequencies: { BPFO: 3.57, BPFI: 5.43, BSF: 2.32, FTF: 0.397 }
    },
    "6208": {
        name: "SKF 6208",
        type: "Rodamiento de bolas",
        innerDiameter: 40,
        outerDiameter: 80,
        width: 18,
        ballCount: 9,
        ballDiameter: 12.7,
        contactAngle: 0,
        frequencies: { BPFO: 3.57, BPFI: 5.43, BSF: 2.32, FTF: 0.397 }
    },
    "6209": {
    name: "SKF 6209",
    type: "Rodamiento de bolas",
    innerDiameter: 45,
    outerDiameter: 85,
    width: 19,
    ballCount: 9,
    ballDiameter: 12.7,
    contactAngle: 0,
    frequencies: { BPFO: 3.57, BPFI: 5.43, BSF: 2.32, FTF: 0.397 }
    },
    "6304": {
        name: "SKF 6304",
        type: "Rodamiento de bolas",
        innerDiameter: 20,
        outerDiameter: 52,
        width: 15,
        ballCount: 7,
        ballDiameter: 11.11,
        contactAngle: 0,
        frequencies: { BPFO: 2.821, BPFI: 4.179, BSF: 1.994, FTF: 0.403 }
    },
    "6305": {
        name: "SKF 6305",
        type: "Rodamiento de bolas",
        innerDiameter: 25,
        outerDiameter: 62,
        width: 17,
        ballCount: 8,
        ballDiameter: 11.11,
        contactAngle: 0,
        frequencies: { BPFO: 3.18, BPFI: 4.82, BSF: 2.15, FTF: 0.398 }
    },
    "6306": {
        name: "SKF 6306",
        type: "Rodamiento de bolas",
        innerDiameter: 30,
        outerDiameter: 72,
        width: 19,
        ballCount: 8,
        ballDiameter: 13.49,
        contactAngle: 0,
        frequencies: { BPFO: 3.18, BPFI: 4.82, BSF: 2.15, FTF: 0.398 }
    }
};

console.log('✅ Base de datos de rodamientos cargada:', Object.keys(window.bearingDatabase).length, 'modelos');