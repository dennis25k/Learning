function Book(id, title, author, themes = []) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.themes = themes;
}

Book.prototype.addTheme = function(newTheme) {
	this.themes = [...this.themes, newTheme];
}

const book1 = new Book(1, "Lord of the Rings", "JRR Tolkien");
const book2 = new Book(2, "The Trial", "Franz Kafka");

book1.addTheme("Fantasy");
book1.addTheme("Adventure")
book1.addTheme("Action");

console.log(book1);
console.log(book2);