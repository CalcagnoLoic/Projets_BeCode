<?php
class Html {
    public function addImg($src, $alt)
    {
        return "<img src='$src' alt='$alt'/>";
    }

    public function addLink($src)
    {
        return "<link href='$src' />";
    }

    public function addMeta($name, $content)
    {
        return "<meta name='$name' content='$content'>";
    }

    public function addScript($src)
    {
        return "<script src='$src'></script>";
    }

    public function addTagA($url,$text)
    {
        return "<a href='$url'/>$text";
    }
}
?>