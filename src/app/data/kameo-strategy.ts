export const KAMEO_STRATEGY: { [kameoName: string]: { overview: string; strengths: string[]; weaknesses: string[] } } = {
  'Cyrax': {
    overview: 'Cyrax, a Lin Kuei assassin transformed into a cyborg as part of the Cyber Initiative, is a rushdown/setplay assist specializing in kombo extension and damage as well as pressure setups.',
    strengths: ['Kopter Chopper provides long stun time for repositioning', 'EX Net carries opponents to the corner', 'Bomb setups create okizeme pressure', 'Good combo extension tools'],
    weaknesses: ['Sluggish startup on key moves', 'Limited as a reversal option', 'Requires setup for optimal use']
  },
  'Darrius': {
    overview: 'Darrius, a resistance fighter against Seido oppression and advocate for Havik message of Chaos, is one of the most cooperative rushdown/mixup Kameo partners. Many of his moves feature the lead character interacting with him in back-to-back or dual attacks.',
    strengths: ['Jump-cancellable armored launcher', 'Hard-to-blockable setups', 'Ambush stun/crumple', 'Overhead/Low mixups', '+50 Health bonus'],
    weaknesses: ['Conditional Ambush (D+K)', 'Dependence on setups', 'Longer cooldown and recharge rate', 'Slower startup', 'Full gauge Ambush cost']
  },
  'Ferra': {
    overview: 'Ferra, a symbiotic rider of an unidentified Outworld species, is a stance/utility Kameo that specializes in augmenting the main character with additional abilities and buffs. She can attach to the fighter back or cheer from the sidelines, providing 50/50 mixups and damage increase.',
    strengths: ['Torr Stance for pressure and mixups', 'Pain N Gain buff for damage boost', 'Lackey Variation increases Super Meter gain', 'Versatile stance-switching tools'],
    weaknesses: ['Requires Torr Stance setup', 'Limited when Ferra is on cooldown', 'Complex usage for optimal benefit']
  },
  'Frost': {
    overview: 'Frost, a former apprentice of Sub-Zero, is a zoning/setplay Kameo that specializes in space control and freezing abilities which stun the opponent and allow for kombo extension.',
    strengths: ['Ice Wall traps opponents in corner setups', 'Freeze abilities enable combo extensions', 'Invulnerable Getup with Ice Krash', 'Good space control tools'],
    weaknesses: ['Ice Wall requires setup', 'Limited pressure options', 'Cooldown-dependent gameplay']
  },
  'Goro': {
    overview: 'Goro, a mighty Prince of the Shokan Race and former Mortal Kombat champion, is a big-body/tank assist that specializes in heavily directable kombo extension and pressure on block, as well as creating unblockable setups.',
    strengths: ['Directable kombo extensions', 'Strong pressure on block', 'Unblockable setup potential', '+50 Health bonus', 'Fatal Blow damage boost'],
    weaknesses: ['Big hurtbox makes him easy to hit', 'Slower startup', 'Limited mobility']
  },
  'Janet Cage': {
    overview: 'Janet Cage, an alternate version of Johnny Cage, is a mixup/utility Kameo specializing in pressure with her Mime Time parry and Stunt Double stance for unique setups and extensions.',
    strengths: ['Mime Time absorbs attacks and repels opponents', 'Stunt Double creates unique mixups', 'Good pressure tools', 'Versatile utility options'],
    weaknesses: ['Requires careful timing', 'Limited direct damage', 'Stunt Double setup can be interrupted']
  },
  'Jax': {
    overview: 'Jax, a commanding officer of Earthrealm Special Forces, is a rushdown/brawler Kameo that can utilize multiple Ambush assists to enforce unblockable setups as well as grant kombo extensions, especially in the corner.',
    strengths: ['Unblockable setup potential', 'Strong corner combos', 'Multiple Ambush options', 'Energy Wave for mid-range'], 
    weaknesses: ['Limited zoning tools', 'Requires close range', 'Cooldown-dependent']
  },
  'Kano': {
    overview: 'Kano, the nefarious criminal leader of the underground Black Dragon Clan, is a rushdown assist that specializes in pressure and kombo extension, mixed with some slight zoning capabilities.',
    strengths: ['Criminal pressure with knives and Kano Ball', 'Ball can be cancelled for strike/throw mindgames', 'Easy conversions for all characters', 'Eye Laser is a strong neutral tool'],
    weaknesses: ['Low kombo damage', 'Weak reversal with short invincibility', 'Limited mixup options']
  },
  'Khameleon': {
    overview: 'Khameleon, an Umgadi priestess and one of few remaining Zaterrans, is a unique Kameo that retains her klassic trait of swapping between abilities of all female MK ninja characters throughout the match, granting powerful tools with versatile kombo potential.',
    strengths: ['Multiple abilities through stance swapping', 'Fast cooldowns', 'Versatile kombo potential', 'Adaptable to many situations'],
    weaknesses: ['Ability swapping can be unpredictable', 'Requires knowledge of all stances', 'Situational effectiveness']
  },
  'Kung Lao': {
    overview: 'Kung Lao, a Shaolin Monk trained by the White Lotus Society, is a rushdown/setplay Kameo that specializes in setting up Low mixups and hard-to-block situations, as well as offering safety, mobility, and kombo options.',
    strengths: ['Low hat setup for hard-to-block situations', 'Good safety and mobility tools', 'Kombo extension options', 'Low hat is +12 on block'],
    weaknesses: ['Limited range on some tools', 'Requires correct positioning']
  },
  'Mavado': {
    overview: 'Mavado, a high-ranking commander of the Red Dragon Clan, is a rushdown/trap Kameo who has several Ambush assists designed to grant players a multitude of ways to convert specific interactions into a juggle or stun kombo at any point onscreen.',
    strengths: ['Multiple conversions from any hit', 'Versatile Ambush tools', 'Good combo extension options', 'Fast startup on key moves'],
    weaknesses: ['Some assists only come out on hit/launch', 'Requires good hit confirmation']
  },
  'Motaro': {
    overview: 'Motaro, a soldier of Outworld army under General Shao, is a unique Kameo that resembles the big body archetype but specializes more in zoning and counterzoning assists, allowing players to control space with setplay/pressure and mobility tools.',
    strengths: ['Strong zoning and counterzoning', 'Faster Fatal Blow animation', 'Good space control' , '+50 Health bonus'],
    weaknesses: ['Big hurtbox', 'Limited rushdown tools', 'Situational usage']
  },
  'Sareena': {
    overview: 'Sareena, a demon servant of Quan Chi and sole remaining member of his Sisterhood of Shadow, is loosely considered an all-rounder assist, granting players easy hit-confirms that allow for kombo extension and block pressure to all characters.',
    strengths: ['Easy hit-confirms for all characters', 'Kombo extension from any confirm', 'Block pressure tools', 'Good all-rounder', 'Zoning and defense options'],
    weaknesses: ['Limited specialized tools', 'Predictable usage patterns']
  },
  'Scorpion': {
    overview: 'Scorpion, an assassin of the Shirai Ryu clan, is a Kameo that specializes mainly in damage and kombo extension. He is for players confident in their own neutral, designed to turn small openings into big damage.',
    strengths: ['Versatile Flame Breath converts', 'Hell Blades for safe hit-confirms', 'Armored Spear Pull escape option', 'Unblockable Aura of Flame for round end', 'Excellent damage'],
    weaknesses: ['Limited pressure and mixup options', 'No help until the player finds a hit', 'Strict positioning requirements for Flame Breath']
  },
  'Sektor': {
    overview: 'Sektor, the Master Armorer of the Lin Kuei, is a zoning/counterzoning Kameo that utilizes homing missiles and defensive tools to control space and extend combos.',
    strengths: ['Tracking missiles for pressure', 'Fatal Blow missile cancel', 'Good zoning tools', 'Flame Breath for corner carry', 'Up Rocket for restand setups'],
    weaknesses: ['Slow startup on key moves', 'Predictable missile patterns', 'Vulnerable to Up Block']
  },
  'Shujinko': {
    overview: 'Shujinko, a Shaolin student gifted with the ability to absorb and copy the skills of any fighter, is a mimic archetype Kameo that specializes in gaining unique move steal abilities after manually charging his gauge.',
    strengths: ['Steals opponent Kameo moves', 'Meterless strikes with crumple', 'Unique Kopy Kat abilities', 'Versatile mimic options', 'Can charge gauge at will'],
    weaknesses: ['Starts with no gauge', 'Must manually charge (meditate)', 'Complex usage', 'High execution barrier']
  },
  'Sonya': {
    overview: 'Sonya, a commanding officer of Earthrealm Special Forces, is a rushdown/pressure Kameo that uses her energy rings and leg grab to control space and extend combos.',
    strengths: ['Energy Ring for zoning', 'Leg Grab for combo extensions', 'Good pressure tools', 'Easy to use'],
    weaknesses: ['Limited mixup options', 'Predictable gameplan']
  },
  'Stryker': {
    overview: 'Stryker, a police officer recruited by Earthrealm defense forces, is a Kameo that utilizes zoning, pressure, and mixup tools with his grenade tosses and baton attacks.',
    strengths: ['Grenade Toss grants high frame advantage', 'Can be highly plus on block', 'Good zoning and pressure', 'Versatile grenade arcs'],
    weaknesses: ['Slow startup on grenades', 'Limited close-range tools']
  },
  'Sub-Zero': {
    overview: 'Sub-Zero, member of the Lin Kuei clan, is a Kameo oriented around defensive and counterzoning tools, as well as granting stun/freeze assists that allow for kombo extension.',
    strengths: ['Freeze for easy combo extensions', 'Arctic Armor stops projectiles infinitely', 'Parry with multiple followups', 'Fully invulnerable reversal', '+50 Health bonus'],
    weaknesses: ['Abysmal startup on key moves', 'Situational plus frames', 'Freeze damage scaling limits combos', 'Inconsistent reward']
  },
  'Tremor': {
    overview: 'Tremor, a former Black Dragon member with earth-based powers, is a versatile Kameo that can switch between Aftershock (rushdown), Metallic (balanced), and Crystalline (defensive) variations.',
    strengths: ['Three variations for any situation', 'Ambush cancel for plus frames', 'Projectile reflection (Crystalline)', 'Armored options (Metallic)', 'Versatile at all ranges'],
    weaknesses: ['Complex variation management', 'Ambush cancel costs full gauge', 'Cooldown penalty on hit', 'Requires gameplan knowledge']
  }
};
