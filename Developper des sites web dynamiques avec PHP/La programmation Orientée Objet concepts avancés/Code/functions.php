<?php
require_once 'DescriptiveElement.php';
function displayDescription(DescriptiveElement $monElement){
  echo '<h3>'.$monElement->getTitle().'</h3><p>'.$monElement->getDescription().'</p>';
}

?>