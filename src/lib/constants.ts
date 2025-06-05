import TelegramLogo from 'phosphor-svelte/lib/TelegramLogo';
import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
import StackOverflowLogo from 'phosphor-svelte/lib/StackOverflowLogo';
import XLogo from 'phosphor-svelte/lib/XLogo';
import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';

export const SOCIALS = [
	{ name: 'Telegram', href: 'https://t.me/nalonix', icon: TelegramLogo },
	{ name: 'Github', href: 'https://github.com/nalonix', icon: GithubLogo },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/nalonix/', icon: LinkedinLogo },
	{ name: 'Twitter', href: 'https://twitter.com/nalonix', icon: XLogo },
	{
		name: 'Stackoverflow',
		href: 'https://stackoverflow.com/users/13652650/naol-fekadu',
		icon: StackOverflowLogo
	},
	{ name: 'Gmail', href: 'mailto:nf.naol9@gmail.com', icon: EnvelopeSimple }
];
