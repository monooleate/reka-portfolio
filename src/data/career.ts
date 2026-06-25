import type { iconPaths } from '../components/IconPaths';
import type { Lang } from '../lib/i18n';

export type IconName = keyof typeof iconPaths;

export type Highlight = { icon: IconName; value: string; label: string };
export type Role = {
	role: string;
	company: string;
	location: string;
	period: string;
	current?: boolean;
	note?: string;
	bullets: string[];
	tags: string[];
};

export const highlights: Record<Lang, Highlight[]> = {
	en: [
		{ icon: 'chart-line-up', value: '10+', label: 'Years across engineering & enterprise IT' },
		{ icon: 'briefcase', value: '$3M', label: 'IT portfolio owned at MOL Group' },
		{ icon: 'building-office', value: '5', label: 'Refinery & petrochemical sites · HU · SK · HR' },
		{ icon: 'lightning', value: '$500–800K', label: 'Annual savings potential identified' },
	],
	hu: [
		{ icon: 'chart-line-up', value: '10+', label: 'év mérnöki és vállalati IT tapasztalat' },
		{ icon: 'briefcase', value: '3 M$', label: 'IT-portfólió a MOL Csoportnál' },
		{ icon: 'building-office', value: '5', label: 'finomítói és petrolkémiai telephely · HU · SK · HR' },
		{ icon: 'lightning', value: '500–800 E$', label: 'azonosított éves megtakarítási potenciál' },
	],
};

