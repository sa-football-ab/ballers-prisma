
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  clubId: 'clubId',
  teamId: 'teamId'
};

exports.Prisma.InstallScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  deviceId: 'deviceId',
  deviceName: 'deviceName',
  latestUserId: 'latestUserId'
};

exports.Prisma.LinkedUserIdScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  linkedUserId: 'linkedUserId'
};

exports.Prisma.LinkedAccountsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  externalAccountType: 'externalAccountType',
  externalAccountId: 'externalAccountId'
};

exports.Prisma.ClubScalarFieldEnum = {
  id: 'id',
  display: 'display',
  dateCreated: 'dateCreated',
  dateUpdated: 'dateUpdated'
};

exports.Prisma.TeamScalarFieldEnum = {
  id: 'id',
  display: 'display',
  clubId: 'clubId',
  voided: 'voided',
  dateCreated: 'dateCreated',
  dateUpdated: 'dateUpdated'
};

exports.Prisma.PlayerTrainingScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  playerTrainingProgramId: 'playerTrainingProgramId',
  playerTrainingProgramLevelId: 'playerTrainingProgramLevelId',
  playerTrainingProgramWeekId: 'playerTrainingProgramWeekId',
  trainingId: 'trainingId',
  points: 'points',
  isCompleted: 'isCompleted',
  dateCompleted: 'dateCompleted',
  dateCreated: 'dateCreated',
  trainingStartTime: 'trainingStartTime',
  trainingEndTime: 'trainingEndTime',
  address: 'address'
};

exports.Prisma.PlayerTrainingWeekScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  playerTrainingProgramId: 'playerTrainingProgramId',
  playerTrainingProgramLevelId: 'playerTrainingProgramLevelId',
  trainingProgramWeekId: 'trainingProgramWeekId',
  isCompleted: 'isCompleted',
  dateCompleted: 'dateCompleted',
  dateCreated: 'dateCreated'
};

exports.Prisma.PlayerTrainingLevelScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  playerTrainingProgramId: 'playerTrainingProgramId',
  trainingProgramLevelId: 'trainingProgramLevelId',
  isCompleted: 'isCompleted',
  dateCompleted: 'dateCompleted',
  dateCreated: 'dateCreated'
};

exports.Prisma.PlayerTrainingProgramScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  trainingProgramId: 'trainingProgramId',
  isCompleted: 'isCompleted',
  isLocked: 'isLocked',
  isPremium: 'isPremium',
  subscriptionType: 'subscriptionType',
  subscriptionId: 'subscriptionId',
  dateCompleted: 'dateCompleted',
  dateCreated: 'dateCreated'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.SubscriptionType = exports.$Enums.SubscriptionType = {
  RECURRING: 'RECURRING',
  ONE_OFF: 'ONE_OFF',
  FREE: 'FREE',
  CLUB: 'CLUB'
};

exports.Prisma.ModelName = {
  User: 'User',
  Install: 'Install',
  LinkedUserId: 'LinkedUserId',
  LinkedAccounts: 'LinkedAccounts',
  Club: 'Club',
  Team: 'Team',
  PlayerTraining: 'PlayerTraining',
  PlayerTrainingWeek: 'PlayerTrainingWeek',
  PlayerTrainingLevel: 'PlayerTrainingLevel',
  PlayerTrainingProgram: 'PlayerTrainingProgram'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
