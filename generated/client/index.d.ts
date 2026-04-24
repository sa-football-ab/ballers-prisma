
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Club
 * 
 */
export type Club = $Result.DefaultSelection<Prisma.$ClubPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model PlayerTraining
 * 
 */
export type PlayerTraining = $Result.DefaultSelection<Prisma.$PlayerTrainingPayload>
/**
 * Model PlayerTrainingWeek
 * 
 */
export type PlayerTrainingWeek = $Result.DefaultSelection<Prisma.$PlayerTrainingWeekPayload>
/**
 * Model PlayerTrainingLevel
 * 
 */
export type PlayerTrainingLevel = $Result.DefaultSelection<Prisma.$PlayerTrainingLevelPayload>
/**
 * Model PlayerTrainingProgram
 * 
 */
export type PlayerTrainingProgram = $Result.DefaultSelection<Prisma.$PlayerTrainingProgramPayload>
/**
 * Model PlayerSubscription
 * 
 */
export type PlayerSubscription = $Result.DefaultSelection<Prisma.$PlayerSubscriptionPayload>
/**
 * Model SessionBooking
 * 
 */
export type SessionBooking = $Result.DefaultSelection<Prisma.$SessionBookingPayload>
/**
 * Model MonthlyChurnMetric
 * 
 */
export type MonthlyChurnMetric = $Result.DefaultSelection<Prisma.$MonthlyChurnMetricPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  PLAYER: 'PLAYER',
  COACH: 'COACH',
  ADMIN: 'ADMIN',
  ANALYST: 'ANALYST'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const VisibilityType: {
  RESTRICTED: 'RESTRICTED',
  RECOMMENDED: 'RECOMMENDED'
};

export type VisibilityType = (typeof VisibilityType)[keyof typeof VisibilityType]


export const AdminRole: {
  GENERAL: 'GENERAL',
  BALLERS: 'BALLERS',
  LOK: 'LOK'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]


export const Language: {
  EN: 'EN',
  SV: 'SV',
  ES: 'ES'
};

export type Language = (typeof Language)[keyof typeof Language]


export const SubscriptionStatus: {
  FREE: 'FREE',
  PREMIUM: 'PREMIUM'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const SubscriptionType: {
  RECURRING: 'RECURRING',
  ONE_OFF: 'ONE_OFF',
  FREE: 'FREE',
  PREMIUM: 'PREMIUM',
  CLUB: 'CLUB',
  AI: 'AI',
  ACTIVITY: 'ACTIVITY'
};

export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType]


export const ChurnStatus: {
  HEALTHY: 'HEALTHY',
  MIGHT_LEAVE_SOON: 'MIGHT_LEAVE_SOON',
  AT_RISK: 'AT_RISK',
  CHURNED: 'CHURNED'
};

export type ChurnStatus = (typeof ChurnStatus)[keyof typeof ChurnStatus]


export const SubscriptionTier: {
  FREE: 'FREE',
  PREMIUM: 'PREMIUM'
};

export type SubscriptionTier = (typeof SubscriptionTier)[keyof typeof SubscriptionTier]


export const SubscriptionRecordStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELED: 'CANCELED'
};

export type SubscriptionRecordStatus = (typeof SubscriptionRecordStatus)[keyof typeof SubscriptionRecordStatus]


