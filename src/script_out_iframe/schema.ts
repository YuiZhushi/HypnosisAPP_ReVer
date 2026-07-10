import { z } from 'zod';
import { initialEnvironmentState } from '../mock/state/env_init';
import { initialMajorNpcState } from '../mock/state/majorNpc_init';
import { initialPlayerState } from '../mock/state/player_init';

const defaultNpcs = initialMajorNpcState.reduce(
  (acc, npc) => {
    acc[npc.id] = npc;
    return acc;
  },
  {} as Record<string, any>,
);

export const Schema = z.object({
  environment: z.object({
    virtualTime: z.string(),
    year: z.string(),
    month: z.string(),
    week: z.string(),
    day: z.string(),
    hour: z.string(),
    minute: z.string(),
    second: z.string(),
    season: z.string(),
    holidayId: z.string(),
    weather: z.string(),
    achievementProgress: z.record(z.string(), z.object({ claimed: z.boolean() })),
    questProgress: z.record(
      z.string(),
      z.object({ status: z.union([z.literal('accepted'), z.literal('completed'), z.literal('claimed')]) }),
    ),
  }).default(initialEnvironmentState),
  player: z.object({
    userName: z.string(),
    money: z.number(),
    mcEnergy: z.number(),
    mcEnergyMax: z.number(),
    mcPoints: z.number(),
    totalConsumedMc: z.number(),
    vipTier: z.number(),
    vipEndVirtualMinutes: z.number(),
    vipAutoRenew: z.boolean(),
    suspicion: z.number(),
    currentLocationId: z.string(),

    discoveredLocations: z.record(z.string(), z.object({
      discoveredAt: z.string().optional(),
      isOwnedProperty: z.boolean(),
      customNotes: z.string().optional(),
    })),
    ownedHypnosis: z.record(z.string(), z.object({
      enabled: z.boolean(),
      unlockedAt: z.string().optional(),
    })),
    ownedBodyModifications: z.record(z.string(), z.object({
      enabled: z.boolean(),
      unlockedAt: z.string().optional(),
    })),

    bodyParts: z.record(z.string(), z.record(z.string(), z.number())),
    inventory: z.record(z.string(), z.object({
      isEnable: z.boolean(),
      quantity: z.number(),
      description: z.string().optional(),
    })),
    equipment: z.record(z.string(), z.object({
      isEnable: z.boolean(),
      occupyslot: z.string(),
      isCountAsOccupy: z.boolean(),
      description: z.string().optional(),
    })),
    activeBodyModifications: z.record(z.string(), z.object({
      installedVirtualTime: z.string(),
      TempEndTime: z.number().optional(),
      isActive: z.boolean(),
      description: z.string().optional(),
    })),
    activeHypnosisEffects: z.record(z.string(), z.object({
      installedVirtualTime: z.string(),
      hypnosisType: z.union([z.number(), z.literal('permanent'), z.literal('oneTime')]),
      isEnable: z.boolean(),
      description: z.string().optional(),
    })),
  }).default(initialPlayerState),
  npcs: z
    .record(
      z.string(),
      z.object({
        id: z.string(),
        name: z.string(),
        identities: z.array(z.string()),

        alertness: z.number(),
        affection: z.number(),
        obedience: z.number(),
        lust: z.number(),
        arousal: z.number(),

        bodyParts: z.record(z.string(), z.record(z.string(), z.number())),
        inventory: z.record(z.string(), z.object({
          isEnable: z.boolean(),
          quantity: z.number(),
          description: z.string().optional(),
        })),
        equipment: z.record(z.string(), z.object({
          isEnable: z.boolean(),
          occupyslot: z.string(),
          isCountAsOccupy: z.boolean(),
          description: z.string().optional(),
        })),
        activeBodyModifications: z.record(z.string(), z.object({
          installedVirtualTime: z.string(),
          TempEndTime: z.number().optional(),
          isActive: z.boolean(),
          description: z.string().optional(),
        })),
        activeHypnosisEffects: z.record(z.string(), z.object({
          installedVirtualTime: z.string(),
          hypnosisType: z.union([z.number(), z.literal('permanent'), z.literal('oneTime')]),
          isEnable: z.boolean(),
          description: z.string().optional(),
        })),

        locationState: z.object({
          locationId: z.string(),
          locationStatus: z.string(),
        }).optional(),
      }),
    )
    .default(defaultNpcs),
});
export type Schema = z.output<typeof Schema>;
