class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def eat(self):
        return f"{self.name} ест."

    def speak(self):
        return "Издает звук"

    def __str__(self):
        return f"Животное по имени {self.name}"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return "Гав-гав!"

    def __str__(self):
        return f"Собака {self.breed}: {self.name}, возраст: {self.age}"


class Cat(Animal):
    def __init__(self, name, age, color, lives_left):
        super().__init__(name, age, color)
        self.lives_left = lives_left

    def speak(self):
        return "Мяу!"

    def __str__(self):
        return f"Кошка: {self.name}, осталось жизней: {self.lives_left}"