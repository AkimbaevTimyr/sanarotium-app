import {ref} from "vue";

export const sanatoriums = ref([
    {
        id: 1,
        name: 'Чинар',
        info: 'CHINAR HOTEL & SPA NAFTALAN, известный в советское время как "Санаторий Чинар", расположен на территории огромного парка из сосен и чинаров. В тенистых аллеях парка создана прекрасная комфортная обстановка для отдыха и лечения.',
        price: '95 AZN',
        img: 'sanatorium-img.jpeg',
        description: "CHINAR HOTEL & SPA NAFTALAN, известный в советское время как \"Санаторий Чинар\", расположен на территории огромного парка из сосен и чинаров. В тенистых аллеях парка создана прекрасная комфортная обстановка для отдыха и лечения. \n" +
            "\n" +
            "В настоящее время «Чинар» - это роскошный современный отель 5* и в то же время лечебно-профилактический центр, снабженный самыми высокими технологиями и представляющий широкий спектр лечения различных заболеваний с использованием нафталановой нефти. \n" +
            "\n" +
            "CHINAR HOTEL & SPA NAFTALAN - это размещение в роскошных номерах, теплая атмосфера и множество незабываемых услуг, предоставляемых командой опытных профессионалов в области гостеприимства, отдыха и медицины.\n" +
            "CHINAR HOTEL & SPA NAFTALAN оснащен удобной обстановкой в комнатах для гостей, уникальным декором и прекрасной коллекцией искусства.\n" +
            "Если Вы хотите насладиться отдыхом, цените высокое качество, то настало время открыть для себя CHINAR HOTEL & SPA NAFTALAN. \n" +
            "\n" +
            "Готовьтесь к особому чувству ЗДОРОВЬЯ И КОМФОРТА! \n",
        descList: [
            '170 номеров, общей вместимостью 350 коек, класса Standart, Superior, Suite, Deluxe Suite и King Suite',
            'Ресторан «Сапфир», в котором предоставляется завтрак, обед и ужин по системе «шведский стол»',
            '12 местный VIP салон «Инджи» для проведения индивидуальных мероприятий и небольших собраний',
            'Открытый спортзал в саду, детская площадка',
            'Построенный по последним технологиям и оснащенный современным спортивным и оздоровительным инвентарем Fitness Center, охватывающий территорию в 200 м2',
        ],
    },
    {
        id: 2,
        name: 'НАФТАЛАН',
        info: 'Это лечебно-оздоровительный центр, в котором проводится лечение с помощью уникальной нафталановой нефти в комплексе с дополнительным набором физиотерапевтических процедур и лечебной физкультуры.',
        price: '36 AZN',
        img: 'naftalan.jpeg',
        description: "Санаторий Нафталан\n" +
            "- это лечебно-оздоровительный центр, в котором проводится лечение с помощью уникальной нафталановой нефти в комплексе с дополнительным набором физиотерапевтических процедур и лечебной физкультуры.\n" +
            "\n" +
            "Благодаря уникальным целебным свойствам нафталановой нефти, в санатории проводится эффективное лечение более 70-ти заболеваний.\n" +
            "\n" +
            "Санаторий Нафталан был открыт в мае 2005 года. Это первое частное лечебное учреждение, открытое на курорте Нафталан в Азербайджане. Функционирует и принимает на лечение всех желающих круглый год. \n" +
            "\n" +
            "Лечебное отделение санатория Нафталан располагает всем необходимым современным арсеналом - кабинетом функциональной диагностики, клинико-диагностичекой и биохимической лабораторией и др. Всем гостям проводится детальное обследование, после чего врач индивидуально подбирает комплекс процедур. \n" +
            "\n" +
            "Процедуры, проводимые в центре  – это преимущественно нафталановые ванны, нафталановые обмазывания с последующим облучением лампой соллюкс, фонофорез с нафталаном. При необходимости назнаются дополнительные физиотерапевтические процедуры.\n"
    },
    {
        id: 3,
        name: 'Волшебный Нафталан',
        info: 'Санаторий «ВОЛШЕБНЫЙ НАФТАЛАН» расположен в черте города Нафталан, на благоустроенной территории. В санатории могут одновременно принимать лечениe до 350 человек. Центр функционирует с 2007 года круглогодично. Средний срок лечения в центре 15 дней.',
        price: '60 AZN',
        img: 'magic-naftalan.jpeg'
    },
    {
        id: 4,
        name: 'GARABAG RESORT & SPA',
        info: 'ARABAG RESORT & SPA расположился на прекрасной и ухоженной территории, в курортной местности Нафталан, сыскавшей всемирную славу благодаря уникальному месторождению нафталанового масла, известного более 600 лет своими лечебными свойствами.',
        price: '95 AZN',
        img: 'garabag.jpeg'
    },
    {
        id: 5,
        name: 'Гашалты',
        info: 'Санаторий "ГАШАЛТЫ"("NAFTALAN HOTEL QASHALTI") - это место лечения непревзойденной нафталановой нефтью, где качество и комфорт сочетаются с неповторимой природой Нафталана.',
        price: '82 AZN',
        img: 'gashalti.jpeg'
    },
    {
        id: 6,
        name: 'Чудесный Нафталан',
        info: 'Санаторий "ЧУДЕСНЫЙ НАФТАЛАН" функционирует с 2007 года круглогодично. Средний срок лечения в центре 15 дней. \n',
        price: '40 AZN',
        img: 'ydo-naftalan.jpeg'
    },
])
