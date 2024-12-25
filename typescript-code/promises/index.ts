/**
 * We are rejecting and accepting an application of enrollment based on age in this system.
 */
(async function checkEnrollment(age: number) {
    try {
      const result = await new Promise<{ message: string }>((resolve, reject) => {
        if (age >= 18) {
          resolve({ message: "Application accepted" });
        } else {
          reject({ message: "Application rejected" });
        }
      });
      console.log(result.message); // Log the success message
    } catch (error) {
      console.error((error as { message: string }).message); // Log the rejection message
    }
  })(19);

// console.log('Testing Promises');


  