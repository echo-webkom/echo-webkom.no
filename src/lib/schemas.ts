import { z } from 'zod';

export const degreeEnum = z.enum([
	'DTEK',
	'DSIK',
	'DVIT',
	'BINF',
	'IMO',
	'INF',
	'PROG',
	'ARMNINF',
	'POST'
]);

export const applicationFormSchema = z.object({
	email: z.string().email({ message: 'Ikke en gyldig e-post.' }),
	name: z.string().min(1, { message: 'Du må gi oss et navn.' }),
	degree: degreeEnum,
	year: z
		.number()
		.min(0, { message: 'Du har ikke startet enda?' })
		.max(5, { message: 'Vi tar bare bachelor og master studenter inn.' }),
	message: z.string().min(5, { message: 'Du må skrive noe...' })
});
