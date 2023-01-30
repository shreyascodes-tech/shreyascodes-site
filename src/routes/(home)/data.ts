const icon = (name: string, style = 'original') =>
	// `https://raw.githubusercontent.com/devicons/devicon/master/icons//${name}/${name}-${style}.svg`;
	`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${style}.svg`;

export const tools = {
	'Programming Languages': [
		{
			title: 'HTML',
			img: icon('html5', 'original')
		},
		{
			title: 'CSS',
			img: icon('css3', 'original')
		},
		{
			title: 'JavaScript',
			img: icon('javascript', 'original')
		},
		{
			title: 'TypeScript',
			img: icon('typescript', 'original')
		},
		{
			title: 'Python',
			img: icon('python', 'original')
		},
		{
			title: 'Dart',
			img: icon('dart', 'original')
		}
	],
	'Libraries and Frameworks': [
		{
			title: 'React',
			img: icon('react', 'original')
		},
		{
			title: 'NextJS',
			img: icon('nextjs', 'original')
		},
		{
			title: 'Astro',
			img: '/img/icons/astro.svg'
		},
		{
			title: 'TailwindCSS',
			img: icon('tailwindcss', 'plain')
		},
		{
			title: 'Flutter',
			img: icon('flutter', 'original')
		},
		{
			title: 'Deno',
			img: icon('denojs', 'original')
		},
		{
			title: 'Svelte',
			img: icon('svelte', 'original')
		},
		{
			title: 'SvelteKit',
			img: icon('svelte', 'original')
		},
		{
			title: 'Express',
			img: icon('express', 'original')
		},
		{
			title: 'NodeJS',
			img: icon('nodejs', 'original')
		}
	],
	Tools: [
		{
			title: 'Git',
			img: icon('git', 'original')
		},
		{
			title: 'Github',
			img: icon('github', 'original')
		},
		{
			title: 'Docker',
			img: icon('docker', 'original')
		},
		{
			title: 'MongoDB',
			img: icon('mongodb', 'original')
		},
		{
			title: 'PostgreSQL',
			img: icon('postgresql', 'original')
		},
		{
			title: 'MySQL',
			img: icon('mysql', 'original')
		},
		{
			title: 'VSCode',
			img: icon('vscode', 'original')
		},
		{
			title: 'Figma',
			img: icon('figma', 'original')
		}
	]
};

export const showcaseItems = [
	{
		title: 'Shreyas Mididoddi',
		subtitle: 'My Portfolio',
		description:
			'This is my portfolio website. I built it using SvelteKit and TailwindCSS. This is the website you are currently on :)',
		image: '/img/screenshots/portfolio.png',
		link: '/',
		github: 'https://github.com/shreyascodes-tech/shreyascodes-site'
	},
	{
		title: 'Deserve',
		subtitle: 'A Deno server framework',
		description:
			"This is a Deno web framework that I made. It's a work in progress. I built the framework itself and also the doocs website using react and TailwindCSS.",
		image: '/img/screenshots/deserve.jpeg',
		link: 'https://deserve.deno.dev/',
		github: 'https://github.com/shreyascodes-tech/deserve'
	},
	{
		title: 'Filledstacks',
		subtitle: 'The Flutter Framework for Production',
		description:
			"I built the website for Filledstacks. It's a Flutter framework that helps you build production ready apps. I built the homepage using react and TailwindCSS.",
		image: '/img/screenshots/stacked.png',
		link: 'https://stacked.filledstacks.com/',
		github: 'https://github.com/Filledstacks/stacked'
	},

	{
		title: 'Hyh Music',
		subtitle: 'A Music app 🎵',
		description:
			"I built this website in a hackathon. It's a music streaming website. I built it using Astro and TailwindCSS",
		image: '/img/screenshots/hyh-music.png',
		form: {
			action: 'https://hyh-music.deno.dev/api/login',
			method: 'POST',
			data: [
				['email', 'test@test.com'],
				['password', '12345678']
			]
		},
		github: 'https://github.com/shreyascodes-tech/hyh-music'
	}
];
