< !DOCTYPE html >
    <html lang="ru">
        <head>
            <meta charset="UTF-8">
                <title>Massive Operations</title>
        </head>
        <body>
            
                    <script>
                        "use strict";
                        let styles = 
                        ['Джаз' ,
                        'Блюз',];
                        
                        styles.push('Рок-н-ролл');
                        styles[1] = 'Классика';
                        alert(styles.shift() );
                        styles.unshift('Рэп' , 'Рэгги');

                        console.log(styles);
                    </script>
                </body>
            </html>