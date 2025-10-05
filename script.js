let count = 0;

function cc(card) {
 
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
  } else {
    count--;
  } 

  return count > 0 ? `${count} Bet` : `${count} Hold`;
  
};

