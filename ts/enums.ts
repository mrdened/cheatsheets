enum Membership {
	Simple,
	Standard,
	Premium,
}

// Прямое получение перечисления
const membership = Membership.Standard;
console.log(membership); // 2

// Обратно получение перечисления
const membershipReverse = Membership[1];
console.log(membershipReverse); // 'Standard'

// Перечисление только строками
enum SocialMedia {
	VK = 'VK',
	FACEBOOK = 'FACEBOOK',
	INSTAGRAM = 'INSTAGRAM',
}

const social = SocialMedia.INSTAGRAM;
console.log(social); // 'INSTAGRAM'
