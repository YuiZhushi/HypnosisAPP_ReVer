import { MockApiSettings, CharacterBackgroundData, PromptTemplate } from '@/models';
import { mvuAdapter } from './mvuAdapter';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const legacyApi = {
    // -----------------------------------
    // Settings API
    // -----------------------------------
    async getApiSettings(): Promise<MockApiSettings> {
        await delay(50);
        let settings = await mvuAdapter.readChatVariable<MockApiSettings>('apiSettings');
        if (!settings) {
            settings = {
                apiEndpoint: '',
                apiKey: '',
                modelName: '',
                temperature: 0.7,
                maxTokens: 8192,
                topP: 1,
                presencePenalty: 0,
                frequencyPenalty: 0,
                streamMode: 'non_streaming',
            };
            await mvuAdapter.writeChatVariable('apiSettings', settings);
        }
        return settings;
    },

    async updateApiSettings(newSettings: Partial<MockApiSettings>): Promise<void> {
        await delay(50);
        const current = await this.getApiSettings();
        await mvuAdapter.writeChatVariable('apiSettings', { ...current, ...newSettings });
    },

    async fetchAvailableModels(): Promise<string[]> {
        await delay(50);
        return [
            'gpt-4o',
            'gpt-4-turbo',
            'gpt-3.5-turbo',
            'claude-3-opus',
            'claude-3-sonnet',
            'claude-3-haiku',
            'gemini-1.5-pro',
        ];
    },

    // -----------------------------------
    // Character Background API
    // -----------------------------------
    async getCharacters(): Promise<CharacterBackgroundData[]> {
        await delay(50);
        const charsMap = await mvuAdapter.readChatVariable<Record<string, CharacterBackgroundData>>('charBackgrounds') || {};
        return Object.values(charsMap);
    },

    async getCharacter(name: string): Promise<CharacterBackgroundData | undefined> {
        await delay(50);
        const charsMap = await mvuAdapter.readChatVariable<Record<string, CharacterBackgroundData>>('charBackgrounds') || {};
        return charsMap[name];
    },

    async saveCharacter(character: CharacterBackgroundData): Promise<CharacterBackgroundData> {
        await delay(50);
        const charsMap = await mvuAdapter.readChatVariable<Record<string, CharacterBackgroundData>>('charBackgrounds') || {};
        const name = Object.keys(character.basic)[0];
        if (name) {
            charsMap[name] = { ...character };
            await mvuAdapter.writeChatVariable('charBackgrounds', charsMap);
        }
        return character;
    },

    async getPrompts(): Promise<PromptTemplate[]> {
        await delay(50);
        const prompts = await mvuAdapter.readChatVariable<PromptTemplate[]>('prompts') || [];
        return [...prompts];
    },

    async savePrompt(prompt: PromptTemplate): Promise<PromptTemplate> {
        await delay(50);
        const prompts = await mvuAdapter.readChatVariable<PromptTemplate[]>('prompts') || [];
        const index = prompts.findIndex(p => p.id === prompt.id);
        if (index !== -1) {
            prompts[index] = { ...prompt };
        } else {
            prompts.push(prompt);
        }
        await mvuAdapter.writeChatVariable('prompts', prompts);
        return prompt;
    }
};