export const BookingStatus: {
  BOOKED: 'BOOKED',
  NO_BOOKING: 'NO_BOOKING'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const AttendanceStatus: {
  ATTENDED: 'ATTENDED',
  NO_SHOW: 'NO_SHOW'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type VisibilityType = $Enums.VisibilityType

export const VisibilityType: typeof $Enums.VisibilityType

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

export type Language = $Enums.Language

export const Language: typeof $Enums.Language

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type SubscriptionType = $Enums.SubscriptionType

export const SubscriptionType: typeof $Enums.SubscriptionType

export type ChurnStatus = $Enums.ChurnStatus

export const ChurnStatus: typeof $Enums.ChurnStatus

export type SubscriptionTier = $Enums.SubscriptionTier

export const SubscriptionTier: typeof $Enums.SubscriptionTier

export type SubscriptionRecordStatus = $Enums.SubscriptionRecordStatus

export const SubscriptionRecordStatus: typeof $Enums.SubscriptionRecordStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.club`: Exposes CRUD operations for the **Club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.club.findMany()
    * ```
    */
  get club(): Prisma.ClubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerTraining`: Exposes CRUD operations for the **PlayerTraining** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerTrainings
    * const playerTrainings = await prisma.playerTraining.findMany()
    * ```
    */
  get playerTraining(): Prisma.PlayerTrainingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerTrainingWeek`: Exposes CRUD operations for the **PlayerTrainingWeek** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerTrainingWeeks
    * const playerTrainingWeeks = await prisma.playerTrainingWeek.findMany()
    * ```
    */
  get playerTrainingWeek(): Prisma.PlayerTrainingWeekDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerTrainingLevel`: Exposes CRUD operations for the **PlayerTrainingLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerTrainingLevels
    * const playerTrainingLevels = await prisma.playerTrainingLevel.findMany()
    * ```
    */
  get playerTrainingLevel(): Prisma.PlayerTrainingLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerTrainingProgram`: Exposes CRUD operations for the **PlayerTrainingProgram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerTrainingPrograms
    * const playerTrainingPrograms = await prisma.playerTrainingProgram.findMany()
    * ```
    */
  get playerTrainingProgram(): Prisma.PlayerTrainingProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerSubscription`: Exposes CRUD operations for the **PlayerSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerSubscriptions
    * const playerSubscriptions = await prisma.playerSubscription.findMany()
    * ```
    */
  get playerSubscription(): Prisma.PlayerSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionBooking`: Exposes CRUD operations for the **SessionBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionBookings
    * const sessionBookings = await prisma.sessionBooking.findMany()
    * ```
    */
  get sessionBooking(): Prisma.SessionBookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyChurnMetric`: Exposes CRUD operations for the **MonthlyChurnMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyChurnMetrics
    * const monthlyChurnMetrics = await prisma.monthlyChurnMetric.findMany()
    * ```
    */
  get monthlyChurnMetric(): Prisma.MonthlyChurnMetricDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Club: 'Club',
    Team: 'Team',
    Activity: 'Activity',
    PlayerTraining: 'PlayerTraining',
    PlayerTrainingWeek: 'PlayerTrainingWeek',
    PlayerTrainingLevel: 'PlayerTrainingLevel',
    PlayerTrainingProgram: 'PlayerTrainingProgram',
    PlayerSubscription: 'PlayerSubscription',
    SessionBooking: 'SessionBooking',
    MonthlyChurnMetric: 'MonthlyChurnMetric'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "club" | "team" | "activity" | "playerTraining" | "playerTrainingWeek" | "playerTrainingLevel" | "playerTrainingProgram" | "playerSubscription" | "sessionBooking" | "monthlyChurnMetric"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Club: {
        payload: Prisma.$ClubPayload<ExtArgs>
        fields: Prisma.ClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findFirst: {
            args: Prisma.ClubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findMany: {
            args: Prisma.ClubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          create: {
            args: Prisma.ClubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          createMany: {
            args: Prisma.ClubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          update: {
            args: Prisma.ClubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          deleteMany: {
            args: Prisma.ClubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          aggregate: {
            args: Prisma.ClubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClub>
          }
          groupBy: {
            args: Prisma.ClubGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubCountArgs<ExtArgs>
            result: $Utils.Optional<ClubCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      PlayerTraining: {
        payload: Prisma.$PlayerTrainingPayload<ExtArgs>
        fields: Prisma.PlayerTrainingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerTrainingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerTrainingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingPayload>
          }
          findFirst: {
            args: Prisma.PlayerTrainingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerTrainingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingPayload>
          }
          findMany: {
            args: Prisma.PlayerTrainingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingPayload>[]
          }
          create: {
            args: Prisma.PlayerTrainingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingPayload>
          }
          createMany: {
            args: Prisma.PlayerTrainingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlayerTrainingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingPayload>
          }
          update: {
            args: Prisma.PlayerTrainingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingPayload>
          }
          deleteMany: {
            args: Prisma.PlayerTrainingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerTrainingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerTrainingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingPayload>
          }
          aggregate: {
            args: Prisma.PlayerTrainingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerTraining>
          }
          groupBy: {
            args: Prisma.PlayerTrainingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerTrainingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerTrainingCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerTrainingCountAggregateOutputType> | number
          }
        }
      }
      PlayerTrainingWeek: {
        payload: Prisma.$PlayerTrainingWeekPayload<ExtArgs>
        fields: Prisma.PlayerTrainingWeekFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerTrainingWeekFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingWeekPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerTrainingWeekFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingWeekPayload>
          }
          findFirst: {
            args: Prisma.PlayerTrainingWeekFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingWeekPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerTrainingWeekFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingWeekPayload>
          }
          findMany: {
            args: Prisma.PlayerTrainingWeekFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingWeekPayload>[]
          }
          create: {
            args: Prisma.PlayerTrainingWeekCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingWeekPayload>
          }
          createMany: {
            args: Prisma.PlayerTrainingWeekCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlayerTrainingWeekDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingWeekPayload>
          }
          update: {
            args: Prisma.PlayerTrainingWeekUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingWeekPayload>
          }
          deleteMany: {
            args: Prisma.PlayerTrainingWeekDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerTrainingWeekUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerTrainingWeekUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingWeekPayload>
          }
          aggregate: {
            args: Prisma.PlayerTrainingWeekAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerTrainingWeek>
          }
          groupBy: {
            args: Prisma.PlayerTrainingWeekGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerTrainingWeekGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerTrainingWeekCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerTrainingWeekCountAggregateOutputType> | number
          }
        }
      }
      PlayerTrainingLevel: {
        payload: Prisma.$PlayerTrainingLevelPayload<ExtArgs>
        fields: Prisma.PlayerTrainingLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerTrainingLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerTrainingLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingLevelPayload>
          }
          findFirst: {
            args: Prisma.PlayerTrainingLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerTrainingLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingLevelPayload>
          }
          findMany: {
            args: Prisma.PlayerTrainingLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingLevelPayload>[]
          }
          create: {
            args: Prisma.PlayerTrainingLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingLevelPayload>
          }
          createMany: {
            args: Prisma.PlayerTrainingLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlayerTrainingLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingLevelPayload>
          }
          update: {
            args: Prisma.PlayerTrainingLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingLevelPayload>
          }
          deleteMany: {
            args: Prisma.PlayerTrainingLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerTrainingLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerTrainingLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingLevelPayload>
          }
          aggregate: {
            args: Prisma.PlayerTrainingLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerTrainingLevel>
          }
          groupBy: {
            args: Prisma.PlayerTrainingLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerTrainingLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerTrainingLevelCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerTrainingLevelCountAggregateOutputType> | number
          }
        }
      }
      PlayerTrainingProgram: {
        payload: Prisma.$PlayerTrainingProgramPayload<ExtArgs>
        fields: Prisma.PlayerTrainingProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerTrainingProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerTrainingProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingProgramPayload>
          }
          findFirst: {
            args: Prisma.PlayerTrainingProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerTrainingProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingProgramPayload>
          }
          findMany: {
            args: Prisma.PlayerTrainingProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingProgramPayload>[]
          }
          create: {
            args: Prisma.PlayerTrainingProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingProgramPayload>
          }
          createMany: {
            args: Prisma.PlayerTrainingProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlayerTrainingProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingProgramPayload>
          }
          update: {
            args: Prisma.PlayerTrainingProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingProgramPayload>
          }
          deleteMany: {
            args: Prisma.PlayerTrainingProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerTrainingProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerTrainingProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTrainingProgramPayload>
          }
          aggregate: {
            args: Prisma.PlayerTrainingProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerTrainingProgram>
          }
          groupBy: {
            args: Prisma.PlayerTrainingProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerTrainingProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerTrainingProgramCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerTrainingProgramCountAggregateOutputType> | number
          }
        }
      }
      PlayerSubscription: {
        payload: Prisma.$PlayerSubscriptionPayload<ExtArgs>
        fields: Prisma.PlayerSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.PlayerSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSubscriptionPayload>
          }
          findMany: {
            args: Prisma.PlayerSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSubscriptionPayload>[]
          }
          create: {
            args: Prisma.PlayerSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSubscriptionPayload>
          }
          createMany: {
            args: Prisma.PlayerSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlayerSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSubscriptionPayload>
          }
          update: {
            args: Prisma.PlayerSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.PlayerSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.PlayerSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerSubscription>
          }
          groupBy: {
            args: Prisma.PlayerSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      SessionBooking: {
        payload: Prisma.$SessionBookingPayload<ExtArgs>
        fields: Prisma.SessionBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionBookingPayload>
          }
          findFirst: {
            args: Prisma.SessionBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionBookingPayload>
          }
          findMany: {
            args: Prisma.SessionBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionBookingPayload>[]
          }
          create: {
            args: Prisma.SessionBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionBookingPayload>
          }
          createMany: {
            args: Prisma.SessionBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionBookingPayload>
          }
          update: {
            args: Prisma.SessionBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionBookingPayload>
          }
          deleteMany: {
            args: Prisma.SessionBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionBookingPayload>
          }
          aggregate: {
            args: Prisma.SessionBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionBooking>
          }
          groupBy: {
            args: Prisma.SessionBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionBookingCountArgs<ExtArgs>
            result: $Utils.Optional<SessionBookingCountAggregateOutputType> | number
          }
        }
      }
      MonthlyChurnMetric: {
        payload: Prisma.$MonthlyChurnMetricPayload<ExtArgs>
        fields: Prisma.MonthlyChurnMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyChurnMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyChurnMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyChurnMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyChurnMetricPayload>
          }
          findFirst: {
            args: Prisma.MonthlyChurnMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyChurnMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyChurnMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyChurnMetricPayload>
          }
          findMany: {
            args: Prisma.MonthlyChurnMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyChurnMetricPayload>[]
          }
          create: {
            args: Prisma.MonthlyChurnMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyChurnMetricPayload>
          }
          createMany: {
            args: Prisma.MonthlyChurnMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MonthlyChurnMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyChurnMetricPayload>
          }
          update: {
            args: Prisma.MonthlyChurnMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyChurnMetricPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyChurnMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyChurnMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonthlyChurnMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyChurnMetricPayload>
          }
          aggregate: {
            args: Prisma.MonthlyChurnMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyChurnMetric>
          }
          groupBy: {
            args: Prisma.MonthlyChurnMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyChurnMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyChurnMetricCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyChurnMetricCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    club?: ClubOmit
    team?: TeamOmit
    activity?: ActivityOmit
    playerTraining?: PlayerTrainingOmit
    playerTrainingWeek?: PlayerTrainingWeekOmit
    playerTrainingLevel?: PlayerTrainingLevelOmit
    playerTrainingProgram?: PlayerTrainingProgramOmit
    playerSubscription?: PlayerSubscriptionOmit
    sessionBooking?: SessionBookingOmit
    monthlyChurnMetric?: MonthlyChurnMetricOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Activity: number
    playerSubscriptions: number
    sessionBookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Activity?: boolean | UserCountOutputTypeCountActivityArgs
    playerSubscriptions?: boolean | UserCountOutputTypeCountPlayerSubscriptionsArgs
    sessionBookings?: boolean | UserCountOutputTypeCountSessionBookingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlayerSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionBookingWhereInput
  }


  /**
   * Count Type ClubCountOutputType
   */

  export type ClubCountOutputType = {
    teams: number
    Activity: number
    User: number
    metrics: number
  }

  export type ClubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | ClubCountOutputTypeCountTeamsArgs
    Activity?: boolean | ClubCountOutputTypeCountActivityArgs
    User?: boolean | ClubCountOutputTypeCountUserArgs
    metrics?: boolean | ClubCountOutputTypeCountMetricsArgs
  }

  // Custom InputTypes
  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubCountOutputType
     */
    select?: ClubCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyChurnMetricWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    Activity: number
    User: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Activity?: boolean | TeamCountOutputTypeCountActivityArgs
    User?: boolean | TeamCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    bookings: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ActivityCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionBookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userType: $Enums.UserType | null
    clubId: string | null
    teamId: string | null
    disability: boolean | null
    personNumber: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    clubOnboarding: boolean | null
    gender: string | null
    createdBy: $Enums.AdminRole | null
    dateCreated: Date | null
    dateUpdated: Date | null
    churnStatus: $Enums.ChurnStatus | null
    joinedAt: Date | null
    lastActivityAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userType: $Enums.UserType | null
    clubId: string | null
    teamId: string | null
    disability: boolean | null
    personNumber: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    clubOnboarding: boolean | null
    gender: string | null
    createdBy: $Enums.AdminRole | null
    dateCreated: Date | null
    dateUpdated: Date | null
    churnStatus: $Enums.ChurnStatus | null
    joinedAt: Date | null
    lastActivityAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userType: number
    clubId: number
    teamId: number
    disability: number
    personNumber: number
    email: number
    firstName: number
    lastName: number
    clubOnboarding: number
    gender: number
    createdBy: number
    dateCreated: number
    dateUpdated: number
    churnStatus: number
    joinedAt: number
    lastActivityAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userType?: true
    clubId?: true
    teamId?: true
    disability?: true
    personNumber?: true
    email?: true
    firstName?: true
    lastName?: true
    clubOnboarding?: true
    gender?: true
    createdBy?: true
    dateCreated?: true
    dateUpdated?: true
    churnStatus?: true
    joinedAt?: true
    lastActivityAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userType?: true
    clubId?: true
    teamId?: true
    disability?: true
    personNumber?: true
    email?: true
    firstName?: true
    lastName?: true
    clubOnboarding?: true
    gender?: true
    createdBy?: true
    dateCreated?: true
    dateUpdated?: true
    churnStatus?: true
    joinedAt?: true
    lastActivityAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userType?: true
    clubId?: true
    teamId?: true
    disability?: true
    personNumber?: true
    email?: true
    firstName?: true
    lastName?: true
    clubOnboarding?: true
    gender?: true
    createdBy?: true
    dateCreated?: true
    dateUpdated?: true
    churnStatus?: true
    joinedAt?: true
    lastActivityAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userType: $Enums.UserType
    clubId: string | null
    teamId: string | null
    disability: boolean
    personNumber: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    clubOnboarding: boolean
    gender: string | null
    createdBy: $Enums.AdminRole
    dateCreated: Date
    dateUpdated: Date | null
    churnStatus: $Enums.ChurnStatus
    joinedAt: Date
    lastActivityAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userType?: boolean
    clubId?: boolean
    teamId?: boolean
    disability?: boolean
    personNumber?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    clubOnboarding?: boolean
    gender?: boolean
    createdBy?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
    churnStatus?: boolean
    joinedAt?: boolean
    lastActivityAt?: boolean
    club?: boolean | User$clubArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    Activity?: boolean | User$ActivityArgs<ExtArgs>
    playerSubscriptions?: boolean | User$playerSubscriptionsArgs<ExtArgs>
    sessionBookings?: boolean | User$sessionBookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    userType?: boolean
    clubId?: boolean
    teamId?: boolean
    disability?: boolean
    personNumber?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    clubOnboarding?: boolean
    gender?: boolean
    createdBy?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
    churnStatus?: boolean
    joinedAt?: boolean
    lastActivityAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userType" | "clubId" | "teamId" | "disability" | "personNumber" | "email" | "firstName" | "lastName" | "clubOnboarding" | "gender" | "createdBy" | "dateCreated" | "dateUpdated" | "churnStatus" | "joinedAt" | "lastActivityAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | User$clubArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    Activity?: boolean | User$ActivityArgs<ExtArgs>
    playerSubscriptions?: boolean | User$playerSubscriptionsArgs<ExtArgs>
    sessionBookings?: boolean | User$sessionBookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs> | null
      team: Prisma.$TeamPayload<ExtArgs> | null
      Activity: Prisma.$ActivityPayload<ExtArgs>[]
      playerSubscriptions: Prisma.$PlayerSubscriptionPayload<ExtArgs>[]
      sessionBookings: Prisma.$SessionBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userType: $Enums.UserType
      clubId: string | null
      teamId: string | null
      disability: boolean
      personNumber: string | null
      email: string | null
      firstName: string | null
      lastName: string | null
      clubOnboarding: boolean
      gender: string | null
      createdBy: $Enums.AdminRole
      dateCreated: Date
      dateUpdated: Date | null
      churnStatus: $Enums.ChurnStatus
      joinedAt: Date
      lastActivityAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends User$clubArgs<ExtArgs> = {}>(args?: Subset<T, User$clubArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    team<T extends User$teamArgs<ExtArgs> = {}>(args?: Subset<T, User$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Activity<T extends User$ActivityArgs<ExtArgs> = {}>(args?: Subset<T, User$ActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playerSubscriptions<T extends User$playerSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$playerSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionBookings<T extends User$sessionBookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly clubId: FieldRef<"User", 'String'>
    readonly teamId: FieldRef<"User", 'String'>
    readonly disability: FieldRef<"User", 'Boolean'>
    readonly personNumber: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly clubOnboarding: FieldRef<"User", 'Boolean'>
    readonly gender: FieldRef<"User", 'String'>
    readonly createdBy: FieldRef<"User", 'AdminRole'>
    readonly dateCreated: FieldRef<"User", 'DateTime'>
    readonly dateUpdated: FieldRef<"User", 'DateTime'>
    readonly churnStatus: FieldRef<"User", 'ChurnStatus'>
    readonly joinedAt: FieldRef<"User", 'DateTime'>
    readonly lastActivityAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.club
   */
  export type User$clubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
  }

  /**
   * User.team
   */
  export type User$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * User.Activity
   */
  export type User$ActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User.playerSubscriptions
   */
  export type User$playerSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSubscription
     */
    select?: PlayerSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSubscription
     */
    omit?: PlayerSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSubscriptionInclude<ExtArgs> | null
    where?: PlayerSubscriptionWhereInput
    orderBy?: PlayerSubscriptionOrderByWithRelationInput | PlayerSubscriptionOrderByWithRelationInput[]
    cursor?: PlayerSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerSubscriptionScalarFieldEnum | PlayerSubscriptionScalarFieldEnum[]
  }

  /**
   * User.sessionBookings
   */
  export type User$sessionBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
    where?: SessionBookingWhereInput
    orderBy?: SessionBookingOrderByWithRelationInput | SessionBookingOrderByWithRelationInput[]
    cursor?: SessionBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionBookingScalarFieldEnum | SessionBookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Club
   */

  export type AggregateClub = {
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  export type ClubAvgAggregateOutputType = {
    income: number | null
  }

  export type ClubSumAggregateOutputType = {
    income: number | null
  }

  export type ClubMinAggregateOutputType = {
    id: string | null
    display: string | null
    location: string | null
    income: number | null
    organizationNumber: string | null
    dateCreated: Date | null
    dateUpdated: Date | null
    type: $Enums.AdminRole | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
  }

  export type ClubMaxAggregateOutputType = {
    id: string | null
    display: string | null
    location: string | null
    income: number | null
    organizationNumber: string | null
    dateCreated: Date | null
    dateUpdated: Date | null
    type: $Enums.AdminRole | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
  }

  export type ClubCountAggregateOutputType = {
    id: number
    display: number
    location: number
    income: number
    organizationNumber: number
    dateCreated: number
    dateUpdated: number
    type: number
    subscriptionStatus: number
    _all: number
  }


  export type ClubAvgAggregateInputType = {
    income?: true
  }

  export type ClubSumAggregateInputType = {
    income?: true
  }

  export type ClubMinAggregateInputType = {
    id?: true
    display?: true
    location?: true
    income?: true
    organizationNumber?: true
    dateCreated?: true
    dateUpdated?: true
    type?: true
    subscriptionStatus?: true
  }

  export type ClubMaxAggregateInputType = {
    id?: true
    display?: true
    location?: true
    income?: true
    organizationNumber?: true
    dateCreated?: true
    dateUpdated?: true
    type?: true
    subscriptionStatus?: true
  }

  export type ClubCountAggregateInputType = {
    id?: true
    display?: true
    location?: true
    income?: true
    organizationNumber?: true
    dateCreated?: true
    dateUpdated?: true
    type?: true
    subscriptionStatus?: true
    _all?: true
  }

  export type ClubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Club to aggregate.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clubs
    **/
    _count?: true | ClubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubMaxAggregateInputType
  }

  export type GetClubAggregateType<T extends ClubAggregateArgs> = {
        [P in keyof T & keyof AggregateClub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub[P]>
      : GetScalarType<T[P], AggregateClub[P]>
  }




  export type ClubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithAggregationInput | ClubOrderByWithAggregationInput[]
    by: ClubScalarFieldEnum[] | ClubScalarFieldEnum
    having?: ClubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubCountAggregateInputType | true
    _avg?: ClubAvgAggregateInputType
    _sum?: ClubSumAggregateInputType
    _min?: ClubMinAggregateInputType
    _max?: ClubMaxAggregateInputType
  }

  export type ClubGroupByOutputType = {
    id: string
    display: string
    location: string | null
    income: number
    organizationNumber: string | null
    dateCreated: Date
    dateUpdated: Date | null
    type: $Enums.AdminRole
    subscriptionStatus: $Enums.SubscriptionStatus
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  type GetClubGroupByPayload<T extends ClubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubGroupByOutputType[P]>
            : GetScalarType<T[P], ClubGroupByOutputType[P]>
        }
      >
    >


  export type ClubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    display?: boolean
    location?: boolean
    income?: boolean
    organizationNumber?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
    type?: boolean
    subscriptionStatus?: boolean
    teams?: boolean | Club$teamsArgs<ExtArgs>
    Activity?: boolean | Club$ActivityArgs<ExtArgs>
    User?: boolean | Club$UserArgs<ExtArgs>
    metrics?: boolean | Club$metricsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>



  export type ClubSelectScalar = {
    id?: boolean
    display?: boolean
    location?: boolean
    income?: boolean
    organizationNumber?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
    type?: boolean
    subscriptionStatus?: boolean
  }

  export type ClubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "display" | "location" | "income" | "organizationNumber" | "dateCreated" | "dateUpdated" | "type" | "subscriptionStatus", ExtArgs["result"]["club"]>
  export type ClubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Club$teamsArgs<ExtArgs>
    Activity?: boolean | Club$ActivityArgs<ExtArgs>
    User?: boolean | Club$UserArgs<ExtArgs>
    metrics?: boolean | Club$metricsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Club"
    objects: {
      teams: Prisma.$TeamPayload<ExtArgs>[]
      Activity: Prisma.$ActivityPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
      metrics: Prisma.$MonthlyChurnMetricPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      display: string
      location: string | null
      income: number
      organizationNumber: string | null
      dateCreated: Date
      dateUpdated: Date | null
      type: $Enums.AdminRole
      subscriptionStatus: $Enums.SubscriptionStatus
    }, ExtArgs["result"]["club"]>
    composites: {}
  }

  type ClubGetPayload<S extends boolean | null | undefined | ClubDefaultArgs> = $Result.GetResult<Prisma.$ClubPayload, S>

  type ClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubCountAggregateInputType | true
    }

  export interface ClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Club'], meta: { name: 'Club' } }
    /**
     * Find zero or one Club that matches the filter.
     * @param {ClubFindUniqueArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClubFindUniqueArgs>(args: SelectSubset<T, ClubFindUniqueArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Club that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClubFindUniqueOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClubFindUniqueOrThrowArgs>(args: SelectSubset<T, ClubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClubFindFirstArgs>(args?: SelectSubset<T, ClubFindFirstArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClubFindFirstOrThrowArgs>(args?: SelectSubset<T, ClubFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.club.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubWithIdOnly = await prisma.club.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClubFindManyArgs>(args?: SelectSubset<T, ClubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Club.
     * @param {ClubCreateArgs} args - Arguments to create a Club.
     * @example
     * // Create one Club
     * const Club = await prisma.club.create({
     *   data: {
     *     // ... data to create a Club
     *   }
     * })
     * 
     */
    create<T extends ClubCreateArgs>(args: SelectSubset<T, ClubCreateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {ClubCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClubCreateManyArgs>(args?: SelectSubset<T, ClubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Club.
     * @param {ClubDeleteArgs} args - Arguments to delete one Club.
     * @example
     * // Delete one Club
     * const Club = await prisma.club.delete({
     *   where: {
     *     // ... filter to delete one Club
     *   }
     * })
     * 
     */
    delete<T extends ClubDeleteArgs>(args: SelectSubset<T, ClubDeleteArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Club.
     * @param {ClubUpdateArgs} args - Arguments to update one Club.
     * @example
     * // Update one Club
     * const club = await prisma.club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClubUpdateArgs>(args: SelectSubset<T, ClubUpdateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {ClubDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClubDeleteManyArgs>(args?: SelectSubset<T, ClubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClubUpdateManyArgs>(args: SelectSubset<T, ClubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Club.
     * @param {ClubUpsertArgs} args - Arguments to update or create a Club.
     * @example
     * // Update or create a Club
     * const club = await prisma.club.upsert({
     *   create: {
     *     // ... data to create a Club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club we want to update
     *   }
     * })
     */
    upsert<T extends ClubUpsertArgs>(args: SelectSubset<T, ClubUpsertArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.club.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends ClubCountArgs>(
      args?: Subset<T, ClubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClubAggregateArgs>(args: Subset<T, ClubAggregateArgs>): Prisma.PrismaPromise<GetClubAggregateType<T>>

    /**
     * Group by Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClubGroupByArgs['orderBy'] }
        : { orderBy?: ClubGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Club model
   */
  readonly fields: ClubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends Club$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Club$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Activity<T extends Club$ActivityArgs<ExtArgs> = {}>(args?: Subset<T, Club$ActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Club$UserArgs<ExtArgs> = {}>(args?: Subset<T, Club$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metrics<T extends Club$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Club$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyChurnMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Club model
   */
  interface ClubFieldRefs {
    readonly id: FieldRef<"Club", 'String'>
    readonly display: FieldRef<"Club", 'String'>
    readonly location: FieldRef<"Club", 'String'>
    readonly income: FieldRef<"Club", 'Int'>
    readonly organizationNumber: FieldRef<"Club", 'String'>
    readonly dateCreated: FieldRef<"Club", 'DateTime'>
    readonly dateUpdated: FieldRef<"Club", 'DateTime'>
    readonly type: FieldRef<"Club", 'AdminRole'>
    readonly subscriptionStatus: FieldRef<"Club", 'SubscriptionStatus'>
  }
    

  // Custom InputTypes
  /**
   * Club findUnique
   */
  export type ClubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findUniqueOrThrow
   */
  export type ClubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findFirst
   */
  export type ClubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findFirstOrThrow
   */
  export type ClubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findMany
   */
  export type ClubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Clubs to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club create
   */
  export type ClubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to create a Club.
     */
    data: XOR<ClubCreateInput, ClubUncheckedCreateInput>
  }

  /**
   * Club createMany
   */
  export type ClubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club update
   */
  export type ClubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to update a Club.
     */
    data: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
    /**
     * Choose, which Club to update.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club updateMany
   */
  export type ClubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club upsert
   */
  export type ClubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The filter to search for the Club to update in case it exists.
     */
    where: ClubWhereUniqueInput
    /**
     * In case the Club found by the `where` argument doesn't exist, create a new Club with this data.
     */
    create: XOR<ClubCreateInput, ClubUncheckedCreateInput>
    /**
     * In case the Club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
  }

  /**
   * Club delete
   */
  export type ClubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter which Club to delete.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club deleteMany
   */
  export type ClubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clubs to delete
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to delete.
     */
    limit?: number
  }

  /**
   * Club.teams
   */
  export type Club$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Club.Activity
   */
  export type Club$ActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Club.User
   */
  export type Club$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Club.metrics
   */
  export type Club$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyChurnMetric
     */
    select?: MonthlyChurnMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyChurnMetric
     */
    omit?: MonthlyChurnMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyChurnMetricInclude<ExtArgs> | null
    where?: MonthlyChurnMetricWhereInput
    orderBy?: MonthlyChurnMetricOrderByWithRelationInput | MonthlyChurnMetricOrderByWithRelationInput[]
    cursor?: MonthlyChurnMetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyChurnMetricScalarFieldEnum | MonthlyChurnMetricScalarFieldEnum[]
  }

  /**
   * Club without action
   */
  export type ClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    display: string | null
    clubId: string | null
    voided: boolean | null
    dateCreated: Date | null
    dateUpdated: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    display: string | null
    clubId: string | null
    voided: boolean | null
    dateCreated: Date | null
    dateUpdated: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    display: number
    clubId: number
    voided: number
    dateCreated: number
    dateUpdated: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    display?: true
    clubId?: true
    voided?: true
    dateCreated?: true
    dateUpdated?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    display?: true
    clubId?: true
    voided?: true
    dateCreated?: true
    dateUpdated?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    display?: true
    clubId?: true
    voided?: true
    dateCreated?: true
    dateUpdated?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    display: string
    clubId: string
    voided: boolean
    dateCreated: Date
    dateUpdated: Date | null
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    display?: boolean
    clubId?: boolean
    voided?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
    Activity?: boolean | Team$ActivityArgs<ExtArgs>
    User?: boolean | Team$UserArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>



  export type TeamSelectScalar = {
    id?: boolean
    display?: boolean
    clubId?: boolean
    voided?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "display" | "clubId" | "voided" | "dateCreated" | "dateUpdated", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
    Activity?: boolean | Team$ActivityArgs<ExtArgs>
    User?: boolean | Team$UserArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs>
      Activity: Prisma.$ActivityPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      display: string
      clubId: string
      voided: boolean
      dateCreated: Date
      dateUpdated: Date | null
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends ClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClubDefaultArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Activity<T extends Team$ActivityArgs<ExtArgs> = {}>(args?: Subset<T, Team$ActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Team$UserArgs<ExtArgs> = {}>(args?: Subset<T, Team$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly display: FieldRef<"Team", 'String'>
    readonly clubId: FieldRef<"Team", 'String'>
    readonly voided: FieldRef<"Team", 'Boolean'>
    readonly dateCreated: FieldRef<"Team", 'DateTime'>
    readonly dateUpdated: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.Activity
   */
  export type Team$ActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Team.User
   */
  export type Team$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    noOfReg: number | null
    income: number | null
    minAge: number | null
    maxAge: number | null
  }

  export type ActivitySumAggregateOutputType = {
    noOfReg: number | null
    income: number | null
    minAge: number | null
    maxAge: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    clubId: string | null
    name: string | null
    coachUserId: string | null
    description: string | null
    noOfReg: number | null
    activityDate: Date | null
    income: number | null
    program: string | null
    minAge: number | null
    maxAge: number | null
    visibilityType: $Enums.VisibilityType | null
    type: $Enums.AdminRole | null
    language: $Enums.Language | null
    dateCreated: Date | null
    dateUpdated: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    clubId: string | null
    name: string | null
    coachUserId: string | null
    description: string | null
    noOfReg: number | null
    activityDate: Date | null
    income: number | null
    program: string | null
    minAge: number | null
    maxAge: number | null
    visibilityType: $Enums.VisibilityType | null
    type: $Enums.AdminRole | null
    language: $Enums.Language | null
    dateCreated: Date | null
    dateUpdated: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    teamId: number
    clubId: number
    name: number
    coachUserId: number
    description: number
    noOfReg: number
    activityDate: number
    income: number
    program: number
    minAge: number
    maxAge: number
    visibilityType: number
    equipments: number
    type: number
    language: number
    dateCreated: number
    dateUpdated: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    noOfReg?: true
    income?: true
    minAge?: true
    maxAge?: true
  }

  export type ActivitySumAggregateInputType = {
    noOfReg?: true
    income?: true
    minAge?: true
    maxAge?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    teamId?: true
    clubId?: true
    name?: true
    coachUserId?: true
    description?: true
    noOfReg?: true
    activityDate?: true
    income?: true
    program?: true
    minAge?: true
    maxAge?: true
    visibilityType?: true
    type?: true
    language?: true
    dateCreated?: true
    dateUpdated?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    teamId?: true
    clubId?: true
    name?: true
    coachUserId?: true
    description?: true
    noOfReg?: true
    activityDate?: true
    income?: true
    program?: true
    minAge?: true
    maxAge?: true
    visibilityType?: true
    type?: true
    language?: true
    dateCreated?: true
    dateUpdated?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    teamId?: true
    clubId?: true
    name?: true
    coachUserId?: true
    description?: true
    noOfReg?: true
    activityDate?: true
    income?: true
    program?: true
    minAge?: true
    maxAge?: true
    visibilityType?: true
    equipments?: true
    type?: true
    language?: true
    dateCreated?: true
    dateUpdated?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    teamId: string | null
    clubId: string | null
    name: string
    coachUserId: string
    description: string
    noOfReg: number
    activityDate: Date
    income: number
    program: string
    minAge: number
    maxAge: number
    visibilityType: $Enums.VisibilityType
    equipments: JsonValue
    type: $Enums.AdminRole
    language: $Enums.Language
    dateCreated: Date
    dateUpdated: Date | null
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    clubId?: boolean
    name?: boolean
    coachUserId?: boolean
    description?: boolean
    noOfReg?: boolean
    activityDate?: boolean
    income?: boolean
    program?: boolean
    minAge?: boolean
    maxAge?: boolean
    visibilityType?: boolean
    equipments?: boolean
    type?: boolean
    language?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
    team?: boolean | Activity$teamArgs<ExtArgs>
    club?: boolean | Activity$clubArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Activity$bookingsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>



  export type ActivitySelectScalar = {
    id?: boolean
    teamId?: boolean
    clubId?: boolean
    name?: boolean
    coachUserId?: boolean
    description?: boolean
    noOfReg?: boolean
    activityDate?: boolean
    income?: boolean
    program?: boolean
    minAge?: boolean
    maxAge?: boolean
    visibilityType?: boolean
    equipments?: boolean
    type?: boolean
    language?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "clubId" | "name" | "coachUserId" | "description" | "noOfReg" | "activityDate" | "income" | "program" | "minAge" | "maxAge" | "visibilityType" | "equipments" | "type" | "language" | "dateCreated" | "dateUpdated", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | Activity$teamArgs<ExtArgs>
    club?: boolean | Activity$clubArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Activity$bookingsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs> | null
      club: Prisma.$ClubPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$SessionBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string | null
      clubId: string | null
      name: string
      coachUserId: string
      description: string
      noOfReg: number
      activityDate: Date
      income: number
      program: string
      minAge: number
      maxAge: number
      visibilityType: $Enums.VisibilityType
      equipments: Prisma.JsonValue
      type: $Enums.AdminRole
      language: $Enums.Language
      dateCreated: Date
      dateUpdated: Date | null
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends Activity$teamArgs<ExtArgs> = {}>(args?: Subset<T, Activity$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    club<T extends Activity$clubArgs<ExtArgs> = {}>(args?: Subset<T, Activity$clubArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Activity$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly teamId: FieldRef<"Activity", 'String'>
    readonly clubId: FieldRef<"Activity", 'String'>
    readonly name: FieldRef<"Activity", 'String'>
    readonly coachUserId: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly noOfReg: FieldRef<"Activity", 'Int'>
    readonly activityDate: FieldRef<"Activity", 'DateTime'>
    readonly income: FieldRef<"Activity", 'Int'>
    readonly program: FieldRef<"Activity", 'String'>
    readonly minAge: FieldRef<"Activity", 'Int'>
    readonly maxAge: FieldRef<"Activity", 'Int'>
    readonly visibilityType: FieldRef<"Activity", 'VisibilityType'>
    readonly equipments: FieldRef<"Activity", 'Json'>
    readonly type: FieldRef<"Activity", 'AdminRole'>
    readonly language: FieldRef<"Activity", 'Language'>
    readonly dateCreated: FieldRef<"Activity", 'DateTime'>
    readonly dateUpdated: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.team
   */
  export type Activity$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Activity.club
   */
  export type Activity$clubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
  }

  /**
   * Activity.bookings
   */
  export type Activity$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
    where?: SessionBookingWhereInput
    orderBy?: SessionBookingOrderByWithRelationInput | SessionBookingOrderByWithRelationInput[]
    cursor?: SessionBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionBookingScalarFieldEnum | SessionBookingScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model PlayerTraining
   */

  export type AggregatePlayerTraining = {
    _count: PlayerTrainingCountAggregateOutputType | null
    _avg: PlayerTrainingAvgAggregateOutputType | null
    _sum: PlayerTrainingSumAggregateOutputType | null
    _min: PlayerTrainingMinAggregateOutputType | null
    _max: PlayerTrainingMaxAggregateOutputType | null
  }

  export type PlayerTrainingAvgAggregateOutputType = {
    trainingIndex: number | null
    points: number | null
  }

  export type PlayerTrainingSumAggregateOutputType = {
    trainingIndex: number | null
    points: number | null
  }

  export type PlayerTrainingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    playerTrainingProgramId: string | null
    playerTrainingProgramLevelId: string | null
    playerTrainingProgramWeekId: string | null
    trainingIndex: number | null
    points: number | null
    isCompleted: boolean | null
    dateCompleted: Date | null
    dateCreated: Date | null
    trainingStartTime: Date | null
    trainingEndTime: Date | null
    address: string | null
  }

  export type PlayerTrainingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    playerTrainingProgramId: string | null
    playerTrainingProgramLevelId: string | null
    playerTrainingProgramWeekId: string | null
    trainingIndex: number | null
    points: number | null
    isCompleted: boolean | null
    dateCompleted: Date | null
    dateCreated: Date | null
    trainingStartTime: Date | null
    trainingEndTime: Date | null
    address: string | null
  }

  export type PlayerTrainingCountAggregateOutputType = {
    id: number
    userId: number
    playerTrainingProgramId: number
    playerTrainingProgramLevelId: number
    playerTrainingProgramWeekId: number
    trainingIndex: number
    points: number
    isCompleted: number
    dateCompleted: number
    dateCreated: number
    trainingStartTime: number
    trainingEndTime: number
    address: number
    _all: number
  }


  export type PlayerTrainingAvgAggregateInputType = {
    trainingIndex?: true
    points?: true
  }

  export type PlayerTrainingSumAggregateInputType = {
    trainingIndex?: true
    points?: true
  }

  export type PlayerTrainingMinAggregateInputType = {
    id?: true
    userId?: true
    playerTrainingProgramId?: true
    playerTrainingProgramLevelId?: true
    playerTrainingProgramWeekId?: true
    trainingIndex?: true
    points?: true
    isCompleted?: true
    dateCompleted?: true
    dateCreated?: true
    trainingStartTime?: true
    trainingEndTime?: true
    address?: true
  }

  export type PlayerTrainingMaxAggregateInputType = {
    id?: true
    userId?: true
    playerTrainingProgramId?: true
    playerTrainingProgramLevelId?: true
    playerTrainingProgramWeekId?: true
    trainingIndex?: true
    points?: true
    isCompleted?: true
    dateCompleted?: true
    dateCreated?: true
    trainingStartTime?: true
    trainingEndTime?: true
    address?: true
  }

  export type PlayerTrainingCountAggregateInputType = {
    id?: true
    userId?: true
    playerTrainingProgramId?: true
    playerTrainingProgramLevelId?: true
    playerTrainingProgramWeekId?: true
    trainingIndex?: true
    points?: true
    isCompleted?: true
    dateCompleted?: true
    dateCreated?: true
    trainingStartTime?: true
    trainingEndTime?: true
    address?: true
    _all?: true
  }

  export type PlayerTrainingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTraining to aggregate.
     */
    where?: PlayerTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainings to fetch.
     */
    orderBy?: PlayerTrainingOrderByWithRelationInput | PlayerTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerTrainings
    **/
    _count?: true | PlayerTrainingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerTrainingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerTrainingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerTrainingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerTrainingMaxAggregateInputType
  }

  export type GetPlayerTrainingAggregateType<T extends PlayerTrainingAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerTraining]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerTraining[P]>
      : GetScalarType<T[P], AggregatePlayerTraining[P]>
  }




  export type PlayerTrainingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTrainingWhereInput
    orderBy?: PlayerTrainingOrderByWithAggregationInput | PlayerTrainingOrderByWithAggregationInput[]
    by: PlayerTrainingScalarFieldEnum[] | PlayerTrainingScalarFieldEnum
    having?: PlayerTrainingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerTrainingCountAggregateInputType | true
    _avg?: PlayerTrainingAvgAggregateInputType
    _sum?: PlayerTrainingSumAggregateInputType
    _min?: PlayerTrainingMinAggregateInputType
    _max?: PlayerTrainingMaxAggregateInputType
  }

  export type PlayerTrainingGroupByOutputType = {
    id: string
    userId: string
    playerTrainingProgramId: string
    playerTrainingProgramLevelId: string
    playerTrainingProgramWeekId: string
    trainingIndex: number
    points: number
    isCompleted: boolean
    dateCompleted: Date | null
    dateCreated: Date
    trainingStartTime: Date | null
    trainingEndTime: Date | null
    address: string | null
    _count: PlayerTrainingCountAggregateOutputType | null
    _avg: PlayerTrainingAvgAggregateOutputType | null
    _sum: PlayerTrainingSumAggregateOutputType | null
    _min: PlayerTrainingMinAggregateOutputType | null
    _max: PlayerTrainingMaxAggregateOutputType | null
  }

  type GetPlayerTrainingGroupByPayload<T extends PlayerTrainingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerTrainingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerTrainingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerTrainingGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerTrainingGroupByOutputType[P]>
        }
      >
    >


  export type PlayerTrainingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    playerTrainingProgramId?: boolean
    playerTrainingProgramLevelId?: boolean
    playerTrainingProgramWeekId?: boolean
    trainingIndex?: boolean
    points?: boolean
    isCompleted?: boolean
    dateCompleted?: boolean
    dateCreated?: boolean
    trainingStartTime?: boolean
    trainingEndTime?: boolean
    address?: boolean
  }, ExtArgs["result"]["playerTraining"]>



  export type PlayerTrainingSelectScalar = {
    id?: boolean
    userId?: boolean
    playerTrainingProgramId?: boolean
    playerTrainingProgramLevelId?: boolean
    playerTrainingProgramWeekId?: boolean
    trainingIndex?: boolean
    points?: boolean
    isCompleted?: boolean
    dateCompleted?: boolean
    dateCreated?: boolean
    trainingStartTime?: boolean
    trainingEndTime?: boolean
    address?: boolean
  }

  export type PlayerTrainingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "playerTrainingProgramId" | "playerTrainingProgramLevelId" | "playerTrainingProgramWeekId" | "trainingIndex" | "points" | "isCompleted" | "dateCompleted" | "dateCreated" | "trainingStartTime" | "trainingEndTime" | "address", ExtArgs["result"]["playerTraining"]>

  export type $PlayerTrainingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerTraining"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      playerTrainingProgramId: string
      playerTrainingProgramLevelId: string
      playerTrainingProgramWeekId: string
      trainingIndex: number
      points: number
      isCompleted: boolean
      dateCompleted: Date | null
      dateCreated: Date
      trainingStartTime: Date | null
      trainingEndTime: Date | null
      address: string | null
    }, ExtArgs["result"]["playerTraining"]>
    composites: {}
  }

  type PlayerTrainingGetPayload<S extends boolean | null | undefined | PlayerTrainingDefaultArgs> = $Result.GetResult<Prisma.$PlayerTrainingPayload, S>

  type PlayerTrainingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerTrainingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerTrainingCountAggregateInputType | true
    }

  export interface PlayerTrainingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerTraining'], meta: { name: 'PlayerTraining' } }
    /**
     * Find zero or one PlayerTraining that matches the filter.
     * @param {PlayerTrainingFindUniqueArgs} args - Arguments to find a PlayerTraining
     * @example
     * // Get one PlayerTraining
     * const playerTraining = await prisma.playerTraining.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerTrainingFindUniqueArgs>(args: SelectSubset<T, PlayerTrainingFindUniqueArgs<ExtArgs>>): Prisma__PlayerTrainingClient<$Result.GetResult<Prisma.$PlayerTrainingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerTraining that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerTrainingFindUniqueOrThrowArgs} args - Arguments to find a PlayerTraining
     * @example
     * // Get one PlayerTraining
     * const playerTraining = await prisma.playerTraining.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerTrainingFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerTrainingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerTrainingClient<$Result.GetResult<Prisma.$PlayerTrainingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTraining that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingFindFirstArgs} args - Arguments to find a PlayerTraining
     * @example
     * // Get one PlayerTraining
     * const playerTraining = await prisma.playerTraining.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerTrainingFindFirstArgs>(args?: SelectSubset<T, PlayerTrainingFindFirstArgs<ExtArgs>>): Prisma__PlayerTrainingClient<$Result.GetResult<Prisma.$PlayerTrainingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTraining that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingFindFirstOrThrowArgs} args - Arguments to find a PlayerTraining
     * @example
     * // Get one PlayerTraining
     * const playerTraining = await prisma.playerTraining.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerTrainingFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerTrainingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerTrainingClient<$Result.GetResult<Prisma.$PlayerTrainingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerTrainings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerTrainings
     * const playerTrainings = await prisma.playerTraining.findMany()
     * 
     * // Get first 10 PlayerTrainings
     * const playerTrainings = await prisma.playerTraining.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerTrainingWithIdOnly = await prisma.playerTraining.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerTrainingFindManyArgs>(args?: SelectSubset<T, PlayerTrainingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTrainingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerTraining.
     * @param {PlayerTrainingCreateArgs} args - Arguments to create a PlayerTraining.
     * @example
     * // Create one PlayerTraining
     * const PlayerTraining = await prisma.playerTraining.create({
     *   data: {
     *     // ... data to create a PlayerTraining
     *   }
     * })
     * 
     */
    create<T extends PlayerTrainingCreateArgs>(args: SelectSubset<T, PlayerTrainingCreateArgs<ExtArgs>>): Prisma__PlayerTrainingClient<$Result.GetResult<Prisma.$PlayerTrainingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerTrainings.
     * @param {PlayerTrainingCreateManyArgs} args - Arguments to create many PlayerTrainings.
     * @example
     * // Create many PlayerTrainings
     * const playerTraining = await prisma.playerTraining.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerTrainingCreateManyArgs>(args?: SelectSubset<T, PlayerTrainingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlayerTraining.
     * @param {PlayerTrainingDeleteArgs} args - Arguments to delete one PlayerTraining.
     * @example
     * // Delete one PlayerTraining
     * const PlayerTraining = await prisma.playerTraining.delete({
     *   where: {
     *     // ... filter to delete one PlayerTraining
     *   }
     * })
     * 
     */
    delete<T extends PlayerTrainingDeleteArgs>(args: SelectSubset<T, PlayerTrainingDeleteArgs<ExtArgs>>): Prisma__PlayerTrainingClient<$Result.GetResult<Prisma.$PlayerTrainingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerTraining.
     * @param {PlayerTrainingUpdateArgs} args - Arguments to update one PlayerTraining.
     * @example
     * // Update one PlayerTraining
     * const playerTraining = await prisma.playerTraining.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerTrainingUpdateArgs>(args: SelectSubset<T, PlayerTrainingUpdateArgs<ExtArgs>>): Prisma__PlayerTrainingClient<$Result.GetResult<Prisma.$PlayerTrainingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerTrainings.
     * @param {PlayerTrainingDeleteManyArgs} args - Arguments to filter PlayerTrainings to delete.
     * @example
     * // Delete a few PlayerTrainings
     * const { count } = await prisma.playerTraining.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerTrainingDeleteManyArgs>(args?: SelectSubset<T, PlayerTrainingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTrainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerTrainings
     * const playerTraining = await prisma.playerTraining.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerTrainingUpdateManyArgs>(args: SelectSubset<T, PlayerTrainingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayerTraining.
     * @param {PlayerTrainingUpsertArgs} args - Arguments to update or create a PlayerTraining.
     * @example
     * // Update or create a PlayerTraining
     * const playerTraining = await prisma.playerTraining.upsert({
     *   create: {
     *     // ... data to create a PlayerTraining
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerTraining we want to update
     *   }
     * })
     */
    upsert<T extends PlayerTrainingUpsertArgs>(args: SelectSubset<T, PlayerTrainingUpsertArgs<ExtArgs>>): Prisma__PlayerTrainingClient<$Result.GetResult<Prisma.$PlayerTrainingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerTrainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingCountArgs} args - Arguments to filter PlayerTrainings to count.
     * @example
     * // Count the number of PlayerTrainings
     * const count = await prisma.playerTraining.count({
     *   where: {
     *     // ... the filter for the PlayerTrainings we want to count
     *   }
     * })
    **/
    count<T extends PlayerTrainingCountArgs>(
      args?: Subset<T, PlayerTrainingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerTrainingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerTraining.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerTrainingAggregateArgs>(args: Subset<T, PlayerTrainingAggregateArgs>): Prisma.PrismaPromise<GetPlayerTrainingAggregateType<T>>

    /**
     * Group by PlayerTraining.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerTrainingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerTrainingGroupByArgs['orderBy'] }
        : { orderBy?: PlayerTrainingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerTrainingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerTrainingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerTraining model
   */
  readonly fields: PlayerTrainingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerTraining.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerTrainingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerTraining model
   */
  interface PlayerTrainingFieldRefs {
    readonly id: FieldRef<"PlayerTraining", 'String'>
    readonly userId: FieldRef<"PlayerTraining", 'String'>
    readonly playerTrainingProgramId: FieldRef<"PlayerTraining", 'String'>
    readonly playerTrainingProgramLevelId: FieldRef<"PlayerTraining", 'String'>
    readonly playerTrainingProgramWeekId: FieldRef<"PlayerTraining", 'String'>
    readonly trainingIndex: FieldRef<"PlayerTraining", 'Int'>
    readonly points: FieldRef<"PlayerTraining", 'Int'>
    readonly isCompleted: FieldRef<"PlayerTraining", 'Boolean'>
    readonly dateCompleted: FieldRef<"PlayerTraining", 'DateTime'>
    readonly dateCreated: FieldRef<"PlayerTraining", 'DateTime'>
    readonly trainingStartTime: FieldRef<"PlayerTraining", 'DateTime'>
    readonly trainingEndTime: FieldRef<"PlayerTraining", 'DateTime'>
    readonly address: FieldRef<"PlayerTraining", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlayerTraining findUnique
   */
  export type PlayerTrainingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTraining
     */
    select?: PlayerTrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTraining
     */
    omit?: PlayerTrainingOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTraining to fetch.
     */
    where: PlayerTrainingWhereUniqueInput
  }

  /**
   * PlayerTraining findUniqueOrThrow
   */
  export type PlayerTrainingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTraining
     */
    select?: PlayerTrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTraining
     */
    omit?: PlayerTrainingOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTraining to fetch.
     */
    where: PlayerTrainingWhereUniqueInput
  }

  /**
   * PlayerTraining findFirst
   */
  export type PlayerTrainingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTraining
     */
    select?: PlayerTrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTraining
     */
    omit?: PlayerTrainingOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTraining to fetch.
     */
    where?: PlayerTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainings to fetch.
     */
    orderBy?: PlayerTrainingOrderByWithRelationInput | PlayerTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTrainings.
     */
    cursor?: PlayerTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainings.
     */
    distinct?: PlayerTrainingScalarFieldEnum | PlayerTrainingScalarFieldEnum[]
  }

  /**
   * PlayerTraining findFirstOrThrow
   */
  export type PlayerTrainingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTraining
     */
    select?: PlayerTrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTraining
     */
    omit?: PlayerTrainingOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTraining to fetch.
     */
    where?: PlayerTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainings to fetch.
     */
    orderBy?: PlayerTrainingOrderByWithRelationInput | PlayerTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTrainings.
     */
    cursor?: PlayerTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainings.
     */
    distinct?: PlayerTrainingScalarFieldEnum | PlayerTrainingScalarFieldEnum[]
  }

  /**
   * PlayerTraining findMany
   */
  export type PlayerTrainingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTraining
     */
    select?: PlayerTrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTraining
     */
    omit?: PlayerTrainingOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainings to fetch.
     */
    where?: PlayerTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainings to fetch.
     */
    orderBy?: PlayerTrainingOrderByWithRelationInput | PlayerTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerTrainings.
     */
    cursor?: PlayerTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainings.
     */
    distinct?: PlayerTrainingScalarFieldEnum | PlayerTrainingScalarFieldEnum[]
  }

  /**
   * PlayerTraining create
   */
  export type PlayerTrainingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTraining
     */
    select?: PlayerTrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTraining
     */
    omit?: PlayerTrainingOmit<ExtArgs> | null
    /**
     * The data needed to create a PlayerTraining.
     */
    data: XOR<PlayerTrainingCreateInput, PlayerTrainingUncheckedCreateInput>
  }

  /**
   * PlayerTraining createMany
   */
  export type PlayerTrainingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerTrainings.
     */
    data: PlayerTrainingCreateManyInput | PlayerTrainingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerTraining update
   */
  export type PlayerTrainingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTraining
     */
    select?: PlayerTrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTraining
     */
    omit?: PlayerTrainingOmit<ExtArgs> | null
    /**
     * The data needed to update a PlayerTraining.
     */
    data: XOR<PlayerTrainingUpdateInput, PlayerTrainingUncheckedUpdateInput>
    /**
     * Choose, which PlayerTraining to update.
     */
    where: PlayerTrainingWhereUniqueInput
  }

  /**
   * PlayerTraining updateMany
   */
  export type PlayerTrainingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerTrainings.
     */
    data: XOR<PlayerTrainingUpdateManyMutationInput, PlayerTrainingUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTrainings to update
     */
    where?: PlayerTrainingWhereInput
    /**
     * Limit how many PlayerTrainings to update.
     */
    limit?: number
  }

  /**
   * PlayerTraining upsert
   */
  export type PlayerTrainingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTraining
     */
    select?: PlayerTrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTraining
     */
    omit?: PlayerTrainingOmit<ExtArgs> | null
    /**
     * The filter to search for the PlayerTraining to update in case it exists.
     */
    where: PlayerTrainingWhereUniqueInput
    /**
     * In case the PlayerTraining found by the `where` argument doesn't exist, create a new PlayerTraining with this data.
     */
    create: XOR<PlayerTrainingCreateInput, PlayerTrainingUncheckedCreateInput>
    /**
     * In case the PlayerTraining was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerTrainingUpdateInput, PlayerTrainingUncheckedUpdateInput>
  }

  /**
   * PlayerTraining delete
   */
  export type PlayerTrainingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTraining
     */
    select?: PlayerTrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTraining
     */
    omit?: PlayerTrainingOmit<ExtArgs> | null
    /**
     * Filter which PlayerTraining to delete.
     */
    where: PlayerTrainingWhereUniqueInput
  }

  /**
   * PlayerTraining deleteMany
   */
  export type PlayerTrainingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTrainings to delete
     */
    where?: PlayerTrainingWhereInput
    /**
     * Limit how many PlayerTrainings to delete.
     */
    limit?: number
  }

  /**
   * PlayerTraining without action
   */
  export type PlayerTrainingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTraining
     */
    select?: PlayerTrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTraining
     */
    omit?: PlayerTrainingOmit<ExtArgs> | null
  }


  /**
   * Model PlayerTrainingWeek
   */

  export type AggregatePlayerTrainingWeek = {
    _count: PlayerTrainingWeekCountAggregateOutputType | null
    _avg: PlayerTrainingWeekAvgAggregateOutputType | null
    _sum: PlayerTrainingWeekSumAggregateOutputType | null
    _min: PlayerTrainingWeekMinAggregateOutputType | null
    _max: PlayerTrainingWeekMaxAggregateOutputType | null
  }

  export type PlayerTrainingWeekAvgAggregateOutputType = {
    trainingProgramWeekIndex: number | null
  }

  export type PlayerTrainingWeekSumAggregateOutputType = {
    trainingProgramWeekIndex: number | null
  }

  export type PlayerTrainingWeekMinAggregateOutputType = {
    id: string | null
    userId: string | null
    playerTrainingProgramId: string | null
    playerTrainingProgramLevelId: string | null
    trainingProgramWeekIndex: number | null
    isCompleted: boolean | null
    dateCompleted: Date | null
    dateCreated: Date | null
  }

  export type PlayerTrainingWeekMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    playerTrainingProgramId: string | null
    playerTrainingProgramLevelId: string | null
    trainingProgramWeekIndex: number | null
    isCompleted: boolean | null
    dateCompleted: Date | null
    dateCreated: Date | null
  }

  export type PlayerTrainingWeekCountAggregateOutputType = {
    id: number
    userId: number
    playerTrainingProgramId: number
    playerTrainingProgramLevelId: number
    trainingProgramWeekIndex: number
    isCompleted: number
    dateCompleted: number
    dateCreated: number
    _all: number
  }


  export type PlayerTrainingWeekAvgAggregateInputType = {
    trainingProgramWeekIndex?: true
  }

  export type PlayerTrainingWeekSumAggregateInputType = {
    trainingProgramWeekIndex?: true
  }

  export type PlayerTrainingWeekMinAggregateInputType = {
    id?: true
    userId?: true
    playerTrainingProgramId?: true
    playerTrainingProgramLevelId?: true
    trainingProgramWeekIndex?: true
    isCompleted?: true
    dateCompleted?: true
    dateCreated?: true
  }

  export type PlayerTrainingWeekMaxAggregateInputType = {
    id?: true
    userId?: true
    playerTrainingProgramId?: true
    playerTrainingProgramLevelId?: true
    trainingProgramWeekIndex?: true
    isCompleted?: true
    dateCompleted?: true
    dateCreated?: true
  }

  export type PlayerTrainingWeekCountAggregateInputType = {
    id?: true
    userId?: true
    playerTrainingProgramId?: true
    playerTrainingProgramLevelId?: true
    trainingProgramWeekIndex?: true
    isCompleted?: true
    dateCompleted?: true
    dateCreated?: true
    _all?: true
  }

  export type PlayerTrainingWeekAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTrainingWeek to aggregate.
     */
    where?: PlayerTrainingWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingWeeks to fetch.
     */
    orderBy?: PlayerTrainingWeekOrderByWithRelationInput | PlayerTrainingWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerTrainingWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingWeeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerTrainingWeeks
    **/
    _count?: true | PlayerTrainingWeekCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerTrainingWeekAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerTrainingWeekSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerTrainingWeekMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerTrainingWeekMaxAggregateInputType
  }

  export type GetPlayerTrainingWeekAggregateType<T extends PlayerTrainingWeekAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerTrainingWeek]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerTrainingWeek[P]>
      : GetScalarType<T[P], AggregatePlayerTrainingWeek[P]>
  }




  export type PlayerTrainingWeekGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTrainingWeekWhereInput
    orderBy?: PlayerTrainingWeekOrderByWithAggregationInput | PlayerTrainingWeekOrderByWithAggregationInput[]
    by: PlayerTrainingWeekScalarFieldEnum[] | PlayerTrainingWeekScalarFieldEnum
    having?: PlayerTrainingWeekScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerTrainingWeekCountAggregateInputType | true
    _avg?: PlayerTrainingWeekAvgAggregateInputType
    _sum?: PlayerTrainingWeekSumAggregateInputType
    _min?: PlayerTrainingWeekMinAggregateInputType
    _max?: PlayerTrainingWeekMaxAggregateInputType
  }

  export type PlayerTrainingWeekGroupByOutputType = {
    id: string
    userId: string
    playerTrainingProgramId: string
    playerTrainingProgramLevelId: string
    trainingProgramWeekIndex: number
    isCompleted: boolean
    dateCompleted: Date | null
    dateCreated: Date
    _count: PlayerTrainingWeekCountAggregateOutputType | null
    _avg: PlayerTrainingWeekAvgAggregateOutputType | null
    _sum: PlayerTrainingWeekSumAggregateOutputType | null
    _min: PlayerTrainingWeekMinAggregateOutputType | null
    _max: PlayerTrainingWeekMaxAggregateOutputType | null
  }

  type GetPlayerTrainingWeekGroupByPayload<T extends PlayerTrainingWeekGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerTrainingWeekGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerTrainingWeekGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerTrainingWeekGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerTrainingWeekGroupByOutputType[P]>
        }
      >
    >


  export type PlayerTrainingWeekSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    playerTrainingProgramId?: boolean
    playerTrainingProgramLevelId?: boolean
    trainingProgramWeekIndex?: boolean
    isCompleted?: boolean
    dateCompleted?: boolean
    dateCreated?: boolean
  }, ExtArgs["result"]["playerTrainingWeek"]>



  export type PlayerTrainingWeekSelectScalar = {
    id?: boolean
    userId?: boolean
    playerTrainingProgramId?: boolean
    playerTrainingProgramLevelId?: boolean
    trainingProgramWeekIndex?: boolean
    isCompleted?: boolean
    dateCompleted?: boolean
    dateCreated?: boolean
  }

  export type PlayerTrainingWeekOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "playerTrainingProgramId" | "playerTrainingProgramLevelId" | "trainingProgramWeekIndex" | "isCompleted" | "dateCompleted" | "dateCreated", ExtArgs["result"]["playerTrainingWeek"]>

  export type $PlayerTrainingWeekPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerTrainingWeek"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      playerTrainingProgramId: string
      playerTrainingProgramLevelId: string
      trainingProgramWeekIndex: number
      isCompleted: boolean
      dateCompleted: Date | null
      dateCreated: Date
    }, ExtArgs["result"]["playerTrainingWeek"]>
    composites: {}
  }

  type PlayerTrainingWeekGetPayload<S extends boolean | null | undefined | PlayerTrainingWeekDefaultArgs> = $Result.GetResult<Prisma.$PlayerTrainingWeekPayload, S>

  type PlayerTrainingWeekCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerTrainingWeekFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerTrainingWeekCountAggregateInputType | true
    }

  export interface PlayerTrainingWeekDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerTrainingWeek'], meta: { name: 'PlayerTrainingWeek' } }
    /**
     * Find zero or one PlayerTrainingWeek that matches the filter.
     * @param {PlayerTrainingWeekFindUniqueArgs} args - Arguments to find a PlayerTrainingWeek
     * @example
     * // Get one PlayerTrainingWeek
     * const playerTrainingWeek = await prisma.playerTrainingWeek.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerTrainingWeekFindUniqueArgs>(args: SelectSubset<T, PlayerTrainingWeekFindUniqueArgs<ExtArgs>>): Prisma__PlayerTrainingWeekClient<$Result.GetResult<Prisma.$PlayerTrainingWeekPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerTrainingWeek that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerTrainingWeekFindUniqueOrThrowArgs} args - Arguments to find a PlayerTrainingWeek
     * @example
     * // Get one PlayerTrainingWeek
     * const playerTrainingWeek = await prisma.playerTrainingWeek.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerTrainingWeekFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerTrainingWeekFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerTrainingWeekClient<$Result.GetResult<Prisma.$PlayerTrainingWeekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTrainingWeek that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingWeekFindFirstArgs} args - Arguments to find a PlayerTrainingWeek
     * @example
     * // Get one PlayerTrainingWeek
     * const playerTrainingWeek = await prisma.playerTrainingWeek.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerTrainingWeekFindFirstArgs>(args?: SelectSubset<T, PlayerTrainingWeekFindFirstArgs<ExtArgs>>): Prisma__PlayerTrainingWeekClient<$Result.GetResult<Prisma.$PlayerTrainingWeekPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTrainingWeek that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingWeekFindFirstOrThrowArgs} args - Arguments to find a PlayerTrainingWeek
     * @example
     * // Get one PlayerTrainingWeek
     * const playerTrainingWeek = await prisma.playerTrainingWeek.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerTrainingWeekFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerTrainingWeekFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerTrainingWeekClient<$Result.GetResult<Prisma.$PlayerTrainingWeekPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerTrainingWeeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingWeekFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerTrainingWeeks
     * const playerTrainingWeeks = await prisma.playerTrainingWeek.findMany()
     * 
     * // Get first 10 PlayerTrainingWeeks
     * const playerTrainingWeeks = await prisma.playerTrainingWeek.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerTrainingWeekWithIdOnly = await prisma.playerTrainingWeek.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerTrainingWeekFindManyArgs>(args?: SelectSubset<T, PlayerTrainingWeekFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTrainingWeekPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerTrainingWeek.
     * @param {PlayerTrainingWeekCreateArgs} args - Arguments to create a PlayerTrainingWeek.
     * @example
     * // Create one PlayerTrainingWeek
     * const PlayerTrainingWeek = await prisma.playerTrainingWeek.create({
     *   data: {
     *     // ... data to create a PlayerTrainingWeek
     *   }
     * })
     * 
     */
    create<T extends PlayerTrainingWeekCreateArgs>(args: SelectSubset<T, PlayerTrainingWeekCreateArgs<ExtArgs>>): Prisma__PlayerTrainingWeekClient<$Result.GetResult<Prisma.$PlayerTrainingWeekPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerTrainingWeeks.
     * @param {PlayerTrainingWeekCreateManyArgs} args - Arguments to create many PlayerTrainingWeeks.
     * @example
     * // Create many PlayerTrainingWeeks
     * const playerTrainingWeek = await prisma.playerTrainingWeek.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerTrainingWeekCreateManyArgs>(args?: SelectSubset<T, PlayerTrainingWeekCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlayerTrainingWeek.
     * @param {PlayerTrainingWeekDeleteArgs} args - Arguments to delete one PlayerTrainingWeek.
     * @example
     * // Delete one PlayerTrainingWeek
     * const PlayerTrainingWeek = await prisma.playerTrainingWeek.delete({
     *   where: {
     *     // ... filter to delete one PlayerTrainingWeek
     *   }
     * })
     * 
     */
    delete<T extends PlayerTrainingWeekDeleteArgs>(args: SelectSubset<T, PlayerTrainingWeekDeleteArgs<ExtArgs>>): Prisma__PlayerTrainingWeekClient<$Result.GetResult<Prisma.$PlayerTrainingWeekPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerTrainingWeek.
     * @param {PlayerTrainingWeekUpdateArgs} args - Arguments to update one PlayerTrainingWeek.
     * @example
     * // Update one PlayerTrainingWeek
     * const playerTrainingWeek = await prisma.playerTrainingWeek.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerTrainingWeekUpdateArgs>(args: SelectSubset<T, PlayerTrainingWeekUpdateArgs<ExtArgs>>): Prisma__PlayerTrainingWeekClient<$Result.GetResult<Prisma.$PlayerTrainingWeekPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerTrainingWeeks.
     * @param {PlayerTrainingWeekDeleteManyArgs} args - Arguments to filter PlayerTrainingWeeks to delete.
     * @example
     * // Delete a few PlayerTrainingWeeks
     * const { count } = await prisma.playerTrainingWeek.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerTrainingWeekDeleteManyArgs>(args?: SelectSubset<T, PlayerTrainingWeekDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTrainingWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingWeekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerTrainingWeeks
     * const playerTrainingWeek = await prisma.playerTrainingWeek.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerTrainingWeekUpdateManyArgs>(args: SelectSubset<T, PlayerTrainingWeekUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayerTrainingWeek.
     * @param {PlayerTrainingWeekUpsertArgs} args - Arguments to update or create a PlayerTrainingWeek.
     * @example
     * // Update or create a PlayerTrainingWeek
     * const playerTrainingWeek = await prisma.playerTrainingWeek.upsert({
     *   create: {
     *     // ... data to create a PlayerTrainingWeek
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerTrainingWeek we want to update
     *   }
     * })
     */
    upsert<T extends PlayerTrainingWeekUpsertArgs>(args: SelectSubset<T, PlayerTrainingWeekUpsertArgs<ExtArgs>>): Prisma__PlayerTrainingWeekClient<$Result.GetResult<Prisma.$PlayerTrainingWeekPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerTrainingWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingWeekCountArgs} args - Arguments to filter PlayerTrainingWeeks to count.
     * @example
     * // Count the number of PlayerTrainingWeeks
     * const count = await prisma.playerTrainingWeek.count({
     *   where: {
     *     // ... the filter for the PlayerTrainingWeeks we want to count
     *   }
     * })
    **/
    count<T extends PlayerTrainingWeekCountArgs>(
      args?: Subset<T, PlayerTrainingWeekCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerTrainingWeekCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerTrainingWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingWeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerTrainingWeekAggregateArgs>(args: Subset<T, PlayerTrainingWeekAggregateArgs>): Prisma.PrismaPromise<GetPlayerTrainingWeekAggregateType<T>>

    /**
     * Group by PlayerTrainingWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingWeekGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerTrainingWeekGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerTrainingWeekGroupByArgs['orderBy'] }
        : { orderBy?: PlayerTrainingWeekGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerTrainingWeekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerTrainingWeekGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerTrainingWeek model
   */
  readonly fields: PlayerTrainingWeekFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerTrainingWeek.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerTrainingWeekClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerTrainingWeek model
   */
  interface PlayerTrainingWeekFieldRefs {
    readonly id: FieldRef<"PlayerTrainingWeek", 'String'>
    readonly userId: FieldRef<"PlayerTrainingWeek", 'String'>
    readonly playerTrainingProgramId: FieldRef<"PlayerTrainingWeek", 'String'>
    readonly playerTrainingProgramLevelId: FieldRef<"PlayerTrainingWeek", 'String'>
    readonly trainingProgramWeekIndex: FieldRef<"PlayerTrainingWeek", 'Int'>
    readonly isCompleted: FieldRef<"PlayerTrainingWeek", 'Boolean'>
    readonly dateCompleted: FieldRef<"PlayerTrainingWeek", 'DateTime'>
    readonly dateCreated: FieldRef<"PlayerTrainingWeek", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerTrainingWeek findUnique
   */
  export type PlayerTrainingWeekFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingWeek
     */
    select?: PlayerTrainingWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingWeek
     */
    omit?: PlayerTrainingWeekOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingWeek to fetch.
     */
    where: PlayerTrainingWeekWhereUniqueInput
  }

  /**
   * PlayerTrainingWeek findUniqueOrThrow
   */
  export type PlayerTrainingWeekFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingWeek
     */
    select?: PlayerTrainingWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingWeek
     */
    omit?: PlayerTrainingWeekOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingWeek to fetch.
     */
    where: PlayerTrainingWeekWhereUniqueInput
  }

  /**
   * PlayerTrainingWeek findFirst
   */
  export type PlayerTrainingWeekFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingWeek
     */
    select?: PlayerTrainingWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingWeek
     */
    omit?: PlayerTrainingWeekOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingWeek to fetch.
     */
    where?: PlayerTrainingWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingWeeks to fetch.
     */
    orderBy?: PlayerTrainingWeekOrderByWithRelationInput | PlayerTrainingWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTrainingWeeks.
     */
    cursor?: PlayerTrainingWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingWeeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainingWeeks.
     */
    distinct?: PlayerTrainingWeekScalarFieldEnum | PlayerTrainingWeekScalarFieldEnum[]
  }

  /**
   * PlayerTrainingWeek findFirstOrThrow
   */
  export type PlayerTrainingWeekFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingWeek
     */
    select?: PlayerTrainingWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingWeek
     */
    omit?: PlayerTrainingWeekOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingWeek to fetch.
     */
    where?: PlayerTrainingWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingWeeks to fetch.
     */
    orderBy?: PlayerTrainingWeekOrderByWithRelationInput | PlayerTrainingWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTrainingWeeks.
     */
    cursor?: PlayerTrainingWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingWeeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainingWeeks.
     */
    distinct?: PlayerTrainingWeekScalarFieldEnum | PlayerTrainingWeekScalarFieldEnum[]
  }

  /**
   * PlayerTrainingWeek findMany
   */
  export type PlayerTrainingWeekFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingWeek
     */
    select?: PlayerTrainingWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingWeek
     */
    omit?: PlayerTrainingWeekOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingWeeks to fetch.
     */
    where?: PlayerTrainingWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingWeeks to fetch.
     */
    orderBy?: PlayerTrainingWeekOrderByWithRelationInput | PlayerTrainingWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerTrainingWeeks.
     */
    cursor?: PlayerTrainingWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingWeeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainingWeeks.
     */
    distinct?: PlayerTrainingWeekScalarFieldEnum | PlayerTrainingWeekScalarFieldEnum[]
  }

  /**
   * PlayerTrainingWeek create
   */
  export type PlayerTrainingWeekCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingWeek
     */
    select?: PlayerTrainingWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingWeek
     */
    omit?: PlayerTrainingWeekOmit<ExtArgs> | null
    /**
     * The data needed to create a PlayerTrainingWeek.
     */
    data: XOR<PlayerTrainingWeekCreateInput, PlayerTrainingWeekUncheckedCreateInput>
  }

  /**
   * PlayerTrainingWeek createMany
   */
  export type PlayerTrainingWeekCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerTrainingWeeks.
     */
    data: PlayerTrainingWeekCreateManyInput | PlayerTrainingWeekCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerTrainingWeek update
   */
  export type PlayerTrainingWeekUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingWeek
     */
    select?: PlayerTrainingWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingWeek
     */
    omit?: PlayerTrainingWeekOmit<ExtArgs> | null
    /**
     * The data needed to update a PlayerTrainingWeek.
     */
    data: XOR<PlayerTrainingWeekUpdateInput, PlayerTrainingWeekUncheckedUpdateInput>
    /**
     * Choose, which PlayerTrainingWeek to update.
     */
    where: PlayerTrainingWeekWhereUniqueInput
  }

  /**
   * PlayerTrainingWeek updateMany
   */
  export type PlayerTrainingWeekUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerTrainingWeeks.
     */
    data: XOR<PlayerTrainingWeekUpdateManyMutationInput, PlayerTrainingWeekUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTrainingWeeks to update
     */
    where?: PlayerTrainingWeekWhereInput
    /**
     * Limit how many PlayerTrainingWeeks to update.
     */
    limit?: number
  }

  /**
   * PlayerTrainingWeek upsert
   */
  export type PlayerTrainingWeekUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingWeek
     */
    select?: PlayerTrainingWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingWeek
     */
    omit?: PlayerTrainingWeekOmit<ExtArgs> | null
    /**
     * The filter to search for the PlayerTrainingWeek to update in case it exists.
     */
    where: PlayerTrainingWeekWhereUniqueInput
    /**
     * In case the PlayerTrainingWeek found by the `where` argument doesn't exist, create a new PlayerTrainingWeek with this data.
     */
    create: XOR<PlayerTrainingWeekCreateInput, PlayerTrainingWeekUncheckedCreateInput>
    /**
     * In case the PlayerTrainingWeek was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerTrainingWeekUpdateInput, PlayerTrainingWeekUncheckedUpdateInput>
  }

  /**
   * PlayerTrainingWeek delete
   */
  export type PlayerTrainingWeekDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingWeek
     */
    select?: PlayerTrainingWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingWeek
     */
    omit?: PlayerTrainingWeekOmit<ExtArgs> | null
    /**
     * Filter which PlayerTrainingWeek to delete.
     */
    where: PlayerTrainingWeekWhereUniqueInput
  }

  /**
   * PlayerTrainingWeek deleteMany
   */
  export type PlayerTrainingWeekDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTrainingWeeks to delete
     */
    where?: PlayerTrainingWeekWhereInput
    /**
     * Limit how many PlayerTrainingWeeks to delete.
     */
    limit?: number
  }

  /**
   * PlayerTrainingWeek without action
   */
  export type PlayerTrainingWeekDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingWeek
     */
    select?: PlayerTrainingWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingWeek
     */
    omit?: PlayerTrainingWeekOmit<ExtArgs> | null
  }


  /**
   * Model PlayerTrainingLevel
   */

  export type AggregatePlayerTrainingLevel = {
    _count: PlayerTrainingLevelCountAggregateOutputType | null
    _avg: PlayerTrainingLevelAvgAggregateOutputType | null
    _sum: PlayerTrainingLevelSumAggregateOutputType | null
    _min: PlayerTrainingLevelMinAggregateOutputType | null
    _max: PlayerTrainingLevelMaxAggregateOutputType | null
  }

  export type PlayerTrainingLevelAvgAggregateOutputType = {
    trainingProgramLevelIndex: number | null
  }

  export type PlayerTrainingLevelSumAggregateOutputType = {
    trainingProgramLevelIndex: number | null
  }

  export type PlayerTrainingLevelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    playerTrainingProgramId: string | null
    trainingProgramLevelIndex: number | null
    isCompleted: boolean | null
    dateCompleted: Date | null
    dateCreated: Date | null
  }

  export type PlayerTrainingLevelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    playerTrainingProgramId: string | null
    trainingProgramLevelIndex: number | null
    isCompleted: boolean | null
    dateCompleted: Date | null
    dateCreated: Date | null
  }

  export type PlayerTrainingLevelCountAggregateOutputType = {
    id: number
    userId: number
    playerTrainingProgramId: number
    trainingProgramLevelIndex: number
    isCompleted: number
    dateCompleted: number
    dateCreated: number
    _all: number
  }


  export type PlayerTrainingLevelAvgAggregateInputType = {
    trainingProgramLevelIndex?: true
  }

  export type PlayerTrainingLevelSumAggregateInputType = {
    trainingProgramLevelIndex?: true
  }

  export type PlayerTrainingLevelMinAggregateInputType = {
    id?: true
    userId?: true
    playerTrainingProgramId?: true
    trainingProgramLevelIndex?: true
    isCompleted?: true
    dateCompleted?: true
    dateCreated?: true
  }

  export type PlayerTrainingLevelMaxAggregateInputType = {
    id?: true
    userId?: true
    playerTrainingProgramId?: true
    trainingProgramLevelIndex?: true
    isCompleted?: true
    dateCompleted?: true
    dateCreated?: true
  }

  export type PlayerTrainingLevelCountAggregateInputType = {
    id?: true
    userId?: true
    playerTrainingProgramId?: true
    trainingProgramLevelIndex?: true
    isCompleted?: true
    dateCompleted?: true
    dateCreated?: true
    _all?: true
  }

  export type PlayerTrainingLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTrainingLevel to aggregate.
     */
    where?: PlayerTrainingLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingLevels to fetch.
     */
    orderBy?: PlayerTrainingLevelOrderByWithRelationInput | PlayerTrainingLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerTrainingLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerTrainingLevels
    **/
    _count?: true | PlayerTrainingLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerTrainingLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerTrainingLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerTrainingLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerTrainingLevelMaxAggregateInputType
  }

  export type GetPlayerTrainingLevelAggregateType<T extends PlayerTrainingLevelAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerTrainingLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerTrainingLevel[P]>
      : GetScalarType<T[P], AggregatePlayerTrainingLevel[P]>
  }




  export type PlayerTrainingLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTrainingLevelWhereInput
    orderBy?: PlayerTrainingLevelOrderByWithAggregationInput | PlayerTrainingLevelOrderByWithAggregationInput[]
    by: PlayerTrainingLevelScalarFieldEnum[] | PlayerTrainingLevelScalarFieldEnum
    having?: PlayerTrainingLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerTrainingLevelCountAggregateInputType | true
    _avg?: PlayerTrainingLevelAvgAggregateInputType
    _sum?: PlayerTrainingLevelSumAggregateInputType
    _min?: PlayerTrainingLevelMinAggregateInputType
    _max?: PlayerTrainingLevelMaxAggregateInputType
  }

  export type PlayerTrainingLevelGroupByOutputType = {
    id: string
    userId: string
    playerTrainingProgramId: string
    trainingProgramLevelIndex: number
    isCompleted: boolean
    dateCompleted: Date | null
    dateCreated: Date
    _count: PlayerTrainingLevelCountAggregateOutputType | null
    _avg: PlayerTrainingLevelAvgAggregateOutputType | null
    _sum: PlayerTrainingLevelSumAggregateOutputType | null
    _min: PlayerTrainingLevelMinAggregateOutputType | null
    _max: PlayerTrainingLevelMaxAggregateOutputType | null
  }

  type GetPlayerTrainingLevelGroupByPayload<T extends PlayerTrainingLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerTrainingLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerTrainingLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerTrainingLevelGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerTrainingLevelGroupByOutputType[P]>
        }
      >
    >


  export type PlayerTrainingLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    playerTrainingProgramId?: boolean
    trainingProgramLevelIndex?: boolean
    isCompleted?: boolean
    dateCompleted?: boolean
    dateCreated?: boolean
  }, ExtArgs["result"]["playerTrainingLevel"]>



  export type PlayerTrainingLevelSelectScalar = {
    id?: boolean
    userId?: boolean
    playerTrainingProgramId?: boolean
    trainingProgramLevelIndex?: boolean
    isCompleted?: boolean
    dateCompleted?: boolean
    dateCreated?: boolean
  }

  export type PlayerTrainingLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "playerTrainingProgramId" | "trainingProgramLevelIndex" | "isCompleted" | "dateCompleted" | "dateCreated", ExtArgs["result"]["playerTrainingLevel"]>

  export type $PlayerTrainingLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerTrainingLevel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      playerTrainingProgramId: string
      trainingProgramLevelIndex: number
      isCompleted: boolean
      dateCompleted: Date | null
      dateCreated: Date
    }, ExtArgs["result"]["playerTrainingLevel"]>
    composites: {}
  }

  type PlayerTrainingLevelGetPayload<S extends boolean | null | undefined | PlayerTrainingLevelDefaultArgs> = $Result.GetResult<Prisma.$PlayerTrainingLevelPayload, S>

  type PlayerTrainingLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerTrainingLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerTrainingLevelCountAggregateInputType | true
    }

  export interface PlayerTrainingLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerTrainingLevel'], meta: { name: 'PlayerTrainingLevel' } }
    /**
     * Find zero or one PlayerTrainingLevel that matches the filter.
     * @param {PlayerTrainingLevelFindUniqueArgs} args - Arguments to find a PlayerTrainingLevel
     * @example
     * // Get one PlayerTrainingLevel
     * const playerTrainingLevel = await prisma.playerTrainingLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerTrainingLevelFindUniqueArgs>(args: SelectSubset<T, PlayerTrainingLevelFindUniqueArgs<ExtArgs>>): Prisma__PlayerTrainingLevelClient<$Result.GetResult<Prisma.$PlayerTrainingLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerTrainingLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerTrainingLevelFindUniqueOrThrowArgs} args - Arguments to find a PlayerTrainingLevel
     * @example
     * // Get one PlayerTrainingLevel
     * const playerTrainingLevel = await prisma.playerTrainingLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerTrainingLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerTrainingLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerTrainingLevelClient<$Result.GetResult<Prisma.$PlayerTrainingLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTrainingLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingLevelFindFirstArgs} args - Arguments to find a PlayerTrainingLevel
     * @example
     * // Get one PlayerTrainingLevel
     * const playerTrainingLevel = await prisma.playerTrainingLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerTrainingLevelFindFirstArgs>(args?: SelectSubset<T, PlayerTrainingLevelFindFirstArgs<ExtArgs>>): Prisma__PlayerTrainingLevelClient<$Result.GetResult<Prisma.$PlayerTrainingLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTrainingLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingLevelFindFirstOrThrowArgs} args - Arguments to find a PlayerTrainingLevel
     * @example
     * // Get one PlayerTrainingLevel
     * const playerTrainingLevel = await prisma.playerTrainingLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerTrainingLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerTrainingLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerTrainingLevelClient<$Result.GetResult<Prisma.$PlayerTrainingLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerTrainingLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerTrainingLevels
     * const playerTrainingLevels = await prisma.playerTrainingLevel.findMany()
     * 
     * // Get first 10 PlayerTrainingLevels
     * const playerTrainingLevels = await prisma.playerTrainingLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerTrainingLevelWithIdOnly = await prisma.playerTrainingLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerTrainingLevelFindManyArgs>(args?: SelectSubset<T, PlayerTrainingLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTrainingLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerTrainingLevel.
     * @param {PlayerTrainingLevelCreateArgs} args - Arguments to create a PlayerTrainingLevel.
     * @example
     * // Create one PlayerTrainingLevel
     * const PlayerTrainingLevel = await prisma.playerTrainingLevel.create({
     *   data: {
     *     // ... data to create a PlayerTrainingLevel
     *   }
     * })
     * 
     */
    create<T extends PlayerTrainingLevelCreateArgs>(args: SelectSubset<T, PlayerTrainingLevelCreateArgs<ExtArgs>>): Prisma__PlayerTrainingLevelClient<$Result.GetResult<Prisma.$PlayerTrainingLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerTrainingLevels.
     * @param {PlayerTrainingLevelCreateManyArgs} args - Arguments to create many PlayerTrainingLevels.
     * @example
     * // Create many PlayerTrainingLevels
     * const playerTrainingLevel = await prisma.playerTrainingLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerTrainingLevelCreateManyArgs>(args?: SelectSubset<T, PlayerTrainingLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlayerTrainingLevel.
     * @param {PlayerTrainingLevelDeleteArgs} args - Arguments to delete one PlayerTrainingLevel.
     * @example
     * // Delete one PlayerTrainingLevel
     * const PlayerTrainingLevel = await prisma.playerTrainingLevel.delete({
     *   where: {
     *     // ... filter to delete one PlayerTrainingLevel
     *   }
     * })
     * 
     */
    delete<T extends PlayerTrainingLevelDeleteArgs>(args: SelectSubset<T, PlayerTrainingLevelDeleteArgs<ExtArgs>>): Prisma__PlayerTrainingLevelClient<$Result.GetResult<Prisma.$PlayerTrainingLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerTrainingLevel.
     * @param {PlayerTrainingLevelUpdateArgs} args - Arguments to update one PlayerTrainingLevel.
     * @example
     * // Update one PlayerTrainingLevel
     * const playerTrainingLevel = await prisma.playerTrainingLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerTrainingLevelUpdateArgs>(args: SelectSubset<T, PlayerTrainingLevelUpdateArgs<ExtArgs>>): Prisma__PlayerTrainingLevelClient<$Result.GetResult<Prisma.$PlayerTrainingLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerTrainingLevels.
     * @param {PlayerTrainingLevelDeleteManyArgs} args - Arguments to filter PlayerTrainingLevels to delete.
     * @example
     * // Delete a few PlayerTrainingLevels
     * const { count } = await prisma.playerTrainingLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerTrainingLevelDeleteManyArgs>(args?: SelectSubset<T, PlayerTrainingLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTrainingLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerTrainingLevels
     * const playerTrainingLevel = await prisma.playerTrainingLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerTrainingLevelUpdateManyArgs>(args: SelectSubset<T, PlayerTrainingLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayerTrainingLevel.
     * @param {PlayerTrainingLevelUpsertArgs} args - Arguments to update or create a PlayerTrainingLevel.
     * @example
     * // Update or create a PlayerTrainingLevel
     * const playerTrainingLevel = await prisma.playerTrainingLevel.upsert({
     *   create: {
     *     // ... data to create a PlayerTrainingLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerTrainingLevel we want to update
     *   }
     * })
     */
    upsert<T extends PlayerTrainingLevelUpsertArgs>(args: SelectSubset<T, PlayerTrainingLevelUpsertArgs<ExtArgs>>): Prisma__PlayerTrainingLevelClient<$Result.GetResult<Prisma.$PlayerTrainingLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerTrainingLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingLevelCountArgs} args - Arguments to filter PlayerTrainingLevels to count.
     * @example
     * // Count the number of PlayerTrainingLevels
     * const count = await prisma.playerTrainingLevel.count({
     *   where: {
     *     // ... the filter for the PlayerTrainingLevels we want to count
     *   }
     * })
    **/
    count<T extends PlayerTrainingLevelCountArgs>(
      args?: Subset<T, PlayerTrainingLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerTrainingLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerTrainingLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerTrainingLevelAggregateArgs>(args: Subset<T, PlayerTrainingLevelAggregateArgs>): Prisma.PrismaPromise<GetPlayerTrainingLevelAggregateType<T>>

    /**
     * Group by PlayerTrainingLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingLevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerTrainingLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerTrainingLevelGroupByArgs['orderBy'] }
        : { orderBy?: PlayerTrainingLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerTrainingLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerTrainingLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerTrainingLevel model
   */
  readonly fields: PlayerTrainingLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerTrainingLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerTrainingLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerTrainingLevel model
   */
  interface PlayerTrainingLevelFieldRefs {
    readonly id: FieldRef<"PlayerTrainingLevel", 'String'>
    readonly userId: FieldRef<"PlayerTrainingLevel", 'String'>
    readonly playerTrainingProgramId: FieldRef<"PlayerTrainingLevel", 'String'>
    readonly trainingProgramLevelIndex: FieldRef<"PlayerTrainingLevel", 'Int'>
    readonly isCompleted: FieldRef<"PlayerTrainingLevel", 'Boolean'>
    readonly dateCompleted: FieldRef<"PlayerTrainingLevel", 'DateTime'>
    readonly dateCreated: FieldRef<"PlayerTrainingLevel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerTrainingLevel findUnique
   */
  export type PlayerTrainingLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingLevel
     */
    select?: PlayerTrainingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingLevel
     */
    omit?: PlayerTrainingLevelOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingLevel to fetch.
     */
    where: PlayerTrainingLevelWhereUniqueInput
  }

  /**
   * PlayerTrainingLevel findUniqueOrThrow
   */
  export type PlayerTrainingLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingLevel
     */
    select?: PlayerTrainingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingLevel
     */
    omit?: PlayerTrainingLevelOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingLevel to fetch.
     */
    where: PlayerTrainingLevelWhereUniqueInput
  }

  /**
   * PlayerTrainingLevel findFirst
   */
  export type PlayerTrainingLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingLevel
     */
    select?: PlayerTrainingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingLevel
     */
    omit?: PlayerTrainingLevelOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingLevel to fetch.
     */
    where?: PlayerTrainingLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingLevels to fetch.
     */
    orderBy?: PlayerTrainingLevelOrderByWithRelationInput | PlayerTrainingLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTrainingLevels.
     */
    cursor?: PlayerTrainingLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainingLevels.
     */
    distinct?: PlayerTrainingLevelScalarFieldEnum | PlayerTrainingLevelScalarFieldEnum[]
  }

  /**
   * PlayerTrainingLevel findFirstOrThrow
   */
  export type PlayerTrainingLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingLevel
     */
    select?: PlayerTrainingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingLevel
     */
    omit?: PlayerTrainingLevelOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingLevel to fetch.
     */
    where?: PlayerTrainingLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingLevels to fetch.
     */
    orderBy?: PlayerTrainingLevelOrderByWithRelationInput | PlayerTrainingLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTrainingLevels.
     */
    cursor?: PlayerTrainingLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainingLevels.
     */
    distinct?: PlayerTrainingLevelScalarFieldEnum | PlayerTrainingLevelScalarFieldEnum[]
  }

  /**
   * PlayerTrainingLevel findMany
   */
  export type PlayerTrainingLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingLevel
     */
    select?: PlayerTrainingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingLevel
     */
    omit?: PlayerTrainingLevelOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingLevels to fetch.
     */
    where?: PlayerTrainingLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingLevels to fetch.
     */
    orderBy?: PlayerTrainingLevelOrderByWithRelationInput | PlayerTrainingLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerTrainingLevels.
     */
    cursor?: PlayerTrainingLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainingLevels.
     */
    distinct?: PlayerTrainingLevelScalarFieldEnum | PlayerTrainingLevelScalarFieldEnum[]
  }

  /**
   * PlayerTrainingLevel create
   */
  export type PlayerTrainingLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingLevel
     */
    select?: PlayerTrainingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingLevel
     */
    omit?: PlayerTrainingLevelOmit<ExtArgs> | null
    /**
     * The data needed to create a PlayerTrainingLevel.
     */
    data: XOR<PlayerTrainingLevelCreateInput, PlayerTrainingLevelUncheckedCreateInput>
  }

  /**
   * PlayerTrainingLevel createMany
   */
  export type PlayerTrainingLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerTrainingLevels.
     */
    data: PlayerTrainingLevelCreateManyInput | PlayerTrainingLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerTrainingLevel update
   */
  export type PlayerTrainingLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingLevel
     */
    select?: PlayerTrainingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingLevel
     */
    omit?: PlayerTrainingLevelOmit<ExtArgs> | null
    /**
     * The data needed to update a PlayerTrainingLevel.
     */
    data: XOR<PlayerTrainingLevelUpdateInput, PlayerTrainingLevelUncheckedUpdateInput>
    /**
     * Choose, which PlayerTrainingLevel to update.
     */
    where: PlayerTrainingLevelWhereUniqueInput
  }

  /**
   * PlayerTrainingLevel updateMany
   */
  export type PlayerTrainingLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerTrainingLevels.
     */
    data: XOR<PlayerTrainingLevelUpdateManyMutationInput, PlayerTrainingLevelUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTrainingLevels to update
     */
    where?: PlayerTrainingLevelWhereInput
    /**
     * Limit how many PlayerTrainingLevels to update.
     */
    limit?: number
  }

  /**
   * PlayerTrainingLevel upsert
   */
  export type PlayerTrainingLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingLevel
     */
    select?: PlayerTrainingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingLevel
     */
    omit?: PlayerTrainingLevelOmit<ExtArgs> | null
    /**
     * The filter to search for the PlayerTrainingLevel to update in case it exists.
     */
    where: PlayerTrainingLevelWhereUniqueInput
    /**
     * In case the PlayerTrainingLevel found by the `where` argument doesn't exist, create a new PlayerTrainingLevel with this data.
     */
    create: XOR<PlayerTrainingLevelCreateInput, PlayerTrainingLevelUncheckedCreateInput>
    /**
     * In case the PlayerTrainingLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerTrainingLevelUpdateInput, PlayerTrainingLevelUncheckedUpdateInput>
  }

  /**
   * PlayerTrainingLevel delete
   */
  export type PlayerTrainingLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingLevel
     */
    select?: PlayerTrainingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingLevel
     */
    omit?: PlayerTrainingLevelOmit<ExtArgs> | null
    /**
     * Filter which PlayerTrainingLevel to delete.
     */
    where: PlayerTrainingLevelWhereUniqueInput
  }

  /**
   * PlayerTrainingLevel deleteMany
   */
  export type PlayerTrainingLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTrainingLevels to delete
     */
    where?: PlayerTrainingLevelWhereInput
    /**
     * Limit how many PlayerTrainingLevels to delete.
     */
    limit?: number
  }

  /**
   * PlayerTrainingLevel without action
   */
  export type PlayerTrainingLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingLevel
     */
    select?: PlayerTrainingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingLevel
     */
    omit?: PlayerTrainingLevelOmit<ExtArgs> | null
  }


  /**
   * Model PlayerTrainingProgram
   */

  export type AggregatePlayerTrainingProgram = {
    _count: PlayerTrainingProgramCountAggregateOutputType | null
    _min: PlayerTrainingProgramMinAggregateOutputType | null
    _max: PlayerTrainingProgramMaxAggregateOutputType | null
  }

  export type PlayerTrainingProgramMinAggregateOutputType = {
    id: string | null
    userId: string | null
    trainingProgramId: string | null
    isCompleted: boolean | null
    isLocked: boolean | null
    isLiked: boolean | null
    isPremium: boolean | null
    subscriptionType: $Enums.SubscriptionType | null
    subscriptionId: string | null
    dateCompleted: Date | null
    dateCreated: Date | null
  }

  export type PlayerTrainingProgramMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    trainingProgramId: string | null
    isCompleted: boolean | null
    isLocked: boolean | null
    isLiked: boolean | null
    isPremium: boolean | null
    subscriptionType: $Enums.SubscriptionType | null
    subscriptionId: string | null
    dateCompleted: Date | null
    dateCreated: Date | null
  }

  export type PlayerTrainingProgramCountAggregateOutputType = {
    id: number
    userId: number
    trainingProgramId: number
    isCompleted: number
    isLocked: number
    isLiked: number
    isPremium: number
    subscriptionType: number
    subscriptionId: number
    dateCompleted: number
    dateCreated: number
    _all: number
  }


  export type PlayerTrainingProgramMinAggregateInputType = {
    id?: true
    userId?: true
    trainingProgramId?: true
    isCompleted?: true
    isLocked?: true
    isLiked?: true
    isPremium?: true
    subscriptionType?: true
    subscriptionId?: true
    dateCompleted?: true
    dateCreated?: true
  }

  export type PlayerTrainingProgramMaxAggregateInputType = {
    id?: true
    userId?: true
    trainingProgramId?: true
    isCompleted?: true
    isLocked?: true
    isLiked?: true
    isPremium?: true
    subscriptionType?: true
    subscriptionId?: true
    dateCompleted?: true
    dateCreated?: true
  }

  export type PlayerTrainingProgramCountAggregateInputType = {
    id?: true
    userId?: true
    trainingProgramId?: true
    isCompleted?: true
    isLocked?: true
    isLiked?: true
    isPremium?: true
    subscriptionType?: true
    subscriptionId?: true
    dateCompleted?: true
    dateCreated?: true
    _all?: true
  }

  export type PlayerTrainingProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTrainingProgram to aggregate.
     */
    where?: PlayerTrainingProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingPrograms to fetch.
     */
    orderBy?: PlayerTrainingProgramOrderByWithRelationInput | PlayerTrainingProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerTrainingProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerTrainingPrograms
    **/
    _count?: true | PlayerTrainingProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerTrainingProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerTrainingProgramMaxAggregateInputType
  }

  export type GetPlayerTrainingProgramAggregateType<T extends PlayerTrainingProgramAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerTrainingProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerTrainingProgram[P]>
      : GetScalarType<T[P], AggregatePlayerTrainingProgram[P]>
  }




  export type PlayerTrainingProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTrainingProgramWhereInput
    orderBy?: PlayerTrainingProgramOrderByWithAggregationInput | PlayerTrainingProgramOrderByWithAggregationInput[]
    by: PlayerTrainingProgramScalarFieldEnum[] | PlayerTrainingProgramScalarFieldEnum
    having?: PlayerTrainingProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerTrainingProgramCountAggregateInputType | true
    _min?: PlayerTrainingProgramMinAggregateInputType
    _max?: PlayerTrainingProgramMaxAggregateInputType
  }

  export type PlayerTrainingProgramGroupByOutputType = {
    id: string
    userId: string
    trainingProgramId: string
    isCompleted: boolean
    isLocked: boolean
    isLiked: boolean
    isPremium: boolean
    subscriptionType: $Enums.SubscriptionType
    subscriptionId: string | null
    dateCompleted: Date | null
    dateCreated: Date
    _count: PlayerTrainingProgramCountAggregateOutputType | null
    _min: PlayerTrainingProgramMinAggregateOutputType | null
    _max: PlayerTrainingProgramMaxAggregateOutputType | null
  }

  type GetPlayerTrainingProgramGroupByPayload<T extends PlayerTrainingProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerTrainingProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerTrainingProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerTrainingProgramGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerTrainingProgramGroupByOutputType[P]>
        }
      >
    >


  export type PlayerTrainingProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trainingProgramId?: boolean
    isCompleted?: boolean
    isLocked?: boolean
    isLiked?: boolean
    isPremium?: boolean
    subscriptionType?: boolean
    subscriptionId?: boolean
    dateCompleted?: boolean
    dateCreated?: boolean
  }, ExtArgs["result"]["playerTrainingProgram"]>



  export type PlayerTrainingProgramSelectScalar = {
    id?: boolean
    userId?: boolean
    trainingProgramId?: boolean
    isCompleted?: boolean
    isLocked?: boolean
    isLiked?: boolean
    isPremium?: boolean
    subscriptionType?: boolean
    subscriptionId?: boolean
    dateCompleted?: boolean
    dateCreated?: boolean
  }

  export type PlayerTrainingProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "trainingProgramId" | "isCompleted" | "isLocked" | "isLiked" | "isPremium" | "subscriptionType" | "subscriptionId" | "dateCompleted" | "dateCreated", ExtArgs["result"]["playerTrainingProgram"]>

  export type $PlayerTrainingProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerTrainingProgram"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      trainingProgramId: string
      isCompleted: boolean
      isLocked: boolean
      isLiked: boolean
      isPremium: boolean
      subscriptionType: $Enums.SubscriptionType
      subscriptionId: string | null
      dateCompleted: Date | null
      dateCreated: Date
    }, ExtArgs["result"]["playerTrainingProgram"]>
    composites: {}
  }

  type PlayerTrainingProgramGetPayload<S extends boolean | null | undefined | PlayerTrainingProgramDefaultArgs> = $Result.GetResult<Prisma.$PlayerTrainingProgramPayload, S>

  type PlayerTrainingProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerTrainingProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerTrainingProgramCountAggregateInputType | true
    }

  export interface PlayerTrainingProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerTrainingProgram'], meta: { name: 'PlayerTrainingProgram' } }
    /**
     * Find zero or one PlayerTrainingProgram that matches the filter.
     * @param {PlayerTrainingProgramFindUniqueArgs} args - Arguments to find a PlayerTrainingProgram
     * @example
     * // Get one PlayerTrainingProgram
     * const playerTrainingProgram = await prisma.playerTrainingProgram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerTrainingProgramFindUniqueArgs>(args: SelectSubset<T, PlayerTrainingProgramFindUniqueArgs<ExtArgs>>): Prisma__PlayerTrainingProgramClient<$Result.GetResult<Prisma.$PlayerTrainingProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerTrainingProgram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerTrainingProgramFindUniqueOrThrowArgs} args - Arguments to find a PlayerTrainingProgram
     * @example
     * // Get one PlayerTrainingProgram
     * const playerTrainingProgram = await prisma.playerTrainingProgram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerTrainingProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerTrainingProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerTrainingProgramClient<$Result.GetResult<Prisma.$PlayerTrainingProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTrainingProgram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingProgramFindFirstArgs} args - Arguments to find a PlayerTrainingProgram
     * @example
     * // Get one PlayerTrainingProgram
     * const playerTrainingProgram = await prisma.playerTrainingProgram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerTrainingProgramFindFirstArgs>(args?: SelectSubset<T, PlayerTrainingProgramFindFirstArgs<ExtArgs>>): Prisma__PlayerTrainingProgramClient<$Result.GetResult<Prisma.$PlayerTrainingProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTrainingProgram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingProgramFindFirstOrThrowArgs} args - Arguments to find a PlayerTrainingProgram
     * @example
     * // Get one PlayerTrainingProgram
     * const playerTrainingProgram = await prisma.playerTrainingProgram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerTrainingProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerTrainingProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerTrainingProgramClient<$Result.GetResult<Prisma.$PlayerTrainingProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerTrainingPrograms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerTrainingPrograms
     * const playerTrainingPrograms = await prisma.playerTrainingProgram.findMany()
     * 
     * // Get first 10 PlayerTrainingPrograms
     * const playerTrainingPrograms = await prisma.playerTrainingProgram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerTrainingProgramWithIdOnly = await prisma.playerTrainingProgram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerTrainingProgramFindManyArgs>(args?: SelectSubset<T, PlayerTrainingProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTrainingProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerTrainingProgram.
     * @param {PlayerTrainingProgramCreateArgs} args - Arguments to create a PlayerTrainingProgram.
     * @example
     * // Create one PlayerTrainingProgram
     * const PlayerTrainingProgram = await prisma.playerTrainingProgram.create({
     *   data: {
     *     // ... data to create a PlayerTrainingProgram
     *   }
     * })
     * 
     */
    create<T extends PlayerTrainingProgramCreateArgs>(args: SelectSubset<T, PlayerTrainingProgramCreateArgs<ExtArgs>>): Prisma__PlayerTrainingProgramClient<$Result.GetResult<Prisma.$PlayerTrainingProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerTrainingPrograms.
     * @param {PlayerTrainingProgramCreateManyArgs} args - Arguments to create many PlayerTrainingPrograms.
     * @example
     * // Create many PlayerTrainingPrograms
     * const playerTrainingProgram = await prisma.playerTrainingProgram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerTrainingProgramCreateManyArgs>(args?: SelectSubset<T, PlayerTrainingProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlayerTrainingProgram.
     * @param {PlayerTrainingProgramDeleteArgs} args - Arguments to delete one PlayerTrainingProgram.
     * @example
     * // Delete one PlayerTrainingProgram
     * const PlayerTrainingProgram = await prisma.playerTrainingProgram.delete({
     *   where: {
     *     // ... filter to delete one PlayerTrainingProgram
     *   }
     * })
     * 
     */
    delete<T extends PlayerTrainingProgramDeleteArgs>(args: SelectSubset<T, PlayerTrainingProgramDeleteArgs<ExtArgs>>): Prisma__PlayerTrainingProgramClient<$Result.GetResult<Prisma.$PlayerTrainingProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerTrainingProgram.
     * @param {PlayerTrainingProgramUpdateArgs} args - Arguments to update one PlayerTrainingProgram.
     * @example
     * // Update one PlayerTrainingProgram
     * const playerTrainingProgram = await prisma.playerTrainingProgram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerTrainingProgramUpdateArgs>(args: SelectSubset<T, PlayerTrainingProgramUpdateArgs<ExtArgs>>): Prisma__PlayerTrainingProgramClient<$Result.GetResult<Prisma.$PlayerTrainingProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerTrainingPrograms.
     * @param {PlayerTrainingProgramDeleteManyArgs} args - Arguments to filter PlayerTrainingPrograms to delete.
     * @example
     * // Delete a few PlayerTrainingPrograms
     * const { count } = await prisma.playerTrainingProgram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerTrainingProgramDeleteManyArgs>(args?: SelectSubset<T, PlayerTrainingProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTrainingPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerTrainingPrograms
     * const playerTrainingProgram = await prisma.playerTrainingProgram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerTrainingProgramUpdateManyArgs>(args: SelectSubset<T, PlayerTrainingProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayerTrainingProgram.
     * @param {PlayerTrainingProgramUpsertArgs} args - Arguments to update or create a PlayerTrainingProgram.
     * @example
     * // Update or create a PlayerTrainingProgram
     * const playerTrainingProgram = await prisma.playerTrainingProgram.upsert({
     *   create: {
     *     // ... data to create a PlayerTrainingProgram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerTrainingProgram we want to update
     *   }
     * })
     */
    upsert<T extends PlayerTrainingProgramUpsertArgs>(args: SelectSubset<T, PlayerTrainingProgramUpsertArgs<ExtArgs>>): Prisma__PlayerTrainingProgramClient<$Result.GetResult<Prisma.$PlayerTrainingProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerTrainingPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingProgramCountArgs} args - Arguments to filter PlayerTrainingPrograms to count.
     * @example
     * // Count the number of PlayerTrainingPrograms
     * const count = await prisma.playerTrainingProgram.count({
     *   where: {
     *     // ... the filter for the PlayerTrainingPrograms we want to count
     *   }
     * })
    **/
    count<T extends PlayerTrainingProgramCountArgs>(
      args?: Subset<T, PlayerTrainingProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerTrainingProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerTrainingProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerTrainingProgramAggregateArgs>(args: Subset<T, PlayerTrainingProgramAggregateArgs>): Prisma.PrismaPromise<GetPlayerTrainingProgramAggregateType<T>>

    /**
     * Group by PlayerTrainingProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTrainingProgramGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerTrainingProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerTrainingProgramGroupByArgs['orderBy'] }
        : { orderBy?: PlayerTrainingProgramGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerTrainingProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerTrainingProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerTrainingProgram model
   */
  readonly fields: PlayerTrainingProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerTrainingProgram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerTrainingProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerTrainingProgram model
   */
  interface PlayerTrainingProgramFieldRefs {
    readonly id: FieldRef<"PlayerTrainingProgram", 'String'>
    readonly userId: FieldRef<"PlayerTrainingProgram", 'String'>
    readonly trainingProgramId: FieldRef<"PlayerTrainingProgram", 'String'>
    readonly isCompleted: FieldRef<"PlayerTrainingProgram", 'Boolean'>
    readonly isLocked: FieldRef<"PlayerTrainingProgram", 'Boolean'>
    readonly isLiked: FieldRef<"PlayerTrainingProgram", 'Boolean'>
    readonly isPremium: FieldRef<"PlayerTrainingProgram", 'Boolean'>
    readonly subscriptionType: FieldRef<"PlayerTrainingProgram", 'SubscriptionType'>
    readonly subscriptionId: FieldRef<"PlayerTrainingProgram", 'String'>
    readonly dateCompleted: FieldRef<"PlayerTrainingProgram", 'DateTime'>
    readonly dateCreated: FieldRef<"PlayerTrainingProgram", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerTrainingProgram findUnique
   */
  export type PlayerTrainingProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingProgram
     */
    select?: PlayerTrainingProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingProgram
     */
    omit?: PlayerTrainingProgramOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingProgram to fetch.
     */
    where: PlayerTrainingProgramWhereUniqueInput
  }

  /**
   * PlayerTrainingProgram findUniqueOrThrow
   */
  export type PlayerTrainingProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingProgram
     */
    select?: PlayerTrainingProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingProgram
     */
    omit?: PlayerTrainingProgramOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingProgram to fetch.
     */
    where: PlayerTrainingProgramWhereUniqueInput
  }

  /**
   * PlayerTrainingProgram findFirst
   */
  export type PlayerTrainingProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingProgram
     */
    select?: PlayerTrainingProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingProgram
     */
    omit?: PlayerTrainingProgramOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingProgram to fetch.
     */
    where?: PlayerTrainingProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingPrograms to fetch.
     */
    orderBy?: PlayerTrainingProgramOrderByWithRelationInput | PlayerTrainingProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTrainingPrograms.
     */
    cursor?: PlayerTrainingProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainingPrograms.
     */
    distinct?: PlayerTrainingProgramScalarFieldEnum | PlayerTrainingProgramScalarFieldEnum[]
  }

  /**
   * PlayerTrainingProgram findFirstOrThrow
   */
  export type PlayerTrainingProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingProgram
     */
    select?: PlayerTrainingProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingProgram
     */
    omit?: PlayerTrainingProgramOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingProgram to fetch.
     */
    where?: PlayerTrainingProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingPrograms to fetch.
     */
    orderBy?: PlayerTrainingProgramOrderByWithRelationInput | PlayerTrainingProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTrainingPrograms.
     */
    cursor?: PlayerTrainingProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainingPrograms.
     */
    distinct?: PlayerTrainingProgramScalarFieldEnum | PlayerTrainingProgramScalarFieldEnum[]
  }

  /**
   * PlayerTrainingProgram findMany
   */
  export type PlayerTrainingProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingProgram
     */
    select?: PlayerTrainingProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingProgram
     */
    omit?: PlayerTrainingProgramOmit<ExtArgs> | null
    /**
     * Filter, which PlayerTrainingPrograms to fetch.
     */
    where?: PlayerTrainingProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTrainingPrograms to fetch.
     */
    orderBy?: PlayerTrainingProgramOrderByWithRelationInput | PlayerTrainingProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerTrainingPrograms.
     */
    cursor?: PlayerTrainingProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTrainingPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTrainingPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTrainingPrograms.
     */
    distinct?: PlayerTrainingProgramScalarFieldEnum | PlayerTrainingProgramScalarFieldEnum[]
  }

  /**
   * PlayerTrainingProgram create
   */
  export type PlayerTrainingProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingProgram
     */
    select?: PlayerTrainingProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingProgram
     */
    omit?: PlayerTrainingProgramOmit<ExtArgs> | null
    /**
     * The data needed to create a PlayerTrainingProgram.
     */
    data: XOR<PlayerTrainingProgramCreateInput, PlayerTrainingProgramUncheckedCreateInput>
  }

  /**
   * PlayerTrainingProgram createMany
   */
  export type PlayerTrainingProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerTrainingPrograms.
     */
    data: PlayerTrainingProgramCreateManyInput | PlayerTrainingProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerTrainingProgram update
   */
  export type PlayerTrainingProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingProgram
     */
    select?: PlayerTrainingProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingProgram
     */
    omit?: PlayerTrainingProgramOmit<ExtArgs> | null
    /**
     * The data needed to update a PlayerTrainingProgram.
     */
    data: XOR<PlayerTrainingProgramUpdateInput, PlayerTrainingProgramUncheckedUpdateInput>
    /**
     * Choose, which PlayerTrainingProgram to update.
     */
    where: PlayerTrainingProgramWhereUniqueInput
  }

  /**
   * PlayerTrainingProgram updateMany
   */
  export type PlayerTrainingProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerTrainingPrograms.
     */
    data: XOR<PlayerTrainingProgramUpdateManyMutationInput, PlayerTrainingProgramUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTrainingPrograms to update
     */
    where?: PlayerTrainingProgramWhereInput
    /**
     * Limit how many PlayerTrainingPrograms to update.
     */
    limit?: number
  }

  /**
   * PlayerTrainingProgram upsert
   */
  export type PlayerTrainingProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingProgram
     */
    select?: PlayerTrainingProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingProgram
     */
    omit?: PlayerTrainingProgramOmit<ExtArgs> | null
    /**
     * The filter to search for the PlayerTrainingProgram to update in case it exists.
     */
    where: PlayerTrainingProgramWhereUniqueInput
    /**
     * In case the PlayerTrainingProgram found by the `where` argument doesn't exist, create a new PlayerTrainingProgram with this data.
     */
    create: XOR<PlayerTrainingProgramCreateInput, PlayerTrainingProgramUncheckedCreateInput>
    /**
     * In case the PlayerTrainingProgram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerTrainingProgramUpdateInput, PlayerTrainingProgramUncheckedUpdateInput>
  }

  /**
   * PlayerTrainingProgram delete
   */
  export type PlayerTrainingProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingProgram
     */
    select?: PlayerTrainingProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingProgram
     */
    omit?: PlayerTrainingProgramOmit<ExtArgs> | null
    /**
     * Filter which PlayerTrainingProgram to delete.
     */
    where: PlayerTrainingProgramWhereUniqueInput
  }

  /**
   * PlayerTrainingProgram deleteMany
   */
  export type PlayerTrainingProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTrainingPrograms to delete
     */
    where?: PlayerTrainingProgramWhereInput
    /**
     * Limit how many PlayerTrainingPrograms to delete.
     */
    limit?: number
  }

  /**
   * PlayerTrainingProgram without action
   */
  export type PlayerTrainingProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTrainingProgram
     */
    select?: PlayerTrainingProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTrainingProgram
     */
    omit?: PlayerTrainingProgramOmit<ExtArgs> | null
  }


  /**
   * Model PlayerSubscription
   */

  export type AggregatePlayerSubscription = {
    _count: PlayerSubscriptionCountAggregateOutputType | null
    _min: PlayerSubscriptionMinAggregateOutputType | null
    _max: PlayerSubscriptionMaxAggregateOutputType | null
  }

  export type PlayerSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tier: $Enums.SubscriptionTier | null
    status: $Enums.SubscriptionRecordStatus | null
    startDate: Date | null
    endDate: Date | null
    autoRenew: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tier: $Enums.SubscriptionTier | null
    status: $Enums.SubscriptionRecordStatus | null
    startDate: Date | null
    endDate: Date | null
    autoRenew: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    tier: number
    status: number
    startDate: number
    endDate: number
    autoRenew: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    tier?: true
    status?: true
    startDate?: true
    endDate?: true
    autoRenew?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    tier?: true
    status?: true
    startDate?: true
    endDate?: true
    autoRenew?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    tier?: true
    status?: true
    startDate?: true
    endDate?: true
    autoRenew?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerSubscription to aggregate.
     */
    where?: PlayerSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSubscriptions to fetch.
     */
    orderBy?: PlayerSubscriptionOrderByWithRelationInput | PlayerSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerSubscriptions
    **/
    _count?: true | PlayerSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerSubscriptionMaxAggregateInputType
  }

  export type GetPlayerSubscriptionAggregateType<T extends PlayerSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerSubscription[P]>
      : GetScalarType<T[P], AggregatePlayerSubscription[P]>
  }




  export type PlayerSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerSubscriptionWhereInput
    orderBy?: PlayerSubscriptionOrderByWithAggregationInput | PlayerSubscriptionOrderByWithAggregationInput[]
    by: PlayerSubscriptionScalarFieldEnum[] | PlayerSubscriptionScalarFieldEnum
    having?: PlayerSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerSubscriptionCountAggregateInputType | true
    _min?: PlayerSubscriptionMinAggregateInputType
    _max?: PlayerSubscriptionMaxAggregateInputType
  }

  export type PlayerSubscriptionGroupByOutputType = {
    id: string
    userId: string
    tier: $Enums.SubscriptionTier
    status: $Enums.SubscriptionRecordStatus
    startDate: Date
    endDate: Date | null
    autoRenew: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlayerSubscriptionCountAggregateOutputType | null
    _min: PlayerSubscriptionMinAggregateOutputType | null
    _max: PlayerSubscriptionMaxAggregateOutputType | null
  }

  type GetPlayerSubscriptionGroupByPayload<T extends PlayerSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tier?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    autoRenew?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerSubscription"]>



  export type PlayerSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    tier?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    autoRenew?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tier" | "status" | "startDate" | "endDate" | "autoRenew" | "createdAt" | "updatedAt", ExtArgs["result"]["playerSubscription"]>
  export type PlayerSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlayerSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tier: $Enums.SubscriptionTier
      status: $Enums.SubscriptionRecordStatus
      startDate: Date
      endDate: Date | null
      autoRenew: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playerSubscription"]>
    composites: {}
  }

  type PlayerSubscriptionGetPayload<S extends boolean | null | undefined | PlayerSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$PlayerSubscriptionPayload, S>

  type PlayerSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerSubscriptionCountAggregateInputType | true
    }

  export interface PlayerSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerSubscription'], meta: { name: 'PlayerSubscription' } }
    /**
     * Find zero or one PlayerSubscription that matches the filter.
     * @param {PlayerSubscriptionFindUniqueArgs} args - Arguments to find a PlayerSubscription
     * @example
     * // Get one PlayerSubscription
     * const playerSubscription = await prisma.playerSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerSubscriptionFindUniqueArgs>(args: SelectSubset<T, PlayerSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__PlayerSubscriptionClient<$Result.GetResult<Prisma.$PlayerSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a PlayerSubscription
     * @example
     * // Get one PlayerSubscription
     * const playerSubscription = await prisma.playerSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerSubscriptionClient<$Result.GetResult<Prisma.$PlayerSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSubscriptionFindFirstArgs} args - Arguments to find a PlayerSubscription
     * @example
     * // Get one PlayerSubscription
     * const playerSubscription = await prisma.playerSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerSubscriptionFindFirstArgs>(args?: SelectSubset<T, PlayerSubscriptionFindFirstArgs<ExtArgs>>): Prisma__PlayerSubscriptionClient<$Result.GetResult<Prisma.$PlayerSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSubscriptionFindFirstOrThrowArgs} args - Arguments to find a PlayerSubscription
     * @example
     * // Get one PlayerSubscription
     * const playerSubscription = await prisma.playerSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerSubscriptionClient<$Result.GetResult<Prisma.$PlayerSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerSubscriptions
     * const playerSubscriptions = await prisma.playerSubscription.findMany()
     * 
     * // Get first 10 PlayerSubscriptions
     * const playerSubscriptions = await prisma.playerSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerSubscriptionWithIdOnly = await prisma.playerSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerSubscriptionFindManyArgs>(args?: SelectSubset<T, PlayerSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerSubscription.
     * @param {PlayerSubscriptionCreateArgs} args - Arguments to create a PlayerSubscription.
     * @example
     * // Create one PlayerSubscription
     * const PlayerSubscription = await prisma.playerSubscription.create({
     *   data: {
     *     // ... data to create a PlayerSubscription
     *   }
     * })
     * 
     */
    create<T extends PlayerSubscriptionCreateArgs>(args: SelectSubset<T, PlayerSubscriptionCreateArgs<ExtArgs>>): Prisma__PlayerSubscriptionClient<$Result.GetResult<Prisma.$PlayerSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerSubscriptions.
     * @param {PlayerSubscriptionCreateManyArgs} args - Arguments to create many PlayerSubscriptions.
     * @example
     * // Create many PlayerSubscriptions
     * const playerSubscription = await prisma.playerSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerSubscriptionCreateManyArgs>(args?: SelectSubset<T, PlayerSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlayerSubscription.
     * @param {PlayerSubscriptionDeleteArgs} args - Arguments to delete one PlayerSubscription.
     * @example
     * // Delete one PlayerSubscription
     * const PlayerSubscription = await prisma.playerSubscription.delete({
     *   where: {
     *     // ... filter to delete one PlayerSubscription
     *   }
     * })
     * 
     */
    delete<T extends PlayerSubscriptionDeleteArgs>(args: SelectSubset<T, PlayerSubscriptionDeleteArgs<ExtArgs>>): Prisma__PlayerSubscriptionClient<$Result.GetResult<Prisma.$PlayerSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerSubscription.
     * @param {PlayerSubscriptionUpdateArgs} args - Arguments to update one PlayerSubscription.
     * @example
     * // Update one PlayerSubscription
     * const playerSubscription = await prisma.playerSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerSubscriptionUpdateArgs>(args: SelectSubset<T, PlayerSubscriptionUpdateArgs<ExtArgs>>): Prisma__PlayerSubscriptionClient<$Result.GetResult<Prisma.$PlayerSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerSubscriptions.
     * @param {PlayerSubscriptionDeleteManyArgs} args - Arguments to filter PlayerSubscriptions to delete.
     * @example
     * // Delete a few PlayerSubscriptions
     * const { count } = await prisma.playerSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerSubscriptionDeleteManyArgs>(args?: SelectSubset<T, PlayerSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerSubscriptions
     * const playerSubscription = await prisma.playerSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerSubscriptionUpdateManyArgs>(args: SelectSubset<T, PlayerSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayerSubscription.
     * @param {PlayerSubscriptionUpsertArgs} args - Arguments to update or create a PlayerSubscription.
     * @example
     * // Update or create a PlayerSubscription
     * const playerSubscription = await prisma.playerSubscription.upsert({
     *   create: {
     *     // ... data to create a PlayerSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerSubscription we want to update
     *   }
     * })
     */
    upsert<T extends PlayerSubscriptionUpsertArgs>(args: SelectSubset<T, PlayerSubscriptionUpsertArgs<ExtArgs>>): Prisma__PlayerSubscriptionClient<$Result.GetResult<Prisma.$PlayerSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSubscriptionCountArgs} args - Arguments to filter PlayerSubscriptions to count.
     * @example
     * // Count the number of PlayerSubscriptions
     * const count = await prisma.playerSubscription.count({
     *   where: {
     *     // ... the filter for the PlayerSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends PlayerSubscriptionCountArgs>(
      args?: Subset<T, PlayerSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerSubscriptionAggregateArgs>(args: Subset<T, PlayerSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetPlayerSubscriptionAggregateType<T>>

    /**
     * Group by PlayerSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: PlayerSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerSubscription model
   */
  readonly fields: PlayerSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerSubscription model
   */
  interface PlayerSubscriptionFieldRefs {
    readonly id: FieldRef<"PlayerSubscription", 'String'>
    readonly userId: FieldRef<"PlayerSubscription", 'String'>
    readonly tier: FieldRef<"PlayerSubscription", 'SubscriptionTier'>
    readonly status: FieldRef<"PlayerSubscription", 'SubscriptionRecordStatus'>
    readonly startDate: FieldRef<"PlayerSubscription", 'DateTime'>
    readonly endDate: FieldRef<"PlayerSubscription", 'DateTime'>
    readonly autoRenew: FieldRef<"PlayerSubscription", 'Boolean'>
    readonly createdAt: FieldRef<"PlayerSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"PlayerSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerSubscription findUnique
   */
  export type PlayerSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSubscription
     */
    select?: PlayerSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSubscription
     */
    omit?: PlayerSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSubscription to fetch.
     */
    where: PlayerSubscriptionWhereUniqueInput
  }

  /**
   * PlayerSubscription findUniqueOrThrow
   */
  export type PlayerSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSubscription
     */
    select?: PlayerSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSubscription
     */
    omit?: PlayerSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSubscription to fetch.
     */
    where: PlayerSubscriptionWhereUniqueInput
  }

  /**
   * PlayerSubscription findFirst
   */
  export type PlayerSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSubscription
     */
    select?: PlayerSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSubscription
     */
    omit?: PlayerSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSubscription to fetch.
     */
    where?: PlayerSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSubscriptions to fetch.
     */
    orderBy?: PlayerSubscriptionOrderByWithRelationInput | PlayerSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSubscriptions.
     */
    cursor?: PlayerSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSubscriptions.
     */
    distinct?: PlayerSubscriptionScalarFieldEnum | PlayerSubscriptionScalarFieldEnum[]
  }

  /**
   * PlayerSubscription findFirstOrThrow
   */
  export type PlayerSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSubscription
     */
    select?: PlayerSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSubscription
     */
    omit?: PlayerSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSubscription to fetch.
     */
    where?: PlayerSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSubscriptions to fetch.
     */
    orderBy?: PlayerSubscriptionOrderByWithRelationInput | PlayerSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSubscriptions.
     */
    cursor?: PlayerSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSubscriptions.
     */
    distinct?: PlayerSubscriptionScalarFieldEnum | PlayerSubscriptionScalarFieldEnum[]
  }

  /**
   * PlayerSubscription findMany
   */
  export type PlayerSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSubscription
     */
    select?: PlayerSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSubscription
     */
    omit?: PlayerSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSubscriptions to fetch.
     */
    where?: PlayerSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSubscriptions to fetch.
     */
    orderBy?: PlayerSubscriptionOrderByWithRelationInput | PlayerSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerSubscriptions.
     */
    cursor?: PlayerSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSubscriptions.
     */
    distinct?: PlayerSubscriptionScalarFieldEnum | PlayerSubscriptionScalarFieldEnum[]
  }

  /**
   * PlayerSubscription create
   */
  export type PlayerSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSubscription
     */
    select?: PlayerSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSubscription
     */
    omit?: PlayerSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerSubscription.
     */
    data: XOR<PlayerSubscriptionCreateInput, PlayerSubscriptionUncheckedCreateInput>
  }

  /**
   * PlayerSubscription createMany
   */
  export type PlayerSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerSubscriptions.
     */
    data: PlayerSubscriptionCreateManyInput | PlayerSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerSubscription update
   */
  export type PlayerSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSubscription
     */
    select?: PlayerSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSubscription
     */
    omit?: PlayerSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerSubscription.
     */
    data: XOR<PlayerSubscriptionUpdateInput, PlayerSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which PlayerSubscription to update.
     */
    where: PlayerSubscriptionWhereUniqueInput
  }

  /**
   * PlayerSubscription updateMany
   */
  export type PlayerSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerSubscriptions.
     */
    data: XOR<PlayerSubscriptionUpdateManyMutationInput, PlayerSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which PlayerSubscriptions to update
     */
    where?: PlayerSubscriptionWhereInput
    /**
     * Limit how many PlayerSubscriptions to update.
     */
    limit?: number
  }

  /**
   * PlayerSubscription upsert
   */
  export type PlayerSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSubscription
     */
    select?: PlayerSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSubscription
     */
    omit?: PlayerSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerSubscription to update in case it exists.
     */
    where: PlayerSubscriptionWhereUniqueInput
    /**
     * In case the PlayerSubscription found by the `where` argument doesn't exist, create a new PlayerSubscription with this data.
     */
    create: XOR<PlayerSubscriptionCreateInput, PlayerSubscriptionUncheckedCreateInput>
    /**
     * In case the PlayerSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerSubscriptionUpdateInput, PlayerSubscriptionUncheckedUpdateInput>
  }

  /**
   * PlayerSubscription delete
   */
  export type PlayerSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSubscription
     */
    select?: PlayerSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSubscription
     */
    omit?: PlayerSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which PlayerSubscription to delete.
     */
    where: PlayerSubscriptionWhereUniqueInput
  }

  /**
   * PlayerSubscription deleteMany
   */
  export type PlayerSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerSubscriptions to delete
     */
    where?: PlayerSubscriptionWhereInput
    /**
     * Limit how many PlayerSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * PlayerSubscription without action
   */
  export type PlayerSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSubscription
     */
    select?: PlayerSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSubscription
     */
    omit?: PlayerSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model SessionBooking
   */

  export type AggregateSessionBooking = {
    _count: SessionBookingCountAggregateOutputType | null
    _min: SessionBookingMinAggregateOutputType | null
    _max: SessionBookingMaxAggregateOutputType | null
  }

  export type SessionBookingMinAggregateOutputType = {
    id: string | null
    playerUserId: string | null
    activityId: string | null
    bookedAt: Date | null
    bookingStatus: $Enums.BookingStatus | null
    attendanceStatus: $Enums.AttendanceStatus | null
    joinedAt: Date | null
    leftAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionBookingMaxAggregateOutputType = {
    id: string | null
    playerUserId: string | null
    activityId: string | null
    bookedAt: Date | null
    bookingStatus: $Enums.BookingStatus | null
    attendanceStatus: $Enums.AttendanceStatus | null
    joinedAt: Date | null
    leftAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionBookingCountAggregateOutputType = {
    id: number
    playerUserId: number
    activityId: number
    bookedAt: number
    bookingStatus: number
    attendanceStatus: number
    joinedAt: number
    leftAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionBookingMinAggregateInputType = {
    id?: true
    playerUserId?: true
    activityId?: true
    bookedAt?: true
    bookingStatus?: true
    attendanceStatus?: true
    joinedAt?: true
    leftAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionBookingMaxAggregateInputType = {
    id?: true
    playerUserId?: true
    activityId?: true
    bookedAt?: true
    bookingStatus?: true
    attendanceStatus?: true
    joinedAt?: true
    leftAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionBookingCountAggregateInputType = {
    id?: true
    playerUserId?: true
    activityId?: true
    bookedAt?: true
    bookingStatus?: true
    attendanceStatus?: true
    joinedAt?: true
    leftAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionBooking to aggregate.
     */
    where?: SessionBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionBookings to fetch.
     */
    orderBy?: SessionBookingOrderByWithRelationInput | SessionBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionBookings
    **/
    _count?: true | SessionBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionBookingMaxAggregateInputType
  }

  export type GetSessionBookingAggregateType<T extends SessionBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionBooking[P]>
      : GetScalarType<T[P], AggregateSessionBooking[P]>
  }




  export type SessionBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionBookingWhereInput
    orderBy?: SessionBookingOrderByWithAggregationInput | SessionBookingOrderByWithAggregationInput[]
    by: SessionBookingScalarFieldEnum[] | SessionBookingScalarFieldEnum
    having?: SessionBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionBookingCountAggregateInputType | true
    _min?: SessionBookingMinAggregateInputType
    _max?: SessionBookingMaxAggregateInputType
  }

  export type SessionBookingGroupByOutputType = {
    id: string
    playerUserId: string
    activityId: string
    bookedAt: Date
    bookingStatus: $Enums.BookingStatus
    attendanceStatus: $Enums.AttendanceStatus
    joinedAt: Date | null
    leftAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SessionBookingCountAggregateOutputType | null
    _min: SessionBookingMinAggregateOutputType | null
    _max: SessionBookingMaxAggregateOutputType | null
  }

  type GetSessionBookingGroupByPayload<T extends SessionBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionBookingGroupByOutputType[P]>
            : GetScalarType<T[P], SessionBookingGroupByOutputType[P]>
        }
      >
    >


  export type SessionBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerUserId?: boolean
    activityId?: boolean
    bookedAt?: boolean
    bookingStatus?: boolean
    attendanceStatus?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionBooking"]>



  export type SessionBookingSelectScalar = {
    id?: boolean
    playerUserId?: boolean
    activityId?: boolean
    bookedAt?: boolean
    bookingStatus?: boolean
    attendanceStatus?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerUserId" | "activityId" | "bookedAt" | "bookingStatus" | "attendanceStatus" | "joinedAt" | "leftAt" | "createdAt" | "updatedAt", ExtArgs["result"]["sessionBooking"]>
  export type SessionBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $SessionBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionBooking"
    objects: {
      player: Prisma.$UserPayload<ExtArgs>
      activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerUserId: string
      activityId: string
      bookedAt: Date
      bookingStatus: $Enums.BookingStatus
      attendanceStatus: $Enums.AttendanceStatus
      joinedAt: Date | null
      leftAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sessionBooking"]>
    composites: {}
  }

  type SessionBookingGetPayload<S extends boolean | null | undefined | SessionBookingDefaultArgs> = $Result.GetResult<Prisma.$SessionBookingPayload, S>

  type SessionBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionBookingCountAggregateInputType | true
    }

  export interface SessionBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionBooking'], meta: { name: 'SessionBooking' } }
    /**
     * Find zero or one SessionBooking that matches the filter.
     * @param {SessionBookingFindUniqueArgs} args - Arguments to find a SessionBooking
     * @example
     * // Get one SessionBooking
     * const sessionBooking = await prisma.sessionBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionBookingFindUniqueArgs>(args: SelectSubset<T, SessionBookingFindUniqueArgs<ExtArgs>>): Prisma__SessionBookingClient<$Result.GetResult<Prisma.$SessionBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionBookingFindUniqueOrThrowArgs} args - Arguments to find a SessionBooking
     * @example
     * // Get one SessionBooking
     * const sessionBooking = await prisma.sessionBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionBookingClient<$Result.GetResult<Prisma.$SessionBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionBookingFindFirstArgs} args - Arguments to find a SessionBooking
     * @example
     * // Get one SessionBooking
     * const sessionBooking = await prisma.sessionBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionBookingFindFirstArgs>(args?: SelectSubset<T, SessionBookingFindFirstArgs<ExtArgs>>): Prisma__SessionBookingClient<$Result.GetResult<Prisma.$SessionBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionBookingFindFirstOrThrowArgs} args - Arguments to find a SessionBooking
     * @example
     * // Get one SessionBooking
     * const sessionBooking = await prisma.sessionBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionBookingClient<$Result.GetResult<Prisma.$SessionBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionBookings
     * const sessionBookings = await prisma.sessionBooking.findMany()
     * 
     * // Get first 10 SessionBookings
     * const sessionBookings = await prisma.sessionBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionBookingWithIdOnly = await prisma.sessionBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionBookingFindManyArgs>(args?: SelectSubset<T, SessionBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionBooking.
     * @param {SessionBookingCreateArgs} args - Arguments to create a SessionBooking.
     * @example
     * // Create one SessionBooking
     * const SessionBooking = await prisma.sessionBooking.create({
     *   data: {
     *     // ... data to create a SessionBooking
     *   }
     * })
     * 
     */
    create<T extends SessionBookingCreateArgs>(args: SelectSubset<T, SessionBookingCreateArgs<ExtArgs>>): Prisma__SessionBookingClient<$Result.GetResult<Prisma.$SessionBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionBookings.
     * @param {SessionBookingCreateManyArgs} args - Arguments to create many SessionBookings.
     * @example
     * // Create many SessionBookings
     * const sessionBooking = await prisma.sessionBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionBookingCreateManyArgs>(args?: SelectSubset<T, SessionBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SessionBooking.
     * @param {SessionBookingDeleteArgs} args - Arguments to delete one SessionBooking.
     * @example
     * // Delete one SessionBooking
     * const SessionBooking = await prisma.sessionBooking.delete({
     *   where: {
     *     // ... filter to delete one SessionBooking
     *   }
     * })
     * 
     */
    delete<T extends SessionBookingDeleteArgs>(args: SelectSubset<T, SessionBookingDeleteArgs<ExtArgs>>): Prisma__SessionBookingClient<$Result.GetResult<Prisma.$SessionBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionBooking.
     * @param {SessionBookingUpdateArgs} args - Arguments to update one SessionBooking.
     * @example
     * // Update one SessionBooking
     * const sessionBooking = await prisma.sessionBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionBookingUpdateArgs>(args: SelectSubset<T, SessionBookingUpdateArgs<ExtArgs>>): Prisma__SessionBookingClient<$Result.GetResult<Prisma.$SessionBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionBookings.
     * @param {SessionBookingDeleteManyArgs} args - Arguments to filter SessionBookings to delete.
     * @example
     * // Delete a few SessionBookings
     * const { count } = await prisma.sessionBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionBookingDeleteManyArgs>(args?: SelectSubset<T, SessionBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionBookings
     * const sessionBooking = await prisma.sessionBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionBookingUpdateManyArgs>(args: SelectSubset<T, SessionBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SessionBooking.
     * @param {SessionBookingUpsertArgs} args - Arguments to update or create a SessionBooking.
     * @example
     * // Update or create a SessionBooking
     * const sessionBooking = await prisma.sessionBooking.upsert({
     *   create: {
     *     // ... data to create a SessionBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionBooking we want to update
     *   }
     * })
     */
    upsert<T extends SessionBookingUpsertArgs>(args: SelectSubset<T, SessionBookingUpsertArgs<ExtArgs>>): Prisma__SessionBookingClient<$Result.GetResult<Prisma.$SessionBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionBookingCountArgs} args - Arguments to filter SessionBookings to count.
     * @example
     * // Count the number of SessionBookings
     * const count = await prisma.sessionBooking.count({
     *   where: {
     *     // ... the filter for the SessionBookings we want to count
     *   }
     * })
    **/
    count<T extends SessionBookingCountArgs>(
      args?: Subset<T, SessionBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionBookingAggregateArgs>(args: Subset<T, SessionBookingAggregateArgs>): Prisma.PrismaPromise<GetSessionBookingAggregateType<T>>

    /**
     * Group by SessionBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionBookingGroupByArgs['orderBy'] }
        : { orderBy?: SessionBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionBooking model
   */
  readonly fields: SessionBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SessionBooking model
   */
  interface SessionBookingFieldRefs {
    readonly id: FieldRef<"SessionBooking", 'String'>
    readonly playerUserId: FieldRef<"SessionBooking", 'String'>
    readonly activityId: FieldRef<"SessionBooking", 'String'>
    readonly bookedAt: FieldRef<"SessionBooking", 'DateTime'>
    readonly bookingStatus: FieldRef<"SessionBooking", 'BookingStatus'>
    readonly attendanceStatus: FieldRef<"SessionBooking", 'AttendanceStatus'>
    readonly joinedAt: FieldRef<"SessionBooking", 'DateTime'>
    readonly leftAt: FieldRef<"SessionBooking", 'DateTime'>
    readonly createdAt: FieldRef<"SessionBooking", 'DateTime'>
    readonly updatedAt: FieldRef<"SessionBooking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionBooking findUnique
   */
  export type SessionBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
    /**
     * Filter, which SessionBooking to fetch.
     */
    where: SessionBookingWhereUniqueInput
  }

  /**
   * SessionBooking findUniqueOrThrow
   */
  export type SessionBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
    /**
     * Filter, which SessionBooking to fetch.
     */
    where: SessionBookingWhereUniqueInput
  }

  /**
   * SessionBooking findFirst
   */
  export type SessionBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
    /**
     * Filter, which SessionBooking to fetch.
     */
    where?: SessionBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionBookings to fetch.
     */
    orderBy?: SessionBookingOrderByWithRelationInput | SessionBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionBookings.
     */
    cursor?: SessionBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionBookings.
     */
    distinct?: SessionBookingScalarFieldEnum | SessionBookingScalarFieldEnum[]
  }

  /**
   * SessionBooking findFirstOrThrow
   */
  export type SessionBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
    /**
     * Filter, which SessionBooking to fetch.
     */
    where?: SessionBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionBookings to fetch.
     */
    orderBy?: SessionBookingOrderByWithRelationInput | SessionBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionBookings.
     */
    cursor?: SessionBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionBookings.
     */
    distinct?: SessionBookingScalarFieldEnum | SessionBookingScalarFieldEnum[]
  }

  /**
   * SessionBooking findMany
   */
  export type SessionBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
    /**
     * Filter, which SessionBookings to fetch.
     */
    where?: SessionBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionBookings to fetch.
     */
    orderBy?: SessionBookingOrderByWithRelationInput | SessionBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionBookings.
     */
    cursor?: SessionBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionBookings.
     */
    distinct?: SessionBookingScalarFieldEnum | SessionBookingScalarFieldEnum[]
  }

  /**
   * SessionBooking create
   */
  export type SessionBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionBooking.
     */
    data: XOR<SessionBookingCreateInput, SessionBookingUncheckedCreateInput>
  }

  /**
   * SessionBooking createMany
   */
  export type SessionBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionBookings.
     */
    data: SessionBookingCreateManyInput | SessionBookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionBooking update
   */
  export type SessionBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionBooking.
     */
    data: XOR<SessionBookingUpdateInput, SessionBookingUncheckedUpdateInput>
    /**
     * Choose, which SessionBooking to update.
     */
    where: SessionBookingWhereUniqueInput
  }

  /**
   * SessionBooking updateMany
   */
  export type SessionBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionBookings.
     */
    data: XOR<SessionBookingUpdateManyMutationInput, SessionBookingUncheckedUpdateManyInput>
    /**
     * Filter which SessionBookings to update
     */
    where?: SessionBookingWhereInput
    /**
     * Limit how many SessionBookings to update.
     */
    limit?: number
  }

  /**
   * SessionBooking upsert
   */
  export type SessionBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionBooking to update in case it exists.
     */
    where: SessionBookingWhereUniqueInput
    /**
     * In case the SessionBooking found by the `where` argument doesn't exist, create a new SessionBooking with this data.
     */
    create: XOR<SessionBookingCreateInput, SessionBookingUncheckedCreateInput>
    /**
     * In case the SessionBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionBookingUpdateInput, SessionBookingUncheckedUpdateInput>
  }

  /**
   * SessionBooking delete
   */
  export type SessionBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
    /**
     * Filter which SessionBooking to delete.
     */
    where: SessionBookingWhereUniqueInput
  }

  /**
   * SessionBooking deleteMany
   */
  export type SessionBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionBookings to delete
     */
    where?: SessionBookingWhereInput
    /**
     * Limit how many SessionBookings to delete.
     */
    limit?: number
  }

  /**
   * SessionBooking without action
   */
  export type SessionBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionBooking
     */
    select?: SessionBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionBooking
     */
    omit?: SessionBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionBookingInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyChurnMetric
   */

  export type AggregateMonthlyChurnMetric = {
    _count: MonthlyChurnMetricCountAggregateOutputType | null
    _avg: MonthlyChurnMetricAvgAggregateOutputType | null
    _sum: MonthlyChurnMetricSumAggregateOutputType | null
    _min: MonthlyChurnMetricMinAggregateOutputType | null
    _max: MonthlyChurnMetricMaxAggregateOutputType | null
  }

  export type MonthlyChurnMetricAvgAggregateOutputType = {
    healthyCount: number | null
    mightLeaveSoonCount: number | null
    atRiskCount: number | null
    churnedCount: number | null
    newPlayers: number | null
    netGrowth: number | null
    retentionRate: Decimal | null
    churnRate: Decimal | null
  }

  export type MonthlyChurnMetricSumAggregateOutputType = {
    healthyCount: number | null
    mightLeaveSoonCount: number | null
    atRiskCount: number | null
    churnedCount: number | null
    newPlayers: number | null
    netGrowth: number | null
    retentionRate: Decimal | null
    churnRate: Decimal | null
  }

  export type MonthlyChurnMetricMinAggregateOutputType = {
    id: string | null
    monthStartDate: Date | null
    clubId: string | null
    healthyCount: number | null
    mightLeaveSoonCount: number | null
    atRiskCount: number | null
    churnedCount: number | null
    newPlayers: number | null
    netGrowth: number | null
    retentionRate: Decimal | null
    churnRate: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyChurnMetricMaxAggregateOutputType = {
    id: string | null
    monthStartDate: Date | null
    clubId: string | null
    healthyCount: number | null
    mightLeaveSoonCount: number | null
    atRiskCount: number | null
    churnedCount: number | null
    newPlayers: number | null
    netGrowth: number | null
    retentionRate: Decimal | null
    churnRate: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyChurnMetricCountAggregateOutputType = {
    id: number
    monthStartDate: number
    clubId: number
    healthyCount: number
    mightLeaveSoonCount: number
    atRiskCount: number
    churnedCount: number
    newPlayers: number
    netGrowth: number
    retentionRate: number
    churnRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonthlyChurnMetricAvgAggregateInputType = {
    healthyCount?: true
    mightLeaveSoonCount?: true
    atRiskCount?: true
    churnedCount?: true
    newPlayers?: true
    netGrowth?: true
    retentionRate?: true
    churnRate?: true
  }

  export type MonthlyChurnMetricSumAggregateInputType = {
    healthyCount?: true
    mightLeaveSoonCount?: true
    atRiskCount?: true
    churnedCount?: true
    newPlayers?: true
    netGrowth?: true
    retentionRate?: true
    churnRate?: true
  }

  export type MonthlyChurnMetricMinAggregateInputType = {
    id?: true
    monthStartDate?: true
    clubId?: true
    healthyCount?: true
    mightLeaveSoonCount?: true
    atRiskCount?: true
    churnedCount?: true
    newPlayers?: true
    netGrowth?: true
    retentionRate?: true
    churnRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyChurnMetricMaxAggregateInputType = {
    id?: true
    monthStartDate?: true
    clubId?: true
    healthyCount?: true
    mightLeaveSoonCount?: true
    atRiskCount?: true
    churnedCount?: true
    newPlayers?: true
    netGrowth?: true
    retentionRate?: true
    churnRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyChurnMetricCountAggregateInputType = {
    id?: true
    monthStartDate?: true
    clubId?: true
    healthyCount?: true
    mightLeaveSoonCount?: true
    atRiskCount?: true
    churnedCount?: true
    newPlayers?: true
    netGrowth?: true
    retentionRate?: true
    churnRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonthlyChurnMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyChurnMetric to aggregate.
     */
    where?: MonthlyChurnMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyChurnMetrics to fetch.
     */
    orderBy?: MonthlyChurnMetricOrderByWithRelationInput | MonthlyChurnMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyChurnMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyChurnMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyChurnMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyChurnMetrics
    **/
    _count?: true | MonthlyChurnMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyChurnMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyChurnMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyChurnMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyChurnMetricMaxAggregateInputType
  }

  export type GetMonthlyChurnMetricAggregateType<T extends MonthlyChurnMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyChurnMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyChurnMetric[P]>
      : GetScalarType<T[P], AggregateMonthlyChurnMetric[P]>
  }




  export type MonthlyChurnMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyChurnMetricWhereInput
    orderBy?: MonthlyChurnMetricOrderByWithAggregationInput | MonthlyChurnMetricOrderByWithAggregationInput[]
    by: MonthlyChurnMetricScalarFieldEnum[] | MonthlyChurnMetricScalarFieldEnum
    having?: MonthlyChurnMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyChurnMetricCountAggregateInputType | true
    _avg?: MonthlyChurnMetricAvgAggregateInputType
    _sum?: MonthlyChurnMetricSumAggregateInputType
    _min?: MonthlyChurnMetricMinAggregateInputType
    _max?: MonthlyChurnMetricMaxAggregateInputType
  }

  export type MonthlyChurnMetricGroupByOutputType = {
    id: string
    monthStartDate: Date
    clubId: string | null
    healthyCount: number
    mightLeaveSoonCount: number
    atRiskCount: number
    churnedCount: number
    newPlayers: number
    netGrowth: number
    retentionRate: Decimal | null
    churnRate: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: MonthlyChurnMetricCountAggregateOutputType | null
    _avg: MonthlyChurnMetricAvgAggregateOutputType | null
    _sum: MonthlyChurnMetricSumAggregateOutputType | null
    _min: MonthlyChurnMetricMinAggregateOutputType | null
    _max: MonthlyChurnMetricMaxAggregateOutputType | null
  }

  type GetMonthlyChurnMetricGroupByPayload<T extends MonthlyChurnMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyChurnMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyChurnMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyChurnMetricGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyChurnMetricGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyChurnMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monthStartDate?: boolean
    clubId?: boolean
    healthyCount?: boolean
    mightLeaveSoonCount?: boolean
    atRiskCount?: boolean
    churnedCount?: boolean
    newPlayers?: boolean
    netGrowth?: boolean
    retentionRate?: boolean
    churnRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | MonthlyChurnMetric$clubArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyChurnMetric"]>



  export type MonthlyChurnMetricSelectScalar = {
    id?: boolean
    monthStartDate?: boolean
    clubId?: boolean
    healthyCount?: boolean
    mightLeaveSoonCount?: boolean
    atRiskCount?: boolean
    churnedCount?: boolean
    newPlayers?: boolean
    netGrowth?: boolean
    retentionRate?: boolean
    churnRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MonthlyChurnMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monthStartDate" | "clubId" | "healthyCount" | "mightLeaveSoonCount" | "atRiskCount" | "churnedCount" | "newPlayers" | "netGrowth" | "retentionRate" | "churnRate" | "createdAt" | "updatedAt", ExtArgs["result"]["monthlyChurnMetric"]>
  export type MonthlyChurnMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | MonthlyChurnMetric$clubArgs<ExtArgs>
  }

  export type $MonthlyChurnMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyChurnMetric"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      monthStartDate: Date
      clubId: string | null
      healthyCount: number
      mightLeaveSoonCount: number
      atRiskCount: number
      churnedCount: number
      newPlayers: number
      netGrowth: number
      retentionRate: Prisma.Decimal | null
      churnRate: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["monthlyChurnMetric"]>
    composites: {}
  }

  type MonthlyChurnMetricGetPayload<S extends boolean | null | undefined | MonthlyChurnMetricDefaultArgs> = $Result.GetResult<Prisma.$MonthlyChurnMetricPayload, S>

  type MonthlyChurnMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyChurnMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyChurnMetricCountAggregateInputType | true
    }

  export interface MonthlyChurnMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyChurnMetric'], meta: { name: 'MonthlyChurnMetric' } }
    /**
     * Find zero or one MonthlyChurnMetric that matches the filter.
     * @param {MonthlyChurnMetricFindUniqueArgs} args - Arguments to find a MonthlyChurnMetric
     * @example
     * // Get one MonthlyChurnMetric
     * const monthlyChurnMetric = await prisma.monthlyChurnMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyChurnMetricFindUniqueArgs>(args: SelectSubset<T, MonthlyChurnMetricFindUniqueArgs<ExtArgs>>): Prisma__MonthlyChurnMetricClient<$Result.GetResult<Prisma.$MonthlyChurnMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyChurnMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyChurnMetricFindUniqueOrThrowArgs} args - Arguments to find a MonthlyChurnMetric
     * @example
     * // Get one MonthlyChurnMetric
     * const monthlyChurnMetric = await prisma.monthlyChurnMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyChurnMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyChurnMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyChurnMetricClient<$Result.GetResult<Prisma.$MonthlyChurnMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyChurnMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyChurnMetricFindFirstArgs} args - Arguments to find a MonthlyChurnMetric
     * @example
     * // Get one MonthlyChurnMetric
     * const monthlyChurnMetric = await prisma.monthlyChurnMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyChurnMetricFindFirstArgs>(args?: SelectSubset<T, MonthlyChurnMetricFindFirstArgs<ExtArgs>>): Prisma__MonthlyChurnMetricClient<$Result.GetResult<Prisma.$MonthlyChurnMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyChurnMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyChurnMetricFindFirstOrThrowArgs} args - Arguments to find a MonthlyChurnMetric
     * @example
     * // Get one MonthlyChurnMetric
     * const monthlyChurnMetric = await prisma.monthlyChurnMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyChurnMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyChurnMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyChurnMetricClient<$Result.GetResult<Prisma.$MonthlyChurnMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyChurnMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyChurnMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyChurnMetrics
     * const monthlyChurnMetrics = await prisma.monthlyChurnMetric.findMany()
     * 
     * // Get first 10 MonthlyChurnMetrics
     * const monthlyChurnMetrics = await prisma.monthlyChurnMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyChurnMetricWithIdOnly = await prisma.monthlyChurnMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyChurnMetricFindManyArgs>(args?: SelectSubset<T, MonthlyChurnMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyChurnMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyChurnMetric.
     * @param {MonthlyChurnMetricCreateArgs} args - Arguments to create a MonthlyChurnMetric.
     * @example
     * // Create one MonthlyChurnMetric
     * const MonthlyChurnMetric = await prisma.monthlyChurnMetric.create({
     *   data: {
     *     // ... data to create a MonthlyChurnMetric
     *   }
     * })
     * 
     */
    create<T extends MonthlyChurnMetricCreateArgs>(args: SelectSubset<T, MonthlyChurnMetricCreateArgs<ExtArgs>>): Prisma__MonthlyChurnMetricClient<$Result.GetResult<Prisma.$MonthlyChurnMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyChurnMetrics.
     * @param {MonthlyChurnMetricCreateManyArgs} args - Arguments to create many MonthlyChurnMetrics.
     * @example
     * // Create many MonthlyChurnMetrics
     * const monthlyChurnMetric = await prisma.monthlyChurnMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyChurnMetricCreateManyArgs>(args?: SelectSubset<T, MonthlyChurnMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MonthlyChurnMetric.
     * @param {MonthlyChurnMetricDeleteArgs} args - Arguments to delete one MonthlyChurnMetric.
     * @example
     * // Delete one MonthlyChurnMetric
     * const MonthlyChurnMetric = await prisma.monthlyChurnMetric.delete({
     *   where: {
     *     // ... filter to delete one MonthlyChurnMetric
     *   }
     * })
     * 
     */
    delete<T extends MonthlyChurnMetricDeleteArgs>(args: SelectSubset<T, MonthlyChurnMetricDeleteArgs<ExtArgs>>): Prisma__MonthlyChurnMetricClient<$Result.GetResult<Prisma.$MonthlyChurnMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyChurnMetric.
     * @param {MonthlyChurnMetricUpdateArgs} args - Arguments to update one MonthlyChurnMetric.
     * @example
     * // Update one MonthlyChurnMetric
     * const monthlyChurnMetric = await prisma.monthlyChurnMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyChurnMetricUpdateArgs>(args: SelectSubset<T, MonthlyChurnMetricUpdateArgs<ExtArgs>>): Prisma__MonthlyChurnMetricClient<$Result.GetResult<Prisma.$MonthlyChurnMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyChurnMetrics.
     * @param {MonthlyChurnMetricDeleteManyArgs} args - Arguments to filter MonthlyChurnMetrics to delete.
     * @example
     * // Delete a few MonthlyChurnMetrics
     * const { count } = await prisma.monthlyChurnMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyChurnMetricDeleteManyArgs>(args?: SelectSubset<T, MonthlyChurnMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyChurnMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyChurnMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyChurnMetrics
     * const monthlyChurnMetric = await prisma.monthlyChurnMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyChurnMetricUpdateManyArgs>(args: SelectSubset<T, MonthlyChurnMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonthlyChurnMetric.
     * @param {MonthlyChurnMetricUpsertArgs} args - Arguments to update or create a MonthlyChurnMetric.
     * @example
     * // Update or create a MonthlyChurnMetric
     * const monthlyChurnMetric = await prisma.monthlyChurnMetric.upsert({
     *   create: {
     *     // ... data to create a MonthlyChurnMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyChurnMetric we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyChurnMetricUpsertArgs>(args: SelectSubset<T, MonthlyChurnMetricUpsertArgs<ExtArgs>>): Prisma__MonthlyChurnMetricClient<$Result.GetResult<Prisma.$MonthlyChurnMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyChurnMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyChurnMetricCountArgs} args - Arguments to filter MonthlyChurnMetrics to count.
     * @example
     * // Count the number of MonthlyChurnMetrics
     * const count = await prisma.monthlyChurnMetric.count({
     *   where: {
     *     // ... the filter for the MonthlyChurnMetrics we want to count
     *   }
     * })
    **/
    count<T extends MonthlyChurnMetricCountArgs>(
      args?: Subset<T, MonthlyChurnMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyChurnMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyChurnMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyChurnMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthlyChurnMetricAggregateArgs>(args: Subset<T, MonthlyChurnMetricAggregateArgs>): Prisma.PrismaPromise<GetMonthlyChurnMetricAggregateType<T>>

    /**
     * Group by MonthlyChurnMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyChurnMetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthlyChurnMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyChurnMetricGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyChurnMetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthlyChurnMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyChurnMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyChurnMetric model
   */
  readonly fields: MonthlyChurnMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyChurnMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyChurnMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends MonthlyChurnMetric$clubArgs<ExtArgs> = {}>(args?: Subset<T, MonthlyChurnMetric$clubArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthlyChurnMetric model
   */
  interface MonthlyChurnMetricFieldRefs {
    readonly id: FieldRef<"MonthlyChurnMetric", 'String'>
    readonly monthStartDate: FieldRef<"MonthlyChurnMetric", 'DateTime'>
    readonly clubId: FieldRef<"MonthlyChurnMetric", 'String'>
    readonly healthyCount: FieldRef<"MonthlyChurnMetric", 'Int'>
    readonly mightLeaveSoonCount: FieldRef<"MonthlyChurnMetric", 'Int'>
    readonly atRiskCount: FieldRef<"MonthlyChurnMetric", 'Int'>
    readonly churnedCount: FieldRef<"MonthlyChurnMetric", 'Int'>
    readonly newPlayers: FieldRef<"MonthlyChurnMetric", 'Int'>
    readonly netGrowth: FieldRef<"MonthlyChurnMetric", 'Int'>
    readonly retentionRate: FieldRef<"MonthlyChurnMetric", 'Decimal'>
    readonly churnRate: FieldRef<"MonthlyChurnMetric", 'Decimal'>
    readonly createdAt: FieldRef<"MonthlyChurnMetric", 'DateTime'>
    readonly updatedAt: FieldRef<"MonthlyChurnMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyChurnMetric findUnique
   */
  export type MonthlyChurnMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyChurnMetric
     */
    select?: MonthlyChurnMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyChurnMetric
     */
    omit?: MonthlyChurnMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyChurnMetricInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyChurnMetric to fetch.
     */
    where: MonthlyChurnMetricWhereUniqueInput
  }

  /**
   * MonthlyChurnMetric findUniqueOrThrow
   */
  export type MonthlyChurnMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyChurnMetric
     */
    select?: MonthlyChurnMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyChurnMetric
     */
    omit?: MonthlyChurnMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyChurnMetricInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyChurnMetric to fetch.
     */
    where: MonthlyChurnMetricWhereUniqueInput
  }

  /**
   * MonthlyChurnMetric findFirst
   */
  export type MonthlyChurnMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyChurnMetric
     */
    select?: MonthlyChurnMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyChurnMetric
     */
    omit?: MonthlyChurnMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyChurnMetricInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyChurnMetric to fetch.
     */
    where?: MonthlyChurnMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyChurnMetrics to fetch.
     */
    orderBy?: MonthlyChurnMetricOrderByWithRelationInput | MonthlyChurnMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyChurnMetrics.
     */
    cursor?: MonthlyChurnMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyChurnMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyChurnMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyChurnMetrics.
     */
    distinct?: MonthlyChurnMetricScalarFieldEnum | MonthlyChurnMetricScalarFieldEnum[]
  }

  /**
   * MonthlyChurnMetric findFirstOrThrow
   */
  export type MonthlyChurnMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyChurnMetric
     */
    select?: MonthlyChurnMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyChurnMetric
     */
    omit?: MonthlyChurnMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyChurnMetricInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyChurnMetric to fetch.
     */
    where?: MonthlyChurnMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyChurnMetrics to fetch.
     */
    orderBy?: MonthlyChurnMetricOrderByWithRelationInput | MonthlyChurnMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyChurnMetrics.
     */
    cursor?: MonthlyChurnMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyChurnMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyChurnMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyChurnMetrics.
     */
    distinct?: MonthlyChurnMetricScalarFieldEnum | MonthlyChurnMetricScalarFieldEnum[]
  }

  /**
   * MonthlyChurnMetric findMany
   */
  export type MonthlyChurnMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyChurnMetric
     */
    select?: MonthlyChurnMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyChurnMetric
     */
    omit?: MonthlyChurnMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyChurnMetricInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyChurnMetrics to fetch.
     */
    where?: MonthlyChurnMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyChurnMetrics to fetch.
     */
    orderBy?: MonthlyChurnMetricOrderByWithRelationInput | MonthlyChurnMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyChurnMetrics.
     */
    cursor?: MonthlyChurnMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyChurnMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyChurnMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyChurnMetrics.
     */
    distinct?: MonthlyChurnMetricScalarFieldEnum | MonthlyChurnMetricScalarFieldEnum[]
  }

  /**
   * MonthlyChurnMetric create
   */
  export type MonthlyChurnMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyChurnMetric
     */
    select?: MonthlyChurnMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyChurnMetric
     */
    omit?: MonthlyChurnMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyChurnMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyChurnMetric.
     */
    data: XOR<MonthlyChurnMetricCreateInput, MonthlyChurnMetricUncheckedCreateInput>
  }

  /**
   * MonthlyChurnMetric createMany
   */
  export type MonthlyChurnMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyChurnMetrics.
     */
    data: MonthlyChurnMetricCreateManyInput | MonthlyChurnMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyChurnMetric update
   */
  export type MonthlyChurnMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyChurnMetric
     */
    select?: MonthlyChurnMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyChurnMetric
     */
    omit?: MonthlyChurnMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyChurnMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyChurnMetric.
     */
    data: XOR<MonthlyChurnMetricUpdateInput, MonthlyChurnMetricUncheckedUpdateInput>
    /**
     * Choose, which MonthlyChurnMetric to update.
     */
    where: MonthlyChurnMetricWhereUniqueInput
  }

  /**
   * MonthlyChurnMetric updateMany
   */
  export type MonthlyChurnMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyChurnMetrics.
     */
    data: XOR<MonthlyChurnMetricUpdateManyMutationInput, MonthlyChurnMetricUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyChurnMetrics to update
     */
    where?: MonthlyChurnMetricWhereInput
    /**
     * Limit how many MonthlyChurnMetrics to update.
     */
    limit?: number
  }

  /**
   * MonthlyChurnMetric upsert
   */
  export type MonthlyChurnMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyChurnMetric
     */
    select?: MonthlyChurnMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyChurnMetric
     */
    omit?: MonthlyChurnMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyChurnMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyChurnMetric to update in case it exists.
     */
    where: MonthlyChurnMetricWhereUniqueInput
    /**
     * In case the MonthlyChurnMetric found by the `where` argument doesn't exist, create a new MonthlyChurnMetric with this data.
     */
    create: XOR<MonthlyChurnMetricCreateInput, MonthlyChurnMetricUncheckedCreateInput>
    /**
     * In case the MonthlyChurnMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyChurnMetricUpdateInput, MonthlyChurnMetricUncheckedUpdateInput>
  }

  /**
   * MonthlyChurnMetric delete
   */
  export type MonthlyChurnMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyChurnMetric
     */
    select?: MonthlyChurnMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyChurnMetric
     */
    omit?: MonthlyChurnMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyChurnMetricInclude<ExtArgs> | null
    /**
     * Filter which MonthlyChurnMetric to delete.
     */
    where: MonthlyChurnMetricWhereUniqueInput
  }

  /**
   * MonthlyChurnMetric deleteMany
   */
  export type MonthlyChurnMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyChurnMetrics to delete
     */
    where?: MonthlyChurnMetricWhereInput
    /**
     * Limit how many MonthlyChurnMetrics to delete.
     */
    limit?: number
  }

  /**
   * MonthlyChurnMetric.club
   */
  export type MonthlyChurnMetric$clubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
  }

  /**
   * MonthlyChurnMetric without action
   */
  export type MonthlyChurnMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyChurnMetric
     */
    select?: MonthlyChurnMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyChurnMetric
     */
    omit?: MonthlyChurnMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyChurnMetricInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userType: 'userType',
    clubId: 'clubId',
    teamId: 'teamId',
    disability: 'disability',
    personNumber: 'personNumber',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    clubOnboarding: 'clubOnboarding',
    gender: 'gender',
    createdBy: 'createdBy',
    dateCreated: 'dateCreated',
    dateUpdated: 'dateUpdated',
    churnStatus: 'churnStatus',
    joinedAt: 'joinedAt',
    lastActivityAt: 'lastActivityAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClubScalarFieldEnum: {
    id: 'id',
    display: 'display',
    location: 'location',
    income: 'income',
    organizationNumber: 'organizationNumber',
    dateCreated: 'dateCreated',
    dateUpdated: 'dateUpdated',
    type: 'type',
    subscriptionStatus: 'subscriptionStatus'
  };

  export type ClubScalarFieldEnum = (typeof ClubScalarFieldEnum)[keyof typeof ClubScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    display: 'display',
    clubId: 'clubId',
    voided: 'voided',
    dateCreated: 'dateCreated',
    dateUpdated: 'dateUpdated'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    clubId: 'clubId',
    name: 'name',
    coachUserId: 'coachUserId',
    description: 'description',
    noOfReg: 'noOfReg',
    activityDate: 'activityDate',
    income: 'income',
    program: 'program',
    minAge: 'minAge',
    maxAge: 'maxAge',
    visibilityType: 'visibilityType',
    equipments: 'equipments',
    type: 'type',
    language: 'language',
    dateCreated: 'dateCreated',
    dateUpdated: 'dateUpdated'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const PlayerTrainingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    playerTrainingProgramId: 'playerTrainingProgramId',
    playerTrainingProgramLevelId: 'playerTrainingProgramLevelId',
    playerTrainingProgramWeekId: 'playerTrainingProgramWeekId',
    trainingIndex: 'trainingIndex',
    points: 'points',
    isCompleted: 'isCompleted',
    dateCompleted: 'dateCompleted',
    dateCreated: 'dateCreated',
    trainingStartTime: 'trainingStartTime',
    trainingEndTime: 'trainingEndTime',
    address: 'address'
  };

  export type PlayerTrainingScalarFieldEnum = (typeof PlayerTrainingScalarFieldEnum)[keyof typeof PlayerTrainingScalarFieldEnum]


  export const PlayerTrainingWeekScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    playerTrainingProgramId: 'playerTrainingProgramId',
    playerTrainingProgramLevelId: 'playerTrainingProgramLevelId',
    trainingProgramWeekIndex: 'trainingProgramWeekIndex',
    isCompleted: 'isCompleted',
    dateCompleted: 'dateCompleted',
    dateCreated: 'dateCreated'
  };

  export type PlayerTrainingWeekScalarFieldEnum = (typeof PlayerTrainingWeekScalarFieldEnum)[keyof typeof PlayerTrainingWeekScalarFieldEnum]


  export const PlayerTrainingLevelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    playerTrainingProgramId: 'playerTrainingProgramId',
    trainingProgramLevelIndex: 'trainingProgramLevelIndex',
    isCompleted: 'isCompleted',
    dateCompleted: 'dateCompleted',
    dateCreated: 'dateCreated'
  };

  export type PlayerTrainingLevelScalarFieldEnum = (typeof PlayerTrainingLevelScalarFieldEnum)[keyof typeof PlayerTrainingLevelScalarFieldEnum]


  export const PlayerTrainingProgramScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trainingProgramId: 'trainingProgramId',
    isCompleted: 'isCompleted',
    isLocked: 'isLocked',
    isLiked: 'isLiked',
    isPremium: 'isPremium',
    subscriptionType: 'subscriptionType',
    subscriptionId: 'subscriptionId',
    dateCompleted: 'dateCompleted',
    dateCreated: 'dateCreated'
  };

  export type PlayerTrainingProgramScalarFieldEnum = (typeof PlayerTrainingProgramScalarFieldEnum)[keyof typeof PlayerTrainingProgramScalarFieldEnum]


  export const PlayerSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tier: 'tier',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    autoRenew: 'autoRenew',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerSubscriptionScalarFieldEnum = (typeof PlayerSubscriptionScalarFieldEnum)[keyof typeof PlayerSubscriptionScalarFieldEnum]


  export const SessionBookingScalarFieldEnum: {
    id: 'id',
    playerUserId: 'playerUserId',
    activityId: 'activityId',
    bookedAt: 'bookedAt',
    bookingStatus: 'bookingStatus',
    attendanceStatus: 'attendanceStatus',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionBookingScalarFieldEnum = (typeof SessionBookingScalarFieldEnum)[keyof typeof SessionBookingScalarFieldEnum]


  export const MonthlyChurnMetricScalarFieldEnum: {
    id: 'id',
    monthStartDate: 'monthStartDate',
    clubId: 'clubId',
    healthyCount: 'healthyCount',
    mightLeaveSoonCount: 'mightLeaveSoonCount',
    atRiskCount: 'atRiskCount',
    churnedCount: 'churnedCount',
    newPlayers: 'newPlayers',
    netGrowth: 'netGrowth',
    retentionRate: 'retentionRate',
    churnRate: 'churnRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonthlyChurnMetricScalarFieldEnum = (typeof MonthlyChurnMetricScalarFieldEnum)[keyof typeof MonthlyChurnMetricScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    clubId: 'clubId',
    teamId: 'teamId',
    personNumber: 'personNumber',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    gender: 'gender'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ClubOrderByRelevanceFieldEnum: {
    id: 'id',
    display: 'display',
    location: 'location',
    organizationNumber: 'organizationNumber'
  };

  export type ClubOrderByRelevanceFieldEnum = (typeof ClubOrderByRelevanceFieldEnum)[keyof typeof ClubOrderByRelevanceFieldEnum]


  export const TeamOrderByRelevanceFieldEnum: {
    id: 'id',
    display: 'display',
    clubId: 'clubId'
  };

  export type TeamOrderByRelevanceFieldEnum = (typeof TeamOrderByRelevanceFieldEnum)[keyof typeof TeamOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ActivityOrderByRelevanceFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    clubId: 'clubId',
    name: 'name',
    coachUserId: 'coachUserId',
    description: 'description',
    program: 'program'
  };

  export type ActivityOrderByRelevanceFieldEnum = (typeof ActivityOrderByRelevanceFieldEnum)[keyof typeof ActivityOrderByRelevanceFieldEnum]


  export const PlayerTrainingOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    playerTrainingProgramId: 'playerTrainingProgramId',
    playerTrainingProgramLevelId: 'playerTrainingProgramLevelId',
    playerTrainingProgramWeekId: 'playerTrainingProgramWeekId',
    address: 'address'
  };

  export type PlayerTrainingOrderByRelevanceFieldEnum = (typeof PlayerTrainingOrderByRelevanceFieldEnum)[keyof typeof PlayerTrainingOrderByRelevanceFieldEnum]


  export const PlayerTrainingWeekOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    playerTrainingProgramId: 'playerTrainingProgramId',
    playerTrainingProgramLevelId: 'playerTrainingProgramLevelId'
  };

  export type PlayerTrainingWeekOrderByRelevanceFieldEnum = (typeof PlayerTrainingWeekOrderByRelevanceFieldEnum)[keyof typeof PlayerTrainingWeekOrderByRelevanceFieldEnum]


  export const PlayerTrainingLevelOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    playerTrainingProgramId: 'playerTrainingProgramId'
  };

  export type PlayerTrainingLevelOrderByRelevanceFieldEnum = (typeof PlayerTrainingLevelOrderByRelevanceFieldEnum)[keyof typeof PlayerTrainingLevelOrderByRelevanceFieldEnum]


  export const PlayerTrainingProgramOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    trainingProgramId: 'trainingProgramId',
    subscriptionId: 'subscriptionId'
  };

  export type PlayerTrainingProgramOrderByRelevanceFieldEnum = (typeof PlayerTrainingProgramOrderByRelevanceFieldEnum)[keyof typeof PlayerTrainingProgramOrderByRelevanceFieldEnum]


  export const PlayerSubscriptionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type PlayerSubscriptionOrderByRelevanceFieldEnum = (typeof PlayerSubscriptionOrderByRelevanceFieldEnum)[keyof typeof PlayerSubscriptionOrderByRelevanceFieldEnum]


  export const SessionBookingOrderByRelevanceFieldEnum: {
    id: 'id',
    playerUserId: 'playerUserId',
    activityId: 'activityId'
  };

  export type SessionBookingOrderByRelevanceFieldEnum = (typeof SessionBookingOrderByRelevanceFieldEnum)[keyof typeof SessionBookingOrderByRelevanceFieldEnum]


  export const MonthlyChurnMetricOrderByRelevanceFieldEnum: {
    id: 'id',
    clubId: 'clubId'
  };

  export type MonthlyChurnMetricOrderByRelevanceFieldEnum = (typeof MonthlyChurnMetricOrderByRelevanceFieldEnum)[keyof typeof MonthlyChurnMetricOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ChurnStatus'
   */
  export type EnumChurnStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChurnStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'VisibilityType'
   */
  export type EnumVisibilityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisibilityType'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Language'
   */
  export type EnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language'>
    


  /**
   * Reference to a field of type 'SubscriptionType'
   */
  export type EnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType'>
    


  /**
   * Reference to a field of type 'SubscriptionTier'
   */
  export type EnumSubscriptionTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionTier'>
    


  /**
   * Reference to a field of type 'SubscriptionRecordStatus'
   */
  export type EnumSubscriptionRecordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionRecordStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    clubId?: StringNullableFilter<"User"> | string | null
    teamId?: StringNullableFilter<"User"> | string | null
    disability?: BoolFilter<"User"> | boolean
    personNumber?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    clubOnboarding?: BoolFilter<"User"> | boolean
    gender?: StringNullableFilter<"User"> | string | null
    createdBy?: EnumAdminRoleFilter<"User"> | $Enums.AdminRole
    dateCreated?: DateTimeFilter<"User"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"User"> | Date | string | null
    churnStatus?: EnumChurnStatusFilter<"User"> | $Enums.ChurnStatus
    joinedAt?: DateTimeFilter<"User"> | Date | string
    lastActivityAt?: DateTimeNullableFilter<"User"> | Date | string | null
    club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    Activity?: ActivityListRelationFilter
    playerSubscriptions?: PlayerSubscriptionListRelationFilter
    sessionBookings?: SessionBookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userType?: SortOrder
    clubId?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    disability?: SortOrder
    personNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    clubOnboarding?: SortOrder
    gender?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    churnStatus?: SortOrder
    joinedAt?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    club?: ClubOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    Activity?: ActivityOrderByRelationAggregateInput
    playerSubscriptions?: PlayerSubscriptionOrderByRelationAggregateInput
    sessionBookings?: SessionBookingOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    clubId?: StringNullableFilter<"User"> | string | null
    teamId?: StringNullableFilter<"User"> | string | null
    disability?: BoolFilter<"User"> | boolean
    personNumber?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    clubOnboarding?: BoolFilter<"User"> | boolean
    gender?: StringNullableFilter<"User"> | string | null
    createdBy?: EnumAdminRoleFilter<"User"> | $Enums.AdminRole
    dateCreated?: DateTimeFilter<"User"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"User"> | Date | string | null
    churnStatus?: EnumChurnStatusFilter<"User"> | $Enums.ChurnStatus
    joinedAt?: DateTimeFilter<"User"> | Date | string
    lastActivityAt?: DateTimeNullableFilter<"User"> | Date | string | null
    club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    Activity?: ActivityListRelationFilter
    playerSubscriptions?: PlayerSubscriptionListRelationFilter
    sessionBookings?: SessionBookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userType?: SortOrder
    clubId?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    disability?: SortOrder
    personNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    clubOnboarding?: SortOrder
    gender?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    churnStatus?: SortOrder
    joinedAt?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    clubId?: StringNullableWithAggregatesFilter<"User"> | string | null
    teamId?: StringNullableWithAggregatesFilter<"User"> | string | null
    disability?: BoolWithAggregatesFilter<"User"> | boolean
    personNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    clubOnboarding?: BoolWithAggregatesFilter<"User"> | boolean
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdBy?: EnumAdminRoleWithAggregatesFilter<"User"> | $Enums.AdminRole
    dateCreated?: DateTimeWithAggregatesFilter<"User"> | Date | string
    dateUpdated?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    churnStatus?: EnumChurnStatusWithAggregatesFilter<"User"> | $Enums.ChurnStatus
    joinedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastActivityAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ClubWhereInput = {
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    id?: StringFilter<"Club"> | string
    display?: StringFilter<"Club"> | string
    location?: StringNullableFilter<"Club"> | string | null
    income?: IntFilter<"Club"> | number
    organizationNumber?: StringNullableFilter<"Club"> | string | null
    dateCreated?: DateTimeFilter<"Club"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"Club"> | Date | string | null
    type?: EnumAdminRoleFilter<"Club"> | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFilter<"Club"> | $Enums.SubscriptionStatus
    teams?: TeamListRelationFilter
    Activity?: ActivityListRelationFilter
    User?: UserListRelationFilter
    metrics?: MonthlyChurnMetricListRelationFilter
  }

  export type ClubOrderByWithRelationInput = {
    id?: SortOrder
    display?: SortOrder
    location?: SortOrderInput | SortOrder
    income?: SortOrder
    organizationNumber?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    type?: SortOrder
    subscriptionStatus?: SortOrder
    teams?: TeamOrderByRelationAggregateInput
    Activity?: ActivityOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
    metrics?: MonthlyChurnMetricOrderByRelationAggregateInput
    _relevance?: ClubOrderByRelevanceInput
  }

  export type ClubWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    display?: StringFilter<"Club"> | string
    location?: StringNullableFilter<"Club"> | string | null
    income?: IntFilter<"Club"> | number
    organizationNumber?: StringNullableFilter<"Club"> | string | null
    dateCreated?: DateTimeFilter<"Club"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"Club"> | Date | string | null
    type?: EnumAdminRoleFilter<"Club"> | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFilter<"Club"> | $Enums.SubscriptionStatus
    teams?: TeamListRelationFilter
    Activity?: ActivityListRelationFilter
    User?: UserListRelationFilter
    metrics?: MonthlyChurnMetricListRelationFilter
  }, "id">

  export type ClubOrderByWithAggregationInput = {
    id?: SortOrder
    display?: SortOrder
    location?: SortOrderInput | SortOrder
    income?: SortOrder
    organizationNumber?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    type?: SortOrder
    subscriptionStatus?: SortOrder
    _count?: ClubCountOrderByAggregateInput
    _avg?: ClubAvgOrderByAggregateInput
    _max?: ClubMaxOrderByAggregateInput
    _min?: ClubMinOrderByAggregateInput
    _sum?: ClubSumOrderByAggregateInput
  }

  export type ClubScalarWhereWithAggregatesInput = {
    AND?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    OR?: ClubScalarWhereWithAggregatesInput[]
    NOT?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Club"> | string
    display?: StringWithAggregatesFilter<"Club"> | string
    location?: StringNullableWithAggregatesFilter<"Club"> | string | null
    income?: IntWithAggregatesFilter<"Club"> | number
    organizationNumber?: StringNullableWithAggregatesFilter<"Club"> | string | null
    dateCreated?: DateTimeWithAggregatesFilter<"Club"> | Date | string
    dateUpdated?: DateTimeNullableWithAggregatesFilter<"Club"> | Date | string | null
    type?: EnumAdminRoleWithAggregatesFilter<"Club"> | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusWithAggregatesFilter<"Club"> | $Enums.SubscriptionStatus
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    display?: StringFilter<"Team"> | string
    clubId?: StringFilter<"Team"> | string
    voided?: BoolFilter<"Team"> | boolean
    dateCreated?: DateTimeFilter<"Team"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"Team"> | Date | string | null
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
    Activity?: ActivityListRelationFilter
    User?: UserListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    display?: SortOrder
    clubId?: SortOrder
    voided?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    club?: ClubOrderByWithRelationInput
    Activity?: ActivityOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
    _relevance?: TeamOrderByRelevanceInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    display?: StringFilter<"Team"> | string
    clubId?: StringFilter<"Team"> | string
    voided?: BoolFilter<"Team"> | boolean
    dateCreated?: DateTimeFilter<"Team"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"Team"> | Date | string | null
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
    Activity?: ActivityListRelationFilter
    User?: UserListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    display?: SortOrder
    clubId?: SortOrder
    voided?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    display?: StringWithAggregatesFilter<"Team"> | string
    clubId?: StringWithAggregatesFilter<"Team"> | string
    voided?: BoolWithAggregatesFilter<"Team"> | boolean
    dateCreated?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    dateUpdated?: DateTimeNullableWithAggregatesFilter<"Team"> | Date | string | null
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    teamId?: StringNullableFilter<"Activity"> | string | null
    clubId?: StringNullableFilter<"Activity"> | string | null
    name?: StringFilter<"Activity"> | string
    coachUserId?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    noOfReg?: IntFilter<"Activity"> | number
    activityDate?: DateTimeFilter<"Activity"> | Date | string
    income?: IntFilter<"Activity"> | number
    program?: StringFilter<"Activity"> | string
    minAge?: IntFilter<"Activity"> | number
    maxAge?: IntFilter<"Activity"> | number
    visibilityType?: EnumVisibilityTypeFilter<"Activity"> | $Enums.VisibilityType
    equipments?: JsonFilter<"Activity">
    type?: EnumAdminRoleFilter<"Activity"> | $Enums.AdminRole
    language?: EnumLanguageFilter<"Activity"> | $Enums.Language
    dateCreated?: DateTimeFilter<"Activity"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"Activity"> | Date | string | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: SessionBookingListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrderInput | SortOrder
    clubId?: SortOrderInput | SortOrder
    name?: SortOrder
    coachUserId?: SortOrder
    description?: SortOrder
    noOfReg?: SortOrder
    activityDate?: SortOrder
    income?: SortOrder
    program?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    visibilityType?: SortOrder
    equipments?: SortOrder
    type?: SortOrder
    language?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
    club?: ClubOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    bookings?: SessionBookingOrderByRelationAggregateInput
    _relevance?: ActivityOrderByRelevanceInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    teamId?: StringNullableFilter<"Activity"> | string | null
    clubId?: StringNullableFilter<"Activity"> | string | null
    name?: StringFilter<"Activity"> | string
    coachUserId?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    noOfReg?: IntFilter<"Activity"> | number
    activityDate?: DateTimeFilter<"Activity"> | Date | string
    income?: IntFilter<"Activity"> | number
    program?: StringFilter<"Activity"> | string
    minAge?: IntFilter<"Activity"> | number
    maxAge?: IntFilter<"Activity"> | number
    visibilityType?: EnumVisibilityTypeFilter<"Activity"> | $Enums.VisibilityType
    equipments?: JsonFilter<"Activity">
    type?: EnumAdminRoleFilter<"Activity"> | $Enums.AdminRole
    language?: EnumLanguageFilter<"Activity"> | $Enums.Language
    dateCreated?: DateTimeFilter<"Activity"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"Activity"> | Date | string | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: SessionBookingListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrderInput | SortOrder
    clubId?: SortOrderInput | SortOrder
    name?: SortOrder
    coachUserId?: SortOrder
    description?: SortOrder
    noOfReg?: SortOrder
    activityDate?: SortOrder
    income?: SortOrder
    program?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    visibilityType?: SortOrder
    equipments?: SortOrder
    type?: SortOrder
    language?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    teamId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    clubId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    name?: StringWithAggregatesFilter<"Activity"> | string
    coachUserId?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringWithAggregatesFilter<"Activity"> | string
    noOfReg?: IntWithAggregatesFilter<"Activity"> | number
    activityDate?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    income?: IntWithAggregatesFilter<"Activity"> | number
    program?: StringWithAggregatesFilter<"Activity"> | string
    minAge?: IntWithAggregatesFilter<"Activity"> | number
    maxAge?: IntWithAggregatesFilter<"Activity"> | number
    visibilityType?: EnumVisibilityTypeWithAggregatesFilter<"Activity"> | $Enums.VisibilityType
    equipments?: JsonWithAggregatesFilter<"Activity">
    type?: EnumAdminRoleWithAggregatesFilter<"Activity"> | $Enums.AdminRole
    language?: EnumLanguageWithAggregatesFilter<"Activity"> | $Enums.Language
    dateCreated?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    dateUpdated?: DateTimeNullableWithAggregatesFilter<"Activity"> | Date | string | null
  }

  export type PlayerTrainingWhereInput = {
    AND?: PlayerTrainingWhereInput | PlayerTrainingWhereInput[]
    OR?: PlayerTrainingWhereInput[]
    NOT?: PlayerTrainingWhereInput | PlayerTrainingWhereInput[]
    id?: StringFilter<"PlayerTraining"> | string
    userId?: StringFilter<"PlayerTraining"> | string
    playerTrainingProgramId?: StringFilter<"PlayerTraining"> | string
    playerTrainingProgramLevelId?: StringFilter<"PlayerTraining"> | string
    playerTrainingProgramWeekId?: StringFilter<"PlayerTraining"> | string
    trainingIndex?: IntFilter<"PlayerTraining"> | number
    points?: IntFilter<"PlayerTraining"> | number
    isCompleted?: BoolFilter<"PlayerTraining"> | boolean
    dateCompleted?: DateTimeNullableFilter<"PlayerTraining"> | Date | string | null
    dateCreated?: DateTimeFilter<"PlayerTraining"> | Date | string
    trainingStartTime?: DateTimeNullableFilter<"PlayerTraining"> | Date | string | null
    trainingEndTime?: DateTimeNullableFilter<"PlayerTraining"> | Date | string | null
    address?: StringNullableFilter<"PlayerTraining"> | string | null
  }

  export type PlayerTrainingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    playerTrainingProgramLevelId?: SortOrder
    playerTrainingProgramWeekId?: SortOrder
    trainingIndex?: SortOrder
    points?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    trainingStartTime?: SortOrderInput | SortOrder
    trainingEndTime?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _relevance?: PlayerTrainingOrderByRelevanceInput
  }

  export type PlayerTrainingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerTrainingWhereInput | PlayerTrainingWhereInput[]
    OR?: PlayerTrainingWhereInput[]
    NOT?: PlayerTrainingWhereInput | PlayerTrainingWhereInput[]
    userId?: StringFilter<"PlayerTraining"> | string
    playerTrainingProgramId?: StringFilter<"PlayerTraining"> | string
    playerTrainingProgramLevelId?: StringFilter<"PlayerTraining"> | string
    playerTrainingProgramWeekId?: StringFilter<"PlayerTraining"> | string
    trainingIndex?: IntFilter<"PlayerTraining"> | number
    points?: IntFilter<"PlayerTraining"> | number
    isCompleted?: BoolFilter<"PlayerTraining"> | boolean
    dateCompleted?: DateTimeNullableFilter<"PlayerTraining"> | Date | string | null
    dateCreated?: DateTimeFilter<"PlayerTraining"> | Date | string
    trainingStartTime?: DateTimeNullableFilter<"PlayerTraining"> | Date | string | null
    trainingEndTime?: DateTimeNullableFilter<"PlayerTraining"> | Date | string | null
    address?: StringNullableFilter<"PlayerTraining"> | string | null
  }, "id">

  export type PlayerTrainingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    playerTrainingProgramLevelId?: SortOrder
    playerTrainingProgramWeekId?: SortOrder
    trainingIndex?: SortOrder
    points?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    trainingStartTime?: SortOrderInput | SortOrder
    trainingEndTime?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _count?: PlayerTrainingCountOrderByAggregateInput
    _avg?: PlayerTrainingAvgOrderByAggregateInput
    _max?: PlayerTrainingMaxOrderByAggregateInput
    _min?: PlayerTrainingMinOrderByAggregateInput
    _sum?: PlayerTrainingSumOrderByAggregateInput
  }

  export type PlayerTrainingScalarWhereWithAggregatesInput = {
    AND?: PlayerTrainingScalarWhereWithAggregatesInput | PlayerTrainingScalarWhereWithAggregatesInput[]
    OR?: PlayerTrainingScalarWhereWithAggregatesInput[]
    NOT?: PlayerTrainingScalarWhereWithAggregatesInput | PlayerTrainingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerTraining"> | string
    userId?: StringWithAggregatesFilter<"PlayerTraining"> | string
    playerTrainingProgramId?: StringWithAggregatesFilter<"PlayerTraining"> | string
    playerTrainingProgramLevelId?: StringWithAggregatesFilter<"PlayerTraining"> | string
    playerTrainingProgramWeekId?: StringWithAggregatesFilter<"PlayerTraining"> | string
    trainingIndex?: IntWithAggregatesFilter<"PlayerTraining"> | number
    points?: IntWithAggregatesFilter<"PlayerTraining"> | number
    isCompleted?: BoolWithAggregatesFilter<"PlayerTraining"> | boolean
    dateCompleted?: DateTimeNullableWithAggregatesFilter<"PlayerTraining"> | Date | string | null
    dateCreated?: DateTimeWithAggregatesFilter<"PlayerTraining"> | Date | string
    trainingStartTime?: DateTimeNullableWithAggregatesFilter<"PlayerTraining"> | Date | string | null
    trainingEndTime?: DateTimeNullableWithAggregatesFilter<"PlayerTraining"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"PlayerTraining"> | string | null
  }

  export type PlayerTrainingWeekWhereInput = {
    AND?: PlayerTrainingWeekWhereInput | PlayerTrainingWeekWhereInput[]
    OR?: PlayerTrainingWeekWhereInput[]
    NOT?: PlayerTrainingWeekWhereInput | PlayerTrainingWeekWhereInput[]
    id?: StringFilter<"PlayerTrainingWeek"> | string
    userId?: StringFilter<"PlayerTrainingWeek"> | string
    playerTrainingProgramId?: StringFilter<"PlayerTrainingWeek"> | string
    playerTrainingProgramLevelId?: StringFilter<"PlayerTrainingWeek"> | string
    trainingProgramWeekIndex?: IntFilter<"PlayerTrainingWeek"> | number
    isCompleted?: BoolFilter<"PlayerTrainingWeek"> | boolean
    dateCompleted?: DateTimeNullableFilter<"PlayerTrainingWeek"> | Date | string | null
    dateCreated?: DateTimeFilter<"PlayerTrainingWeek"> | Date | string
  }

  export type PlayerTrainingWeekOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    playerTrainingProgramLevelId?: SortOrder
    trainingProgramWeekIndex?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    _relevance?: PlayerTrainingWeekOrderByRelevanceInput
  }

  export type PlayerTrainingWeekWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerTrainingWeekWhereInput | PlayerTrainingWeekWhereInput[]
    OR?: PlayerTrainingWeekWhereInput[]
    NOT?: PlayerTrainingWeekWhereInput | PlayerTrainingWeekWhereInput[]
    userId?: StringFilter<"PlayerTrainingWeek"> | string
    playerTrainingProgramId?: StringFilter<"PlayerTrainingWeek"> | string
    playerTrainingProgramLevelId?: StringFilter<"PlayerTrainingWeek"> | string
    trainingProgramWeekIndex?: IntFilter<"PlayerTrainingWeek"> | number
    isCompleted?: BoolFilter<"PlayerTrainingWeek"> | boolean
    dateCompleted?: DateTimeNullableFilter<"PlayerTrainingWeek"> | Date | string | null
    dateCreated?: DateTimeFilter<"PlayerTrainingWeek"> | Date | string
  }, "id">

  export type PlayerTrainingWeekOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    playerTrainingProgramLevelId?: SortOrder
    trainingProgramWeekIndex?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    _count?: PlayerTrainingWeekCountOrderByAggregateInput
    _avg?: PlayerTrainingWeekAvgOrderByAggregateInput
    _max?: PlayerTrainingWeekMaxOrderByAggregateInput
    _min?: PlayerTrainingWeekMinOrderByAggregateInput
    _sum?: PlayerTrainingWeekSumOrderByAggregateInput
  }

  export type PlayerTrainingWeekScalarWhereWithAggregatesInput = {
    AND?: PlayerTrainingWeekScalarWhereWithAggregatesInput | PlayerTrainingWeekScalarWhereWithAggregatesInput[]
    OR?: PlayerTrainingWeekScalarWhereWithAggregatesInput[]
    NOT?: PlayerTrainingWeekScalarWhereWithAggregatesInput | PlayerTrainingWeekScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerTrainingWeek"> | string
    userId?: StringWithAggregatesFilter<"PlayerTrainingWeek"> | string
    playerTrainingProgramId?: StringWithAggregatesFilter<"PlayerTrainingWeek"> | string
    playerTrainingProgramLevelId?: StringWithAggregatesFilter<"PlayerTrainingWeek"> | string
    trainingProgramWeekIndex?: IntWithAggregatesFilter<"PlayerTrainingWeek"> | number
    isCompleted?: BoolWithAggregatesFilter<"PlayerTrainingWeek"> | boolean
    dateCompleted?: DateTimeNullableWithAggregatesFilter<"PlayerTrainingWeek"> | Date | string | null
    dateCreated?: DateTimeWithAggregatesFilter<"PlayerTrainingWeek"> | Date | string
  }

  export type PlayerTrainingLevelWhereInput = {
    AND?: PlayerTrainingLevelWhereInput | PlayerTrainingLevelWhereInput[]
    OR?: PlayerTrainingLevelWhereInput[]
    NOT?: PlayerTrainingLevelWhereInput | PlayerTrainingLevelWhereInput[]
    id?: StringFilter<"PlayerTrainingLevel"> | string
    userId?: StringFilter<"PlayerTrainingLevel"> | string
    playerTrainingProgramId?: StringFilter<"PlayerTrainingLevel"> | string
    trainingProgramLevelIndex?: IntFilter<"PlayerTrainingLevel"> | number
    isCompleted?: BoolFilter<"PlayerTrainingLevel"> | boolean
    dateCompleted?: DateTimeNullableFilter<"PlayerTrainingLevel"> | Date | string | null
    dateCreated?: DateTimeFilter<"PlayerTrainingLevel"> | Date | string
  }

  export type PlayerTrainingLevelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    trainingProgramLevelIndex?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    _relevance?: PlayerTrainingLevelOrderByRelevanceInput
  }

  export type PlayerTrainingLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerTrainingLevelWhereInput | PlayerTrainingLevelWhereInput[]
    OR?: PlayerTrainingLevelWhereInput[]
    NOT?: PlayerTrainingLevelWhereInput | PlayerTrainingLevelWhereInput[]
    userId?: StringFilter<"PlayerTrainingLevel"> | string
    playerTrainingProgramId?: StringFilter<"PlayerTrainingLevel"> | string
    trainingProgramLevelIndex?: IntFilter<"PlayerTrainingLevel"> | number
    isCompleted?: BoolFilter<"PlayerTrainingLevel"> | boolean
    dateCompleted?: DateTimeNullableFilter<"PlayerTrainingLevel"> | Date | string | null
    dateCreated?: DateTimeFilter<"PlayerTrainingLevel"> | Date | string
  }, "id">

  export type PlayerTrainingLevelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    trainingProgramLevelIndex?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    _count?: PlayerTrainingLevelCountOrderByAggregateInput
    _avg?: PlayerTrainingLevelAvgOrderByAggregateInput
    _max?: PlayerTrainingLevelMaxOrderByAggregateInput
    _min?: PlayerTrainingLevelMinOrderByAggregateInput
    _sum?: PlayerTrainingLevelSumOrderByAggregateInput
  }

  export type PlayerTrainingLevelScalarWhereWithAggregatesInput = {
    AND?: PlayerTrainingLevelScalarWhereWithAggregatesInput | PlayerTrainingLevelScalarWhereWithAggregatesInput[]
    OR?: PlayerTrainingLevelScalarWhereWithAggregatesInput[]
    NOT?: PlayerTrainingLevelScalarWhereWithAggregatesInput | PlayerTrainingLevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerTrainingLevel"> | string
    userId?: StringWithAggregatesFilter<"PlayerTrainingLevel"> | string
    playerTrainingProgramId?: StringWithAggregatesFilter<"PlayerTrainingLevel"> | string
    trainingProgramLevelIndex?: IntWithAggregatesFilter<"PlayerTrainingLevel"> | number
    isCompleted?: BoolWithAggregatesFilter<"PlayerTrainingLevel"> | boolean
    dateCompleted?: DateTimeNullableWithAggregatesFilter<"PlayerTrainingLevel"> | Date | string | null
    dateCreated?: DateTimeWithAggregatesFilter<"PlayerTrainingLevel"> | Date | string
  }

  export type PlayerTrainingProgramWhereInput = {
    AND?: PlayerTrainingProgramWhereInput | PlayerTrainingProgramWhereInput[]
    OR?: PlayerTrainingProgramWhereInput[]
    NOT?: PlayerTrainingProgramWhereInput | PlayerTrainingProgramWhereInput[]
    id?: StringFilter<"PlayerTrainingProgram"> | string
    userId?: StringFilter<"PlayerTrainingProgram"> | string
    trainingProgramId?: StringFilter<"PlayerTrainingProgram"> | string
    isCompleted?: BoolFilter<"PlayerTrainingProgram"> | boolean
    isLocked?: BoolFilter<"PlayerTrainingProgram"> | boolean
    isLiked?: BoolFilter<"PlayerTrainingProgram"> | boolean
    isPremium?: BoolFilter<"PlayerTrainingProgram"> | boolean
    subscriptionType?: EnumSubscriptionTypeFilter<"PlayerTrainingProgram"> | $Enums.SubscriptionType
    subscriptionId?: StringNullableFilter<"PlayerTrainingProgram"> | string | null
    dateCompleted?: DateTimeNullableFilter<"PlayerTrainingProgram"> | Date | string | null
    dateCreated?: DateTimeFilter<"PlayerTrainingProgram"> | Date | string
  }

  export type PlayerTrainingProgramOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    trainingProgramId?: SortOrder
    isCompleted?: SortOrder
    isLocked?: SortOrder
    isLiked?: SortOrder
    isPremium?: SortOrder
    subscriptionType?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    _relevance?: PlayerTrainingProgramOrderByRelevanceInput
  }

  export type PlayerTrainingProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerTrainingProgramWhereInput | PlayerTrainingProgramWhereInput[]
    OR?: PlayerTrainingProgramWhereInput[]
    NOT?: PlayerTrainingProgramWhereInput | PlayerTrainingProgramWhereInput[]
    userId?: StringFilter<"PlayerTrainingProgram"> | string
    trainingProgramId?: StringFilter<"PlayerTrainingProgram"> | string
    isCompleted?: BoolFilter<"PlayerTrainingProgram"> | boolean
    isLocked?: BoolFilter<"PlayerTrainingProgram"> | boolean
    isLiked?: BoolFilter<"PlayerTrainingProgram"> | boolean
    isPremium?: BoolFilter<"PlayerTrainingProgram"> | boolean
    subscriptionType?: EnumSubscriptionTypeFilter<"PlayerTrainingProgram"> | $Enums.SubscriptionType
    subscriptionId?: StringNullableFilter<"PlayerTrainingProgram"> | string | null
    dateCompleted?: DateTimeNullableFilter<"PlayerTrainingProgram"> | Date | string | null
    dateCreated?: DateTimeFilter<"PlayerTrainingProgram"> | Date | string
  }, "id">

  export type PlayerTrainingProgramOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    trainingProgramId?: SortOrder
    isCompleted?: SortOrder
    isLocked?: SortOrder
    isLiked?: SortOrder
    isPremium?: SortOrder
    subscriptionType?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    _count?: PlayerTrainingProgramCountOrderByAggregateInput
    _max?: PlayerTrainingProgramMaxOrderByAggregateInput
    _min?: PlayerTrainingProgramMinOrderByAggregateInput
  }

  export type PlayerTrainingProgramScalarWhereWithAggregatesInput = {
    AND?: PlayerTrainingProgramScalarWhereWithAggregatesInput | PlayerTrainingProgramScalarWhereWithAggregatesInput[]
    OR?: PlayerTrainingProgramScalarWhereWithAggregatesInput[]
    NOT?: PlayerTrainingProgramScalarWhereWithAggregatesInput | PlayerTrainingProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerTrainingProgram"> | string
    userId?: StringWithAggregatesFilter<"PlayerTrainingProgram"> | string
    trainingProgramId?: StringWithAggregatesFilter<"PlayerTrainingProgram"> | string
    isCompleted?: BoolWithAggregatesFilter<"PlayerTrainingProgram"> | boolean
    isLocked?: BoolWithAggregatesFilter<"PlayerTrainingProgram"> | boolean
    isLiked?: BoolWithAggregatesFilter<"PlayerTrainingProgram"> | boolean
    isPremium?: BoolWithAggregatesFilter<"PlayerTrainingProgram"> | boolean
    subscriptionType?: EnumSubscriptionTypeWithAggregatesFilter<"PlayerTrainingProgram"> | $Enums.SubscriptionType
    subscriptionId?: StringNullableWithAggregatesFilter<"PlayerTrainingProgram"> | string | null
    dateCompleted?: DateTimeNullableWithAggregatesFilter<"PlayerTrainingProgram"> | Date | string | null
    dateCreated?: DateTimeWithAggregatesFilter<"PlayerTrainingProgram"> | Date | string
  }

  export type PlayerSubscriptionWhereInput = {
    AND?: PlayerSubscriptionWhereInput | PlayerSubscriptionWhereInput[]
    OR?: PlayerSubscriptionWhereInput[]
    NOT?: PlayerSubscriptionWhereInput | PlayerSubscriptionWhereInput[]
    id?: StringFilter<"PlayerSubscription"> | string
    userId?: StringFilter<"PlayerSubscription"> | string
    tier?: EnumSubscriptionTierFilter<"PlayerSubscription"> | $Enums.SubscriptionTier
    status?: EnumSubscriptionRecordStatusFilter<"PlayerSubscription"> | $Enums.SubscriptionRecordStatus
    startDate?: DateTimeFilter<"PlayerSubscription"> | Date | string
    endDate?: DateTimeNullableFilter<"PlayerSubscription"> | Date | string | null
    autoRenew?: BoolFilter<"PlayerSubscription"> | boolean
    createdAt?: DateTimeFilter<"PlayerSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlayerSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PlayerSubscriptionOrderByRelevanceInput
  }

  export type PlayerSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerSubscriptionWhereInput | PlayerSubscriptionWhereInput[]
    OR?: PlayerSubscriptionWhereInput[]
    NOT?: PlayerSubscriptionWhereInput | PlayerSubscriptionWhereInput[]
    userId?: StringFilter<"PlayerSubscription"> | string
    tier?: EnumSubscriptionTierFilter<"PlayerSubscription"> | $Enums.SubscriptionTier
    status?: EnumSubscriptionRecordStatusFilter<"PlayerSubscription"> | $Enums.SubscriptionRecordStatus
    startDate?: DateTimeFilter<"PlayerSubscription"> | Date | string
    endDate?: DateTimeNullableFilter<"PlayerSubscription"> | Date | string | null
    autoRenew?: BoolFilter<"PlayerSubscription"> | boolean
    createdAt?: DateTimeFilter<"PlayerSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PlayerSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerSubscriptionCountOrderByAggregateInput
    _max?: PlayerSubscriptionMaxOrderByAggregateInput
    _min?: PlayerSubscriptionMinOrderByAggregateInput
  }

  export type PlayerSubscriptionScalarWhereWithAggregatesInput = {
    AND?: PlayerSubscriptionScalarWhereWithAggregatesInput | PlayerSubscriptionScalarWhereWithAggregatesInput[]
    OR?: PlayerSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: PlayerSubscriptionScalarWhereWithAggregatesInput | PlayerSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerSubscription"> | string
    userId?: StringWithAggregatesFilter<"PlayerSubscription"> | string
    tier?: EnumSubscriptionTierWithAggregatesFilter<"PlayerSubscription"> | $Enums.SubscriptionTier
    status?: EnumSubscriptionRecordStatusWithAggregatesFilter<"PlayerSubscription"> | $Enums.SubscriptionRecordStatus
    startDate?: DateTimeWithAggregatesFilter<"PlayerSubscription"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"PlayerSubscription"> | Date | string | null
    autoRenew?: BoolWithAggregatesFilter<"PlayerSubscription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PlayerSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlayerSubscription"> | Date | string
  }

  export type SessionBookingWhereInput = {
    AND?: SessionBookingWhereInput | SessionBookingWhereInput[]
    OR?: SessionBookingWhereInput[]
    NOT?: SessionBookingWhereInput | SessionBookingWhereInput[]
    id?: StringFilter<"SessionBooking"> | string
    playerUserId?: StringFilter<"SessionBooking"> | string
    activityId?: StringFilter<"SessionBooking"> | string
    bookedAt?: DateTimeFilter<"SessionBooking"> | Date | string
    bookingStatus?: EnumBookingStatusFilter<"SessionBooking"> | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFilter<"SessionBooking"> | $Enums.AttendanceStatus
    joinedAt?: DateTimeNullableFilter<"SessionBooking"> | Date | string | null
    leftAt?: DateTimeNullableFilter<"SessionBooking"> | Date | string | null
    createdAt?: DateTimeFilter<"SessionBooking"> | Date | string
    updatedAt?: DateTimeFilter<"SessionBooking"> | Date | string
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }

  export type SessionBookingOrderByWithRelationInput = {
    id?: SortOrder
    playerUserId?: SortOrder
    activityId?: SortOrder
    bookedAt?: SortOrder
    bookingStatus?: SortOrder
    attendanceStatus?: SortOrder
    joinedAt?: SortOrderInput | SortOrder
    leftAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player?: UserOrderByWithRelationInput
    activity?: ActivityOrderByWithRelationInput
    _relevance?: SessionBookingOrderByRelevanceInput
  }

  export type SessionBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionBookingWhereInput | SessionBookingWhereInput[]
    OR?: SessionBookingWhereInput[]
    NOT?: SessionBookingWhereInput | SessionBookingWhereInput[]
    playerUserId?: StringFilter<"SessionBooking"> | string
    activityId?: StringFilter<"SessionBooking"> | string
    bookedAt?: DateTimeFilter<"SessionBooking"> | Date | string
    bookingStatus?: EnumBookingStatusFilter<"SessionBooking"> | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFilter<"SessionBooking"> | $Enums.AttendanceStatus
    joinedAt?: DateTimeNullableFilter<"SessionBooking"> | Date | string | null
    leftAt?: DateTimeNullableFilter<"SessionBooking"> | Date | string | null
    createdAt?: DateTimeFilter<"SessionBooking"> | Date | string
    updatedAt?: DateTimeFilter<"SessionBooking"> | Date | string
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }, "id">

  export type SessionBookingOrderByWithAggregationInput = {
    id?: SortOrder
    playerUserId?: SortOrder
    activityId?: SortOrder
    bookedAt?: SortOrder
    bookingStatus?: SortOrder
    attendanceStatus?: SortOrder
    joinedAt?: SortOrderInput | SortOrder
    leftAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionBookingCountOrderByAggregateInput
    _max?: SessionBookingMaxOrderByAggregateInput
    _min?: SessionBookingMinOrderByAggregateInput
  }

  export type SessionBookingScalarWhereWithAggregatesInput = {
    AND?: SessionBookingScalarWhereWithAggregatesInput | SessionBookingScalarWhereWithAggregatesInput[]
    OR?: SessionBookingScalarWhereWithAggregatesInput[]
    NOT?: SessionBookingScalarWhereWithAggregatesInput | SessionBookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionBooking"> | string
    playerUserId?: StringWithAggregatesFilter<"SessionBooking"> | string
    activityId?: StringWithAggregatesFilter<"SessionBooking"> | string
    bookedAt?: DateTimeWithAggregatesFilter<"SessionBooking"> | Date | string
    bookingStatus?: EnumBookingStatusWithAggregatesFilter<"SessionBooking"> | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusWithAggregatesFilter<"SessionBooking"> | $Enums.AttendanceStatus
    joinedAt?: DateTimeNullableWithAggregatesFilter<"SessionBooking"> | Date | string | null
    leftAt?: DateTimeNullableWithAggregatesFilter<"SessionBooking"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SessionBooking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SessionBooking"> | Date | string
  }

  export type MonthlyChurnMetricWhereInput = {
    AND?: MonthlyChurnMetricWhereInput | MonthlyChurnMetricWhereInput[]
    OR?: MonthlyChurnMetricWhereInput[]
    NOT?: MonthlyChurnMetricWhereInput | MonthlyChurnMetricWhereInput[]
    id?: StringFilter<"MonthlyChurnMetric"> | string
    monthStartDate?: DateTimeFilter<"MonthlyChurnMetric"> | Date | string
    clubId?: StringNullableFilter<"MonthlyChurnMetric"> | string | null
    healthyCount?: IntFilter<"MonthlyChurnMetric"> | number
    mightLeaveSoonCount?: IntFilter<"MonthlyChurnMetric"> | number
    atRiskCount?: IntFilter<"MonthlyChurnMetric"> | number
    churnedCount?: IntFilter<"MonthlyChurnMetric"> | number
    newPlayers?: IntFilter<"MonthlyChurnMetric"> | number
    netGrowth?: IntFilter<"MonthlyChurnMetric"> | number
    retentionRate?: DecimalNullableFilter<"MonthlyChurnMetric"> | Decimal | DecimalJsLike | number | string | null
    churnRate?: DecimalNullableFilter<"MonthlyChurnMetric"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"MonthlyChurnMetric"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyChurnMetric"> | Date | string
    club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
  }

  export type MonthlyChurnMetricOrderByWithRelationInput = {
    id?: SortOrder
    monthStartDate?: SortOrder
    clubId?: SortOrderInput | SortOrder
    healthyCount?: SortOrder
    mightLeaveSoonCount?: SortOrder
    atRiskCount?: SortOrder
    churnedCount?: SortOrder
    newPlayers?: SortOrder
    netGrowth?: SortOrder
    retentionRate?: SortOrderInput | SortOrder
    churnRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    club?: ClubOrderByWithRelationInput
    _relevance?: MonthlyChurnMetricOrderByRelevanceInput
  }

  export type MonthlyChurnMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonthlyChurnMetricWhereInput | MonthlyChurnMetricWhereInput[]
    OR?: MonthlyChurnMetricWhereInput[]
    NOT?: MonthlyChurnMetricWhereInput | MonthlyChurnMetricWhereInput[]
    monthStartDate?: DateTimeFilter<"MonthlyChurnMetric"> | Date | string
    clubId?: StringNullableFilter<"MonthlyChurnMetric"> | string | null
    healthyCount?: IntFilter<"MonthlyChurnMetric"> | number
    mightLeaveSoonCount?: IntFilter<"MonthlyChurnMetric"> | number
    atRiskCount?: IntFilter<"MonthlyChurnMetric"> | number
    churnedCount?: IntFilter<"MonthlyChurnMetric"> | number
    newPlayers?: IntFilter<"MonthlyChurnMetric"> | number
    netGrowth?: IntFilter<"MonthlyChurnMetric"> | number
    retentionRate?: DecimalNullableFilter<"MonthlyChurnMetric"> | Decimal | DecimalJsLike | number | string | null
    churnRate?: DecimalNullableFilter<"MonthlyChurnMetric"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"MonthlyChurnMetric"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyChurnMetric"> | Date | string
    club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
  }, "id">

  export type MonthlyChurnMetricOrderByWithAggregationInput = {
    id?: SortOrder
    monthStartDate?: SortOrder
    clubId?: SortOrderInput | SortOrder
    healthyCount?: SortOrder
    mightLeaveSoonCount?: SortOrder
    atRiskCount?: SortOrder
    churnedCount?: SortOrder
    newPlayers?: SortOrder
    netGrowth?: SortOrder
    retentionRate?: SortOrderInput | SortOrder
    churnRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonthlyChurnMetricCountOrderByAggregateInput
    _avg?: MonthlyChurnMetricAvgOrderByAggregateInput
    _max?: MonthlyChurnMetricMaxOrderByAggregateInput
    _min?: MonthlyChurnMetricMinOrderByAggregateInput
    _sum?: MonthlyChurnMetricSumOrderByAggregateInput
  }

  export type MonthlyChurnMetricScalarWhereWithAggregatesInput = {
    AND?: MonthlyChurnMetricScalarWhereWithAggregatesInput | MonthlyChurnMetricScalarWhereWithAggregatesInput[]
    OR?: MonthlyChurnMetricScalarWhereWithAggregatesInput[]
    NOT?: MonthlyChurnMetricScalarWhereWithAggregatesInput | MonthlyChurnMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyChurnMetric"> | string
    monthStartDate?: DateTimeWithAggregatesFilter<"MonthlyChurnMetric"> | Date | string
    clubId?: StringNullableWithAggregatesFilter<"MonthlyChurnMetric"> | string | null
    healthyCount?: IntWithAggregatesFilter<"MonthlyChurnMetric"> | number
    mightLeaveSoonCount?: IntWithAggregatesFilter<"MonthlyChurnMetric"> | number
    atRiskCount?: IntWithAggregatesFilter<"MonthlyChurnMetric"> | number
    churnedCount?: IntWithAggregatesFilter<"MonthlyChurnMetric"> | number
    newPlayers?: IntWithAggregatesFilter<"MonthlyChurnMetric"> | number
    netGrowth?: IntWithAggregatesFilter<"MonthlyChurnMetric"> | number
    retentionRate?: DecimalNullableWithAggregatesFilter<"MonthlyChurnMetric"> | Decimal | DecimalJsLike | number | string | null
    churnRate?: DecimalNullableWithAggregatesFilter<"MonthlyChurnMetric"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MonthlyChurnMetric"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonthlyChurnMetric"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    userType?: $Enums.UserType
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    club?: ClubCreateNestedOneWithoutUserInput
    team?: TeamCreateNestedOneWithoutUserInput
    Activity?: ActivityCreateNestedManyWithoutUserInput
    playerSubscriptions?: PlayerSubscriptionCreateNestedManyWithoutUserInput
    sessionBookings?: SessionBookingCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    userType?: $Enums.UserType
    clubId?: string | null
    teamId?: string | null
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    Activity?: ActivityUncheckedCreateNestedManyWithoutUserInput
    playerSubscriptions?: PlayerSubscriptionUncheckedCreateNestedManyWithoutUserInput
    sessionBookings?: SessionBookingUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club?: ClubUpdateOneWithoutUserNestedInput
    team?: TeamUpdateOneWithoutUserNestedInput
    Activity?: ActivityUpdateManyWithoutUserNestedInput
    playerSubscriptions?: PlayerSubscriptionUpdateManyWithoutUserNestedInput
    sessionBookings?: SessionBookingUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activity?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    playerSubscriptions?: PlayerSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    sessionBookings?: SessionBookingUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    userType?: $Enums.UserType
    clubId?: string | null
    teamId?: string | null
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClubCreateInput = {
    id: string
    display: string
    location?: string | null
    income?: number
    organizationNumber?: string | null
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    type?: $Enums.AdminRole
    subscriptionStatus?: $Enums.SubscriptionStatus
    teams?: TeamCreateNestedManyWithoutClubInput
    Activity?: ActivityCreateNestedManyWithoutClubInput
    User?: UserCreateNestedManyWithoutClubInput
    metrics?: MonthlyChurnMetricCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateInput = {
    id: string
    display: string
    location?: string | null
    income?: number
    organizationNumber?: string | null
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    type?: $Enums.AdminRole
    subscriptionStatus?: $Enums.SubscriptionStatus
    teams?: TeamUncheckedCreateNestedManyWithoutClubInput
    Activity?: ActivityUncheckedCreateNestedManyWithoutClubInput
    User?: UserUncheckedCreateNestedManyWithoutClubInput
    metrics?: MonthlyChurnMetricUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    teams?: TeamUpdateManyWithoutClubNestedInput
    Activity?: ActivityUpdateManyWithoutClubNestedInput
    User?: UserUpdateManyWithoutClubNestedInput
    metrics?: MonthlyChurnMetricUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    teams?: TeamUncheckedUpdateManyWithoutClubNestedInput
    Activity?: ActivityUncheckedUpdateManyWithoutClubNestedInput
    User?: UserUncheckedUpdateManyWithoutClubNestedInput
    metrics?: MonthlyChurnMetricUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubCreateManyInput = {
    id: string
    display: string
    location?: string | null
    income?: number
    organizationNumber?: string | null
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    type?: $Enums.AdminRole
    subscriptionStatus?: $Enums.SubscriptionStatus
  }

  export type ClubUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
  }

  export type ClubUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
  }

  export type TeamCreateInput = {
    id: string
    display: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    club: ClubCreateNestedOneWithoutTeamsInput
    Activity?: ActivityCreateNestedManyWithoutTeamInput
    User?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id: string
    display: string
    clubId: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    Activity?: ActivityUncheckedCreateNestedManyWithoutTeamInput
    User?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club?: ClubUpdateOneRequiredWithoutTeamsNestedInput
    Activity?: ActivityUpdateManyWithoutTeamNestedInput
    User?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activity?: ActivityUncheckedUpdateManyWithoutTeamNestedInput
    User?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id: string
    display: string
    clubId: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityCreateInput = {
    id: string
    name?: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    team?: TeamCreateNestedOneWithoutActivityInput
    club?: ClubCreateNestedOneWithoutActivityInput
    user: UserCreateNestedOneWithoutActivityInput
    bookings?: SessionBookingCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id: string
    teamId?: string | null
    clubId?: string | null
    name?: string
    coachUserId: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    bookings?: SessionBookingUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneWithoutActivityNestedInput
    club?: ClubUpdateOneWithoutActivityNestedInput
    user?: UserUpdateOneRequiredWithoutActivityNestedInput
    bookings?: SessionBookingUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    coachUserId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: SessionBookingUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id: string
    teamId?: string | null
    clubId?: string | null
    name?: string
    coachUserId: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    coachUserId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlayerTrainingCreateInput = {
    id: string
    userId: string
    playerTrainingProgramId: string
    playerTrainingProgramLevelId: string
    playerTrainingProgramWeekId: string
    trainingIndex?: number
    points: number
    isCompleted: boolean
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
    trainingStartTime?: Date | string | null
    trainingEndTime?: Date | string | null
    address?: string | null
  }

  export type PlayerTrainingUncheckedCreateInput = {
    id: string
    userId: string
    playerTrainingProgramId: string
    playerTrainingProgramLevelId: string
    playerTrainingProgramWeekId: string
    trainingIndex?: number
    points: number
    isCompleted: boolean
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
    trainingStartTime?: Date | string | null
    trainingEndTime?: Date | string | null
    address?: string | null
  }

  export type PlayerTrainingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramLevelId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramWeekId?: StringFieldUpdateOperationsInput | string
    trainingIndex?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainingEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerTrainingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramLevelId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramWeekId?: StringFieldUpdateOperationsInput | string
    trainingIndex?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainingEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerTrainingCreateManyInput = {
    id: string
    userId: string
    playerTrainingProgramId: string
    playerTrainingProgramLevelId: string
    playerTrainingProgramWeekId: string
    trainingIndex?: number
    points: number
    isCompleted: boolean
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
    trainingStartTime?: Date | string | null
    trainingEndTime?: Date | string | null
    address?: string | null
  }

  export type PlayerTrainingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramLevelId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramWeekId?: StringFieldUpdateOperationsInput | string
    trainingIndex?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainingEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerTrainingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramLevelId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramWeekId?: StringFieldUpdateOperationsInput | string
    trainingIndex?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainingEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerTrainingWeekCreateInput = {
    id: string
    userId: string
    playerTrainingProgramId: string
    playerTrainingProgramLevelId: string
    trainingProgramWeekIndex?: number
    isCompleted: boolean
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
  }

  export type PlayerTrainingWeekUncheckedCreateInput = {
    id: string
    userId: string
    playerTrainingProgramId: string
    playerTrainingProgramLevelId: string
    trainingProgramWeekIndex?: number
    isCompleted: boolean
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
  }

  export type PlayerTrainingWeekUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramLevelId?: StringFieldUpdateOperationsInput | string
    trainingProgramWeekIndex?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTrainingWeekUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramLevelId?: StringFieldUpdateOperationsInput | string
    trainingProgramWeekIndex?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTrainingWeekCreateManyInput = {
    id: string
    userId: string
    playerTrainingProgramId: string
    playerTrainingProgramLevelId: string
    trainingProgramWeekIndex?: number
    isCompleted: boolean
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
  }

  export type PlayerTrainingWeekUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramLevelId?: StringFieldUpdateOperationsInput | string
    trainingProgramWeekIndex?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTrainingWeekUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramLevelId?: StringFieldUpdateOperationsInput | string
    trainingProgramWeekIndex?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTrainingLevelCreateInput = {
    id: string
    userId: string
    playerTrainingProgramId: string
    trainingProgramLevelIndex?: number
    isCompleted: boolean
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
  }

  export type PlayerTrainingLevelUncheckedCreateInput = {
    id: string
    userId: string
    playerTrainingProgramId: string
    trainingProgramLevelIndex?: number
    isCompleted: boolean
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
  }

  export type PlayerTrainingLevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    trainingProgramLevelIndex?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTrainingLevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    trainingProgramLevelIndex?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTrainingLevelCreateManyInput = {
    id: string
    userId: string
    playerTrainingProgramId: string
    trainingProgramLevelIndex?: number
    isCompleted: boolean
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
  }

  export type PlayerTrainingLevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    trainingProgramLevelIndex?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTrainingLevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerTrainingProgramId?: StringFieldUpdateOperationsInput | string
    trainingProgramLevelIndex?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTrainingProgramCreateInput = {
    id: string
    userId: string
    trainingProgramId: string
    isCompleted: boolean
    isLocked: boolean
    isLiked?: boolean
    isPremium: boolean
    subscriptionType: $Enums.SubscriptionType
    subscriptionId?: string | null
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
  }

  export type PlayerTrainingProgramUncheckedCreateInput = {
    id: string
    userId: string
    trainingProgramId: string
    isCompleted: boolean
    isLocked: boolean
    isLiked?: boolean
    isPremium: boolean
    subscriptionType: $Enums.SubscriptionType
    subscriptionId?: string | null
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
  }

  export type PlayerTrainingProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trainingProgramId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTrainingProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trainingProgramId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTrainingProgramCreateManyInput = {
    id: string
    userId: string
    trainingProgramId: string
    isCompleted: boolean
    isLocked: boolean
    isLiked?: boolean
    isPremium: boolean
    subscriptionType: $Enums.SubscriptionType
    subscriptionId?: string | null
    dateCompleted?: Date | string | null
    dateCreated?: Date | string
  }

  export type PlayerTrainingProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trainingProgramId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTrainingProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trainingProgramId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSubscriptionCreateInput = {
    id?: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionRecordStatus
    startDate?: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlayerSubscriptionsInput
  }

  export type PlayerSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionRecordStatus
    startDate?: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionRecordStatusFieldUpdateOperationsInput | $Enums.SubscriptionRecordStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlayerSubscriptionsNestedInput
  }

  export type PlayerSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionRecordStatusFieldUpdateOperationsInput | $Enums.SubscriptionRecordStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSubscriptionCreateManyInput = {
    id?: string
    userId: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionRecordStatus
    startDate?: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionRecordStatusFieldUpdateOperationsInput | $Enums.SubscriptionRecordStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionRecordStatusFieldUpdateOperationsInput | $Enums.SubscriptionRecordStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionBookingCreateInput = {
    id?: string
    bookedAt?: Date | string
    bookingStatus?: $Enums.BookingStatus
    attendanceStatus?: $Enums.AttendanceStatus
    joinedAt?: Date | string | null
    leftAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player: UserCreateNestedOneWithoutSessionBookingsInput
    activity: ActivityCreateNestedOneWithoutBookingsInput
  }

  export type SessionBookingUncheckedCreateInput = {
    id?: string
    playerUserId: string
    activityId: string
    bookedAt?: Date | string
    bookingStatus?: $Enums.BookingStatus
    attendanceStatus?: $Enums.AttendanceStatus
    joinedAt?: Date | string | null
    leftAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionBookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutSessionBookingsNestedInput
    activity?: ActivityUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type SessionBookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerUserId?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionBookingCreateManyInput = {
    id?: string
    playerUserId: string
    activityId: string
    bookedAt?: Date | string
    bookingStatus?: $Enums.BookingStatus
    attendanceStatus?: $Enums.AttendanceStatus
    joinedAt?: Date | string | null
    leftAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionBookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionBookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerUserId?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyChurnMetricCreateInput = {
    id?: string
    monthStartDate: Date | string
    healthyCount?: number
    mightLeaveSoonCount?: number
    atRiskCount?: number
    churnedCount?: number
    newPlayers?: number
    netGrowth?: number
    retentionRate?: Decimal | DecimalJsLike | number | string | null
    churnRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    club?: ClubCreateNestedOneWithoutMetricsInput
  }

  export type MonthlyChurnMetricUncheckedCreateInput = {
    id?: string
    monthStartDate: Date | string
    clubId?: string | null
    healthyCount?: number
    mightLeaveSoonCount?: number
    atRiskCount?: number
    churnedCount?: number
    newPlayers?: number
    netGrowth?: number
    retentionRate?: Decimal | DecimalJsLike | number | string | null
    churnRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyChurnMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    healthyCount?: IntFieldUpdateOperationsInput | number
    mightLeaveSoonCount?: IntFieldUpdateOperationsInput | number
    atRiskCount?: IntFieldUpdateOperationsInput | number
    churnedCount?: IntFieldUpdateOperationsInput | number
    newPlayers?: IntFieldUpdateOperationsInput | number
    netGrowth?: IntFieldUpdateOperationsInput | number
    retentionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    churnRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneWithoutMetricsNestedInput
  }

  export type MonthlyChurnMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    healthyCount?: IntFieldUpdateOperationsInput | number
    mightLeaveSoonCount?: IntFieldUpdateOperationsInput | number
    atRiskCount?: IntFieldUpdateOperationsInput | number
    churnedCount?: IntFieldUpdateOperationsInput | number
    newPlayers?: IntFieldUpdateOperationsInput | number
    netGrowth?: IntFieldUpdateOperationsInput | number
    retentionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    churnRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyChurnMetricCreateManyInput = {
    id?: string
    monthStartDate: Date | string
    clubId?: string | null
    healthyCount?: number
    mightLeaveSoonCount?: number
    atRiskCount?: number
    churnedCount?: number
    newPlayers?: number
    netGrowth?: number
    retentionRate?: Decimal | DecimalJsLike | number | string | null
    churnRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyChurnMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    healthyCount?: IntFieldUpdateOperationsInput | number
    mightLeaveSoonCount?: IntFieldUpdateOperationsInput | number
    atRiskCount?: IntFieldUpdateOperationsInput | number
    churnedCount?: IntFieldUpdateOperationsInput | number
    newPlayers?: IntFieldUpdateOperationsInput | number
    netGrowth?: IntFieldUpdateOperationsInput | number
    retentionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    churnRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyChurnMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    healthyCount?: IntFieldUpdateOperationsInput | number
    mightLeaveSoonCount?: IntFieldUpdateOperationsInput | number
    atRiskCount?: IntFieldUpdateOperationsInput | number
    churnedCount?: IntFieldUpdateOperationsInput | number
    newPlayers?: IntFieldUpdateOperationsInput | number
    netGrowth?: IntFieldUpdateOperationsInput | number
    retentionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    churnRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumChurnStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChurnStatus | EnumChurnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChurnStatus[]
    notIn?: $Enums.ChurnStatus[]
    not?: NestedEnumChurnStatusFilter<$PrismaModel> | $Enums.ChurnStatus
  }

  export type ClubNullableScalarRelationFilter = {
    is?: ClubWhereInput | null
    isNot?: ClubWhereInput | null
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type PlayerSubscriptionListRelationFilter = {
    every?: PlayerSubscriptionWhereInput
    some?: PlayerSubscriptionWhereInput
    none?: PlayerSubscriptionWhereInput
  }

  export type SessionBookingListRelationFilter = {
    every?: SessionBookingWhereInput
    some?: SessionBookingWhereInput
    none?: SessionBookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userType?: SortOrder
    clubId?: SortOrder
    teamId?: SortOrder
    disability?: SortOrder
    personNumber?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    clubOnboarding?: SortOrder
    gender?: SortOrder
    createdBy?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    churnStatus?: SortOrder
    joinedAt?: SortOrder
    lastActivityAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userType?: SortOrder
    clubId?: SortOrder
    teamId?: SortOrder
    disability?: SortOrder
    personNumber?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    clubOnboarding?: SortOrder
    gender?: SortOrder
    createdBy?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    churnStatus?: SortOrder
    joinedAt?: SortOrder
    lastActivityAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userType?: SortOrder
    clubId?: SortOrder
    teamId?: SortOrder
    disability?: SortOrder
    personNumber?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    clubOnboarding?: SortOrder
    gender?: SortOrder
    createdBy?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    churnStatus?: SortOrder
    joinedAt?: SortOrder
    lastActivityAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumChurnStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChurnStatus | EnumChurnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChurnStatus[]
    notIn?: $Enums.ChurnStatus[]
    not?: NestedEnumChurnStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChurnStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChurnStatusFilter<$PrismaModel>
    _max?: NestedEnumChurnStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type MonthlyChurnMetricListRelationFilter = {
    every?: MonthlyChurnMetricWhereInput
    some?: MonthlyChurnMetricWhereInput
    none?: MonthlyChurnMetricWhereInput
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthlyChurnMetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClubOrderByRelevanceInput = {
    fields: ClubOrderByRelevanceFieldEnum | ClubOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClubCountOrderByAggregateInput = {
    id?: SortOrder
    display?: SortOrder
    location?: SortOrder
    income?: SortOrder
    organizationNumber?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    type?: SortOrder
    subscriptionStatus?: SortOrder
  }

  export type ClubAvgOrderByAggregateInput = {
    income?: SortOrder
  }

  export type ClubMaxOrderByAggregateInput = {
    id?: SortOrder
    display?: SortOrder
    location?: SortOrder
    income?: SortOrder
    organizationNumber?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    type?: SortOrder
    subscriptionStatus?: SortOrder
  }

  export type ClubMinOrderByAggregateInput = {
    id?: SortOrder
    display?: SortOrder
    location?: SortOrder
    income?: SortOrder
    organizationNumber?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    type?: SortOrder
    subscriptionStatus?: SortOrder
  }

  export type ClubSumOrderByAggregateInput = {
    income?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type ClubScalarRelationFilter = {
    is?: ClubWhereInput
    isNot?: ClubWhereInput
  }

  export type TeamOrderByRelevanceInput = {
    fields: TeamOrderByRelevanceFieldEnum | TeamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    display?: SortOrder
    clubId?: SortOrder
    voided?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    display?: SortOrder
    clubId?: SortOrder
    voided?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    display?: SortOrder
    clubId?: SortOrder
    voided?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
  }

  export type EnumVisibilityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VisibilityType | EnumVisibilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisibilityType[]
    notIn?: $Enums.VisibilityType[]
    not?: NestedEnumVisibilityTypeFilter<$PrismaModel> | $Enums.VisibilityType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[]
    notIn?: $Enums.Language[]
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ActivityOrderByRelevanceInput = {
    fields: ActivityOrderByRelevanceFieldEnum | ActivityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    clubId?: SortOrder
    name?: SortOrder
    coachUserId?: SortOrder
    description?: SortOrder
    noOfReg?: SortOrder
    activityDate?: SortOrder
    income?: SortOrder
    program?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    visibilityType?: SortOrder
    equipments?: SortOrder
    type?: SortOrder
    language?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    noOfReg?: SortOrder
    income?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    clubId?: SortOrder
    name?: SortOrder
    coachUserId?: SortOrder
    description?: SortOrder
    noOfReg?: SortOrder
    activityDate?: SortOrder
    income?: SortOrder
    program?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    visibilityType?: SortOrder
    type?: SortOrder
    language?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    clubId?: SortOrder
    name?: SortOrder
    coachUserId?: SortOrder
    description?: SortOrder
    noOfReg?: SortOrder
    activityDate?: SortOrder
    income?: SortOrder
    program?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    visibilityType?: SortOrder
    type?: SortOrder
    language?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    noOfReg?: SortOrder
    income?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
  }

  export type EnumVisibilityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisibilityType | EnumVisibilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisibilityType[]
    notIn?: $Enums.VisibilityType[]
    not?: NestedEnumVisibilityTypeWithAggregatesFilter<$PrismaModel> | $Enums.VisibilityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityTypeFilter<$PrismaModel>
    _max?: NestedEnumVisibilityTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[]
    notIn?: $Enums.Language[]
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
  }

  export type PlayerTrainingOrderByRelevanceInput = {
    fields: PlayerTrainingOrderByRelevanceFieldEnum | PlayerTrainingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlayerTrainingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    playerTrainingProgramLevelId?: SortOrder
    playerTrainingProgramWeekId?: SortOrder
    trainingIndex?: SortOrder
    points?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
    trainingStartTime?: SortOrder
    trainingEndTime?: SortOrder
    address?: SortOrder
  }

  export type PlayerTrainingAvgOrderByAggregateInput = {
    trainingIndex?: SortOrder
    points?: SortOrder
  }

  export type PlayerTrainingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    playerTrainingProgramLevelId?: SortOrder
    playerTrainingProgramWeekId?: SortOrder
    trainingIndex?: SortOrder
    points?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
    trainingStartTime?: SortOrder
    trainingEndTime?: SortOrder
    address?: SortOrder
  }

  export type PlayerTrainingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    playerTrainingProgramLevelId?: SortOrder
    playerTrainingProgramWeekId?: SortOrder
    trainingIndex?: SortOrder
    points?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
    trainingStartTime?: SortOrder
    trainingEndTime?: SortOrder
    address?: SortOrder
  }

  export type PlayerTrainingSumOrderByAggregateInput = {
    trainingIndex?: SortOrder
    points?: SortOrder
  }

  export type PlayerTrainingWeekOrderByRelevanceInput = {
    fields: PlayerTrainingWeekOrderByRelevanceFieldEnum | PlayerTrainingWeekOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlayerTrainingWeekCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    playerTrainingProgramLevelId?: SortOrder
    trainingProgramWeekIndex?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
  }

  export type PlayerTrainingWeekAvgOrderByAggregateInput = {
    trainingProgramWeekIndex?: SortOrder
  }

  export type PlayerTrainingWeekMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    playerTrainingProgramLevelId?: SortOrder
    trainingProgramWeekIndex?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
  }

  export type PlayerTrainingWeekMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    playerTrainingProgramLevelId?: SortOrder
    trainingProgramWeekIndex?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
  }

  export type PlayerTrainingWeekSumOrderByAggregateInput = {
    trainingProgramWeekIndex?: SortOrder
  }

  export type PlayerTrainingLevelOrderByRelevanceInput = {
    fields: PlayerTrainingLevelOrderByRelevanceFieldEnum | PlayerTrainingLevelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlayerTrainingLevelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    trainingProgramLevelIndex?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
  }

  export type PlayerTrainingLevelAvgOrderByAggregateInput = {
    trainingProgramLevelIndex?: SortOrder
  }

  export type PlayerTrainingLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    trainingProgramLevelIndex?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
  }

  export type PlayerTrainingLevelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playerTrainingProgramId?: SortOrder
    trainingProgramLevelIndex?: SortOrder
    isCompleted?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
  }

  export type PlayerTrainingLevelSumOrderByAggregateInput = {
    trainingProgramLevelIndex?: SortOrder
  }

  export type EnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[]
    notIn?: $Enums.SubscriptionType[]
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type PlayerTrainingProgramOrderByRelevanceInput = {
    fields: PlayerTrainingProgramOrderByRelevanceFieldEnum | PlayerTrainingProgramOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlayerTrainingProgramCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trainingProgramId?: SortOrder
    isCompleted?: SortOrder
    isLocked?: SortOrder
    isLiked?: SortOrder
    isPremium?: SortOrder
    subscriptionType?: SortOrder
    subscriptionId?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
  }

  export type PlayerTrainingProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trainingProgramId?: SortOrder
    isCompleted?: SortOrder
    isLocked?: SortOrder
    isLiked?: SortOrder
    isPremium?: SortOrder
    subscriptionType?: SortOrder
    subscriptionId?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
  }

  export type PlayerTrainingProgramMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trainingProgramId?: SortOrder
    isCompleted?: SortOrder
    isLocked?: SortOrder
    isLiked?: SortOrder
    isPremium?: SortOrder
    subscriptionType?: SortOrder
    subscriptionId?: SortOrder
    dateCompleted?: SortOrder
    dateCreated?: SortOrder
  }

  export type EnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[]
    notIn?: $Enums.SubscriptionType[]
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type EnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[]
    notIn?: $Enums.SubscriptionTier[]
    not?: NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier
  }

  export type EnumSubscriptionRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionRecordStatus | EnumSubscriptionRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionRecordStatus[]
    notIn?: $Enums.SubscriptionRecordStatus[]
    not?: NestedEnumSubscriptionRecordStatusFilter<$PrismaModel> | $Enums.SubscriptionRecordStatus
  }

  export type PlayerSubscriptionOrderByRelevanceInput = {
    fields: PlayerSubscriptionOrderByRelevanceFieldEnum | PlayerSubscriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlayerSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[]
    notIn?: $Enums.SubscriptionTier[]
    not?: NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTierFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTierFilter<$PrismaModel>
  }

  export type EnumSubscriptionRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionRecordStatus | EnumSubscriptionRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionRecordStatus[]
    notIn?: $Enums.SubscriptionRecordStatus[]
    not?: NestedEnumSubscriptionRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionRecordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionRecordStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionRecordStatusFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type ActivityScalarRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type SessionBookingOrderByRelevanceInput = {
    fields: SessionBookingOrderByRelevanceFieldEnum | SessionBookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionBookingCountOrderByAggregateInput = {
    id?: SortOrder
    playerUserId?: SortOrder
    activityId?: SortOrder
    bookedAt?: SortOrder
    bookingStatus?: SortOrder
    attendanceStatus?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    playerUserId?: SortOrder
    activityId?: SortOrder
    bookedAt?: SortOrder
    bookingStatus?: SortOrder
    attendanceStatus?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionBookingMinOrderByAggregateInput = {
    id?: SortOrder
    playerUserId?: SortOrder
    activityId?: SortOrder
    bookedAt?: SortOrder
    bookingStatus?: SortOrder
    attendanceStatus?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type MonthlyChurnMetricOrderByRelevanceInput = {
    fields: MonthlyChurnMetricOrderByRelevanceFieldEnum | MonthlyChurnMetricOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MonthlyChurnMetricCountOrderByAggregateInput = {
    id?: SortOrder
    monthStartDate?: SortOrder
    clubId?: SortOrder
    healthyCount?: SortOrder
    mightLeaveSoonCount?: SortOrder
    atRiskCount?: SortOrder
    churnedCount?: SortOrder
    newPlayers?: SortOrder
    netGrowth?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyChurnMetricAvgOrderByAggregateInput = {
    healthyCount?: SortOrder
    mightLeaveSoonCount?: SortOrder
    atRiskCount?: SortOrder
    churnedCount?: SortOrder
    newPlayers?: SortOrder
    netGrowth?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
  }

  export type MonthlyChurnMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    monthStartDate?: SortOrder
    clubId?: SortOrder
    healthyCount?: SortOrder
    mightLeaveSoonCount?: SortOrder
    atRiskCount?: SortOrder
    churnedCount?: SortOrder
    newPlayers?: SortOrder
    netGrowth?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyChurnMetricMinOrderByAggregateInput = {
    id?: SortOrder
    monthStartDate?: SortOrder
    clubId?: SortOrder
    healthyCount?: SortOrder
    mightLeaveSoonCount?: SortOrder
    atRiskCount?: SortOrder
    churnedCount?: SortOrder
    newPlayers?: SortOrder
    netGrowth?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyChurnMetricSumOrderByAggregateInput = {
    healthyCount?: SortOrder
    mightLeaveSoonCount?: SortOrder
    atRiskCount?: SortOrder
    churnedCount?: SortOrder
    newPlayers?: SortOrder
    netGrowth?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ClubCreateNestedOneWithoutUserInput = {
    create?: XOR<ClubCreateWithoutUserInput, ClubUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClubCreateOrConnectWithoutUserInput
    connect?: ClubWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutUserInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput
    connect?: TeamWhereUniqueInput
  }

  export type ActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type PlayerSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayerSubscriptionCreateWithoutUserInput, PlayerSubscriptionUncheckedCreateWithoutUserInput> | PlayerSubscriptionCreateWithoutUserInput[] | PlayerSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerSubscriptionCreateOrConnectWithoutUserInput | PlayerSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: PlayerSubscriptionCreateManyUserInputEnvelope
    connect?: PlayerSubscriptionWhereUniqueInput | PlayerSubscriptionWhereUniqueInput[]
  }

  export type SessionBookingCreateNestedManyWithoutPlayerInput = {
    create?: XOR<SessionBookingCreateWithoutPlayerInput, SessionBookingUncheckedCreateWithoutPlayerInput> | SessionBookingCreateWithoutPlayerInput[] | SessionBookingUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SessionBookingCreateOrConnectWithoutPlayerInput | SessionBookingCreateOrConnectWithoutPlayerInput[]
    createMany?: SessionBookingCreateManyPlayerInputEnvelope
    connect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type PlayerSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayerSubscriptionCreateWithoutUserInput, PlayerSubscriptionUncheckedCreateWithoutUserInput> | PlayerSubscriptionCreateWithoutUserInput[] | PlayerSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerSubscriptionCreateOrConnectWithoutUserInput | PlayerSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: PlayerSubscriptionCreateManyUserInputEnvelope
    connect?: PlayerSubscriptionWhereUniqueInput | PlayerSubscriptionWhereUniqueInput[]
  }

  export type SessionBookingUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<SessionBookingCreateWithoutPlayerInput, SessionBookingUncheckedCreateWithoutPlayerInput> | SessionBookingCreateWithoutPlayerInput[] | SessionBookingUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SessionBookingCreateOrConnectWithoutPlayerInput | SessionBookingCreateOrConnectWithoutPlayerInput[]
    createMany?: SessionBookingCreateManyPlayerInputEnvelope
    connect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumChurnStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChurnStatus
  }

  export type ClubUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClubCreateWithoutUserInput, ClubUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClubCreateOrConnectWithoutUserInput
    upsert?: ClubUpsertWithoutUserInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutUserInput, ClubUpdateWithoutUserInput>, ClubUncheckedUpdateWithoutUserInput>
  }

  export type TeamUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput
    upsert?: TeamUpsertWithoutUserInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutUserInput, TeamUpdateWithoutUserInput>, TeamUncheckedUpdateWithoutUserInput>
  }

  export type ActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type PlayerSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayerSubscriptionCreateWithoutUserInput, PlayerSubscriptionUncheckedCreateWithoutUserInput> | PlayerSubscriptionCreateWithoutUserInput[] | PlayerSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerSubscriptionCreateOrConnectWithoutUserInput | PlayerSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: PlayerSubscriptionUpsertWithWhereUniqueWithoutUserInput | PlayerSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayerSubscriptionCreateManyUserInputEnvelope
    set?: PlayerSubscriptionWhereUniqueInput | PlayerSubscriptionWhereUniqueInput[]
    disconnect?: PlayerSubscriptionWhereUniqueInput | PlayerSubscriptionWhereUniqueInput[]
    delete?: PlayerSubscriptionWhereUniqueInput | PlayerSubscriptionWhereUniqueInput[]
    connect?: PlayerSubscriptionWhereUniqueInput | PlayerSubscriptionWhereUniqueInput[]
    update?: PlayerSubscriptionUpdateWithWhereUniqueWithoutUserInput | PlayerSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayerSubscriptionUpdateManyWithWhereWithoutUserInput | PlayerSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayerSubscriptionScalarWhereInput | PlayerSubscriptionScalarWhereInput[]
  }

  export type SessionBookingUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<SessionBookingCreateWithoutPlayerInput, SessionBookingUncheckedCreateWithoutPlayerInput> | SessionBookingCreateWithoutPlayerInput[] | SessionBookingUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SessionBookingCreateOrConnectWithoutPlayerInput | SessionBookingCreateOrConnectWithoutPlayerInput[]
    upsert?: SessionBookingUpsertWithWhereUniqueWithoutPlayerInput | SessionBookingUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: SessionBookingCreateManyPlayerInputEnvelope
    set?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    disconnect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    delete?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    connect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    update?: SessionBookingUpdateWithWhereUniqueWithoutPlayerInput | SessionBookingUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: SessionBookingUpdateManyWithWhereWithoutPlayerInput | SessionBookingUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: SessionBookingScalarWhereInput | SessionBookingScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type PlayerSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayerSubscriptionCreateWithoutUserInput, PlayerSubscriptionUncheckedCreateWithoutUserInput> | PlayerSubscriptionCreateWithoutUserInput[] | PlayerSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerSubscriptionCreateOrConnectWithoutUserInput | PlayerSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: PlayerSubscriptionUpsertWithWhereUniqueWithoutUserInput | PlayerSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayerSubscriptionCreateManyUserInputEnvelope
    set?: PlayerSubscriptionWhereUniqueInput | PlayerSubscriptionWhereUniqueInput[]
    disconnect?: PlayerSubscriptionWhereUniqueInput | PlayerSubscriptionWhereUniqueInput[]
    delete?: PlayerSubscriptionWhereUniqueInput | PlayerSubscriptionWhereUniqueInput[]
    connect?: PlayerSubscriptionWhereUniqueInput | PlayerSubscriptionWhereUniqueInput[]
    update?: PlayerSubscriptionUpdateWithWhereUniqueWithoutUserInput | PlayerSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayerSubscriptionUpdateManyWithWhereWithoutUserInput | PlayerSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayerSubscriptionScalarWhereInput | PlayerSubscriptionScalarWhereInput[]
  }

  export type SessionBookingUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<SessionBookingCreateWithoutPlayerInput, SessionBookingUncheckedCreateWithoutPlayerInput> | SessionBookingCreateWithoutPlayerInput[] | SessionBookingUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SessionBookingCreateOrConnectWithoutPlayerInput | SessionBookingCreateOrConnectWithoutPlayerInput[]
    upsert?: SessionBookingUpsertWithWhereUniqueWithoutPlayerInput | SessionBookingUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: SessionBookingCreateManyPlayerInputEnvelope
    set?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    disconnect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    delete?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    connect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    update?: SessionBookingUpdateWithWhereUniqueWithoutPlayerInput | SessionBookingUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: SessionBookingUpdateManyWithWhereWithoutPlayerInput | SessionBookingUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: SessionBookingScalarWhereInput | SessionBookingScalarWhereInput[]
  }

  export type TeamCreateNestedManyWithoutClubInput = {
    create?: XOR<TeamCreateWithoutClubInput, TeamUncheckedCreateWithoutClubInput> | TeamCreateWithoutClubInput[] | TeamUncheckedCreateWithoutClubInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutClubInput | TeamCreateOrConnectWithoutClubInput[]
    createMany?: TeamCreateManyClubInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutClubInput = {
    create?: XOR<ActivityCreateWithoutClubInput, ActivityUncheckedCreateWithoutClubInput> | ActivityCreateWithoutClubInput[] | ActivityUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutClubInput | ActivityCreateOrConnectWithoutClubInput[]
    createMany?: ActivityCreateManyClubInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutClubInput = {
    create?: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput> | UserCreateWithoutClubInput[] | UserUncheckedCreateWithoutClubInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubInput | UserCreateOrConnectWithoutClubInput[]
    createMany?: UserCreateManyClubInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MonthlyChurnMetricCreateNestedManyWithoutClubInput = {
    create?: XOR<MonthlyChurnMetricCreateWithoutClubInput, MonthlyChurnMetricUncheckedCreateWithoutClubInput> | MonthlyChurnMetricCreateWithoutClubInput[] | MonthlyChurnMetricUncheckedCreateWithoutClubInput[]
    connectOrCreate?: MonthlyChurnMetricCreateOrConnectWithoutClubInput | MonthlyChurnMetricCreateOrConnectWithoutClubInput[]
    createMany?: MonthlyChurnMetricCreateManyClubInputEnvelope
    connect?: MonthlyChurnMetricWhereUniqueInput | MonthlyChurnMetricWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<TeamCreateWithoutClubInput, TeamUncheckedCreateWithoutClubInput> | TeamCreateWithoutClubInput[] | TeamUncheckedCreateWithoutClubInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutClubInput | TeamCreateOrConnectWithoutClubInput[]
    createMany?: TeamCreateManyClubInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<ActivityCreateWithoutClubInput, ActivityUncheckedCreateWithoutClubInput> | ActivityCreateWithoutClubInput[] | ActivityUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutClubInput | ActivityCreateOrConnectWithoutClubInput[]
    createMany?: ActivityCreateManyClubInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput> | UserCreateWithoutClubInput[] | UserUncheckedCreateWithoutClubInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubInput | UserCreateOrConnectWithoutClubInput[]
    createMany?: UserCreateManyClubInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MonthlyChurnMetricUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<MonthlyChurnMetricCreateWithoutClubInput, MonthlyChurnMetricUncheckedCreateWithoutClubInput> | MonthlyChurnMetricCreateWithoutClubInput[] | MonthlyChurnMetricUncheckedCreateWithoutClubInput[]
    connectOrCreate?: MonthlyChurnMetricCreateOrConnectWithoutClubInput | MonthlyChurnMetricCreateOrConnectWithoutClubInput[]
    createMany?: MonthlyChurnMetricCreateManyClubInputEnvelope
    connect?: MonthlyChurnMetricWhereUniqueInput | MonthlyChurnMetricWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type TeamUpdateManyWithoutClubNestedInput = {
    create?: XOR<TeamCreateWithoutClubInput, TeamUncheckedCreateWithoutClubInput> | TeamCreateWithoutClubInput[] | TeamUncheckedCreateWithoutClubInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutClubInput | TeamCreateOrConnectWithoutClubInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutClubInput | TeamUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: TeamCreateManyClubInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutClubInput | TeamUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutClubInput | TeamUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutClubNestedInput = {
    create?: XOR<ActivityCreateWithoutClubInput, ActivityUncheckedCreateWithoutClubInput> | ActivityCreateWithoutClubInput[] | ActivityUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutClubInput | ActivityCreateOrConnectWithoutClubInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutClubInput | ActivityUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: ActivityCreateManyClubInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutClubInput | ActivityUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutClubInput | ActivityUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type UserUpdateManyWithoutClubNestedInput = {
    create?: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput> | UserCreateWithoutClubInput[] | UserUncheckedCreateWithoutClubInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubInput | UserCreateOrConnectWithoutClubInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClubInput | UserUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: UserCreateManyClubInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClubInput | UserUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClubInput | UserUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MonthlyChurnMetricUpdateManyWithoutClubNestedInput = {
    create?: XOR<MonthlyChurnMetricCreateWithoutClubInput, MonthlyChurnMetricUncheckedCreateWithoutClubInput> | MonthlyChurnMetricCreateWithoutClubInput[] | MonthlyChurnMetricUncheckedCreateWithoutClubInput[]
    connectOrCreate?: MonthlyChurnMetricCreateOrConnectWithoutClubInput | MonthlyChurnMetricCreateOrConnectWithoutClubInput[]
    upsert?: MonthlyChurnMetricUpsertWithWhereUniqueWithoutClubInput | MonthlyChurnMetricUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: MonthlyChurnMetricCreateManyClubInputEnvelope
    set?: MonthlyChurnMetricWhereUniqueInput | MonthlyChurnMetricWhereUniqueInput[]
    disconnect?: MonthlyChurnMetricWhereUniqueInput | MonthlyChurnMetricWhereUniqueInput[]
    delete?: MonthlyChurnMetricWhereUniqueInput | MonthlyChurnMetricWhereUniqueInput[]
    connect?: MonthlyChurnMetricWhereUniqueInput | MonthlyChurnMetricWhereUniqueInput[]
    update?: MonthlyChurnMetricUpdateWithWhereUniqueWithoutClubInput | MonthlyChurnMetricUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: MonthlyChurnMetricUpdateManyWithWhereWithoutClubInput | MonthlyChurnMetricUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: MonthlyChurnMetricScalarWhereInput | MonthlyChurnMetricScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<TeamCreateWithoutClubInput, TeamUncheckedCreateWithoutClubInput> | TeamCreateWithoutClubInput[] | TeamUncheckedCreateWithoutClubInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutClubInput | TeamCreateOrConnectWithoutClubInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutClubInput | TeamUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: TeamCreateManyClubInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutClubInput | TeamUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutClubInput | TeamUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<ActivityCreateWithoutClubInput, ActivityUncheckedCreateWithoutClubInput> | ActivityCreateWithoutClubInput[] | ActivityUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutClubInput | ActivityCreateOrConnectWithoutClubInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutClubInput | ActivityUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: ActivityCreateManyClubInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutClubInput | ActivityUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutClubInput | ActivityUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput> | UserCreateWithoutClubInput[] | UserUncheckedCreateWithoutClubInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubInput | UserCreateOrConnectWithoutClubInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClubInput | UserUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: UserCreateManyClubInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClubInput | UserUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClubInput | UserUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MonthlyChurnMetricUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<MonthlyChurnMetricCreateWithoutClubInput, MonthlyChurnMetricUncheckedCreateWithoutClubInput> | MonthlyChurnMetricCreateWithoutClubInput[] | MonthlyChurnMetricUncheckedCreateWithoutClubInput[]
    connectOrCreate?: MonthlyChurnMetricCreateOrConnectWithoutClubInput | MonthlyChurnMetricCreateOrConnectWithoutClubInput[]
    upsert?: MonthlyChurnMetricUpsertWithWhereUniqueWithoutClubInput | MonthlyChurnMetricUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: MonthlyChurnMetricCreateManyClubInputEnvelope
    set?: MonthlyChurnMetricWhereUniqueInput | MonthlyChurnMetricWhereUniqueInput[]
    disconnect?: MonthlyChurnMetricWhereUniqueInput | MonthlyChurnMetricWhereUniqueInput[]
    delete?: MonthlyChurnMetricWhereUniqueInput | MonthlyChurnMetricWhereUniqueInput[]
    connect?: MonthlyChurnMetricWhereUniqueInput | MonthlyChurnMetricWhereUniqueInput[]
    update?: MonthlyChurnMetricUpdateWithWhereUniqueWithoutClubInput | MonthlyChurnMetricUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: MonthlyChurnMetricUpdateManyWithWhereWithoutClubInput | MonthlyChurnMetricUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: MonthlyChurnMetricScalarWhereInput | MonthlyChurnMetricScalarWhereInput[]
  }

  export type ClubCreateNestedOneWithoutTeamsInput = {
    create?: XOR<ClubCreateWithoutTeamsInput, ClubUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutTeamsInput
    connect?: ClubWhereUniqueInput
  }

  export type ActivityCreateNestedManyWithoutTeamInput = {
    create?: XOR<ActivityCreateWithoutTeamInput, ActivityUncheckedCreateWithoutTeamInput> | ActivityCreateWithoutTeamInput[] | ActivityUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTeamInput | ActivityCreateOrConnectWithoutTeamInput[]
    createMany?: ActivityCreateManyTeamInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ActivityCreateWithoutTeamInput, ActivityUncheckedCreateWithoutTeamInput> | ActivityCreateWithoutTeamInput[] | ActivityUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTeamInput | ActivityCreateOrConnectWithoutTeamInput[]
    createMany?: ActivityCreateManyTeamInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClubUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<ClubCreateWithoutTeamsInput, ClubUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutTeamsInput
    upsert?: ClubUpsertWithoutTeamsInput
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutTeamsInput, ClubUpdateWithoutTeamsInput>, ClubUncheckedUpdateWithoutTeamsInput>
  }

  export type ActivityUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ActivityCreateWithoutTeamInput, ActivityUncheckedCreateWithoutTeamInput> | ActivityCreateWithoutTeamInput[] | ActivityUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTeamInput | ActivityCreateOrConnectWithoutTeamInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutTeamInput | ActivityUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ActivityCreateManyTeamInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutTeamInput | ActivityUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutTeamInput | ActivityUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ActivityCreateWithoutTeamInput, ActivityUncheckedCreateWithoutTeamInput> | ActivityCreateWithoutTeamInput[] | ActivityUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTeamInput | ActivityCreateOrConnectWithoutTeamInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutTeamInput | ActivityUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ActivityCreateManyTeamInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutTeamInput | ActivityUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutTeamInput | ActivityUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutActivityInput = {
    create?: XOR<TeamCreateWithoutActivityInput, TeamUncheckedCreateWithoutActivityInput>
    connectOrCreate?: TeamCreateOrConnectWithoutActivityInput
    connect?: TeamWhereUniqueInput
  }

  export type ClubCreateNestedOneWithoutActivityInput = {
    create?: XOR<ClubCreateWithoutActivityInput, ClubUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ClubCreateOrConnectWithoutActivityInput
    connect?: ClubWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActivityInput = {
    create?: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityInput
    connect?: UserWhereUniqueInput
  }

  export type SessionBookingCreateNestedManyWithoutActivityInput = {
    create?: XOR<SessionBookingCreateWithoutActivityInput, SessionBookingUncheckedCreateWithoutActivityInput> | SessionBookingCreateWithoutActivityInput[] | SessionBookingUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: SessionBookingCreateOrConnectWithoutActivityInput | SessionBookingCreateOrConnectWithoutActivityInput[]
    createMany?: SessionBookingCreateManyActivityInputEnvelope
    connect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
  }

  export type SessionBookingUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<SessionBookingCreateWithoutActivityInput, SessionBookingUncheckedCreateWithoutActivityInput> | SessionBookingCreateWithoutActivityInput[] | SessionBookingUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: SessionBookingCreateOrConnectWithoutActivityInput | SessionBookingCreateOrConnectWithoutActivityInput[]
    createMany?: SessionBookingCreateManyActivityInputEnvelope
    connect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
  }

  export type EnumVisibilityTypeFieldUpdateOperationsInput = {
    set?: $Enums.VisibilityType
  }

  export type EnumLanguageFieldUpdateOperationsInput = {
    set?: $Enums.Language
  }

  export type TeamUpdateOneWithoutActivityNestedInput = {
    create?: XOR<TeamCreateWithoutActivityInput, TeamUncheckedCreateWithoutActivityInput>
    connectOrCreate?: TeamCreateOrConnectWithoutActivityInput
    upsert?: TeamUpsertWithoutActivityInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutActivityInput, TeamUpdateWithoutActivityInput>, TeamUncheckedUpdateWithoutActivityInput>
  }

  export type ClubUpdateOneWithoutActivityNestedInput = {
    create?: XOR<ClubCreateWithoutActivityInput, ClubUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ClubCreateOrConnectWithoutActivityInput
    upsert?: ClubUpsertWithoutActivityInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutActivityInput, ClubUpdateWithoutActivityInput>, ClubUncheckedUpdateWithoutActivityInput>
  }

  export type UserUpdateOneRequiredWithoutActivityNestedInput = {
    create?: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityInput
    upsert?: UserUpsertWithoutActivityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityInput, UserUpdateWithoutActivityInput>, UserUncheckedUpdateWithoutActivityInput>
  }

  export type SessionBookingUpdateManyWithoutActivityNestedInput = {
    create?: XOR<SessionBookingCreateWithoutActivityInput, SessionBookingUncheckedCreateWithoutActivityInput> | SessionBookingCreateWithoutActivityInput[] | SessionBookingUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: SessionBookingCreateOrConnectWithoutActivityInput | SessionBookingCreateOrConnectWithoutActivityInput[]
    upsert?: SessionBookingUpsertWithWhereUniqueWithoutActivityInput | SessionBookingUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: SessionBookingCreateManyActivityInputEnvelope
    set?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    disconnect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    delete?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    connect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    update?: SessionBookingUpdateWithWhereUniqueWithoutActivityInput | SessionBookingUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: SessionBookingUpdateManyWithWhereWithoutActivityInput | SessionBookingUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: SessionBookingScalarWhereInput | SessionBookingScalarWhereInput[]
  }

  export type SessionBookingUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<SessionBookingCreateWithoutActivityInput, SessionBookingUncheckedCreateWithoutActivityInput> | SessionBookingCreateWithoutActivityInput[] | SessionBookingUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: SessionBookingCreateOrConnectWithoutActivityInput | SessionBookingCreateOrConnectWithoutActivityInput[]
    upsert?: SessionBookingUpsertWithWhereUniqueWithoutActivityInput | SessionBookingUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: SessionBookingCreateManyActivityInputEnvelope
    set?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    disconnect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    delete?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    connect?: SessionBookingWhereUniqueInput | SessionBookingWhereUniqueInput[]
    update?: SessionBookingUpdateWithWhereUniqueWithoutActivityInput | SessionBookingUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: SessionBookingUpdateManyWithWhereWithoutActivityInput | SessionBookingUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: SessionBookingScalarWhereInput | SessionBookingScalarWhereInput[]
  }

  export type EnumSubscriptionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionType
  }

  export type UserCreateNestedOneWithoutPlayerSubscriptionsInput = {
    create?: XOR<UserCreateWithoutPlayerSubscriptionsInput, UserUncheckedCreateWithoutPlayerSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSubscriptionTierFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionTier
  }

  export type EnumSubscriptionRecordStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionRecordStatus
  }

  export type UserUpdateOneRequiredWithoutPlayerSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutPlayerSubscriptionsInput, UserUncheckedCreateWithoutPlayerSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerSubscriptionsInput
    upsert?: UserUpsertWithoutPlayerSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerSubscriptionsInput, UserUpdateWithoutPlayerSubscriptionsInput>, UserUncheckedUpdateWithoutPlayerSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutSessionBookingsInput = {
    create?: XOR<UserCreateWithoutSessionBookingsInput, UserUncheckedCreateWithoutSessionBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ActivityCreateWithoutBookingsInput, ActivityUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutBookingsInput
    connect?: ActivityWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type UserUpdateOneRequiredWithoutSessionBookingsNestedInput = {
    create?: XOR<UserCreateWithoutSessionBookingsInput, UserUncheckedCreateWithoutSessionBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionBookingsInput
    upsert?: UserUpsertWithoutSessionBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionBookingsInput, UserUpdateWithoutSessionBookingsInput>, UserUncheckedUpdateWithoutSessionBookingsInput>
  }

  export type ActivityUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ActivityCreateWithoutBookingsInput, ActivityUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutBookingsInput
    upsert?: ActivityUpsertWithoutBookingsInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutBookingsInput, ActivityUpdateWithoutBookingsInput>, ActivityUncheckedUpdateWithoutBookingsInput>
  }

  export type ClubCreateNestedOneWithoutMetricsInput = {
    create?: XOR<ClubCreateWithoutMetricsInput, ClubUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutMetricsInput
    connect?: ClubWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ClubUpdateOneWithoutMetricsNestedInput = {
    create?: XOR<ClubCreateWithoutMetricsInput, ClubUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutMetricsInput
    upsert?: ClubUpsertWithoutMetricsInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutMetricsInput, ClubUpdateWithoutMetricsInput>, ClubUncheckedUpdateWithoutMetricsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumChurnStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChurnStatus | EnumChurnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChurnStatus[]
    notIn?: $Enums.ChurnStatus[]
    not?: NestedEnumChurnStatusFilter<$PrismaModel> | $Enums.ChurnStatus
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumChurnStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChurnStatus | EnumChurnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChurnStatus[]
    notIn?: $Enums.ChurnStatus[]
    not?: NestedEnumChurnStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChurnStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChurnStatusFilter<$PrismaModel>
    _max?: NestedEnumChurnStatusFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumVisibilityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VisibilityType | EnumVisibilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisibilityType[]
    notIn?: $Enums.VisibilityType[]
    not?: NestedEnumVisibilityTypeFilter<$PrismaModel> | $Enums.VisibilityType
  }

  export type NestedEnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[]
    notIn?: $Enums.Language[]
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type NestedEnumVisibilityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisibilityType | EnumVisibilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VisibilityType[]
    notIn?: $Enums.VisibilityType[]
    not?: NestedEnumVisibilityTypeWithAggregatesFilter<$PrismaModel> | $Enums.VisibilityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityTypeFilter<$PrismaModel>
    _max?: NestedEnumVisibilityTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[]
    notIn?: $Enums.Language[]
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[]
    notIn?: $Enums.SubscriptionType[]
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[]
    notIn?: $Enums.SubscriptionType[]
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[]
    notIn?: $Enums.SubscriptionTier[]
    not?: NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier
  }

  export type NestedEnumSubscriptionRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionRecordStatus | EnumSubscriptionRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionRecordStatus[]
    notIn?: $Enums.SubscriptionRecordStatus[]
    not?: NestedEnumSubscriptionRecordStatusFilter<$PrismaModel> | $Enums.SubscriptionRecordStatus
  }

  export type NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[]
    notIn?: $Enums.SubscriptionTier[]
    not?: NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTierFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTierFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionRecordStatus | EnumSubscriptionRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionRecordStatus[]
    notIn?: $Enums.SubscriptionRecordStatus[]
    not?: NestedEnumSubscriptionRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionRecordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionRecordStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionRecordStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ClubCreateWithoutUserInput = {
    id: string
    display: string
    location?: string | null
    income?: number
    organizationNumber?: string | null
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    type?: $Enums.AdminRole
    subscriptionStatus?: $Enums.SubscriptionStatus
    teams?: TeamCreateNestedManyWithoutClubInput
    Activity?: ActivityCreateNestedManyWithoutClubInput
    metrics?: MonthlyChurnMetricCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutUserInput = {
    id: string
    display: string
    location?: string | null
    income?: number
    organizationNumber?: string | null
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    type?: $Enums.AdminRole
    subscriptionStatus?: $Enums.SubscriptionStatus
    teams?: TeamUncheckedCreateNestedManyWithoutClubInput
    Activity?: ActivityUncheckedCreateNestedManyWithoutClubInput
    metrics?: MonthlyChurnMetricUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutUserInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutUserInput, ClubUncheckedCreateWithoutUserInput>
  }

  export type TeamCreateWithoutUserInput = {
    id: string
    display: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    club: ClubCreateNestedOneWithoutTeamsInput
    Activity?: ActivityCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutUserInput = {
    id: string
    display: string
    clubId: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    Activity?: ActivityUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutUserInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
  }

  export type ActivityCreateWithoutUserInput = {
    id: string
    name?: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    team?: TeamCreateNestedOneWithoutActivityInput
    club?: ClubCreateNestedOneWithoutActivityInput
    bookings?: SessionBookingCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutUserInput = {
    id: string
    teamId?: string | null
    clubId?: string | null
    name?: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    bookings?: SessionBookingUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutUserInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityCreateManyUserInputEnvelope = {
    data: ActivityCreateManyUserInput | ActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlayerSubscriptionCreateWithoutUserInput = {
    id?: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionRecordStatus
    startDate?: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionRecordStatus
    startDate?: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerSubscriptionCreateOrConnectWithoutUserInput = {
    where: PlayerSubscriptionWhereUniqueInput
    create: XOR<PlayerSubscriptionCreateWithoutUserInput, PlayerSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type PlayerSubscriptionCreateManyUserInputEnvelope = {
    data: PlayerSubscriptionCreateManyUserInput | PlayerSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionBookingCreateWithoutPlayerInput = {
    id?: string
    bookedAt?: Date | string
    bookingStatus?: $Enums.BookingStatus
    attendanceStatus?: $Enums.AttendanceStatus
    joinedAt?: Date | string | null
    leftAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activity: ActivityCreateNestedOneWithoutBookingsInput
  }

  export type SessionBookingUncheckedCreateWithoutPlayerInput = {
    id?: string
    activityId: string
    bookedAt?: Date | string
    bookingStatus?: $Enums.BookingStatus
    attendanceStatus?: $Enums.AttendanceStatus
    joinedAt?: Date | string | null
    leftAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionBookingCreateOrConnectWithoutPlayerInput = {
    where: SessionBookingWhereUniqueInput
    create: XOR<SessionBookingCreateWithoutPlayerInput, SessionBookingUncheckedCreateWithoutPlayerInput>
  }

  export type SessionBookingCreateManyPlayerInputEnvelope = {
    data: SessionBookingCreateManyPlayerInput | SessionBookingCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type ClubUpsertWithoutUserInput = {
    update: XOR<ClubUpdateWithoutUserInput, ClubUncheckedUpdateWithoutUserInput>
    create: XOR<ClubCreateWithoutUserInput, ClubUncheckedCreateWithoutUserInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutUserInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutUserInput, ClubUncheckedUpdateWithoutUserInput>
  }

  export type ClubUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    teams?: TeamUpdateManyWithoutClubNestedInput
    Activity?: ActivityUpdateManyWithoutClubNestedInput
    metrics?: MonthlyChurnMetricUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    teams?: TeamUncheckedUpdateManyWithoutClubNestedInput
    Activity?: ActivityUncheckedUpdateManyWithoutClubNestedInput
    metrics?: MonthlyChurnMetricUncheckedUpdateManyWithoutClubNestedInput
  }

  export type TeamUpsertWithoutUserInput = {
    update: XOR<TeamUpdateWithoutUserInput, TeamUncheckedUpdateWithoutUserInput>
    create: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutUserInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutUserInput, TeamUncheckedUpdateWithoutUserInput>
  }

  export type TeamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club?: ClubUpdateOneRequiredWithoutTeamsNestedInput
    Activity?: ActivityUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activity?: ActivityUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type ActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
  }

  export type ActivityUpdateManyWithWhereWithoutUserInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    teamId?: StringNullableFilter<"Activity"> | string | null
    clubId?: StringNullableFilter<"Activity"> | string | null
    name?: StringFilter<"Activity"> | string
    coachUserId?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    noOfReg?: IntFilter<"Activity"> | number
    activityDate?: DateTimeFilter<"Activity"> | Date | string
    income?: IntFilter<"Activity"> | number
    program?: StringFilter<"Activity"> | string
    minAge?: IntFilter<"Activity"> | number
    maxAge?: IntFilter<"Activity"> | number
    visibilityType?: EnumVisibilityTypeFilter<"Activity"> | $Enums.VisibilityType
    equipments?: JsonFilter<"Activity">
    type?: EnumAdminRoleFilter<"Activity"> | $Enums.AdminRole
    language?: EnumLanguageFilter<"Activity"> | $Enums.Language
    dateCreated?: DateTimeFilter<"Activity"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"Activity"> | Date | string | null
  }

  export type PlayerSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: PlayerSubscriptionWhereUniqueInput
    update: XOR<PlayerSubscriptionUpdateWithoutUserInput, PlayerSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<PlayerSubscriptionCreateWithoutUserInput, PlayerSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type PlayerSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: PlayerSubscriptionWhereUniqueInput
    data: XOR<PlayerSubscriptionUpdateWithoutUserInput, PlayerSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type PlayerSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: PlayerSubscriptionScalarWhereInput
    data: XOR<PlayerSubscriptionUpdateManyMutationInput, PlayerSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type PlayerSubscriptionScalarWhereInput = {
    AND?: PlayerSubscriptionScalarWhereInput | PlayerSubscriptionScalarWhereInput[]
    OR?: PlayerSubscriptionScalarWhereInput[]
    NOT?: PlayerSubscriptionScalarWhereInput | PlayerSubscriptionScalarWhereInput[]
    id?: StringFilter<"PlayerSubscription"> | string
    userId?: StringFilter<"PlayerSubscription"> | string
    tier?: EnumSubscriptionTierFilter<"PlayerSubscription"> | $Enums.SubscriptionTier
    status?: EnumSubscriptionRecordStatusFilter<"PlayerSubscription"> | $Enums.SubscriptionRecordStatus
    startDate?: DateTimeFilter<"PlayerSubscription"> | Date | string
    endDate?: DateTimeNullableFilter<"PlayerSubscription"> | Date | string | null
    autoRenew?: BoolFilter<"PlayerSubscription"> | boolean
    createdAt?: DateTimeFilter<"PlayerSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerSubscription"> | Date | string
  }

  export type SessionBookingUpsertWithWhereUniqueWithoutPlayerInput = {
    where: SessionBookingWhereUniqueInput
    update: XOR<SessionBookingUpdateWithoutPlayerInput, SessionBookingUncheckedUpdateWithoutPlayerInput>
    create: XOR<SessionBookingCreateWithoutPlayerInput, SessionBookingUncheckedCreateWithoutPlayerInput>
  }

  export type SessionBookingUpdateWithWhereUniqueWithoutPlayerInput = {
    where: SessionBookingWhereUniqueInput
    data: XOR<SessionBookingUpdateWithoutPlayerInput, SessionBookingUncheckedUpdateWithoutPlayerInput>
  }

  export type SessionBookingUpdateManyWithWhereWithoutPlayerInput = {
    where: SessionBookingScalarWhereInput
    data: XOR<SessionBookingUpdateManyMutationInput, SessionBookingUncheckedUpdateManyWithoutPlayerInput>
  }

  export type SessionBookingScalarWhereInput = {
    AND?: SessionBookingScalarWhereInput | SessionBookingScalarWhereInput[]
    OR?: SessionBookingScalarWhereInput[]
    NOT?: SessionBookingScalarWhereInput | SessionBookingScalarWhereInput[]
    id?: StringFilter<"SessionBooking"> | string
    playerUserId?: StringFilter<"SessionBooking"> | string
    activityId?: StringFilter<"SessionBooking"> | string
    bookedAt?: DateTimeFilter<"SessionBooking"> | Date | string
    bookingStatus?: EnumBookingStatusFilter<"SessionBooking"> | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFilter<"SessionBooking"> | $Enums.AttendanceStatus
    joinedAt?: DateTimeNullableFilter<"SessionBooking"> | Date | string | null
    leftAt?: DateTimeNullableFilter<"SessionBooking"> | Date | string | null
    createdAt?: DateTimeFilter<"SessionBooking"> | Date | string
    updatedAt?: DateTimeFilter<"SessionBooking"> | Date | string
  }

  export type TeamCreateWithoutClubInput = {
    id: string
    display: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    Activity?: ActivityCreateNestedManyWithoutTeamInput
    User?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutClubInput = {
    id: string
    display: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    Activity?: ActivityUncheckedCreateNestedManyWithoutTeamInput
    User?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutClubInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutClubInput, TeamUncheckedCreateWithoutClubInput>
  }

  export type TeamCreateManyClubInputEnvelope = {
    data: TeamCreateManyClubInput | TeamCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutClubInput = {
    id: string
    name?: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    team?: TeamCreateNestedOneWithoutActivityInput
    user: UserCreateNestedOneWithoutActivityInput
    bookings?: SessionBookingCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutClubInput = {
    id: string
    teamId?: string | null
    name?: string
    coachUserId: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    bookings?: SessionBookingUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutClubInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutClubInput, ActivityUncheckedCreateWithoutClubInput>
  }

  export type ActivityCreateManyClubInputEnvelope = {
    data: ActivityCreateManyClubInput | ActivityCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutClubInput = {
    id: string
    userType?: $Enums.UserType
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    team?: TeamCreateNestedOneWithoutUserInput
    Activity?: ActivityCreateNestedManyWithoutUserInput
    playerSubscriptions?: PlayerSubscriptionCreateNestedManyWithoutUserInput
    sessionBookings?: SessionBookingCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutClubInput = {
    id: string
    userType?: $Enums.UserType
    teamId?: string | null
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    Activity?: ActivityUncheckedCreateNestedManyWithoutUserInput
    playerSubscriptions?: PlayerSubscriptionUncheckedCreateNestedManyWithoutUserInput
    sessionBookings?: SessionBookingUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutClubInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput>
  }

  export type UserCreateManyClubInputEnvelope = {
    data: UserCreateManyClubInput | UserCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyChurnMetricCreateWithoutClubInput = {
    id?: string
    monthStartDate: Date | string
    healthyCount?: number
    mightLeaveSoonCount?: number
    atRiskCount?: number
    churnedCount?: number
    newPlayers?: number
    netGrowth?: number
    retentionRate?: Decimal | DecimalJsLike | number | string | null
    churnRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyChurnMetricUncheckedCreateWithoutClubInput = {
    id?: string
    monthStartDate: Date | string
    healthyCount?: number
    mightLeaveSoonCount?: number
    atRiskCount?: number
    churnedCount?: number
    newPlayers?: number
    netGrowth?: number
    retentionRate?: Decimal | DecimalJsLike | number | string | null
    churnRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyChurnMetricCreateOrConnectWithoutClubInput = {
    where: MonthlyChurnMetricWhereUniqueInput
    create: XOR<MonthlyChurnMetricCreateWithoutClubInput, MonthlyChurnMetricUncheckedCreateWithoutClubInput>
  }

  export type MonthlyChurnMetricCreateManyClubInputEnvelope = {
    data: MonthlyChurnMetricCreateManyClubInput | MonthlyChurnMetricCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithWhereUniqueWithoutClubInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutClubInput, TeamUncheckedUpdateWithoutClubInput>
    create: XOR<TeamCreateWithoutClubInput, TeamUncheckedCreateWithoutClubInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutClubInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutClubInput, TeamUncheckedUpdateWithoutClubInput>
  }

  export type TeamUpdateManyWithWhereWithoutClubInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutClubInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    display?: StringFilter<"Team"> | string
    clubId?: StringFilter<"Team"> | string
    voided?: BoolFilter<"Team"> | boolean
    dateCreated?: DateTimeFilter<"Team"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"Team"> | Date | string | null
  }

  export type ActivityUpsertWithWhereUniqueWithoutClubInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutClubInput, ActivityUncheckedUpdateWithoutClubInput>
    create: XOR<ActivityCreateWithoutClubInput, ActivityUncheckedCreateWithoutClubInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutClubInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutClubInput, ActivityUncheckedUpdateWithoutClubInput>
  }

  export type ActivityUpdateManyWithWhereWithoutClubInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutClubInput>
  }

  export type UserUpsertWithWhereUniqueWithoutClubInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClubInput, UserUncheckedUpdateWithoutClubInput>
    create: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClubInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClubInput, UserUncheckedUpdateWithoutClubInput>
  }

  export type UserUpdateManyWithWhereWithoutClubInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClubInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    clubId?: StringNullableFilter<"User"> | string | null
    teamId?: StringNullableFilter<"User"> | string | null
    disability?: BoolFilter<"User"> | boolean
    personNumber?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    clubOnboarding?: BoolFilter<"User"> | boolean
    gender?: StringNullableFilter<"User"> | string | null
    createdBy?: EnumAdminRoleFilter<"User"> | $Enums.AdminRole
    dateCreated?: DateTimeFilter<"User"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"User"> | Date | string | null
    churnStatus?: EnumChurnStatusFilter<"User"> | $Enums.ChurnStatus
    joinedAt?: DateTimeFilter<"User"> | Date | string
    lastActivityAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type MonthlyChurnMetricUpsertWithWhereUniqueWithoutClubInput = {
    where: MonthlyChurnMetricWhereUniqueInput
    update: XOR<MonthlyChurnMetricUpdateWithoutClubInput, MonthlyChurnMetricUncheckedUpdateWithoutClubInput>
    create: XOR<MonthlyChurnMetricCreateWithoutClubInput, MonthlyChurnMetricUncheckedCreateWithoutClubInput>
  }

  export type MonthlyChurnMetricUpdateWithWhereUniqueWithoutClubInput = {
    where: MonthlyChurnMetricWhereUniqueInput
    data: XOR<MonthlyChurnMetricUpdateWithoutClubInput, MonthlyChurnMetricUncheckedUpdateWithoutClubInput>
  }

  export type MonthlyChurnMetricUpdateManyWithWhereWithoutClubInput = {
    where: MonthlyChurnMetricScalarWhereInput
    data: XOR<MonthlyChurnMetricUpdateManyMutationInput, MonthlyChurnMetricUncheckedUpdateManyWithoutClubInput>
  }

  export type MonthlyChurnMetricScalarWhereInput = {
    AND?: MonthlyChurnMetricScalarWhereInput | MonthlyChurnMetricScalarWhereInput[]
    OR?: MonthlyChurnMetricScalarWhereInput[]
    NOT?: MonthlyChurnMetricScalarWhereInput | MonthlyChurnMetricScalarWhereInput[]
    id?: StringFilter<"MonthlyChurnMetric"> | string
    monthStartDate?: DateTimeFilter<"MonthlyChurnMetric"> | Date | string
    clubId?: StringNullableFilter<"MonthlyChurnMetric"> | string | null
    healthyCount?: IntFilter<"MonthlyChurnMetric"> | number
    mightLeaveSoonCount?: IntFilter<"MonthlyChurnMetric"> | number
    atRiskCount?: IntFilter<"MonthlyChurnMetric"> | number
    churnedCount?: IntFilter<"MonthlyChurnMetric"> | number
    newPlayers?: IntFilter<"MonthlyChurnMetric"> | number
    netGrowth?: IntFilter<"MonthlyChurnMetric"> | number
    retentionRate?: DecimalNullableFilter<"MonthlyChurnMetric"> | Decimal | DecimalJsLike | number | string | null
    churnRate?: DecimalNullableFilter<"MonthlyChurnMetric"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"MonthlyChurnMetric"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyChurnMetric"> | Date | string
  }

  export type ClubCreateWithoutTeamsInput = {
    id: string
    display: string
    location?: string | null
    income?: number
    organizationNumber?: string | null
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    type?: $Enums.AdminRole
    subscriptionStatus?: $Enums.SubscriptionStatus
    Activity?: ActivityCreateNestedManyWithoutClubInput
    User?: UserCreateNestedManyWithoutClubInput
    metrics?: MonthlyChurnMetricCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutTeamsInput = {
    id: string
    display: string
    location?: string | null
    income?: number
    organizationNumber?: string | null
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    type?: $Enums.AdminRole
    subscriptionStatus?: $Enums.SubscriptionStatus
    Activity?: ActivityUncheckedCreateNestedManyWithoutClubInput
    User?: UserUncheckedCreateNestedManyWithoutClubInput
    metrics?: MonthlyChurnMetricUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutTeamsInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutTeamsInput, ClubUncheckedCreateWithoutTeamsInput>
  }

  export type ActivityCreateWithoutTeamInput = {
    id: string
    name?: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    club?: ClubCreateNestedOneWithoutActivityInput
    user: UserCreateNestedOneWithoutActivityInput
    bookings?: SessionBookingCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutTeamInput = {
    id: string
    clubId?: string | null
    name?: string
    coachUserId: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    bookings?: SessionBookingUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutTeamInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutTeamInput, ActivityUncheckedCreateWithoutTeamInput>
  }

  export type ActivityCreateManyTeamInputEnvelope = {
    data: ActivityCreateManyTeamInput | ActivityCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTeamInput = {
    id: string
    userType?: $Enums.UserType
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    club?: ClubCreateNestedOneWithoutUserInput
    Activity?: ActivityCreateNestedManyWithoutUserInput
    playerSubscriptions?: PlayerSubscriptionCreateNestedManyWithoutUserInput
    sessionBookings?: SessionBookingCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id: string
    userType?: $Enums.UserType
    clubId?: string | null
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    Activity?: ActivityUncheckedCreateNestedManyWithoutUserInput
    playerSubscriptions?: PlayerSubscriptionUncheckedCreateNestedManyWithoutUserInput
    sessionBookings?: SessionBookingUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type ClubUpsertWithoutTeamsInput = {
    update: XOR<ClubUpdateWithoutTeamsInput, ClubUncheckedUpdateWithoutTeamsInput>
    create: XOR<ClubCreateWithoutTeamsInput, ClubUncheckedCreateWithoutTeamsInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutTeamsInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutTeamsInput, ClubUncheckedUpdateWithoutTeamsInput>
  }

  export type ClubUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    Activity?: ActivityUpdateManyWithoutClubNestedInput
    User?: UserUpdateManyWithoutClubNestedInput
    metrics?: MonthlyChurnMetricUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    Activity?: ActivityUncheckedUpdateManyWithoutClubNestedInput
    User?: UserUncheckedUpdateManyWithoutClubNestedInput
    metrics?: MonthlyChurnMetricUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ActivityUpsertWithWhereUniqueWithoutTeamInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutTeamInput, ActivityUncheckedUpdateWithoutTeamInput>
    create: XOR<ActivityCreateWithoutTeamInput, ActivityUncheckedCreateWithoutTeamInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutTeamInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutTeamInput, ActivityUncheckedUpdateWithoutTeamInput>
  }

  export type ActivityUpdateManyWithWhereWithoutTeamInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamCreateWithoutActivityInput = {
    id: string
    display: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    club: ClubCreateNestedOneWithoutTeamsInput
    User?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutActivityInput = {
    id: string
    display: string
    clubId: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    User?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutActivityInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutActivityInput, TeamUncheckedCreateWithoutActivityInput>
  }

  export type ClubCreateWithoutActivityInput = {
    id: string
    display: string
    location?: string | null
    income?: number
    organizationNumber?: string | null
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    type?: $Enums.AdminRole
    subscriptionStatus?: $Enums.SubscriptionStatus
    teams?: TeamCreateNestedManyWithoutClubInput
    User?: UserCreateNestedManyWithoutClubInput
    metrics?: MonthlyChurnMetricCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutActivityInput = {
    id: string
    display: string
    location?: string | null
    income?: number
    organizationNumber?: string | null
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    type?: $Enums.AdminRole
    subscriptionStatus?: $Enums.SubscriptionStatus
    teams?: TeamUncheckedCreateNestedManyWithoutClubInput
    User?: UserUncheckedCreateNestedManyWithoutClubInput
    metrics?: MonthlyChurnMetricUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutActivityInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutActivityInput, ClubUncheckedCreateWithoutActivityInput>
  }

  export type UserCreateWithoutActivityInput = {
    id: string
    userType?: $Enums.UserType
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    club?: ClubCreateNestedOneWithoutUserInput
    team?: TeamCreateNestedOneWithoutUserInput
    playerSubscriptions?: PlayerSubscriptionCreateNestedManyWithoutUserInput
    sessionBookings?: SessionBookingCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutActivityInput = {
    id: string
    userType?: $Enums.UserType
    clubId?: string | null
    teamId?: string | null
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    playerSubscriptions?: PlayerSubscriptionUncheckedCreateNestedManyWithoutUserInput
    sessionBookings?: SessionBookingUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutActivityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
  }

  export type SessionBookingCreateWithoutActivityInput = {
    id?: string
    bookedAt?: Date | string
    bookingStatus?: $Enums.BookingStatus
    attendanceStatus?: $Enums.AttendanceStatus
    joinedAt?: Date | string | null
    leftAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player: UserCreateNestedOneWithoutSessionBookingsInput
  }

  export type SessionBookingUncheckedCreateWithoutActivityInput = {
    id?: string
    playerUserId: string
    bookedAt?: Date | string
    bookingStatus?: $Enums.BookingStatus
    attendanceStatus?: $Enums.AttendanceStatus
    joinedAt?: Date | string | null
    leftAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionBookingCreateOrConnectWithoutActivityInput = {
    where: SessionBookingWhereUniqueInput
    create: XOR<SessionBookingCreateWithoutActivityInput, SessionBookingUncheckedCreateWithoutActivityInput>
  }

  export type SessionBookingCreateManyActivityInputEnvelope = {
    data: SessionBookingCreateManyActivityInput | SessionBookingCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutActivityInput = {
    update: XOR<TeamUpdateWithoutActivityInput, TeamUncheckedUpdateWithoutActivityInput>
    create: XOR<TeamCreateWithoutActivityInput, TeamUncheckedCreateWithoutActivityInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutActivityInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutActivityInput, TeamUncheckedUpdateWithoutActivityInput>
  }

  export type TeamUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club?: ClubUpdateOneRequiredWithoutTeamsNestedInput
    User?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type ClubUpsertWithoutActivityInput = {
    update: XOR<ClubUpdateWithoutActivityInput, ClubUncheckedUpdateWithoutActivityInput>
    create: XOR<ClubCreateWithoutActivityInput, ClubUncheckedCreateWithoutActivityInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutActivityInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutActivityInput, ClubUncheckedUpdateWithoutActivityInput>
  }

  export type ClubUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    teams?: TeamUpdateManyWithoutClubNestedInput
    User?: UserUpdateManyWithoutClubNestedInput
    metrics?: MonthlyChurnMetricUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    teams?: TeamUncheckedUpdateManyWithoutClubNestedInput
    User?: UserUncheckedUpdateManyWithoutClubNestedInput
    metrics?: MonthlyChurnMetricUncheckedUpdateManyWithoutClubNestedInput
  }

  export type UserUpsertWithoutActivityInput = {
    update: XOR<UserUpdateWithoutActivityInput, UserUncheckedUpdateWithoutActivityInput>
    create: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityInput, UserUncheckedUpdateWithoutActivityInput>
  }

  export type UserUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club?: ClubUpdateOneWithoutUserNestedInput
    team?: TeamUpdateOneWithoutUserNestedInput
    playerSubscriptions?: PlayerSubscriptionUpdateManyWithoutUserNestedInput
    sessionBookings?: SessionBookingUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playerSubscriptions?: PlayerSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    sessionBookings?: SessionBookingUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type SessionBookingUpsertWithWhereUniqueWithoutActivityInput = {
    where: SessionBookingWhereUniqueInput
    update: XOR<SessionBookingUpdateWithoutActivityInput, SessionBookingUncheckedUpdateWithoutActivityInput>
    create: XOR<SessionBookingCreateWithoutActivityInput, SessionBookingUncheckedCreateWithoutActivityInput>
  }

  export type SessionBookingUpdateWithWhereUniqueWithoutActivityInput = {
    where: SessionBookingWhereUniqueInput
    data: XOR<SessionBookingUpdateWithoutActivityInput, SessionBookingUncheckedUpdateWithoutActivityInput>
  }

  export type SessionBookingUpdateManyWithWhereWithoutActivityInput = {
    where: SessionBookingScalarWhereInput
    data: XOR<SessionBookingUpdateManyMutationInput, SessionBookingUncheckedUpdateManyWithoutActivityInput>
  }

  export type UserCreateWithoutPlayerSubscriptionsInput = {
    id: string
    userType?: $Enums.UserType
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    club?: ClubCreateNestedOneWithoutUserInput
    team?: TeamCreateNestedOneWithoutUserInput
    Activity?: ActivityCreateNestedManyWithoutUserInput
    sessionBookings?: SessionBookingCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutPlayerSubscriptionsInput = {
    id: string
    userType?: $Enums.UserType
    clubId?: string | null
    teamId?: string | null
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    Activity?: ActivityUncheckedCreateNestedManyWithoutUserInput
    sessionBookings?: SessionBookingUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutPlayerSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerSubscriptionsInput, UserUncheckedCreateWithoutPlayerSubscriptionsInput>
  }

  export type UserUpsertWithoutPlayerSubscriptionsInput = {
    update: XOR<UserUpdateWithoutPlayerSubscriptionsInput, UserUncheckedUpdateWithoutPlayerSubscriptionsInput>
    create: XOR<UserCreateWithoutPlayerSubscriptionsInput, UserUncheckedCreateWithoutPlayerSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerSubscriptionsInput, UserUncheckedUpdateWithoutPlayerSubscriptionsInput>
  }

  export type UserUpdateWithoutPlayerSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club?: ClubUpdateOneWithoutUserNestedInput
    team?: TeamUpdateOneWithoutUserNestedInput
    Activity?: ActivityUpdateManyWithoutUserNestedInput
    sessionBookings?: SessionBookingUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activity?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    sessionBookings?: SessionBookingUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserCreateWithoutSessionBookingsInput = {
    id: string
    userType?: $Enums.UserType
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    club?: ClubCreateNestedOneWithoutUserInput
    team?: TeamCreateNestedOneWithoutUserInput
    Activity?: ActivityCreateNestedManyWithoutUserInput
    playerSubscriptions?: PlayerSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionBookingsInput = {
    id: string
    userType?: $Enums.UserType
    clubId?: string | null
    teamId?: string | null
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
    Activity?: ActivityUncheckedCreateNestedManyWithoutUserInput
    playerSubscriptions?: PlayerSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionBookingsInput, UserUncheckedCreateWithoutSessionBookingsInput>
  }

  export type ActivityCreateWithoutBookingsInput = {
    id: string
    name?: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    team?: TeamCreateNestedOneWithoutActivityInput
    club?: ClubCreateNestedOneWithoutActivityInput
    user: UserCreateNestedOneWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutBookingsInput = {
    id: string
    teamId?: string | null
    clubId?: string | null
    name?: string
    coachUserId: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type ActivityCreateOrConnectWithoutBookingsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutBookingsInput, ActivityUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutSessionBookingsInput = {
    update: XOR<UserUpdateWithoutSessionBookingsInput, UserUncheckedUpdateWithoutSessionBookingsInput>
    create: XOR<UserCreateWithoutSessionBookingsInput, UserUncheckedCreateWithoutSessionBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionBookingsInput, UserUncheckedUpdateWithoutSessionBookingsInput>
  }

  export type UserUpdateWithoutSessionBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club?: ClubUpdateOneWithoutUserNestedInput
    team?: TeamUpdateOneWithoutUserNestedInput
    Activity?: ActivityUpdateManyWithoutUserNestedInput
    playerSubscriptions?: PlayerSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activity?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    playerSubscriptions?: PlayerSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ActivityUpsertWithoutBookingsInput = {
    update: XOR<ActivityUpdateWithoutBookingsInput, ActivityUncheckedUpdateWithoutBookingsInput>
    create: XOR<ActivityCreateWithoutBookingsInput, ActivityUncheckedCreateWithoutBookingsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutBookingsInput, ActivityUncheckedUpdateWithoutBookingsInput>
  }

  export type ActivityUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneWithoutActivityNestedInput
    club?: ClubUpdateOneWithoutActivityNestedInput
    user?: UserUpdateOneRequiredWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    coachUserId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClubCreateWithoutMetricsInput = {
    id: string
    display: string
    location?: string | null
    income?: number
    organizationNumber?: string | null
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    type?: $Enums.AdminRole
    subscriptionStatus?: $Enums.SubscriptionStatus
    teams?: TeamCreateNestedManyWithoutClubInput
    Activity?: ActivityCreateNestedManyWithoutClubInput
    User?: UserCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutMetricsInput = {
    id: string
    display: string
    location?: string | null
    income?: number
    organizationNumber?: string | null
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    type?: $Enums.AdminRole
    subscriptionStatus?: $Enums.SubscriptionStatus
    teams?: TeamUncheckedCreateNestedManyWithoutClubInput
    Activity?: ActivityUncheckedCreateNestedManyWithoutClubInput
    User?: UserUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutMetricsInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutMetricsInput, ClubUncheckedCreateWithoutMetricsInput>
  }

  export type ClubUpsertWithoutMetricsInput = {
    update: XOR<ClubUpdateWithoutMetricsInput, ClubUncheckedUpdateWithoutMetricsInput>
    create: XOR<ClubCreateWithoutMetricsInput, ClubUncheckedCreateWithoutMetricsInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutMetricsInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutMetricsInput, ClubUncheckedUpdateWithoutMetricsInput>
  }

  export type ClubUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    teams?: TeamUpdateManyWithoutClubNestedInput
    Activity?: ActivityUpdateManyWithoutClubNestedInput
    User?: UserUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    income?: IntFieldUpdateOperationsInput | number
    organizationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    teams?: TeamUncheckedUpdateManyWithoutClubNestedInput
    Activity?: ActivityUncheckedUpdateManyWithoutClubNestedInput
    User?: UserUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ActivityCreateManyUserInput = {
    id: string
    teamId?: string | null
    clubId?: string | null
    name?: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type PlayerSubscriptionCreateManyUserInput = {
    id?: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionRecordStatus
    startDate?: Date | string
    endDate?: Date | string | null
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionBookingCreateManyPlayerInput = {
    id?: string
    activityId: string
    bookedAt?: Date | string
    bookingStatus?: $Enums.BookingStatus
    attendanceStatus?: $Enums.AttendanceStatus
    joinedAt?: Date | string | null
    leftAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneWithoutActivityNestedInput
    club?: ClubUpdateOneWithoutActivityNestedInput
    bookings?: SessionBookingUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: SessionBookingUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlayerSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionRecordStatusFieldUpdateOperationsInput | $Enums.SubscriptionRecordStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionRecordStatusFieldUpdateOperationsInput | $Enums.SubscriptionRecordStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionRecordStatusFieldUpdateOperationsInput | $Enums.SubscriptionRecordStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionBookingUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type SessionBookingUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionBookingUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateManyClubInput = {
    id: string
    display: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type ActivityCreateManyClubInput = {
    id: string
    teamId?: string | null
    name?: string
    coachUserId: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type UserCreateManyClubInput = {
    id: string
    userType?: $Enums.UserType
    teamId?: string | null
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
  }

  export type MonthlyChurnMetricCreateManyClubInput = {
    id?: string
    monthStartDate: Date | string
    healthyCount?: number
    mightLeaveSoonCount?: number
    atRiskCount?: number
    churnedCount?: number
    newPlayers?: number
    netGrowth?: number
    retentionRate?: Decimal | DecimalJsLike | number | string | null
    churnRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activity?: ActivityUpdateManyWithoutTeamNestedInput
    User?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activity?: ActivityUncheckedUpdateManyWithoutTeamNestedInput
    User?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneWithoutActivityNestedInput
    user?: UserUpdateOneRequiredWithoutActivityNestedInput
    bookings?: SessionBookingUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    coachUserId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: SessionBookingUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    coachUserId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneWithoutUserNestedInput
    Activity?: ActivityUpdateManyWithoutUserNestedInput
    playerSubscriptions?: PlayerSubscriptionUpdateManyWithoutUserNestedInput
    sessionBookings?: SessionBookingUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activity?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    playerSubscriptions?: PlayerSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    sessionBookings?: SessionBookingUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MonthlyChurnMetricUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    healthyCount?: IntFieldUpdateOperationsInput | number
    mightLeaveSoonCount?: IntFieldUpdateOperationsInput | number
    atRiskCount?: IntFieldUpdateOperationsInput | number
    churnedCount?: IntFieldUpdateOperationsInput | number
    newPlayers?: IntFieldUpdateOperationsInput | number
    netGrowth?: IntFieldUpdateOperationsInput | number
    retentionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    churnRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyChurnMetricUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    healthyCount?: IntFieldUpdateOperationsInput | number
    mightLeaveSoonCount?: IntFieldUpdateOperationsInput | number
    atRiskCount?: IntFieldUpdateOperationsInput | number
    churnedCount?: IntFieldUpdateOperationsInput | number
    newPlayers?: IntFieldUpdateOperationsInput | number
    netGrowth?: IntFieldUpdateOperationsInput | number
    retentionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    churnRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyChurnMetricUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    healthyCount?: IntFieldUpdateOperationsInput | number
    mightLeaveSoonCount?: IntFieldUpdateOperationsInput | number
    atRiskCount?: IntFieldUpdateOperationsInput | number
    churnedCount?: IntFieldUpdateOperationsInput | number
    newPlayers?: IntFieldUpdateOperationsInput | number
    netGrowth?: IntFieldUpdateOperationsInput | number
    retentionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    churnRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyTeamInput = {
    id: string
    clubId?: string | null
    name?: string
    coachUserId: string
    description: string
    noOfReg: number
    activityDate: Date | string
    income?: number
    program: string
    minAge: number
    maxAge: number
    visibilityType?: $Enums.VisibilityType
    equipments: JsonNullValueInput | InputJsonValue
    type?: $Enums.AdminRole
    language?: $Enums.Language
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type UserCreateManyTeamInput = {
    id: string
    userType?: $Enums.UserType
    clubId?: string | null
    disability?: boolean
    personNumber?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    clubOnboarding?: boolean
    gender?: string | null
    createdBy?: $Enums.AdminRole
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    churnStatus?: $Enums.ChurnStatus
    joinedAt?: Date | string
    lastActivityAt?: Date | string | null
  }

  export type ActivityUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club?: ClubUpdateOneWithoutActivityNestedInput
    user?: UserUpdateOneRequiredWithoutActivityNestedInput
    bookings?: SessionBookingUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    coachUserId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: SessionBookingUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    coachUserId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    noOfReg?: IntFieldUpdateOperationsInput | number
    activityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: IntFieldUpdateOperationsInput | number
    program?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    maxAge?: IntFieldUpdateOperationsInput | number
    visibilityType?: EnumVisibilityTypeFieldUpdateOperationsInput | $Enums.VisibilityType
    equipments?: JsonNullValueInput | InputJsonValue
    type?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club?: ClubUpdateOneWithoutUserNestedInput
    Activity?: ActivityUpdateManyWithoutUserNestedInput
    playerSubscriptions?: PlayerSubscriptionUpdateManyWithoutUserNestedInput
    sessionBookings?: SessionBookingUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activity?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    playerSubscriptions?: PlayerSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    sessionBookings?: SessionBookingUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    disability?: BoolFieldUpdateOperationsInput | boolean
    personNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    clubOnboarding?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    churnStatus?: EnumChurnStatusFieldUpdateOperationsInput | $Enums.ChurnStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionBookingCreateManyActivityInput = {
    id?: string
    playerUserId: string
    bookedAt?: Date | string
    bookingStatus?: $Enums.BookingStatus
    attendanceStatus?: $Enums.AttendanceStatus
    joinedAt?: Date | string | null
    leftAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionBookingUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutSessionBookingsNestedInput
  }

  export type SessionBookingUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerUserId?: StringFieldUpdateOperationsInput | string
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionBookingUncheckedUpdateManyWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerUserId?: StringFieldUpdateOperationsInput | string
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}