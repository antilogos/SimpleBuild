// Need unique, jewel, flask, talisman, etc.
const itemIcon = {
    "Quartz Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvcGhhc2VmbGFzazAxIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/6266d738e1/phaseflask01.png",
        "en": "Quartz Flask",
        "fr": "Flacon de quartz"
    },
    "Amethyst Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvQW1ldGh5c3QiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/0f93f9050a/Amethyst.png",
        "en": "Amethyst Flask",
        "fr": "Flacon d'améthyste"
    },
    "Quicksilver Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3Mvc3ByaW50IiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/aa66be180b/sprint.png",
        "en": "Quicksilver Flask",
        "fr": "Flacon de vif-argent"
    },
    "Iron Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvV2FyZGZsYXNrMDEiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/19bbf3a214/Wardflask01.png",
        "en": "Iron Flask",
        "fr": "Flacon de fer"
    },
    "Gold Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvR29sZEZsYXNrIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/0669496bc6/GoldFlask.png",
        "en": "Gold Flask",
        "fr": "Flacon d'or"
    },
    "Silver Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3Mvc2lsdmVyIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/a2143b575d/silver.png",
        "en": "Silver Flask",
        "fr": "Flacon d'argent"
    },
    "Basalt Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3Mvc3RvbmUiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/00261d09db/stone.png",
        "en": "Basalt Flask",
        "fr": "Flacon de basalte"
    },
    "Jade Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvZXZhc2lvbmZsYXNrMDEiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/8ead4435df/evasionflask01.png",
        "en": "Jade Flask",
        "fr": "Flacon de jade"
    },
    "Granite Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvZ3Jhbml0ZSIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/101bce8899/granite.png",
        "en": "Granite Flask",
        "fr": "Flacon de granite"
    },
    "Diamond Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvZGlhbW9uZCIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/98bf48b8dd/diamond.png",
        "en": "Diamond Flask",
        "fr": "Flacon de diamant"
    },
    "Ruby Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvcnVieSIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/0d582b3f83/ruby.png",
        "en": "Ruby Flask",
        "fr": "Flacon de rubis"
    },
    "Sulphur Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvZ29sZCIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/74568fc9b9/gold.png",
        "en": "Sulphur Flask",
        "fr": "Flacon de soufre"
    },
    "Sapphire Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3Mvc2FwcGhpcmUiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/1545bc9f68/sapphire.png",
        "en": "Sapphire Flask",
        "fr": "Flacon de saphir"
    },
    "Stibnite Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3Mvc3RpYm5pdGUiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/35fbc2f198/stibnite.png",
        "en": "Stibnite Flask",
        "fr": "Flacon de stibnite"
    },
    "Topaz Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvdG9wYXoiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/2a6d920bc1/topaz.png",
        "en": "Topaz Flask",
        "fr": "Flacon de topaze"
    },
    "Bismuth Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvYmlzbXV0aCIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/fbda460273/bismuth.png",
        "en": "Bismuth Flask",
        "fr": "Flacon de bismuth"
    },
    "Corundum Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvQW50aVN0dW5GbGFzayIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/4df2dac26a/AntiStunFlask.png",
        "en": "Corundum Flask",
        "fr": "Flacon de corindon"
    },
    "Aquamarine Flask": {
        "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvYXF1YW1hcmluZSIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/b48851db23/aquamarine.png",
        "en": "Aquamarine Flask",
        "fr": "Flacon d'aigue-marine"
    },
    "Walnut Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/99b47eb1fa/ShieldInt2.png",
        "en": "Walnut Spirit Shield",
        "fr": "Bouclier spirituel en noyer"
    },
    "Convoking Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Db252b2tpbmdXYW5kIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/fc10997b84/ConvokingWand.png",
        "en": "Convoking Wand",
        "fr": "Baguette de convocation"
    },
    "Corsair Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDMiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/0aa55ff7a1/OneHandSword3.png",
        "en": "Corsair Sword",
        "fr": "Épée de corsaire"
    },
    "Banishing Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0hlaXN0VHdvSGFuZFN3b3JkIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/9757ea88b2/HeistTwoHandSword.png",
        "en": "Banishing Blade",
        "fr": "Lame de bannissement"
    },
    "Eventuality Rod": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVpc3RXYXJTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/c9454891da/HeistWarStaff.png",
        "en": "Eventuality Rod",
        "fr": "Canne d'éventualité"
    },
    "Fingerless Silk Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRmluZ2VybGVzc1NpbGtHbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/8853f1e934/FingerlessSilkGloves.png",
        "en": "Fingerless Silk Gloves",
        "fr": "Mitaines en soie"
    },
    "Diamond Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvRGlhbW9uZFJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/d07e3dfbb6/DiamondRing.png",
        "en": "Diamond Ring",
        "fr": "Bague de diamant"
    },
    "Steel Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8d673b3a1f/ShieldStrInt4.png",
        "en": "Steel Kite Shield",
        "fr": "Écu en acier"
    },
    "Cutlass": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDMiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/0aa55ff7a1/OneHandSword3.png",
        "en": "Cutlass",
        "fr": "Épée de corsaire"
    },
    "Alternating Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9IZWlzdFNjZXB0cmVFbGVtZW50YWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/34e5d78ab3/HeistSceptreElemental.png",
        "en": "Alternating Sceptre",
        "fr": "Sceptre alternant"
    },
    "Plank Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/beeb773dcf/ShieldStrInt1.png",
        "en": "Plank Kite Shield",
        "fr": "Écu en planches"
    },
    "Gilded Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/e2c34a0fb2/TwoHandAxe6.png",
        "en": "Gilded Axe",
        "fr": "Hache à dorures"
    },
    "Broadhead Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJCcm9hZGhlYWQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5265402022/QuiverBroadhead.png",
        "en": "Broadhead Arrow Quiver",
        "fr": "Carquois de flèches à pointe large"
    },
    "Subsuming Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0ludEhlaXN0U2hpZWxkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f58639d2f4/IntHeistShield.png",
        "en": "Subsuming Spirit Shield",
        "fr": "Bouclier spirituel incorporant"
    },
    "Cold-attuned Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0RleEhlaXN0U2hpZWxkIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/484b5bba00/DexHeistShield.png",
        "en": "Cold-attuned Buckler",
        "fr": "Bocle cryo-endurci"
    },
    "Malign Fangs": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9IZWlzdENsYXciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/7ebe8140fa/HeistClaw.png",
        "en": "Malign Fangs",
        "fr": "Crocs pernicieux"
    },
    "Solarine Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0hlaXN0Qm93RmlyZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/30526435da/HeistBowFire.png",
        "en": "Solarine Bow",
        "fr": "Arc solarin"
    },
    "Hedron Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0hlaXN0Qm93RmlyZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/30526435da/HeistBowFire.png",
        "en": "Hedron Bow",
        "fr": "Arc solarin"
    },
    "Void Fangs": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9IZWlzdENsYXciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/7ebe8140fa/HeistClaw.png",
        "en": "Void Fangs",
        "fr": "Crocs pernicieux"
    },
    "Crack Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvSGVpc3RPbmVIYW5kTWFjZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/48ff9d9c4c/HeistOneHandMace.png",
        "en": "Crack Mace",
        "fr": "Masse claquante"
    },
    "Hollowpoint Dagger": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlaXN0RGFnZ2VyIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/d484666b70/HeistDagger.png",
        "en": "Hollowpoint Dagger",
        "fr": "Dague à pointe creuse"
    },
    "Crystal Belt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQ3J5c3RhbEJlbHQiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/1e9174ec8f/CrystalBelt.png",
        "en": "Crystal Belt",
        "fr": "Ceinture en cristal"
    },
    "Fancy Foil": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjciLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/97d714e903/Rapier7.png",
        "en": "Fancy Foil",
        "fr": "Fleuret sophistiqué"
    },
    "Dragonscale Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyRGV4MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/01471b423e/GlovesStrDex3.png",
        "en": "Dragonscale Gauntlets",
        "fr": "Gantelets en écailles de dragon"
    },
    "Accumulator Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9IZWlzdFdhbmQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/4499b00066/HeistWand.png",
        "en": "Accumulator Wand",
        "fr": "Baguette d'accumulation"
    },
    "Sorcerer Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0ludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5589419509/BootsInt4.png",
        "en": "Sorcerer Boots",
        "fr": "Bottes de sorcier"
    },
    "Serpentscale Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckRleDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/d5b5430d4c/BootsStrDex2.png",
        "en": "Serpentscale Boots",
        "fr": "Bottes en écailles de serpent"
    },
    "Pig-Faced Bascinet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDkiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f0313fc805/HelmetStrDex9.png",
        "en": "Pig-Faced Bascinet",
        "fr": "Bassinet à bec de passereau"
    },
    "Triumphant Lamellar": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyNEEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/7e1c29aacf/BodyStr4A.png",
        "en": "Triumphant Lamellar",
        "fr": "Armure lamellaire de guerre"
    },
    "Wrapped Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleEludDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5106be74b2/BootsDexInt1.png",
        "en": "Wrapped Boots",
        "fr": "Bottes enveloppées"
    },
    "Chain Hauberk": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5a1804c81b/BodyStrInt2C.png",
        "en": "Chain Hauberk",
        "fr": "Haubert en chaînes"
    },
    "Anarchic Spiritblade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0hlaXN0T25lSGFuZFN3b3JkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/6b56c4c406/HeistOneHandSword.png",
        "en": "Anarchic Spiritblade",
        "fr": "Lamesprit anarchique"
    },
    "Scholar Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0ludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5589419509/BootsInt4.png",
        "en": "Scholar Boots",
        "fr": "Bottes de sorcier"
    },
    "Oscillating Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9IZWlzdFNjZXB0cmVFbGVtZW50YWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/34e5d78ab3/HeistSceptreElemental.png",
        "en": "Oscillating Sceptre",
        "fr": "Sceptre alternant"
    },
    "Amethyst Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQW1ldGh5c3RSaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/804d781735/AmethystRing.png",
        "en": "Amethyst Ring",
        "fr": "Bague d'améthyste"
    },
    "Royal Burgonet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0cjEwIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/b1e95342a8/HelmetStr10.png",
        "en": "Royal Burgonet",
        "fr": "not found"
    },
    "Pressurised Dagger": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlaXN0RGFnZ2VyIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/d484666b70/HeistDagger.png",
        "en": "Pressurised Dagger",
        "fr": "Dague à pointe creuse"
    },
    "Stabilising Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9IZWlzdFNjZXB0cmVFbGVtZW50YWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/34e5d78ab3/HeistSceptreElemental.png",
        "en": "Stabilising Sceptre",
        "fr": "Sceptre alternant"
    },
    "Conjurer Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0ludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5589419509/BootsInt4.png",
        "en": "Conjurer Boots",
        "fr": "Bottes de sorcier"
    },
    "Goliath Greaves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0cjQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/82bedfd1e0/BootsStr4.png",
        "en": "Goliath Greaves",
        "fr": "Jambières de goliath"
    },
    "Blizzard Crown": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludFIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/9da7af13c1/HelmetDexIntR.png",
        "en": "Blizzard Crown",
        "fr": "Couronne du blizzard"
    },
    "Vaal Greaves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0cjMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/56efa25c50/BootsStr3.png",
        "en": "Vaal Greaves",
        "fr": "Jambières vaal"
    },
    "Fugitive Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9IYWxmVG9uZWRCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/3bfd47b73a/HalfTonedBoots.png",
        "en": "Fugitive Boots",
        "fr": "not found"
    },
    "Gripped Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR3JpcEdsb3Zlc0Jhc2VUeXBlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/905e5572e6/GripGlovesBaseType.png",
        "en": "Gripped Gloves",
        "fr": "Gants adhérents"
    },
    "Wyrmbone Rapier": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjIiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/481efcada5/Rapier2.png",
        "en": "Wyrmbone Rapier",
        "fr": "Rapière en os de vouivre"
    },
    "Velvet Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/cb34a7c551/GlovesInt2.png",
        "en": "Velvet Gloves",
        "fr": "Gants en velours"
    },
    "Titan Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyNCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/468f466568/GlovesStr4.png",
        "en": "Titan Gauntlets",
        "fr": "Gantelets de titan"
    },
    "Shagreen Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/76eb290c9b/BootsDex4.png",
        "en": "Shagreen Boots",
        "fr": "Bottes en chagrin"
    },
    "Praetor Crown": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckludDEwIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/6eed6bbe8e/HelmetStrInt10.png",
        "en": "Praetor Crown",
        "fr": "Couronne de préteur"
    },
    "Bone Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0JvbmVIZWxtIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/81dc21096f/BoneHelm.png",
        "en": "Bone Helmet",
        "fr": "Casque d'os"
    },
    "Stealth Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/445d038f1d/GlovesDex3.png",
        "en": "Stealth Gloves",
        "fr": "Gants de furtivité"
    },
    "Sambar Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyOSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/151820601e/scepter9.png",
        "en": "Sambar Sceptre",
        "fr": "Sceptre de sambar"
    },
    "Imperial Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/9efad90cdb/Claw7.png",
        "en": "Imperial Claw",
        "fr": "Griffe impériale"
    },
    "Runic Crown": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1NwaXJpdEhlbG1ldEJhc2VUeXBlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/53e1ae7954/SpiritHelmetBaseType.png",
        "en": "Runic Crown",
        "fr": "not found"
    },
    "Vermillion Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVmVybWlsbGlvblJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/b0570b8efc/VermillionRing.png",
        "en": "Vermillion Ring",
        "fr": "Bague vermilion"
    },
    "Apothecary's Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQ2hlbWlzdEdsb3ZlcyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/b6fad295a2/ChemistGloves.png",
        "en": "Apothecary's Gloves",
        "fr": "not found"
    },
    "Imperial Skean": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjciLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/61e8f27cc5/Dagger7.png",
        "en": "Imperial Skean",
        "fr": "Skiane impérial"
    },
    "Full Dragonscale": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/769e4eedeb/BodyStrDex1C.png",
        "en": "Full Dragonscale",
        "fr": "Armure en écailles de dragon"
    },
    "Imbued Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kMyIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/6322bd53f5/Wand3.png",
        "en": "Imbued Wand",
        "fr": "Baguette imprégnée"
    },
    "Murder Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleEludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/bad1ba72df/BootsDexInt4.png",
        "en": "Murder Boots",
        "fr": "Bottes de meurtrier"
    },
    "Psychotic Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9IZWlzdE9uZWhhbmRBeGUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5ba95d3930/HeistOnehandAxe.png",
        "en": "Psychotic Axe",
        "fr": "Hache psychotique"
    },
    "Legion Hammer": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U1IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/7a42346f2b/OneHandMace5.png",
        "en": "Legion Hammer",
        "fr": "Marteau de légion"
    },
    "Crushing Force Magnifier": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvSGVpc3RUd29IYW5kTWFjZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ecc9c2724b/HeistTwoHandMace.png",
        "en": "Crushing Force Magnifier",
        "fr": "Amplificateur de force écrasante"
    },
    "Buckskin Tunic": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/57409a1844/BodyDex1B.png",
        "en": "Buckskin Tunic",
        "fr": "Tunique en peau de daim"
    },
    "Redwood Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/db9355404e/ShieldDexInt2.png",
        "en": "Redwood Spiked Shield",
        "fr": "Rondache en séquoia"
    },
    "Splendid Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/b81ab44241/ShieldStrDex5.png",
        "en": "Splendid Round Shield",
        "fr": "Clipeus splendide"
    },
    "Amber Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/abb6811fa1/Amulet3.png",
        "en": "Amber Amulet",
        "fr": "Amulette d'ambre"
    },
    "Gold Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ2IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/9c1412b6dd/Amulet6.png",
        "en": "Gold Amulet",
        "fr": "Amulette en or"
    },
    "Battle Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5a38d58259/ShieldDex5.png",
        "en": "Battle Buckler",
        "fr": "Bocle de combat"
    },
    "Dreamquest Slippers": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SaXR1YWxJbnRCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/dfe31cc493/RitualIntBoots.png",
        "en": "Dreamquest Slippers",
        "fr": "Souliers de cherche-rêve"
    },
    "Lion Pelt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleDEwIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/ea03257436/HelmetDex10.png",
        "en": "Lion Pelt",
        "fr": "Peau de lion"
    },
    "Champion Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8d673b3a1f/ShieldStrInt4.png",
        "en": "Champion Kite Shield",
        "fr": "Écu en acier"
    },
    "Runic Sabatons": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TcGlyaXRCb290c0Jhc2VUeXBlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c6826fae52/SpiritBootsBaseType.png",
        "en": "Runic Sabatons",
        "fr": "not found"
    },
    "Eternal Burgonet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0cjExIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/d288bbe11b/HelmetStr11.png",
        "en": "Eternal Burgonet",
        "fr": "Bourguignotte éternelle"
    },
    "Ezomyte Burgonet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0cjkiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/b814dc309a/HelmetStr9.png",
        "en": "Ezomyte Burgonet",
        "fr": "Bourguignotte ézomyte"
    },
    "Impact Force Propagator": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvSGVpc3RUd29IYW5kTWFjZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ecc9c2724b/HeistTwoHandMace.png",
        "en": "Impact Force Propagator",
        "fr": "Amplificateur de force écrasante"
    },
    "Honed Cleaver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9IZWlzdFR3b0hhbmRBeGUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/4aef1881cc/HeistTwoHandAxe.png",
        "en": "Honed Cleaver",
        "fr": "Hachoir affûté"
    },
    "Exhausting Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0ludEhlaXN0U2hpZWxkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f58639d2f4/IntHeistShield.png",
        "en": "Exhausting Spirit Shield",
        "fr": "Bouclier spirituel incorporant"
    },
    "Heat-attuned Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0hlaXN0U2hpZWxkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/e65fb9efea/HeistShield.png",
        "en": "Heat-attuned Tower Shield",
        "fr": "Pavois pyro-endurci"
    },
    "Foundry Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0hlaXN0Qm93RmlyZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/30526435da/HeistBowFire.png",
        "en": "Foundry Bow",
        "fr": "Arc solarin"
    },
    "Blood Raiment": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/95329b265f/BodyDexInt1C.png",
        "en": "Blood Raiment",
        "fr": "Vêtement de sang"
    },
    "Goathide Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/37d9d4d590/BootsDex2.png",
        "en": "Goathide Boots",
        "fr": "Bottes en peau d'anguille"
    },
    "Astral Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/94a3d5d98e/BodyStr1C.png",
        "en": "Astral Plate",
        "fr": "Cuirasse astrale"
    },
    "Boom Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvSGVpc3RPbmVIYW5kTWFjZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/48ff9d9c4c/HeistOneHandMace.png",
        "en": "Boom Mace",
        "fr": "Masse claquante"
    },
    "Hubris Circlet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldEludDExIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/4588b92597/HelmetInt11.png",
        "en": "Hubris Circlet",
        "fr": "not found"
    },
    "Stygian Vise": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQWJ5c3NCZWx0IiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/973fb5fe7a/AbyssBelt.png",
        "en": "Stygian Vise",
        "fr": "Carcan stygien"
    },
    "Slink Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4NCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/05a8c03e95/GlovesDex4.png",
        "en": "Slink Gloves",
        "fr": "Gants de discrétion"
    },
    "Oiled Coat": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/360c5ce7d4/BodyDexInt2B.png",
        "en": "Oiled Coat",
        "fr": "Manteau lubrifié"
    },
    "Two-Toned Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Ud29Ub25lZEJvb3RzMkIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c046f556ab/TwoTonedBoots2B.png",
        "en": "Two-Toned Boots",
        "fr": "Bottes à deux tons"
    },
    "Agate Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BZ2F0ZUFtdWxldCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/710a5a8ec4/AgateAmulet.png",
        "en": "Agate Amulet",
        "fr": "Amulette d'agate"
    },
    "Dragonscale Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckRleDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3418ad050e/BootsStrDex3.png",
        "en": "Dragonscale Boots",
        "fr": "Bottes en écailles de dragon"
    },
    "Hydrascale Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckRleDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/d5b5430d4c/BootsStrDex2.png",
        "en": "Hydrascale Boots",
        "fr": "Bottes en écailles de serpent"
    },
    "Pneumatic Dagger": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlaXN0RGFnZ2VyIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/d484666b70/HeistDagger.png",
        "en": "Pneumatic Dagger",
        "fr": "Dague à pointe creuse"
    },
    "Assassin's Garb": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8f1d1cfaa9/BodyDex2C.png",
        "en": "Assassin's Garb",
        "fr": "Tenue d'assassin"
    },
    "Iron Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyMSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/413116fb67/GlovesStr1.png",
        "en": "Iron Gauntlets",
        "fr": "Gantelets en fer"
    },
    "Artillery Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9DaGlzZWxRdWl2ZXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e316e63433/ChiselQuiver.png",
        "en": "Artillery Quiver",
        "fr": "not found"
    },
    "Whalebone Rapier": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjIiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/481efcada5/Rapier2.png",
        "en": "Whalebone Rapier",
        "fr": "Rapière en os de vouivre"
    },
    "Karui Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyMiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e3e72321e0/scepter2.png",
        "en": "Karui Sceptre",
        "fr": "Sceptre karui"
    },
    "Opal Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvT3BhbFJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8c87f65b28/OpalRing.png",
        "en": "Opal Ring",
        "fr": "Bague d'opale"
    },
    "Tornado Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/a28035d7c4/Wand5.png",
        "en": "Tornado Wand",
        "fr": "Baguette de tornade"
    },
    "Arcanist Slippers": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0ludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/036cf97e61/BootsInt3.png",
        "en": "Arcanist Slippers",
        "fr": "Souliers d'arcaniste"
    },
    "Vile Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9WaWxlQXJyb3dRdWl2ZXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e950cb1d11/VileArrowQuiver.png",
        "en": "Vile Arrow Quiver",
        "fr": "not found"
    },
    "Polar Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0RleEhlaXN0U2hpZWxkIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/484b5bba00/DexHeistShield.png",
        "en": "Polar Buckler",
        "fr": "Bocle cryo-endurci"
    },
    "Full Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/94a3d5d98e/BodyStr1C.png",
        "en": "Full Plate",
        "fr": "Cuirasse astrale"
    },
    "Micro-Distillery Belt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSGVpc3RCZWx0MSIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/1f77620811/HeistBelt1.png",
        "en": "Micro-Distillery Belt",
        "fr": "Ceinture micro-distillerie"
    },
    "Turquoise Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UdXJxdW9pc2VBbXVsZXQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/605b4da0e1/TurquoiseAmulet.png",
        "en": "Turquoise Amulet",
        "fr": "Amulette de turquoise"
    },
    "Leather Belt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDMiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/93af17affd/Belt3.png",
        "en": "Leather Belt",
        "fr": "Ceinture en cuir"
    },
    "Prophecy Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNiIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/30763e0fe7/Wand6.png",
        "en": "Prophecy Wand",
        "fr": "Baguette de prophétie"
    },
    "Zodiac Leather": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4M0MiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e30de2c7a6/BodyDex3C.png",
        "en": "Zodiac Leather",
        "fr": "Tunique zodiacale en cuir"
    },
    "Golden Kris": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjYiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/5dcee0019c/Dagger6.png",
        "en": "Golden Kris",
        "fr": "Kriss en or"
    },
    "Ruby Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/0e04df86a3/Ring7.png",
        "en": "Ruby Ring",
        "fr": "Bague de rubis"
    },
    "Spiked Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3Bpa2VkR2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/d98a3475e1/SpikedGloves.png",
        "en": "Spiked Gloves",
        "fr": "Gants pointus"
    },
    "Shagreen Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4NCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/05a8c03e95/GlovesDex4.png",
        "en": "Shagreen Gloves",
        "fr": "Gants de discrétion"
    },
    "Bone Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f0b78ea97c/ShieldInt3.png",
        "en": "Bone Spirit Shield",
        "fr": "Bouclier spirituel en os"
    },
    "Prophet Crown": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckludDkiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/6ad7c513a8/HelmetStrInt9.png",
        "en": "Prophet Crown",
        "fr": "Couronne de prophète"
    },
    "War Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c62bd1159e/BodyStr2B.png",
        "en": "War Plate",
        "fr": "Cuirasse de guerre"
    },
    "Clasped Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleEludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/0c80b843d0/BootsDexInt3.png",
        "en": "Clasped Boots",
        "fr": "Bottes à boucles"
    },
    "Layered Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/23fbb47426/ShieldStrInt3.png",
        "en": "Layered Kite Shield",
        "fr": "Écu fortifié"
    },
    "Simplex Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9IZWlzdEFtdWxldDIiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/4d60cca5ab/HeistAmulet2.png",
        "en": "Simplex Amulet",
        "fr": "Amulette simplex"
    },
    "Titan Greaves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0cjQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/82bedfd1e0/BootsStr4.png",
        "en": "Titan Greaves",
        "fr": "Jambières de goliath"
    },
    "Carnal Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleEludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/bad1ba72df/BootsDexInt4.png",
        "en": "Carnal Boots",
        "fr": "Bottes de meurtrier"
    },
    "Unset Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvRW1wdHktU29ja2V0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/82146b3aa4/Empty-Socket.png",
        "en": "Unset Ring",
        "fr": "Bague inachevée"
    },
    "Thicket Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/0fcc51afcd/Bow2.png",
        "en": "Thicket Bow",
        "fr": "Arc du bocage"
    },
    "Vaal Regalia": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4SW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e6eb42b23a/BodyStrDexInt1C.png",
        "en": "Vaal Regalia",
        "fr": "Apparat vaal"
    },
    "Windbreak Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SaXR1YWxEZXhCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7172feff67/RitualDexBoots.png",
        "en": "Windbreak Boots",
        "fr": "Bottes de brise-vent"
    },
    "Supreme Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3f3c95a49a/ShieldDexInt5.png",
        "en": "Supreme Spiked Shield",
        "fr": "Rondache suprême"
    },
    "Fossilised Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f0b78ea97c/ShieldInt3.png",
        "en": "Fossilised Spirit Shield",
        "fr": "Bouclier spirituel en os"
    },
    "Void Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyOCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/6644b94336/scepter8.png",
        "en": "Void Sceptre",
        "fr": "Sceptre du néant"
    },
    "Behemoth Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U5IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f2a493ef7a/OneHandMace9.png",
        "en": "Behemoth Mace",
        "fr": "Masse du béhémoth"
    },
    "Soldier Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e75ade3184/BootsStrInt3.png",
        "en": "Soldier Boots",
        "fr": "Bottes de soldat"
    },
    "Apex Rapier": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjgiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/1f11ed5e87/Rapier8.png",
        "en": "Apex Rapier",
        "fr": "Rapière de l'apex"
    },
    "Imperial Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/ad59b083a6/ShieldDex6.png",
        "en": "Imperial Buckler",
        "fr": "Bocle impérial"
    },
    "Harlequin Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDkiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c006f13480/HelmetDexInt9.png",
        "en": "Harlequin Mask",
        "fr": "Masque d'arlequin"
    },
    "Destiny Leather": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4M0IiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/db900972c7/BodyDex3B.png",
        "en": "Destiny Leather",
        "fr": "Tunique en cuir du destin"
    },
    "Iolite Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQ2hhb3NEbWdSaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/41236019f8/ChaosDmgRing.png",
        "en": "Iolite Ring",
        "fr": "not found"
    },
    "Samnite Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0cjgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/8bd91531d0/HelmetStr8.png",
        "en": "Samnite Helmet",
        "fr": "Heaume de samnite"
    },
    "Fishscale Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyRGV4MSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ba243000da/GlovesStrDex1.png",
        "en": "Fishscale Gauntlets",
        "fr": "Gantelets en écailles de poisson"
    },
    "Chainmail Doublet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2cea5723dd/BodyStrInt2B.png",
        "en": "Chainmail Doublet",
        "fr": "Pourpoint en maille"
    },
    "Infernal Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlOCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/1c9ff58159/OneHandAxe8.png",
        "en": "Infernal Axe",
        "fr": "Hache infernale"
    },
    "Bronzescale Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyRGV4MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/01471b423e/GlovesStrDex3.png",
        "en": "Bronzescale Gauntlets",
        "fr": "Gantelets en écailles de dragon"
    },
    "Coronal Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U4IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/d7f01f7a37/TwoHandMace8.png",
        "en": "Coronal Maul",
        "fr": "Massue coronaire"
    },
    "Royal Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/5bbf95c3b4/OneHandAxe7.png",
        "en": "Royal Axe",
        "fr": "Hache royale"
    },
    "Blinder": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/1d5586ea56/Claw5.png",
        "en": "Blinder",
        "fr": "Perce-yeux"
    },
    "Vine Circlet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldEludDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/78dd152257/HelmetInt1.png",
        "en": "Vine Circlet",
        "fr": "Diadème en vigne"
    },
    "Copper Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/ee43ed9cee/ShieldStr5.png",
        "en": "Copper Tower Shield",
        "fr": "Pavois en cuivre"
    },
    "Two-Stone Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU2FwcGhpcmVSdWJ5IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/7df6d65dfd/SapphireRuby.png",
        "en": "Two-Stone Ring",
        "fr": "not found"
    },
    "Hydrascale Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyRGV4MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0bb5dd1e50/GlovesStrDex2.png",
        "en": "Hydrascale Gauntlets",
        "fr": "Gantelets en écailles d'hydre"
    },
    "Pinnacle Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/80f9f1abea/ShieldStr7.png",
        "en": "Pinnacle Tower Shield",
        "fr": "Pavois du pinacle"
    },
    "Assassin's Mitts": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4SW50MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/e18b986979/GlovesDexInt2.png",
        "en": "Assassin's Mitts",
        "fr": "Paumelles d'assassin"
    },
    "Legion Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/742e5a15d7/BootsStrInt2.png",
        "en": "Legion Boots",
        "fr": "Bottes de légion"
    },
    "Sentinel Jacket": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/333216677b/BodyDexInt1B.png",
        "en": "Sentinel Jacket",
        "fr": "Veste de sentinelle"
    },
    "Vaal Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/35e149f5cf/scepter6.png",
        "en": "Vaal Sceptre",
        "fr": "Sceptre vaal"
    },
    "Moonstone Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTW9vbnN0b25lUmluZyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/6dbab29358/MoonstoneRing.png",
        "en": "Moonstone Ring",
        "fr": "Bague de pierre de lune"
    },
    "Ornate Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9UcmlnZ2VyUXVpdmVyVW5pcXVlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/925018d4b5/TriggerQuiverUnique.png",
        "en": "Ornate Quiver",
        "fr": "Carquois orné"
    },
    "Grasping Mail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9HcmFzcGluZ01haWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwidGFuZ2xlZCI6dHJ1ZX1d/d138c120cc/GraspingMail.png",
        "en": "Grasping Mail",
        "fr": "not found"
    },
    "Sharkskin Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f2e9a30d4a/BootsDex3.png",
        "en": "Sharkskin Boots",
        "fr": "Bottes en peau de requin"
    },
    "Primal Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9SaWtlclJpblF1aXZlciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/8f01e6977f/RikerRinQuiver.png",
        "en": "Primal Arrow Quiver",
        "fr": "not found"
    },
    "Glorious Leather": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/47360dcc4a/BodyDex1C.png",
        "en": "Glorious Leather",
        "fr": "Tunique glorieuse en cuir"
    },
    "Prismatic Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzEyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/51db874b5c/Ring12.png",
        "en": "Prismatic Ring",
        "fr": "Anneau prismatique"
    },
    "Coral Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzIiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/6e12710920/Ring2.png",
        "en": "Coral Ring",
        "fr": "Bague de corail"
    },
    "Butcher Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDIiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/fcaf050e0f/TwoHandSword2.png",
        "en": "Butcher Sword",
        "fr": "Épée de boucher"
    },
    "Copper Kris": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjYiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/5dcee0019c/Dagger6.png",
        "en": "Copper Kris",
        "fr": "Kriss en or"
    },
    "Imperial Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY2IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5e3de6f391/Staff6.png",
        "en": "Imperial Staff",
        "fr": "Bâton impérial"
    },
    "Crusader Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RySW50MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7adc65bac6/GlovesStrInt3.png",
        "en": "Crusader Gloves",
        "fr": "Gants de croisé"
    },
    "Lordly Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyM0MiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/09903268a5/BodyStr3C.png",
        "en": "Lordly Plate",
        "fr": "Cuirasse seigneuriale"
    },
    "Twig Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/26dafd13bc/ShieldInt1.png",
        "en": "Twig Spirit Shield",
        "fr": "Bouclier spirituel en brindilles"
    },
    "Linden Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/996436dc6d/ShieldStrInt2.png",
        "en": "Linden Kite Shield",
        "fr": "Écu en tilleul"
    },
    "Ritual Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/6b9c62e4c3/scepter7.png",
        "en": "Ritual Sceptre",
        "fr": "Sceptre rituel"
    },
    "Leatherscale Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckRleDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/bae77b3a2c/BootsStrDex1.png",
        "en": "Leatherscale Boots",
        "fr": "Bottes en écailles d'acier"
    },
    "Slink Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/76eb290c9b/BootsDex4.png",
        "en": "Slink Boots",
        "fr": "Bottes en chagrin"
    },
    "Crested Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/80f9f1abea/ShieldStr7.png",
        "en": "Crested Tower Shield",
        "fr": "Pavois du pinacle"
    },
    "Opal Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/c986bafb78/scepter4.png",
        "en": "Opal Sceptre",
        "fr": "Sceptre d'opale"
    },
    "Tyrant's Sekhem": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyMyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/366212755a/scepter3.png",
        "en": "Tyrant's Sekhem",
        "fr": "Sekhem du tyran"
    },
    "Lacquered Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/0884b27765/HelmetStrDex7.png",
        "en": "Lacquered Helmet",
        "fr": "Heaume laqué"
    },
    "Desert Brigandine": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/cd52e7b841/BodyStrDex2B.png",
        "en": "Desert Brigandine",
        "fr": "Brigandine du désert"
    },
    "Crypt Armour": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50NEMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/99efce2041/BodyDexInt4C.png",
        "en": "Crypt Armour",
        "fr": "Armure de la crypte"
    },
    "Great Crown": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckludDciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/607b69e687/HelmetStrInt7.png",
        "en": "Great Crown",
        "fr": "Grande couronne"
    },
    "Sorcerer Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50NCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/484e9bd879/GlovesInt4.png",
        "en": "Sorcerer Gloves",
        "fr": "Gants de sorcier"
    },
    "Elegant Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/b81ab44241/ShieldStrDex5.png",
        "en": "Elegant Round Shield",
        "fr": "Clipeus splendide"
    },
    "Nubuck Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/76eb290c9b/BootsDex4.png",
        "en": "Nubuck Boots",
        "fr": "Bottes en chagrin"
    },
    "Ancient Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyMyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/f5896830bf/GlovesStr3.png",
        "en": "Ancient Gauntlets",
        "fr": "Gantelets antiques"
    },
    "Lapis Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ1IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/998c42287b/Amulet5.png",
        "en": "Lapis Amulet",
        "fr": "Amulette de lapis"
    },
    "Stormrider Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SaXR1YWxEZXhCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7172feff67/RitualDexBoots.png",
        "en": "Stormrider Boots",
        "fr": "Bottes de brise-vent"
    },
    "Astrolabe Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9IZWlzdEFtdWxldDEiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/f43fa4b21a/HeistAmulet1.png",
        "en": "Astrolabe Amulet",
        "fr": "Amulette astrolabe"
    },
    "Colossal Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d883ad1ca2/ShieldStr6.png",
        "en": "Colossal Tower Shield",
        "fr": "Pavois colossal"
    },
    "Riveted Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckludDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/0519faf993/BootsStrInt1.png",
        "en": "Riveted Boots",
        "fr": "Bottes rivetées"
    },
    "Sapphire Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzYiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/74a5d719fd/Ring6.png",
        "en": "Sapphire Ring",
        "fr": "Bague de saphir"
    },
    "Royal Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/6b9c62e4c3/scepter7.png",
        "en": "Royal Sceptre",
        "fr": "Sceptre rituel"
    },
    "Antique Rapier": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjYiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/f9bc0a5aa1/Rapier6.png",
        "en": "Antique Rapier",
        "fr": "Rapière immémoriale"
    },
    "Oak Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/cffdb4477e/ShieldDex2.png",
        "en": "Oak Buckler",
        "fr": "Bocle en chêne"
    },
    "Barbed Club": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2UzIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/a3a1dace2a/OneHandMace3.png",
        "en": "Barbed Club",
        "fr": "Gourdin barbelé"
    },
    "Rawhide Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/d9494fc647/BootsDex1.png",
        "en": "Rawhide Boots",
        "fr": "Bottes en cuir brut"
    },
    "Bastard Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/28f44a7a0c/TwoHandSword3.png",
        "en": "Bastard Sword",
        "fr": "Épée bâtarde"
    },
    "Woodsplitter": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlMyIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/7d35a55caa/TwoHandAxe3.png",
        "en": "Woodsplitter",
        "fr": "Fendeuse"
    },
    "Full Ringmail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/3247afb396/BodyStrInt1C.png",
        "en": "Full Ringmail",
        "fr": "Cotte de mailles intégrale"
    },
    "Steel Greaves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0cjIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c55db774a6/BootsStr2.png",
        "en": "Steel Greaves",
        "fr": "Jambières en acier"
    },
    "Spiraled Foil": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjUiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/ccce0178cc/Rapier5.png",
        "en": "Spiraled Foil",
        "fr": "Fleuret spiralé"
    },
    "Deerskin Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f2e9a30d4a/BootsDex3.png",
        "en": "Deerskin Boots",
        "fr": "Bottes en peau de requin"
    },
    "Goathide Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/b051b2c9f5/GlovesDex2.png",
        "en": "Goathide Gloves",
        "fr": "Gants en peau de chèvre"
    },
    "Brass Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/404ef29c87/ShieldInt6.png",
        "en": "Brass Spirit Shield",
        "fr": "Bouclier spirituel en laiton"
    },
    "Mesh Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RySW50MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7adc65bac6/GlovesStrInt3.png",
        "en": "Mesh Gloves",
        "fr": "Gants de croisé"
    },
    "Crusader Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f6a9c01543/HelmetStrInt4.png",
        "en": "Crusader Helmet",
        "fr": "Heaume de croisé"
    },
    "Cogwork Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvSGVpc3RSaW5nMSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/23b3000b81/HeistRing1.png",
        "en": "Cogwork Ring",
        "fr": "Bague mécanique"
    },
    "Blunt Force Condenser": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvSGVpc3RUd29IYW5kTWFjZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ecc9c2724b/HeistTwoHandMace.png",
        "en": "Blunt Force Condenser",
        "fr": "Amplificateur de force écrasante"
    },
    "Angelic Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/92beb951d5/ShieldStrInt5.png",
        "en": "Angelic Kite Shield",
        "fr": "Écu angélique"
    },
    "Goliath Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyNCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/468f466568/GlovesStr4.png",
        "en": "Goliath Gauntlets",
        "fr": "Gantelets de titan"
    },
    "Jade Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/ffc5888355/Amulet4.png",
        "en": "Jade Amulet",
        "fr": "Amulette de jade"
    },
    "Iron Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzEiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/bf29c9d45e/Ring1.png",
        "en": "Iron Ring",
        "fr": "Anneau en fer"
    },
    "Titanium Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/404ef29c87/ShieldInt6.png",
        "en": "Titanium Spirit Shield",
        "fr": "Bouclier spirituel en laiton"
    },
    "Abyssal Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyOCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/6644b94336/scepter8.png",
        "en": "Abyssal Sceptre",
        "fr": "Sceptre du néant"
    },
    "Crusader Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5a38d58259/ShieldDex5.png",
        "en": "Crusader Buckler",
        "fr": "Bocle de combat"
    },
    "Thorium Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/404ef29c87/ShieldInt6.png",
        "en": "Thorium Spirit Shield",
        "fr": "Bouclier spirituel en laiton"
    },
    "Assassin Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/2c90c93faf/Bow5.png",
        "en": "Assassin Bow",
        "fr": "Arc d'assassin"
    },
    "Sun Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/94a3d5d98e/BodyStr1C.png",
        "en": "Sun Plate",
        "fr": "Cuirasse astrale"
    },
    "Cabalist Regalia": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4SW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e6eb42b23a/BodyStrDexInt1C.png",
        "en": "Cabalist Regalia",
        "fr": "Apparat vaal"
    },
    "Battle Lamellar": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyNEEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/7e1c29aacf/BodyStr4A.png",
        "en": "Battle Lamellar",
        "fr": "Armure lamellaire de guerre"
    },
    "Majestic Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyM0MiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/09903268a5/BodyStr3C.png",
        "en": "Majestic Plate",
        "fr": "Cuirasse seigneuriale"
    },
    "Necromancer Silks": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/3689be0ddd/BodyInt2B.png",
        "en": "Necromancer Silks",
        "fr": "Soieries de nécromancien"
    },
    "Silken Wrap": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/3689be0ddd/BodyInt2B.png",
        "en": "Silken Wrap",
        "fr": "Soieries de nécromancien"
    },
    "Flare Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvSGVpc3RPbmVIYW5kTWFjZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/48ff9d9c4c/HeistOneHandMace.png",
        "en": "Flare Mace",
        "fr": "Masse claquante"
    },
    "Polished Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/53a98ddeac/ShieldDexInt4.png",
        "en": "Polished Spiked Shield",
        "fr": "Rondache polie"
    },
    "Convening Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Db252b2tpbmdXYW5kIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/fc10997b84/ConvokingWand.png",
        "en": "Convening Wand",
        "fr": "Baguette de convocation"
    },
    "Congregator Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9IZWlzdFdhbmQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/4499b00066/HeistWand.png",
        "en": "Congregator Wand",
        "fr": "Baguette d'accumulation"
    },
    "Potentiality Rod": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVpc3RXYXJTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/c9454891da/HeistWarStaff.png",
        "en": "Potentiality Rod",
        "fr": "Canne d'éventualité"
    },
    "Transfer-attuned Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0ludEhlaXN0U2hpZWxkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f58639d2f4/IntHeistShield.png",
        "en": "Transfer-attuned Spirit Shield",
        "fr": "Bouclier spirituel incorporant"
    },
    "Infernal Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlaXN0UnVuZURhZ2dlciIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/1760d17051/HeistRuneDagger.png",
        "en": "Infernal Blade",
        "fr": "Lame infernale"
    },
    "Disapprobation Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9IZWlzdE9uZWhhbmRBeGUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5ba95d3930/HeistOnehandAxe.png",
        "en": "Disapprobation Axe",
        "fr": "Hache psychotique"
    },
    "Sage Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNiIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/30763e0fe7/Wand6.png",
        "en": "Sage Wand",
        "fr": "Baguette de prophétie"
    },
    "Wyrmscale Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckRleDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3418ad050e/BootsStrDex3.png",
        "en": "Wyrmscale Boots",
        "fr": "Bottes en écailles de dragon"
    },
    "Magmatic Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0hlaXN0U2hpZWxkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/e65fb9efea/HeistShield.png",
        "en": "Magmatic Tower Shield",
        "fr": "Pavois pyro-endurci"
    },
    "Platinum Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/4b16d71d85/scepter5.png",
        "en": "Platinum Sceptre",
        "fr": "Sceptre en platine"
    },
    "Siege Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlMyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/126bb32028/OneHandAxe3.png",
        "en": "Siege Axe",
        "fr": "Hache de siège"
    },
    "Occultist's Vestment": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9ea39de510/BodyInt1C.png",
        "en": "Occultist's Vestment",
        "fr": "Habit d'occultiste"
    },
    "Assembler Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9IZWlzdFdhbmQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/4499b00066/HeistWand.png",
        "en": "Assembler Wand",
        "fr": "Baguette d'accumulation"
    },
    "Exothermic Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0hlaXN0U2hpZWxkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/e65fb9efea/HeistShield.png",
        "en": "Exothermic Tower Shield",
        "fr": "Pavois pyro-endurci"
    },
    "Cutthroat's Garb": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8f1d1cfaa9/BodyDex2C.png",
        "en": "Cutthroat's Garb",
        "fr": "Tenue d'assassin"
    },
    "Sadist Garb": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/6744d2d486/BodyDexInt2C.png",
        "en": "Sadist Garb",
        "fr": "Tenue sadique"
    },
    "Ironscale Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyRGV4MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0bb5dd1e50/GlovesStrDex2.png",
        "en": "Ironscale Gauntlets",
        "fr": "Gantelets en écailles d'hydre"
    },
    "Jewelled Foil": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjciLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/97d714e903/Rapier7.png",
        "en": "Jewelled Foil",
        "fr": "Fleuret sophistiqué"
    },
    "Poignard": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/954af836f7/Dagger4.png",
        "en": "Poignard",
        "fr": "Stylet"
    },
    "Archon Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/92beb951d5/ShieldStrInt5.png",
        "en": "Archon Kite Shield",
        "fr": "Écu angélique"
    },
    "Onyx Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ3IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/58942b1ab3/Amulet7.png",
        "en": "Onyx Amulet",
        "fr": "Amulette d'onyx"
    },
    "Gold Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/2164e44179/Ring4.png",
        "en": "Gold Ring",
        "fr": "Anneau en or"
    },
    "Harmonic Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4bf20f79d1/ShieldInt5.png",
        "en": "Harmonic Spirit Shield",
        "fr": "Bouclier spirituel harmonique"
    },
    "Commander's Brigandine": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/60a6d7b58c/BodyStrDex2C.png",
        "en": "Commander's Brigandine",
        "fr": "Brigandine de commandant"
    },
    "Chainmail Tunic": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MkEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9f12486d42/BodyStrInt2A.png",
        "en": "Chainmail Tunic",
        "fr": "Broigne"
    },
    "Mosaic Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/23fbb47426/ShieldStrInt3.png",
        "en": "Mosaic Kite Shield",
        "fr": "Écu fortifié"
    },
    "Blood Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/35e149f5cf/scepter6.png",
        "en": "Blood Sceptre",
        "fr": "Sceptre vaal"
    },
    "Glorious Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyM0MiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/09903268a5/BodyStr3C.png",
        "en": "Glorious Plate",
        "fr": "Cuirasse seigneuriale"
    },
    "Crusader Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e75ade3184/BootsStrInt3.png",
        "en": "Crusader Boots",
        "fr": "Bottes de soldat"
    },
    "Profane Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNyIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/84ced52bef/Wand7.png",
        "en": "Profane Wand",
        "fr": "Baguette profane"
    },
    "Heathen Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNyIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/84ced52bef/Wand7.png",
        "en": "Heathen Wand",
        "fr": "Baguette profane"
    },
    "Arena Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/429eee131d/BodyStr2C.png",
        "en": "Arena Plate",
        "fr": "Cuirasse d'arène"
    },
    "Ornate Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d69254d0a6/TwoHandSword6.png",
        "en": "Ornate Sword",
        "fr": "Épée ornée"
    },
    "Ivory Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f0b78ea97c/ShieldInt3.png",
        "en": "Ivory Spirit Shield",
        "fr": "Bouclier spirituel en os"
    },
    "Battery Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVpc3RTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/5e852184f5/HeistStaff.png",
        "en": "Battery Staff",
        "fr": "Bâton dynamo"
    },
    "Pagan Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNyIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/84ced52bef/Wand7.png",
        "en": "Pagan Wand",
        "fr": "Baguette profane"
    },
    "Stealth Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f2e9a30d4a/BootsDex3.png",
        "en": "Stealth Boots",
        "fr": "Bottes en peau de requin"
    },
    "Fleshripper": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlOCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ba1d6734bb/TwoHandAxe8.png",
        "en": "Fleshripper",
        "fr": "Déchiqueteuse"
    },
    "Steel Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQWRhbWFudGluZVJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/04d7eaa12e/AdamantineRing.png",
        "en": "Steel Ring",
        "fr": "Anneau d'acier"
    },
    "Cardinal Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/f50adf0569/ShieldStrDex4.png",
        "en": "Cardinal Round Shield",
        "fr": "Clipeus cardinal"
    },
    "Grove Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/0fcc51afcd/Bow2.png",
        "en": "Grove Bow",
        "fr": "Arc du bocage"
    },
    "Tiger's Paw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0a98c635d3/Claw4.png",
        "en": "Tiger's Paw",
        "fr": "Patte de tigre"
    },
    "Tribal Circlet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldEludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/ce784f5b72/HelmetInt4.png",
        "en": "Tribal Circlet",
        "fr": "Diadème tribal"
    },
    "Sallet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/0dc199afb2/HelmetStrDex2.png",
        "en": "Sallet",
        "fr": "Casque salade"
    },
    "War Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/9cdefe9de4/OneHandAxe5.png",
        "en": "War Axe",
        "fr": "Hache de guerre"
    },
    "Flaying Knife": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjIiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/c2c0a06eec/Dagger2.png",
        "en": "Flaying Knife",
        "fr": "Couteau à écorcher"
    },
    "Crude Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/50dd0fd6ac/Bow1.png",
        "en": "Crude Bow",
        "fr": "Arc sommaire"
    },
    "Bronze Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyMyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/f5896830bf/GlovesStr3.png",
        "en": "Bronze Gauntlets",
        "fr": "Gantelets antiques"
    },
    "Jasper Chopper": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlMiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/bc8072f8c3/TwoHandAxe2.png",
        "en": "Jasper Chopper",
        "fr": "Hachoir en jaspe"
    },
    "Gladiator Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0cjUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/38bfc94781/HelmetStr5.png",
        "en": "Gladiator Helmet",
        "fr": "Heaume de gladiateur"
    },
    "Siege Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0cjciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/2844841911/HelmetStr7.png",
        "en": "Siege Helmet",
        "fr": "Heaume de siège"
    },
    "Deerskin Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/445d038f1d/GlovesDex3.png",
        "en": "Deerskin Gloves",
        "fr": "Gants de furtivité"
    },
    "Dragon Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U5IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f2a493ef7a/OneHandMace9.png",
        "en": "Dragon Mace",
        "fr": "Masse du béhémoth"
    },
    "Elegant Ringmail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/3247afb396/BodyStrInt1C.png",
        "en": "Elegant Ringmail",
        "fr": "Cotte de mailles intégrale"
    },
    "Noble Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/e2c34a0fb2/TwoHandAxe6.png",
        "en": "Noble Axe",
        "fr": "Hache à dorures"
    },
    "Gilded Sallet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e013d5e90a/HelmetStrDex4.png",
        "en": "Gilded Sallet",
        "fr": "Salade à dorures"
    },
    "Exquisite Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDgiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/decb6a0e86/TwoHandSword8.png",
        "en": "Exquisite Blade",
        "fr": "Lame exquise"
    },
    "Battered Foil": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjMiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/11f4a8b0d0/Rapier3.png",
        "en": "Battered Foil",
        "fr": "Fleuret usé"
    },
    "Bone Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/6642f8922a/Bow6.png",
        "en": "Bone Bow",
        "fr": "Arc en ivoire"
    },
    "Mahogany Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d95a5bfcf0/ShieldStr4.png",
        "en": "Mahogany Tower Shield",
        "fr": "Pavois en acajou"
    },
    "Elegant Foil": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjciLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/97d714e903/Rapier7.png",
        "en": "Elegant Foil",
        "fr": "Fleuret sophistiqué"
    },
    "Field Lamellar": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyNEEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/7e1c29aacf/BodyStr4A.png",
        "en": "Field Lamellar",
        "fr": "Armure lamellaire de guerre"
    },
    "Thief's Garb": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8f1d1cfaa9/BodyDex2C.png",
        "en": "Thief's Garb",
        "fr": "Tenue d'assassin"
    },
    "Strapped Mitts": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4SW50MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/e18b986979/GlovesDexInt2.png",
        "en": "Strapped Mitts",
        "fr": "Paumelles d'assassin"
    },
    "Gnarled Branch": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmYxIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/c4f884eb64/Staff1.png",
        "en": "Gnarled Branch",
        "fr": "Branche noueuse"
    },
    "Driftwood Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kMSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/899dabeaf1/Wand1.png",
        "en": "Driftwood Wand",
        "fr": "Baguette en bois flotté"
    },
    "Bronze Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyMyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/366212755a/scepter3.png",
        "en": "Bronze Sceptre",
        "fr": "Sekhem du tyran"
    },
    "Primitive Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmYyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/69ff746d86/Staff2.png",
        "en": "Primitive Staff",
        "fr": "Bâton primitif"
    },
    "Simple Robe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/7c925b445f/BodyInt1A.png",
        "en": "Simple Robe",
        "fr": "Toge simple"
    },
    "Two-Handed Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/294bd80312/TwoHandSword4.png",
        "en": "Two-Handed Sword",
        "fr": "Épée à deux mains"
    },
    "Rusted Spike": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjEiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/feb0e7f8d8/Rapier1.png",
        "en": "Rusted Spike",
        "fr": "Pic rouillé"
    },
    "Royal Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY2IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5e3de6f391/Staff6.png",
        "en": "Royal Staff",
        "fr": "Bâton impérial"
    },
    "Timeless Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RpbWVsZXNzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/2cc52f22d7/Timeless.png",
        "en": "Timeless Jewel",
        "fr": "Joyau intemporel"
    },
    "Composite Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d7cd8910cc/Bow4.png",
        "en": "Composite Bow",
        "fr": "Arc composite"
    },
    "Decurve Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/c064c479fa/Bow3.png",
        "en": "Decurve Bow",
        "fr": "Arc courbe"
    },
    "Spike-Point Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJTcGlrZS1Qb2ludCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e420070f35/QuiverSpike-Point.png",
        "en": "Spike-Point Arrow Quiver",
        "fr": "Carquois de flèches aiguisées"
    },
    "Pecoraro": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjQiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/dc28604809/Rapier4.png",
        "en": "Pecoraro",
        "fr": "Rapière à panier"
    },
    "Headsman Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/24ac93d9cd/TwoHandAxe4.png",
        "en": "Headsman Axe",
        "fr": "Hache de bourreau"
    },
    "Demon's Horn": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kMiIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/896948eee2/Wand2.png",
        "en": "Demon's Horn",
        "fr": "Corne de démon"
    },
    "Grinning Fetish": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyMiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e3e72321e0/scepter2.png",
        "en": "Grinning Fetish",
        "fr": "Sceptre karui"
    },
    "Reflex Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzkiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/aa9bf2b0d1/Bow9.png",
        "en": "Reflex Bow",
        "fr": "Arc de réflexe"
    },
    "Fluted Bascinet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/cc388acb00/HelmetStrDex8.png",
        "en": "Fluted Bascinet",
        "fr": "Bassinet à cannelures"
    },
    "Vaal Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ae1fb6dddd/Claw6.png",
        "en": "Vaal Claw",
        "fr": "Griffe vaal"
    },
    "Crystal Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/b505ad92e7/Wand4.png",
        "en": "Crystal Wand",
        "fr": "Baguette en cristal"
    },
    "Ranger Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d7cd8910cc/Bow4.png",
        "en": "Ranger Bow",
        "fr": "Arc composite"
    },
    "Ezomyte Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY0IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/85c22bd16b/Staff4.png",
        "en": "Ezomyte Staff",
        "fr": "Bâton ézomyte"
    },
    "Vile Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY3IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/c1ded974d5/Staff7.png",
        "en": "Vile Staff",
        "fr": "Bâton ignoble"
    },
    "Wrapped Mitts": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4SW50MSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/983aa9c9fc/GlovesDexInt1.png",
        "en": "Wrapped Mitts",
        "fr": "Paumelles enveloppées"
    },
    "Golden Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/445c130e44/HelmetDexInt5.png",
        "en": "Golden Mask",
        "fr": "not found"
    },
    "Plated Greaves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0cjMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/56efa25c50/BootsStr3.png",
        "en": "Plated Greaves",
        "fr": "Jambières vaal"
    },
    "Ivory Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/6642f8922a/Bow6.png",
        "en": "Ivory Bow",
        "fr": "Arc en ivoire"
    },
    "Vanguard Belt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDciLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/98bc736db6/Belt7.png",
        "en": "Vanguard Belt",
        "fr": "Ceinture de l'avant-garde"
    },
    "Spectral Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/cba6615b1a/TwoHandSword7.png",
        "en": "Spectral Sword",
        "fr": "Épée spectrale"
    },
    "Skean": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjciLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/61e8f27cc5/Dagger7.png",
        "en": "Skean",
        "fr": "Skiane impérial"
    },
    "Bone Circlet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldEludDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/6edb78065a/HelmetInt5.png",
        "en": "Bone Circlet",
        "fr": "Diadème en os"
    },
    "Burnished Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/53a98ddeac/ShieldDexInt4.png",
        "en": "Burnished Spiked Shield",
        "fr": "Rondache polie"
    },
    "Lithe Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDgiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/decb6a0e86/TwoHandSword8.png",
        "en": "Lithe Blade",
        "fr": "Lame exquise"
    },
    "Full Chainmail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5a1804c81b/BodyStrInt2C.png",
        "en": "Full Chainmail",
        "fr": "Haubert en chaînes"
    },
    "Assassin's Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleEludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/0c80b843d0/BootsDexInt3.png",
        "en": "Assassin's Boots",
        "fr": "Bottes à boucles"
    },
    "Plated Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyMiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/557280e2c8/GlovesStr2.png",
        "en": "Plated Gauntlets",
        "fr": "Gantelets de plates"
    },
    "Lacewood Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/99b47eb1fa/ShieldInt2.png",
        "en": "Lacewood Spirit Shield",
        "fr": "Bouclier spirituel en noyer"
    },
    "Silk Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/abe163b992/GlovesInt3.png",
        "en": "Silk Gloves",
        "fr": "Gants en soie"
    },
    "Ringmail Coat": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/61293d71af/BodyStrInt1B.png",
        "en": "Ringmail Coat",
        "fr": "Armure en maille blindée"
    },
    "Full Scale Armour": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/769e4eedeb/BodyStrDex1C.png",
        "en": "Full Scale Armour",
        "fr": "Armure en écailles de dragon"
    },
    "Torture Cage": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldEludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/bdf765283d/HelmetInt3.png",
        "en": "Torture Cage",
        "fr": "Cage de torture"
    },
    "Vaal Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDEwIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/62018602df/HelmetDexInt10.png",
        "en": "Vaal Mask",
        "fr": "Masque vaal"
    },
    "Strapped Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleEludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/2f86a773a5/BootsDexInt2.png",
        "en": "Strapped Boots",
        "fr": "Bottes à sangles"
    },
    "Cone Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0cjIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/fdb5370ecb/HelmetStr2.png",
        "en": "Cone Helmet",
        "fr": "Casque conique"
    },
    "Military Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY0IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/85c22bd16b/Staff4.png",
        "en": "Military Staff",
        "fr": "Bâton ézomyte"
    },
    "Bronze Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/ee43ed9cee/ShieldStr5.png",
        "en": "Bronze Tower Shield",
        "fr": "Pavois en cuivre"
    },
    "Copper Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/ca9e30f668/BodyStr1B.png",
        "en": "Copper Plate",
        "fr": "Cuirasse en cuivre"
    },
    "Moon Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY4IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/edbdbaa9ba/Staff8.png",
        "en": "Moon Staff",
        "fr": "Bâton lunaire"
    },
    "Full Leather": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/47360dcc4a/BodyDex1C.png",
        "en": "Full Leather",
        "fr": "Tunique glorieuse en cuir"
    },
    "Great Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/b4ec7dbe33/HelmetStrInt3.png",
        "en": "Great Helmet",
        "fr": "Grand heaume"
    },
    "Eelskin Tunic": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/57409a1844/BodyDex1B.png",
        "en": "Eelskin Tunic",
        "fr": "Tunique en peau de daim"
    },
    "War Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5a38d58259/ShieldDex5.png",
        "en": "War Buckler",
        "fr": "Bocle de combat"
    },
    "Ornate Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3f3c95a49a/ShieldDexInt5.png",
        "en": "Ornate Spiked Shield",
        "fr": "Rondache suprême"
    },
    "Alloyed Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/36d311e1dc/ShieldDexInt3.png",
        "en": "Alloyed Spiked Shield",
        "fr": "Rondache en alliage"
    },
    "Grappler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDkiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/d11450350f/OneHandSword9.png",
        "en": "Grappler",
        "fr": "Crochet à tête de tigre"
    },
    "Sacrificial Garb": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TYWNyaWZpY2lhbEdhcmIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/fa818f4ae3/SacrificialGarb.png",
        "en": "Sacrificial Garb",
        "fr": "Tenue sacrificielle"
    },
    "Glass Shank": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjEiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/aeb581e270/Dagger1.png",
        "en": "Glass Shank",
        "fr": "Surin en verre"
    },
    "Reciprocation Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVpc3RTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/5e852184f5/HeistStaff.png",
        "en": "Reciprocation Staff",
        "fr": "Bâton dynamo"
    },
    "Transformer Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVpc3RTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/5e852184f5/HeistStaff.png",
        "en": "Transformer Staff",
        "fr": "Bâton dynamo"
    },
    "Rawhide Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8d8c4e161f/ShieldStr3.png",
        "en": "Rawhide Tower Shield",
        "fr": "Pavois en cuir brut"
    },
    "Topaz Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/6f90cd3c4b/Ring5.png",
        "en": "Topaz Ring",
        "fr": "Bague de topaze"
    },
    "Rustic Sash": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDEiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/6b67d971e8/Belt1.png",
        "en": "Rustic Sash",
        "fr": "Ceinture rustique"
    },
    "Studded Belt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDYiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/7ae25523b2/Belt6.png",
        "en": "Studded Belt",
        "fr": "Ceinture cloutée"
    },
    "Citrine Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9DaXRyaW5lQW11bGV0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/95804f838b/CitrineAmulet.png",
        "en": "Citrine Amulet",
        "fr": "Amulette de citrine"
    },
    "Heavy Belt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDUiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/a513a7e6b4/Belt5.png",
        "en": "Heavy Belt",
        "fr": "Ceinture lourde"
    },
    "Cloth Belt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDQiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/fce1729448/Belt4.png",
        "en": "Cloth Belt",
        "fr": "Ceinture en tissu"
    },
    "Chain Belt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDIiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/3a6ece4e40/Belt2.png",
        "en": "Chain Belt",
        "fr": "Ceinture en chaînes"
    },
    "Citadel Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/c064c479fa/Bow3.png",
        "en": "Citadel Bow",
        "fr": "Arc courbe"
    },
    "Vaal Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyMyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/f5896830bf/GlovesStr3.png",
        "en": "Vaal Gauntlets",
        "fr": "Gantelets antiques"
    },
    "Winter Crown": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludFIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/9da7af13c1/HelmetDexIntR.png",
        "en": "Winter Crown",
        "fr": "Couronne du blizzard"
    },
    "Mind Cage": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldEludDEwIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/79abe1a202/HelmetInt10.png",
        "en": "Mind Cage",
        "fr": "Cage spirituelle"
    },
    "Seaglass Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9DcmVzY2VudEFtdWxldCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ef6f218ca4/CrescentAmulet.png",
        "en": "Seaglass Amulet",
        "fr": "not found"
    },
    "Girded Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d883ad1ca2/ShieldStr6.png",
        "en": "Girded Tower Shield",
        "fr": "Pavois colossal"
    },
    "Zealot Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckludDYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/cff363f9cb/HelmetStrInt6.png",
        "en": "Zealot Helmet",
        "fr": "Heaume de zélote"
    },
    "Hellion's Paw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0a98c635d3/Claw4.png",
        "en": "Hellion's Paw",
        "fr": "Patte de tigre"
    },
    "Pernach": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U2IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/a2a18837d4/OneHandMace6.png",
        "en": "Pernach",
        "fr": "Masse à brides"
    },
    "Platinum Kris": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjYiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/5dcee0019c/Dagger6.png",
        "en": "Platinum Kris",
        "fr": "Kriss en or"
    },
    "Vaal Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/60c6c83831/ShieldDex4.png",
        "en": "Vaal Buckler",
        "fr": "Bocle vaal"
    },
    "Savant's Robe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/906a100c16/BodyInt1B.png",
        "en": "Savant's Robe",
        "fr": "Toge de savant"
    },
    "Exquisite Leather": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/47360dcc4a/BodyDex1C.png",
        "en": "Exquisite Leather",
        "fr": "Tunique glorieuse en cuir"
    },
    "Spidersilk Robe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8b200fbbb5/BodyInt2C.png",
        "en": "Spidersilk Robe",
        "fr": "Toge en soie d'araignée"
    },
    "Golden Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/ca9e30f668/BodyStr1B.png",
        "en": "Golden Plate",
        "fr": "Cuirasse en cuivre"
    },
    "Battle Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c62bd1159e/BodyStr2B.png",
        "en": "Battle Plate",
        "fr": "Cuirasse de guerre"
    },
    "Destroyer Regalia": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4SW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e6eb42b23a/BodyStrDexInt1C.png",
        "en": "Destroyer Regalia",
        "fr": "Apparat vaal"
    },
    "Conquest Chainmail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2cea5723dd/BodyStrInt2B.png",
        "en": "Conquest Chainmail",
        "fr": "Pourpoint en maille"
    },
    "Widowsilk Robe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8b200fbbb5/BodyInt2C.png",
        "en": "Widowsilk Robe",
        "fr": "Toge en soie d'araignée"
    },
    "Gemini Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3OSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/84eab7e6ba/Claw9.png",
        "en": "Gemini Claw",
        "fr": "Griffe géminée"
    },
    "Ursine Pelt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleDciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e2b3ccec11/HelmetDex7.png",
        "en": "Ursine Pelt",
        "fr": "Peau d'ours"
    },
    "Steel Circlet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldEludDciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/52f5eb243a/HelmetInt7.png",
        "en": "Steel Circlet",
        "fr": "Diadème en acier"
    },
    "Fencer Helm": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/07fb25d634/HelmetStrDex6.png",
        "en": "Fencer Helm",
        "fr": "Heaume d'escrimeur"
    },
    "Saintly Chainmail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50M0MiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/900b4f2c03/BodyStrInt3C.png",
        "en": "Saintly Chainmail",
        "fr": "Armure sainte en maille"
    },
    "Wyrmscale Doublet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/d9b2da2bce/BodyStrDex1B.png",
        "en": "Wyrmscale Doublet",
        "fr": "Pourpoint en écailles de vouivre"
    },
    "Feathered Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9GZWF0aGVyZWRBcnJvd1F1aXZlciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/76aab0d0b0/FeatheredArrowQuiver.png",
        "en": "Feathered Arrow Quiver",
        "fr": "not found"
    },
    "Bone Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQm9uZVJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/4ed569fff9/BoneRing.png",
        "en": "Bone Ring",
        "fr": "not found"
    },
    "Nightwind Slippers": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SaXR1YWxJbnRCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/dfe31cc493/RitualIntBoots.png",
        "en": "Nightwind Slippers",
        "fr": "Souliers de cherche-rêve"
    },
    "Ezomyte Dagger": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/3431875aaf/Dagger5.png",
        "en": "Ezomyte Dagger",
        "fr": "Dague ézomyte"
    },
    "Heavy Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJCbHVudCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/435539df0f/QuiverBlunt.png",
        "en": "Heavy Arrow Quiver",
        "fr": "Carquois de flèches contondantes"
    },
    "Apex Cleaver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9IZWlzdFR3b0hhbmRBeGUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/4aef1881cc/HeistTwoHandAxe.png",
        "en": "Apex Cleaver",
        "fr": "Hachoir affûté"
    },
    "Flashfire Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlaXN0UnVuZURhZ2dlciIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/1760d17051/HeistRuneDagger.png",
        "en": "Flashfire Blade",
        "fr": "Lame infernale"
    },
    "Blasting Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0hlaXN0VHdvSGFuZFN3b3JkIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/9757ea88b2/HeistTwoHandSword.png",
        "en": "Blasting Blade",
        "fr": "Lame de bannissement"
    },
    "Rebuking Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0hlaXN0VHdvSGFuZFN3b3JkIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/9757ea88b2/HeistTwoHandSword.png",
        "en": "Rebuking Blade",
        "fr": "Lame de bannissement"
    },
    "Shadow Fangs": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9IZWlzdENsYXciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/7ebe8140fa/HeistClaw.png",
        "en": "Shadow Fangs",
        "fr": "Crocs pernicieux"
    },
    "Crusader Chainmail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2cea5723dd/BodyStrInt2B.png",
        "en": "Crusader Chainmail",
        "fr": "Pourpoint en maille"
    },
    "Flickerflame Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlaXN0UnVuZURhZ2dlciIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/1760d17051/HeistRuneDagger.png",
        "en": "Flickerflame Blade",
        "fr": "Lame infernale"
    },
    "Maraketh Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzkiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/aa9bf2b0d1/Bow9.png",
        "en": "Maraketh Bow",
        "fr": "Arc de réflexe"
    },
    "Twin Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3OSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/84eab7e6ba/Claw9.png",
        "en": "Twin Claw",
        "fr": "Griffe géminée"
    },
    "Thorn Rapier": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjgiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/1f11ed5e87/Rapier8.png",
        "en": "Thorn Rapier",
        "fr": "Rapière de l'apex"
    },
    "Lacquered Garb": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/6744d2d486/BodyDexInt2C.png",
        "en": "Lacquered Garb",
        "fr": "Tenue sadique"
    },
    "Eye Gouger": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/1d5586ea56/Claw5.png",
        "en": "Eye Gouger",
        "fr": "Perce-yeux"
    },
    "Tarnished Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/2fcc8b522c/ShieldInt4.png",
        "en": "Tarnished Spirit Shield",
        "fr": "Bouclier spirituel terni"
    },
    "Awl": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ac6e7ab61d/Claw3.png",
        "en": "Awl",
        "fr": "Poinçon"
    },
    "Samite Slippers": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0ludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/036cf97e61/BootsInt3.png",
        "en": "Samite Slippers",
        "fr": "Souliers d'arcaniste"
    },
    "Close Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0cjQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/0a862ec4b2/HelmetStr4.png",
        "en": "Close Helmet",
        "fr": "Heaume fermé"
    },
    "Sharktooth Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJTaGFya3Rvb3RoIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/da7b4cd60a/QuiverSharktooth.png",
        "en": "Sharktooth Arrow Quiver",
        "fr": "Carquois de flèches en dent de requin"
    },
    "Etched Hatchet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlOSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/8f1da4998f/OneHandAxe9.png",
        "en": "Etched Hatchet",
        "fr": "Hache gravée"
    },
    "Mechalarm Belt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSGVpc3RCZWx0MiIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/21286700c8/HeistBelt2.png",
        "en": "Mechalarm Belt",
        "fr": "Ceinture méca-alarme"
    },
    "Death Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzgiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8d079c60ed/Bow8.png",
        "en": "Death Bow",
        "fr": "Arc de la mort"
    },
    "Judgement Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY3IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/c1ded974d5/Staff7.png",
        "en": "Judgement Staff",
        "fr": "Bâton ignoble"
    },
    "Broad Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/9cdefe9de4/OneHandAxe5.png",
        "en": "Broad Axe",
        "fr": "Hache de guerre"
    },
    "Runic Hatchet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlOSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/8f1da4998f/OneHandAxe9.png",
        "en": "Runic Hatchet",
        "fr": "Hache gravée"
    },
    "Hammered Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/60c6c83831/ShieldDex4.png",
        "en": "Hammered Buckler",
        "fr": "Bocle vaal"
    },
    "Quartz Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/b505ad92e7/Wand4.png",
        "en": "Quartz Wand",
        "fr": "Baguette en cristal"
    },
    "Maelström Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY1IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/53f1a6b438/Staff5.png",
        "en": "Maelström Staff",
        "fr": "Bâton du maelström"
    },
    "Coiled Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY1IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/53f1a6b438/Staff5.png",
        "en": "Coiled Staff",
        "fr": "Bâton du maelström"
    },
    "Deicide Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDExIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/ff51fc2e8c/HelmetDexInt11.png",
        "en": "Deicide Mask",
        "fr": "Masque de déicide"
    },
    "Prismatic Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL01hc3RlcnkiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/eb1cf5699e/Mastery.png",
        "en": "Prismatic Jewel",
        "fr": "Joyau prismatique"
    },
    "Geodesic Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvSGVpc3RSaW5nMiIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ef30e9565e/HeistRing2.png",
        "en": "Geodesic Ring",
        "fr": "Bague géodésique"
    },
    "Teak Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9cccab30a2/ShieldStrDex2.png",
        "en": "Teak Round Shield",
        "fr": "Clipeus en teck"
    },
    "Painted Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/80f9f1abea/ShieldStr7.png",
        "en": "Painted Tower Shield",
        "fr": "Pavois du pinacle"
    },
    "Iron Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY0IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/85c22bd16b/Staff4.png",
        "en": "Iron Staff",
        "fr": "Bâton ézomyte"
    },
    "Ancient Greaves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0cjMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/56efa25c50/BootsStr3.png",
        "en": "Ancient Greaves",
        "fr": "Jambières vaal"
    },
    "Curved Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDgiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/decb6a0e86/TwoHandSword8.png",
        "en": "Curved Blade",
        "fr": "Lame exquise"
    },
    "Two-Point Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJUd28tUG9pbnQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5a4772c3db/QuiverTwo-Point.png",
        "en": "Two-Point Arrow Quiver",
        "fr": "Carquois de flèches à pointe double"
    },
    "Gilded Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/ad59b083a6/ShieldDex6.png",
        "en": "Gilded Buckler",
        "fr": "Bocle impérial"
    },
    "Baselard": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/936e00e3e6/OneHandSword4.png",
        "en": "Baselard",
        "fr": "Baselarde"
    },
    "Variscite Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDIiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/606dae9ce9/OneHandSword2.png",
        "en": "Variscite Blade",
        "fr": "Lame en variscite"
    },
    "Antique Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyMiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/557280e2c8/GlovesStr2.png",
        "en": "Antique Gauntlets",
        "fr": "Gantelets de plates"
    },
    "Cedar Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d95a5bfcf0/ShieldStr4.png",
        "en": "Cedar Tower Shield",
        "fr": "Pavois en acajou"
    },
    "Sleek Coat": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/360c5ce7d4/BodyDexInt2B.png",
        "en": "Sleek Coat",
        "fr": "Manteau lubrifié"
    },
    "Short Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/0fcc51afcd/Bow2.png",
        "en": "Short Bow",
        "fr": "Arc du bocage"
    },
    "Studded Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5839b7b6f4/ShieldStrDex3.png",
        "en": "Studded Round Shield",
        "fr": "Clipeus clouté"
    },
    "Ringmail Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RySW50MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/f09ae395f5/GlovesStrInt2.png",
        "en": "Ringmail Gloves",
        "fr": "Gants en maille annelée"
    },
    "Decorative Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/5bbf95c3b4/OneHandAxe7.png",
        "en": "Decorative Axe",
        "fr": "Hache royale"
    },
    "Dusk Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDgiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/406f7aec97/OneHandSword8.png",
        "en": "Dusk Blade",
        "fr": "Lame du couchant"
    },
    "Yew Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/99b47eb1fa/ShieldInt2.png",
        "en": "Yew Spirit Shield",
        "fr": "Bouclier spirituel en noyer"
    },
    "Saint's Hauberk": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5a1804c81b/BodyStrInt2C.png",
        "en": "Saint's Hauberk",
        "fr": "Haubert en chaînes"
    },
    "Soldier's Brigandine": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/60a6d7b58c/BodyStrDex2C.png",
        "en": "Soldier's Brigandine",
        "fr": "Brigandine de commandant"
    },
    "Nightmare Bascinet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDEwIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/4c9ea10e7c/HelmetStrDex10.png",
        "en": "Nightmare Bascinet",
        "fr": "Bassinet cauchemardesque"
    },
    "Tempered Foil": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjMiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/11f4a8b0d0/Rapier3.png",
        "en": "Tempered Foil",
        "fr": "Fleuret usé"
    },
    "Harpy Rapier": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjgiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/1f11ed5e87/Rapier8.png",
        "en": "Harpy Rapier",
        "fr": "Rapière de l'apex"
    },
    "Marble Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9NYXJibGVBbXVsZXQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/3dee478d8d/MarbleAmulet.png",
        "en": "Marble Amulet",
        "fr": "Amulette de marbre"
    },
    "Wolf Pelt": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/549bc86dd9/HelmetDex4.png",
        "en": "Wolf Pelt",
        "fr": "Peau de loup"
    },
    "Ringmail Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/742e5a15d7/BootsStrInt2.png",
        "en": "Ringmail Boots",
        "fr": "Bottes de légion"
    },
    "Bone Armour": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50NEMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/99efce2041/BodyDexInt4C.png",
        "en": "Bone Armour",
        "fr": "Armure de la crypte"
    },
    "Loricated Ringmail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/61293d71af/BodyStrInt1B.png",
        "en": "Loricated Ringmail",
        "fr": "Armure en maille blindée"
    },
    "Magistrate Crown": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckludDgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/cf727943d2/HelmetStrInt8.png",
        "en": "Magistrate Crown",
        "fr": "Couronne de magistrat"
    },
    "Reinforced Greaves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0cjQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/82bedfd1e0/BootsStr4.png",
        "en": "Reinforced Greaves",
        "fr": "Jambières de goliath"
    },
    "Sparkling Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/9efad90cdb/Claw7.png",
        "en": "Sparkling Claw",
        "fr": "Griffe impériale"
    },
    "Slaughter Knife": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjMiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/fbc18a1b4f/Dagger3.png",
        "en": "Slaughter Knife",
        "fr": "Couteau à égorger"
    },
    "Sekhem": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyMyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/366212755a/scepter3.png",
        "en": "Sekhem",
        "fr": "Sekhem du tyran"
    },
    "Scarlet Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/f50adf0569/ShieldStrDex4.png",
        "en": "Scarlet Round Shield",
        "fr": "Clipeus cardinal"
    },
    "Rawhide Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4MSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/9d9390ed4a/GlovesDex1.png",
        "en": "Rawhide Gloves",
        "fr": "Gants en cuir brut"
    },
    "Goat's Horn": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kMiIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/896948eee2/Wand2.png",
        "en": "Goat's Horn",
        "fr": "Corne de démon"
    },
    "Footman Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/28f44a7a0c/TwoHandSword3.png",
        "en": "Footman Sword",
        "fr": "Épée bâtarde"
    },
    "Rusted Coif": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckludDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/9987324e35/HelmetStrInt1.png",
        "en": "Rusted Coif",
        "fr": "Coiffe rouillée"
    },
    "Broad Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/936e00e3e6/OneHandSword4.png",
        "en": "Broad Sword",
        "fr": "Baselarde"
    },
    "Eelskin Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/37d9d4d590/BootsDex2.png",
        "en": "Eelskin Boots",
        "fr": "Bottes en peau d'anguille"
    },
    "Imperial Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/1e6a3da9aa/Bow7.png",
        "en": "Imperial Bow",
        "fr": "Arc impérial"
    },
    "Horned Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyOSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/151820601e/scepter9.png",
        "en": "Horned Sceptre",
        "fr": "Sceptre de sambar"
    },
    "Scarlet Raiment": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/95329b265f/BodyDexInt1C.png",
        "en": "Scarlet Raiment",
        "fr": "Vêtement de sang"
    },
    "Vaal Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/2fcc8b522c/ShieldInt4.png",
        "en": "Vaal Spirit Shield",
        "fr": "Bouclier spirituel terni"
    },
    "Cerulean Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQ2VydWxlYW5SaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/c5fe3e533c/CeruleanRing.png",
        "en": "Cerulean Ring",
        "fr": "Bague céruléenne"
    },
    "Ornate Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U3IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/84402507d1/OneHandMace7.png",
        "en": "Ornate Mace",
        "fr": "Masse ornée"
    },
    "Hussar Brigandine": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/cd52e7b841/BodyStrDex2B.png",
        "en": "Hussar Brigandine",
        "fr": "Brigandine du désert"
    },
    "Raven Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/39565b89de/HelmetDexInt6.png",
        "en": "Raven Mask",
        "fr": "Masque de corbeau"
    },
    "Rotted Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/a6a71ad77b/ShieldStrDex1.png",
        "en": "Rotted Round Shield",
        "fr": "Clipeus pourri"
    },
    "Ezomyte Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/ee43ed9cee/ShieldStr5.png",
        "en": "Ezomyte Tower Shield",
        "fr": "Pavois en cuivre"
    },
    "Paua Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQxIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/aa977ebe43/Amulet1.png",
        "en": "Paua Amulet",
        "fr": "Amulette de paua"
    },
    "Coronal Leather": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4M0MiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e30de2c7a6/BodyDex3C.png",
        "en": "Coronal Leather",
        "fr": "Tunique zodiacale en cuir"
    },
    "Gladiator Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/429eee131d/BodyStr2C.png",
        "en": "Gladiator Plate",
        "fr": "Cuirasse d'arène"
    },
    "Sharkskin Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/445d038f1d/GlovesDex3.png",
        "en": "Sharkskin Gloves",
        "fr": "Gants de furtivité"
    },
    "Double Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/4b3fbfcd65/TwoHandAxe5.png",
        "en": "Double Axe",
        "fr": "undefined"
    },
    "Jagged Foil": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjUiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/ccce0178cc/Rapier5.png",
        "en": "Jagged Foil",
        "fr": "Fleuret spiralé"
    },
    "Strapped Leather": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4M0EiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e725e99b1b/BodyDex3A.png",
        "en": "Strapped Leather",
        "fr": "not found"
    },
    "Chain Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RySW50MSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/5d45f8da8f/GlovesStrInt1.png",
        "en": "Chain Gloves",
        "fr": "Gants en chaînes"
    },
    "Vaal Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/4b3fbfcd65/TwoHandAxe5.png",
        "en": "Vaal Axe",
        "fr": "undefined"
    },
    "Quarterstaff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmYzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/9bc79ef01c/Staff3.png",
        "en": "Quarterstaff",
        "fr": "Brin-d'estoc"
    },
    "Mesh Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e75ade3184/BootsStrInt3.png",
        "en": "Mesh Boots",
        "fr": "Bottes de soldat"
    },
    "Tiger Hook": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDkiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/d11450350f/OneHandSword9.png",
        "en": "Tiger Hook",
        "fr": "Crochet à tête de tigre"
    },
    "General's Brigandine": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/60a6d7b58c/BodyStrDex2C.png",
        "en": "General's Brigandine",
        "fr": "Brigandine de commandant"
    },
    "Steelwood Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzkiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/aa9bf2b0d1/Bow9.png",
        "en": "Steelwood Bow",
        "fr": "Arc de réflexe"
    },
    "Eagle Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3OCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/3cc3260177/Claw8.png",
        "en": "Eagle Claw",
        "fr": "Serre d'aigle"
    },
    "Dragoon Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjkiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/e409e11584/Rapier9.png",
        "en": "Dragoon Sword",
        "fr": "Épée de dragon"
    },
    "Serpentscale Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyRGV4MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0bb5dd1e50/GlovesStrDex2.png",
        "en": "Serpentscale Gauntlets",
        "fr": "Gantelets en écailles d'hydre"
    },
    "Iron Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/a56694476d/HelmetDexInt3.png",
        "en": "Iron Mask",
        "fr": "Masque en fer"
    },
    "Fire Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJGaXJlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/0537b8437d/QuiverFire.png",
        "en": "Fire Arrow Quiver",
        "fr": "Carquois de flèches enflammées"
    },
    "Ezomyte Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/294bd80312/TwoHandSword4.png",
        "en": "Ezomyte Blade",
        "fr": "Épée à deux mains"
    },
    "Ancestral Club": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2UyIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/75d926bb65/OneHandMace2.png",
        "en": "Ancestral Club",
        "fr": "Gourdin ancestral"
    },
    "Plague Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/1bcda70f31/HelmetDexInt2.png",
        "en": "Plague Mask",
        "fr": "Masque de peste"
    },
    "Darkwood Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyMiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e3e72321e0/scepter2.png",
        "en": "Darkwood Sceptre",
        "fr": "Sceptre karui"
    },
    "Solaris Circlet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldEludDkiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e5e3144056/HelmetInt9.png",
        "en": "Solaris Circlet",
        "fr": "Diadème de Solaris"
    },
    "Crimson Raiment": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/95329b265f/BodyDexInt1C.png",
        "en": "Crimson Raiment",
        "fr": "Vêtement de sang"
    },
    "Carnal Armour": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50NEMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/99efce2041/BodyDexInt4C.png",
        "en": "Carnal Armour",
        "fr": "Armure de la crypte"
    },
    "Regicide Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/03d255fadc/HelmetDexInt8.png",
        "en": "Regicide Mask",
        "fr": "Masque de régicide"
    },
    "Silken Hood": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleDgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5e6f2df960/HelmetDex8.png",
        "en": "Silken Hood",
        "fr": "Capuche en soie"
    },
    "Capricious Spiritblade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0hlaXN0T25lSGFuZFN3b3JkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/6b56c4c406/HeistOneHandSword.png",
        "en": "Capricious Spiritblade",
        "fr": "Lamesprit anarchique"
    },
    "Sinner Tricorne": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleDkiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f348f6138b/HelmetDex9.png",
        "en": "Sinner Tricorne",
        "fr": "Tricorne du pécheur"
    },
    "Visored Sallet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/12db09a4ce/HelmetStrDex3.png",
        "en": "Visored Sallet",
        "fr": "Salade à visière"
    },
    "Flanged Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U2IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/a2a18837d4/OneHandMace6.png",
        "en": "Flanged Mace",
        "fr": "Masse à brides"
    },
    "Courtesan Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjkiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/e409e11584/Rapier9.png",
        "en": "Courtesan Sword",
        "fr": "Épée de dragon"
    },
    "Waxed Garb": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/6744d2d486/BodyDexInt2C.png",
        "en": "Waxed Garb",
        "fr": "Tenue sadique"
    },
    "Sniper Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/2c90c93faf/Bow5.png",
        "en": "Sniper Bow",
        "fr": "Arc d'assassin"
    },
    "Omen Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNiIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/30763e0fe7/Wand6.png",
        "en": "Omen Wand",
        "fr": "Baguette de prophétie"
    },
    "Wool Shoes": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0ludDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/68affe41bc/BootsInt1.png",
        "en": "Wool Shoes",
        "fr": "Chaussures en laine"
    },
    "Coiled Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/a28035d7c4/Wand5.png",
        "en": "Coiled Wand",
        "fr": "Baguette de tornade"
    },
    "Soldier Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RySW50MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7adc65bac6/GlovesStrInt3.png",
        "en": "Soldier Gloves",
        "fr": "Gants de croisé"
    },
    "Spectral Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlOCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/1c9ff58159/OneHandAxe8.png",
        "en": "Spectral Axe",
        "fr": "Hache infernale"
    },
    "Wool Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50MSIsInciOjIsImgiOjIsInNjYWxlIjoxLCJzZWFyaW5nIjp0cnVlfV0/a96222cb9b/GlovesInt1.png",
        "en": "Wool Gloves",
        "fr": "not found"
    },
    "Blue Pearl Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9CbHVlUGVhcmxBbXVsZXQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e71aeafbd3/BluePearlAmulet.png",
        "en": "Blue Pearl Amulet",
        "fr": "Amulette à perle bleue"
    },
    "Stone Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlMSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/fd3d66a367/TwoHandAxe1.png",
        "en": "Stone Axe",
        "fr": "Hache en pierre"
    },
    "Capacity Rod": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVpc3RXYXJTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/c9454891da/HeistWarStaff.png",
        "en": "Capacity Rod",
        "fr": "Canne d'éventualité"
    },
    "Mirrored Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/53a98ddeac/ShieldDexInt4.png",
        "en": "Mirrored Spiked Shield",
        "fr": "Rondache polie"
    },
    "Elegant Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDciLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9ac21989c5/OneHandSword7.png",
        "en": "Elegant Sword",
        "fr": "Épée élégante"
    },
    "Jingling Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4bf20f79d1/ShieldInt5.png",
        "en": "Jingling Spirit Shield",
        "fr": "Bouclier spirituel harmonique"
    },
    "Nexus Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUml0dWFsSW50R2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/b698da54ed/RitualIntGloves.png",
        "en": "Nexus Gloves",
        "fr": "Gants du nexus"
    },
    "Headman's Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDIiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/fcaf050e0f/TwoHandSword2.png",
        "en": "Headman's Sword",
        "fr": "Épée de boucher"
    },
    "Lacquered Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/10a005f978/ShieldDex3.png",
        "en": "Lacquered Buckler",
        "fr": "Bocle laqué"
    },
    "Gouger": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ac6e7ab61d/Claw3.png",
        "en": "Gouger",
        "fr": "Poinçon"
    },
    "Paua Ring": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/4f08d18365/Ring3.png",
        "en": "Paua Ring",
        "fr": "Bague de paua"
    },
    "Ceremonial Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/5bbf95c3b4/OneHandAxe7.png",
        "en": "Ceremonial Axe",
        "fr": "Hache royale"
    },
    "Timber Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlMyIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/7d35a55caa/TwoHandAxe3.png",
        "en": "Timber Axe",
        "fr": "Fendeuse"
    },
    "Spiked Bundle": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/76037de1f6/ShieldDexInt1.png",
        "en": "Spiked Bundle",
        "fr": "Bouclier de fortune pointu"
    },
    "Secutor Helm": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/b609cfed8b/HelmetStrDex5.png",
        "en": "Secutor Helm",
        "fr": "Heaume de secutor"
    },
    "Zealot Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RySW50MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/f09ae395f5/GlovesStrInt2.png",
        "en": "Zealot Gloves",
        "fr": "Gants en maille annelée"
    },
    "Reaver Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/451ba2cadb/OneHandAxe4.png",
        "en": "Reaver Axe",
        "fr": "Hache de ravageur"
    },
    "Silk Slippers": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0ludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/036cf97e61/BootsInt3.png",
        "en": "Silk Slippers",
        "fr": "Souliers d'arcaniste"
    },
    "Butcher Knife": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjMiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/fbc18a1b4f/Dagger3.png",
        "en": "Butcher Knife",
        "fr": "Couteau à égorger"
    },
    "Chiming Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4bf20f79d1/ShieldInt5.png",
        "en": "Chiming Spirit Shield",
        "fr": "Bouclier spirituel harmonique"
    },
    "Stiletto": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/954af836f7/Dagger4.png",
        "en": "Stiletto",
        "fr": "Stylet"
    },
    "Engraved Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kMyIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/6322bd53f5/Wand3.png",
        "en": "Engraved Wand",
        "fr": "Baguette imprégnée"
    },
    "Enameled Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/10a005f978/ShieldDex3.png",
        "en": "Enameled Buckler",
        "fr": "Bocle laqué"
    },
    "Splintered Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjEiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/3c332a170f/ShieldStr1.png",
        "en": "Splintered Tower Shield",
        "fr": "Pavois fendu"
    },
    "Imp Dagger": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjgiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/e0bade03f8/Dagger8.png",
        "en": "Imp Dagger",
        "fr": "Dague de diablotin"
    },
    "Faun's Horn": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kMiIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/896948eee2/Wand2.png",
        "en": "Faun's Horn",
        "fr": "Corne de démon"
    },
    "Prehistoric Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ae1fb6dddd/Claw6.png",
        "en": "Prehistoric Claw",
        "fr": "Griffe vaal"
    },
    "Harbinger Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzgiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8d079c60ed/Bow8.png",
        "en": "Harbinger Bow",
        "fr": "Arc de la mort"
    },
    "Serrated Foil": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjUiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/ccce0178cc/Rapier5.png",
        "en": "Serrated Foil",
        "fr": "Fleuret spiralé"
    },
    "Mage's Vestment": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9ea39de510/BodyInt1C.png",
        "en": "Mage's Vestment",
        "fr": "Habit d'occultiste"
    },
    "Spiraled Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/a28035d7c4/Wand5.png",
        "en": "Spiraled Wand",
        "fr": "Baguette de tornade"
    },
    "Spiked Club": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2UzIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/a3a1dace2a/OneHandMace3.png",
        "en": "Spiked Club",
        "fr": "Gourdin barbelé"
    },
    "Wyrmscale Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyRGV4MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/01471b423e/GlovesStrDex3.png",
        "en": "Wyrmscale Gauntlets",
        "fr": "Gantelets en écailles de dragon"
    },
    "Spiked Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5839b7b6f4/ShieldStrDex3.png",
        "en": "Spiked Round Shield",
        "fr": "Clipeus clouté"
    },
    "Shadow Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNyIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/931ad5cc29/TwoHandAxe7.png",
        "en": "Shadow Axe",
        "fr": "Hache de l'ombre"
    },
    "Highland Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/294bd80312/TwoHandSword4.png",
        "en": "Highland Blade",
        "fr": "Épée à deux mains"
    },
    "Crescent Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY4IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/edbdbaa9ba/Staff8.png",
        "en": "Crescent Staff",
        "fr": "Bâton lunaire"
    },
    "Latticed Ringmail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/61293d71af/BodyStrInt1B.png",
        "en": "Latticed Ringmail",
        "fr": "Armure en maille blindée"
    },
    "Steelscale Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyRGV4MSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ba243000da/GlovesStrDex1.png",
        "en": "Steelscale Gauntlets",
        "fr": "Gantelets en écailles de poisson"
    },
    "Shadow Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyOCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/6644b94336/scepter8.png",
        "en": "Shadow Sceptre",
        "fr": "Sceptre du néant"
    },
    "Sundering Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlMyIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/7d35a55caa/TwoHandAxe3.png",
        "en": "Sundering Axe",
        "fr": "Fendeuse"
    },
    "Maple Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9cccab30a2/ShieldStrDex2.png",
        "en": "Maple Round Shield",
        "fr": "Clipeus en teck"
    },
    "Woodful Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmYyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/69ff746d86/Staff2.png",
        "en": "Woodful Staff",
        "fr": "Bâton primitif"
    },
    "Scare Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f1a4b7abd8/HelmetDexInt1.png",
        "en": "Scare Mask",
        "fr": "Masque effaroucheur"
    },
    "Bladed Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U2IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/a2a18837d4/OneHandMace6.png",
        "en": "Bladed Mace",
        "fr": "Masse à brides"
    },
    "Battered Helm": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/00af4cd199/HelmetStrDex1.png",
        "en": "Battered Helm",
        "fr": "Casque usé"
    },
    "Smallsword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjkiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/e409e11584/Rapier9.png",
        "en": "Smallsword",
        "fr": "Épée de dragon"
    },
    "Solar Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U4IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/d7f01f7a37/TwoHandMace8.png",
        "en": "Solar Maul",
        "fr": "Massue coronaire"
    },
    "Cat's Paw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0a98c635d3/Claw4.png",
        "en": "Cat's Paw",
        "fr": "Patte de tigre"
    },
    "Poleaxe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/24ac93d9cd/TwoHandAxe4.png",
        "en": "Poleaxe",
        "fr": "Hache de bourreau"
    },
    "Mallet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2UzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5e536c19aa/TwoHandMace3.png",
        "en": "Mallet",
        "fr": "Maillet"
    },
    "Murder Mitts": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4SW50MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/060b6ea395/GlovesDexInt3.png",
        "en": "Murder Mitts",
        "fr": "Paumelles de meurtrier"
    },
    "Eternal Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDciLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9ac21989c5/OneHandSword7.png",
        "en": "Eternal Sword",
        "fr": "Épée élégante"
    },
    "Sai": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjkiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/ac5b740611/Dagger9.png",
        "en": "Sai",
        "fr": "Saï"
    },
    "Meatgrinder": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U1IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/88d16a9600/TwoHandMace5.png",
        "en": "Meatgrinder",
        "fr": "Broyeur à viande"
    },
    "Tomahawk": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlMyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/126bb32028/OneHandAxe3.png",
        "en": "Tomahawk",
        "fr": "Hache de siège"
    },
    "Aventail Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckludDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/6ec3ce7dae/HelmetStrInt5.png",
        "en": "Aventail Helmet",
        "fr": "Heaume à camail"
    },
    "Foul Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY3IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/c1ded974d5/Staff7.png",
        "en": "Foul Staff",
        "fr": "Bâton ignoble"
    },
    "Lathi": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmYzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/9bc79ef01c/Staff3.png",
        "en": "Lathi",
        "fr": "Brin-d'estoc"
    },
    "Boot Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/3431875aaf/Dagger5.png",
        "en": "Boot Blade",
        "fr": "Dague ézomyte"
    },
    "Tricorne": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c4c9b53e80/HelmetDex2.png",
        "en": "Tricorne",
        "fr": "not found"
    },
    "Rock Breaker": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/b0b1a18a0c/OneHandMace4.png",
        "en": "Rock Breaker",
        "fr": "Briseur de roche"
    },
    "Buckskin Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8d8c4e161f/ShieldStr3.png",
        "en": "Buckskin Tower Shield",
        "fr": "Pavois en cuir brut"
    },
    "Prime Cleaver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9IZWlzdFR3b0hhbmRBeGUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/4aef1881cc/HeistTwoHandAxe.png",
        "en": "Prime Cleaver",
        "fr": "Hachoir affûté"
    },
    "Maltreatment Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9IZWlzdE9uZWhhbmRBeGUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5ba95d3930/HeistOnehandAxe.png",
        "en": "Maltreatment Axe",
        "fr": "Hache psychotique"
    },
    "Spine Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/6642f8922a/Bow6.png",
        "en": "Spine Bow",
        "fr": "Arc en ivoire"
    },
    "Hunter Hood": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/00026e167c/HelmetDex5.png",
        "en": "Hunter Hood",
        "fr": "Capuche de chasseur"
    },
    "Colosseum Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/429eee131d/BodyStr2C.png",
        "en": "Colosseum Plate",
        "fr": "Cuirasse d'arène"
    },
    "Crusader Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c62bd1159e/BodyStr2B.png",
        "en": "Crusader Plate",
        "fr": "Cuirasse de guerre"
    },
    "Endothermic Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0RleEhlaXN0U2hpZWxkIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/484b5bba00/DexHeistShield.png",
        "en": "Endothermic Buckler",
        "fr": "Bocle cryo-endurci"
    },
    "Coral Amulet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/fe19a0a686/Amulet2.png",
        "en": "Coral Amulet",
        "fr": "Amulette de corail"
    },
    "Reaver Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/28f44a7a0c/TwoHandSword3.png",
        "en": "Reaver Sword",
        "fr": "Épée bâtarde"
    },
    "Ambush Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleEludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/0c80b843d0/BootsDexInt3.png",
        "en": "Ambush Boots",
        "fr": "Bottes à boucles"
    },
    "Ceremonial Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/92beb951d5/ShieldStrInt5.png",
        "en": "Ceremonial Kite Shield",
        "fr": "Écu angélique"
    },
    "Steelscale Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckRleDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/bae77b3a2c/BootsStrDex1.png",
        "en": "Steelscale Boots",
        "fr": "Bottes en écailles d'acier"
    },
    "Morning Star": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U4IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/d7f01f7a37/TwoHandMace8.png",
        "en": "Morning Star",
        "fr": "Massue coronaire"
    },
    "War Hammer": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U1IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/7a42346f2b/OneHandMace5.png",
        "en": "War Hammer",
        "fr": "Marteau de légion"
    },
    "Ironscale Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckRleDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/d5b5430d4c/BootsStrDex2.png",
        "en": "Ironscale Boots",
        "fr": "Bottes en écailles de serpent"
    },
    "Fright Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3OCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/3cc3260177/Claw8.png",
        "en": "Fright Claw",
        "fr": "Serre d'aigle"
    },
    "Corrugated Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/60c6c83831/ShieldDex4.png",
        "en": "Corrugated Buckler",
        "fr": "Bocle vaal"
    },
    "Sun Leather": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4M0MiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e30de2c7a6/BodyDex3C.png",
        "en": "Sun Leather",
        "fr": "Tunique zodiacale en cuir"
    },
    "Etched Greatsword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/828ca9e450/TwoHandSword5.png",
        "en": "Etched Greatsword",
        "fr": "Espadon gravé"
    },
    "Compound Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d7cd8910cc/Bow4.png",
        "en": "Compound Bow",
        "fr": "Arc composite"
    },
    "Trisula": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjkiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/ac5b740611/Dagger9.png",
        "en": "Trisula",
        "fr": "Saï"
    },
    "Battle Hammer": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U1IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/7a42346f2b/OneHandMace5.png",
        "en": "Battle Hammer",
        "fr": "Marteau de légion"
    },
    "Callous Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/49d89bccdb/HelmetDexInt7.png",
        "en": "Callous Mask",
        "fr": "Masque calleux"
    },
    "Conjurer's Vestment": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9ea39de510/BodyInt1C.png",
        "en": "Conjurer's Vestment",
        "fr": "Habit d'occultiste"
    },
    "Padded Jacket": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/333216677b/BodyDexInt1B.png",
        "en": "Padded Jacket",
        "fr": "Veste de sentinelle"
    },
    "Fright Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U3IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/d7e632f004/TwoHandMace7.png",
        "en": "Fright Maul",
        "fr": "Massue de l'effroi"
    },
    "Barbute Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0cjMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/38b7aedad1/HelmetStr3.png",
        "en": "Barbute Helmet",
        "fr": "Barbute"
    },
    "Plated Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U2IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/a114ad5617/TwoHandMace6.png",
        "en": "Plated Maul",
        "fr": "Massue plaquée"
    },
    "Eclipse Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY4IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/edbdbaa9ba/Staff8.png",
        "en": "Eclipse Staff",
        "fr": "Bâton lunaire"
    },
    "Throat Stabber": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ac6e7ab61d/Claw3.png",
        "en": "Throat Stabber",
        "fr": "Poinçon"
    },
    "Lead Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/4b16d71d85/scepter5.png",
        "en": "Lead Sceptre",
        "fr": "Sceptre en platine"
    },
    "Satin Slippers": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0ludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/efece2ca68/BootsInt2.png",
        "en": "Satin Slippers",
        "fr": "Souliers en satin"
    },
    "Painted Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/10a005f978/ShieldDex3.png",
        "en": "Painted Buckler",
        "fr": "Bocle laqué"
    },
    "Silken Garb": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/3689be0ddd/BodyInt2B.png",
        "en": "Silken Garb",
        "fr": "Soieries de nécromancien"
    },
    "Velvet Slippers": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0ludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/efece2ca68/BootsInt2.png",
        "en": "Velvet Slippers",
        "fr": "Souliers en satin"
    },
    "Penetrating Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJQZW5ldHJhdGluZyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/7db7561558/QuiverPenetrating.png",
        "en": "Penetrating Arrow Quiver",
        "fr": "Carquois de flèches perçantes"
    },
    "Vaal Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDYiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c12083d6b6/OneHandSword6.png",
        "en": "Vaal Blade",
        "fr": "Lame vaal"
    },
    "Jasper Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlMiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/2bb7df0078/OneHandAxe2.png",
        "en": "Jasper Axe",
        "fr": "Hache en jaspe"
    },
    "Eelskin Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/b051b2c9f5/GlovesDex2.png",
        "en": "Eelskin Gloves",
        "fr": "Gants en peau de chèvre"
    },
    "Carnal Mitts": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4SW50MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/060b6ea395/GlovesDexInt3.png",
        "en": "Carnal Mitts",
        "fr": "Paumelles de meurtrier"
    },
    "Totemic Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2UyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/36201397ff/TwoHandMace2.png",
        "en": "Totemic Maul",
        "fr": "Massue totémique"
    },
    "Soldier Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/8e5221f23d/HelmetStrInt2.png",
        "en": "Soldier Helmet",
        "fr": "Heaume de soldat"
    },
    "Festival Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/bfdfda111a/HelmetDexInt4.png",
        "en": "Festival Mask",
        "fr": "Masque de festival"
    },
    "Recurve Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/2c90c93faf/Bow5.png",
        "en": "Recurve Bow",
        "fr": "Arc d'assassin"
    },
    "Steelhead": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U0IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/8c1f2059d0/TwoHandMace4.png",
        "en": "Steelhead",
        "fr": "Massue à tête d'acier"
    },
    "Timeworn Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ae1fb6dddd/Claw6.png",
        "en": "Timeworn Claw",
        "fr": "Griffe vaal"
    },
    "Butcher Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/9cdefe9de4/OneHandAxe5.png",
        "en": "Butcher Axe",
        "fr": "Hache de guerre"
    },
    "Reinforced Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d883ad1ca2/ShieldStr6.png",
        "en": "Reinforced Tower Shield",
        "fr": "Pavois colossal"
    },
    "Chest Splitter": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/01f0e16494/OneHandAxe6.png",
        "en": "Chest Splitter",
        "fr": "Ouvre-thorax"
    },
    "Iron Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/4b16d71d85/scepter5.png",
        "en": "Iron Sceptre",
        "fr": "Sceptre en platine"
    },
    "Scale Doublet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/d9b2da2bce/BodyStrDex1B.png",
        "en": "Scale Doublet",
        "fr": "Pourpoint en écailles de vouivre"
    },
    "Prong Dagger": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjkiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/ac5b740611/Dagger9.png",
        "en": "Prong Dagger",
        "fr": "Saï"
    },
    "Corroded Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjIiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/b2c0ccc044/ShieldStr2.png",
        "en": "Corroded Tower Shield",
        "fr": "Pavois rouillé"
    },
    "Iron Greaves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0cjEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/10332346d1/BootsStr1.png",
        "en": "Iron Greaves",
        "fr": "not found"
    },
    "Long Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/c064c479fa/Bow3.png",
        "en": "Long Bow",
        "fr": "Arc courbe"
    },
    "Quartz Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/c986bafb78/scepter4.png",
        "en": "Quartz Sceptre",
        "fr": "Sceptre d'opale"
    },
    "Driftwood Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/db9355404e/ShieldDexInt2.png",
        "en": "Driftwood Spiked Shield",
        "fr": "Rondache en séquoia"
    },
    "Primeval Rapier": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjYiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/f9bc0a5aa1/Rapier6.png",
        "en": "Primeval Rapier",
        "fr": "Rapière immémoriale"
    },
    "Boot Knife": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/3431875aaf/Dagger5.png",
        "en": "Boot Knife",
        "fr": "Dague ézomyte"
    },
    "Satin Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/cb34a7c551/GlovesInt2.png",
        "en": "Satin Gloves",
        "fr": "Gants en velours"
    },
    "Calling Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Db252b2tpbmdXYW5kIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/fc10997b84/ConvokingWand.png",
        "en": "Calling Wand",
        "fr": "Baguette de convocation"
    },
    "Burnished Foil": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjMiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/11f4a8b0d0/Rapier3.png",
        "en": "Burnished Foil",
        "fr": "Fleuret usé"
    },
    "Hook Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDkiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/d11450350f/OneHandSword9.png",
        "en": "Hook Sword",
        "fr": "Crochet à tête de tigre"
    },
    "Spiny Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U1IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/88d16a9600/TwoHandMace5.png",
        "en": "Spiny Maul",
        "fr": "Broyeur à viande"
    },
    "Spiny Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5839b7b6f4/ShieldStrDex3.png",
        "en": "Spiny Round Shield",
        "fr": "Clipeus clouté"
    },
    "Ancient Spirit Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/2fcc8b522c/ShieldInt4.png",
        "en": "Ancient Spirit Shield",
        "fr": "Bouclier spirituel terni"
    },
    "Opal Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kNCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/b505ad92e7/Wand4.png",
        "en": "Opal Wand",
        "fr": "Baguette en cristal"
    },
    "Full Wyrmscale": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/769e4eedeb/BodyStrDex1C.png",
        "en": "Full Wyrmscale",
        "fr": "Armure en écailles de dragon"
    },
    "Ezomyte Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/36d311e1dc/ShieldDexInt3.png",
        "en": "Ezomyte Spiked Shield",
        "fr": "Rondache en alliage"
    },
    "Reinforced Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8d673b3a1f/ShieldStrInt4.png",
        "en": "Reinforced Kite Shield",
        "fr": "Écu en acier"
    },
    "Dagger Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlOCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ba1d6734bb/TwoHandAxe8.png",
        "en": "Dagger Axe",
        "fr": "Déchiqueteuse"
    },
    "Wild Leather": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4M0IiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/db900972c7/BodyDex3B.png",
        "en": "Wild Leather",
        "fr": "Tunique en cuir du destin"
    },
    "Jagged Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U1IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/88d16a9600/TwoHandMace5.png",
        "en": "Jagged Maul",
        "fr": "Broyeur à viande"
    },
    "Ochre Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/35e149f5cf/scepter6.png",
        "en": "Ochre Sceptre",
        "fr": "Sceptre vaal"
    },
    "Battle Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/38536bcafb/OneHandSword5.png",
        "en": "Battle Sword",
        "fr": "Épée de combat"
    },
    "Leather Hood": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/636c0ab999/HelmetDex3.png",
        "en": "Leather Hood",
        "fr": "Capuche en cuir"
    },
    "Dread Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U3IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/d7e632f004/TwoHandMace7.png",
        "en": "Dread Maul",
        "fr": "Massue de l'effroi"
    },
    "Embroidered Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50NCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/484e9bd879/GlovesInt4.png",
        "en": "Embroidered Gloves",
        "fr": "Gants de sorcier"
    },
    "Estoc": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjQiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/dc28604809/Rapier4.png",
        "en": "Estoc",
        "fr": "Rapière à panier"
    },
    "Double Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3OSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/84eab7e6ba/Claw9.png",
        "en": "Double Claw",
        "fr": "Griffe géminée"
    },
    "Ornate Ringmail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MUMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/3247afb396/BodyStrInt1C.png",
        "en": "Ornate Ringmail",
        "fr": "Cotte de mailles intégrale"
    },
    "Graceful Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDciLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9ac21989c5/OneHandSword7.png",
        "en": "Graceful Sword",
        "fr": "Épée élégante"
    },
    "Reaver Helmet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0cjYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/497b497cd5/HelmetStr6.png",
        "en": "Reaver Helmet",
        "fr": "Heaume de ravageur"
    },
    "Necromancer Circlet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldEludDgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4bb6b31cbe/HelmetInt8.png",
        "en": "Necromancer Circlet",
        "fr": "Diadème de nécromancien"
    },
    "Phantom Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U4IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/57786131bb/OneHandMace8.png",
        "en": "Phantom Mace",
        "fr": "Masse fantomatique"
    },
    "Compound Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/36d311e1dc/ShieldDexInt3.png",
        "en": "Compound Spiked Shield",
        "fr": "Rondache en alliage"
    },
    "Iron Circlet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldEludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/64cde8f674/HelmetInt2.png",
        "en": "Iron Circlet",
        "fr": "Diadème en fer"
    },
    "Stone Hammer": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/b0b1a18a0c/OneHandMace4.png",
        "en": "Stone Hammer",
        "fr": "Briseur de roche"
    },
    "Leather Cap": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/765e9b75f1/HelmetDex1.png",
        "en": "Leather Cap",
        "fr": "Capuchon en cuir"
    },
    "Jade Hatchet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlMiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/2bb7df0078/OneHandAxe2.png",
        "en": "Jade Hatchet",
        "fr": "Hache en jaspe"
    },
    "Nailed Fist": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3MSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/22e3c62f0d/Claw1.png",
        "en": "Nailed Fist",
        "fr": "Poing clouté"
    },
    "Pine Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/cffdb4477e/ShieldDex2.png",
        "en": "Pine Buckler",
        "fr": "Bocle en chêne"
    },
    "Holy Chainmail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50M0MiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/900b4f2c03/BodyStrInt3C.png",
        "en": "Holy Chainmail",
        "fr": "Armure sainte en maille"
    },
    "Dragonbone Rapier": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjIiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/481efcada5/Rapier2.png",
        "en": "Dragonbone Rapier",
        "fr": "Rapière en os de vouivre"
    },
    "Talon Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlOCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ba1d6734bb/TwoHandAxe8.png",
        "en": "Talon Axe",
        "fr": "Déchiqueteuse"
    },
    "Royal Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/1e6a3da9aa/Bow7.png",
        "en": "Royal Bow",
        "fr": "Arc impérial"
    },
    "Bronze Plate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/ca9e30f668/BodyStr1B.png",
        "en": "Bronze Plate",
        "fr": "Cuirasse en cuivre"
    },
    "Stag Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyOSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/151820601e/scepter9.png",
        "en": "Stag Sceptre",
        "fr": "Sceptre de sambar"
    },
    "Long Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmYzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/9bc79ef01c/Staff3.png",
        "en": "Long Staff",
        "fr": "Brin-d'estoc"
    },
    "Rusted Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDEiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/ae6e9dda13/OneHandSword1.png",
        "en": "Rusted Sword",
        "fr": "Épée rouillée"
    },
    "Laminated Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/23fbb47426/ShieldStrInt3.png",
        "en": "Laminated Kite Shield",
        "fr": "Écu fortifié"
    },
    "Wraith Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlOCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/1c9ff58159/OneHandAxe8.png",
        "en": "Wraith Axe",
        "fr": "Hache infernale"
    },
    "Void Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNyIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/931ad5cc29/TwoHandAxe7.png",
        "en": "Void Axe",
        "fr": "Hache de l'ombre"
    },
    "Jade Chopper": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlMiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/bc8072f8c3/TwoHandAxe2.png",
        "en": "Jade Chopper",
        "fr": "Hachoir en jaspe"
    },
    "Piledriver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U0IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/8c1f2059d0/TwoHandMace4.png",
        "en": "Piledriver",
        "fr": "Massue à tête d'acier"
    },
    "Chain Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckludDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/0519faf993/BootsStrInt1.png",
        "en": "Chain Boots",
        "fr": "Bottes rivetées"
    },
    "Clasped Mitts": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4SW50MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/060b6ea395/GlovesDexInt3.png",
        "en": "Clasped Mitts",
        "fr": "Paumelles de meurtrier"
    },
    "Steel Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyNCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/468f466568/GlovesStr4.png",
        "en": "Steel Gauntlets",
        "fr": "Gantelets de titan"
    },
    "Silk Robe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MkMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8b200fbbb5/BodyInt2C.png",
        "en": "Silk Robe",
        "fr": "Toge en soie d'araignée"
    },
    "Riveted Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RySW50MSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/5d45f8da8f/GlovesStrInt1.png",
        "en": "Riveted Gloves",
        "fr": "Gants en chaînes"
    },
    "Blunt Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJCbHVudCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/435539df0f/QuiverBlunt.png",
        "en": "Blunt Arrow Quiver",
        "fr": "Carquois de flèches contondantes"
    },
    "Wyrm Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U5IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f2a493ef7a/OneHandMace9.png",
        "en": "Wyrm Mace",
        "fr": "Masse du béhémoth"
    },
    "Gemstone Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDIiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/606dae9ce9/OneHandSword2.png",
        "en": "Gemstone Sword",
        "fr": "Lame en variscite"
    },
    "Labrys": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/4b3fbfcd65/TwoHandAxe5.png",
        "en": "Labrys",
        "fr": "undefined"
    },
    "Thresher Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8b8d9559cd/Claw2.png",
        "en": "Thresher Claw",
        "fr": "Dents de squale"
    },
    "Wrist Chopper": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/451ba2cadb/OneHandAxe4.png",
        "en": "Wrist Chopper",
        "fr": "Hache de ravageur"
    },
    "Blazing Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJGaXJlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/0537b8437d/QuiverFire.png",
        "en": "Blazing Arrow Quiver",
        "fr": "Carquois de flèches enflammées"
    },
    "Golden Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/ad59b083a6/ShieldDex6.png",
        "en": "Golden Buckler",
        "fr": "Bocle impérial"
    },
    "Legion Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RySW50MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/f09ae395f5/GlovesStrInt2.png",
        "en": "Legion Gloves",
        "fr": "Gants en maille annelée"
    },
    "Etched Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/996436dc6d/ShieldStrInt2.png",
        "en": "Etched Kite Shield",
        "fr": "Écu en tilleul"
    },
    "Cleaver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/451ba2cadb/OneHandAxe4.png",
        "en": "Cleaver",
        "fr": "Hache de ravageur"
    },
    "Light Brigandine": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MkEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c9df1157d4/BodyStrDex2A.png",
        "en": "Light Brigandine",
        "fr": "Brigandine légère"
    },
    "Scale Vest": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MUEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/171496c8b0/BodyStrDex1A.png",
        "en": "Scale Vest",
        "fr": "Tunique d'écailles"
    },
    "Shabby Jerkin": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4MUEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/693fc9456c/BodyDex1A.png",
        "en": "Shabby Jerkin",
        "fr": "Tunique élimée"
    },
    "Brass Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U2IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/a114ad5617/TwoHandMace6.png",
        "en": "Brass Maul",
        "fr": "Massue plaquée"
    },
    "Sharktooth Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8b8d9559cd/Claw2.png",
        "en": "Sharktooth Claw",
        "fr": "Dents de squale"
    },
    "Legion Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/38536bcafb/OneHandSword5.png",
        "en": "Legion Sword",
        "fr": "Épée de combat"
    },
    "Gutting Knife": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjIiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/c2c0a06eec/Dagger2.png",
        "en": "Gutting Knife",
        "fr": "Couteau à écorcher"
    },
    "Dream Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U4IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/57786131bb/OneHandMace8.png",
        "en": "Dream Mace",
        "fr": "Masse fantomatique"
    },
    "Midnight Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDgiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/406f7aec97/OneHandSword8.png",
        "en": "Midnight Blade",
        "fr": "Lame du couchant"
    },
    "Petrified Club": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2UyIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/75d926bb65/OneHandMace2.png",
        "en": "Petrified Club",
        "fr": "Gourdin ancestral"
    },
    "Engraved Hatchet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlOSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/8f1da4998f/OneHandAxe9.png",
        "en": "Engraved Hatchet",
        "fr": "Hache gravée"
    },
    "Serrated Arrow Quiver": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJTZXJyYXRlZCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/3660315ba6/QuiverSerrated.png",
        "en": "Serrated Arrow Quiver",
        "fr": "Carquois de flèches dentelées"
    },
    "Noble Tricorne": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleDYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/545e1905b3/HelmetDex6.png",
        "en": "Noble Tricorne",
        "fr": "Tricorne noble"
    },
    "Great Mallet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2UzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5e536c19aa/TwoHandMace3.png",
        "en": "Great Mallet",
        "fr": "Maillet"
    },
    "Sage's Robe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/906a100c16/BodyInt1B.png",
        "en": "Sage's Robe",
        "fr": "Toge de savant"
    },
    "Serpentine Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY1IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/53f1a6b438/Staff5.png",
        "en": "Serpentine Staff",
        "fr": "Bâton du maelström"
    },
    "Conjurer Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50NCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/484e9bd879/GlovesInt4.png",
        "en": "Conjurer Gloves",
        "fr": "Gants de sorcier"
    },
    "Ebony Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d95a5bfcf0/ShieldStr4.png",
        "en": "Ebony Tower Shield",
        "fr": "Pavois en acajou"
    },
    "Carved Wand": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kMyIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/6322bd53f5/Wand3.png",
        "en": "Carved Wand",
        "fr": "Baguette imprégnée"
    },
    "Highborn Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/1e6a3da9aa/Bow7.png",
        "en": "Highborn Bow",
        "fr": "Arc impérial"
    },
    "Engraved Greatsword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/828ca9e450/TwoHandSword5.png",
        "en": "Engraved Greatsword",
        "fr": "Espadon gravé"
    },
    "Quilted Jacket": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/333216677b/BodyDexInt1B.png",
        "en": "Quilted Jacket",
        "fr": "Veste de sentinelle"
    },
    "Nubuck Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4NCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/05a8c03e95/GlovesDex4.png",
        "en": "Nubuck Gloves",
        "fr": "Gants de discrétion"
    },
    "Imperial Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U2IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/a114ad5617/TwoHandMace6.png",
        "en": "Imperial Maul",
        "fr": "Massue plaquée"
    },
    "Gladius": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/936e00e3e6/OneHandSword4.png",
        "en": "Gladius",
        "fr": "Baselarde"
    },
    "Lunaris Circlet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldEludDYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/558833af02/HelmetInt6.png",
        "en": "Lunaris Circlet",
        "fr": "Diadème de Lunaris"
    },
    "Elder Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDYiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c12083d6b6/OneHandSword6.png",
        "en": "Elder Sword",
        "fr": "Lame vaal"
    },
    "Frontier Leather": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4M0IiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/db900972c7/BodyDex3B.png",
        "en": "Frontier Leather",
        "fr": "Tunique en cuir du destin"
    },
    "Terror Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U3IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/d7e632f004/TwoHandMace7.png",
        "en": "Terror Maul",
        "fr": "Massue de l'effroi"
    },
    "Scholar's Robe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/906a100c16/BodyInt1B.png",
        "en": "Scholar's Robe",
        "fr": "Toge de savant"
    },
    "Shackled Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleEludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/bad1ba72df/BootsDexInt4.png",
        "en": "Shackled Boots",
        "fr": "Bottes de meurtrier"
    },
    "Karui Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2UyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/36201397ff/TwoHandMace2.png",
        "en": "Karui Maul",
        "fr": "Massue totémique"
    },
    "Crystal Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/c986bafb78/scepter4.png",
        "en": "Crystal Sceptre",
        "fr": "Sceptre d'opale"
    },
    "Vaal Greatsword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/828ca9e450/TwoHandSword5.png",
        "en": "Vaal Greatsword",
        "fr": "Espadon gravé"
    },
    "Zealot Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/742e5a15d7/BootsStrInt2.png",
        "en": "Zealot Boots",
        "fr": "Bottes de légion"
    },
    "Primordial Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmYyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/69ff746d86/Staff2.png",
        "en": "Primordial Staff",
        "fr": "Bâton primitif"
    },
    "Bronzescale Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckRleDMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3418ad050e/BootsStrDex3.png",
        "en": "Bronzescale Boots",
        "fr": "Bottes en écailles de dragon"
    },
    "Highborn Staff": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY2IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5e3de6f391/Staff6.png",
        "en": "Highborn Staff",
        "fr": "Bâton impérial"
    },
    "Samite Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/abe163b992/GlovesInt3.png",
        "en": "Samite Gloves",
        "fr": "Gants en soie"
    },
    "Fiend Dagger": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjgiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/e0bade03f8/Dagger8.png",
        "en": "Fiend Dagger",
        "fr": "Dague de diablotin"
    },
    "Varnished Coat": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/360c5ce7d4/BodyDexInt2B.png",
        "en": "Varnished Coat",
        "fr": "Manteau lubrifié"
    },
    "Shagreen Tower Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0cjMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8d8c4e161f/ShieldStr3.png",
        "en": "Shagreen Tower Shield",
        "fr": "Pavois en cuir brut"
    },
    "Ceremonial Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U3IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/84402507d1/OneHandMace7.png",
        "en": "Ceremonial Mace",
        "fr": "Masse ornée"
    },
    "Carving Knife": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjMiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/fbc18a1b4f/Dagger3.png",
        "en": "Carving Knife",
        "fr": "Couteau à égorger"
    },
    "Fir Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9cccab30a2/ShieldStrDex2.png",
        "en": "Fir Round Shield",
        "fr": "Clipeus en teck"
    },
    "Sledgehammer": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U0IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/8c1f2059d0/TwoHandMace4.png",
        "en": "Sledgehammer",
        "fr": "Massue à tête d'acier"
    },
    "Goathide Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f5469d2393/ShieldDex1.png",
        "en": "Goathide Buckler",
        "fr": "Bocle en peau de chèvre"
    },
    "Vaal Rapier": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjYiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/f9bc0a5aa1/Rapier6.png",
        "en": "Vaal Rapier",
        "fr": "Rapière immémoriale"
    },
    "Ironwood Buckler": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/cffdb4477e/ShieldDex2.png",
        "en": "Ironwood Buckler",
        "fr": "Bocle en chêne"
    },
    "Sharkskin Tunic": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/57409a1844/BodyDex1B.png",
        "en": "Sharkskin Tunic",
        "fr": "Tunique en peau de daim"
    },
    "Baroque Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/b81ab44241/ShieldStrDex5.png",
        "en": "Baroque Round Shield",
        "fr": "Clipeus splendide"
    },
    "Terror Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3OCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/3cc3260177/Claw8.png",
        "en": "Terror Claw",
        "fr": "Serre d'aigle"
    },
    "Noble Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/9efad90cdb/Claw7.png",
        "en": "Noble Claw",
        "fr": "Griffe impériale"
    },
    "Nightmare Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U4IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/57786131bb/OneHandMace8.png",
        "en": "Nightmare Mace",
        "fr": "Masse fantomatique"
    },
    "Antique Greaves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0cjIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c55db774a6/BootsStr2.png",
        "en": "Antique Greaves",
        "fr": "Jambières en acier"
    },
    "Despot Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/e2c34a0fb2/TwoHandAxe6.png",
        "en": "Despot Axe",
        "fr": "Hache à dorures"
    },
    "Twilight Blade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDgiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/406f7aec97/OneHandSword8.png",
        "en": "Twilight Blade",
        "fr": "Lame du couchant"
    },
    "Ancient Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDYiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c12083d6b6/OneHandSword6.png",
        "en": "Ancient Sword",
        "fr": "Lame vaal"
    },
    "Cloudwhisper Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SaXR1YWxEZXhCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7172feff67/RitualDexBoots.png",
        "en": "Cloudwhisper Boots",
        "fr": "Bottes de brise-vent"
    },
    "Devout Chainmail": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50M0MiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/900b4f2c03/BodyStrInt3C.png",
        "en": "Devout Chainmail",
        "fr": "Armure sainte en maille"
    },
    "Trapper Mitts": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4SW50MSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/983aa9c9fc/GlovesDexInt1.png",
        "en": "Trapper Mitts",
        "fr": "Paumelles enveloppées"
    },
    "Karui Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlMiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/2bb7df0078/OneHandAxe2.png",
        "en": "Karui Axe",
        "fr": "Hache en jaspe"
    },
    "Silken Vest": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MkEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/ca22533d0a/BodyInt2A.png",
        "en": "Silken Vest",
        "fr": "Maillot en soie"
    },
    "Arming Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/01f0e16494/OneHandAxe6.png",
        "en": "Arming Axe",
        "fr": "Ouvre-thorax"
    },
    "Great White Claw": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8b8d9559cd/Claw2.png",
        "en": "Great White Claw",
        "fr": "Dents de squale"
    },
    "Infernal Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/cba6615b1a/TwoHandSword7.png",
        "en": "Infernal Sword",
        "fr": "Épée spectrale"
    },
    "Crimson Round Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleDQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/f50adf0569/ShieldStrDex4.png",
        "en": "Crimson Round Shield",
        "fr": "Clipeus cardinal"
    },
    "Dragonscale Doublet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MUIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/d9b2da2bce/BodyStrDex1B.png",
        "en": "Dragonscale Doublet",
        "fr": "Pourpoint en écailles de vouivre"
    },
    "Fickle Spiritblade": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0hlaXN0T25lSGFuZFN3b3JkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/6b56c4c406/HeistOneHandSword.png",
        "en": "Fickle Spiritblade",
        "fr": "Lamesprit anarchique"
    },
    "Carnal Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyNyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/6b9c62e4c3/scepter7.png",
        "en": "Carnal Sceptre",
        "fr": "Sceptre rituel"
    },
    "Sovereign Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3f3c95a49a/ShieldDexInt5.png",
        "en": "Sovereign Spiked Shield",
        "fr": "Rondache suprême"
    },
    "Vaal Hatchet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlNiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/01f0e16494/OneHandAxe6.png",
        "en": "Vaal Hatchet",
        "fr": "Ouvre-thorax"
    },
    "Ambush Mitts": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4SW50MiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/e18b986979/GlovesDexInt2.png",
        "en": "Ambush Mitts",
        "fr": "Paumelles d'assassin"
    },
    "Royal Skean": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjciLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/61e8f27cc5/Dagger7.png",
        "en": "Royal Skean",
        "fr": "Skiane impérial"
    },
    "Lion Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d69254d0a6/TwoHandSword6.png",
        "en": "Lion Sword",
        "fr": "Épée ornée"
    },
    "War Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/38536bcafb/OneHandSword5.png",
        "en": "War Sword",
        "fr": "Épée de combat"
    },
    "Chestplate": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMkEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/33a8fe3c3f/BodyStr2A.png",
        "en": "Chestplate",
        "fr": "Plastron"
    },
    "Gut Ripper": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/1d5586ea56/Claw5.png",
        "en": "Gut Ripper",
        "fr": "Perce-yeux"
    },
    "Tiger Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/d69254d0a6/TwoHandSword6.png",
        "en": "Tiger Sword",
        "fr": "Épée ornée"
    },
    "Basemetal Treads": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SaXR1YWxTdHJCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/fa0ce420ed/RitualStrBoots.png",
        "en": "Basemetal Treads",
        "fr": "Solerets en primétal"
    },
    "Gauche Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUml0dWFsRGV4R2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/2785fe1c37/RitualDexGloves.png",
        "en": "Gauche Gloves",
        "fr": "Gants de gaucherie"
    },
    "Sorrow Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleFIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f63493ca95/HelmetStrDexR.png",
        "en": "Sorrow Mask",
        "fr": "Masque de chagrin"
    },
    "Runic Greaves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TcGlyaXRCb290c0Jhc2VUeXBlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c6826fae52/SpiritBootsBaseType.png",
        "en": "Runic Greaves",
        "fr": "not found"
    },
    "Wraith Sword": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/cba6615b1a/TwoHandSword7.png",
        "en": "Wraith Sword",
        "fr": "Épée spectrale"
    },
    "Alder Spiked Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleEludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/db9355404e/ShieldDexInt2.png",
        "en": "Alder Spiked Shield",
        "fr": "Rondache en séquoia"
    },
    "Infantry Brigandine": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyRGV4MkIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/cd52e7b841/BodyStrDex2B.png",
        "en": "Infantry Brigandine",
        "fr": "Brigandine du désert"
    },
    "Taxing Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUml0dWFsU3RyR2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/254b8a0066/RitualStrGloves.png",
        "en": "Taxing Gauntlets",
        "fr": "Gantelets épuisants"
    },
    "Demon Dagger": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjgiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/e0bade03f8/Dagger8.png",
        "en": "Demon Dagger",
        "fr": "Dague de diablotin"
    },
    "Karui Chopper": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlMiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/bc8072f8c3/TwoHandAxe2.png",
        "en": "Karui Chopper",
        "fr": "Hachoir en jaspe"
    },
    "Abyssal Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNyIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/931ad5cc29/TwoHandAxe7.png",
        "en": "Abyssal Axe",
        "fr": "Hache de l'ombre"
    },
    "Colossus Mallet": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2UzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5e536c19aa/TwoHandMace3.png",
        "en": "Colossus Mallet",
        "fr": "Maillet"
    },
    "Runic Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3Bpcml0R2xvdmVzQmFzZVR5cGUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c6f6ccf94f/SpiritGlovesBaseType.png",
        "en": "Runic Gloves",
        "fr": "not found"
    },
    "Branded Kite Shield": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludDIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/996436dc6d/ShieldStrInt2.png",
        "en": "Branded Kite Shield",
        "fr": "Écu en tilleul"
    },
    "Decimation Bow": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzgiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8d079c60ed/Bow8.png",
        "en": "Decimation Bow",
        "fr": "Arc de la mort"
    },
    "Duskwalk Slippers": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SaXR1YWxJbnRCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/dfe31cc493/RitualIntBoots.png",
        "en": "Duskwalk Slippers",
        "fr": "Souliers de cherche-rêve"
    },
    "Ambusher": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/954af836f7/Dagger4.png",
        "en": "Ambusher",
        "fr": "Stylet"
    },
    "Ghastly Eye Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0doYXN0bHlFeWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/ed72511412/GhastlyEye.png",
        "en": "Ghastly Eye Jewel",
        "fr": "Joyau œil livide"
    },
    "Auric Mace": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U3IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/84402507d1/OneHandMace7.png",
        "en": "Auric Mace",
        "fr": "Masse ornée"
    },
    "Searching Eye Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1NlYXJjaGluZ0V5ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ff2df16522/SearchingEye.png",
        "en": "Searching Eye Jewel",
        "fr": "Joyau œil scrutateur"
    },
    "Tenderizer": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2UzIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/a3a1dace2a/OneHandMace3.png",
        "en": "Tenderizer",
        "fr": "Gourdin barbelé"
    },
    "Arcanist Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/abe163b992/GlovesInt3.png",
        "en": "Arcanist Gloves",
        "fr": "Gants en soie"
    },
    "Gavel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/b0b1a18a0c/OneHandMace4.png",
        "en": "Gavel",
        "fr": "Briseur de roche"
    },
    "Ezomyte Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/24ac93d9cd/TwoHandAxe4.png",
        "en": "Ezomyte Axe",
        "fr": "Hache de bourreau"
    },
    "Trapper Boots": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleEludDIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwidGFuZ2xlZCI6dHJ1ZX1d/6bbc38307a/BootsDexInt2.png",
        "en": "Trapper Boots",
        "fr": "not found"
    },
    "Plate Vest": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyMUEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/027d388361/BodyStr1A.png",
        "en": "Plate Vest",
        "fr": "Cuirasse simple"
    },
    "Driftwood Sceptre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyMSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/4b2438446d/scepter1.png",
        "en": "Driftwood Sceptre",
        "fr": "Sceptre en bois flotté"
    },
    "Tribal Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2UyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/36201397ff/TwoHandMace2.png",
        "en": "Tribal Maul",
        "fr": "Massue totémique"
    },
    "Padded Vest": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MUEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/4e0c88b753/BodyDexInt1A.png",
        "en": "Padded Vest",
        "fr": "Tunique rembourrée"
    },
    "Boarding Axe": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlMyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/126bb32028/OneHandAxe3.png",
        "en": "Boarding Axe",
        "fr": "Hache de siège"
    },
    "Oiled Vest": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4SW50MkEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2b44daac92/BodyDexInt2A.png",
        "en": "Oiled Vest",
        "fr": "Tunique lubrifiée"
    },
    "Chainmail Vest": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RySW50MUEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5cc435caff/BodyStrInt1A.png",
        "en": "Chainmail Vest",
        "fr": "not found"
    },
    "Brimstone Treads": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SaXR1YWxTdHJCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/fa0ce420ed/RitualStrBoots.png",
        "en": "Brimstone Treads",
        "fr": "Solerets en primétal"
    },
    "Debilitation Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUml0dWFsU3RyR2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/254b8a0066/RitualStrGloves.png",
        "en": "Debilitation Gauntlets",
        "fr": "Gantelets épuisants"
    },
    "Penitent Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleFIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f63493ca95/HelmetStrDexR.png",
        "en": "Penitent Mask",
        "fr": "Masque de chagrin"
    },
    "Gale Crown": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludFIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/9da7af13c1/HelmetDexIntR.png",
        "en": "Gale Crown",
        "fr": "Couronne du blizzard"
    },
    "Gruelling Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUml0dWFsU3RyR2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/254b8a0066/RitualStrGloves.png",
        "en": "Gruelling Gauntlets",
        "fr": "Gantelets épuisants"
    },
    "Sinistral Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUml0dWFsRGV4R2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/2785fe1c37/RitualDexGloves.png",
        "en": "Sinistral Gloves",
        "fr": "Gants de gaucherie"
    },
    "Aetherwind Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUml0dWFsSW50R2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/b698da54ed/RitualIntGloves.png",
        "en": "Aetherwind Gloves",
        "fr": "Gants du nexus"
    },
    "Imp Crown": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hc2tDcm93biIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/dbad72643e/MaskCrown.png",
        "en": "Imp Crown",
        "fr": "Couronne de diablotin"
    },
    "Atonement Mask": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleFIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f63493ca95/HelmetStrDexR.png",
        "en": "Atonement Mask",
        "fr": "Masque de chagrin"
    },
    "Darksteel Treads": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SaXR1YWxTdHJCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/fa0ce420ed/RitualStrBoots.png",
        "en": "Darksteel Treads",
        "fr": "Solerets en primétal"
    },
    "Leyline Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUml0dWFsSW50R2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/b698da54ed/RitualIntGloves.png",
        "en": "Leyline Gloves",
        "fr": "Gants du nexus"
    },
    "Runic Helm": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1NwaXJpdEhlbG1ldEJhc2VUeXBlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/53e1ae7954/SpiritHelmetBaseType.png",
        "en": "Runic Helm",
        "fr": "not found"
    },
    "Viridian Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL2Jhc2ljZGV4IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/9ed22a2b94/basicdex.png",
        "en": "Viridian Jewel",
        "fr": "Joyau viridien"
    },
    "Murderous Eye Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL011cmRlcm91c0V5ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/439da96896/MurderousEye.png",
        "en": "Murderous Eye Jewel",
        "fr": "Joyau œil funeste"
    },
    "Hypnotic Eye Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1JpdmV0ZWRFeWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/a17c4bcc60/RivetedEye.png",
        "en": "Hypnotic Eye Jewel",
        "fr": "Joyau œil hypnotique"
    },
    "Southswing Gloves": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUml0dWFsRGV4R2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/2785fe1c37/RitualDexGloves.png",
        "en": "Southswing Gloves",
        "fr": "Gants de gaucherie"
    },
    "Runic Gauntlets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3Bpcml0R2xvdmVzQmFzZVR5cGUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c6f6ccf94f/SpiritGlovesBaseType.png",
        "en": "Runic Gauntlets",
        "fr": "not found"
    },
    "Crimson Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL2Jhc2ljc3RyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/8129ab1f4d/basicstr.png",
        "en": "Crimson Jewel",
        "fr": "Joyau pourpre"
    },
    "Cobalt Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL2Jhc2ljaW50IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/510013aec2/basicint.png",
        "en": "Cobalt Jewel",
        "fr": "Joyau cobalt"
    },
    "Sabre": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDMiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/0aa55ff7a1/OneHandSword3.png",
        "en": "Sabre",
        "fr": "Épée de corsaire"
    },
    "Basket Rapier": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjQiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/dc28604809/Rapier4.png",
        "en": "Basket Rapier",
        "fr": "Rapière à panier"
    },
    "Iron Hat": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0cjEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/a114c1308e/HelmetStr1.png",
        "en": "Iron Hat",
        "fr": "Chapeau de fer"
    },
    "Driftwood Club": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2UxIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/e51d4ef68d/OneHandMace1.png",
        "en": "Driftwood Club",
        "fr": "Gourdin en bois flotté"
    },
    "Archdemon Crown": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hc2tDcm93biIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/dbad72643e/MaskCrown.png",
        "en": "Archdemon Crown",
        "fr": "Couronne de diablotin"
    },
    "Demon Crown": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hc2tDcm93biIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/dbad72643e/MaskCrown.png",
        "en": "Demon Crown",
        "fr": "Couronne de diablotin"
    },
    "Runic Sollerets": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TcGlyaXRCb290c0Jhc2VUeXBlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c6826fae52/SpiritBootsBaseType.png",
        "en": "Runic Sollerets",
        "fr": "not found"
    },
    "Runic Crest": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1NwaXJpdEhlbG1ldEJhc2VUeXBlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/53e1ae7954/SpiritHelmetBaseType.png",
        "en": "Runic Crest",
        "fr": "not found"
    },
    "Runic Gages": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3Bpcml0R2xvdmVzQmFzZVR5cGUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c6f6ccf94f/SpiritGlovesBaseType.png",
        "en": "Runic Gages",
        "fr": "not found"
    },
    "Skinning Knife": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjIiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/c2c0a06eec/Dagger2.png",
        "en": "Skinning Knife",
        "fr": "Couteau à écorcher"
    },
    "Driftwood Maul": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2UxIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5977f27334/TwoHandMace1.png",
        "en": "Driftwood Maul",
        "fr": "Massue en bois flotté"
    },
    "Large Cluster Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL05ld0dlbUJhc2UzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/db35e60885/NewGemBase3.png",
        "en": "Large Cluster Jewel",
        "fr": "Grand Joyau de ramification"
    },
    "Medium Cluster Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL05ld0dlbUJhc2UyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/78f6bf8356/NewGemBase2.png",
        "en": "Medium Cluster Jewel",
        "fr": "Moyen Joyau de ramification"
    },
    "Small Cluster Jewel": {
        "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL05ld0dlbUJhc2UxIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/0eb1a9d981/NewGemBase1.png",
        "en": "Small Cluster Jewel",
        "fr": "Petit Joyau de ramification"
    }
}