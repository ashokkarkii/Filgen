
  //  Home page faq js handling
   function toggleFAQ(id) {
      const content = document.getElementById(id);
      const icon = document.getElementById("icon-" + id);
      content.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    }

    // about us page js
  function scrollCards(direction) {
      const container = document.getElementById('carousel');
      const scrollAmount = 340; // Adjust based on card width
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }

    // contact us form js
     function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      console.log("Form Submitted:", data);
      alert("Message Sent! (Check console for submitted data)");
      event.target.reset(); // Clear form
    }

    // loginform js handling
     function handleLogin(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      console.log("Login attempt:", data);
      alert("Login successful (console shows submitted data)");
      return false;
    }

    // signup js
    function togglePassword(id) {
      const input = document.getElementById(id);
      input.type = input.type === "password" ? "text" : "password";
    }

    function handleSignUp(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      if (data.password !== data.confirmPassword) {
        alert("Passwords do not match!");
        return false;
      }

      console.log("Sign up data:", data);
      alert("Sign-up successful! (Check console for submitted data)");
      return false;
    }


    // forgot page javascript
    function handleForgotPassword(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const email = formData.get("email");

      if (!email) {
        alert("Please enter your email.");
        return;
      }

      console.log("Recovery email sent to:", email);
      alert("If your email is registered, you'll receive a password reset link shortly.");
    }


    // forgot set password
    function toggleVisibility(id) {
      const input = document.getElementById(id);
      input.type = input.type === "password" ? "text" : "password";
    }

    function handleSetPassword(event) {
      event.preventDefault();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Proceed with password submission
      console.log("Password set:", password);
      alert("Your password has been reset successfully!");
    }




    // Dashbord js
      // Drag & Drop
      const dropZone = document.getElementById('drop-zone');
      const fileInput = document.getElementById('fileInput');
      const fileList = document.getElementById('fileList');

      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('bg-blue-100');
      });

      dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('bg-blue-100');
      });

      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('bg-blue-100');
        handleFiles(e.dataTransfer.files);
      });

      fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

      function handleFiles(files) {
        fileList.innerHTML = '';
        if (files.length > 5) {
          alert('You can upload up to 5 files only.');
          return;
        }
        for (const file of files) {
          if (file.size > 10 * 1024 * 1024) {
            alert(`${file.name} is too large.`);
            continue;
          }
          fileList.innerHTML += `<li>${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)</li>`;
        }
      }

      function uploadFromUrl() {
        const url = document.getElementById('fileUrl').value;
        if (url) {
          alert(`Pretend we're uploading the file from: ${url}`);
        } else {
          alert('Please enter a valid URL');
        }
      }