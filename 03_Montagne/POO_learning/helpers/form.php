<?php
class CreateForm { 
    public $data = array();
    public $p_tag = "p";

    public function __construct($data = array())
    {
        $this->data=$data;
    }
    
    public function balise($html){
        return "<$this->p_tag>$html</$this->p_tag>";
        
    }

    public function form($method)
    {
        return "<form method=$method>";
    }
    
    public function createInput($input, $legend) 
    {
        return $this->balise("$input : <input id='name' name='name' placeholder=$legend/>");
    }

    public function createSelect($input, $name, $option1, $option2, $option3) 
    {
        return $this->balise("$input : <select name='ville'>
        <option>Sélectionne $name</option>
        <option>$option1</option>
        <option>$option2</option>
        <option>$option3</option>
        </select>");
    }

    public function createTextArea($col, $row, $placeholder) {
        return $this->balise("<textarea id='text' placeholder='$placeholder' col='$col' row='$row'></textarea>");
    }

    public function createRadio()
    {
        return $this->balise("<input type='radio' />Oui <input type='radio' />Non");
    }

    public function createCheckBox($message)
    {
        return $this->balise("$message : <input type='checkbox'/>");
    }

    public function submit()
    {
        return "<input type='submit'/>";
    }

    public function endingForm()
    {
        return "</form><br>";
    }
}

?>