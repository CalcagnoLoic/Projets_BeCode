<?php
try{
	$conn = new PDO('mysql:host=localhost;dbname=hackers_poulette;charset=utf8', 'root', 'root');
}
catch(Exception $e)
{
    die('Erreur : '.$e->getMessage());
}
?>

<?php
require 'template/header.php';
?>

    <!--Contact form-->
    <main>
        <div class="container_main">
            <form method="post" class="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 form_style" style='padding-top: 127px;'>
                <div class=" md:items-center mb-6">
                    <!--Firstname & Lastname-->
                    <div class="flex mx-3 mb-6"> 
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                            <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="grid-first-name">
                                FirstName
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your firstname" name="firstname" required aria-required="true" aria-label="Field for firstname">
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="grid-last-name">
                                LastName
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your lastname" name="lastname" required aria-required="true" aria-label="Field for lastname">
                        </div>
                    </div>
                    <!--Gender-->
                    <div class="flex mx-3 mb-6">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="grid-state">
                                Gender
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="gender" required aria-required="true" aria-label="Field for gender">
                                    <option aria-label="Man">Man</option>
                                    <option aria-label="Women">Women</option>
                                </select>
                                </div>
                        </div>
                    </div>
                    

                    <!--Email & Country-->
                    <div class="flex mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="grid-first-name">
                                Email address
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your email address" name="mail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" aria-required="true" aria-label="Field for email">
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="grid-last-name">
                                Country
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your country" name="country" required aria-required="true" aria-label="Field for country">
                        </div>
                    </div>

                    <!--Subject-->
                    <div class="flex mx-3 mb-6">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="grid-state">
                                Subject
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="subject" aria-label="Enter your subject">
                                    <option aria-label="Other">Other</option>
                                    <option aria-label="Refund">Refund</option>
                                    <option aria-label="After-Sale Service">After-Sale Service</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!--Message-->
                    <div class="flex mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="grid-first-name">
                                Message
                            </label>
                            <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="" cols="30" rows="10" placeholder="Tape your message here..." name="message" required aria-required="true" aria-label="Field for message"></textarea>
                        </div>
                    </div>

                    <!--Anti-spam-->
                    <input id="website" name="website" type="text" value=""  />

                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" aria-required="true">I filled all field</label>
                    </div>

                    <!--Submit button-->
                    <div class="btn_form items-center">
                        <button class="text-white text-3xl py-2 px-4 pl-4 rounded-xl focus:outline-none focus:shadow-outline" type="submit" style='background-color: #0D8187; display:block;margin:auto;' id="btn_form">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <?php
        $firstname = isset($_POST['firstname']) ? $_POST['firstname'] : NULL;
        $lastname = isset($_POST['lastname']) ? $_POST['lastname'] : NULL;
        $gender = isset($_POST['gender']) ? $_POST['gender'] : NULL;
        $email = isset($_POST['mail']) ? $_POST['mail'] : NULL;
        $country = isset($_POST['country']) ? $_POST['country'] : NULL;
        $subject = isset($_POST['subject']) ? $_POST['subject'] : NULL;
        $message = isset($_POST['message']) ? $_POST['message'] : NULL;

        $statement = $conn -> prepare("INSERT INTO informations_users(firstname, lastname, gender, email, country, subject, message) VALUES (:firstname, :lastname, :gender, :email, :country, :subject, :message)");

        $statement -> execute([
            'firstname' => $firstname,
            'lastname' => $lastname,
            'gender' => $gender,
            'email' => $email,
            'country' => $country,
            'subject' => $subject,
            'message' => $message,
        ]);
        ?>

        <!--Sanitisation-->
        <?php
        $options = array(
            'firstname' => htmlspecialchars($firstname),
            'lastname' => htmlspecialchars($lastname),
            'mail' => FILTER_SANITIZE_EMAIL,
            'country' => htmlspecialchars($country),
            'message' => htmlspecialchars($message),
        );

        $result = filter_input_array(INPUT_POST, $options);

        // if ($result != NULL AND $result != FALSE) {
        //     echo "Sanitisation is completely done!";
        // } else {
        //     echo "Oops, there is an error!";
        // }
        ?>

        <!--Validation-->
        <?php
        $errors = array();

        if (false === filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors['mail'] = "This address is invalid.";
        }
        ?>

        <!--Mail-->
        <?php
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\SMTP;

        require_once "includes/phpmailer/PHPMailer.php";
        require_once "includes/phpmailer/SMTP.php";

        $mail = new PHPMailer(true);

        //Configuration 
        $mail-> SMTPDebug = SMTP::DEBUG_SERVER;

        //Configuration le SMTP
        $mail->isSMTP();
        $mail->Host = "localhost";
        $mail->Port = 1025;

        //charset
        $mail->CharSet = "utf-8";

        //Destinataires
        $mail->addAddress("no-reply-hackers_poulette@site.be");

        //Expéditeur
        $mail->setFrom($email);

        //Contenu
        $mail->Subject = $subject;
        $mail->Body = $message;

        //J'envoie
        $mail->send();
        echo "Mail send!";
        ?>
    </main>    

<?php
require 'template/footer.php';
?>