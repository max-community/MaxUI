## TODO

- [storybook] убрать сокрытие пропов asChild, fallbackElement, innerClassNames, вмето этого сделать их просто дизейблед;
- [storybook] настроить корректный вывод типа innerClassNames
- [storybook] написать доку, комменты по каждому пропу, по каждой стори
- [build] проверить три шейкинг у компонентов с dot notation
- [дизайн система] сверить названия свойств компонентов в либе и в фигме - они должны быть одинаковыми, для удобства разработки
- [AppearanceProvider] сделать авто-детект платформы, если проп пустой
- [FatherComponent] переименовать проп fallbackElement, внести изменения в сторибуки
- [AppearanceProvider] Подумать над концепцией компонента - он является рутовым и прокидывает все стили. Мб переименовать в <Theme /> / <OneMeTheme /> / <UIRoot /> / something else
- [build] не все хуки нужно экспортировать в билд и делать публичными
- [asChild] компоненты-потомки принимают ref HTMLDivElement, что не он для Button, например
- [Input] указать aria-label у SvgButton
- [Input/Textarea] innerClassNames
- [chore] проверить реэкспорты типов компонентов
- [ToolButton] hover, active, etc
- [asChild] рефактор реализации ToolButton, при которой возможна конструкция с пустым тегом, по типу <ToolButton asChild><a ... /></ToolButton>
