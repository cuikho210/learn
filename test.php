<?php
function get_diarys_by_week($fieldtag) {
    $firstMondayThisWeek= new DateTime(date('Y-m-d'));
    $firstMondayThisWeek->modify('tomorrow');
    $firstMondayThisWeek->modify('last Monday');
    
    $nextFiveWeekDays = new DatePeriod(
        $firstMondayThisWeek,
        DateInterval::createFromDateString('+1 weekdays'),
        4
    );
    
    $days = iterator_to_array($nextFiveWeekDays);
    $query_condi = '';
    
    foreach ($days as $day) {
        $date = $day->format('d-m-Y');
        $query_condi .= "begin like '%$date' or ";
    }
    
    $query_condi .= "begin like '%". date('d-m-Y') ."'";
    
    $query = "select * from diary where fieldtag='$fieldtag' and ($query_condi)";
    echo $query;
}

get_diarys_by_week(24);
?>