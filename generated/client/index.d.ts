
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Install
 * 
 */
export type Install = $Result.DefaultSelection<Prisma.$InstallPayload>
/**
 * Model LinkedUserId
 * 
 */
export type LinkedUserId = $Result.DefaultSelection<Prisma.$LinkedUserIdPayload>
/**
 * Model LinkedAccounts
 * 
 */
export type LinkedAccounts = $Result.DefaultSelection<Prisma.$LinkedAccountsPayload>
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
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.install`: Exposes CRUD operations for the **Install** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Installs
    * const installs = await prisma.install.findMany()
    * ```
    */
  get install(): Prisma.InstallDelegate<ExtArgs>;

  /**
   * `prisma.linkedUserId`: Exposes CRUD operations for the **LinkedUserId** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedUserIds
    * const linkedUserIds = await prisma.linkedUserId.findMany()
    * ```
    */
  get linkedUserId(): Prisma.LinkedUserIdDelegate<ExtArgs>;

  /**
   * `prisma.linkedAccounts`: Exposes CRUD operations for the **LinkedAccounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedAccounts
    * const linkedAccounts = await prisma.linkedAccounts.findMany()
    * ```
    */
  get linkedAccounts(): Prisma.LinkedAccountsDelegate<ExtArgs>;

  /**
   * `prisma.club`: Exposes CRUD operations for the **Club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.club.findMany()
    * ```
    */
  get club(): Prisma.ClubDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Install: 'Install',
    LinkedUserId: 'LinkedUserId',
    LinkedAccounts: 'LinkedAccounts',
    Club: 'Club',
    Team: 'Team'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'install' | 'linkedUserId' | 'linkedAccounts' | 'club' | 'team'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Install: {
        payload: Prisma.$InstallPayload<ExtArgs>
        fields: Prisma.InstallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstallFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstallFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstallPayload>
          }
          findFirst: {
            args: Prisma.InstallFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstallFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstallPayload>
          }
          findMany: {
            args: Prisma.InstallFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstallPayload>[]
          }
          create: {
            args: Prisma.InstallCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstallPayload>
          }
          createMany: {
            args: Prisma.InstallCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InstallDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstallPayload>
          }
          update: {
            args: Prisma.InstallUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstallPayload>
          }
          deleteMany: {
            args: Prisma.InstallDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InstallUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InstallUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstallPayload>
          }
          aggregate: {
            args: Prisma.InstallAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInstall>
          }
          groupBy: {
            args: Prisma.InstallGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InstallGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstallCountArgs<ExtArgs>,
            result: $Utils.Optional<InstallCountAggregateOutputType> | number
          }
        }
      }
      LinkedUserId: {
        payload: Prisma.$LinkedUserIdPayload<ExtArgs>
        fields: Prisma.LinkedUserIdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedUserIdFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedUserIdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedUserIdFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedUserIdPayload>
          }
          findFirst: {
            args: Prisma.LinkedUserIdFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedUserIdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedUserIdFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedUserIdPayload>
          }
          findMany: {
            args: Prisma.LinkedUserIdFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedUserIdPayload>[]
          }
          create: {
            args: Prisma.LinkedUserIdCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedUserIdPayload>
          }
          createMany: {
            args: Prisma.LinkedUserIdCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LinkedUserIdDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedUserIdPayload>
          }
          update: {
            args: Prisma.LinkedUserIdUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedUserIdPayload>
          }
          deleteMany: {
            args: Prisma.LinkedUserIdDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedUserIdUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LinkedUserIdUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedUserIdPayload>
          }
          aggregate: {
            args: Prisma.LinkedUserIdAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLinkedUserId>
          }
          groupBy: {
            args: Prisma.LinkedUserIdGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LinkedUserIdGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedUserIdCountArgs<ExtArgs>,
            result: $Utils.Optional<LinkedUserIdCountAggregateOutputType> | number
          }
        }
      }
      LinkedAccounts: {
        payload: Prisma.$LinkedAccountsPayload<ExtArgs>
        fields: Prisma.LinkedAccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedAccountsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedAccountsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          findFirst: {
            args: Prisma.LinkedAccountsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedAccountsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          findMany: {
            args: Prisma.LinkedAccountsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>[]
          }
          create: {
            args: Prisma.LinkedAccountsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          createMany: {
            args: Prisma.LinkedAccountsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LinkedAccountsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          update: {
            args: Prisma.LinkedAccountsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          deleteMany: {
            args: Prisma.LinkedAccountsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedAccountsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LinkedAccountsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          aggregate: {
            args: Prisma.LinkedAccountsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLinkedAccounts>
          }
          groupBy: {
            args: Prisma.LinkedAccountsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LinkedAccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedAccountsCountArgs<ExtArgs>,
            result: $Utils.Optional<LinkedAccountsCountAggregateOutputType> | number
          }
        }
      }
      Club: {
        payload: Prisma.$ClubPayload<ExtArgs>
        fields: Prisma.ClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findFirst: {
            args: Prisma.ClubFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findMany: {
            args: Prisma.ClubFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          create: {
            args: Prisma.ClubCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          createMany: {
            args: Prisma.ClubCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClubDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          update: {
            args: Prisma.ClubUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          deleteMany: {
            args: Prisma.ClubDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClubUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClubUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          aggregate: {
            args: Prisma.ClubAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClub>
          }
          groupBy: {
            args: Prisma.ClubGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubCountArgs<ExtArgs>,
            result: $Utils.Optional<ClubCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ClubCountOutputType
   */

  export type ClubCountOutputType = {
    teams: number
  }

  export type ClubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | ClubCountOutputTypeCountTeamsArgs
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
    clubId: string | null
    teamId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clubId: string | null
    teamId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clubId: number
    teamId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clubId?: true
    teamId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clubId?: true
    teamId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clubId?: true
    teamId?: true
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
    clubId: string
    teamId: string | null
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
    clubId?: boolean
    teamId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clubId?: boolean
    teamId?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clubId: string
      teamId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clubId: FieldRef<"User", 'String'>
    readonly teamId: FieldRef<"User", 'String'>
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
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Install
   */

  export type AggregateInstall = {
    _count: InstallCountAggregateOutputType | null
    _min: InstallMinAggregateOutputType | null
    _max: InstallMaxAggregateOutputType | null
  }

  export type InstallMinAggregateOutputType = {
    id: string | null
    userId: string | null
    deviceId: string | null
    deviceName: string | null
    latestUserId: string | null
  }

  export type InstallMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    deviceId: string | null
    deviceName: string | null
    latestUserId: string | null
  }

  export type InstallCountAggregateOutputType = {
    id: number
    userId: number
    deviceId: number
    deviceName: number
    latestUserId: number
    _all: number
  }


  export type InstallMinAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    deviceName?: true
    latestUserId?: true
  }

  export type InstallMaxAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    deviceName?: true
    latestUserId?: true
  }

  export type InstallCountAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    deviceName?: true
    latestUserId?: true
    _all?: true
  }

  export type InstallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Install to aggregate.
     */
    where?: InstallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installs to fetch.
     */
    orderBy?: InstallOrderByWithRelationInput | InstallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Installs
    **/
    _count?: true | InstallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstallMaxAggregateInputType
  }

  export type GetInstallAggregateType<T extends InstallAggregateArgs> = {
        [P in keyof T & keyof AggregateInstall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstall[P]>
      : GetScalarType<T[P], AggregateInstall[P]>
  }




  export type InstallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallWhereInput
    orderBy?: InstallOrderByWithAggregationInput | InstallOrderByWithAggregationInput[]
    by: InstallScalarFieldEnum[] | InstallScalarFieldEnum
    having?: InstallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstallCountAggregateInputType | true
    _min?: InstallMinAggregateInputType
    _max?: InstallMaxAggregateInputType
  }

  export type InstallGroupByOutputType = {
    id: string
    userId: string
    deviceId: string
    deviceName: string | null
    latestUserId: string
    _count: InstallCountAggregateOutputType | null
    _min: InstallMinAggregateOutputType | null
    _max: InstallMaxAggregateOutputType | null
  }

  type GetInstallGroupByPayload<T extends InstallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstallGroupByOutputType[P]>
            : GetScalarType<T[P], InstallGroupByOutputType[P]>
        }
      >
    >


  export type InstallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceId?: boolean
    deviceName?: boolean
    latestUserId?: boolean
  }, ExtArgs["result"]["install"]>

  export type InstallSelectScalar = {
    id?: boolean
    userId?: boolean
    deviceId?: boolean
    deviceName?: boolean
    latestUserId?: boolean
  }


  export type $InstallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Install"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      deviceId: string
      deviceName: string | null
      latestUserId: string
    }, ExtArgs["result"]["install"]>
    composites: {}
  }


  type InstallGetPayload<S extends boolean | null | undefined | InstallDefaultArgs> = $Result.GetResult<Prisma.$InstallPayload, S>

  type InstallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InstallFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InstallCountAggregateInputType | true
    }

  export interface InstallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Install'], meta: { name: 'Install' } }
    /**
     * Find zero or one Install that matches the filter.
     * @param {InstallFindUniqueArgs} args - Arguments to find a Install
     * @example
     * // Get one Install
     * const install = await prisma.install.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InstallFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InstallFindUniqueArgs<ExtArgs>>
    ): Prisma__InstallClient<$Result.GetResult<Prisma.$InstallPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Install that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InstallFindUniqueOrThrowArgs} args - Arguments to find a Install
     * @example
     * // Get one Install
     * const install = await prisma.install.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InstallFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InstallFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InstallClient<$Result.GetResult<Prisma.$InstallPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Install that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallFindFirstArgs} args - Arguments to find a Install
     * @example
     * // Get one Install
     * const install = await prisma.install.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InstallFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InstallFindFirstArgs<ExtArgs>>
    ): Prisma__InstallClient<$Result.GetResult<Prisma.$InstallPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Install that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallFindFirstOrThrowArgs} args - Arguments to find a Install
     * @example
     * // Get one Install
     * const install = await prisma.install.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InstallFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InstallFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InstallClient<$Result.GetResult<Prisma.$InstallPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Installs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Installs
     * const installs = await prisma.install.findMany()
     * 
     * // Get first 10 Installs
     * const installs = await prisma.install.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const installWithIdOnly = await prisma.install.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InstallFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstallFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Install.
     * @param {InstallCreateArgs} args - Arguments to create a Install.
     * @example
     * // Create one Install
     * const Install = await prisma.install.create({
     *   data: {
     *     // ... data to create a Install
     *   }
     * })
     * 
    **/
    create<T extends InstallCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InstallCreateArgs<ExtArgs>>
    ): Prisma__InstallClient<$Result.GetResult<Prisma.$InstallPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Installs.
     *     @param {InstallCreateManyArgs} args - Arguments to create many Installs.
     *     @example
     *     // Create many Installs
     *     const install = await prisma.install.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InstallCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstallCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Install.
     * @param {InstallDeleteArgs} args - Arguments to delete one Install.
     * @example
     * // Delete one Install
     * const Install = await prisma.install.delete({
     *   where: {
     *     // ... filter to delete one Install
     *   }
     * })
     * 
    **/
    delete<T extends InstallDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InstallDeleteArgs<ExtArgs>>
    ): Prisma__InstallClient<$Result.GetResult<Prisma.$InstallPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Install.
     * @param {InstallUpdateArgs} args - Arguments to update one Install.
     * @example
     * // Update one Install
     * const install = await prisma.install.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InstallUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InstallUpdateArgs<ExtArgs>>
    ): Prisma__InstallClient<$Result.GetResult<Prisma.$InstallPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Installs.
     * @param {InstallDeleteManyArgs} args - Arguments to filter Installs to delete.
     * @example
     * // Delete a few Installs
     * const { count } = await prisma.install.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InstallDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstallDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Installs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Installs
     * const install = await prisma.install.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InstallUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InstallUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Install.
     * @param {InstallUpsertArgs} args - Arguments to update or create a Install.
     * @example
     * // Update or create a Install
     * const install = await prisma.install.upsert({
     *   create: {
     *     // ... data to create a Install
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Install we want to update
     *   }
     * })
    **/
    upsert<T extends InstallUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InstallUpsertArgs<ExtArgs>>
    ): Prisma__InstallClient<$Result.GetResult<Prisma.$InstallPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Installs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallCountArgs} args - Arguments to filter Installs to count.
     * @example
     * // Count the number of Installs
     * const count = await prisma.install.count({
     *   where: {
     *     // ... the filter for the Installs we want to count
     *   }
     * })
    **/
    count<T extends InstallCountArgs>(
      args?: Subset<T, InstallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Install.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstallAggregateArgs>(args: Subset<T, InstallAggregateArgs>): Prisma.PrismaPromise<GetInstallAggregateType<T>>

    /**
     * Group by Install.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallGroupByArgs} args - Group by arguments.
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
      T extends InstallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstallGroupByArgs['orderBy'] }
        : { orderBy?: InstallGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Install model
   */
  readonly fields: InstallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Install.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Install model
   */ 
  interface InstallFieldRefs {
    readonly id: FieldRef<"Install", 'String'>
    readonly userId: FieldRef<"Install", 'String'>
    readonly deviceId: FieldRef<"Install", 'String'>
    readonly deviceName: FieldRef<"Install", 'String'>
    readonly latestUserId: FieldRef<"Install", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Install findUnique
   */
  export type InstallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Install
     */
    select?: InstallSelect<ExtArgs> | null
    /**
     * Filter, which Install to fetch.
     */
    where: InstallWhereUniqueInput
  }


  /**
   * Install findUniqueOrThrow
   */
  export type InstallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Install
     */
    select?: InstallSelect<ExtArgs> | null
    /**
     * Filter, which Install to fetch.
     */
    where: InstallWhereUniqueInput
  }


  /**
   * Install findFirst
   */
  export type InstallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Install
     */
    select?: InstallSelect<ExtArgs> | null
    /**
     * Filter, which Install to fetch.
     */
    where?: InstallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installs to fetch.
     */
    orderBy?: InstallOrderByWithRelationInput | InstallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Installs.
     */
    cursor?: InstallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installs.
     */
    distinct?: InstallScalarFieldEnum | InstallScalarFieldEnum[]
  }


  /**
   * Install findFirstOrThrow
   */
  export type InstallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Install
     */
    select?: InstallSelect<ExtArgs> | null
    /**
     * Filter, which Install to fetch.
     */
    where?: InstallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installs to fetch.
     */
    orderBy?: InstallOrderByWithRelationInput | InstallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Installs.
     */
    cursor?: InstallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installs.
     */
    distinct?: InstallScalarFieldEnum | InstallScalarFieldEnum[]
  }


  /**
   * Install findMany
   */
  export type InstallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Install
     */
    select?: InstallSelect<ExtArgs> | null
    /**
     * Filter, which Installs to fetch.
     */
    where?: InstallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installs to fetch.
     */
    orderBy?: InstallOrderByWithRelationInput | InstallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Installs.
     */
    cursor?: InstallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installs.
     */
    skip?: number
    distinct?: InstallScalarFieldEnum | InstallScalarFieldEnum[]
  }


  /**
   * Install create
   */
  export type InstallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Install
     */
    select?: InstallSelect<ExtArgs> | null
    /**
     * The data needed to create a Install.
     */
    data: XOR<InstallCreateInput, InstallUncheckedCreateInput>
  }


  /**
   * Install createMany
   */
  export type InstallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Installs.
     */
    data: InstallCreateManyInput | InstallCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Install update
   */
  export type InstallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Install
     */
    select?: InstallSelect<ExtArgs> | null
    /**
     * The data needed to update a Install.
     */
    data: XOR<InstallUpdateInput, InstallUncheckedUpdateInput>
    /**
     * Choose, which Install to update.
     */
    where: InstallWhereUniqueInput
  }


  /**
   * Install updateMany
   */
  export type InstallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Installs.
     */
    data: XOR<InstallUpdateManyMutationInput, InstallUncheckedUpdateManyInput>
    /**
     * Filter which Installs to update
     */
    where?: InstallWhereInput
  }


  /**
   * Install upsert
   */
  export type InstallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Install
     */
    select?: InstallSelect<ExtArgs> | null
    /**
     * The filter to search for the Install to update in case it exists.
     */
    where: InstallWhereUniqueInput
    /**
     * In case the Install found by the `where` argument doesn't exist, create a new Install with this data.
     */
    create: XOR<InstallCreateInput, InstallUncheckedCreateInput>
    /**
     * In case the Install was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstallUpdateInput, InstallUncheckedUpdateInput>
  }


  /**
   * Install delete
   */
  export type InstallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Install
     */
    select?: InstallSelect<ExtArgs> | null
    /**
     * Filter which Install to delete.
     */
    where: InstallWhereUniqueInput
  }


  /**
   * Install deleteMany
   */
  export type InstallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Installs to delete
     */
    where?: InstallWhereInput
  }


  /**
   * Install without action
   */
  export type InstallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Install
     */
    select?: InstallSelect<ExtArgs> | null
  }



  /**
   * Model LinkedUserId
   */

  export type AggregateLinkedUserId = {
    _count: LinkedUserIdCountAggregateOutputType | null
    _min: LinkedUserIdMinAggregateOutputType | null
    _max: LinkedUserIdMaxAggregateOutputType | null
  }

  export type LinkedUserIdMinAggregateOutputType = {
    id: string | null
    userId: string | null
    linkedUserId: string | null
  }

  export type LinkedUserIdMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    linkedUserId: string | null
  }

  export type LinkedUserIdCountAggregateOutputType = {
    id: number
    userId: number
    linkedUserId: number
    _all: number
  }


  export type LinkedUserIdMinAggregateInputType = {
    id?: true
    userId?: true
    linkedUserId?: true
  }

  export type LinkedUserIdMaxAggregateInputType = {
    id?: true
    userId?: true
    linkedUserId?: true
  }

  export type LinkedUserIdCountAggregateInputType = {
    id?: true
    userId?: true
    linkedUserId?: true
    _all?: true
  }

  export type LinkedUserIdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedUserId to aggregate.
     */
    where?: LinkedUserIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedUserIds to fetch.
     */
    orderBy?: LinkedUserIdOrderByWithRelationInput | LinkedUserIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedUserIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedUserIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedUserIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedUserIds
    **/
    _count?: true | LinkedUserIdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedUserIdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedUserIdMaxAggregateInputType
  }

  export type GetLinkedUserIdAggregateType<T extends LinkedUserIdAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedUserId]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedUserId[P]>
      : GetScalarType<T[P], AggregateLinkedUserId[P]>
  }




  export type LinkedUserIdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedUserIdWhereInput
    orderBy?: LinkedUserIdOrderByWithAggregationInput | LinkedUserIdOrderByWithAggregationInput[]
    by: LinkedUserIdScalarFieldEnum[] | LinkedUserIdScalarFieldEnum
    having?: LinkedUserIdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedUserIdCountAggregateInputType | true
    _min?: LinkedUserIdMinAggregateInputType
    _max?: LinkedUserIdMaxAggregateInputType
  }

  export type LinkedUserIdGroupByOutputType = {
    id: string
    userId: string
    linkedUserId: string
    _count: LinkedUserIdCountAggregateOutputType | null
    _min: LinkedUserIdMinAggregateOutputType | null
    _max: LinkedUserIdMaxAggregateOutputType | null
  }

  type GetLinkedUserIdGroupByPayload<T extends LinkedUserIdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedUserIdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedUserIdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedUserIdGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedUserIdGroupByOutputType[P]>
        }
      >
    >


  export type LinkedUserIdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    linkedUserId?: boolean
  }, ExtArgs["result"]["linkedUserId"]>

  export type LinkedUserIdSelectScalar = {
    id?: boolean
    userId?: boolean
    linkedUserId?: boolean
  }


  export type $LinkedUserIdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedUserId"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      linkedUserId: string
    }, ExtArgs["result"]["linkedUserId"]>
    composites: {}
  }


  type LinkedUserIdGetPayload<S extends boolean | null | undefined | LinkedUserIdDefaultArgs> = $Result.GetResult<Prisma.$LinkedUserIdPayload, S>

  type LinkedUserIdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LinkedUserIdFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LinkedUserIdCountAggregateInputType | true
    }

  export interface LinkedUserIdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedUserId'], meta: { name: 'LinkedUserId' } }
    /**
     * Find zero or one LinkedUserId that matches the filter.
     * @param {LinkedUserIdFindUniqueArgs} args - Arguments to find a LinkedUserId
     * @example
     * // Get one LinkedUserId
     * const linkedUserId = await prisma.linkedUserId.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LinkedUserIdFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedUserIdFindUniqueArgs<ExtArgs>>
    ): Prisma__LinkedUserIdClient<$Result.GetResult<Prisma.$LinkedUserIdPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LinkedUserId that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LinkedUserIdFindUniqueOrThrowArgs} args - Arguments to find a LinkedUserId
     * @example
     * // Get one LinkedUserId
     * const linkedUserId = await prisma.linkedUserId.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LinkedUserIdFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedUserIdFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LinkedUserIdClient<$Result.GetResult<Prisma.$LinkedUserIdPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LinkedUserId that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedUserIdFindFirstArgs} args - Arguments to find a LinkedUserId
     * @example
     * // Get one LinkedUserId
     * const linkedUserId = await prisma.linkedUserId.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LinkedUserIdFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedUserIdFindFirstArgs<ExtArgs>>
    ): Prisma__LinkedUserIdClient<$Result.GetResult<Prisma.$LinkedUserIdPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LinkedUserId that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedUserIdFindFirstOrThrowArgs} args - Arguments to find a LinkedUserId
     * @example
     * // Get one LinkedUserId
     * const linkedUserId = await prisma.linkedUserId.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LinkedUserIdFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedUserIdFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LinkedUserIdClient<$Result.GetResult<Prisma.$LinkedUserIdPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LinkedUserIds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedUserIdFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedUserIds
     * const linkedUserIds = await prisma.linkedUserId.findMany()
     * 
     * // Get first 10 LinkedUserIds
     * const linkedUserIds = await prisma.linkedUserId.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkedUserIdWithIdOnly = await prisma.linkedUserId.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LinkedUserIdFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedUserIdFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedUserIdPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LinkedUserId.
     * @param {LinkedUserIdCreateArgs} args - Arguments to create a LinkedUserId.
     * @example
     * // Create one LinkedUserId
     * const LinkedUserId = await prisma.linkedUserId.create({
     *   data: {
     *     // ... data to create a LinkedUserId
     *   }
     * })
     * 
    **/
    create<T extends LinkedUserIdCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedUserIdCreateArgs<ExtArgs>>
    ): Prisma__LinkedUserIdClient<$Result.GetResult<Prisma.$LinkedUserIdPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LinkedUserIds.
     *     @param {LinkedUserIdCreateManyArgs} args - Arguments to create many LinkedUserIds.
     *     @example
     *     // Create many LinkedUserIds
     *     const linkedUserId = await prisma.linkedUserId.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LinkedUserIdCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedUserIdCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LinkedUserId.
     * @param {LinkedUserIdDeleteArgs} args - Arguments to delete one LinkedUserId.
     * @example
     * // Delete one LinkedUserId
     * const LinkedUserId = await prisma.linkedUserId.delete({
     *   where: {
     *     // ... filter to delete one LinkedUserId
     *   }
     * })
     * 
    **/
    delete<T extends LinkedUserIdDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedUserIdDeleteArgs<ExtArgs>>
    ): Prisma__LinkedUserIdClient<$Result.GetResult<Prisma.$LinkedUserIdPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LinkedUserId.
     * @param {LinkedUserIdUpdateArgs} args - Arguments to update one LinkedUserId.
     * @example
     * // Update one LinkedUserId
     * const linkedUserId = await prisma.linkedUserId.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LinkedUserIdUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedUserIdUpdateArgs<ExtArgs>>
    ): Prisma__LinkedUserIdClient<$Result.GetResult<Prisma.$LinkedUserIdPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LinkedUserIds.
     * @param {LinkedUserIdDeleteManyArgs} args - Arguments to filter LinkedUserIds to delete.
     * @example
     * // Delete a few LinkedUserIds
     * const { count } = await prisma.linkedUserId.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LinkedUserIdDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedUserIdDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedUserIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedUserIdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedUserIds
     * const linkedUserId = await prisma.linkedUserId.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LinkedUserIdUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedUserIdUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LinkedUserId.
     * @param {LinkedUserIdUpsertArgs} args - Arguments to update or create a LinkedUserId.
     * @example
     * // Update or create a LinkedUserId
     * const linkedUserId = await prisma.linkedUserId.upsert({
     *   create: {
     *     // ... data to create a LinkedUserId
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedUserId we want to update
     *   }
     * })
    **/
    upsert<T extends LinkedUserIdUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedUserIdUpsertArgs<ExtArgs>>
    ): Prisma__LinkedUserIdClient<$Result.GetResult<Prisma.$LinkedUserIdPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LinkedUserIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedUserIdCountArgs} args - Arguments to filter LinkedUserIds to count.
     * @example
     * // Count the number of LinkedUserIds
     * const count = await prisma.linkedUserId.count({
     *   where: {
     *     // ... the filter for the LinkedUserIds we want to count
     *   }
     * })
    **/
    count<T extends LinkedUserIdCountArgs>(
      args?: Subset<T, LinkedUserIdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedUserIdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedUserId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedUserIdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkedUserIdAggregateArgs>(args: Subset<T, LinkedUserIdAggregateArgs>): Prisma.PrismaPromise<GetLinkedUserIdAggregateType<T>>

    /**
     * Group by LinkedUserId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedUserIdGroupByArgs} args - Group by arguments.
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
      T extends LinkedUserIdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedUserIdGroupByArgs['orderBy'] }
        : { orderBy?: LinkedUserIdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkedUserIdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedUserIdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedUserId model
   */
  readonly fields: LinkedUserIdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedUserId.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedUserIdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LinkedUserId model
   */ 
  interface LinkedUserIdFieldRefs {
    readonly id: FieldRef<"LinkedUserId", 'String'>
    readonly userId: FieldRef<"LinkedUserId", 'String'>
    readonly linkedUserId: FieldRef<"LinkedUserId", 'String'>
  }
    

  // Custom InputTypes

  /**
   * LinkedUserId findUnique
   */
  export type LinkedUserIdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedUserId
     */
    select?: LinkedUserIdSelect<ExtArgs> | null
    /**
     * Filter, which LinkedUserId to fetch.
     */
    where: LinkedUserIdWhereUniqueInput
  }


  /**
   * LinkedUserId findUniqueOrThrow
   */
  export type LinkedUserIdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedUserId
     */
    select?: LinkedUserIdSelect<ExtArgs> | null
    /**
     * Filter, which LinkedUserId to fetch.
     */
    where: LinkedUserIdWhereUniqueInput
  }


  /**
   * LinkedUserId findFirst
   */
  export type LinkedUserIdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedUserId
     */
    select?: LinkedUserIdSelect<ExtArgs> | null
    /**
     * Filter, which LinkedUserId to fetch.
     */
    where?: LinkedUserIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedUserIds to fetch.
     */
    orderBy?: LinkedUserIdOrderByWithRelationInput | LinkedUserIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedUserIds.
     */
    cursor?: LinkedUserIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedUserIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedUserIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedUserIds.
     */
    distinct?: LinkedUserIdScalarFieldEnum | LinkedUserIdScalarFieldEnum[]
  }


  /**
   * LinkedUserId findFirstOrThrow
   */
  export type LinkedUserIdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedUserId
     */
    select?: LinkedUserIdSelect<ExtArgs> | null
    /**
     * Filter, which LinkedUserId to fetch.
     */
    where?: LinkedUserIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedUserIds to fetch.
     */
    orderBy?: LinkedUserIdOrderByWithRelationInput | LinkedUserIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedUserIds.
     */
    cursor?: LinkedUserIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedUserIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedUserIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedUserIds.
     */
    distinct?: LinkedUserIdScalarFieldEnum | LinkedUserIdScalarFieldEnum[]
  }


  /**
   * LinkedUserId findMany
   */
  export type LinkedUserIdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedUserId
     */
    select?: LinkedUserIdSelect<ExtArgs> | null
    /**
     * Filter, which LinkedUserIds to fetch.
     */
    where?: LinkedUserIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedUserIds to fetch.
     */
    orderBy?: LinkedUserIdOrderByWithRelationInput | LinkedUserIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedUserIds.
     */
    cursor?: LinkedUserIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedUserIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedUserIds.
     */
    skip?: number
    distinct?: LinkedUserIdScalarFieldEnum | LinkedUserIdScalarFieldEnum[]
  }


  /**
   * LinkedUserId create
   */
  export type LinkedUserIdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedUserId
     */
    select?: LinkedUserIdSelect<ExtArgs> | null
    /**
     * The data needed to create a LinkedUserId.
     */
    data: XOR<LinkedUserIdCreateInput, LinkedUserIdUncheckedCreateInput>
  }


  /**
   * LinkedUserId createMany
   */
  export type LinkedUserIdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedUserIds.
     */
    data: LinkedUserIdCreateManyInput | LinkedUserIdCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LinkedUserId update
   */
  export type LinkedUserIdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedUserId
     */
    select?: LinkedUserIdSelect<ExtArgs> | null
    /**
     * The data needed to update a LinkedUserId.
     */
    data: XOR<LinkedUserIdUpdateInput, LinkedUserIdUncheckedUpdateInput>
    /**
     * Choose, which LinkedUserId to update.
     */
    where: LinkedUserIdWhereUniqueInput
  }


  /**
   * LinkedUserId updateMany
   */
  export type LinkedUserIdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedUserIds.
     */
    data: XOR<LinkedUserIdUpdateManyMutationInput, LinkedUserIdUncheckedUpdateManyInput>
    /**
     * Filter which LinkedUserIds to update
     */
    where?: LinkedUserIdWhereInput
  }


  /**
   * LinkedUserId upsert
   */
  export type LinkedUserIdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedUserId
     */
    select?: LinkedUserIdSelect<ExtArgs> | null
    /**
     * The filter to search for the LinkedUserId to update in case it exists.
     */
    where: LinkedUserIdWhereUniqueInput
    /**
     * In case the LinkedUserId found by the `where` argument doesn't exist, create a new LinkedUserId with this data.
     */
    create: XOR<LinkedUserIdCreateInput, LinkedUserIdUncheckedCreateInput>
    /**
     * In case the LinkedUserId was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedUserIdUpdateInput, LinkedUserIdUncheckedUpdateInput>
  }


  /**
   * LinkedUserId delete
   */
  export type LinkedUserIdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedUserId
     */
    select?: LinkedUserIdSelect<ExtArgs> | null
    /**
     * Filter which LinkedUserId to delete.
     */
    where: LinkedUserIdWhereUniqueInput
  }


  /**
   * LinkedUserId deleteMany
   */
  export type LinkedUserIdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedUserIds to delete
     */
    where?: LinkedUserIdWhereInput
  }


  /**
   * LinkedUserId without action
   */
  export type LinkedUserIdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedUserId
     */
    select?: LinkedUserIdSelect<ExtArgs> | null
  }



  /**
   * Model LinkedAccounts
   */

  export type AggregateLinkedAccounts = {
    _count: LinkedAccountsCountAggregateOutputType | null
    _min: LinkedAccountsMinAggregateOutputType | null
    _max: LinkedAccountsMaxAggregateOutputType | null
  }

  export type LinkedAccountsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    externalAccountType: string | null
    externalAccountId: string | null
  }

  export type LinkedAccountsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    externalAccountType: string | null
    externalAccountId: string | null
  }

  export type LinkedAccountsCountAggregateOutputType = {
    id: number
    userId: number
    externalAccountType: number
    externalAccountId: number
    _all: number
  }


  export type LinkedAccountsMinAggregateInputType = {
    id?: true
    userId?: true
    externalAccountType?: true
    externalAccountId?: true
  }

  export type LinkedAccountsMaxAggregateInputType = {
    id?: true
    userId?: true
    externalAccountType?: true
    externalAccountId?: true
  }

  export type LinkedAccountsCountAggregateInputType = {
    id?: true
    userId?: true
    externalAccountType?: true
    externalAccountId?: true
    _all?: true
  }

  export type LinkedAccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedAccounts to aggregate.
     */
    where?: LinkedAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountsOrderByWithRelationInput | LinkedAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedAccounts
    **/
    _count?: true | LinkedAccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedAccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedAccountsMaxAggregateInputType
  }

  export type GetLinkedAccountsAggregateType<T extends LinkedAccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedAccounts[P]>
      : GetScalarType<T[P], AggregateLinkedAccounts[P]>
  }




  export type LinkedAccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedAccountsWhereInput
    orderBy?: LinkedAccountsOrderByWithAggregationInput | LinkedAccountsOrderByWithAggregationInput[]
    by: LinkedAccountsScalarFieldEnum[] | LinkedAccountsScalarFieldEnum
    having?: LinkedAccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedAccountsCountAggregateInputType | true
    _min?: LinkedAccountsMinAggregateInputType
    _max?: LinkedAccountsMaxAggregateInputType
  }

  export type LinkedAccountsGroupByOutputType = {
    id: string
    userId: string
    externalAccountType: string
    externalAccountId: string
    _count: LinkedAccountsCountAggregateOutputType | null
    _min: LinkedAccountsMinAggregateOutputType | null
    _max: LinkedAccountsMaxAggregateOutputType | null
  }

  type GetLinkedAccountsGroupByPayload<T extends LinkedAccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedAccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedAccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedAccountsGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedAccountsGroupByOutputType[P]>
        }
      >
    >


  export type LinkedAccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    externalAccountType?: boolean
    externalAccountId?: boolean
  }, ExtArgs["result"]["linkedAccounts"]>

  export type LinkedAccountsSelectScalar = {
    id?: boolean
    userId?: boolean
    externalAccountType?: boolean
    externalAccountId?: boolean
  }


  export type $LinkedAccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedAccounts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      externalAccountType: string
      externalAccountId: string
    }, ExtArgs["result"]["linkedAccounts"]>
    composites: {}
  }


  type LinkedAccountsGetPayload<S extends boolean | null | undefined | LinkedAccountsDefaultArgs> = $Result.GetResult<Prisma.$LinkedAccountsPayload, S>

  type LinkedAccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LinkedAccountsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LinkedAccountsCountAggregateInputType | true
    }

  export interface LinkedAccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedAccounts'], meta: { name: 'LinkedAccounts' } }
    /**
     * Find zero or one LinkedAccounts that matches the filter.
     * @param {LinkedAccountsFindUniqueArgs} args - Arguments to find a LinkedAccounts
     * @example
     * // Get one LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LinkedAccountsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedAccountsFindUniqueArgs<ExtArgs>>
    ): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LinkedAccounts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LinkedAccountsFindUniqueOrThrowArgs} args - Arguments to find a LinkedAccounts
     * @example
     * // Get one LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LinkedAccountsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedAccountsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LinkedAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsFindFirstArgs} args - Arguments to find a LinkedAccounts
     * @example
     * // Get one LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LinkedAccountsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedAccountsFindFirstArgs<ExtArgs>>
    ): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LinkedAccounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsFindFirstOrThrowArgs} args - Arguments to find a LinkedAccounts
     * @example
     * // Get one LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LinkedAccountsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedAccountsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LinkedAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findMany()
     * 
     * // Get first 10 LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkedAccountsWithIdOnly = await prisma.linkedAccounts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LinkedAccountsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedAccountsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LinkedAccounts.
     * @param {LinkedAccountsCreateArgs} args - Arguments to create a LinkedAccounts.
     * @example
     * // Create one LinkedAccounts
     * const LinkedAccounts = await prisma.linkedAccounts.create({
     *   data: {
     *     // ... data to create a LinkedAccounts
     *   }
     * })
     * 
    **/
    create<T extends LinkedAccountsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedAccountsCreateArgs<ExtArgs>>
    ): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LinkedAccounts.
     *     @param {LinkedAccountsCreateManyArgs} args - Arguments to create many LinkedAccounts.
     *     @example
     *     // Create many LinkedAccounts
     *     const linkedAccounts = await prisma.linkedAccounts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LinkedAccountsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedAccountsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LinkedAccounts.
     * @param {LinkedAccountsDeleteArgs} args - Arguments to delete one LinkedAccounts.
     * @example
     * // Delete one LinkedAccounts
     * const LinkedAccounts = await prisma.linkedAccounts.delete({
     *   where: {
     *     // ... filter to delete one LinkedAccounts
     *   }
     * })
     * 
    **/
    delete<T extends LinkedAccountsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedAccountsDeleteArgs<ExtArgs>>
    ): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LinkedAccounts.
     * @param {LinkedAccountsUpdateArgs} args - Arguments to update one LinkedAccounts.
     * @example
     * // Update one LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LinkedAccountsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedAccountsUpdateArgs<ExtArgs>>
    ): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LinkedAccounts.
     * @param {LinkedAccountsDeleteManyArgs} args - Arguments to filter LinkedAccounts to delete.
     * @example
     * // Delete a few LinkedAccounts
     * const { count } = await prisma.linkedAccounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LinkedAccountsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkedAccountsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LinkedAccountsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedAccountsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LinkedAccounts.
     * @param {LinkedAccountsUpsertArgs} args - Arguments to update or create a LinkedAccounts.
     * @example
     * // Update or create a LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.upsert({
     *   create: {
     *     // ... data to create a LinkedAccounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedAccounts we want to update
     *   }
     * })
    **/
    upsert<T extends LinkedAccountsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LinkedAccountsUpsertArgs<ExtArgs>>
    ): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsCountArgs} args - Arguments to filter LinkedAccounts to count.
     * @example
     * // Count the number of LinkedAccounts
     * const count = await prisma.linkedAccounts.count({
     *   where: {
     *     // ... the filter for the LinkedAccounts we want to count
     *   }
     * })
    **/
    count<T extends LinkedAccountsCountArgs>(
      args?: Subset<T, LinkedAccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedAccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkedAccountsAggregateArgs>(args: Subset<T, LinkedAccountsAggregateArgs>): Prisma.PrismaPromise<GetLinkedAccountsAggregateType<T>>

    /**
     * Group by LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsGroupByArgs} args - Group by arguments.
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
      T extends LinkedAccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedAccountsGroupByArgs['orderBy'] }
        : { orderBy?: LinkedAccountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkedAccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedAccounts model
   */
  readonly fields: LinkedAccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedAccounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedAccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LinkedAccounts model
   */ 
  interface LinkedAccountsFieldRefs {
    readonly id: FieldRef<"LinkedAccounts", 'String'>
    readonly userId: FieldRef<"LinkedAccounts", 'String'>
    readonly externalAccountType: FieldRef<"LinkedAccounts", 'String'>
    readonly externalAccountId: FieldRef<"LinkedAccounts", 'String'>
  }
    

  // Custom InputTypes

  /**
   * LinkedAccounts findUnique
   */
  export type LinkedAccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where: LinkedAccountsWhereUniqueInput
  }


  /**
   * LinkedAccounts findUniqueOrThrow
   */
  export type LinkedAccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where: LinkedAccountsWhereUniqueInput
  }


  /**
   * LinkedAccounts findFirst
   */
  export type LinkedAccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where?: LinkedAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountsOrderByWithRelationInput | LinkedAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedAccounts.
     */
    cursor?: LinkedAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedAccounts.
     */
    distinct?: LinkedAccountsScalarFieldEnum | LinkedAccountsScalarFieldEnum[]
  }


  /**
   * LinkedAccounts findFirstOrThrow
   */
  export type LinkedAccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where?: LinkedAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountsOrderByWithRelationInput | LinkedAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedAccounts.
     */
    cursor?: LinkedAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedAccounts.
     */
    distinct?: LinkedAccountsScalarFieldEnum | LinkedAccountsScalarFieldEnum[]
  }


  /**
   * LinkedAccounts findMany
   */
  export type LinkedAccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where?: LinkedAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountsOrderByWithRelationInput | LinkedAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedAccounts.
     */
    cursor?: LinkedAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    distinct?: LinkedAccountsScalarFieldEnum | LinkedAccountsScalarFieldEnum[]
  }


  /**
   * LinkedAccounts create
   */
  export type LinkedAccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * The data needed to create a LinkedAccounts.
     */
    data: XOR<LinkedAccountsCreateInput, LinkedAccountsUncheckedCreateInput>
  }


  /**
   * LinkedAccounts createMany
   */
  export type LinkedAccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedAccounts.
     */
    data: LinkedAccountsCreateManyInput | LinkedAccountsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LinkedAccounts update
   */
  export type LinkedAccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * The data needed to update a LinkedAccounts.
     */
    data: XOR<LinkedAccountsUpdateInput, LinkedAccountsUncheckedUpdateInput>
    /**
     * Choose, which LinkedAccounts to update.
     */
    where: LinkedAccountsWhereUniqueInput
  }


  /**
   * LinkedAccounts updateMany
   */
  export type LinkedAccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedAccounts.
     */
    data: XOR<LinkedAccountsUpdateManyMutationInput, LinkedAccountsUncheckedUpdateManyInput>
    /**
     * Filter which LinkedAccounts to update
     */
    where?: LinkedAccountsWhereInput
  }


  /**
   * LinkedAccounts upsert
   */
  export type LinkedAccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * The filter to search for the LinkedAccounts to update in case it exists.
     */
    where: LinkedAccountsWhereUniqueInput
    /**
     * In case the LinkedAccounts found by the `where` argument doesn't exist, create a new LinkedAccounts with this data.
     */
    create: XOR<LinkedAccountsCreateInput, LinkedAccountsUncheckedCreateInput>
    /**
     * In case the LinkedAccounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedAccountsUpdateInput, LinkedAccountsUncheckedUpdateInput>
  }


  /**
   * LinkedAccounts delete
   */
  export type LinkedAccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Filter which LinkedAccounts to delete.
     */
    where: LinkedAccountsWhereUniqueInput
  }


  /**
   * LinkedAccounts deleteMany
   */
  export type LinkedAccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedAccounts to delete
     */
    where?: LinkedAccountsWhereInput
  }


  /**
   * LinkedAccounts without action
   */
  export type LinkedAccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
  }



  /**
   * Model Club
   */

  export type AggregateClub = {
    _count: ClubCountAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  export type ClubMinAggregateOutputType = {
    id: string | null
    display: string | null
    dateCreated: Date | null
    dateUpdated: Date | null
  }

  export type ClubMaxAggregateOutputType = {
    id: string | null
    display: string | null
    dateCreated: Date | null
    dateUpdated: Date | null
  }

  export type ClubCountAggregateOutputType = {
    id: number
    display: number
    dateCreated: number
    dateUpdated: number
    _all: number
  }


  export type ClubMinAggregateInputType = {
    id?: true
    display?: true
    dateCreated?: true
    dateUpdated?: true
  }

  export type ClubMaxAggregateInputType = {
    id?: true
    display?: true
    dateCreated?: true
    dateUpdated?: true
  }

  export type ClubCountAggregateInputType = {
    id?: true
    display?: true
    dateCreated?: true
    dateUpdated?: true
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
    _min?: ClubMinAggregateInputType
    _max?: ClubMaxAggregateInputType
  }

  export type ClubGroupByOutputType = {
    id: string
    display: string
    dateCreated: Date
    dateUpdated: Date | null
    _count: ClubCountAggregateOutputType | null
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
    dateCreated?: boolean
    dateUpdated?: boolean
    teams?: boolean | Club$teamsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectScalar = {
    id?: boolean
    display?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
  }

  export type ClubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Club$teamsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Club"
    objects: {
      teams: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      display: string
      dateCreated: Date
      dateUpdated: Date | null
    }, ExtArgs["result"]["club"]>
    composites: {}
  }


  type ClubGetPayload<S extends boolean | null | undefined | ClubDefaultArgs> = $Result.GetResult<Prisma.$ClubPayload, S>

  type ClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClubFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClubCountAggregateInputType | true
    }

  export interface ClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends ClubFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClubFindUniqueArgs<ExtArgs>>
    ): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Club that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClubFindUniqueOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClubFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClubFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends ClubFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClubFindFirstArgs<ExtArgs>>
    ): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends ClubFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClubFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends ClubFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClubFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends ClubCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClubCreateArgs<ExtArgs>>
    ): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clubs.
     *     @param {ClubCreateManyArgs} args - Arguments to create many Clubs.
     *     @example
     *     // Create many Clubs
     *     const club = await prisma.club.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClubCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClubCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends ClubDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClubDeleteArgs<ExtArgs>>
    ): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends ClubUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClubUpdateArgs<ExtArgs>>
    ): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends ClubDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClubDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends ClubUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClubUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends ClubUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClubUpsertArgs<ExtArgs>>
    ): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__ClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    teams<T extends Club$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Club$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Club model
   */ 
  interface ClubFieldRefs {
    readonly id: FieldRef<"Club", 'String'>
    readonly display: FieldRef<"Club", 'String'>
    readonly dateCreated: FieldRef<"Club", 'DateTime'>
    readonly dateUpdated: FieldRef<"Club", 'DateTime'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Club without action
   */
  export type ClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    display?: boolean
    clubId?: boolean
    voided?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
  }

  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }


  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs>
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
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends TeamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends TeamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends TeamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends TeamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamCreateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Teams.
     *     @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends TeamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends TeamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends TeamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends TeamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends TeamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    club<T extends ClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClubDefaultArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
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
    clubId: 'clubId',
    teamId: 'teamId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InstallScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deviceId: 'deviceId',
    deviceName: 'deviceName',
    latestUserId: 'latestUserId'
  };

  export type InstallScalarFieldEnum = (typeof InstallScalarFieldEnum)[keyof typeof InstallScalarFieldEnum]


  export const LinkedUserIdScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    linkedUserId: 'linkedUserId'
  };

  export type LinkedUserIdScalarFieldEnum = (typeof LinkedUserIdScalarFieldEnum)[keyof typeof LinkedUserIdScalarFieldEnum]


  export const LinkedAccountsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    externalAccountType: 'externalAccountType',
    externalAccountId: 'externalAccountId'
  };

  export type LinkedAccountsScalarFieldEnum = (typeof LinkedAccountsScalarFieldEnum)[keyof typeof LinkedAccountsScalarFieldEnum]


  export const ClubScalarFieldEnum: {
    id: 'id',
    display: 'display',
    dateCreated: 'dateCreated',
    dateUpdated: 'dateUpdated'
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


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clubId?: StringFilter<"User"> | string
    teamId?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clubId?: SortOrder
    teamId?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    clubId?: StringFilter<"User"> | string
    teamId?: StringNullableFilter<"User"> | string | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clubId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clubId?: StringWithAggregatesFilter<"User"> | string
    teamId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type InstallWhereInput = {
    AND?: InstallWhereInput | InstallWhereInput[]
    OR?: InstallWhereInput[]
    NOT?: InstallWhereInput | InstallWhereInput[]
    id?: StringFilter<"Install"> | string
    userId?: StringFilter<"Install"> | string
    deviceId?: StringFilter<"Install"> | string
    deviceName?: StringNullableFilter<"Install"> | string | null
    latestUserId?: StringFilter<"Install"> | string
  }

  export type InstallOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    latestUserId?: SortOrder
  }

  export type InstallWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstallWhereInput | InstallWhereInput[]
    OR?: InstallWhereInput[]
    NOT?: InstallWhereInput | InstallWhereInput[]
    userId?: StringFilter<"Install"> | string
    deviceId?: StringFilter<"Install"> | string
    deviceName?: StringNullableFilter<"Install"> | string | null
    latestUserId?: StringFilter<"Install"> | string
  }, "id">

  export type InstallOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    latestUserId?: SortOrder
    _count?: InstallCountOrderByAggregateInput
    _max?: InstallMaxOrderByAggregateInput
    _min?: InstallMinOrderByAggregateInput
  }

  export type InstallScalarWhereWithAggregatesInput = {
    AND?: InstallScalarWhereWithAggregatesInput | InstallScalarWhereWithAggregatesInput[]
    OR?: InstallScalarWhereWithAggregatesInput[]
    NOT?: InstallScalarWhereWithAggregatesInput | InstallScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Install"> | string
    userId?: StringWithAggregatesFilter<"Install"> | string
    deviceId?: StringWithAggregatesFilter<"Install"> | string
    deviceName?: StringNullableWithAggregatesFilter<"Install"> | string | null
    latestUserId?: StringWithAggregatesFilter<"Install"> | string
  }

  export type LinkedUserIdWhereInput = {
    AND?: LinkedUserIdWhereInput | LinkedUserIdWhereInput[]
    OR?: LinkedUserIdWhereInput[]
    NOT?: LinkedUserIdWhereInput | LinkedUserIdWhereInput[]
    id?: StringFilter<"LinkedUserId"> | string
    userId?: StringFilter<"LinkedUserId"> | string
    linkedUserId?: StringFilter<"LinkedUserId"> | string
  }

  export type LinkedUserIdOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    linkedUserId?: SortOrder
  }

  export type LinkedUserIdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkedUserIdWhereInput | LinkedUserIdWhereInput[]
    OR?: LinkedUserIdWhereInput[]
    NOT?: LinkedUserIdWhereInput | LinkedUserIdWhereInput[]
    userId?: StringFilter<"LinkedUserId"> | string
    linkedUserId?: StringFilter<"LinkedUserId"> | string
  }, "id">

  export type LinkedUserIdOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    linkedUserId?: SortOrder
    _count?: LinkedUserIdCountOrderByAggregateInput
    _max?: LinkedUserIdMaxOrderByAggregateInput
    _min?: LinkedUserIdMinOrderByAggregateInput
  }

  export type LinkedUserIdScalarWhereWithAggregatesInput = {
    AND?: LinkedUserIdScalarWhereWithAggregatesInput | LinkedUserIdScalarWhereWithAggregatesInput[]
    OR?: LinkedUserIdScalarWhereWithAggregatesInput[]
    NOT?: LinkedUserIdScalarWhereWithAggregatesInput | LinkedUserIdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkedUserId"> | string
    userId?: StringWithAggregatesFilter<"LinkedUserId"> | string
    linkedUserId?: StringWithAggregatesFilter<"LinkedUserId"> | string
  }

  export type LinkedAccountsWhereInput = {
    AND?: LinkedAccountsWhereInput | LinkedAccountsWhereInput[]
    OR?: LinkedAccountsWhereInput[]
    NOT?: LinkedAccountsWhereInput | LinkedAccountsWhereInput[]
    id?: StringFilter<"LinkedAccounts"> | string
    userId?: StringFilter<"LinkedAccounts"> | string
    externalAccountType?: StringFilter<"LinkedAccounts"> | string
    externalAccountId?: StringFilter<"LinkedAccounts"> | string
  }

  export type LinkedAccountsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    externalAccountType?: SortOrder
    externalAccountId?: SortOrder
  }

  export type LinkedAccountsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkedAccountsWhereInput | LinkedAccountsWhereInput[]
    OR?: LinkedAccountsWhereInput[]
    NOT?: LinkedAccountsWhereInput | LinkedAccountsWhereInput[]
    userId?: StringFilter<"LinkedAccounts"> | string
    externalAccountType?: StringFilter<"LinkedAccounts"> | string
    externalAccountId?: StringFilter<"LinkedAccounts"> | string
  }, "id">

  export type LinkedAccountsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    externalAccountType?: SortOrder
    externalAccountId?: SortOrder
    _count?: LinkedAccountsCountOrderByAggregateInput
    _max?: LinkedAccountsMaxOrderByAggregateInput
    _min?: LinkedAccountsMinOrderByAggregateInput
  }

  export type LinkedAccountsScalarWhereWithAggregatesInput = {
    AND?: LinkedAccountsScalarWhereWithAggregatesInput | LinkedAccountsScalarWhereWithAggregatesInput[]
    OR?: LinkedAccountsScalarWhereWithAggregatesInput[]
    NOT?: LinkedAccountsScalarWhereWithAggregatesInput | LinkedAccountsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkedAccounts"> | string
    userId?: StringWithAggregatesFilter<"LinkedAccounts"> | string
    externalAccountType?: StringWithAggregatesFilter<"LinkedAccounts"> | string
    externalAccountId?: StringWithAggregatesFilter<"LinkedAccounts"> | string
  }

  export type ClubWhereInput = {
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    id?: StringFilter<"Club"> | string
    display?: StringFilter<"Club"> | string
    dateCreated?: DateTimeFilter<"Club"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"Club"> | Date | string | null
    teams?: TeamListRelationFilter
  }

  export type ClubOrderByWithRelationInput = {
    id?: SortOrder
    display?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    teams?: TeamOrderByRelationAggregateInput
  }

  export type ClubWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    display?: StringFilter<"Club"> | string
    dateCreated?: DateTimeFilter<"Club"> | Date | string
    dateUpdated?: DateTimeNullableFilter<"Club"> | Date | string | null
    teams?: TeamListRelationFilter
  }, "id">

  export type ClubOrderByWithAggregationInput = {
    id?: SortOrder
    display?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    _count?: ClubCountOrderByAggregateInput
    _max?: ClubMaxOrderByAggregateInput
    _min?: ClubMinOrderByAggregateInput
  }

  export type ClubScalarWhereWithAggregatesInput = {
    AND?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    OR?: ClubScalarWhereWithAggregatesInput[]
    NOT?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Club"> | string
    display?: StringWithAggregatesFilter<"Club"> | string
    dateCreated?: DateTimeWithAggregatesFilter<"Club"> | Date | string
    dateUpdated?: DateTimeNullableWithAggregatesFilter<"Club"> | Date | string | null
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
    club?: XOR<ClubRelationFilter, ClubWhereInput>
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    display?: SortOrder
    clubId?: SortOrder
    voided?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    club?: ClubOrderByWithRelationInput
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
    club?: XOR<ClubRelationFilter, ClubWhereInput>
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

  export type UserCreateInput = {
    id: string
    clubId: string
    teamId?: string | null
  }

  export type UserUncheckedCreateInput = {
    id: string
    clubId: string
    teamId?: string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id: string
    clubId: string
    teamId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstallCreateInput = {
    id: string
    userId: string
    deviceId: string
    deviceName?: string | null
    latestUserId: string
  }

  export type InstallUncheckedCreateInput = {
    id: string
    userId: string
    deviceId: string
    deviceName?: string | null
    latestUserId: string
  }

  export type InstallUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    latestUserId?: StringFieldUpdateOperationsInput | string
  }

  export type InstallUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    latestUserId?: StringFieldUpdateOperationsInput | string
  }

  export type InstallCreateManyInput = {
    id: string
    userId: string
    deviceId: string
    deviceName?: string | null
    latestUserId: string
  }

  export type InstallUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    latestUserId?: StringFieldUpdateOperationsInput | string
  }

  export type InstallUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    latestUserId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedUserIdCreateInput = {
    id: string
    userId: string
    linkedUserId: string
  }

  export type LinkedUserIdUncheckedCreateInput = {
    id: string
    userId: string
    linkedUserId: string
  }

  export type LinkedUserIdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    linkedUserId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedUserIdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    linkedUserId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedUserIdCreateManyInput = {
    id: string
    userId: string
    linkedUserId: string
  }

  export type LinkedUserIdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    linkedUserId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedUserIdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    linkedUserId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedAccountsCreateInput = {
    id: string
    userId: string
    externalAccountType: string
    externalAccountId: string
  }

  export type LinkedAccountsUncheckedCreateInput = {
    id: string
    userId: string
    externalAccountType: string
    externalAccountId: string
  }

  export type LinkedAccountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalAccountType?: StringFieldUpdateOperationsInput | string
    externalAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedAccountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalAccountType?: StringFieldUpdateOperationsInput | string
    externalAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedAccountsCreateManyInput = {
    id: string
    userId: string
    externalAccountType: string
    externalAccountId: string
  }

  export type LinkedAccountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalAccountType?: StringFieldUpdateOperationsInput | string
    externalAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedAccountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalAccountType?: StringFieldUpdateOperationsInput | string
    externalAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type ClubCreateInput = {
    id: string
    display: string
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    teams?: TeamCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateInput = {
    id: string
    display: string
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    teams?: TeamUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: TeamUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: TeamUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubCreateManyInput = {
    id: string
    display: string
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type ClubUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClubUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamCreateInput = {
    id: string
    display: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
    club: ClubCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateInput = {
    id: string
    display: string
    clubId: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    club?: ClubUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    teamId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    teamId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    teamId?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type InstallCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    latestUserId?: SortOrder
  }

  export type InstallMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    latestUserId?: SortOrder
  }

  export type InstallMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    latestUserId?: SortOrder
  }

  export type LinkedUserIdCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    linkedUserId?: SortOrder
  }

  export type LinkedUserIdMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    linkedUserId?: SortOrder
  }

  export type LinkedUserIdMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    linkedUserId?: SortOrder
  }

  export type LinkedAccountsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalAccountType?: SortOrder
    externalAccountId?: SortOrder
  }

  export type LinkedAccountsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalAccountType?: SortOrder
    externalAccountId?: SortOrder
  }

  export type LinkedAccountsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    externalAccountType?: SortOrder
    externalAccountId?: SortOrder
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

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClubCountOrderByAggregateInput = {
    id?: SortOrder
    display?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
  }

  export type ClubMaxOrderByAggregateInput = {
    id?: SortOrder
    display?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
  }

  export type ClubMinOrderByAggregateInput = {
    id?: SortOrder
    display?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClubRelationFilter = {
    is?: ClubWhereInput
    isNot?: ClubWhereInput
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TeamCreateNestedManyWithoutClubInput = {
    create?: XOR<TeamCreateWithoutClubInput, TeamUncheckedCreateWithoutClubInput> | TeamCreateWithoutClubInput[] | TeamUncheckedCreateWithoutClubInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutClubInput | TeamCreateOrConnectWithoutClubInput[]
    createMany?: TeamCreateManyClubInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<TeamCreateWithoutClubInput, TeamUncheckedCreateWithoutClubInput> | TeamCreateWithoutClubInput[] | TeamUncheckedCreateWithoutClubInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutClubInput | TeamCreateOrConnectWithoutClubInput[]
    createMany?: TeamCreateManyClubInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type ClubCreateNestedOneWithoutTeamsInput = {
    create?: XOR<ClubCreateWithoutTeamsInput, ClubUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutTeamsInput
    connect?: ClubWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClubUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<ClubCreateWithoutTeamsInput, ClubUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutTeamsInput
    upsert?: ClubUpsertWithoutTeamsInput
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutTeamsInput, ClubUpdateWithoutTeamsInput>, ClubUncheckedUpdateWithoutTeamsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TeamCreateWithoutClubInput = {
    id: string
    display: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type TeamUncheckedCreateWithoutClubInput = {
    id: string
    display: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type TeamCreateOrConnectWithoutClubInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutClubInput, TeamUncheckedCreateWithoutClubInput>
  }

  export type TeamCreateManyClubInputEnvelope = {
    data: TeamCreateManyClubInput | TeamCreateManyClubInput[]
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

  export type ClubCreateWithoutTeamsInput = {
    id: string
    display: string
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type ClubUncheckedCreateWithoutTeamsInput = {
    id: string
    display: string
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type ClubCreateOrConnectWithoutTeamsInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutTeamsInput, ClubUncheckedCreateWithoutTeamsInput>
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
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClubUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamCreateManyClubInput = {
    id: string
    display: string
    voided?: boolean
    dateCreated?: Date | string
    dateUpdated?: Date | string | null
  }

  export type TeamUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    voided?: BoolFieldUpdateOperationsInput | boolean
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClubCountOutputTypeDefaultArgs instead
     */
    export type ClubCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClubCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InstallDefaultArgs instead
     */
    export type InstallArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InstallDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LinkedUserIdDefaultArgs instead
     */
    export type LinkedUserIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LinkedUserIdDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LinkedAccountsDefaultArgs instead
     */
    export type LinkedAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LinkedAccountsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClubDefaultArgs instead
     */
    export type ClubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClubDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>

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