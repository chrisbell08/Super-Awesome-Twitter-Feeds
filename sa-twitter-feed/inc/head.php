<?php
require_once('../config.php');

if($includeJquery == true)
{
    ?>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <?php
}
if($includeFontAwesome == true)
{
    ?>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <?php
}
if($errors == true)
{
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}
?>

<!-- CSS -->


<!-- JS -->
<script>
    var containerElement = '<?php echo $containerElement ?>';
    var localStorageKey = '<?php echo $localStorageKey ?>';
    var url = '<?php echo $url ?>';
    var twitterScreenName = '<?php echo $twitterScreenName ?>';
    var tweetsToGet = '<?php echo $tweetsToGet ?>';
    var secureKey = '<?php echo $secureKey ?>';
    var theme = '<?php echo $theme ?>';
</script>
<script src="<?php echo $linkToScript ?>"></script>