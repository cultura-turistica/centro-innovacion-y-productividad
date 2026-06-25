import fs from 'fs';
import { createAvatar } from '@dicebear/core';
import * as openPeeps from '@dicebear/open-peeps';
import * as micah from '@dicebear/micah';

const avatars = {
  avatarBusiness: createAvatar(openPeeps, { seed: 'FelixCorporate', head: ['short1', 'short2', 'medium1'], face: ['smile', 'calm'], skinColor: ['ffdbb4', 'edb98a'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarHost1: createAvatar(openPeeps, { seed: 'AnaHost', head: ['long', 'medium2', 'bun'], face: ['smileBig', 'cute'], skinColor: ['d08b5b', 'ffdbb4'], backgroundColor: ['transparent'], scale: 100 }).toDataUri(),
  avatarHost2: createAvatar(openPeeps, { seed: 'LuisHost', head: ['short3', 'short4'], face: ['smile'], facialHairProbability: 100, facialHair: ['beard'], skinColor: ['ae5d29', 'edb98a'], backgroundColor: ['transparent'], scale: 100 }).toDataUri(),
  avatarJobFuncional: createAvatar(micah, { seed: 'FuncionalTurista', baseColor: ['f9c9b6'], mouth: ['smile'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarJobEmocional: createAvatar(micah, { seed: 'EmocionalViajera', baseColor: ['ffdbb4'], mouth: ['smile'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarJobSocial: createAvatar(micah, { seed: 'SocialInfluencer', baseColor: ['d08b5b'], mouth: ['smile'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarDolor: createAvatar(openPeeps, { seed: 'ClienteEnojado', face: ['tired', 'frown'], backgroundColor: ['transparent'], scale: 100 }).toDataUri(),
  avatarDeleite: createAvatar(micah, { seed: 'ClienteFeliz', mouth: ['laughing', 'smile'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarPrototipo1: createAvatar(micah, { seed: 'ArquitectoPrototipos', baseColor: ['d08b5b'], mouth: ['smile'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarPrototipo2: createAvatar(micah, { seed: 'DiseñadorUX', baseColor: ['ffdbb4'], mouth: ['laughing'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarPiloto1: createAvatar(micah, { seed: 'TesterPiloto1', baseColor: ['f9c9b6'], mouth: ['smile'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarPiloto2: createAvatar(micah, { seed: 'TesterPiloto2', baseColor: ['d08b5b'], mouth: ['laughing'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarMVP1: createAvatar(micah, { seed: 'MVPUser1', baseColor: ['ffdbb4'], mouth: ['smile'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarMVP2: createAvatar(micah, { seed: 'MVPUser2', baseColor: ['f9c9b6'], mouth: ['laughing'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarSense: createAvatar(micah, { seed: 'AnalistaSense', baseColor: ['d08b5b'], mouth: ['smile'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
  avatarRespond: createAvatar(micah, { seed: 'CreadorRespond', baseColor: ['ffdbb4'], mouth: ['laughing'], backgroundColor: ['transparent'], scale: 110 }).toDataUri(),
};

const content = `export const avatars = ${JSON.stringify(avatars, null, 2)};\n`;
fs.writeFileSync('src/data/avatars.js', content);
