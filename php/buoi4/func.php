<?php
function isPassword ($pwd) {
    if (!preg_match("#.*^(?=.{6,30})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$#", $pwd)) {
        return false;
    }
    else {
        return true;
    }
}

function isEmail ($email) {
    if ((!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $email))) {
        return false;
    }

    return true;
}

function validate ($str) {
    $str = str_replace("'", '&#39;', $str);
    $str = str_replace('"', '&quot;', $str);
    $str = str_replace('<', '&lt;', $str);
    $str = str_replace('>', '&gt;', $str);
    return $str;
}

function encodeID ($id) {
    $id += 1000000;
    return base_convert($id, 10, 36);
}

function decodeID ($id) {
    $id = base_convert($id, 36, 10);
    $id -= 1000000;
    return $id;
}