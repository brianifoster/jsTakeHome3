  var name = prompt("What's your name?", "John");
  var favColor = prompt("What's your favorite color?", "red, orange, yellow, green, blue, pink, purple, black, white, grey");

    switch (favColor.toLowerCase()) {
      case 'red':
        alert("Red is the color of blood, " + name + " the Warrior");
        break;
      case 'orange':
        alert("Orange is the color of perseverance, " + name + " the Endurer");
        break;
      case 'yellow':
        alert("Yellow is the color of happiness, " + name + " the Merrimaker");
        break;
      case 'green':
        alert("Green is the color of life, " + name + " the Healer");
        break;
      case 'blue':
        alert("Blue is the color of wisdom, " + name + " the Sage");
        break;
      case 'pink':
        alert("Pink is the color of love, " + name + " the Comforter");
        break;
      case 'purple':
        alert("Purple is the color of magic, " + name + " the Mage");
        break;
      case 'black':
        alert("Black is the color of power, " + name + " the Fierce");
        break;
      case 'white':
        alert("White is the color of purity, " + name + " the Holy");
        break;
      case 'grey':
        alert("Grey is the color of balance, " + name + " the Reserved");
        break;
      default:
        alert(favColor + " isn't available, " + name + " , please reload page and choose from the colors available.");
    }
