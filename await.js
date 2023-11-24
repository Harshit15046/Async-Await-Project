// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


function getButter() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("husband got butter!");
        resolve();
      }, 2000);
    });
  }
  
  
  function getColdDrinks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("husband got cold drinks!");
        resolve();
      }, 1500);
    });
  }
  
  
  async function getButterAndColdDrinks() {
    try {
      await getButter();
      await getColdDrinks();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  getButterAndColdDrinks();
  