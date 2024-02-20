function weekDayName(a) {
  switch (a) {
    case 1:
      return "Luni";
      break;
    case 2:
      return "Marti";
      break;
    case 3:
      return "Miercuri";
      break;
    case 4:
      return "Joi";
      break;
    case 5:
      return "Vineri";
      break;
    case 6:
      return "Sambata";
      break;
    case 7:
      return "Duminica";
      break;
    default:
      return "Nu exista";
      break;
  }
}

console.log(weekDayName(5));
console.log(weekDayName(4));
console.log(weekDayName(2));
console.log(weekDayName(3));
