from models import Dog, Cat

animals = [
    Dog("Шарик", 3, "коричневый", "Овчарка"),
    Cat("Мурка", 2, "белый", 9)
]

print("Проверка")

for animal in animals:
    print(animal)
    
    print(f"Действие: {animal.eat()}")
    
    print(f"Голос: {animal.speak()}")
    print("--------------")

print(f"Порода собаки: {animals[0].breed}")
print(f"Жизней у кошки: {animals[1].lives_left}")