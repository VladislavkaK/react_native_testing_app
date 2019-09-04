const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors())

app.use('/test/main.js', express.static(__dirname + '/test/main.js'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(3007, () => {
  console.log('App listening on port 3007!');
});

app.get('/api/v1/tests', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  return res.json({
    "head": {
      "success": true,
      "message": "Данные извлечены",
      "code": "200",
      "date": "27.05.2019 17:50"
    },
    "body": {
      "total_questions": 10,
      "coursesRequired": [
        {
          "test_id": "1",
          "test_title": "Могут ли тараканы прожить без головы? Бывают ли жуки крупнее млекопитающих?",
          "test_count_questions": 5,
          "test_date": "2019-06-21",
          "test_time": "09:12:00.0000000"
        },
        {
          "test_id": "2",
          "test_title": "Нам нужна другая Россия?",
          "test_count_questions": 5,
          "test_date": "2019-06-21",
          "test_time": "09:13:00.0000000"
        },
      ],
    },
    "html": null,
    "statistics": {
      "time": 0.03,
      "memory": 0.314
    }
  })
});

app.get('/api/v1/test/question/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')

  if (req.query.id === "1") {
    return res.json({
      "head": {
        "success": true,
        "message": "Данные теста: Могут ли тараканы прожить без головы? Бывают ли жуки крупнее млекопитающих?",
        "code": 200,
        "isAuth": true
      },
      "body": {
        "testing": [
          {
            "question_id": 1,
            "question_title": "Кто из существ не относится к насекомым?",
            "answers": [
              {
                "answer_id": 1,
                "answer_title": "Вши",
                "answer_success": false
              },
              {
                "answer_id": 2,
                "answer_title": "Клещи",
                "answer_success": true
              },
              {
                "answer_id": 3,
                "answer_title": "Комары",
                "answer_success": false
              },
              {
                "answer_id": 4,
                "answer_title": "Блохи",
                "answer_success": false
              },
            ]
          },
          {
            "question_id": 2,
            "question_title": "Говорят, что таракан может прожить и без головы. Сколько, по-вашему, насекомое может так существовать?",
            "answers": [
              {
                "answer_id": 1,
                "answer_title": "Ни дня",
                "answer_success": true
              },
              {
                "answer_id": 2,
                "answer_title": "Пять дней",
                "answer_success": false
              },
              {
                "answer_id": 3,
                "answer_title": "Несколько недель",
                "answer_success": false
              },
              {
                "answer_id": 4,
                "answer_title": "Ученым до конца не известно",
                "answer_success": false
              },
            ]
          },
          {
            "question_id": 3,
            "question_title": "Хорошо, но ведь не зря тараканов считают живучими? А переживут ли они ядерную войну?",
            "answers": [
              {
                "answer_id": 1,
                "answer_title": "Конечно! Радиация на них никак не повлияет",
                "answer_success": false
              },
              {
                "answer_id": 2,
                "answer_title": "Нет, тараканы вымрут",
                "answer_success": true
              },
              {
                "answer_id": 3,
                "answer_title": "Выживут крупные мадагаскарские и американские тараканы",
                "answer_success": false
              },
            ]
          },
          {
            "question_id": 4,
            "question_title": "А как соотносится масса самого крупного насекомого и самого маленького млекопитающего?",
            "answers": [
              {
                "answer_id": 1,
                "answer_title": "Самое крупное насекомое весит в 500 раз больше млекопитающего",
                "answer_success": false
              },
              {
                "answer_id": 2,
                "answer_title": "Насекомое весит в 50 раз больше млекопитающего",
                "answer_success": true
              },
              {
                "answer_id": 3,
                "answer_title": "Насекомое весит 20 раз больше млекопитающего",
                "answer_success": false
              },
              {
                "answer_id": 4,
                "answer_title": "Они весят одинаково!",
                "answer_success": false
              },
            ]
          },
          {
            "question_id": 5,
            "question_title": "Ну а если сравнить размеры мельчайших насекомых с крупными амебами — кто из них больше?",
            "answers": [
              {
                "answer_id": 1,
                "answer_title": "Амеба в 5 раз крупнее",
                "answer_success": false
              },
              {
                "answer_id": 2,
                "answer_title": "Амеба в 100 раз крупнее",
                "answer_success": false
              },
              {
                "answer_id": 3,
                "answer_title": "Амеба в 50 раз крупнее",
                "answer_success": true
              },
              {
                "answer_id": 4,
                "answer_title": "Все насекомые больше амеб",
                "answer_success": false
              },
            ]
          },
        ]
      },
      "html": null,
      "statistics": {
        "time": 0.018,
        "memory": 0.29
      }
    })
  } else if (req.query.id === "2") {
    return res.json({
      "head": {
        "success": true,
        "message": "Нам нужна другая Россия?",
        "code": 200,
        "isAuth": true
      },
      "body": {
        "testing": [
          {
            "question_id": 1,
            "question_title": "Первые митинги новой протестной эпохи состоялись в 2001 году и были посвящены разгрому телекомпании НТВ, которую отобрали у олигарха Владимира Гусинского. 31 марта на Пушкинской площади прошел массовый митинг, в котором участвовали 20 тысяч человек. Помимо известных политиков и журналистов со сцены выступили два героя культовой передачи «Куклы», поспорившие между собой. Кого изображали куклы?",
            "answers": [
              {
                "answer_id": 1,
                "answer_title": "Зюганова и Жириновского",
                "answer_success": false
              },
              {
                "answer_id": 2,
                "answer_title": "Путина и Ельцина",
                "answer_success": true
              },
              {
                "answer_id": 3,
                "answer_title": "Гусинского и Ходорковского",
                "answer_success": false
              },
              {
                "answer_id": 4,
                "answer_title": "Киселева и Миткову",
                "answer_success": false
              },
            ]
          },
          {
            "question_id": 2,
            "question_title": "В 2011 прошел самый массовый «Русский марш» — по разным оценкам в нем участвовали от 10 до 25 тысяч человек. В оргкомитет шествия входил и Алексей Навальный, который тогда позиционировал себя как умеренный националист. После успеха митингов на Болотной площади, где тон задавали либералы, он перестал выходить на «Русские марши» (которые сейчас стали совсем немногочисленными). Как он объяснил свое непоявление на акции националистов в 2012 году?",
            "answers": [
              {
                "answer_id": 1,
                "answer_title": "Уехал с семьей в отпуск в Крым",
                "answer_success": false
              },
              {
                "answer_id": 2,
                "answer_title": "Был на седании Коодинационного совета оппозиции",
                "answer_success": false
              },
              {
                "answer_id": 3,
                "answer_title": "Заболеле",
                "answer_success": true
              },
              {
                "answer_id": 4,
                "answer_title": "Обявил, что не поддерживает идеи Русского марша",
                "answer_success": false
              },
            ]
          },
          {
            "question_id": 3,
            "question_title": "Самым неоднозначным моментом так называемой «снежной революции» 2011-2012 годов стал перенос первой массовой акции оппозиции 10 декабря с площади Революции на Болотную площадь. Многие до сих пор считают, что либералы (или «тусовочка») нивелировали протест, уведя возмущенных людей в «загон» на Болотной площади. Позже стало известно, что решение о переносе акции приняли на переговорах в мэрии. Какой напиток принес с собой на встречу с чиновниками главред «Эха Москвы» Алексей Венедиктов?",
            "answers": [
              {
                "answer_id": 1,
                "answer_title": "Виски",
                "answer_success": true
              },
              {
                "answer_id": 2,
                "answer_title": "Кифир",
                "answer_success": false
              },
              {
                "answer_id": 3,
                "answer_title": "Коньяк",
                "answer_success": false
              },
              {
                "answer_id": 4,
                "answer_title": "Водка",
                "answer_success": false
              },
            ]
          },
          {
            "question_id": 4,
            "question_title": "Олег Кашин исполнил (правда, а капелла) со сцены митинга на Болотной площади одну из самых известных русских песен. Что это за песня?",
            "answers": [
              {
                "answer_id": 1,
                "answer_title": "Владимирский централ",
                "answer_success": false
              },
              {
                "answer_id": 2,
                "answer_title": "Все идет по плану",
                "answer_success": true
              },
              {
                "answer_id": 3,
                "answer_title": "Мне 30 лет",
                "answer_success": false
              },
              {
                "answer_id": 4,
                "answer_title": "Все для тебя",
                "answer_success": false
              },
            ]
          },
          {
            "question_id": 5,
            "question_title": "30 декабря 2014 года Замоскворецкий суд признал Алексея и его брата Олега Навальных виновными по делу «Ив Роше». Олег получил 3,5 года колонии, а его брат — столько же, но условно. На несогласованную акцию на Манежной площади в предновогодний день вышли несколько тысяч человек, из которых 250 задержали. Несколько человек, в том числе Мария Алехина из Pussy Riot и активистка Мария Баронова, остались уже после окончания акции на Манежной площади, несмотря на 20-градусный мороз. Где они устроились на ночлег?",
            "answers": [
              {
                "answer_id": 1,
                "answer_title": "Под памятником Маршалу Жукову",
                "answer_success": false
              },
              {
                "answer_id": 2,
                "answer_title": "В ресторане Макдональдс",
                "answer_success": false
              },
              {
                "answer_id": 3,
                "answer_title": "На знаке Нулевой километр автодорог России",
                "answer_success": false
              },
              {
                "answer_id": 4,
                "answer_title": "В гиганстком елочном шаре",
                "answer_success": true
              },
            ]
          },
        ]
      },
      "html": null,
      "statistics": {
        "time": 0.018,
        "memory": 0.29
      }
    })
  } 
});
