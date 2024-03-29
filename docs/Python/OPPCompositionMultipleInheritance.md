---
authors: Buzz
name: Buzz
title: "[Concept]淺談物件導向關於繼承這件事情"
tags: [OOP, Inheritance, Python, Interface, Composition, Duck Typing, Multiple Inheritance]
---

# 以 python 為例 - 淺談物件導向中的組合和介面概念及多重繼承

> 在物件導向的程式語言中，組合（Composition）和介面（Interface）是兩個重要的概念。
> 以下開始解釋一下這兩個重要概念

在 Python 中，組合（Composition）和介面（Interface），但在 Python 中幾乎是不會看到介面的存在的，下面再好好解釋一下。

### 組合（Composition）：

組合是指在一個類別中使用其他類別的實例作為其屬性。
這種方式可以實現將多個類別組合成一個更大的類別，以用來實現複雜的功能組合。
例如，一個汽車可以包含多個零件或小系統，如引擎、輪胎、懸吊系統等，這些零件和小系統可以作為汽車類別的屬性。透過組合，我們可以在汽車類別中使用這些零件和小系統，並實現汽車的相關功能。如果未來需要修改或擴展汽車的功能，我們只需關注相應的組件或汽車類別本身，而不需要修改整個程式碼，這提高了程式碼的重用性和維護性。

以下是一個簡單的組合（Composition）範例：

```python showLineNumbers
class Engine:
    def start(self):
        print("引擎啟動")

class Car:
    def __init__(self):
        self.engine = Engine()  # 使用Engine類別的實例作為Car類別的屬性

    def start(self):
        print("車子啟動")
        self.engine.start()  # 調用Engine類別的start()方法

my_car = Car()
my_car.start()
# 輸出：
# 車子啟動
# 引擎啟動
```

### 介面（Interface）：

可以把它想像成一個合約或規定，規定了類別（或物件）應該實現哪些方法或擁有哪些屬性，就像生活中的合約會規定了雙方應該履行的義務一樣。

在程式設計中，介面通常是一個抽象的類別或類別的集合，其中定義了一組方法或有哪些屬性，但並不實現具體的內容(也就是說不會實作或是直接產生一個實例的物件出來)。而類別可以實現一個或多個介面，表示它們符合了這些介面所定義的規範。

繼承是一種類別之間的層次化結構，其中子類別繼承了父類別的屬性和方法，並且可以重寫或擴展它們。繼承通常用於表示"是一個"的關係，例如貓是一個動物，所以貓類別可以繼承動物類別，繼承其屬性和方法。

#### 介面（Interface）到底是在什麼使用情境下會使用？

介面（Interface）通常用於以下情境：

定義合約：介面可以定義一組方法、屬性和事件，作為類別之間的合約。類別可以實現（implement）這些介面，確保它們擁有相同的成員。這樣可以確保在多個類別中實現相同的行為，提供了一種統一的界面。

擴展性：介面可以用於定義擴展性的合約，使得類別可以在不修改原始程式碼的情況下進行擴展。這樣可以提供更好的程式碼組織和可維護性。

標準化：介面可以用於定義標準化的合約，例如 API 或協議。這樣可以確保不同的實現都擁有相同的方法和屬性，從而達到互操作性和相容性。

多重繼承：有些程式語言會不支援多重類別繼承，但可以實現多個介面。這樣類別可以實現多個介面，從而具有多個不同的行為和特性，**但以這邊 Python 來說，Python 是支持多重繼承的語言，並且 Python 的 "鴨子類型（Duck Typing）" 特性也讓類別之間的互動更加靈活，不需要明確地聲明類別實現某個特定的介面。**。

### 什麼是鴨子類型（Duck Typing）？

"鴨子類型（Duck Typing）" 是一種動態型別的概念，通常與物件導向程式設計（OOP）相關。

在 Python 中，不需要顯式地宣告變數的資料型別，而是根據變數在運行時的實際型別來決定其變數型別和其運算結果產生的值。
這就像說，如果一隻鳥走起來像鴨子、叫聲像鴨子，那麼我們就可以把它當作鴨子來對待，不需要事先檢查它是否是鴨子。這種方式稱為 "鴨子類型"。

