new Vue({
            el: '#app',
            data: {
                formData: {
                    name: '',
                    email: '',
                    message: ''
                },
                submitted: false
            },
             submitForm() {
                    const xhr = new XMLHttpRequest();
                    const url = 'submit_email.php';
                    xhr.open('POST', url, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.onreadystatechange = () => {
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            this.submitted = true;
                            this.formData = {
                                name: '',
                                email: '',
                                message: ''
                            }; // Clear form data after submission
                        }
                    };
                    xhr.send(JSON.stringify(this.formData));
                }
            }
        });