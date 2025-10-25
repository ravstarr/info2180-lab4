{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', function() \{\
    const searchBtn = document.getElementById('searchBtn');\
    const searchField = document.getElementById('searchField');\
    const resultContent = document.getElementById('resultContent');\
    \
    // Load all superheroes on page load\
    loadSuperheroes();\
    \
    // Search button click event\
    searchBtn.addEventListener('click', function() \{\
        const query = searchField.value.trim();\
        loadSuperheroes(query);\
    \});\
    \
    // Allow Enter key to trigger search\
    searchField.addEventListener('keypress', function(e) \{\
        if (e.key === 'Enter') \{\
            const query = searchField.value.trim();\
            loadSuperheroes(query);\
        \}\
    \});\
    \
    function loadSuperheroes(query = '') \{\
        const url = query ? `superheroes.php?query=$\{encodeURIComponent(query)\}` : 'superheroes.php';\
        \
        fetch(url)\
            .then(response => response.text())\
            .then(data => \{\
                resultContent.innerHTML = data;\
            \})\
            .catch(error => \{\
                console.error('Error:', error);\
                resultContent.innerHTML = '<p style="color: red;">An error occurred while fetching data.</p>';\
            \});\
    \}\
\});}