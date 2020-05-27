import WORDS from './words';
import TAGS from './tags';
import { getRandomInt } from './utils';

function getRandomPhrase() {
    const phraseLen = getRandomInt(1, 3);
    const phrase = [];
    for (let i = 0; i < phraseLen; i++) {
        phrase.push(WORDS[getRandomInt(0, WORDS.length - 1)]);
    }
    return phrase.join(' ');
}

function getRandomEmoji() {
    const emojiList = [
        { pic: '🙊' },
        { pic: '😇️' },
        { pic: '️❤️' },
        { pic: '️️😃' },
        { pic: '👌' },
        { pic: '😎' },
        { pic: '👽' },
        { pic: '👾' },
        { pic: '🤖' },
    ];
    return emojiList[getRandomInt(0, emojiList.length - 1)].pic;
}

function getPreparedTags() {
    return TAGS.map(tag => {
        if (tag.category) {
            tag.phrase = getRandomPhrase();
        } else {
            tag.phrase = getRandomEmoji();
        }

        return tag;
    });
}

const PREPARED_TAGS = getPreparedTags();

export {
    PREPARED_TAGS as TAGS,
}