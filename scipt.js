$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = $(this).serialize();

        $.ajax({
            url: "process.php",
            type: "POST",
            data: formData,
            success: function (response) {
                $("#response").html(`<p style="color: green;">${response}</p>`);
                $("#registrationForm")[0].reset();
            },
            error: function () {
                $("#response").html(`<p style="color: red;">An error occurred.</p>`);
            },
        });
    });
});