在 Python 中，當你呼叫一個物件的方法時，程式碼在運行時會在運行時檢查該物件是否具有該方法，而不是在編譯(撰寫程式時)時檢查物件的型別。只要物件具有相應的方法，並且可以正確地呼叫這些方法，就被視為具有相同的型別。

這樣的特性使得 Python 中的多型性（Polymorphism）非常靈活，並且不需要嚴格的型別檢查和型宣告。這與傳統的靜態型別語言（例如 Java、C++）不同，它們在編譯時(撰寫程式時)需要明確宣告物件的型別。鴨子類型（Duck Typing）讓 Python 的程式碼更具靈活性和動態性，但也需要開發者自行確保物件的方法使用是正確的，否則可能在運行時產生錯誤。

你可以隨時創建一個物件，並且在後面的程式碼中根據需要隨意添加或修改物件的屬性和方法，而不需要事先定義其型別或接口。這意味著你可以在程式碼中靈活地操作物件的屬性和方法，並且根據實際需求進行動態調整，而不受嚴格的型別檢查限制。

### 在 Python 介面較少使用也幾乎很少使用

在 Python 中，因為它支援多重繼承和鴨子類型特性，所以通常不需要像其他語言那樣使用介面。

多重繼承允許一個類別繼承自多個父類別，這讓類別可以直接繼承多個父類別的屬性和方法，不需要額外的介面來定義共同的行為。

而鴨子類型特性則表示在 Python 中，物件的型別是根據其實際擁有的屬性和方法來判定的，而不是依賴於類別的定義。只要物件擁有某個屬性或方法，就可以直接使用，不需要特定的型別或接口。

因此，Python 中的多重繼承和鴨子類型特性讓開發者可以更靈活地組織和使用類別，且不需要像其他語言那樣使用介面來實現特定的行為。這也是為什麼在 Python 中，介面的使用相對較少的原因之一。

### 那到底什麼是多重繼承？

請看以下程式碼範例

```python showLineNumbers
class Animal:
    def move(self):
        print("動物可以移動")

class Flyable:
    def fly(self):
        print("可以飛行")

class Swimmable:
    def swim(self):
        print("可以游泳")

# Dog 類別繼承自 Animal 和 Swimmable 兩個父類別
class Dog(Animal, Swimmable):
    def bark(self):
        print("狗可以吠叫")

# Bird 類別繼承自 Animal 和 Flyable 兩個父類別
class Bird(Animal, Flyable):
    def chirp(self):
        print("鳥可以鳴叫")

# 實例化 Dog 物件並呼叫其方法
my_dog = Dog()
my_dog.move()  # 可以呼叫 Animal 的 move 方法
my_dog.swim()  # 可以呼叫 Swimmable 的 swim 方法
my_dog.bark()  # 可以呼叫自己的 bark 方法

# 實例化 Bird 物件並呼叫其方法
my_bird = Bird()
my_bird.move()  # 可以呼叫 Animal 的 move 方法
my_bird.fly()   # 可以呼叫 Flyable 的 fly 方法
my_bird.chirp() # 可以呼叫自己的 chirp 方法
```

在這個範例中，我們定義了三個類別：Animal、Flyable、Swimmable。Dog 類別繼承自 Animal 和 Swimmable 兩個父類別，Bird 類別繼承自 Animal 和 Flyable 兩個父類別。

透過多重繼承，Dog 和 Bird 類別都可以繼承其父類別的屬性和方法。例如，Dog 類別可以呼叫 Animal 的 move 方法、Swimmable 的 swim 方法、以及自己的 bark 方法。Bird 類別則可以呼叫 Animal 的 move 方法、Flyable 的 fly 方法、以及自己的 chirp 方法。

這種方式讓我們可以在不需要介面的情況下，直接使用多個父類別的屬性和方法，讓程式碼更加靈活和簡潔。
