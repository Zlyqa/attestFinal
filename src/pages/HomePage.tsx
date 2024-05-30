import pollution from '../img/pollution.webp'

export default function HomePage() {
    return (
        <>
            <h1>О сервисе</h1>

            <h2><img
                src={pollution}
                alt="Загрязнение окружающей среды"
                width="300" style={{ float: 'left', margin: '0 2em 1em 0' }}
            />
                Добро пожаловать на наш сайт о загрязнении окружающей среды!
            </h2>
            <p>Мы - сообщество людей, объединенных общей целью создания здоровой и устойчивой планеты для себя и будущих поколений.
                Наш сайт призван привлечь внимание к проблемам, связанным с загрязнением окружающей среды, и обеспечить информацией, инструментами и вдохновением для действий.</p>
            <p>Дополнительные источники загрязнения включают в себя выбросы вредных веществ в атмосферу, отходы промышленности и сельского хозяйства,
                а также неэффективное использование энергии. Изменение климата, разрушение лесов, уменьшение биоразнообразия – все это негативные
                последствия загрязнения окружающей среды.</p>
            <p>Мы предлагаем обширную базу знаний о различных аспектах загрязнения окружающей среды, начиная от причин и последствий загрязнения до методов его предотвращения и лечения. У нас вы найдете актуальные статьи, исследования, инфографику и другие полезные материалы.
            </p>
            <p>
                Будьте в курсе последних событий и новостей в области экологии и сохранения окружающей среды.
                Мы регулярно обновляем наш раздел новостей, чтобы вы всегда оставались информированными о важнейших событиях и разработках в этой области.
            </p>
            <p>Мы предлагаем практические советы и руководства о том, как каждый из нас может внести свой вклад в сохранение окружающей среды.
                От уменьшения использования пластика до эффективного управления отходами - у нас есть идеи и решения для всех.
            </p>
        </>
    );
}
