---
toc: false
comments: false
layout: post
title: Chinese Index/Dictionary
description: A Dictionary of all the Chinese I know
type: hacks
courses: { CompSci: { week: 3 }, Chinese: { week: 0 } }
---
<head>
    <!-- load jQuery and DataTables output style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>var define = null;</script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
</head>
<style>
    table, td, th, tr {
        border: 1px solid white;
    }
    table.center {
        margin-left:auto;
        margin-right:auto;
    }
</style>

<table id="md_demo" class="table">
    <thead>
        <tr style="height:30px">
            <th>Character</th>
            <th>Pinyin</th>
            <th>English Meaning</th>
            <th>Examples in Sentence</th>
            <th>Example in English</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>你</td>
            <td>ni</td>
            <td>You</td>
            <td>你是人</td>
            <td>You are human</td>
        </tr>
        <tr>
            <td>我</td>
            <td>wo</td>
            <td>I/Me</td>
            <td>我是人</td>
            <td>I am human</td>
        </tr>
        <tr>
            <td>的</td>
            <td>de</td>
            <td>Possessive particle</td>
            <td>我的家人是人</td>
            <td>My family is human</td>
        </tr>
        <tr>
            <td>笨</td>
            <td>ben</td>
            <td>Stupid</td>
            <td>Xavier很笨</td>
            <td>Xavier is very stupid</td>
        </tr>
        <tr>
            <td>很</td>
            <td>hen</td>
            <td>Very; Particle before descriptive adjectives</td>
            <td>我很聪明</td>
            <td>I am very smart</td>
        </tr>
        <tr>
            <td>聪明</td>
            <td>cong'ming</td>
            <td>Smart</td>
            <td>我很聪明</td>
            <td>I am very smart</td>
        </tr>
        <tr>
            <td>安全</td>
            <td>an'quan</td>
            <td>Safe; Protected</td>
            <td>我认为住在校内是安全</td>
            <td>I think living on-campus is safe</td>
        </tr>
        <tr>
            <td>是</td>
            <td>shi</td>
            <td>Is;Am;Are</td>
            <td>那是苹果</td>
            <td>That is an apple</td>
        </tr>
        <tr>
            <td>认为</td>
            <td>ren'wei</td>
            <td>Think</td>
            <td>我认为他笨</td>
            <td>I think he is dumb</td>
        </tr>
        <tr>
            <td>要</td>
            <td>yao</td>
            <td>Want (Imples you will be doing it)</td>
            <td>我要吃苹果</td>
            <td>I want to eat an apple</td>
        </tr>
        <tr>
            <td>简介</td>
            <td>jian'jie</td>
            <td>Introduction</td>
            <td>大学宿舍简介</td>
            <td>College Dorm Introductions</td>
        </tr>
        <tr>
            <td>作社</td>
            <td>zuo'zhe</td>
            <td>Author; By</td>
            <td>作者: Justin Quach</td>
            <td>By: Justin Quach; Author: Justin Quach</td>
        </tr>
        <tr>
            <td>成本</td>
            <td>cheng'ben</td>
            <td>Costs</td>
            <td>这本书成本不高</td>
            <td>This book's cost is not high</td>
        </tr>
        <tr>
            <td>正常</td>
            <td>zheng'chang</td>
            <td>Normal</td>
            <td>那个苹果不正常</td>
            <td>That apple is not normal</td>
        </tr>
        <tr>
            <td>店铺</td>
            <td>dian'pu</td>
            <td>Shop</td>
            <td>这个店铺没有日用品</td>
            <td>This store does not have everyday necessities</td>
        </tr>
    </tbody>
</table>

<script>
    $("#md_demo").DataTable();
</script>