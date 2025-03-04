export interface Product {
    name: string;
    category: string;
    price: string|number;
    description: string;
    
  }
  
  // Constant array of mock product data
  export const products: Product[] = [
        {
            name: "Whole Milk",
            category: "Dairy",
            price: "2.99",
            description: "1 gallon of whole milk"
        },
        {
            name: "Cheddar Cheese",
            category: "Dairy",
            price: "4.49",
            description: "Aged cheddar cheese block, 200g"
        },
        {
            name: "Greek Yogurt",
            category: "Dairy",
            price: "5.99",
            description: "Plain Greek yogurt, 500g"
        },
        {
            name: "Brown Eggs",
            category: "Dairy",
            price: "3.99",
            description: "Carton of 12 organic brown eggs"
        },
        {
            name: "Apples",
            category: "Fruits",
            price: "3.49",
            description: "1 kg of fresh red apples"
        },
        {
            name: "Bananas",
            category: "Fruits",
            price: "1.29",
            description: "1 kg of ripe bananas"
        },
        {
            name: "Oranges",
            category: "Fruits",
            price: "2.99",
            description: "1 kg of juicy oranges"
        },
        {
            name: "Strawberries",
            category: "Fruits",
            price: "4.99",
            description: "500g pack of fresh strawberries"
        },
        {
            name: "Carrots",
            category: "Vegetables",
            price: "1.99",
            description: "1 kg of fresh carrots"
        },
        {
            name: "Broccoli",
            category: "Vegetables",
            price: "2.49",
            description: "A head of fresh broccoli"
        },
        {
            name: "Tomatoes",
            category: "Vegetables",
            price: "2.99",
            description: "1 kg of vine-ripened tomatoes"
        },
        {
            name: "Potatoes",
            category: "Vegetables",
            price: "3.49",
            description: "2 kg bag of russet potatoes"
        },
        {
            name: "Chicken Breast",
            category: "Meat",
            price: "7.99",
            description: "Boneless, skinless chicken breast, 1 kg"
        },
        {
            name: "Ground Beef",
            category: "Meat",
            price: "8.99",
            description: "1 kg of fresh ground beef"
        },
        {
            name: "Salmon Fillet",
            category: "Seafood",
            price: "12.99",
            description: "Fresh Atlantic salmon fillet, 500g"
        },
        {
            name: "Shrimp",
            category: "Seafood",
            price: "9.99",
            description: "1 kg of frozen shrimp"
        },
        {
            name: "White Bread",
            category: "Bakery",
            price: "2.49",
            description: "Loaf of freshly baked white bread"
        },
        {
            name: "Whole Wheat Bread",
            category: "Bakery",
            price: "2.99",
            description: "Loaf of whole wheat bread"
        },
        {
            name: "Butter Croissants",
            category: "Bakery",
            price: "5.49",
            description: "Pack of 6 flaky butter croissants"
        },
        {
            name: "Rice",
            category: "Pantry",
            price: "6.99",
            description: "5 kg bag of long-grain white rice"
        },
        {
            name: "Pasta",
            category: "Pantry",
            price: "1.99",
            description: "500g pack of spaghetti pasta"
        },
        {
            name: "Tomato Sauce",
            category: "Pantry",
            price: "3.49",
            description: "Jar of organic tomato sauce, 500g"
        },
        {
            name: "Peanut Butter",
            category: "Pantry",
            price: "4.99",
            description: "Smooth peanut butter jar, 500g"
        },
        {
            name: "Olive Oil",
            category: "Pantry",
            price: "8.99",
            description: "Extra virgin olive oil, 1L"
        },
        {
            name: "Sugar",
            category: "Pantry",
            price: "2.49",
            description: "2 kg bag of white sugar"
        },
        {
            name: "Flour",
            category: "Pantry",
            price: "3.49",
            description: "2 kg bag of all-purpose flour"
        },
        {
            name: "Cereal",
            category: "Breakfast",
            price: "4.99",
            description: "500g box of whole grain cereal"
        },
        {
            name: "Oatmeal",
            category: "Breakfast",
            price: "3.99",
            description: "1 kg bag of rolled oats"
        },
        {
            name: "Coffee",
            category: "Beverages",
            price: "7.99",
            description: "500g pack of ground coffee"
        },
        {
            name: "Tea",
            category: "Beverages",
            price: "3.49",
            description: "100-count box of black tea bags"
        },
        {
            name: "Orange Juice",
            category: "Beverages",
            price: "4.99",
            description: "1L bottle of freshly squeezed orange juice"
        },
        {
            name: "Soda",
            category: "Beverages",
            price: "1.99",
            description: "2L bottle of cola"
        },
        {
            name: "Chocolate Bar",
            category: "Snacks",
            price: "1.99",
            description: "100g milk chocolate bar"
        },
        {
            name: "Potato Chips",
            category: "Snacks",
            price: "2.99",
            description: "Large bag of classic potato chips"
        },
        {
            name: "Mixed Nuts",
            category: "Snacks",
            price: "5.99",
            description: "500g bag of assorted mixed nuts"
        },
        {
            name: "Ice Cream",
            category: "Frozen Foods",
            price: "6.99",
            description: "1L tub of vanilla ice cream"
        },
        {
            name: "Frozen Pizza",
            category: "Frozen Foods",
            price: "5.99",
            description: "Medium-sized frozen cheese pizza"
        },
        {
            name: "Laundry Detergent",
            category: "Household",
            price: "10.99",
            description: "1.5L bottle of liquid laundry detergent"
        },
        {
            name: "Dishwashing Liquid",
            category: "Household",
            price: "2.99",
            description: "500ml bottle of dish soap"
        },
        {
            name: "Toilet Paper",
            category: "Household",
            price: "6.99",
            description: "12-roll pack of soft toilet paper"
        },
        {
            name: "Shampoo",
            category: "Personal Care",
            price: "5.49",
            description: "500ml bottle of moisturizing shampoo"
        },
        {
            name: "Toothpaste",
            category: "Personal Care",
            price: "3.49",
            description: "Fluoride toothpaste, 150g"
        },
        {
            name: "Hand Soap",
            category: "Personal Care",
            price: "2.99",
            description: "250ml bottle of antibacterial hand soap"
        },
        { 
            name: "Low-Fat Milk",
            category: "Dairy",
            price: "2.89", 
            description: "1 gallon of low-fat milk" 
        },
        { 
            name: "Mozzarella Cheese", 
            category: "Dairy", 
            price: "5.99", 
            description: "200g pack of shredded mozzarella cheese" 
        },
        { 
            name: "Sour Cream", 
            category: "Dairy", 
            price: "2.49", 
            description: "500g tub of sour cream" 
        },
        { name: "Cottage Cheese",
          category: "Dairy", 
          price: "3.99", 
          description: "500g tub of cottage cheese" 
        },
        { 
            name: "Pineapple", 
            category: "Fruits", 
            price: "3.99", 
            description: "Whole fresh pineapple" 
        },
        { 
            name: "Grapes", 
            category: "Fruits", 
            price: "4.99", 
            description: "1 kg of seedless grapes" 
        },
        { 
            name: "Watermelon", 
            category: "Fruits", 
            price: "6.99", 
            description: "Whole fresh watermelon" 
        },
        { 
            name: "Blueberries", 
            category: "Fruits", 
            price: "5.49", 
            description: "250g pack of fresh blueberries" 
        },
        { 
            name: "Spinach", 
            category: "Vegetables", 
            price: "2.49", 
            description: "Fresh spinach bunch" 
        },
        { 
            name: "Cucumber", 
            category: "Vegetables", 
            price: "1.29", 
            description: "1 large cucumber" 
        },
        { 
            name: "Bell Peppers", 
            category: "Vegetables", 
            price: "3.99", 
            description: "Pack of 3 assorted bell peppers" 
        },
        { 
            name: "Onions", 
            category: "Vegetables", 
            price: "1.99", 
            description: "1 kg of yellow onions" 
        },
        { 
            name: "Pork Chops", 
            category: "Meat", 
            price: "9.49", 
            description: "1 kg of bone-in pork chops" 
        },
        { 
            name: "Bacon", 
            category: "Meat", 
            price: "5.99", 
            description: "500g pack of smoked bacon" 
        },
        { 
            name: "Tilapia Fillet", 
            category: "Seafood", 
            price: "7.99", 
            description: "1 kg of fresh tilapia fillets" 
        },
        { 
            name: "Crab Meat", 
            category: "Seafood", 
            price: "14.99", 
            description: "500g of fresh crab meat" 
        },
        { name: "Grapes", 
            category: "Fruits", 
            price: "4.99", 
            description: "1 kg of seedless grapes" 
        },
        { name: "Watermelon", 
            category: "Fruits", 
            price: "6.99", 
            description: "Whole fresh watermelon" 
        },
        { 
            name: "Blueberries", 
            category: "Fruits", 
            price: "5.49", 
            description: "250g pack of fresh blueberries" 
        },
        { 
            name: "Spinach", 
            category: "Vegetables", 
            price: "2.49", 
            description: "Fresh spinach bunch" 
        },
        { 
            name: "Onions", 
            category: "Vegetables", 
            price: "1.99", 
            description: "1 kg of yellow onions" 
        },
        { 
            name: "Bacon", 
            category: "Meat", 
            price: "5.99", 
            description: "500g pack of smoked bacon" 
        },
        { 
            name: "Tilapia Fillet", 
            category: "Seafood", 
            price: "7.99", 
            description: "1 kg of fresh tilapia fillets" 
        },
    ];
    
    
       

