<?php

function isAnagram1($input1, $input2)
{
    if ($input1 == null || $input2 == null) return false;
    $input1 = trim($input1);
    $input2 = trim($input2);
    $input1 = str_split($input1);
    $input2 = str_split($input2);
    $input1 = array_filter($input1, function ($char) {
        return $char != ' ';
    });
    $input2 = array_filter($input2, function ($char) {
        return $char != ' ';
    });
    sort($input1);
    sort($input2);
    $input1 = join('', $input1);
    $input2 = join('', $input2);
    if ($input1 == $input2) return true;
    return false;
}

// echo isAnagram1('abc', 'bca') ? 'Yes' : 'No';

function isAnagram2($input1, $input2)
{
    if ($input1 == null || $input2 == null) return false;
    define('ENGLISH_ALPHABET', 26);
    $test_array = array_fill(0, ENGLISH_ALPHABET, 0);

    for ($i = 0; $i < strlen($input1); $i++) {
        $index = ord($input1[$i]) - ord('a');
        $test_array[$index]++;
    }

    for ($j = 0; $j < strlen($input2); $j++) {
        $index = ord($input2[$j]) - ord('a');
        $test_array[$index]--;
    }

    //approach 1
    foreach ($test_array as $test_val) {
        if ($test_val != 0)
            return false;
    }
    return true;

    //approach 2
    // $test_array = array_filter($test_array, function($val){
    //     return $val;
    // });

    // return empty($test_array) ? true : false;

}

// echo isAnagram2(null, null) ? 'Yes' : 'No';

function isAnagram3($input1, $input2)
{
    if ($input1 == null || $input2 == null) return false;

    if (count_chars($input1, 1) == count_chars($input2, 1))
        return true;
    return false;
}

echo isAnagram2('bca', 'caaaaab') ? 'Yes' : 'No';
