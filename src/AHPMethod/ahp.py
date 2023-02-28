import ahpy 
ahpy
# Define la matriz de comparación de criterios
criteria = ahpy.Compare('Criteria', ['Costo', 'Tiempo', 'Calidad'])

criteria.add_children([
    ahpy.Compare('Costo', ['Bajo', 'Medio', 'Alto']),
    ahpy.Compare('Tiempo', ['Rápido', 'Moderado', 'Lento']),
    ahpy.Compare('Calidad', ['Buena', 'Regular', 'Mala']),
])

# Define la matriz de comparación de alternativas
alternatives = ahpy.Compare('Alternativas', ['A1', 'A2', 'A3'])

alternatives.add_children([
    ahpy.Compare('A1', [1, 5, 3]),
    ahpy.Compare('A2', [1/5, 1, 1/3]),
    ahpy.Compare('A3', [1/3, 3, 1]),
])

# Calcula los pesos de los criterios y las alternativas
criteria_weights = criteria.get_weights()
alternative_weights = alternatives.get_weights(criteria_weights)

# Imprime los resultados
print(criteria_weights)
print(alternative_weights)
