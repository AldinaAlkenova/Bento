// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Aldina',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'd49e931eb9ddb9b5d79ea3a0bbd325a1', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '51.086847',
	defaultLongitude: '71.430275',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'СРН Бой',
			icon: 'code',
			link: 'https://prodapp182.stat.gov.kz:9809/srnapp/index',
		},
		{
			id: '2',
			name: 'СРН Тест',
			icon: 'code',
			link: 'http://172.16.18.182:9999/srnapp/index',
		},
		{
			id: '3',
			name: 'Класс Бой',
			icon: 'code',
			link: 'http://172.16.0.88:8001/classv3-web-ui/check.jsp;jsessionid=ULYzdSk-EdEPZ_Qf25A74zPgNk0_oYOki6-vHc2L_k60x4ic6UrL!-1557610946',
		},
		{
			id: '4',
			name: 'Класс Тест',
			icon: 'code',
			link: 'http://172.16.18.89:7006/classv3-web-ui/check.jsp',
		},
		{
			id: '5',
			name: 'Мониторинг',
			icon: 'activity',
			link: 'https://docs.google.com/spreadsheets/d/1mhWyGfvoNRUDiFqQYl4CkL6C1AIDOBYXMvEkFyTnlBI/edit#gid=0',
		},
		{
			id: '6',
			name: 'Ресурсный план',
			icon: 'notebook-pen',
			link: 'https://docs.google.com/spreadsheets/d/1Rmha2b9BeaYWr-RV3a3Frel0LFn6C69q9RO3TJZmdDs/edit#gid=1356347506',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'school',
			id: '1',
			links: [
				{
					name: 'Moodle',
					link: 'https://moodle.astanait.edu.kz/',
				},
				{
					name: 'Linkedln',
					link: 'https://www.linkedin.com/feed/',
				},
				{
					name: 'Swagger SRN',
					link: 'http://172.16.0.182:9999/srnaccompaniment/swagger-ui.html#',
				},
				{
					name: 'MQU',
					link: 'http://172.16.0.139:8161/admin/queues.jsp?QueueFilter=srn',
				},
			],
		},
	],

	
};