export const roles: Record<Lang, Role[]> = {
	en: [
		{
			role: 'Business Analyst',
			company: 'CommIT Smart',
			location: 'Budapest, Hungary',
			period: '2024 – 2025',
			current: true,
			bullets: [
				'Initiated and launched online event-ticketing platform projects covering ticketing integrations and event-management workflows.',
				'Authored user stories and maintained a healthy product backlog aligned with stakeholder priorities and release plans.',
				'Ran the full agile ceremony cycle — sprint planning, refinement, review and retrospective — bridging product and engineering teams.',
			],
			tags: ['Agile / Scrum', 'Backlog ownership', 'Ticketing platforms'],
		},
		{
			role: 'IT Consultant',
			company: 'Onespire',
			location: 'Budapest, Hungary',
			period: '2022 – 2023',
			note: 'Client: Wizz Air',
			bullets: [
				'Served Wizz Air as primary client across strategic HR digitalisation and operational subsidiary stand-up workstreams.',
				"Led HR recruitment digitalisation for ~1,000 employees — requirement gathering, stakeholder interviews and GAP analysis — a building block of Wizz Air's multi-million-USD 2030 strategic programme.",
				'Validated and refreshed back-office HR processes for the Wizz Air Malta entity launch — a high-stakes new subsidiary requiring rapid process readiness.',
				'Identified digitalisation potential, optimised onboarding workflows and authored functional specifications together with development teams.',
			],
			tags: ['HR digitalisation', 'GAP analysis', 'Functional specs'],
		},
		{
			role: 'Product Owner',
			company: 'Medicover',
			location: 'Budapest, Hungary',
			period: '2022',
			bullets: [
				'Owned the product backlog and business requirements for an outpatient & inpatient process-optimisation platform serving ~200 physicians and several thousand patients ($200K).',
				'Led the IT-side launch of a new private maternity service — coordinating system readiness, process design and release across clinical and operational stakeholders.',
				'Defined and communicated the product roadmap; led the agile delivery cadence and release coordination.',
				'Engaged physicians directly as domain experts to gather, refine and validate requirements that reflect real clinical workflows.',
			],
			tags: ['Product ownership', 'Healthcare IT', 'Roadmap'],
		},
		{
			role: 'Downstream IT Senior Domain Expert — Production & HSE',
			company: 'MOL Group (Downstream)',
			location: 'Budapest, Hungary',
			period: '2017 – 2022',
			bullets: [
				'Owned 10–15 parallel digitalisation projects within the Production & HSE portfolio ($3M / ~50 projects Group-wide) across 5 refinery and petrochemical sites in Hungary, Slovakia and Croatia.',
				'Led Group-wide flagship deliveries: LIMS implementation ($3M, multi-year, ~500 lab staff), HSE digitalisation roadmap incl. waste-management & HSE mobile app ($500K), laboratory digitalisation roadmap ($300K) and the blue-collar mobile-app portfolio.',
				'Served as the trusted go-to IT partner for Production, HSE and Laboratory functions — from early ideation through requirements, scoping and delivery hand-over.',
				'Drove Group-level harmonisation of HSE processes across all blue- and white-collar staff at the HU/SK/HR sites.',
				'Led annual CAPEX/OPEX planning, vendor reviews and budget defence with Group leadership.',
			],
			tags: ['IT portfolio', 'IT governance', 'Stakeholder management', 'Oil & Gas'],
		},
		{
			role: 'Process Information Engineer',
			company: 'MOL Plc. (Downstream)',
			location: 'Százhalombatta, Hungary',
			period: '2015 – 2017',
			bullets: [
				'Designed and deployed predictive-maintenance analytics on the OSIsoft PI System — Integrity Operating Window (IOW) monitoring, corrosion & thickness trending and automated early-warning logic — used daily by operators, technologists and integrity engineers.',
				'Built operational dashboards and business logic on PI for daily throughput & yield tracking, off-spec prevention and process-stability monitoring.',
				'Supported refinery mass & energy balance reconciliation with Pimsoft Sigmafine.',
				'Introduced machine-learning–driven decision support into operations — the business case identified $500–800K annual savings potential.',
			],
			tags: ['OSIsoft PI', 'Predictive maintenance', 'Machine learning', 'IT/OT'],
		},
	],
	hu: [
		{
			role: 'Business Analyst',
			company: 'CommIT Smart',
			location: 'Budapest, Magyarország',
			period: '2024 – 2025',
			current: true,
			bullets: [
				'Online jegyértékesítési platform projektek elindítása — jegyrendszer-integrációk és eseménykezelési munkafolyamatok.',
				'User story-k írása és egészséges product backlog karbantartása a stakeholderi prioritásokkal és a release-tervekkel összhangban.',
				'A teljes agilis ceremónia-ciklus vezetése — sprinttervezés, finomítás, review és retrospektív —, hidat képezve a termék- és a fejlesztőcsapatok között.',
			],
			tags: ['Agilis / Scrum', 'Backlog-tulajdonlás', 'Jegyértékesítő platformok'],
		},
		{
			role: 'IT Tanácsadó',
			company: 'Onespire',
			location: 'Budapest, Magyarország',
			period: '2022 – 2023',
			note: 'Ügyfél: Wizz Air',
			bullets: [
				'A Wizz Air kiszolgálása elsődleges ügyfélként — stratégiai HR-digitalizációs és operatív leányvállalat-indítási munkafolyamatokban.',
				'A HR-toborzás digitalizációjának vezetése ~1 000 munkavállalóra — követelménygyűjtés, stakeholder interjúk és GAP-elemzés —, a Wizz Air több millió dolláros 2030-as stratégiai programjának építőköveként.',
				'A Wizz Air Malta leányvállalat indításához tartozó back-office HR-folyamatok validálása és frissítése — magas tétű, gyors folyamat-felkészültséget igénylő új egység.',
				'Digitalizációs potenciál azonosítása, onboarding-folyamatok optimalizálása és funkcionális specifikációk készítése a fejlesztőcsapatokkal együtt.',
			],
			tags: ['HR-digitalizáció', 'GAP-elemzés', 'Funkcionális specifikáció'],
		},
		{
			role: 'Product Owner',
			company: 'Medicover',
			location: 'Budapest, Magyarország',
			period: '2022',
			bullets: [
				'A product backlog és az üzleti követelmények tulajdonlása egy járó- és fekvőbeteg folyamatoptimalizáló platformhoz, ~200 orvost és több ezer beteget kiszolgálva (200 E$).',
				'Egy új privát szülészeti szolgáltatás IT-oldali bevezetésének vezetése — rendszer-felkészültség, folyamattervezés és release koordinálása a klinikai és operatív stakeholderek között.',
				'A termék-roadmap meghatározása és kommunikálása; az agilis szállítási ütem és a release-koordináció vezetése.',
				'Közvetlen együttműködés orvosokkal mint szakterületi szakértőkkel — követelmények gyűjtése, finomítása és validálása a valós klinikai munkafolyamatok szerint.',
			],
			tags: ['Termék-tulajdonlás', 'Egészségügyi IT', 'Roadmap'],
		},
		{
			role: 'Downstream IT Senior Domain Expert — Termelés & HSE',
			company: 'MOL Csoport (Downstream)',
			location: 'Budapest, Magyarország',
			period: '2017 – 2022',
			bullets: [
				'10–15 párhuzamos digitalizációs projekt tulajdonlása a Termelés & HSE portfólión belül (3 M$ / ~50 projekt csoportszinten), 5 finomítói és petrolkémiai telephelyen Magyarországon, Szlovákiában és Horvátországban.',
				'Csoportszintű kiemelt szállítások vezetése: LIMS-bevezetés (3 M$, többéves, ~500 laboratóriumi munkatárs), HSE-digitalizációs roadmap a hulladékkezelő és HSE mobilalkalmazással (500 E$), laboratóriumi digitalizációs roadmap (300 E$) és a fizikai dolgozói mobilalkalmazás-portfólió.',
				'A Termelés, a HSE és a Laboratórium funkciók megbízott IT-partnereként — a korai ötleteléstől a követelményeken és a scope-on át a szállítás átadásáig.',
				'A HSE-folyamatok csoportszintű harmonizációjának vezetése a HU/SK/HR telephelyek minden fizikai és szellemi dolgozójára.',
				'Éves CAPEX/OPEX-tervezés, beszállítói felülvizsgálatok és büdzsé-védés a csoportvezetéssel.',
			],
			tags: ['IT-portfólió', 'IT-governance', 'Stakeholder-menedzsment', 'Olaj & Gáz'],
		},
		{
			role: 'Folyamatinformatikai Mérnök',
			company: 'MOL Nyrt. (Downstream)',
			location: 'Százhalombatta, Magyarország',
			period: '2015 – 2017',
			bullets: [
				'Prediktív karbantartási analitika tervezése és bevezetése az OSIsoft PI rendszeren — Integritási Működési Ablak (IOW) monitorozás, korrózió- és falvastagság-trendezés, automatikus korai figyelmeztető logika — operátorok, technológusok és integritási mérnökök napi használatában.',
				'Operatív dashboardok és üzleti logika építése a PI rendszeren a napi átbocsátás- és hozamkövetéshez, az off-spec megelőzéséhez és a folyamatstabilitás monitorozásához.',
				'Finomítói anyag- és energiamérleg-rekonciliáció támogatása Pimsoft Sigmafine-nal.',
				'Gépi tanulás alapú döntéstámogatás bevezetése a működésbe — az üzleti eset 500–800 E$ éves megtakarítási potenciált azonosított.',
			],
			tags: ['OSIsoft PI', 'Prediktív karbantartás', 'Gépi tanulás', 'IT/OT'],
		},
	],
};
