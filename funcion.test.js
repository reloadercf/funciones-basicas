const { llamada } = require('./app')

test('Testing de llamada', () => {
    expect(llamada("Gris", "Hola")).toBe('Gris Hola')
})