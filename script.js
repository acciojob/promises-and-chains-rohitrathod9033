const form = document.getElementById('votingForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent actual form submission
  
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (!name || !age) {
	alert("Please enter valid details.");
	return;
  }

  const checkEligibility = new Promise((resolve, reject) => {
	setTimeout(() => {
	  if (Number(age) > 18) {
		resolve();
	  } else {
		reject();
	  }
	}, 4000);
  });

  checkEligibility
	.then(() => {
	  alert(`Welcome, ${name}. You can vote.`);
	})
	.catch(() => {
	  alert(`Oh sorry ${name}. You aren't old enough.`);
	});
});