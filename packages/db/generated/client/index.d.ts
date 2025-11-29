
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
 * Model Files
 * 
 */
export type Files = $Result.DefaultSelection<Prisma.$FilesPayload>
/**
 * Model Upload_Receiver
 * 
 */
export type Upload_Receiver = $Result.DefaultSelection<Prisma.$Upload_ReceiverPayload>
/**
 * Model Invalid_Upload_Receiver
 * 
 */
export type Invalid_Upload_Receiver = $Result.DefaultSelection<Prisma.$Invalid_Upload_ReceiverPayload>
/**
 * Model Receiver
 * 
 */
export type Receiver = $Result.DefaultSelection<Prisma.$ReceiverPayload>
/**
 * Model Receiver_Message
 * 
 */
export type Receiver_Message = $Result.DefaultSelection<Prisma.$Receiver_MessagePayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model QuickSMSSend
 * 
 */
export type QuickSMSSend = $Result.DefaultSelection<Prisma.$QuickSMSSendPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model GuestFile
 * 
 */
export type GuestFile = $Result.DefaultSelection<Prisma.$GuestFilePayload>
/**
 * Model GuestReceiver
 * 
 */
export type GuestReceiver = $Result.DefaultSelection<Prisma.$GuestReceiverPayload>
/**
 * Model InvalidGuestReceiver
 * 
 */
export type InvalidGuestReceiver = $Result.DefaultSelection<Prisma.$InvalidGuestReceiverPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AccountType: {
  INDIVIDUAL: 'INDIVIDUAL',
  ORGANIZATION: 'ORGANIZATION'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const FileType: {
  CSV: 'CSV',
  XLSX: 'XLSX'
};

export type FileType = (typeof FileType)[keyof typeof FileType]


export const UploadStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  UPLOADED: 'UPLOADED',
  FAILED: 'FAILED'
};

export type UploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus]


export const CampaignStatus: {
  PENDING: 'PENDING',
  CANCELLED: 'CANCELLED',
  APPROVED: 'APPROVED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const DeliveryStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus]


export const QuickSendStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED'
};

export type QuickSendStatus = (typeof QuickSendStatus)[keyof typeof QuickSendStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type FileType = $Enums.FileType

export const FileType: typeof $Enums.FileType

export type UploadStatus = $Enums.UploadStatus

export const UploadStatus: typeof $Enums.UploadStatus

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type DeliveryStatus = $Enums.DeliveryStatus

export const DeliveryStatus: typeof $Enums.DeliveryStatus

export type QuickSendStatus = $Enums.QuickSendStatus

export const QuickSendStatus: typeof $Enums.QuickSendStatus

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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * `prisma.files`: Exposes CRUD operations for the **Files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.FilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.upload_Receiver`: Exposes CRUD operations for the **Upload_Receiver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Upload_Receivers
    * const upload_Receivers = await prisma.upload_Receiver.findMany()
    * ```
    */
  get upload_Receiver(): Prisma.Upload_ReceiverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invalid_Upload_Receiver`: Exposes CRUD operations for the **Invalid_Upload_Receiver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invalid_Upload_Receivers
    * const invalid_Upload_Receivers = await prisma.invalid_Upload_Receiver.findMany()
    * ```
    */
  get invalid_Upload_Receiver(): Prisma.Invalid_Upload_ReceiverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receiver`: Exposes CRUD operations for the **Receiver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receivers
    * const receivers = await prisma.receiver.findMany()
    * ```
    */
  get receiver(): Prisma.ReceiverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receiver_Message`: Exposes CRUD operations for the **Receiver_Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receiver_Messages
    * const receiver_Messages = await prisma.receiver_Message.findMany()
    * ```
    */
  get receiver_Message(): Prisma.Receiver_MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quickSMSSend`: Exposes CRUD operations for the **QuickSMSSend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuickSMSSends
    * const quickSMSSends = await prisma.quickSMSSend.findMany()
    * ```
    */
  get quickSMSSend(): Prisma.QuickSMSSendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guestFile`: Exposes CRUD operations for the **GuestFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuestFiles
    * const guestFiles = await prisma.guestFile.findMany()
    * ```
    */
  get guestFile(): Prisma.GuestFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guestReceiver`: Exposes CRUD operations for the **GuestReceiver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuestReceivers
    * const guestReceivers = await prisma.guestReceiver.findMany()
    * ```
    */
  get guestReceiver(): Prisma.GuestReceiverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invalidGuestReceiver`: Exposes CRUD operations for the **InvalidGuestReceiver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvalidGuestReceivers
    * const invalidGuestReceivers = await prisma.invalidGuestReceiver.findMany()
    * ```
    */
  get invalidGuestReceiver(): Prisma.InvalidGuestReceiverDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    Files: 'Files',
    Upload_Receiver: 'Upload_Receiver',
    Invalid_Upload_Receiver: 'Invalid_Upload_Receiver',
    Receiver: 'Receiver',
    Receiver_Message: 'Receiver_Message',
    Campaign: 'Campaign',
    QuickSMSSend: 'QuickSMSSend',
    Payment: 'Payment',
    Guest: 'Guest',
    GuestFile: 'GuestFile',
    GuestReceiver: 'GuestReceiver',
    InvalidGuestReceiver: 'InvalidGuestReceiver'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "files" | "upload_Receiver" | "invalid_Upload_Receiver" | "receiver" | "receiver_Message" | "campaign" | "quickSMSSend" | "payment" | "guest" | "guestFile" | "guestReceiver" | "invalidGuestReceiver"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Files: {
        payload: Prisma.$FilesPayload<ExtArgs>
        fields: Prisma.FilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findFirst: {
            args: Prisma.FilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findMany: {
            args: Prisma.FilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          create: {
            args: Prisma.FilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          createMany: {
            args: Prisma.FilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          delete: {
            args: Prisma.FilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          update: {
            args: Prisma.FilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          deleteMany: {
            args: Prisma.FilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          upsert: {
            args: Prisma.FilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          aggregate: {
            args: Prisma.FilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiles>
          }
          groupBy: {
            args: Prisma.FilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesCountAggregateOutputType> | number
          }
        }
      }
      Upload_Receiver: {
        payload: Prisma.$Upload_ReceiverPayload<ExtArgs>
        fields: Prisma.Upload_ReceiverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Upload_ReceiverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Upload_ReceiverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Upload_ReceiverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Upload_ReceiverPayload>
          }
          findFirst: {
            args: Prisma.Upload_ReceiverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Upload_ReceiverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Upload_ReceiverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Upload_ReceiverPayload>
          }
          findMany: {
            args: Prisma.Upload_ReceiverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Upload_ReceiverPayload>[]
          }
          create: {
            args: Prisma.Upload_ReceiverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Upload_ReceiverPayload>
          }
          createMany: {
            args: Prisma.Upload_ReceiverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Upload_ReceiverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Upload_ReceiverPayload>[]
          }
          delete: {
            args: Prisma.Upload_ReceiverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Upload_ReceiverPayload>
          }
          update: {
            args: Prisma.Upload_ReceiverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Upload_ReceiverPayload>
          }
          deleteMany: {
            args: Prisma.Upload_ReceiverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Upload_ReceiverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Upload_ReceiverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Upload_ReceiverPayload>[]
          }
          upsert: {
            args: Prisma.Upload_ReceiverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Upload_ReceiverPayload>
          }
          aggregate: {
            args: Prisma.Upload_ReceiverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpload_Receiver>
          }
          groupBy: {
            args: Prisma.Upload_ReceiverGroupByArgs<ExtArgs>
            result: $Utils.Optional<Upload_ReceiverGroupByOutputType>[]
          }
          count: {
            args: Prisma.Upload_ReceiverCountArgs<ExtArgs>
            result: $Utils.Optional<Upload_ReceiverCountAggregateOutputType> | number
          }
        }
      }
      Invalid_Upload_Receiver: {
        payload: Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>
        fields: Prisma.Invalid_Upload_ReceiverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Invalid_Upload_ReceiverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_Upload_ReceiverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Invalid_Upload_ReceiverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_Upload_ReceiverPayload>
          }
          findFirst: {
            args: Prisma.Invalid_Upload_ReceiverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_Upload_ReceiverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Invalid_Upload_ReceiverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_Upload_ReceiverPayload>
          }
          findMany: {
            args: Prisma.Invalid_Upload_ReceiverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_Upload_ReceiverPayload>[]
          }
          create: {
            args: Prisma.Invalid_Upload_ReceiverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_Upload_ReceiverPayload>
          }
          createMany: {
            args: Prisma.Invalid_Upload_ReceiverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Invalid_Upload_ReceiverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_Upload_ReceiverPayload>[]
          }
          delete: {
            args: Prisma.Invalid_Upload_ReceiverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_Upload_ReceiverPayload>
          }
          update: {
            args: Prisma.Invalid_Upload_ReceiverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_Upload_ReceiverPayload>
          }
          deleteMany: {
            args: Prisma.Invalid_Upload_ReceiverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Invalid_Upload_ReceiverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Invalid_Upload_ReceiverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_Upload_ReceiverPayload>[]
          }
          upsert: {
            args: Prisma.Invalid_Upload_ReceiverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_Upload_ReceiverPayload>
          }
          aggregate: {
            args: Prisma.Invalid_Upload_ReceiverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvalid_Upload_Receiver>
          }
          groupBy: {
            args: Prisma.Invalid_Upload_ReceiverGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invalid_Upload_ReceiverGroupByOutputType>[]
          }
          count: {
            args: Prisma.Invalid_Upload_ReceiverCountArgs<ExtArgs>
            result: $Utils.Optional<Invalid_Upload_ReceiverCountAggregateOutputType> | number
          }
        }
      }
      Receiver: {
        payload: Prisma.$ReceiverPayload<ExtArgs>
        fields: Prisma.ReceiverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceiverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceiverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          findFirst: {
            args: Prisma.ReceiverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceiverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          findMany: {
            args: Prisma.ReceiverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>[]
          }
          create: {
            args: Prisma.ReceiverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          createMany: {
            args: Prisma.ReceiverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceiverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>[]
          }
          delete: {
            args: Prisma.ReceiverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          update: {
            args: Prisma.ReceiverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          deleteMany: {
            args: Prisma.ReceiverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceiverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceiverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>[]
          }
          upsert: {
            args: Prisma.ReceiverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          aggregate: {
            args: Prisma.ReceiverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceiver>
          }
          groupBy: {
            args: Prisma.ReceiverGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiverGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceiverCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiverCountAggregateOutputType> | number
          }
        }
      }
      Receiver_Message: {
        payload: Prisma.$Receiver_MessagePayload<ExtArgs>
        fields: Prisma.Receiver_MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Receiver_MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Receiver_MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Receiver_MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Receiver_MessagePayload>
          }
          findFirst: {
            args: Prisma.Receiver_MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Receiver_MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Receiver_MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Receiver_MessagePayload>
          }
          findMany: {
            args: Prisma.Receiver_MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Receiver_MessagePayload>[]
          }
          create: {
            args: Prisma.Receiver_MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Receiver_MessagePayload>
          }
          createMany: {
            args: Prisma.Receiver_MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Receiver_MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Receiver_MessagePayload>[]
          }
          delete: {
            args: Prisma.Receiver_MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Receiver_MessagePayload>
          }
          update: {
            args: Prisma.Receiver_MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Receiver_MessagePayload>
          }
          deleteMany: {
            args: Prisma.Receiver_MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Receiver_MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Receiver_MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Receiver_MessagePayload>[]
          }
          upsert: {
            args: Prisma.Receiver_MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Receiver_MessagePayload>
          }
          aggregate: {
            args: Prisma.Receiver_MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceiver_Message>
          }
          groupBy: {
            args: Prisma.Receiver_MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Receiver_MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.Receiver_MessageCountArgs<ExtArgs>
            result: $Utils.Optional<Receiver_MessageCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      QuickSMSSend: {
        payload: Prisma.$QuickSMSSendPayload<ExtArgs>
        fields: Prisma.QuickSMSSendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuickSMSSendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickSMSSendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuickSMSSendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickSMSSendPayload>
          }
          findFirst: {
            args: Prisma.QuickSMSSendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickSMSSendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuickSMSSendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickSMSSendPayload>
          }
          findMany: {
            args: Prisma.QuickSMSSendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickSMSSendPayload>[]
          }
          create: {
            args: Prisma.QuickSMSSendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickSMSSendPayload>
          }
          createMany: {
            args: Prisma.QuickSMSSendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuickSMSSendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickSMSSendPayload>[]
          }
          delete: {
            args: Prisma.QuickSMSSendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickSMSSendPayload>
          }
          update: {
            args: Prisma.QuickSMSSendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickSMSSendPayload>
          }
          deleteMany: {
            args: Prisma.QuickSMSSendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuickSMSSendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuickSMSSendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickSMSSendPayload>[]
          }
          upsert: {
            args: Prisma.QuickSMSSendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickSMSSendPayload>
          }
          aggregate: {
            args: Prisma.QuickSMSSendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuickSMSSend>
          }
          groupBy: {
            args: Prisma.QuickSMSSendGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuickSMSSendGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuickSMSSendCountArgs<ExtArgs>
            result: $Utils.Optional<QuickSMSSendCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
          }
        }
      }
      GuestFile: {
        payload: Prisma.$GuestFilePayload<ExtArgs>
        fields: Prisma.GuestFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestFilePayload>
          }
          findFirst: {
            args: Prisma.GuestFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestFilePayload>
          }
          findMany: {
            args: Prisma.GuestFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestFilePayload>[]
          }
          create: {
            args: Prisma.GuestFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestFilePayload>
          }
          createMany: {
            args: Prisma.GuestFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestFilePayload>[]
          }
          delete: {
            args: Prisma.GuestFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestFilePayload>
          }
          update: {
            args: Prisma.GuestFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestFilePayload>
          }
          deleteMany: {
            args: Prisma.GuestFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestFilePayload>[]
          }
          upsert: {
            args: Prisma.GuestFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestFilePayload>
          }
          aggregate: {
            args: Prisma.GuestFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuestFile>
          }
          groupBy: {
            args: Prisma.GuestFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestFileCountArgs<ExtArgs>
            result: $Utils.Optional<GuestFileCountAggregateOutputType> | number
          }
        }
      }
      GuestReceiver: {
        payload: Prisma.$GuestReceiverPayload<ExtArgs>
        fields: Prisma.GuestReceiverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestReceiverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestReceiverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestReceiverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestReceiverPayload>
          }
          findFirst: {
            args: Prisma.GuestReceiverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestReceiverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestReceiverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestReceiverPayload>
          }
          findMany: {
            args: Prisma.GuestReceiverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestReceiverPayload>[]
          }
          create: {
            args: Prisma.GuestReceiverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestReceiverPayload>
          }
          createMany: {
            args: Prisma.GuestReceiverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestReceiverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestReceiverPayload>[]
          }
          delete: {
            args: Prisma.GuestReceiverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestReceiverPayload>
          }
          update: {
            args: Prisma.GuestReceiverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestReceiverPayload>
          }
          deleteMany: {
            args: Prisma.GuestReceiverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestReceiverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestReceiverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestReceiverPayload>[]
          }
          upsert: {
            args: Prisma.GuestReceiverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestReceiverPayload>
          }
          aggregate: {
            args: Prisma.GuestReceiverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuestReceiver>
          }
          groupBy: {
            args: Prisma.GuestReceiverGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestReceiverGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestReceiverCountArgs<ExtArgs>
            result: $Utils.Optional<GuestReceiverCountAggregateOutputType> | number
          }
        }
      }
      InvalidGuestReceiver: {
        payload: Prisma.$InvalidGuestReceiverPayload<ExtArgs>
        fields: Prisma.InvalidGuestReceiverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvalidGuestReceiverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvalidGuestReceiverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvalidGuestReceiverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvalidGuestReceiverPayload>
          }
          findFirst: {
            args: Prisma.InvalidGuestReceiverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvalidGuestReceiverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvalidGuestReceiverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvalidGuestReceiverPayload>
          }
          findMany: {
            args: Prisma.InvalidGuestReceiverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvalidGuestReceiverPayload>[]
          }
          create: {
            args: Prisma.InvalidGuestReceiverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvalidGuestReceiverPayload>
          }
          createMany: {
            args: Prisma.InvalidGuestReceiverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvalidGuestReceiverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvalidGuestReceiverPayload>[]
          }
          delete: {
            args: Prisma.InvalidGuestReceiverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvalidGuestReceiverPayload>
          }
          update: {
            args: Prisma.InvalidGuestReceiverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvalidGuestReceiverPayload>
          }
          deleteMany: {
            args: Prisma.InvalidGuestReceiverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvalidGuestReceiverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvalidGuestReceiverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvalidGuestReceiverPayload>[]
          }
          upsert: {
            args: Prisma.InvalidGuestReceiverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvalidGuestReceiverPayload>
          }
          aggregate: {
            args: Prisma.InvalidGuestReceiverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvalidGuestReceiver>
          }
          groupBy: {
            args: Prisma.InvalidGuestReceiverGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvalidGuestReceiverGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvalidGuestReceiverCountArgs<ExtArgs>
            result: $Utils.Optional<InvalidGuestReceiverCountAggregateOutputType> | number
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    files?: FilesOmit
    upload_Receiver?: Upload_ReceiverOmit
    invalid_Upload_Receiver?: Invalid_Upload_ReceiverOmit
    receiver?: ReceiverOmit
    receiver_Message?: Receiver_MessageOmit
    campaign?: CampaignOmit
    quickSMSSend?: QuickSMSSendOmit
    payment?: PaymentOmit
    guest?: GuestOmit
    guestFile?: GuestFileOmit
    guestReceiver?: GuestReceiverOmit
    invalidGuestReceiver?: InvalidGuestReceiverOmit
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
    files: number
    receiver: number
    campaigns: number
    quickSends: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | UserCountOutputTypeCountFilesArgs
    receiver?: boolean | UserCountOutputTypeCountReceiverArgs
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
    quickSends?: boolean | UserCountOutputTypeCountQuickSendsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
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
  export type UserCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiverWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuickSendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuickSMSSendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type FilesCountOutputType
   */

  export type FilesCountOutputType = {
    receivers: number
    campaigns: number
    invalidUploadReceivers: number
  }

  export type FilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receivers?: boolean | FilesCountOutputTypeCountReceiversArgs
    campaigns?: boolean | FilesCountOutputTypeCountCampaignsArgs
    invalidUploadReceivers?: boolean | FilesCountOutputTypeCountInvalidUploadReceiversArgs
  }

  // Custom InputTypes
  /**
   * FilesCountOutputType without action
   */
  export type FilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesCountOutputType
     */
    select?: FilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilesCountOutputType without action
   */
  export type FilesCountOutputTypeCountReceiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Upload_ReceiverWhereInput
  }

  /**
   * FilesCountOutputType without action
   */
  export type FilesCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * FilesCountOutputType without action
   */
  export type FilesCountOutputTypeCountInvalidUploadReceiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invalid_Upload_ReceiverWhereInput
  }


  /**
   * Count Type Receiver_MessageCountOutputType
   */

  export type Receiver_MessageCountOutputType = {
    receiver: number
  }

  export type Receiver_MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | Receiver_MessageCountOutputTypeCountReceiverArgs
  }

  // Custom InputTypes
  /**
   * Receiver_MessageCountOutputType without action
   */
  export type Receiver_MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_MessageCountOutputType
     */
    select?: Receiver_MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Receiver_MessageCountOutputType without action
   */
  export type Receiver_MessageCountOutputTypeCountReceiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiverWhereInput
  }


  /**
   * Count Type GuestCountOutputType
   */

  export type GuestCountOutputType = {
    files: number
  }

  export type GuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | GuestCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestCountOutputType
     */
    select?: GuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestFileWhereInput
  }


  /**
   * Count Type GuestFileCountOutputType
   */

  export type GuestFileCountOutputType = {
    receivers: number
    invalidGuestReceivers: number
  }

  export type GuestFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receivers?: boolean | GuestFileCountOutputTypeCountReceiversArgs
    invalidGuestReceivers?: boolean | GuestFileCountOutputTypeCountInvalidGuestReceiversArgs
  }

  // Custom InputTypes
  /**
   * GuestFileCountOutputType without action
   */
  export type GuestFileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFileCountOutputType
     */
    select?: GuestFileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestFileCountOutputType without action
   */
  export type GuestFileCountOutputTypeCountReceiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestReceiverWhereInput
  }

  /**
   * GuestFileCountOutputType without action
   */
  export type GuestFileCountOutputTypeCountInvalidGuestReceiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvalidGuestReceiverWhereInput
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
    email: string | null
    phoneNumber: string | null
    hashedPassword: string | null
    firstName: string | null
    lastName: string | null
    organizationName: string | null
    profileImage: string | null
    accountType: $Enums.AccountType | null
    isAccountVerified: boolean | null
    role: $Enums.Role | null
    citizenshipNumber: string | null
    citizenshipImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    otp: string | null
    otpExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phoneNumber: string | null
    hashedPassword: string | null
    firstName: string | null
    lastName: string | null
    organizationName: string | null
    profileImage: string | null
    accountType: $Enums.AccountType | null
    isAccountVerified: boolean | null
    role: $Enums.Role | null
    citizenshipNumber: string | null
    citizenshipImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    otp: string | null
    otpExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phoneNumber: number
    hashedPassword: number
    firstName: number
    lastName: number
    organizationName: number
    profileImage: number
    accountType: number
    isAccountVerified: number
    role: number
    citizenshipNumber: number
    citizenshipImage: number
    createdAt: number
    updatedAt: number
    otp: number
    otpExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    hashedPassword?: true
    firstName?: true
    lastName?: true
    organizationName?: true
    profileImage?: true
    accountType?: true
    isAccountVerified?: true
    role?: true
    citizenshipNumber?: true
    citizenshipImage?: true
    createdAt?: true
    updatedAt?: true
    otp?: true
    otpExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    hashedPassword?: true
    firstName?: true
    lastName?: true
    organizationName?: true
    profileImage?: true
    accountType?: true
    isAccountVerified?: true
    role?: true
    citizenshipNumber?: true
    citizenshipImage?: true
    createdAt?: true
    updatedAt?: true
    otp?: true
    otpExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    hashedPassword?: true
    firstName?: true
    lastName?: true
    organizationName?: true
    profileImage?: true
    accountType?: true
    isAccountVerified?: true
    role?: true
    citizenshipNumber?: true
    citizenshipImage?: true
    createdAt?: true
    updatedAt?: true
    otp?: true
    otpExpires?: true
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
    email: string | null
    phoneNumber: string | null
    hashedPassword: string | null
    firstName: string | null
    lastName: string | null
    organizationName: string | null
    profileImage: string | null
    accountType: $Enums.AccountType | null
    isAccountVerified: boolean
    role: $Enums.Role
    citizenshipNumber: string | null
    citizenshipImage: string | null
    createdAt: Date
    updatedAt: Date
    otp: string | null
    otpExpires: Date | null
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
    email?: boolean
    phoneNumber?: boolean
    hashedPassword?: boolean
    firstName?: boolean
    lastName?: boolean
    organizationName?: boolean
    profileImage?: boolean
    accountType?: boolean
    isAccountVerified?: boolean
    role?: boolean
    citizenshipNumber?: boolean
    citizenshipImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otp?: boolean
    otpExpires?: boolean
    files?: boolean | User$filesArgs<ExtArgs>
    receiver?: boolean | User$receiverArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    quickSends?: boolean | User$quickSendsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    hashedPassword?: boolean
    firstName?: boolean
    lastName?: boolean
    organizationName?: boolean
    profileImage?: boolean
    accountType?: boolean
    isAccountVerified?: boolean
    role?: boolean
    citizenshipNumber?: boolean
    citizenshipImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otp?: boolean
    otpExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    hashedPassword?: boolean
    firstName?: boolean
    lastName?: boolean
    organizationName?: boolean
    profileImage?: boolean
    accountType?: boolean
    isAccountVerified?: boolean
    role?: boolean
    citizenshipNumber?: boolean
    citizenshipImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otp?: boolean
    otpExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    hashedPassword?: boolean
    firstName?: boolean
    lastName?: boolean
    organizationName?: boolean
    profileImage?: boolean
    accountType?: boolean
    isAccountVerified?: boolean
    role?: boolean
    citizenshipNumber?: boolean
    citizenshipImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otp?: boolean
    otpExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phoneNumber" | "hashedPassword" | "firstName" | "lastName" | "organizationName" | "profileImage" | "accountType" | "isAccountVerified" | "role" | "citizenshipNumber" | "citizenshipImage" | "createdAt" | "updatedAt" | "otp" | "otpExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | User$filesArgs<ExtArgs>
    receiver?: boolean | User$receiverArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    quickSends?: boolean | User$quickSendsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      files: Prisma.$FilesPayload<ExtArgs>[]
      receiver: Prisma.$ReceiverPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      quickSends: Prisma.$QuickSMSSendPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      phoneNumber: string | null
      hashedPassword: string | null
      firstName: string | null
      lastName: string | null
      organizationName: string | null
      profileImage: string | null
      accountType: $Enums.AccountType | null
      isAccountVerified: boolean
      role: $Enums.Role
      citizenshipNumber: string | null
      citizenshipImage: string | null
      createdAt: Date
      updatedAt: Date
      otp: string | null
      otpExpires: Date | null
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    files<T extends User$filesArgs<ExtArgs> = {}>(args?: Subset<T, User$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receiver<T extends User$receiverArgs<ExtArgs> = {}>(args?: Subset<T, User$receiverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quickSends<T extends User$quickSendsArgs<ExtArgs> = {}>(args?: Subset<T, User$quickSendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly organizationName: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly accountType: FieldRef<"User", 'AccountType'>
    readonly isAccountVerified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly citizenshipNumber: FieldRef<"User", 'String'>
    readonly citizenshipImage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpires: FieldRef<"User", 'DateTime'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.files
   */
  export type User$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    where?: FilesWhereInput
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    cursor?: FilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * User.receiver
   */
  export type User$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    where?: ReceiverWhereInput
    orderBy?: ReceiverOrderByWithRelationInput | ReceiverOrderByWithRelationInput[]
    cursor?: ReceiverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiverScalarFieldEnum | ReceiverScalarFieldEnum[]
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.quickSends
   */
  export type User$quickSendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendInclude<ExtArgs> | null
    where?: QuickSMSSendWhereInput
    orderBy?: QuickSMSSendOrderByWithRelationInput | QuickSMSSendOrderByWithRelationInput[]
    cursor?: QuickSMSSendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuickSMSSendScalarFieldEnum | QuickSMSSendScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
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
   * Model Files
   */

  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  export type FilesAvgAggregateOutputType = {
    numberOfReceivers: number | null
    sizeInBytes: number | null
  }

  export type FilesSumAggregateOutputType = {
    numberOfReceivers: number | null
    sizeInBytes: bigint | null
  }

  export type FilesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    path: string | null
    numberOfReceivers: number | null
    invalidRowsPath: string | null
    sizeInBytes: bigint | null
    type: $Enums.FileType | null
    uploadStatus: $Enums.UploadStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FilesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    path: string | null
    numberOfReceivers: number | null
    invalidRowsPath: string | null
    sizeInBytes: bigint | null
    type: $Enums.FileType | null
    uploadStatus: $Enums.UploadStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FilesCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    path: number
    numberOfReceivers: number
    invalidRowsPath: number
    sizeInBytes: number
    type: number
    uploadStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FilesAvgAggregateInputType = {
    numberOfReceivers?: true
    sizeInBytes?: true
  }

  export type FilesSumAggregateInputType = {
    numberOfReceivers?: true
    sizeInBytes?: true
  }

  export type FilesMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    path?: true
    numberOfReceivers?: true
    invalidRowsPath?: true
    sizeInBytes?: true
    type?: true
    uploadStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FilesMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    path?: true
    numberOfReceivers?: true
    invalidRowsPath?: true
    sizeInBytes?: true
    type?: true
    uploadStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FilesCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    path?: true
    numberOfReceivers?: true
    invalidRowsPath?: true
    sizeInBytes?: true
    type?: true
    uploadStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to aggregate.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }




  export type FilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
    orderBy?: FilesOrderByWithAggregationInput | FilesOrderByWithAggregationInput[]
    by: FilesScalarFieldEnum[] | FilesScalarFieldEnum
    having?: FilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesCountAggregateInputType | true
    _avg?: FilesAvgAggregateInputType
    _sum?: FilesSumAggregateInputType
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }

  export type FilesGroupByOutputType = {
    id: string
    userId: string
    name: string
    path: string
    numberOfReceivers: number | null
    invalidRowsPath: string | null
    sizeInBytes: bigint
    type: $Enums.FileType
    uploadStatus: $Enums.UploadStatus
    createdAt: Date
    updatedAt: Date
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends FilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      >
    >


  export type FilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    path?: boolean
    numberOfReceivers?: boolean
    invalidRowsPath?: boolean
    sizeInBytes?: boolean
    type?: boolean
    uploadStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    receivers?: boolean | Files$receiversArgs<ExtArgs>
    campaigns?: boolean | Files$campaignsArgs<ExtArgs>
    invalidUploadReceivers?: boolean | Files$invalidUploadReceiversArgs<ExtArgs>
    _count?: boolean | FilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    path?: boolean
    numberOfReceivers?: boolean
    invalidRowsPath?: boolean
    sizeInBytes?: boolean
    type?: boolean
    uploadStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    path?: boolean
    numberOfReceivers?: boolean
    invalidRowsPath?: boolean
    sizeInBytes?: boolean
    type?: boolean
    uploadStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    path?: boolean
    numberOfReceivers?: boolean
    invalidRowsPath?: boolean
    sizeInBytes?: boolean
    type?: boolean
    uploadStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "path" | "numberOfReceivers" | "invalidRowsPath" | "sizeInBytes" | "type" | "uploadStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["files"]>
  export type FilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    receivers?: boolean | Files$receiversArgs<ExtArgs>
    campaigns?: boolean | Files$campaignsArgs<ExtArgs>
    invalidUploadReceivers?: boolean | Files$invalidUploadReceiversArgs<ExtArgs>
    _count?: boolean | FilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Files"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      receivers: Prisma.$Upload_ReceiverPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      invalidUploadReceivers: Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      path: string
      numberOfReceivers: number | null
      invalidRowsPath: string | null
      sizeInBytes: bigint
      type: $Enums.FileType
      uploadStatus: $Enums.UploadStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["files"]>
    composites: {}
  }

  type FilesGetPayload<S extends boolean | null | undefined | FilesDefaultArgs> = $Result.GetResult<Prisma.$FilesPayload, S>

  type FilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesCountAggregateInputType | true
    }

  export interface FilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Files'], meta: { name: 'Files' } }
    /**
     * Find zero or one Files that matches the filter.
     * @param {FilesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilesFindUniqueArgs>(args: SelectSubset<T, FilesFindUniqueArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilesFindUniqueOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilesFindUniqueOrThrowArgs>(args: SelectSubset<T, FilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilesFindFirstArgs>(args?: SelectSubset<T, FilesFindFirstArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilesFindFirstOrThrowArgs>(args?: SelectSubset<T, FilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filesWithIdOnly = await prisma.files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilesFindManyArgs>(args?: SelectSubset<T, FilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Files.
     * @param {FilesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
     */
    create<T extends FilesCreateArgs>(args: SelectSubset<T, FilesCreateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FilesCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilesCreateManyArgs>(args?: SelectSubset<T, FilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FilesCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilesCreateManyAndReturnArgs>(args?: SelectSubset<T, FilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Files.
     * @param {FilesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
     */
    delete<T extends FilesDeleteArgs>(args: SelectSubset<T, FilesDeleteArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Files.
     * @param {FilesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilesUpdateArgs>(args: SelectSubset<T, FilesUpdateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FilesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilesDeleteManyArgs>(args?: SelectSubset<T, FilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilesUpdateManyArgs>(args: SelectSubset<T, FilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FilesUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FilesUpdateManyAndReturnArgs>(args: SelectSubset<T, FilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Files.
     * @param {FilesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
     */
    upsert<T extends FilesUpsertArgs>(args: SelectSubset<T, FilesUpsertArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FilesCountArgs>(
      args?: Subset<T, FilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesGroupByArgs} args - Group by arguments.
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
      T extends FilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilesGroupByArgs['orderBy'] }
        : { orderBy?: FilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Files model
   */
  readonly fields: FilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receivers<T extends Files$receiversArgs<ExtArgs> = {}>(args?: Subset<T, Files$receiversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends Files$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Files$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invalidUploadReceivers<T extends Files$invalidUploadReceiversArgs<ExtArgs> = {}>(args?: Subset<T, Files$invalidUploadReceiversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Files model
   */
  interface FilesFieldRefs {
    readonly id: FieldRef<"Files", 'String'>
    readonly userId: FieldRef<"Files", 'String'>
    readonly name: FieldRef<"Files", 'String'>
    readonly path: FieldRef<"Files", 'String'>
    readonly numberOfReceivers: FieldRef<"Files", 'Int'>
    readonly invalidRowsPath: FieldRef<"Files", 'String'>
    readonly sizeInBytes: FieldRef<"Files", 'BigInt'>
    readonly type: FieldRef<"Files", 'FileType'>
    readonly uploadStatus: FieldRef<"Files", 'UploadStatus'>
    readonly createdAt: FieldRef<"Files", 'DateTime'>
    readonly updatedAt: FieldRef<"Files", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Files findUnique
   */
  export type FilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findUniqueOrThrow
   */
  export type FilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findFirst
   */
  export type FilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files findFirstOrThrow
   */
  export type FilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files findMany
   */
  export type FilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files create
   */
  export type FilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Files.
     */
    data: XOR<FilesCreateInput, FilesUncheckedCreateInput>
  }

  /**
   * Files createMany
   */
  export type FilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Files createManyAndReturn
   */
  export type FilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Files update
   */
  export type FilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Files.
     */
    data: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
    /**
     * Choose, which Files to update.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files updateMany
   */
  export type FilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * Files updateManyAndReturn
   */
  export type FilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Files upsert
   */
  export type FilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Files to update in case it exists.
     */
    where: FilesWhereUniqueInput
    /**
     * In case the Files found by the `where` argument doesn't exist, create a new Files with this data.
     */
    create: XOR<FilesCreateInput, FilesUncheckedCreateInput>
    /**
     * In case the Files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
  }

  /**
   * Files delete
   */
  export type FilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter which Files to delete.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files deleteMany
   */
  export type FilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * Files.receivers
   */
  export type Files$receiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverInclude<ExtArgs> | null
    where?: Upload_ReceiverWhereInput
    orderBy?: Upload_ReceiverOrderByWithRelationInput | Upload_ReceiverOrderByWithRelationInput[]
    cursor?: Upload_ReceiverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Upload_ReceiverScalarFieldEnum | Upload_ReceiverScalarFieldEnum[]
  }

  /**
   * Files.campaigns
   */
  export type Files$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Files.invalidUploadReceivers
   */
  export type Files$invalidUploadReceiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverInclude<ExtArgs> | null
    where?: Invalid_Upload_ReceiverWhereInput
    orderBy?: Invalid_Upload_ReceiverOrderByWithRelationInput | Invalid_Upload_ReceiverOrderByWithRelationInput[]
    cursor?: Invalid_Upload_ReceiverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invalid_Upload_ReceiverScalarFieldEnum | Invalid_Upload_ReceiverScalarFieldEnum[]
  }

  /**
   * Files without action
   */
  export type FilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
  }


  /**
   * Model Upload_Receiver
   */

  export type AggregateUpload_Receiver = {
    _count: Upload_ReceiverCountAggregateOutputType | null
    _min: Upload_ReceiverMinAggregateOutputType | null
    _max: Upload_ReceiverMaxAggregateOutputType | null
  }

  export type Upload_ReceiverMinAggregateOutputType = {
    id: string | null
    fileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Upload_ReceiverMaxAggregateOutputType = {
    id: string | null
    fileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Upload_ReceiverCountAggregateOutputType = {
    id: number
    fileId: number
    firstName: number
    lastName: number
    province: number
    district: number
    municipality: number
    phoneNumber: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Upload_ReceiverMinAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Upload_ReceiverMaxAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Upload_ReceiverCountAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Upload_ReceiverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upload_Receiver to aggregate.
     */
    where?: Upload_ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upload_Receivers to fetch.
     */
    orderBy?: Upload_ReceiverOrderByWithRelationInput | Upload_ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Upload_ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upload_Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upload_Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Upload_Receivers
    **/
    _count?: true | Upload_ReceiverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Upload_ReceiverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Upload_ReceiverMaxAggregateInputType
  }

  export type GetUpload_ReceiverAggregateType<T extends Upload_ReceiverAggregateArgs> = {
        [P in keyof T & keyof AggregateUpload_Receiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpload_Receiver[P]>
      : GetScalarType<T[P], AggregateUpload_Receiver[P]>
  }




  export type Upload_ReceiverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Upload_ReceiverWhereInput
    orderBy?: Upload_ReceiverOrderByWithAggregationInput | Upload_ReceiverOrderByWithAggregationInput[]
    by: Upload_ReceiverScalarFieldEnum[] | Upload_ReceiverScalarFieldEnum
    having?: Upload_ReceiverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Upload_ReceiverCountAggregateInputType | true
    _min?: Upload_ReceiverMinAggregateInputType
    _max?: Upload_ReceiverMaxAggregateInputType
  }

  export type Upload_ReceiverGroupByOutputType = {
    id: string
    fileId: string
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: Upload_ReceiverCountAggregateOutputType | null
    _min: Upload_ReceiverMinAggregateOutputType | null
    _max: Upload_ReceiverMaxAggregateOutputType | null
  }

  type GetUpload_ReceiverGroupByPayload<T extends Upload_ReceiverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Upload_ReceiverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Upload_ReceiverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Upload_ReceiverGroupByOutputType[P]>
            : GetScalarType<T[P], Upload_ReceiverGroupByOutputType[P]>
        }
      >
    >


  export type Upload_ReceiverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upload_Receiver"]>

  export type Upload_ReceiverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upload_Receiver"]>

  export type Upload_ReceiverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upload_Receiver"]>

  export type Upload_ReceiverSelectScalar = {
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Upload_ReceiverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "firstName" | "lastName" | "province" | "district" | "municipality" | "phoneNumber" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["upload_Receiver"]>
  export type Upload_ReceiverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }
  export type Upload_ReceiverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }
  export type Upload_ReceiverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }

  export type $Upload_ReceiverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Upload_Receiver"
    objects: {
      file: Prisma.$FilesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileId: string
      firstName: string | null
      lastName: string | null
      province: string | null
      district: string | null
      municipality: string | null
      phoneNumber: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["upload_Receiver"]>
    composites: {}
  }

  type Upload_ReceiverGetPayload<S extends boolean | null | undefined | Upload_ReceiverDefaultArgs> = $Result.GetResult<Prisma.$Upload_ReceiverPayload, S>

  type Upload_ReceiverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Upload_ReceiverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Upload_ReceiverCountAggregateInputType | true
    }

  export interface Upload_ReceiverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Upload_Receiver'], meta: { name: 'Upload_Receiver' } }
    /**
     * Find zero or one Upload_Receiver that matches the filter.
     * @param {Upload_ReceiverFindUniqueArgs} args - Arguments to find a Upload_Receiver
     * @example
     * // Get one Upload_Receiver
     * const upload_Receiver = await prisma.upload_Receiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Upload_ReceiverFindUniqueArgs>(args: SelectSubset<T, Upload_ReceiverFindUniqueArgs<ExtArgs>>): Prisma__Upload_ReceiverClient<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Upload_Receiver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Upload_ReceiverFindUniqueOrThrowArgs} args - Arguments to find a Upload_Receiver
     * @example
     * // Get one Upload_Receiver
     * const upload_Receiver = await prisma.upload_Receiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Upload_ReceiverFindUniqueOrThrowArgs>(args: SelectSubset<T, Upload_ReceiverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Upload_ReceiverClient<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upload_Receiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Upload_ReceiverFindFirstArgs} args - Arguments to find a Upload_Receiver
     * @example
     * // Get one Upload_Receiver
     * const upload_Receiver = await prisma.upload_Receiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Upload_ReceiverFindFirstArgs>(args?: SelectSubset<T, Upload_ReceiverFindFirstArgs<ExtArgs>>): Prisma__Upload_ReceiverClient<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upload_Receiver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Upload_ReceiverFindFirstOrThrowArgs} args - Arguments to find a Upload_Receiver
     * @example
     * // Get one Upload_Receiver
     * const upload_Receiver = await prisma.upload_Receiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Upload_ReceiverFindFirstOrThrowArgs>(args?: SelectSubset<T, Upload_ReceiverFindFirstOrThrowArgs<ExtArgs>>): Prisma__Upload_ReceiverClient<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Upload_Receivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Upload_ReceiverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Upload_Receivers
     * const upload_Receivers = await prisma.upload_Receiver.findMany()
     * 
     * // Get first 10 Upload_Receivers
     * const upload_Receivers = await prisma.upload_Receiver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upload_ReceiverWithIdOnly = await prisma.upload_Receiver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Upload_ReceiverFindManyArgs>(args?: SelectSubset<T, Upload_ReceiverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Upload_Receiver.
     * @param {Upload_ReceiverCreateArgs} args - Arguments to create a Upload_Receiver.
     * @example
     * // Create one Upload_Receiver
     * const Upload_Receiver = await prisma.upload_Receiver.create({
     *   data: {
     *     // ... data to create a Upload_Receiver
     *   }
     * })
     * 
     */
    create<T extends Upload_ReceiverCreateArgs>(args: SelectSubset<T, Upload_ReceiverCreateArgs<ExtArgs>>): Prisma__Upload_ReceiverClient<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Upload_Receivers.
     * @param {Upload_ReceiverCreateManyArgs} args - Arguments to create many Upload_Receivers.
     * @example
     * // Create many Upload_Receivers
     * const upload_Receiver = await prisma.upload_Receiver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Upload_ReceiverCreateManyArgs>(args?: SelectSubset<T, Upload_ReceiverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Upload_Receivers and returns the data saved in the database.
     * @param {Upload_ReceiverCreateManyAndReturnArgs} args - Arguments to create many Upload_Receivers.
     * @example
     * // Create many Upload_Receivers
     * const upload_Receiver = await prisma.upload_Receiver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Upload_Receivers and only return the `id`
     * const upload_ReceiverWithIdOnly = await prisma.upload_Receiver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Upload_ReceiverCreateManyAndReturnArgs>(args?: SelectSubset<T, Upload_ReceiverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Upload_Receiver.
     * @param {Upload_ReceiverDeleteArgs} args - Arguments to delete one Upload_Receiver.
     * @example
     * // Delete one Upload_Receiver
     * const Upload_Receiver = await prisma.upload_Receiver.delete({
     *   where: {
     *     // ... filter to delete one Upload_Receiver
     *   }
     * })
     * 
     */
    delete<T extends Upload_ReceiverDeleteArgs>(args: SelectSubset<T, Upload_ReceiverDeleteArgs<ExtArgs>>): Prisma__Upload_ReceiverClient<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Upload_Receiver.
     * @param {Upload_ReceiverUpdateArgs} args - Arguments to update one Upload_Receiver.
     * @example
     * // Update one Upload_Receiver
     * const upload_Receiver = await prisma.upload_Receiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Upload_ReceiverUpdateArgs>(args: SelectSubset<T, Upload_ReceiverUpdateArgs<ExtArgs>>): Prisma__Upload_ReceiverClient<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Upload_Receivers.
     * @param {Upload_ReceiverDeleteManyArgs} args - Arguments to filter Upload_Receivers to delete.
     * @example
     * // Delete a few Upload_Receivers
     * const { count } = await prisma.upload_Receiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Upload_ReceiverDeleteManyArgs>(args?: SelectSubset<T, Upload_ReceiverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Upload_Receivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Upload_ReceiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Upload_Receivers
     * const upload_Receiver = await prisma.upload_Receiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Upload_ReceiverUpdateManyArgs>(args: SelectSubset<T, Upload_ReceiverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Upload_Receivers and returns the data updated in the database.
     * @param {Upload_ReceiverUpdateManyAndReturnArgs} args - Arguments to update many Upload_Receivers.
     * @example
     * // Update many Upload_Receivers
     * const upload_Receiver = await prisma.upload_Receiver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Upload_Receivers and only return the `id`
     * const upload_ReceiverWithIdOnly = await prisma.upload_Receiver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Upload_ReceiverUpdateManyAndReturnArgs>(args: SelectSubset<T, Upload_ReceiverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Upload_Receiver.
     * @param {Upload_ReceiverUpsertArgs} args - Arguments to update or create a Upload_Receiver.
     * @example
     * // Update or create a Upload_Receiver
     * const upload_Receiver = await prisma.upload_Receiver.upsert({
     *   create: {
     *     // ... data to create a Upload_Receiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Upload_Receiver we want to update
     *   }
     * })
     */
    upsert<T extends Upload_ReceiverUpsertArgs>(args: SelectSubset<T, Upload_ReceiverUpsertArgs<ExtArgs>>): Prisma__Upload_ReceiverClient<$Result.GetResult<Prisma.$Upload_ReceiverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Upload_Receivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Upload_ReceiverCountArgs} args - Arguments to filter Upload_Receivers to count.
     * @example
     * // Count the number of Upload_Receivers
     * const count = await prisma.upload_Receiver.count({
     *   where: {
     *     // ... the filter for the Upload_Receivers we want to count
     *   }
     * })
    **/
    count<T extends Upload_ReceiverCountArgs>(
      args?: Subset<T, Upload_ReceiverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Upload_ReceiverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Upload_Receiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Upload_ReceiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Upload_ReceiverAggregateArgs>(args: Subset<T, Upload_ReceiverAggregateArgs>): Prisma.PrismaPromise<GetUpload_ReceiverAggregateType<T>>

    /**
     * Group by Upload_Receiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Upload_ReceiverGroupByArgs} args - Group by arguments.
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
      T extends Upload_ReceiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Upload_ReceiverGroupByArgs['orderBy'] }
        : { orderBy?: Upload_ReceiverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Upload_ReceiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpload_ReceiverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Upload_Receiver model
   */
  readonly fields: Upload_ReceiverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Upload_Receiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Upload_ReceiverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends FilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilesDefaultArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Upload_Receiver model
   */
  interface Upload_ReceiverFieldRefs {
    readonly id: FieldRef<"Upload_Receiver", 'String'>
    readonly fileId: FieldRef<"Upload_Receiver", 'String'>
    readonly firstName: FieldRef<"Upload_Receiver", 'String'>
    readonly lastName: FieldRef<"Upload_Receiver", 'String'>
    readonly province: FieldRef<"Upload_Receiver", 'String'>
    readonly district: FieldRef<"Upload_Receiver", 'String'>
    readonly municipality: FieldRef<"Upload_Receiver", 'String'>
    readonly phoneNumber: FieldRef<"Upload_Receiver", 'String'>
    readonly isDeleted: FieldRef<"Upload_Receiver", 'Boolean'>
    readonly createdAt: FieldRef<"Upload_Receiver", 'DateTime'>
    readonly updatedAt: FieldRef<"Upload_Receiver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Upload_Receiver findUnique
   */
  export type Upload_ReceiverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Upload_Receiver to fetch.
     */
    where: Upload_ReceiverWhereUniqueInput
  }

  /**
   * Upload_Receiver findUniqueOrThrow
   */
  export type Upload_ReceiverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Upload_Receiver to fetch.
     */
    where: Upload_ReceiverWhereUniqueInput
  }

  /**
   * Upload_Receiver findFirst
   */
  export type Upload_ReceiverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Upload_Receiver to fetch.
     */
    where?: Upload_ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upload_Receivers to fetch.
     */
    orderBy?: Upload_ReceiverOrderByWithRelationInput | Upload_ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upload_Receivers.
     */
    cursor?: Upload_ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upload_Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upload_Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upload_Receivers.
     */
    distinct?: Upload_ReceiverScalarFieldEnum | Upload_ReceiverScalarFieldEnum[]
  }

  /**
   * Upload_Receiver findFirstOrThrow
   */
  export type Upload_ReceiverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Upload_Receiver to fetch.
     */
    where?: Upload_ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upload_Receivers to fetch.
     */
    orderBy?: Upload_ReceiverOrderByWithRelationInput | Upload_ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upload_Receivers.
     */
    cursor?: Upload_ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upload_Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upload_Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upload_Receivers.
     */
    distinct?: Upload_ReceiverScalarFieldEnum | Upload_ReceiverScalarFieldEnum[]
  }

  /**
   * Upload_Receiver findMany
   */
  export type Upload_ReceiverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Upload_Receivers to fetch.
     */
    where?: Upload_ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upload_Receivers to fetch.
     */
    orderBy?: Upload_ReceiverOrderByWithRelationInput | Upload_ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Upload_Receivers.
     */
    cursor?: Upload_ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upload_Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upload_Receivers.
     */
    skip?: number
    distinct?: Upload_ReceiverScalarFieldEnum | Upload_ReceiverScalarFieldEnum[]
  }

  /**
   * Upload_Receiver create
   */
  export type Upload_ReceiverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverInclude<ExtArgs> | null
    /**
     * The data needed to create a Upload_Receiver.
     */
    data: XOR<Upload_ReceiverCreateInput, Upload_ReceiverUncheckedCreateInput>
  }

  /**
   * Upload_Receiver createMany
   */
  export type Upload_ReceiverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Upload_Receivers.
     */
    data: Upload_ReceiverCreateManyInput | Upload_ReceiverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Upload_Receiver createManyAndReturn
   */
  export type Upload_ReceiverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * The data used to create many Upload_Receivers.
     */
    data: Upload_ReceiverCreateManyInput | Upload_ReceiverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Upload_Receiver update
   */
  export type Upload_ReceiverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverInclude<ExtArgs> | null
    /**
     * The data needed to update a Upload_Receiver.
     */
    data: XOR<Upload_ReceiverUpdateInput, Upload_ReceiverUncheckedUpdateInput>
    /**
     * Choose, which Upload_Receiver to update.
     */
    where: Upload_ReceiverWhereUniqueInput
  }

  /**
   * Upload_Receiver updateMany
   */
  export type Upload_ReceiverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Upload_Receivers.
     */
    data: XOR<Upload_ReceiverUpdateManyMutationInput, Upload_ReceiverUncheckedUpdateManyInput>
    /**
     * Filter which Upload_Receivers to update
     */
    where?: Upload_ReceiverWhereInput
    /**
     * Limit how many Upload_Receivers to update.
     */
    limit?: number
  }

  /**
   * Upload_Receiver updateManyAndReturn
   */
  export type Upload_ReceiverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * The data used to update Upload_Receivers.
     */
    data: XOR<Upload_ReceiverUpdateManyMutationInput, Upload_ReceiverUncheckedUpdateManyInput>
    /**
     * Filter which Upload_Receivers to update
     */
    where?: Upload_ReceiverWhereInput
    /**
     * Limit how many Upload_Receivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Upload_Receiver upsert
   */
  export type Upload_ReceiverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverInclude<ExtArgs> | null
    /**
     * The filter to search for the Upload_Receiver to update in case it exists.
     */
    where: Upload_ReceiverWhereUniqueInput
    /**
     * In case the Upload_Receiver found by the `where` argument doesn't exist, create a new Upload_Receiver with this data.
     */
    create: XOR<Upload_ReceiverCreateInput, Upload_ReceiverUncheckedCreateInput>
    /**
     * In case the Upload_Receiver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Upload_ReceiverUpdateInput, Upload_ReceiverUncheckedUpdateInput>
  }

  /**
   * Upload_Receiver delete
   */
  export type Upload_ReceiverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter which Upload_Receiver to delete.
     */
    where: Upload_ReceiverWhereUniqueInput
  }

  /**
   * Upload_Receiver deleteMany
   */
  export type Upload_ReceiverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upload_Receivers to delete
     */
    where?: Upload_ReceiverWhereInput
    /**
     * Limit how many Upload_Receivers to delete.
     */
    limit?: number
  }

  /**
   * Upload_Receiver without action
   */
  export type Upload_ReceiverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload_Receiver
     */
    select?: Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload_Receiver
     */
    omit?: Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Upload_ReceiverInclude<ExtArgs> | null
  }


  /**
   * Model Invalid_Upload_Receiver
   */

  export type AggregateInvalid_Upload_Receiver = {
    _count: Invalid_Upload_ReceiverCountAggregateOutputType | null
    _min: Invalid_Upload_ReceiverMinAggregateOutputType | null
    _max: Invalid_Upload_ReceiverMaxAggregateOutputType | null
  }

  export type Invalid_Upload_ReceiverMinAggregateOutputType = {
    id: string | null
    fileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Invalid_Upload_ReceiverMaxAggregateOutputType = {
    id: string | null
    fileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Invalid_Upload_ReceiverCountAggregateOutputType = {
    id: number
    fileId: number
    firstName: number
    lastName: number
    province: number
    district: number
    municipality: number
    phoneNumber: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Invalid_Upload_ReceiverMinAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Invalid_Upload_ReceiverMaxAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Invalid_Upload_ReceiverCountAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Invalid_Upload_ReceiverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invalid_Upload_Receiver to aggregate.
     */
    where?: Invalid_Upload_ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invalid_Upload_Receivers to fetch.
     */
    orderBy?: Invalid_Upload_ReceiverOrderByWithRelationInput | Invalid_Upload_ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Invalid_Upload_ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invalid_Upload_Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invalid_Upload_Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invalid_Upload_Receivers
    **/
    _count?: true | Invalid_Upload_ReceiverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invalid_Upload_ReceiverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invalid_Upload_ReceiverMaxAggregateInputType
  }

  export type GetInvalid_Upload_ReceiverAggregateType<T extends Invalid_Upload_ReceiverAggregateArgs> = {
        [P in keyof T & keyof AggregateInvalid_Upload_Receiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvalid_Upload_Receiver[P]>
      : GetScalarType<T[P], AggregateInvalid_Upload_Receiver[P]>
  }




  export type Invalid_Upload_ReceiverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invalid_Upload_ReceiverWhereInput
    orderBy?: Invalid_Upload_ReceiverOrderByWithAggregationInput | Invalid_Upload_ReceiverOrderByWithAggregationInput[]
    by: Invalid_Upload_ReceiverScalarFieldEnum[] | Invalid_Upload_ReceiverScalarFieldEnum
    having?: Invalid_Upload_ReceiverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invalid_Upload_ReceiverCountAggregateInputType | true
    _min?: Invalid_Upload_ReceiverMinAggregateInputType
    _max?: Invalid_Upload_ReceiverMaxAggregateInputType
  }

  export type Invalid_Upload_ReceiverGroupByOutputType = {
    id: string
    fileId: string
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: Invalid_Upload_ReceiverCountAggregateOutputType | null
    _min: Invalid_Upload_ReceiverMinAggregateOutputType | null
    _max: Invalid_Upload_ReceiverMaxAggregateOutputType | null
  }

  type GetInvalid_Upload_ReceiverGroupByPayload<T extends Invalid_Upload_ReceiverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invalid_Upload_ReceiverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invalid_Upload_ReceiverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invalid_Upload_ReceiverGroupByOutputType[P]>
            : GetScalarType<T[P], Invalid_Upload_ReceiverGroupByOutputType[P]>
        }
      >
    >


  export type Invalid_Upload_ReceiverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invalid_Upload_Receiver"]>

  export type Invalid_Upload_ReceiverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invalid_Upload_Receiver"]>

  export type Invalid_Upload_ReceiverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invalid_Upload_Receiver"]>

  export type Invalid_Upload_ReceiverSelectScalar = {
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Invalid_Upload_ReceiverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "firstName" | "lastName" | "province" | "district" | "municipality" | "phoneNumber" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["invalid_Upload_Receiver"]>
  export type Invalid_Upload_ReceiverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }
  export type Invalid_Upload_ReceiverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }
  export type Invalid_Upload_ReceiverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FilesDefaultArgs<ExtArgs>
  }

  export type $Invalid_Upload_ReceiverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invalid_Upload_Receiver"
    objects: {
      file: Prisma.$FilesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileId: string
      firstName: string | null
      lastName: string | null
      province: string | null
      district: string | null
      municipality: string | null
      phoneNumber: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invalid_Upload_Receiver"]>
    composites: {}
  }

  type Invalid_Upload_ReceiverGetPayload<S extends boolean | null | undefined | Invalid_Upload_ReceiverDefaultArgs> = $Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload, S>

  type Invalid_Upload_ReceiverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Invalid_Upload_ReceiverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invalid_Upload_ReceiverCountAggregateInputType | true
    }

  export interface Invalid_Upload_ReceiverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invalid_Upload_Receiver'], meta: { name: 'Invalid_Upload_Receiver' } }
    /**
     * Find zero or one Invalid_Upload_Receiver that matches the filter.
     * @param {Invalid_Upload_ReceiverFindUniqueArgs} args - Arguments to find a Invalid_Upload_Receiver
     * @example
     * // Get one Invalid_Upload_Receiver
     * const invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Invalid_Upload_ReceiverFindUniqueArgs>(args: SelectSubset<T, Invalid_Upload_ReceiverFindUniqueArgs<ExtArgs>>): Prisma__Invalid_Upload_ReceiverClient<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invalid_Upload_Receiver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Invalid_Upload_ReceiverFindUniqueOrThrowArgs} args - Arguments to find a Invalid_Upload_Receiver
     * @example
     * // Get one Invalid_Upload_Receiver
     * const invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Invalid_Upload_ReceiverFindUniqueOrThrowArgs>(args: SelectSubset<T, Invalid_Upload_ReceiverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Invalid_Upload_ReceiverClient<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invalid_Upload_Receiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_Upload_ReceiverFindFirstArgs} args - Arguments to find a Invalid_Upload_Receiver
     * @example
     * // Get one Invalid_Upload_Receiver
     * const invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Invalid_Upload_ReceiverFindFirstArgs>(args?: SelectSubset<T, Invalid_Upload_ReceiverFindFirstArgs<ExtArgs>>): Prisma__Invalid_Upload_ReceiverClient<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invalid_Upload_Receiver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_Upload_ReceiverFindFirstOrThrowArgs} args - Arguments to find a Invalid_Upload_Receiver
     * @example
     * // Get one Invalid_Upload_Receiver
     * const invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Invalid_Upload_ReceiverFindFirstOrThrowArgs>(args?: SelectSubset<T, Invalid_Upload_ReceiverFindFirstOrThrowArgs<ExtArgs>>): Prisma__Invalid_Upload_ReceiverClient<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invalid_Upload_Receivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_Upload_ReceiverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invalid_Upload_Receivers
     * const invalid_Upload_Receivers = await prisma.invalid_Upload_Receiver.findMany()
     * 
     * // Get first 10 Invalid_Upload_Receivers
     * const invalid_Upload_Receivers = await prisma.invalid_Upload_Receiver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invalid_Upload_ReceiverWithIdOnly = await prisma.invalid_Upload_Receiver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Invalid_Upload_ReceiverFindManyArgs>(args?: SelectSubset<T, Invalid_Upload_ReceiverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invalid_Upload_Receiver.
     * @param {Invalid_Upload_ReceiverCreateArgs} args - Arguments to create a Invalid_Upload_Receiver.
     * @example
     * // Create one Invalid_Upload_Receiver
     * const Invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.create({
     *   data: {
     *     // ... data to create a Invalid_Upload_Receiver
     *   }
     * })
     * 
     */
    create<T extends Invalid_Upload_ReceiverCreateArgs>(args: SelectSubset<T, Invalid_Upload_ReceiverCreateArgs<ExtArgs>>): Prisma__Invalid_Upload_ReceiverClient<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invalid_Upload_Receivers.
     * @param {Invalid_Upload_ReceiverCreateManyArgs} args - Arguments to create many Invalid_Upload_Receivers.
     * @example
     * // Create many Invalid_Upload_Receivers
     * const invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Invalid_Upload_ReceiverCreateManyArgs>(args?: SelectSubset<T, Invalid_Upload_ReceiverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invalid_Upload_Receivers and returns the data saved in the database.
     * @param {Invalid_Upload_ReceiverCreateManyAndReturnArgs} args - Arguments to create many Invalid_Upload_Receivers.
     * @example
     * // Create many Invalid_Upload_Receivers
     * const invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invalid_Upload_Receivers and only return the `id`
     * const invalid_Upload_ReceiverWithIdOnly = await prisma.invalid_Upload_Receiver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Invalid_Upload_ReceiverCreateManyAndReturnArgs>(args?: SelectSubset<T, Invalid_Upload_ReceiverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invalid_Upload_Receiver.
     * @param {Invalid_Upload_ReceiverDeleteArgs} args - Arguments to delete one Invalid_Upload_Receiver.
     * @example
     * // Delete one Invalid_Upload_Receiver
     * const Invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.delete({
     *   where: {
     *     // ... filter to delete one Invalid_Upload_Receiver
     *   }
     * })
     * 
     */
    delete<T extends Invalid_Upload_ReceiverDeleteArgs>(args: SelectSubset<T, Invalid_Upload_ReceiverDeleteArgs<ExtArgs>>): Prisma__Invalid_Upload_ReceiverClient<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invalid_Upload_Receiver.
     * @param {Invalid_Upload_ReceiverUpdateArgs} args - Arguments to update one Invalid_Upload_Receiver.
     * @example
     * // Update one Invalid_Upload_Receiver
     * const invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Invalid_Upload_ReceiverUpdateArgs>(args: SelectSubset<T, Invalid_Upload_ReceiverUpdateArgs<ExtArgs>>): Prisma__Invalid_Upload_ReceiverClient<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invalid_Upload_Receivers.
     * @param {Invalid_Upload_ReceiverDeleteManyArgs} args - Arguments to filter Invalid_Upload_Receivers to delete.
     * @example
     * // Delete a few Invalid_Upload_Receivers
     * const { count } = await prisma.invalid_Upload_Receiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Invalid_Upload_ReceiverDeleteManyArgs>(args?: SelectSubset<T, Invalid_Upload_ReceiverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invalid_Upload_Receivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_Upload_ReceiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invalid_Upload_Receivers
     * const invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Invalid_Upload_ReceiverUpdateManyArgs>(args: SelectSubset<T, Invalid_Upload_ReceiverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invalid_Upload_Receivers and returns the data updated in the database.
     * @param {Invalid_Upload_ReceiverUpdateManyAndReturnArgs} args - Arguments to update many Invalid_Upload_Receivers.
     * @example
     * // Update many Invalid_Upload_Receivers
     * const invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invalid_Upload_Receivers and only return the `id`
     * const invalid_Upload_ReceiverWithIdOnly = await prisma.invalid_Upload_Receiver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Invalid_Upload_ReceiverUpdateManyAndReturnArgs>(args: SelectSubset<T, Invalid_Upload_ReceiverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invalid_Upload_Receiver.
     * @param {Invalid_Upload_ReceiverUpsertArgs} args - Arguments to update or create a Invalid_Upload_Receiver.
     * @example
     * // Update or create a Invalid_Upload_Receiver
     * const invalid_Upload_Receiver = await prisma.invalid_Upload_Receiver.upsert({
     *   create: {
     *     // ... data to create a Invalid_Upload_Receiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invalid_Upload_Receiver we want to update
     *   }
     * })
     */
    upsert<T extends Invalid_Upload_ReceiverUpsertArgs>(args: SelectSubset<T, Invalid_Upload_ReceiverUpsertArgs<ExtArgs>>): Prisma__Invalid_Upload_ReceiverClient<$Result.GetResult<Prisma.$Invalid_Upload_ReceiverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invalid_Upload_Receivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_Upload_ReceiverCountArgs} args - Arguments to filter Invalid_Upload_Receivers to count.
     * @example
     * // Count the number of Invalid_Upload_Receivers
     * const count = await prisma.invalid_Upload_Receiver.count({
     *   where: {
     *     // ... the filter for the Invalid_Upload_Receivers we want to count
     *   }
     * })
    **/
    count<T extends Invalid_Upload_ReceiverCountArgs>(
      args?: Subset<T, Invalid_Upload_ReceiverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invalid_Upload_ReceiverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invalid_Upload_Receiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_Upload_ReceiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Invalid_Upload_ReceiverAggregateArgs>(args: Subset<T, Invalid_Upload_ReceiverAggregateArgs>): Prisma.PrismaPromise<GetInvalid_Upload_ReceiverAggregateType<T>>

    /**
     * Group by Invalid_Upload_Receiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_Upload_ReceiverGroupByArgs} args - Group by arguments.
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
      T extends Invalid_Upload_ReceiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Invalid_Upload_ReceiverGroupByArgs['orderBy'] }
        : { orderBy?: Invalid_Upload_ReceiverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Invalid_Upload_ReceiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvalid_Upload_ReceiverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invalid_Upload_Receiver model
   */
  readonly fields: Invalid_Upload_ReceiverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invalid_Upload_Receiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Invalid_Upload_ReceiverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends FilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilesDefaultArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invalid_Upload_Receiver model
   */
  interface Invalid_Upload_ReceiverFieldRefs {
    readonly id: FieldRef<"Invalid_Upload_Receiver", 'String'>
    readonly fileId: FieldRef<"Invalid_Upload_Receiver", 'String'>
    readonly firstName: FieldRef<"Invalid_Upload_Receiver", 'String'>
    readonly lastName: FieldRef<"Invalid_Upload_Receiver", 'String'>
    readonly province: FieldRef<"Invalid_Upload_Receiver", 'String'>
    readonly district: FieldRef<"Invalid_Upload_Receiver", 'String'>
    readonly municipality: FieldRef<"Invalid_Upload_Receiver", 'String'>
    readonly phoneNumber: FieldRef<"Invalid_Upload_Receiver", 'String'>
    readonly isDeleted: FieldRef<"Invalid_Upload_Receiver", 'Boolean'>
    readonly createdAt: FieldRef<"Invalid_Upload_Receiver", 'DateTime'>
    readonly updatedAt: FieldRef<"Invalid_Upload_Receiver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invalid_Upload_Receiver findUnique
   */
  export type Invalid_Upload_ReceiverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Invalid_Upload_Receiver to fetch.
     */
    where: Invalid_Upload_ReceiverWhereUniqueInput
  }

  /**
   * Invalid_Upload_Receiver findUniqueOrThrow
   */
  export type Invalid_Upload_ReceiverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Invalid_Upload_Receiver to fetch.
     */
    where: Invalid_Upload_ReceiverWhereUniqueInput
  }

  /**
   * Invalid_Upload_Receiver findFirst
   */
  export type Invalid_Upload_ReceiverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Invalid_Upload_Receiver to fetch.
     */
    where?: Invalid_Upload_ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invalid_Upload_Receivers to fetch.
     */
    orderBy?: Invalid_Upload_ReceiverOrderByWithRelationInput | Invalid_Upload_ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invalid_Upload_Receivers.
     */
    cursor?: Invalid_Upload_ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invalid_Upload_Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invalid_Upload_Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invalid_Upload_Receivers.
     */
    distinct?: Invalid_Upload_ReceiverScalarFieldEnum | Invalid_Upload_ReceiverScalarFieldEnum[]
  }

  /**
   * Invalid_Upload_Receiver findFirstOrThrow
   */
  export type Invalid_Upload_ReceiverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Invalid_Upload_Receiver to fetch.
     */
    where?: Invalid_Upload_ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invalid_Upload_Receivers to fetch.
     */
    orderBy?: Invalid_Upload_ReceiverOrderByWithRelationInput | Invalid_Upload_ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invalid_Upload_Receivers.
     */
    cursor?: Invalid_Upload_ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invalid_Upload_Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invalid_Upload_Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invalid_Upload_Receivers.
     */
    distinct?: Invalid_Upload_ReceiverScalarFieldEnum | Invalid_Upload_ReceiverScalarFieldEnum[]
  }

  /**
   * Invalid_Upload_Receiver findMany
   */
  export type Invalid_Upload_ReceiverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Invalid_Upload_Receivers to fetch.
     */
    where?: Invalid_Upload_ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invalid_Upload_Receivers to fetch.
     */
    orderBy?: Invalid_Upload_ReceiverOrderByWithRelationInput | Invalid_Upload_ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invalid_Upload_Receivers.
     */
    cursor?: Invalid_Upload_ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invalid_Upload_Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invalid_Upload_Receivers.
     */
    skip?: number
    distinct?: Invalid_Upload_ReceiverScalarFieldEnum | Invalid_Upload_ReceiverScalarFieldEnum[]
  }

  /**
   * Invalid_Upload_Receiver create
   */
  export type Invalid_Upload_ReceiverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverInclude<ExtArgs> | null
    /**
     * The data needed to create a Invalid_Upload_Receiver.
     */
    data: XOR<Invalid_Upload_ReceiverCreateInput, Invalid_Upload_ReceiverUncheckedCreateInput>
  }

  /**
   * Invalid_Upload_Receiver createMany
   */
  export type Invalid_Upload_ReceiverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invalid_Upload_Receivers.
     */
    data: Invalid_Upload_ReceiverCreateManyInput | Invalid_Upload_ReceiverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invalid_Upload_Receiver createManyAndReturn
   */
  export type Invalid_Upload_ReceiverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * The data used to create many Invalid_Upload_Receivers.
     */
    data: Invalid_Upload_ReceiverCreateManyInput | Invalid_Upload_ReceiverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invalid_Upload_Receiver update
   */
  export type Invalid_Upload_ReceiverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverInclude<ExtArgs> | null
    /**
     * The data needed to update a Invalid_Upload_Receiver.
     */
    data: XOR<Invalid_Upload_ReceiverUpdateInput, Invalid_Upload_ReceiverUncheckedUpdateInput>
    /**
     * Choose, which Invalid_Upload_Receiver to update.
     */
    where: Invalid_Upload_ReceiverWhereUniqueInput
  }

  /**
   * Invalid_Upload_Receiver updateMany
   */
  export type Invalid_Upload_ReceiverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invalid_Upload_Receivers.
     */
    data: XOR<Invalid_Upload_ReceiverUpdateManyMutationInput, Invalid_Upload_ReceiverUncheckedUpdateManyInput>
    /**
     * Filter which Invalid_Upload_Receivers to update
     */
    where?: Invalid_Upload_ReceiverWhereInput
    /**
     * Limit how many Invalid_Upload_Receivers to update.
     */
    limit?: number
  }

  /**
   * Invalid_Upload_Receiver updateManyAndReturn
   */
  export type Invalid_Upload_ReceiverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * The data used to update Invalid_Upload_Receivers.
     */
    data: XOR<Invalid_Upload_ReceiverUpdateManyMutationInput, Invalid_Upload_ReceiverUncheckedUpdateManyInput>
    /**
     * Filter which Invalid_Upload_Receivers to update
     */
    where?: Invalid_Upload_ReceiverWhereInput
    /**
     * Limit how many Invalid_Upload_Receivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invalid_Upload_Receiver upsert
   */
  export type Invalid_Upload_ReceiverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverInclude<ExtArgs> | null
    /**
     * The filter to search for the Invalid_Upload_Receiver to update in case it exists.
     */
    where: Invalid_Upload_ReceiverWhereUniqueInput
    /**
     * In case the Invalid_Upload_Receiver found by the `where` argument doesn't exist, create a new Invalid_Upload_Receiver with this data.
     */
    create: XOR<Invalid_Upload_ReceiverCreateInput, Invalid_Upload_ReceiverUncheckedCreateInput>
    /**
     * In case the Invalid_Upload_Receiver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Invalid_Upload_ReceiverUpdateInput, Invalid_Upload_ReceiverUncheckedUpdateInput>
  }

  /**
   * Invalid_Upload_Receiver delete
   */
  export type Invalid_Upload_ReceiverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverInclude<ExtArgs> | null
    /**
     * Filter which Invalid_Upload_Receiver to delete.
     */
    where: Invalid_Upload_ReceiverWhereUniqueInput
  }

  /**
   * Invalid_Upload_Receiver deleteMany
   */
  export type Invalid_Upload_ReceiverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invalid_Upload_Receivers to delete
     */
    where?: Invalid_Upload_ReceiverWhereInput
    /**
     * Limit how many Invalid_Upload_Receivers to delete.
     */
    limit?: number
  }

  /**
   * Invalid_Upload_Receiver without action
   */
  export type Invalid_Upload_ReceiverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_Upload_Receiver
     */
    select?: Invalid_Upload_ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_Upload_Receiver
     */
    omit?: Invalid_Upload_ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_Upload_ReceiverInclude<ExtArgs> | null
  }


  /**
   * Model Receiver
   */

  export type AggregateReceiver = {
    _count: ReceiverCountAggregateOutputType | null
    _min: ReceiverMinAggregateOutputType | null
    _max: ReceiverMaxAggregateOutputType | null
  }

  export type ReceiverMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    receiverMessageId: string | null
    userId: string | null
  }

  export type ReceiverMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    receiverMessageId: string | null
    userId: string | null
  }

  export type ReceiverCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    province: number
    district: number
    municipality: number
    phoneNumber: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    receiverMessageId: number
    userId: number
    _all: number
  }


  export type ReceiverMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    receiverMessageId?: true
    userId?: true
  }

  export type ReceiverMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    receiverMessageId?: true
    userId?: true
  }

  export type ReceiverCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    receiverMessageId?: true
    userId?: true
    _all?: true
  }

  export type ReceiverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receiver to aggregate.
     */
    where?: ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivers to fetch.
     */
    orderBy?: ReceiverOrderByWithRelationInput | ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receivers
    **/
    _count?: true | ReceiverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiverMaxAggregateInputType
  }

  export type GetReceiverAggregateType<T extends ReceiverAggregateArgs> = {
        [P in keyof T & keyof AggregateReceiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceiver[P]>
      : GetScalarType<T[P], AggregateReceiver[P]>
  }




  export type ReceiverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiverWhereInput
    orderBy?: ReceiverOrderByWithAggregationInput | ReceiverOrderByWithAggregationInput[]
    by: ReceiverScalarFieldEnum[] | ReceiverScalarFieldEnum
    having?: ReceiverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiverCountAggregateInputType | true
    _min?: ReceiverMinAggregateInputType
    _max?: ReceiverMaxAggregateInputType
  }

  export type ReceiverGroupByOutputType = {
    id: string
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    receiverMessageId: string | null
    userId: string
    _count: ReceiverCountAggregateOutputType | null
    _min: ReceiverMinAggregateOutputType | null
    _max: ReceiverMaxAggregateOutputType | null
  }

  type GetReceiverGroupByPayload<T extends ReceiverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiverGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiverGroupByOutputType[P]>
        }
      >
    >


  export type ReceiverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiverMessageId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | Receiver$receiverMessageArgs<ExtArgs>
  }, ExtArgs["result"]["receiver"]>

  export type ReceiverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiverMessageId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | Receiver$receiverMessageArgs<ExtArgs>
  }, ExtArgs["result"]["receiver"]>

  export type ReceiverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiverMessageId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | Receiver$receiverMessageArgs<ExtArgs>
  }, ExtArgs["result"]["receiver"]>

  export type ReceiverSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiverMessageId?: boolean
    userId?: boolean
  }

  export type ReceiverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "province" | "district" | "municipality" | "phoneNumber" | "isDeleted" | "createdAt" | "updatedAt" | "receiverMessageId" | "userId", ExtArgs["result"]["receiver"]>
  export type ReceiverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | Receiver$receiverMessageArgs<ExtArgs>
  }
  export type ReceiverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | Receiver$receiverMessageArgs<ExtArgs>
  }
  export type ReceiverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | Receiver$receiverMessageArgs<ExtArgs>
  }

  export type $ReceiverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receiver"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      receiverMessage: Prisma.$Receiver_MessagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string | null
      lastName: string | null
      province: string | null
      district: string | null
      municipality: string | null
      phoneNumber: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      receiverMessageId: string | null
      userId: string
    }, ExtArgs["result"]["receiver"]>
    composites: {}
  }

  type ReceiverGetPayload<S extends boolean | null | undefined | ReceiverDefaultArgs> = $Result.GetResult<Prisma.$ReceiverPayload, S>

  type ReceiverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceiverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiverCountAggregateInputType | true
    }

  export interface ReceiverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receiver'], meta: { name: 'Receiver' } }
    /**
     * Find zero or one Receiver that matches the filter.
     * @param {ReceiverFindUniqueArgs} args - Arguments to find a Receiver
     * @example
     * // Get one Receiver
     * const receiver = await prisma.receiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceiverFindUniqueArgs>(args: SelectSubset<T, ReceiverFindUniqueArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receiver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceiverFindUniqueOrThrowArgs} args - Arguments to find a Receiver
     * @example
     * // Get one Receiver
     * const receiver = await prisma.receiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceiverFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceiverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverFindFirstArgs} args - Arguments to find a Receiver
     * @example
     * // Get one Receiver
     * const receiver = await prisma.receiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceiverFindFirstArgs>(args?: SelectSubset<T, ReceiverFindFirstArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receiver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverFindFirstOrThrowArgs} args - Arguments to find a Receiver
     * @example
     * // Get one Receiver
     * const receiver = await prisma.receiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceiverFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceiverFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receivers
     * const receivers = await prisma.receiver.findMany()
     * 
     * // Get first 10 Receivers
     * const receivers = await prisma.receiver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiverWithIdOnly = await prisma.receiver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceiverFindManyArgs>(args?: SelectSubset<T, ReceiverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receiver.
     * @param {ReceiverCreateArgs} args - Arguments to create a Receiver.
     * @example
     * // Create one Receiver
     * const Receiver = await prisma.receiver.create({
     *   data: {
     *     // ... data to create a Receiver
     *   }
     * })
     * 
     */
    create<T extends ReceiverCreateArgs>(args: SelectSubset<T, ReceiverCreateArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receivers.
     * @param {ReceiverCreateManyArgs} args - Arguments to create many Receivers.
     * @example
     * // Create many Receivers
     * const receiver = await prisma.receiver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceiverCreateManyArgs>(args?: SelectSubset<T, ReceiverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receivers and returns the data saved in the database.
     * @param {ReceiverCreateManyAndReturnArgs} args - Arguments to create many Receivers.
     * @example
     * // Create many Receivers
     * const receiver = await prisma.receiver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receivers and only return the `id`
     * const receiverWithIdOnly = await prisma.receiver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceiverCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceiverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receiver.
     * @param {ReceiverDeleteArgs} args - Arguments to delete one Receiver.
     * @example
     * // Delete one Receiver
     * const Receiver = await prisma.receiver.delete({
     *   where: {
     *     // ... filter to delete one Receiver
     *   }
     * })
     * 
     */
    delete<T extends ReceiverDeleteArgs>(args: SelectSubset<T, ReceiverDeleteArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receiver.
     * @param {ReceiverUpdateArgs} args - Arguments to update one Receiver.
     * @example
     * // Update one Receiver
     * const receiver = await prisma.receiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceiverUpdateArgs>(args: SelectSubset<T, ReceiverUpdateArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receivers.
     * @param {ReceiverDeleteManyArgs} args - Arguments to filter Receivers to delete.
     * @example
     * // Delete a few Receivers
     * const { count } = await prisma.receiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceiverDeleteManyArgs>(args?: SelectSubset<T, ReceiverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receivers
     * const receiver = await prisma.receiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceiverUpdateManyArgs>(args: SelectSubset<T, ReceiverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receivers and returns the data updated in the database.
     * @param {ReceiverUpdateManyAndReturnArgs} args - Arguments to update many Receivers.
     * @example
     * // Update many Receivers
     * const receiver = await prisma.receiver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receivers and only return the `id`
     * const receiverWithIdOnly = await prisma.receiver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReceiverUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceiverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receiver.
     * @param {ReceiverUpsertArgs} args - Arguments to update or create a Receiver.
     * @example
     * // Update or create a Receiver
     * const receiver = await prisma.receiver.upsert({
     *   create: {
     *     // ... data to create a Receiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receiver we want to update
     *   }
     * })
     */
    upsert<T extends ReceiverUpsertArgs>(args: SelectSubset<T, ReceiverUpsertArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverCountArgs} args - Arguments to filter Receivers to count.
     * @example
     * // Count the number of Receivers
     * const count = await prisma.receiver.count({
     *   where: {
     *     // ... the filter for the Receivers we want to count
     *   }
     * })
    **/
    count<T extends ReceiverCountArgs>(
      args?: Subset<T, ReceiverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceiverAggregateArgs>(args: Subset<T, ReceiverAggregateArgs>): Prisma.PrismaPromise<GetReceiverAggregateType<T>>

    /**
     * Group by Receiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverGroupByArgs} args - Group by arguments.
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
      T extends ReceiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceiverGroupByArgs['orderBy'] }
        : { orderBy?: ReceiverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receiver model
   */
  readonly fields: ReceiverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceiverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiverMessage<T extends Receiver$receiverMessageArgs<ExtArgs> = {}>(args?: Subset<T, Receiver$receiverMessageArgs<ExtArgs>>): Prisma__Receiver_MessageClient<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Receiver model
   */
  interface ReceiverFieldRefs {
    readonly id: FieldRef<"Receiver", 'String'>
    readonly firstName: FieldRef<"Receiver", 'String'>
    readonly lastName: FieldRef<"Receiver", 'String'>
    readonly province: FieldRef<"Receiver", 'String'>
    readonly district: FieldRef<"Receiver", 'String'>
    readonly municipality: FieldRef<"Receiver", 'String'>
    readonly phoneNumber: FieldRef<"Receiver", 'String'>
    readonly isDeleted: FieldRef<"Receiver", 'Boolean'>
    readonly createdAt: FieldRef<"Receiver", 'DateTime'>
    readonly updatedAt: FieldRef<"Receiver", 'DateTime'>
    readonly receiverMessageId: FieldRef<"Receiver", 'String'>
    readonly userId: FieldRef<"Receiver", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Receiver findUnique
   */
  export type ReceiverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Receiver to fetch.
     */
    where: ReceiverWhereUniqueInput
  }

  /**
   * Receiver findUniqueOrThrow
   */
  export type ReceiverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Receiver to fetch.
     */
    where: ReceiverWhereUniqueInput
  }

  /**
   * Receiver findFirst
   */
  export type ReceiverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Receiver to fetch.
     */
    where?: ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivers to fetch.
     */
    orderBy?: ReceiverOrderByWithRelationInput | ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receivers.
     */
    cursor?: ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receivers.
     */
    distinct?: ReceiverScalarFieldEnum | ReceiverScalarFieldEnum[]
  }

  /**
   * Receiver findFirstOrThrow
   */
  export type ReceiverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Receiver to fetch.
     */
    where?: ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivers to fetch.
     */
    orderBy?: ReceiverOrderByWithRelationInput | ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receivers.
     */
    cursor?: ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receivers.
     */
    distinct?: ReceiverScalarFieldEnum | ReceiverScalarFieldEnum[]
  }

  /**
   * Receiver findMany
   */
  export type ReceiverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Receivers to fetch.
     */
    where?: ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivers to fetch.
     */
    orderBy?: ReceiverOrderByWithRelationInput | ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receivers.
     */
    cursor?: ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivers.
     */
    skip?: number
    distinct?: ReceiverScalarFieldEnum | ReceiverScalarFieldEnum[]
  }

  /**
   * Receiver create
   */
  export type ReceiverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * The data needed to create a Receiver.
     */
    data: XOR<ReceiverCreateInput, ReceiverUncheckedCreateInput>
  }

  /**
   * Receiver createMany
   */
  export type ReceiverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receivers.
     */
    data: ReceiverCreateManyInput | ReceiverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receiver createManyAndReturn
   */
  export type ReceiverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * The data used to create many Receivers.
     */
    data: ReceiverCreateManyInput | ReceiverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receiver update
   */
  export type ReceiverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * The data needed to update a Receiver.
     */
    data: XOR<ReceiverUpdateInput, ReceiverUncheckedUpdateInput>
    /**
     * Choose, which Receiver to update.
     */
    where: ReceiverWhereUniqueInput
  }

  /**
   * Receiver updateMany
   */
  export type ReceiverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receivers.
     */
    data: XOR<ReceiverUpdateManyMutationInput, ReceiverUncheckedUpdateManyInput>
    /**
     * Filter which Receivers to update
     */
    where?: ReceiverWhereInput
    /**
     * Limit how many Receivers to update.
     */
    limit?: number
  }

  /**
   * Receiver updateManyAndReturn
   */
  export type ReceiverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * The data used to update Receivers.
     */
    data: XOR<ReceiverUpdateManyMutationInput, ReceiverUncheckedUpdateManyInput>
    /**
     * Filter which Receivers to update
     */
    where?: ReceiverWhereInput
    /**
     * Limit how many Receivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receiver upsert
   */
  export type ReceiverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * The filter to search for the Receiver to update in case it exists.
     */
    where: ReceiverWhereUniqueInput
    /**
     * In case the Receiver found by the `where` argument doesn't exist, create a new Receiver with this data.
     */
    create: XOR<ReceiverCreateInput, ReceiverUncheckedCreateInput>
    /**
     * In case the Receiver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceiverUpdateInput, ReceiverUncheckedUpdateInput>
  }

  /**
   * Receiver delete
   */
  export type ReceiverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter which Receiver to delete.
     */
    where: ReceiverWhereUniqueInput
  }

  /**
   * Receiver deleteMany
   */
  export type ReceiverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receivers to delete
     */
    where?: ReceiverWhereInput
    /**
     * Limit how many Receivers to delete.
     */
    limit?: number
  }

  /**
   * Receiver.receiverMessage
   */
  export type Receiver$receiverMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Receiver_MessageInclude<ExtArgs> | null
    where?: Receiver_MessageWhereInput
  }

  /**
   * Receiver without action
   */
  export type ReceiverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
  }


  /**
   * Model Receiver_Message
   */

  export type AggregateReceiver_Message = {
    _count: Receiver_MessageCountAggregateOutputType | null
    _min: Receiver_MessageMinAggregateOutputType | null
    _max: Receiver_MessageMaxAggregateOutputType | null
  }

  export type Receiver_MessageMinAggregateOutputType = {
    id: string | null
    textMessage: string | null
    status: $Enums.DeliveryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Receiver_MessageMaxAggregateOutputType = {
    id: string | null
    textMessage: string | null
    status: $Enums.DeliveryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Receiver_MessageCountAggregateOutputType = {
    id: number
    textMessage: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Receiver_MessageMinAggregateInputType = {
    id?: true
    textMessage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Receiver_MessageMaxAggregateInputType = {
    id?: true
    textMessage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Receiver_MessageCountAggregateInputType = {
    id?: true
    textMessage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Receiver_MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receiver_Message to aggregate.
     */
    where?: Receiver_MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receiver_Messages to fetch.
     */
    orderBy?: Receiver_MessageOrderByWithRelationInput | Receiver_MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Receiver_MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receiver_Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receiver_Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receiver_Messages
    **/
    _count?: true | Receiver_MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Receiver_MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Receiver_MessageMaxAggregateInputType
  }

  export type GetReceiver_MessageAggregateType<T extends Receiver_MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateReceiver_Message]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceiver_Message[P]>
      : GetScalarType<T[P], AggregateReceiver_Message[P]>
  }




  export type Receiver_MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Receiver_MessageWhereInput
    orderBy?: Receiver_MessageOrderByWithAggregationInput | Receiver_MessageOrderByWithAggregationInput[]
    by: Receiver_MessageScalarFieldEnum[] | Receiver_MessageScalarFieldEnum
    having?: Receiver_MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Receiver_MessageCountAggregateInputType | true
    _min?: Receiver_MessageMinAggregateInputType
    _max?: Receiver_MessageMaxAggregateInputType
  }

  export type Receiver_MessageGroupByOutputType = {
    id: string
    textMessage: string
    status: $Enums.DeliveryStatus
    createdAt: Date
    updatedAt: Date
    _count: Receiver_MessageCountAggregateOutputType | null
    _min: Receiver_MessageMinAggregateOutputType | null
    _max: Receiver_MessageMaxAggregateOutputType | null
  }

  type GetReceiver_MessageGroupByPayload<T extends Receiver_MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Receiver_MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Receiver_MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Receiver_MessageGroupByOutputType[P]>
            : GetScalarType<T[P], Receiver_MessageGroupByOutputType[P]>
        }
      >
    >


  export type Receiver_MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    textMessage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiver?: boolean | Receiver_Message$receiverArgs<ExtArgs>
    _count?: boolean | Receiver_MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiver_Message"]>

  export type Receiver_MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    textMessage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["receiver_Message"]>

  export type Receiver_MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    textMessage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["receiver_Message"]>

  export type Receiver_MessageSelectScalar = {
    id?: boolean
    textMessage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Receiver_MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "textMessage" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["receiver_Message"]>
  export type Receiver_MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | Receiver_Message$receiverArgs<ExtArgs>
    _count?: boolean | Receiver_MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Receiver_MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Receiver_MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Receiver_MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receiver_Message"
    objects: {
      receiver: Prisma.$ReceiverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      textMessage: string
      status: $Enums.DeliveryStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["receiver_Message"]>
    composites: {}
  }

  type Receiver_MessageGetPayload<S extends boolean | null | undefined | Receiver_MessageDefaultArgs> = $Result.GetResult<Prisma.$Receiver_MessagePayload, S>

  type Receiver_MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Receiver_MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Receiver_MessageCountAggregateInputType | true
    }

  export interface Receiver_MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receiver_Message'], meta: { name: 'Receiver_Message' } }
    /**
     * Find zero or one Receiver_Message that matches the filter.
     * @param {Receiver_MessageFindUniqueArgs} args - Arguments to find a Receiver_Message
     * @example
     * // Get one Receiver_Message
     * const receiver_Message = await prisma.receiver_Message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Receiver_MessageFindUniqueArgs>(args: SelectSubset<T, Receiver_MessageFindUniqueArgs<ExtArgs>>): Prisma__Receiver_MessageClient<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receiver_Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Receiver_MessageFindUniqueOrThrowArgs} args - Arguments to find a Receiver_Message
     * @example
     * // Get one Receiver_Message
     * const receiver_Message = await prisma.receiver_Message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Receiver_MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, Receiver_MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Receiver_MessageClient<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receiver_Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Receiver_MessageFindFirstArgs} args - Arguments to find a Receiver_Message
     * @example
     * // Get one Receiver_Message
     * const receiver_Message = await prisma.receiver_Message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Receiver_MessageFindFirstArgs>(args?: SelectSubset<T, Receiver_MessageFindFirstArgs<ExtArgs>>): Prisma__Receiver_MessageClient<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receiver_Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Receiver_MessageFindFirstOrThrowArgs} args - Arguments to find a Receiver_Message
     * @example
     * // Get one Receiver_Message
     * const receiver_Message = await prisma.receiver_Message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Receiver_MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, Receiver_MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__Receiver_MessageClient<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receiver_Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Receiver_MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receiver_Messages
     * const receiver_Messages = await prisma.receiver_Message.findMany()
     * 
     * // Get first 10 Receiver_Messages
     * const receiver_Messages = await prisma.receiver_Message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiver_MessageWithIdOnly = await prisma.receiver_Message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Receiver_MessageFindManyArgs>(args?: SelectSubset<T, Receiver_MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receiver_Message.
     * @param {Receiver_MessageCreateArgs} args - Arguments to create a Receiver_Message.
     * @example
     * // Create one Receiver_Message
     * const Receiver_Message = await prisma.receiver_Message.create({
     *   data: {
     *     // ... data to create a Receiver_Message
     *   }
     * })
     * 
     */
    create<T extends Receiver_MessageCreateArgs>(args: SelectSubset<T, Receiver_MessageCreateArgs<ExtArgs>>): Prisma__Receiver_MessageClient<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receiver_Messages.
     * @param {Receiver_MessageCreateManyArgs} args - Arguments to create many Receiver_Messages.
     * @example
     * // Create many Receiver_Messages
     * const receiver_Message = await prisma.receiver_Message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Receiver_MessageCreateManyArgs>(args?: SelectSubset<T, Receiver_MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receiver_Messages and returns the data saved in the database.
     * @param {Receiver_MessageCreateManyAndReturnArgs} args - Arguments to create many Receiver_Messages.
     * @example
     * // Create many Receiver_Messages
     * const receiver_Message = await prisma.receiver_Message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receiver_Messages and only return the `id`
     * const receiver_MessageWithIdOnly = await prisma.receiver_Message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Receiver_MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, Receiver_MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receiver_Message.
     * @param {Receiver_MessageDeleteArgs} args - Arguments to delete one Receiver_Message.
     * @example
     * // Delete one Receiver_Message
     * const Receiver_Message = await prisma.receiver_Message.delete({
     *   where: {
     *     // ... filter to delete one Receiver_Message
     *   }
     * })
     * 
     */
    delete<T extends Receiver_MessageDeleteArgs>(args: SelectSubset<T, Receiver_MessageDeleteArgs<ExtArgs>>): Prisma__Receiver_MessageClient<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receiver_Message.
     * @param {Receiver_MessageUpdateArgs} args - Arguments to update one Receiver_Message.
     * @example
     * // Update one Receiver_Message
     * const receiver_Message = await prisma.receiver_Message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Receiver_MessageUpdateArgs>(args: SelectSubset<T, Receiver_MessageUpdateArgs<ExtArgs>>): Prisma__Receiver_MessageClient<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receiver_Messages.
     * @param {Receiver_MessageDeleteManyArgs} args - Arguments to filter Receiver_Messages to delete.
     * @example
     * // Delete a few Receiver_Messages
     * const { count } = await prisma.receiver_Message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Receiver_MessageDeleteManyArgs>(args?: SelectSubset<T, Receiver_MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receiver_Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Receiver_MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receiver_Messages
     * const receiver_Message = await prisma.receiver_Message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Receiver_MessageUpdateManyArgs>(args: SelectSubset<T, Receiver_MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receiver_Messages and returns the data updated in the database.
     * @param {Receiver_MessageUpdateManyAndReturnArgs} args - Arguments to update many Receiver_Messages.
     * @example
     * // Update many Receiver_Messages
     * const receiver_Message = await prisma.receiver_Message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receiver_Messages and only return the `id`
     * const receiver_MessageWithIdOnly = await prisma.receiver_Message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Receiver_MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, Receiver_MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receiver_Message.
     * @param {Receiver_MessageUpsertArgs} args - Arguments to update or create a Receiver_Message.
     * @example
     * // Update or create a Receiver_Message
     * const receiver_Message = await prisma.receiver_Message.upsert({
     *   create: {
     *     // ... data to create a Receiver_Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receiver_Message we want to update
     *   }
     * })
     */
    upsert<T extends Receiver_MessageUpsertArgs>(args: SelectSubset<T, Receiver_MessageUpsertArgs<ExtArgs>>): Prisma__Receiver_MessageClient<$Result.GetResult<Prisma.$Receiver_MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receiver_Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Receiver_MessageCountArgs} args - Arguments to filter Receiver_Messages to count.
     * @example
     * // Count the number of Receiver_Messages
     * const count = await prisma.receiver_Message.count({
     *   where: {
     *     // ... the filter for the Receiver_Messages we want to count
     *   }
     * })
    **/
    count<T extends Receiver_MessageCountArgs>(
      args?: Subset<T, Receiver_MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Receiver_MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receiver_Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Receiver_MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Receiver_MessageAggregateArgs>(args: Subset<T, Receiver_MessageAggregateArgs>): Prisma.PrismaPromise<GetReceiver_MessageAggregateType<T>>

    /**
     * Group by Receiver_Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Receiver_MessageGroupByArgs} args - Group by arguments.
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
      T extends Receiver_MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Receiver_MessageGroupByArgs['orderBy'] }
        : { orderBy?: Receiver_MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Receiver_MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiver_MessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receiver_Message model
   */
  readonly fields: Receiver_MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receiver_Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Receiver_MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receiver<T extends Receiver_Message$receiverArgs<ExtArgs> = {}>(args?: Subset<T, Receiver_Message$receiverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Receiver_Message model
   */
  interface Receiver_MessageFieldRefs {
    readonly id: FieldRef<"Receiver_Message", 'String'>
    readonly textMessage: FieldRef<"Receiver_Message", 'String'>
    readonly status: FieldRef<"Receiver_Message", 'DeliveryStatus'>
    readonly createdAt: FieldRef<"Receiver_Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Receiver_Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Receiver_Message findUnique
   */
  export type Receiver_MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Receiver_MessageInclude<ExtArgs> | null
    /**
     * Filter, which Receiver_Message to fetch.
     */
    where: Receiver_MessageWhereUniqueInput
  }

  /**
   * Receiver_Message findUniqueOrThrow
   */
  export type Receiver_MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Receiver_MessageInclude<ExtArgs> | null
    /**
     * Filter, which Receiver_Message to fetch.
     */
    where: Receiver_MessageWhereUniqueInput
  }

  /**
   * Receiver_Message findFirst
   */
  export type Receiver_MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Receiver_MessageInclude<ExtArgs> | null
    /**
     * Filter, which Receiver_Message to fetch.
     */
    where?: Receiver_MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receiver_Messages to fetch.
     */
    orderBy?: Receiver_MessageOrderByWithRelationInput | Receiver_MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receiver_Messages.
     */
    cursor?: Receiver_MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receiver_Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receiver_Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receiver_Messages.
     */
    distinct?: Receiver_MessageScalarFieldEnum | Receiver_MessageScalarFieldEnum[]
  }

  /**
   * Receiver_Message findFirstOrThrow
   */
  export type Receiver_MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Receiver_MessageInclude<ExtArgs> | null
    /**
     * Filter, which Receiver_Message to fetch.
     */
    where?: Receiver_MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receiver_Messages to fetch.
     */
    orderBy?: Receiver_MessageOrderByWithRelationInput | Receiver_MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receiver_Messages.
     */
    cursor?: Receiver_MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receiver_Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receiver_Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receiver_Messages.
     */
    distinct?: Receiver_MessageScalarFieldEnum | Receiver_MessageScalarFieldEnum[]
  }

  /**
   * Receiver_Message findMany
   */
  export type Receiver_MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Receiver_MessageInclude<ExtArgs> | null
    /**
     * Filter, which Receiver_Messages to fetch.
     */
    where?: Receiver_MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receiver_Messages to fetch.
     */
    orderBy?: Receiver_MessageOrderByWithRelationInput | Receiver_MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receiver_Messages.
     */
    cursor?: Receiver_MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receiver_Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receiver_Messages.
     */
    skip?: number
    distinct?: Receiver_MessageScalarFieldEnum | Receiver_MessageScalarFieldEnum[]
  }

  /**
   * Receiver_Message create
   */
  export type Receiver_MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Receiver_MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Receiver_Message.
     */
    data: XOR<Receiver_MessageCreateInput, Receiver_MessageUncheckedCreateInput>
  }

  /**
   * Receiver_Message createMany
   */
  export type Receiver_MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receiver_Messages.
     */
    data: Receiver_MessageCreateManyInput | Receiver_MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receiver_Message createManyAndReturn
   */
  export type Receiver_MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Receiver_Messages.
     */
    data: Receiver_MessageCreateManyInput | Receiver_MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receiver_Message update
   */
  export type Receiver_MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Receiver_MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Receiver_Message.
     */
    data: XOR<Receiver_MessageUpdateInput, Receiver_MessageUncheckedUpdateInput>
    /**
     * Choose, which Receiver_Message to update.
     */
    where: Receiver_MessageWhereUniqueInput
  }

  /**
   * Receiver_Message updateMany
   */
  export type Receiver_MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receiver_Messages.
     */
    data: XOR<Receiver_MessageUpdateManyMutationInput, Receiver_MessageUncheckedUpdateManyInput>
    /**
     * Filter which Receiver_Messages to update
     */
    where?: Receiver_MessageWhereInput
    /**
     * Limit how many Receiver_Messages to update.
     */
    limit?: number
  }

  /**
   * Receiver_Message updateManyAndReturn
   */
  export type Receiver_MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * The data used to update Receiver_Messages.
     */
    data: XOR<Receiver_MessageUpdateManyMutationInput, Receiver_MessageUncheckedUpdateManyInput>
    /**
     * Filter which Receiver_Messages to update
     */
    where?: Receiver_MessageWhereInput
    /**
     * Limit how many Receiver_Messages to update.
     */
    limit?: number
  }

  /**
   * Receiver_Message upsert
   */
  export type Receiver_MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Receiver_MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Receiver_Message to update in case it exists.
     */
    where: Receiver_MessageWhereUniqueInput
    /**
     * In case the Receiver_Message found by the `where` argument doesn't exist, create a new Receiver_Message with this data.
     */
    create: XOR<Receiver_MessageCreateInput, Receiver_MessageUncheckedCreateInput>
    /**
     * In case the Receiver_Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Receiver_MessageUpdateInput, Receiver_MessageUncheckedUpdateInput>
  }

  /**
   * Receiver_Message delete
   */
  export type Receiver_MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Receiver_MessageInclude<ExtArgs> | null
    /**
     * Filter which Receiver_Message to delete.
     */
    where: Receiver_MessageWhereUniqueInput
  }

  /**
   * Receiver_Message deleteMany
   */
  export type Receiver_MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receiver_Messages to delete
     */
    where?: Receiver_MessageWhereInput
    /**
     * Limit how many Receiver_Messages to delete.
     */
    limit?: number
  }

  /**
   * Receiver_Message.receiver
   */
  export type Receiver_Message$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    where?: ReceiverWhereInput
    orderBy?: ReceiverOrderByWithRelationInput | ReceiverOrderByWithRelationInput[]
    cursor?: ReceiverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiverScalarFieldEnum | ReceiverScalarFieldEnum[]
  }

  /**
   * Receiver_Message without action
   */
  export type Receiver_MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver_Message
     */
    select?: Receiver_MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver_Message
     */
    omit?: Receiver_MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Receiver_MessageInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    recipientsNumber: number | null
    deliveredNumber: number | null
    failedNumber: number | null
    deliveryRate: number | null
    totalSmsCost: number | null
  }

  export type CampaignSumAggregateOutputType = {
    recipientsNumber: number | null
    deliveredNumber: number | null
    failedNumber: number | null
    deliveryRate: number | null
    totalSmsCost: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    messageText: string | null
    status: $Enums.CampaignStatus | null
    deliveryStatus: $Enums.DeliveryStatus | null
    province: string | null
    district: string | null
    municipality: string | null
    fileId: string | null
    recipientsNumber: number | null
    deliveredNumber: number | null
    failedNumber: number | null
    deliveryRate: number | null
    totalSmsCost: number | null
    paymentReceiptImage: string | null
    paid: boolean | null
    submitDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    messageText: string | null
    status: $Enums.CampaignStatus | null
    deliveryStatus: $Enums.DeliveryStatus | null
    province: string | null
    district: string | null
    municipality: string | null
    fileId: string | null
    recipientsNumber: number | null
    deliveredNumber: number | null
    failedNumber: number | null
    deliveryRate: number | null
    totalSmsCost: number | null
    paymentReceiptImage: string | null
    paid: boolean | null
    submitDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    messageText: number
    status: number
    deliveryStatus: number
    province: number
    district: number
    municipality: number
    fileId: number
    recipientsNumber: number
    deliveredNumber: number
    failedNumber: number
    deliveryRate: number
    totalSmsCost: number
    paymentReceiptImage: number
    paid: number
    submitDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    recipientsNumber?: true
    deliveredNumber?: true
    failedNumber?: true
    deliveryRate?: true
    totalSmsCost?: true
  }

  export type CampaignSumAggregateInputType = {
    recipientsNumber?: true
    deliveredNumber?: true
    failedNumber?: true
    deliveryRate?: true
    totalSmsCost?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    messageText?: true
    status?: true
    deliveryStatus?: true
    province?: true
    district?: true
    municipality?: true
    fileId?: true
    recipientsNumber?: true
    deliveredNumber?: true
    failedNumber?: true
    deliveryRate?: true
    totalSmsCost?: true
    paymentReceiptImage?: true
    paid?: true
    submitDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    messageText?: true
    status?: true
    deliveryStatus?: true
    province?: true
    district?: true
    municipality?: true
    fileId?: true
    recipientsNumber?: true
    deliveredNumber?: true
    failedNumber?: true
    deliveryRate?: true
    totalSmsCost?: true
    paymentReceiptImage?: true
    paid?: true
    submitDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    messageText?: true
    status?: true
    deliveryStatus?: true
    province?: true
    district?: true
    municipality?: true
    fileId?: true
    recipientsNumber?: true
    deliveredNumber?: true
    failedNumber?: true
    deliveryRate?: true
    totalSmsCost?: true
    paymentReceiptImage?: true
    paid?: true
    submitDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    userId: string
    name: string
    messageText: string
    status: $Enums.CampaignStatus
    deliveryStatus: $Enums.DeliveryStatus
    province: string | null
    district: string | null
    municipality: string | null
    fileId: string | null
    recipientsNumber: number | null
    deliveredNumber: number
    failedNumber: number
    deliveryRate: number
    totalSmsCost: number | null
    paymentReceiptImage: string | null
    paid: boolean
    submitDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    messageText?: boolean
    status?: boolean
    deliveryStatus?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    fileId?: boolean
    recipientsNumber?: boolean
    deliveredNumber?: boolean
    failedNumber?: boolean
    deliveryRate?: boolean
    totalSmsCost?: boolean
    paymentReceiptImage?: boolean
    paid?: boolean
    submitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    file?: boolean | Campaign$fileArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    messageText?: boolean
    status?: boolean
    deliveryStatus?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    fileId?: boolean
    recipientsNumber?: boolean
    deliveredNumber?: boolean
    failedNumber?: boolean
    deliveryRate?: boolean
    totalSmsCost?: boolean
    paymentReceiptImage?: boolean
    paid?: boolean
    submitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    file?: boolean | Campaign$fileArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    messageText?: boolean
    status?: boolean
    deliveryStatus?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    fileId?: boolean
    recipientsNumber?: boolean
    deliveredNumber?: boolean
    failedNumber?: boolean
    deliveryRate?: boolean
    totalSmsCost?: boolean
    paymentReceiptImage?: boolean
    paid?: boolean
    submitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    file?: boolean | Campaign$fileArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    messageText?: boolean
    status?: boolean
    deliveryStatus?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    fileId?: boolean
    recipientsNumber?: boolean
    deliveredNumber?: boolean
    failedNumber?: boolean
    deliveryRate?: boolean
    totalSmsCost?: boolean
    paymentReceiptImage?: boolean
    paid?: boolean
    submitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "messageText" | "status" | "deliveryStatus" | "province" | "district" | "municipality" | "fileId" | "recipientsNumber" | "deliveredNumber" | "failedNumber" | "deliveryRate" | "totalSmsCost" | "paymentReceiptImage" | "paid" | "submitDate" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    file?: boolean | Campaign$fileArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    file?: boolean | Campaign$fileArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    file?: boolean | Campaign$fileArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      file: Prisma.$FilesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      messageText: string
      status: $Enums.CampaignStatus
      deliveryStatus: $Enums.DeliveryStatus
      province: string | null
      district: string | null
      municipality: string | null
      fileId: string | null
      recipientsNumber: number | null
      deliveredNumber: number
      failedNumber: number
      deliveryRate: number
      totalSmsCost: number | null
      paymentReceiptImage: string | null
      paid: boolean
      submitDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    file<T extends Campaign$fileArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$fileArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly userId: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly messageText: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly deliveryStatus: FieldRef<"Campaign", 'DeliveryStatus'>
    readonly province: FieldRef<"Campaign", 'String'>
    readonly district: FieldRef<"Campaign", 'String'>
    readonly municipality: FieldRef<"Campaign", 'String'>
    readonly fileId: FieldRef<"Campaign", 'String'>
    readonly recipientsNumber: FieldRef<"Campaign", 'Int'>
    readonly deliveredNumber: FieldRef<"Campaign", 'Int'>
    readonly failedNumber: FieldRef<"Campaign", 'Int'>
    readonly deliveryRate: FieldRef<"Campaign", 'Float'>
    readonly totalSmsCost: FieldRef<"Campaign", 'Float'>
    readonly paymentReceiptImage: FieldRef<"Campaign", 'String'>
    readonly paid: FieldRef<"Campaign", 'Boolean'>
    readonly submitDate: FieldRef<"Campaign", 'DateTime'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.file
   */
  export type Campaign$fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    where?: FilesWhereInput
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model QuickSMSSend
   */

  export type AggregateQuickSMSSend = {
    _count: QuickSMSSendCountAggregateOutputType | null
    _min: QuickSMSSendMinAggregateOutputType | null
    _max: QuickSMSSendMaxAggregateOutputType | null
  }

  export type QuickSMSSendMinAggregateOutputType = {
    id: string | null
    userId: string | null
    toPhoneNumber: string | null
    message: string | null
    status: $Enums.QuickSendStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuickSMSSendMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    toPhoneNumber: string | null
    message: string | null
    status: $Enums.QuickSendStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuickSMSSendCountAggregateOutputType = {
    id: number
    userId: number
    toPhoneNumber: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuickSMSSendMinAggregateInputType = {
    id?: true
    userId?: true
    toPhoneNumber?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuickSMSSendMaxAggregateInputType = {
    id?: true
    userId?: true
    toPhoneNumber?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuickSMSSendCountAggregateInputType = {
    id?: true
    userId?: true
    toPhoneNumber?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuickSMSSendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuickSMSSend to aggregate.
     */
    where?: QuickSMSSendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickSMSSends to fetch.
     */
    orderBy?: QuickSMSSendOrderByWithRelationInput | QuickSMSSendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuickSMSSendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickSMSSends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickSMSSends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuickSMSSends
    **/
    _count?: true | QuickSMSSendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuickSMSSendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuickSMSSendMaxAggregateInputType
  }

  export type GetQuickSMSSendAggregateType<T extends QuickSMSSendAggregateArgs> = {
        [P in keyof T & keyof AggregateQuickSMSSend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuickSMSSend[P]>
      : GetScalarType<T[P], AggregateQuickSMSSend[P]>
  }




  export type QuickSMSSendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuickSMSSendWhereInput
    orderBy?: QuickSMSSendOrderByWithAggregationInput | QuickSMSSendOrderByWithAggregationInput[]
    by: QuickSMSSendScalarFieldEnum[] | QuickSMSSendScalarFieldEnum
    having?: QuickSMSSendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuickSMSSendCountAggregateInputType | true
    _min?: QuickSMSSendMinAggregateInputType
    _max?: QuickSMSSendMaxAggregateInputType
  }

  export type QuickSMSSendGroupByOutputType = {
    id: string
    userId: string
    toPhoneNumber: string
    message: string
    status: $Enums.QuickSendStatus
    createdAt: Date
    updatedAt: Date
    _count: QuickSMSSendCountAggregateOutputType | null
    _min: QuickSMSSendMinAggregateOutputType | null
    _max: QuickSMSSendMaxAggregateOutputType | null
  }

  type GetQuickSMSSendGroupByPayload<T extends QuickSMSSendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuickSMSSendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuickSMSSendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuickSMSSendGroupByOutputType[P]>
            : GetScalarType<T[P], QuickSMSSendGroupByOutputType[P]>
        }
      >
    >


  export type QuickSMSSendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    toPhoneNumber?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quickSMSSend"]>

  export type QuickSMSSendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    toPhoneNumber?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quickSMSSend"]>

  export type QuickSMSSendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    toPhoneNumber?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quickSMSSend"]>

  export type QuickSMSSendSelectScalar = {
    id?: boolean
    userId?: boolean
    toPhoneNumber?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuickSMSSendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "toPhoneNumber" | "message" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["quickSMSSend"]>
  export type QuickSMSSendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuickSMSSendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuickSMSSendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuickSMSSendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuickSMSSend"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      toPhoneNumber: string
      message: string
      status: $Enums.QuickSendStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quickSMSSend"]>
    composites: {}
  }

  type QuickSMSSendGetPayload<S extends boolean | null | undefined | QuickSMSSendDefaultArgs> = $Result.GetResult<Prisma.$QuickSMSSendPayload, S>

  type QuickSMSSendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuickSMSSendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuickSMSSendCountAggregateInputType | true
    }

  export interface QuickSMSSendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuickSMSSend'], meta: { name: 'QuickSMSSend' } }
    /**
     * Find zero or one QuickSMSSend that matches the filter.
     * @param {QuickSMSSendFindUniqueArgs} args - Arguments to find a QuickSMSSend
     * @example
     * // Get one QuickSMSSend
     * const quickSMSSend = await prisma.quickSMSSend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuickSMSSendFindUniqueArgs>(args: SelectSubset<T, QuickSMSSendFindUniqueArgs<ExtArgs>>): Prisma__QuickSMSSendClient<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuickSMSSend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuickSMSSendFindUniqueOrThrowArgs} args - Arguments to find a QuickSMSSend
     * @example
     * // Get one QuickSMSSend
     * const quickSMSSend = await prisma.quickSMSSend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuickSMSSendFindUniqueOrThrowArgs>(args: SelectSubset<T, QuickSMSSendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuickSMSSendClient<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuickSMSSend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickSMSSendFindFirstArgs} args - Arguments to find a QuickSMSSend
     * @example
     * // Get one QuickSMSSend
     * const quickSMSSend = await prisma.quickSMSSend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuickSMSSendFindFirstArgs>(args?: SelectSubset<T, QuickSMSSendFindFirstArgs<ExtArgs>>): Prisma__QuickSMSSendClient<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuickSMSSend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickSMSSendFindFirstOrThrowArgs} args - Arguments to find a QuickSMSSend
     * @example
     * // Get one QuickSMSSend
     * const quickSMSSend = await prisma.quickSMSSend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuickSMSSendFindFirstOrThrowArgs>(args?: SelectSubset<T, QuickSMSSendFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuickSMSSendClient<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuickSMSSends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickSMSSendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuickSMSSends
     * const quickSMSSends = await prisma.quickSMSSend.findMany()
     * 
     * // Get first 10 QuickSMSSends
     * const quickSMSSends = await prisma.quickSMSSend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quickSMSSendWithIdOnly = await prisma.quickSMSSend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuickSMSSendFindManyArgs>(args?: SelectSubset<T, QuickSMSSendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuickSMSSend.
     * @param {QuickSMSSendCreateArgs} args - Arguments to create a QuickSMSSend.
     * @example
     * // Create one QuickSMSSend
     * const QuickSMSSend = await prisma.quickSMSSend.create({
     *   data: {
     *     // ... data to create a QuickSMSSend
     *   }
     * })
     * 
     */
    create<T extends QuickSMSSendCreateArgs>(args: SelectSubset<T, QuickSMSSendCreateArgs<ExtArgs>>): Prisma__QuickSMSSendClient<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuickSMSSends.
     * @param {QuickSMSSendCreateManyArgs} args - Arguments to create many QuickSMSSends.
     * @example
     * // Create many QuickSMSSends
     * const quickSMSSend = await prisma.quickSMSSend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuickSMSSendCreateManyArgs>(args?: SelectSubset<T, QuickSMSSendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuickSMSSends and returns the data saved in the database.
     * @param {QuickSMSSendCreateManyAndReturnArgs} args - Arguments to create many QuickSMSSends.
     * @example
     * // Create many QuickSMSSends
     * const quickSMSSend = await prisma.quickSMSSend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuickSMSSends and only return the `id`
     * const quickSMSSendWithIdOnly = await prisma.quickSMSSend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuickSMSSendCreateManyAndReturnArgs>(args?: SelectSubset<T, QuickSMSSendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuickSMSSend.
     * @param {QuickSMSSendDeleteArgs} args - Arguments to delete one QuickSMSSend.
     * @example
     * // Delete one QuickSMSSend
     * const QuickSMSSend = await prisma.quickSMSSend.delete({
     *   where: {
     *     // ... filter to delete one QuickSMSSend
     *   }
     * })
     * 
     */
    delete<T extends QuickSMSSendDeleteArgs>(args: SelectSubset<T, QuickSMSSendDeleteArgs<ExtArgs>>): Prisma__QuickSMSSendClient<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuickSMSSend.
     * @param {QuickSMSSendUpdateArgs} args - Arguments to update one QuickSMSSend.
     * @example
     * // Update one QuickSMSSend
     * const quickSMSSend = await prisma.quickSMSSend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuickSMSSendUpdateArgs>(args: SelectSubset<T, QuickSMSSendUpdateArgs<ExtArgs>>): Prisma__QuickSMSSendClient<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuickSMSSends.
     * @param {QuickSMSSendDeleteManyArgs} args - Arguments to filter QuickSMSSends to delete.
     * @example
     * // Delete a few QuickSMSSends
     * const { count } = await prisma.quickSMSSend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuickSMSSendDeleteManyArgs>(args?: SelectSubset<T, QuickSMSSendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuickSMSSends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickSMSSendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuickSMSSends
     * const quickSMSSend = await prisma.quickSMSSend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuickSMSSendUpdateManyArgs>(args: SelectSubset<T, QuickSMSSendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuickSMSSends and returns the data updated in the database.
     * @param {QuickSMSSendUpdateManyAndReturnArgs} args - Arguments to update many QuickSMSSends.
     * @example
     * // Update many QuickSMSSends
     * const quickSMSSend = await prisma.quickSMSSend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuickSMSSends and only return the `id`
     * const quickSMSSendWithIdOnly = await prisma.quickSMSSend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuickSMSSendUpdateManyAndReturnArgs>(args: SelectSubset<T, QuickSMSSendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuickSMSSend.
     * @param {QuickSMSSendUpsertArgs} args - Arguments to update or create a QuickSMSSend.
     * @example
     * // Update or create a QuickSMSSend
     * const quickSMSSend = await prisma.quickSMSSend.upsert({
     *   create: {
     *     // ... data to create a QuickSMSSend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuickSMSSend we want to update
     *   }
     * })
     */
    upsert<T extends QuickSMSSendUpsertArgs>(args: SelectSubset<T, QuickSMSSendUpsertArgs<ExtArgs>>): Prisma__QuickSMSSendClient<$Result.GetResult<Prisma.$QuickSMSSendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuickSMSSends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickSMSSendCountArgs} args - Arguments to filter QuickSMSSends to count.
     * @example
     * // Count the number of QuickSMSSends
     * const count = await prisma.quickSMSSend.count({
     *   where: {
     *     // ... the filter for the QuickSMSSends we want to count
     *   }
     * })
    **/
    count<T extends QuickSMSSendCountArgs>(
      args?: Subset<T, QuickSMSSendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuickSMSSendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuickSMSSend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickSMSSendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuickSMSSendAggregateArgs>(args: Subset<T, QuickSMSSendAggregateArgs>): Prisma.PrismaPromise<GetQuickSMSSendAggregateType<T>>

    /**
     * Group by QuickSMSSend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickSMSSendGroupByArgs} args - Group by arguments.
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
      T extends QuickSMSSendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuickSMSSendGroupByArgs['orderBy'] }
        : { orderBy?: QuickSMSSendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuickSMSSendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuickSMSSendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuickSMSSend model
   */
  readonly fields: QuickSMSSendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuickSMSSend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuickSMSSendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the QuickSMSSend model
   */
  interface QuickSMSSendFieldRefs {
    readonly id: FieldRef<"QuickSMSSend", 'String'>
    readonly userId: FieldRef<"QuickSMSSend", 'String'>
    readonly toPhoneNumber: FieldRef<"QuickSMSSend", 'String'>
    readonly message: FieldRef<"QuickSMSSend", 'String'>
    readonly status: FieldRef<"QuickSMSSend", 'QuickSendStatus'>
    readonly createdAt: FieldRef<"QuickSMSSend", 'DateTime'>
    readonly updatedAt: FieldRef<"QuickSMSSend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuickSMSSend findUnique
   */
  export type QuickSMSSendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendInclude<ExtArgs> | null
    /**
     * Filter, which QuickSMSSend to fetch.
     */
    where: QuickSMSSendWhereUniqueInput
  }

  /**
   * QuickSMSSend findUniqueOrThrow
   */
  export type QuickSMSSendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendInclude<ExtArgs> | null
    /**
     * Filter, which QuickSMSSend to fetch.
     */
    where: QuickSMSSendWhereUniqueInput
  }

  /**
   * QuickSMSSend findFirst
   */
  export type QuickSMSSendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendInclude<ExtArgs> | null
    /**
     * Filter, which QuickSMSSend to fetch.
     */
    where?: QuickSMSSendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickSMSSends to fetch.
     */
    orderBy?: QuickSMSSendOrderByWithRelationInput | QuickSMSSendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuickSMSSends.
     */
    cursor?: QuickSMSSendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickSMSSends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickSMSSends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuickSMSSends.
     */
    distinct?: QuickSMSSendScalarFieldEnum | QuickSMSSendScalarFieldEnum[]
  }

  /**
   * QuickSMSSend findFirstOrThrow
   */
  export type QuickSMSSendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendInclude<ExtArgs> | null
    /**
     * Filter, which QuickSMSSend to fetch.
     */
    where?: QuickSMSSendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickSMSSends to fetch.
     */
    orderBy?: QuickSMSSendOrderByWithRelationInput | QuickSMSSendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuickSMSSends.
     */
    cursor?: QuickSMSSendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickSMSSends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickSMSSends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuickSMSSends.
     */
    distinct?: QuickSMSSendScalarFieldEnum | QuickSMSSendScalarFieldEnum[]
  }

  /**
   * QuickSMSSend findMany
   */
  export type QuickSMSSendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendInclude<ExtArgs> | null
    /**
     * Filter, which QuickSMSSends to fetch.
     */
    where?: QuickSMSSendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickSMSSends to fetch.
     */
    orderBy?: QuickSMSSendOrderByWithRelationInput | QuickSMSSendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuickSMSSends.
     */
    cursor?: QuickSMSSendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickSMSSends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickSMSSends.
     */
    skip?: number
    distinct?: QuickSMSSendScalarFieldEnum | QuickSMSSendScalarFieldEnum[]
  }

  /**
   * QuickSMSSend create
   */
  export type QuickSMSSendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendInclude<ExtArgs> | null
    /**
     * The data needed to create a QuickSMSSend.
     */
    data: XOR<QuickSMSSendCreateInput, QuickSMSSendUncheckedCreateInput>
  }

  /**
   * QuickSMSSend createMany
   */
  export type QuickSMSSendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuickSMSSends.
     */
    data: QuickSMSSendCreateManyInput | QuickSMSSendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuickSMSSend createManyAndReturn
   */
  export type QuickSMSSendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * The data used to create many QuickSMSSends.
     */
    data: QuickSMSSendCreateManyInput | QuickSMSSendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuickSMSSend update
   */
  export type QuickSMSSendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendInclude<ExtArgs> | null
    /**
     * The data needed to update a QuickSMSSend.
     */
    data: XOR<QuickSMSSendUpdateInput, QuickSMSSendUncheckedUpdateInput>
    /**
     * Choose, which QuickSMSSend to update.
     */
    where: QuickSMSSendWhereUniqueInput
  }

  /**
   * QuickSMSSend updateMany
   */
  export type QuickSMSSendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuickSMSSends.
     */
    data: XOR<QuickSMSSendUpdateManyMutationInput, QuickSMSSendUncheckedUpdateManyInput>
    /**
     * Filter which QuickSMSSends to update
     */
    where?: QuickSMSSendWhereInput
    /**
     * Limit how many QuickSMSSends to update.
     */
    limit?: number
  }

  /**
   * QuickSMSSend updateManyAndReturn
   */
  export type QuickSMSSendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * The data used to update QuickSMSSends.
     */
    data: XOR<QuickSMSSendUpdateManyMutationInput, QuickSMSSendUncheckedUpdateManyInput>
    /**
     * Filter which QuickSMSSends to update
     */
    where?: QuickSMSSendWhereInput
    /**
     * Limit how many QuickSMSSends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuickSMSSend upsert
   */
  export type QuickSMSSendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendInclude<ExtArgs> | null
    /**
     * The filter to search for the QuickSMSSend to update in case it exists.
     */
    where: QuickSMSSendWhereUniqueInput
    /**
     * In case the QuickSMSSend found by the `where` argument doesn't exist, create a new QuickSMSSend with this data.
     */
    create: XOR<QuickSMSSendCreateInput, QuickSMSSendUncheckedCreateInput>
    /**
     * In case the QuickSMSSend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuickSMSSendUpdateInput, QuickSMSSendUncheckedUpdateInput>
  }

  /**
   * QuickSMSSend delete
   */
  export type QuickSMSSendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendInclude<ExtArgs> | null
    /**
     * Filter which QuickSMSSend to delete.
     */
    where: QuickSMSSendWhereUniqueInput
  }

  /**
   * QuickSMSSend deleteMany
   */
  export type QuickSMSSendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuickSMSSends to delete
     */
    where?: QuickSMSSendWhereInput
    /**
     * Limit how many QuickSMSSends to delete.
     */
    limit?: number
  }

  /**
   * QuickSMSSend without action
   */
  export type QuickSMSSendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickSMSSend
     */
    select?: QuickSMSSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickSMSSend
     */
    omit?: QuickSMSSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuickSMSSendInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    paidOn: Date | null
    isPaid: boolean | null
    isSmsSent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    paidOn: Date | null
    isPaid: boolean | null
    isSmsSent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    paidOn: number
    isPaid: number
    isSmsSent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    paidOn?: true
    isPaid?: true
    isSmsSent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    paidOn?: true
    isPaid?: true
    isSmsSent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    paidOn?: true
    isPaid?: true
    isSmsSent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    paidOn: Date
    isPaid: boolean
    isSmsSent: boolean
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    paidOn?: boolean
    isPaid?: boolean
    isSmsSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    paidOn?: boolean
    isPaid?: boolean
    isSmsSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    paidOn?: boolean
    isPaid?: boolean
    isSmsSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    paidOn?: boolean
    isPaid?: boolean
    isSmsSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "paidOn" | "isPaid" | "isSmsSent" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      paidOn: Date
      isPaid: boolean
      isSmsSent: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly paidOn: FieldRef<"Payment", 'DateTime'>
    readonly isPaid: FieldRef<"Payment", 'Boolean'>
    readonly isSmsSent: FieldRef<"Payment", 'Boolean'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestMinAggregateOutputType = {
    id: string | null
    ipAddress: string | null
    userAgent: string | null
    sessionId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type GuestMaxAggregateOutputType = {
    id: string | null
    ipAddress: string | null
    userAgent: string | null
    sessionId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    ipAddress: number
    userAgent: number
    sessionId: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type GuestMinAggregateInputType = {
    id?: true
    ipAddress?: true
    userAgent?: true
    sessionId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    ipAddress?: true
    userAgent?: true
    sessionId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    ipAddress?: true
    userAgent?: true
    sessionId?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: string
    ipAddress: string | null
    userAgent: string | null
    sessionId: string | null
    createdAt: Date
    expiresAt: Date
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    sessionId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    files?: boolean | Guest$filesArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    sessionId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    sessionId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectScalar = {
    id?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    sessionId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ipAddress" | "userAgent" | "sessionId" | "createdAt" | "expiresAt", ExtArgs["result"]["guest"]>
  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | Guest$filesArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      files: Prisma.$GuestFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ipAddress: string | null
      userAgent: string | null
      sessionId: string | null
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {GuestCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests and returns the data updated in the database.
     * @param {GuestUpdateManyAndReturnArgs} args - Arguments to update many Guests.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
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
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends Guest$filesArgs<ExtArgs> = {}>(args?: Subset<T, Guest$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Guest model
   */
  interface GuestFieldRefs {
    readonly id: FieldRef<"Guest", 'String'>
    readonly ipAddress: FieldRef<"Guest", 'String'>
    readonly userAgent: FieldRef<"Guest", 'String'>
    readonly sessionId: FieldRef<"Guest", 'String'>
    readonly createdAt: FieldRef<"Guest", 'DateTime'>
    readonly expiresAt: FieldRef<"Guest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data?: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest createManyAndReturn
   */
  export type GuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest updateManyAndReturn
   */
  export type GuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to delete.
     */
    limit?: number
  }

  /**
   * Guest.files
   */
  export type Guest$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileInclude<ExtArgs> | null
    where?: GuestFileWhereInput
    orderBy?: GuestFileOrderByWithRelationInput | GuestFileOrderByWithRelationInput[]
    cursor?: GuestFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestFileScalarFieldEnum | GuestFileScalarFieldEnum[]
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
  }


  /**
   * Model GuestFile
   */

  export type AggregateGuestFile = {
    _count: GuestFileCountAggregateOutputType | null
    _avg: GuestFileAvgAggregateOutputType | null
    _sum: GuestFileSumAggregateOutputType | null
    _min: GuestFileMinAggregateOutputType | null
    _max: GuestFileMaxAggregateOutputType | null
  }

  export type GuestFileAvgAggregateOutputType = {
    sizeInBytes: number | null
    numberOfReceivers: number | null
  }

  export type GuestFileSumAggregateOutputType = {
    sizeInBytes: bigint | null
    numberOfReceivers: number | null
  }

  export type GuestFileMinAggregateOutputType = {
    id: string | null
    guestId: string | null
    name: string | null
    path: string | null
    sizeInBytes: bigint | null
    type: $Enums.FileType | null
    uploadStatus: $Enums.UploadStatus | null
    numberOfReceivers: number | null
    invalidRowsPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestFileMaxAggregateOutputType = {
    id: string | null
    guestId: string | null
    name: string | null
    path: string | null
    sizeInBytes: bigint | null
    type: $Enums.FileType | null
    uploadStatus: $Enums.UploadStatus | null
    numberOfReceivers: number | null
    invalidRowsPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestFileCountAggregateOutputType = {
    id: number
    guestId: number
    name: number
    path: number
    sizeInBytes: number
    type: number
    uploadStatus: number
    numberOfReceivers: number
    invalidRowsPath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuestFileAvgAggregateInputType = {
    sizeInBytes?: true
    numberOfReceivers?: true
  }

  export type GuestFileSumAggregateInputType = {
    sizeInBytes?: true
    numberOfReceivers?: true
  }

  export type GuestFileMinAggregateInputType = {
    id?: true
    guestId?: true
    name?: true
    path?: true
    sizeInBytes?: true
    type?: true
    uploadStatus?: true
    numberOfReceivers?: true
    invalidRowsPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestFileMaxAggregateInputType = {
    id?: true
    guestId?: true
    name?: true
    path?: true
    sizeInBytes?: true
    type?: true
    uploadStatus?: true
    numberOfReceivers?: true
    invalidRowsPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestFileCountAggregateInputType = {
    id?: true
    guestId?: true
    name?: true
    path?: true
    sizeInBytes?: true
    type?: true
    uploadStatus?: true
    numberOfReceivers?: true
    invalidRowsPath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuestFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestFile to aggregate.
     */
    where?: GuestFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestFiles to fetch.
     */
    orderBy?: GuestFileOrderByWithRelationInput | GuestFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuestFiles
    **/
    _count?: true | GuestFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuestFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuestFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestFileMaxAggregateInputType
  }

  export type GetGuestFileAggregateType<T extends GuestFileAggregateArgs> = {
        [P in keyof T & keyof AggregateGuestFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuestFile[P]>
      : GetScalarType<T[P], AggregateGuestFile[P]>
  }




  export type GuestFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestFileWhereInput
    orderBy?: GuestFileOrderByWithAggregationInput | GuestFileOrderByWithAggregationInput[]
    by: GuestFileScalarFieldEnum[] | GuestFileScalarFieldEnum
    having?: GuestFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestFileCountAggregateInputType | true
    _avg?: GuestFileAvgAggregateInputType
    _sum?: GuestFileSumAggregateInputType
    _min?: GuestFileMinAggregateInputType
    _max?: GuestFileMaxAggregateInputType
  }

  export type GuestFileGroupByOutputType = {
    id: string
    guestId: string
    name: string
    path: string
    sizeInBytes: bigint
    type: $Enums.FileType
    uploadStatus: $Enums.UploadStatus
    numberOfReceivers: number | null
    invalidRowsPath: string | null
    createdAt: Date
    updatedAt: Date
    _count: GuestFileCountAggregateOutputType | null
    _avg: GuestFileAvgAggregateOutputType | null
    _sum: GuestFileSumAggregateOutputType | null
    _min: GuestFileMinAggregateOutputType | null
    _max: GuestFileMaxAggregateOutputType | null
  }

  type GetGuestFileGroupByPayload<T extends GuestFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestFileGroupByOutputType[P]>
            : GetScalarType<T[P], GuestFileGroupByOutputType[P]>
        }
      >
    >


  export type GuestFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    name?: boolean
    path?: boolean
    sizeInBytes?: boolean
    type?: boolean
    uploadStatus?: boolean
    numberOfReceivers?: boolean
    invalidRowsPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    receivers?: boolean | GuestFile$receiversArgs<ExtArgs>
    invalidGuestReceivers?: boolean | GuestFile$invalidGuestReceiversArgs<ExtArgs>
    _count?: boolean | GuestFileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestFile"]>

  export type GuestFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    name?: boolean
    path?: boolean
    sizeInBytes?: boolean
    type?: boolean
    uploadStatus?: boolean
    numberOfReceivers?: boolean
    invalidRowsPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestFile"]>

  export type GuestFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    name?: boolean
    path?: boolean
    sizeInBytes?: boolean
    type?: boolean
    uploadStatus?: boolean
    numberOfReceivers?: boolean
    invalidRowsPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestFile"]>

  export type GuestFileSelectScalar = {
    id?: boolean
    guestId?: boolean
    name?: boolean
    path?: boolean
    sizeInBytes?: boolean
    type?: boolean
    uploadStatus?: boolean
    numberOfReceivers?: boolean
    invalidRowsPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuestFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guestId" | "name" | "path" | "sizeInBytes" | "type" | "uploadStatus" | "numberOfReceivers" | "invalidRowsPath" | "createdAt" | "updatedAt", ExtArgs["result"]["guestFile"]>
  export type GuestFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    receivers?: boolean | GuestFile$receiversArgs<ExtArgs>
    invalidGuestReceivers?: boolean | GuestFile$invalidGuestReceiversArgs<ExtArgs>
    _count?: boolean | GuestFileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type GuestFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }

  export type $GuestFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuestFile"
    objects: {
      guest: Prisma.$GuestPayload<ExtArgs>
      receivers: Prisma.$GuestReceiverPayload<ExtArgs>[]
      invalidGuestReceivers: Prisma.$InvalidGuestReceiverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guestId: string
      name: string
      path: string
      sizeInBytes: bigint
      type: $Enums.FileType
      uploadStatus: $Enums.UploadStatus
      numberOfReceivers: number | null
      invalidRowsPath: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guestFile"]>
    composites: {}
  }

  type GuestFileGetPayload<S extends boolean | null | undefined | GuestFileDefaultArgs> = $Result.GetResult<Prisma.$GuestFilePayload, S>

  type GuestFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestFileCountAggregateInputType | true
    }

  export interface GuestFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuestFile'], meta: { name: 'GuestFile' } }
    /**
     * Find zero or one GuestFile that matches the filter.
     * @param {GuestFileFindUniqueArgs} args - Arguments to find a GuestFile
     * @example
     * // Get one GuestFile
     * const guestFile = await prisma.guestFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFileFindUniqueArgs>(args: SelectSubset<T, GuestFileFindUniqueArgs<ExtArgs>>): Prisma__GuestFileClient<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuestFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFileFindUniqueOrThrowArgs} args - Arguments to find a GuestFile
     * @example
     * // Get one GuestFile
     * const guestFile = await prisma.guestFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFileFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestFileClient<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFileFindFirstArgs} args - Arguments to find a GuestFile
     * @example
     * // Get one GuestFile
     * const guestFile = await prisma.guestFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFileFindFirstArgs>(args?: SelectSubset<T, GuestFileFindFirstArgs<ExtArgs>>): Prisma__GuestFileClient<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFileFindFirstOrThrowArgs} args - Arguments to find a GuestFile
     * @example
     * // Get one GuestFile
     * const guestFile = await prisma.guestFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFileFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestFileClient<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuestFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuestFiles
     * const guestFiles = await prisma.guestFile.findMany()
     * 
     * // Get first 10 GuestFiles
     * const guestFiles = await prisma.guestFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestFileWithIdOnly = await prisma.guestFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFileFindManyArgs>(args?: SelectSubset<T, GuestFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuestFile.
     * @param {GuestFileCreateArgs} args - Arguments to create a GuestFile.
     * @example
     * // Create one GuestFile
     * const GuestFile = await prisma.guestFile.create({
     *   data: {
     *     // ... data to create a GuestFile
     *   }
     * })
     * 
     */
    create<T extends GuestFileCreateArgs>(args: SelectSubset<T, GuestFileCreateArgs<ExtArgs>>): Prisma__GuestFileClient<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuestFiles.
     * @param {GuestFileCreateManyArgs} args - Arguments to create many GuestFiles.
     * @example
     * // Create many GuestFiles
     * const guestFile = await prisma.guestFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestFileCreateManyArgs>(args?: SelectSubset<T, GuestFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuestFiles and returns the data saved in the database.
     * @param {GuestFileCreateManyAndReturnArgs} args - Arguments to create many GuestFiles.
     * @example
     * // Create many GuestFiles
     * const guestFile = await prisma.guestFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuestFiles and only return the `id`
     * const guestFileWithIdOnly = await prisma.guestFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestFileCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuestFile.
     * @param {GuestFileDeleteArgs} args - Arguments to delete one GuestFile.
     * @example
     * // Delete one GuestFile
     * const GuestFile = await prisma.guestFile.delete({
     *   where: {
     *     // ... filter to delete one GuestFile
     *   }
     * })
     * 
     */
    delete<T extends GuestFileDeleteArgs>(args: SelectSubset<T, GuestFileDeleteArgs<ExtArgs>>): Prisma__GuestFileClient<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuestFile.
     * @param {GuestFileUpdateArgs} args - Arguments to update one GuestFile.
     * @example
     * // Update one GuestFile
     * const guestFile = await prisma.guestFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestFileUpdateArgs>(args: SelectSubset<T, GuestFileUpdateArgs<ExtArgs>>): Prisma__GuestFileClient<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuestFiles.
     * @param {GuestFileDeleteManyArgs} args - Arguments to filter GuestFiles to delete.
     * @example
     * // Delete a few GuestFiles
     * const { count } = await prisma.guestFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestFileDeleteManyArgs>(args?: SelectSubset<T, GuestFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuestFiles
     * const guestFile = await prisma.guestFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestFileUpdateManyArgs>(args: SelectSubset<T, GuestFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestFiles and returns the data updated in the database.
     * @param {GuestFileUpdateManyAndReturnArgs} args - Arguments to update many GuestFiles.
     * @example
     * // Update many GuestFiles
     * const guestFile = await prisma.guestFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuestFiles and only return the `id`
     * const guestFileWithIdOnly = await prisma.guestFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestFileUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuestFile.
     * @param {GuestFileUpsertArgs} args - Arguments to update or create a GuestFile.
     * @example
     * // Update or create a GuestFile
     * const guestFile = await prisma.guestFile.upsert({
     *   create: {
     *     // ... data to create a GuestFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuestFile we want to update
     *   }
     * })
     */
    upsert<T extends GuestFileUpsertArgs>(args: SelectSubset<T, GuestFileUpsertArgs<ExtArgs>>): Prisma__GuestFileClient<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuestFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFileCountArgs} args - Arguments to filter GuestFiles to count.
     * @example
     * // Count the number of GuestFiles
     * const count = await prisma.guestFile.count({
     *   where: {
     *     // ... the filter for the GuestFiles we want to count
     *   }
     * })
    **/
    count<T extends GuestFileCountArgs>(
      args?: Subset<T, GuestFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuestFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestFileAggregateArgs>(args: Subset<T, GuestFileAggregateArgs>): Prisma.PrismaPromise<GetGuestFileAggregateType<T>>

    /**
     * Group by GuestFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFileGroupByArgs} args - Group by arguments.
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
      T extends GuestFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestFileGroupByArgs['orderBy'] }
        : { orderBy?: GuestFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuestFile model
   */
  readonly fields: GuestFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuestFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receivers<T extends GuestFile$receiversArgs<ExtArgs> = {}>(args?: Subset<T, GuestFile$receiversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invalidGuestReceivers<T extends GuestFile$invalidGuestReceiversArgs<ExtArgs> = {}>(args?: Subset<T, GuestFile$invalidGuestReceiversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GuestFile model
   */
  interface GuestFileFieldRefs {
    readonly id: FieldRef<"GuestFile", 'String'>
    readonly guestId: FieldRef<"GuestFile", 'String'>
    readonly name: FieldRef<"GuestFile", 'String'>
    readonly path: FieldRef<"GuestFile", 'String'>
    readonly sizeInBytes: FieldRef<"GuestFile", 'BigInt'>
    readonly type: FieldRef<"GuestFile", 'FileType'>
    readonly uploadStatus: FieldRef<"GuestFile", 'UploadStatus'>
    readonly numberOfReceivers: FieldRef<"GuestFile", 'Int'>
    readonly invalidRowsPath: FieldRef<"GuestFile", 'String'>
    readonly createdAt: FieldRef<"GuestFile", 'DateTime'>
    readonly updatedAt: FieldRef<"GuestFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuestFile findUnique
   */
  export type GuestFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileInclude<ExtArgs> | null
    /**
     * Filter, which GuestFile to fetch.
     */
    where: GuestFileWhereUniqueInput
  }

  /**
   * GuestFile findUniqueOrThrow
   */
  export type GuestFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileInclude<ExtArgs> | null
    /**
     * Filter, which GuestFile to fetch.
     */
    where: GuestFileWhereUniqueInput
  }

  /**
   * GuestFile findFirst
   */
  export type GuestFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileInclude<ExtArgs> | null
    /**
     * Filter, which GuestFile to fetch.
     */
    where?: GuestFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestFiles to fetch.
     */
    orderBy?: GuestFileOrderByWithRelationInput | GuestFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestFiles.
     */
    cursor?: GuestFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestFiles.
     */
    distinct?: GuestFileScalarFieldEnum | GuestFileScalarFieldEnum[]
  }

  /**
   * GuestFile findFirstOrThrow
   */
  export type GuestFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileInclude<ExtArgs> | null
    /**
     * Filter, which GuestFile to fetch.
     */
    where?: GuestFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestFiles to fetch.
     */
    orderBy?: GuestFileOrderByWithRelationInput | GuestFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestFiles.
     */
    cursor?: GuestFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestFiles.
     */
    distinct?: GuestFileScalarFieldEnum | GuestFileScalarFieldEnum[]
  }

  /**
   * GuestFile findMany
   */
  export type GuestFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileInclude<ExtArgs> | null
    /**
     * Filter, which GuestFiles to fetch.
     */
    where?: GuestFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestFiles to fetch.
     */
    orderBy?: GuestFileOrderByWithRelationInput | GuestFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuestFiles.
     */
    cursor?: GuestFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestFiles.
     */
    skip?: number
    distinct?: GuestFileScalarFieldEnum | GuestFileScalarFieldEnum[]
  }

  /**
   * GuestFile create
   */
  export type GuestFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileInclude<ExtArgs> | null
    /**
     * The data needed to create a GuestFile.
     */
    data: XOR<GuestFileCreateInput, GuestFileUncheckedCreateInput>
  }

  /**
   * GuestFile createMany
   */
  export type GuestFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuestFiles.
     */
    data: GuestFileCreateManyInput | GuestFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuestFile createManyAndReturn
   */
  export type GuestFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * The data used to create many GuestFiles.
     */
    data: GuestFileCreateManyInput | GuestFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestFile update
   */
  export type GuestFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileInclude<ExtArgs> | null
    /**
     * The data needed to update a GuestFile.
     */
    data: XOR<GuestFileUpdateInput, GuestFileUncheckedUpdateInput>
    /**
     * Choose, which GuestFile to update.
     */
    where: GuestFileWhereUniqueInput
  }

  /**
   * GuestFile updateMany
   */
  export type GuestFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuestFiles.
     */
    data: XOR<GuestFileUpdateManyMutationInput, GuestFileUncheckedUpdateManyInput>
    /**
     * Filter which GuestFiles to update
     */
    where?: GuestFileWhereInput
    /**
     * Limit how many GuestFiles to update.
     */
    limit?: number
  }

  /**
   * GuestFile updateManyAndReturn
   */
  export type GuestFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * The data used to update GuestFiles.
     */
    data: XOR<GuestFileUpdateManyMutationInput, GuestFileUncheckedUpdateManyInput>
    /**
     * Filter which GuestFiles to update
     */
    where?: GuestFileWhereInput
    /**
     * Limit how many GuestFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestFile upsert
   */
  export type GuestFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileInclude<ExtArgs> | null
    /**
     * The filter to search for the GuestFile to update in case it exists.
     */
    where: GuestFileWhereUniqueInput
    /**
     * In case the GuestFile found by the `where` argument doesn't exist, create a new GuestFile with this data.
     */
    create: XOR<GuestFileCreateInput, GuestFileUncheckedCreateInput>
    /**
     * In case the GuestFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestFileUpdateInput, GuestFileUncheckedUpdateInput>
  }

  /**
   * GuestFile delete
   */
  export type GuestFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileInclude<ExtArgs> | null
    /**
     * Filter which GuestFile to delete.
     */
    where: GuestFileWhereUniqueInput
  }

  /**
   * GuestFile deleteMany
   */
  export type GuestFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestFiles to delete
     */
    where?: GuestFileWhereInput
    /**
     * Limit how many GuestFiles to delete.
     */
    limit?: number
  }

  /**
   * GuestFile.receivers
   */
  export type GuestFile$receiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverInclude<ExtArgs> | null
    where?: GuestReceiverWhereInput
    orderBy?: GuestReceiverOrderByWithRelationInput | GuestReceiverOrderByWithRelationInput[]
    cursor?: GuestReceiverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestReceiverScalarFieldEnum | GuestReceiverScalarFieldEnum[]
  }

  /**
   * GuestFile.invalidGuestReceivers
   */
  export type GuestFile$invalidGuestReceiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverInclude<ExtArgs> | null
    where?: InvalidGuestReceiverWhereInput
    orderBy?: InvalidGuestReceiverOrderByWithRelationInput | InvalidGuestReceiverOrderByWithRelationInput[]
    cursor?: InvalidGuestReceiverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvalidGuestReceiverScalarFieldEnum | InvalidGuestReceiverScalarFieldEnum[]
  }

  /**
   * GuestFile without action
   */
  export type GuestFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestFile
     */
    select?: GuestFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestFile
     */
    omit?: GuestFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestFileInclude<ExtArgs> | null
  }


  /**
   * Model GuestReceiver
   */

  export type AggregateGuestReceiver = {
    _count: GuestReceiverCountAggregateOutputType | null
    _min: GuestReceiverMinAggregateOutputType | null
    _max: GuestReceiverMaxAggregateOutputType | null
  }

  export type GuestReceiverMinAggregateOutputType = {
    id: string | null
    guestFileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type GuestReceiverMaxAggregateOutputType = {
    id: string | null
    guestFileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type GuestReceiverCountAggregateOutputType = {
    id: number
    guestFileId: number
    firstName: number
    lastName: number
    province: number
    district: number
    municipality: number
    phoneNumber: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type GuestReceiverMinAggregateInputType = {
    id?: true
    guestFileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
  }

  export type GuestReceiverMaxAggregateInputType = {
    id?: true
    guestFileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
  }

  export type GuestReceiverCountAggregateInputType = {
    id?: true
    guestFileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type GuestReceiverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestReceiver to aggregate.
     */
    where?: GuestReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestReceivers to fetch.
     */
    orderBy?: GuestReceiverOrderByWithRelationInput | GuestReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestReceivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestReceivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuestReceivers
    **/
    _count?: true | GuestReceiverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestReceiverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestReceiverMaxAggregateInputType
  }

  export type GetGuestReceiverAggregateType<T extends GuestReceiverAggregateArgs> = {
        [P in keyof T & keyof AggregateGuestReceiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuestReceiver[P]>
      : GetScalarType<T[P], AggregateGuestReceiver[P]>
  }




  export type GuestReceiverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestReceiverWhereInput
    orderBy?: GuestReceiverOrderByWithAggregationInput | GuestReceiverOrderByWithAggregationInput[]
    by: GuestReceiverScalarFieldEnum[] | GuestReceiverScalarFieldEnum
    having?: GuestReceiverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestReceiverCountAggregateInputType | true
    _min?: GuestReceiverMinAggregateInputType
    _max?: GuestReceiverMaxAggregateInputType
  }

  export type GuestReceiverGroupByOutputType = {
    id: string
    guestFileId: string
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string
    isDeleted: boolean
    createdAt: Date
    _count: GuestReceiverCountAggregateOutputType | null
    _min: GuestReceiverMinAggregateOutputType | null
    _max: GuestReceiverMaxAggregateOutputType | null
  }

  type GetGuestReceiverGroupByPayload<T extends GuestReceiverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestReceiverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestReceiverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestReceiverGroupByOutputType[P]>
            : GetScalarType<T[P], GuestReceiverGroupByOutputType[P]>
        }
      >
    >


  export type GuestReceiverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestFileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestReceiver"]>

  export type GuestReceiverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestFileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestReceiver"]>

  export type GuestReceiverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestFileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestReceiver"]>

  export type GuestReceiverSelectScalar = {
    id?: boolean
    guestFileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type GuestReceiverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guestFileId" | "firstName" | "lastName" | "province" | "district" | "municipality" | "phoneNumber" | "isDeleted" | "createdAt", ExtArgs["result"]["guestReceiver"]>
  export type GuestReceiverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }
  export type GuestReceiverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }
  export type GuestReceiverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }

  export type $GuestReceiverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuestReceiver"
    objects: {
      file: Prisma.$GuestFilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guestFileId: string
      firstName: string | null
      lastName: string | null
      province: string | null
      district: string | null
      municipality: string | null
      phoneNumber: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["guestReceiver"]>
    composites: {}
  }

  type GuestReceiverGetPayload<S extends boolean | null | undefined | GuestReceiverDefaultArgs> = $Result.GetResult<Prisma.$GuestReceiverPayload, S>

  type GuestReceiverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestReceiverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestReceiverCountAggregateInputType | true
    }

  export interface GuestReceiverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuestReceiver'], meta: { name: 'GuestReceiver' } }
    /**
     * Find zero or one GuestReceiver that matches the filter.
     * @param {GuestReceiverFindUniqueArgs} args - Arguments to find a GuestReceiver
     * @example
     * // Get one GuestReceiver
     * const guestReceiver = await prisma.guestReceiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestReceiverFindUniqueArgs>(args: SelectSubset<T, GuestReceiverFindUniqueArgs<ExtArgs>>): Prisma__GuestReceiverClient<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuestReceiver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestReceiverFindUniqueOrThrowArgs} args - Arguments to find a GuestReceiver
     * @example
     * // Get one GuestReceiver
     * const guestReceiver = await prisma.guestReceiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestReceiverFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestReceiverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestReceiverClient<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestReceiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestReceiverFindFirstArgs} args - Arguments to find a GuestReceiver
     * @example
     * // Get one GuestReceiver
     * const guestReceiver = await prisma.guestReceiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestReceiverFindFirstArgs>(args?: SelectSubset<T, GuestReceiverFindFirstArgs<ExtArgs>>): Prisma__GuestReceiverClient<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestReceiver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestReceiverFindFirstOrThrowArgs} args - Arguments to find a GuestReceiver
     * @example
     * // Get one GuestReceiver
     * const guestReceiver = await prisma.guestReceiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestReceiverFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestReceiverFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestReceiverClient<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuestReceivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestReceiverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuestReceivers
     * const guestReceivers = await prisma.guestReceiver.findMany()
     * 
     * // Get first 10 GuestReceivers
     * const guestReceivers = await prisma.guestReceiver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestReceiverWithIdOnly = await prisma.guestReceiver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestReceiverFindManyArgs>(args?: SelectSubset<T, GuestReceiverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuestReceiver.
     * @param {GuestReceiverCreateArgs} args - Arguments to create a GuestReceiver.
     * @example
     * // Create one GuestReceiver
     * const GuestReceiver = await prisma.guestReceiver.create({
     *   data: {
     *     // ... data to create a GuestReceiver
     *   }
     * })
     * 
     */
    create<T extends GuestReceiverCreateArgs>(args: SelectSubset<T, GuestReceiverCreateArgs<ExtArgs>>): Prisma__GuestReceiverClient<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuestReceivers.
     * @param {GuestReceiverCreateManyArgs} args - Arguments to create many GuestReceivers.
     * @example
     * // Create many GuestReceivers
     * const guestReceiver = await prisma.guestReceiver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestReceiverCreateManyArgs>(args?: SelectSubset<T, GuestReceiverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuestReceivers and returns the data saved in the database.
     * @param {GuestReceiverCreateManyAndReturnArgs} args - Arguments to create many GuestReceivers.
     * @example
     * // Create many GuestReceivers
     * const guestReceiver = await prisma.guestReceiver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuestReceivers and only return the `id`
     * const guestReceiverWithIdOnly = await prisma.guestReceiver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestReceiverCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestReceiverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuestReceiver.
     * @param {GuestReceiverDeleteArgs} args - Arguments to delete one GuestReceiver.
     * @example
     * // Delete one GuestReceiver
     * const GuestReceiver = await prisma.guestReceiver.delete({
     *   where: {
     *     // ... filter to delete one GuestReceiver
     *   }
     * })
     * 
     */
    delete<T extends GuestReceiverDeleteArgs>(args: SelectSubset<T, GuestReceiverDeleteArgs<ExtArgs>>): Prisma__GuestReceiverClient<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuestReceiver.
     * @param {GuestReceiverUpdateArgs} args - Arguments to update one GuestReceiver.
     * @example
     * // Update one GuestReceiver
     * const guestReceiver = await prisma.guestReceiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestReceiverUpdateArgs>(args: SelectSubset<T, GuestReceiverUpdateArgs<ExtArgs>>): Prisma__GuestReceiverClient<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuestReceivers.
     * @param {GuestReceiverDeleteManyArgs} args - Arguments to filter GuestReceivers to delete.
     * @example
     * // Delete a few GuestReceivers
     * const { count } = await prisma.guestReceiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestReceiverDeleteManyArgs>(args?: SelectSubset<T, GuestReceiverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestReceivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestReceiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuestReceivers
     * const guestReceiver = await prisma.guestReceiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestReceiverUpdateManyArgs>(args: SelectSubset<T, GuestReceiverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestReceivers and returns the data updated in the database.
     * @param {GuestReceiverUpdateManyAndReturnArgs} args - Arguments to update many GuestReceivers.
     * @example
     * // Update many GuestReceivers
     * const guestReceiver = await prisma.guestReceiver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuestReceivers and only return the `id`
     * const guestReceiverWithIdOnly = await prisma.guestReceiver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestReceiverUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestReceiverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuestReceiver.
     * @param {GuestReceiverUpsertArgs} args - Arguments to update or create a GuestReceiver.
     * @example
     * // Update or create a GuestReceiver
     * const guestReceiver = await prisma.guestReceiver.upsert({
     *   create: {
     *     // ... data to create a GuestReceiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuestReceiver we want to update
     *   }
     * })
     */
    upsert<T extends GuestReceiverUpsertArgs>(args: SelectSubset<T, GuestReceiverUpsertArgs<ExtArgs>>): Prisma__GuestReceiverClient<$Result.GetResult<Prisma.$GuestReceiverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuestReceivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestReceiverCountArgs} args - Arguments to filter GuestReceivers to count.
     * @example
     * // Count the number of GuestReceivers
     * const count = await prisma.guestReceiver.count({
     *   where: {
     *     // ... the filter for the GuestReceivers we want to count
     *   }
     * })
    **/
    count<T extends GuestReceiverCountArgs>(
      args?: Subset<T, GuestReceiverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestReceiverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuestReceiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestReceiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestReceiverAggregateArgs>(args: Subset<T, GuestReceiverAggregateArgs>): Prisma.PrismaPromise<GetGuestReceiverAggregateType<T>>

    /**
     * Group by GuestReceiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestReceiverGroupByArgs} args - Group by arguments.
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
      T extends GuestReceiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestReceiverGroupByArgs['orderBy'] }
        : { orderBy?: GuestReceiverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestReceiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestReceiverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuestReceiver model
   */
  readonly fields: GuestReceiverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuestReceiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestReceiverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends GuestFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestFileDefaultArgs<ExtArgs>>): Prisma__GuestFileClient<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GuestReceiver model
   */
  interface GuestReceiverFieldRefs {
    readonly id: FieldRef<"GuestReceiver", 'String'>
    readonly guestFileId: FieldRef<"GuestReceiver", 'String'>
    readonly firstName: FieldRef<"GuestReceiver", 'String'>
    readonly lastName: FieldRef<"GuestReceiver", 'String'>
    readonly province: FieldRef<"GuestReceiver", 'String'>
    readonly district: FieldRef<"GuestReceiver", 'String'>
    readonly municipality: FieldRef<"GuestReceiver", 'String'>
    readonly phoneNumber: FieldRef<"GuestReceiver", 'String'>
    readonly isDeleted: FieldRef<"GuestReceiver", 'Boolean'>
    readonly createdAt: FieldRef<"GuestReceiver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuestReceiver findUnique
   */
  export type GuestReceiverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverInclude<ExtArgs> | null
    /**
     * Filter, which GuestReceiver to fetch.
     */
    where: GuestReceiverWhereUniqueInput
  }

  /**
   * GuestReceiver findUniqueOrThrow
   */
  export type GuestReceiverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverInclude<ExtArgs> | null
    /**
     * Filter, which GuestReceiver to fetch.
     */
    where: GuestReceiverWhereUniqueInput
  }

  /**
   * GuestReceiver findFirst
   */
  export type GuestReceiverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverInclude<ExtArgs> | null
    /**
     * Filter, which GuestReceiver to fetch.
     */
    where?: GuestReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestReceivers to fetch.
     */
    orderBy?: GuestReceiverOrderByWithRelationInput | GuestReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestReceivers.
     */
    cursor?: GuestReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestReceivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestReceivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestReceivers.
     */
    distinct?: GuestReceiverScalarFieldEnum | GuestReceiverScalarFieldEnum[]
  }

  /**
   * GuestReceiver findFirstOrThrow
   */
  export type GuestReceiverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverInclude<ExtArgs> | null
    /**
     * Filter, which GuestReceiver to fetch.
     */
    where?: GuestReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestReceivers to fetch.
     */
    orderBy?: GuestReceiverOrderByWithRelationInput | GuestReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestReceivers.
     */
    cursor?: GuestReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestReceivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestReceivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestReceivers.
     */
    distinct?: GuestReceiverScalarFieldEnum | GuestReceiverScalarFieldEnum[]
  }

  /**
   * GuestReceiver findMany
   */
  export type GuestReceiverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverInclude<ExtArgs> | null
    /**
     * Filter, which GuestReceivers to fetch.
     */
    where?: GuestReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestReceivers to fetch.
     */
    orderBy?: GuestReceiverOrderByWithRelationInput | GuestReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuestReceivers.
     */
    cursor?: GuestReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestReceivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestReceivers.
     */
    skip?: number
    distinct?: GuestReceiverScalarFieldEnum | GuestReceiverScalarFieldEnum[]
  }

  /**
   * GuestReceiver create
   */
  export type GuestReceiverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverInclude<ExtArgs> | null
    /**
     * The data needed to create a GuestReceiver.
     */
    data: XOR<GuestReceiverCreateInput, GuestReceiverUncheckedCreateInput>
  }

  /**
   * GuestReceiver createMany
   */
  export type GuestReceiverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuestReceivers.
     */
    data: GuestReceiverCreateManyInput | GuestReceiverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuestReceiver createManyAndReturn
   */
  export type GuestReceiverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * The data used to create many GuestReceivers.
     */
    data: GuestReceiverCreateManyInput | GuestReceiverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestReceiver update
   */
  export type GuestReceiverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverInclude<ExtArgs> | null
    /**
     * The data needed to update a GuestReceiver.
     */
    data: XOR<GuestReceiverUpdateInput, GuestReceiverUncheckedUpdateInput>
    /**
     * Choose, which GuestReceiver to update.
     */
    where: GuestReceiverWhereUniqueInput
  }

  /**
   * GuestReceiver updateMany
   */
  export type GuestReceiverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuestReceivers.
     */
    data: XOR<GuestReceiverUpdateManyMutationInput, GuestReceiverUncheckedUpdateManyInput>
    /**
     * Filter which GuestReceivers to update
     */
    where?: GuestReceiverWhereInput
    /**
     * Limit how many GuestReceivers to update.
     */
    limit?: number
  }

  /**
   * GuestReceiver updateManyAndReturn
   */
  export type GuestReceiverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * The data used to update GuestReceivers.
     */
    data: XOR<GuestReceiverUpdateManyMutationInput, GuestReceiverUncheckedUpdateManyInput>
    /**
     * Filter which GuestReceivers to update
     */
    where?: GuestReceiverWhereInput
    /**
     * Limit how many GuestReceivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestReceiver upsert
   */
  export type GuestReceiverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverInclude<ExtArgs> | null
    /**
     * The filter to search for the GuestReceiver to update in case it exists.
     */
    where: GuestReceiverWhereUniqueInput
    /**
     * In case the GuestReceiver found by the `where` argument doesn't exist, create a new GuestReceiver with this data.
     */
    create: XOR<GuestReceiverCreateInput, GuestReceiverUncheckedCreateInput>
    /**
     * In case the GuestReceiver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestReceiverUpdateInput, GuestReceiverUncheckedUpdateInput>
  }

  /**
   * GuestReceiver delete
   */
  export type GuestReceiverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverInclude<ExtArgs> | null
    /**
     * Filter which GuestReceiver to delete.
     */
    where: GuestReceiverWhereUniqueInput
  }

  /**
   * GuestReceiver deleteMany
   */
  export type GuestReceiverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestReceivers to delete
     */
    where?: GuestReceiverWhereInput
    /**
     * Limit how many GuestReceivers to delete.
     */
    limit?: number
  }

  /**
   * GuestReceiver without action
   */
  export type GuestReceiverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestReceiver
     */
    select?: GuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestReceiver
     */
    omit?: GuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestReceiverInclude<ExtArgs> | null
  }


  /**
   * Model InvalidGuestReceiver
   */

  export type AggregateInvalidGuestReceiver = {
    _count: InvalidGuestReceiverCountAggregateOutputType | null
    _min: InvalidGuestReceiverMinAggregateOutputType | null
    _max: InvalidGuestReceiverMaxAggregateOutputType | null
  }

  export type InvalidGuestReceiverMinAggregateOutputType = {
    id: string | null
    guestFileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type InvalidGuestReceiverMaxAggregateOutputType = {
    id: string | null
    guestFileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type InvalidGuestReceiverCountAggregateOutputType = {
    id: number
    guestFileId: number
    firstName: number
    lastName: number
    province: number
    district: number
    municipality: number
    phoneNumber: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type InvalidGuestReceiverMinAggregateInputType = {
    id?: true
    guestFileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
  }

  export type InvalidGuestReceiverMaxAggregateInputType = {
    id?: true
    guestFileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
  }

  export type InvalidGuestReceiverCountAggregateInputType = {
    id?: true
    guestFileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type InvalidGuestReceiverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvalidGuestReceiver to aggregate.
     */
    where?: InvalidGuestReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidGuestReceivers to fetch.
     */
    orderBy?: InvalidGuestReceiverOrderByWithRelationInput | InvalidGuestReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvalidGuestReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidGuestReceivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidGuestReceivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvalidGuestReceivers
    **/
    _count?: true | InvalidGuestReceiverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvalidGuestReceiverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvalidGuestReceiverMaxAggregateInputType
  }

  export type GetInvalidGuestReceiverAggregateType<T extends InvalidGuestReceiverAggregateArgs> = {
        [P in keyof T & keyof AggregateInvalidGuestReceiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvalidGuestReceiver[P]>
      : GetScalarType<T[P], AggregateInvalidGuestReceiver[P]>
  }




  export type InvalidGuestReceiverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvalidGuestReceiverWhereInput
    orderBy?: InvalidGuestReceiverOrderByWithAggregationInput | InvalidGuestReceiverOrderByWithAggregationInput[]
    by: InvalidGuestReceiverScalarFieldEnum[] | InvalidGuestReceiverScalarFieldEnum
    having?: InvalidGuestReceiverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvalidGuestReceiverCountAggregateInputType | true
    _min?: InvalidGuestReceiverMinAggregateInputType
    _max?: InvalidGuestReceiverMaxAggregateInputType
  }

  export type InvalidGuestReceiverGroupByOutputType = {
    id: string
    guestFileId: string
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string
    isDeleted: boolean
    createdAt: Date
    _count: InvalidGuestReceiverCountAggregateOutputType | null
    _min: InvalidGuestReceiverMinAggregateOutputType | null
    _max: InvalidGuestReceiverMaxAggregateOutputType | null
  }

  type GetInvalidGuestReceiverGroupByPayload<T extends InvalidGuestReceiverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvalidGuestReceiverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvalidGuestReceiverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvalidGuestReceiverGroupByOutputType[P]>
            : GetScalarType<T[P], InvalidGuestReceiverGroupByOutputType[P]>
        }
      >
    >


  export type InvalidGuestReceiverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestFileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invalidGuestReceiver"]>

  export type InvalidGuestReceiverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestFileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invalidGuestReceiver"]>

  export type InvalidGuestReceiverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestFileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invalidGuestReceiver"]>

  export type InvalidGuestReceiverSelectScalar = {
    id?: boolean
    guestFileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type InvalidGuestReceiverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guestFileId" | "firstName" | "lastName" | "province" | "district" | "municipality" | "phoneNumber" | "isDeleted" | "createdAt", ExtArgs["result"]["invalidGuestReceiver"]>
  export type InvalidGuestReceiverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }
  export type InvalidGuestReceiverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }
  export type InvalidGuestReceiverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | GuestFileDefaultArgs<ExtArgs>
  }

  export type $InvalidGuestReceiverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvalidGuestReceiver"
    objects: {
      file: Prisma.$GuestFilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guestFileId: string
      firstName: string | null
      lastName: string | null
      province: string | null
      district: string | null
      municipality: string | null
      phoneNumber: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["invalidGuestReceiver"]>
    composites: {}
  }

  type InvalidGuestReceiverGetPayload<S extends boolean | null | undefined | InvalidGuestReceiverDefaultArgs> = $Result.GetResult<Prisma.$InvalidGuestReceiverPayload, S>

  type InvalidGuestReceiverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvalidGuestReceiverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvalidGuestReceiverCountAggregateInputType | true
    }

  export interface InvalidGuestReceiverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvalidGuestReceiver'], meta: { name: 'InvalidGuestReceiver' } }
    /**
     * Find zero or one InvalidGuestReceiver that matches the filter.
     * @param {InvalidGuestReceiverFindUniqueArgs} args - Arguments to find a InvalidGuestReceiver
     * @example
     * // Get one InvalidGuestReceiver
     * const invalidGuestReceiver = await prisma.invalidGuestReceiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvalidGuestReceiverFindUniqueArgs>(args: SelectSubset<T, InvalidGuestReceiverFindUniqueArgs<ExtArgs>>): Prisma__InvalidGuestReceiverClient<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvalidGuestReceiver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvalidGuestReceiverFindUniqueOrThrowArgs} args - Arguments to find a InvalidGuestReceiver
     * @example
     * // Get one InvalidGuestReceiver
     * const invalidGuestReceiver = await prisma.invalidGuestReceiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvalidGuestReceiverFindUniqueOrThrowArgs>(args: SelectSubset<T, InvalidGuestReceiverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvalidGuestReceiverClient<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvalidGuestReceiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidGuestReceiverFindFirstArgs} args - Arguments to find a InvalidGuestReceiver
     * @example
     * // Get one InvalidGuestReceiver
     * const invalidGuestReceiver = await prisma.invalidGuestReceiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvalidGuestReceiverFindFirstArgs>(args?: SelectSubset<T, InvalidGuestReceiverFindFirstArgs<ExtArgs>>): Prisma__InvalidGuestReceiverClient<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvalidGuestReceiver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidGuestReceiverFindFirstOrThrowArgs} args - Arguments to find a InvalidGuestReceiver
     * @example
     * // Get one InvalidGuestReceiver
     * const invalidGuestReceiver = await prisma.invalidGuestReceiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvalidGuestReceiverFindFirstOrThrowArgs>(args?: SelectSubset<T, InvalidGuestReceiverFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvalidGuestReceiverClient<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvalidGuestReceivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidGuestReceiverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvalidGuestReceivers
     * const invalidGuestReceivers = await prisma.invalidGuestReceiver.findMany()
     * 
     * // Get first 10 InvalidGuestReceivers
     * const invalidGuestReceivers = await prisma.invalidGuestReceiver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invalidGuestReceiverWithIdOnly = await prisma.invalidGuestReceiver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvalidGuestReceiverFindManyArgs>(args?: SelectSubset<T, InvalidGuestReceiverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvalidGuestReceiver.
     * @param {InvalidGuestReceiverCreateArgs} args - Arguments to create a InvalidGuestReceiver.
     * @example
     * // Create one InvalidGuestReceiver
     * const InvalidGuestReceiver = await prisma.invalidGuestReceiver.create({
     *   data: {
     *     // ... data to create a InvalidGuestReceiver
     *   }
     * })
     * 
     */
    create<T extends InvalidGuestReceiverCreateArgs>(args: SelectSubset<T, InvalidGuestReceiverCreateArgs<ExtArgs>>): Prisma__InvalidGuestReceiverClient<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvalidGuestReceivers.
     * @param {InvalidGuestReceiverCreateManyArgs} args - Arguments to create many InvalidGuestReceivers.
     * @example
     * // Create many InvalidGuestReceivers
     * const invalidGuestReceiver = await prisma.invalidGuestReceiver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvalidGuestReceiverCreateManyArgs>(args?: SelectSubset<T, InvalidGuestReceiverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvalidGuestReceivers and returns the data saved in the database.
     * @param {InvalidGuestReceiverCreateManyAndReturnArgs} args - Arguments to create many InvalidGuestReceivers.
     * @example
     * // Create many InvalidGuestReceivers
     * const invalidGuestReceiver = await prisma.invalidGuestReceiver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvalidGuestReceivers and only return the `id`
     * const invalidGuestReceiverWithIdOnly = await prisma.invalidGuestReceiver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvalidGuestReceiverCreateManyAndReturnArgs>(args?: SelectSubset<T, InvalidGuestReceiverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvalidGuestReceiver.
     * @param {InvalidGuestReceiverDeleteArgs} args - Arguments to delete one InvalidGuestReceiver.
     * @example
     * // Delete one InvalidGuestReceiver
     * const InvalidGuestReceiver = await prisma.invalidGuestReceiver.delete({
     *   where: {
     *     // ... filter to delete one InvalidGuestReceiver
     *   }
     * })
     * 
     */
    delete<T extends InvalidGuestReceiverDeleteArgs>(args: SelectSubset<T, InvalidGuestReceiverDeleteArgs<ExtArgs>>): Prisma__InvalidGuestReceiverClient<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvalidGuestReceiver.
     * @param {InvalidGuestReceiverUpdateArgs} args - Arguments to update one InvalidGuestReceiver.
     * @example
     * // Update one InvalidGuestReceiver
     * const invalidGuestReceiver = await prisma.invalidGuestReceiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvalidGuestReceiverUpdateArgs>(args: SelectSubset<T, InvalidGuestReceiverUpdateArgs<ExtArgs>>): Prisma__InvalidGuestReceiverClient<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvalidGuestReceivers.
     * @param {InvalidGuestReceiverDeleteManyArgs} args - Arguments to filter InvalidGuestReceivers to delete.
     * @example
     * // Delete a few InvalidGuestReceivers
     * const { count } = await prisma.invalidGuestReceiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvalidGuestReceiverDeleteManyArgs>(args?: SelectSubset<T, InvalidGuestReceiverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvalidGuestReceivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidGuestReceiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvalidGuestReceivers
     * const invalidGuestReceiver = await prisma.invalidGuestReceiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvalidGuestReceiverUpdateManyArgs>(args: SelectSubset<T, InvalidGuestReceiverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvalidGuestReceivers and returns the data updated in the database.
     * @param {InvalidGuestReceiverUpdateManyAndReturnArgs} args - Arguments to update many InvalidGuestReceivers.
     * @example
     * // Update many InvalidGuestReceivers
     * const invalidGuestReceiver = await prisma.invalidGuestReceiver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvalidGuestReceivers and only return the `id`
     * const invalidGuestReceiverWithIdOnly = await prisma.invalidGuestReceiver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvalidGuestReceiverUpdateManyAndReturnArgs>(args: SelectSubset<T, InvalidGuestReceiverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvalidGuestReceiver.
     * @param {InvalidGuestReceiverUpsertArgs} args - Arguments to update or create a InvalidGuestReceiver.
     * @example
     * // Update or create a InvalidGuestReceiver
     * const invalidGuestReceiver = await prisma.invalidGuestReceiver.upsert({
     *   create: {
     *     // ... data to create a InvalidGuestReceiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvalidGuestReceiver we want to update
     *   }
     * })
     */
    upsert<T extends InvalidGuestReceiverUpsertArgs>(args: SelectSubset<T, InvalidGuestReceiverUpsertArgs<ExtArgs>>): Prisma__InvalidGuestReceiverClient<$Result.GetResult<Prisma.$InvalidGuestReceiverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvalidGuestReceivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidGuestReceiverCountArgs} args - Arguments to filter InvalidGuestReceivers to count.
     * @example
     * // Count the number of InvalidGuestReceivers
     * const count = await prisma.invalidGuestReceiver.count({
     *   where: {
     *     // ... the filter for the InvalidGuestReceivers we want to count
     *   }
     * })
    **/
    count<T extends InvalidGuestReceiverCountArgs>(
      args?: Subset<T, InvalidGuestReceiverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvalidGuestReceiverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvalidGuestReceiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidGuestReceiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvalidGuestReceiverAggregateArgs>(args: Subset<T, InvalidGuestReceiverAggregateArgs>): Prisma.PrismaPromise<GetInvalidGuestReceiverAggregateType<T>>

    /**
     * Group by InvalidGuestReceiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidGuestReceiverGroupByArgs} args - Group by arguments.
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
      T extends InvalidGuestReceiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvalidGuestReceiverGroupByArgs['orderBy'] }
        : { orderBy?: InvalidGuestReceiverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvalidGuestReceiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvalidGuestReceiverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvalidGuestReceiver model
   */
  readonly fields: InvalidGuestReceiverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvalidGuestReceiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvalidGuestReceiverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends GuestFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestFileDefaultArgs<ExtArgs>>): Prisma__GuestFileClient<$Result.GetResult<Prisma.$GuestFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InvalidGuestReceiver model
   */
  interface InvalidGuestReceiverFieldRefs {
    readonly id: FieldRef<"InvalidGuestReceiver", 'String'>
    readonly guestFileId: FieldRef<"InvalidGuestReceiver", 'String'>
    readonly firstName: FieldRef<"InvalidGuestReceiver", 'String'>
    readonly lastName: FieldRef<"InvalidGuestReceiver", 'String'>
    readonly province: FieldRef<"InvalidGuestReceiver", 'String'>
    readonly district: FieldRef<"InvalidGuestReceiver", 'String'>
    readonly municipality: FieldRef<"InvalidGuestReceiver", 'String'>
    readonly phoneNumber: FieldRef<"InvalidGuestReceiver", 'String'>
    readonly isDeleted: FieldRef<"InvalidGuestReceiver", 'Boolean'>
    readonly createdAt: FieldRef<"InvalidGuestReceiver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvalidGuestReceiver findUnique
   */
  export type InvalidGuestReceiverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverInclude<ExtArgs> | null
    /**
     * Filter, which InvalidGuestReceiver to fetch.
     */
    where: InvalidGuestReceiverWhereUniqueInput
  }

  /**
   * InvalidGuestReceiver findUniqueOrThrow
   */
  export type InvalidGuestReceiverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverInclude<ExtArgs> | null
    /**
     * Filter, which InvalidGuestReceiver to fetch.
     */
    where: InvalidGuestReceiverWhereUniqueInput
  }

  /**
   * InvalidGuestReceiver findFirst
   */
  export type InvalidGuestReceiverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverInclude<ExtArgs> | null
    /**
     * Filter, which InvalidGuestReceiver to fetch.
     */
    where?: InvalidGuestReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidGuestReceivers to fetch.
     */
    orderBy?: InvalidGuestReceiverOrderByWithRelationInput | InvalidGuestReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvalidGuestReceivers.
     */
    cursor?: InvalidGuestReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidGuestReceivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidGuestReceivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvalidGuestReceivers.
     */
    distinct?: InvalidGuestReceiverScalarFieldEnum | InvalidGuestReceiverScalarFieldEnum[]
  }

  /**
   * InvalidGuestReceiver findFirstOrThrow
   */
  export type InvalidGuestReceiverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverInclude<ExtArgs> | null
    /**
     * Filter, which InvalidGuestReceiver to fetch.
     */
    where?: InvalidGuestReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidGuestReceivers to fetch.
     */
    orderBy?: InvalidGuestReceiverOrderByWithRelationInput | InvalidGuestReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvalidGuestReceivers.
     */
    cursor?: InvalidGuestReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidGuestReceivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidGuestReceivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvalidGuestReceivers.
     */
    distinct?: InvalidGuestReceiverScalarFieldEnum | InvalidGuestReceiverScalarFieldEnum[]
  }

  /**
   * InvalidGuestReceiver findMany
   */
  export type InvalidGuestReceiverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverInclude<ExtArgs> | null
    /**
     * Filter, which InvalidGuestReceivers to fetch.
     */
    where?: InvalidGuestReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidGuestReceivers to fetch.
     */
    orderBy?: InvalidGuestReceiverOrderByWithRelationInput | InvalidGuestReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvalidGuestReceivers.
     */
    cursor?: InvalidGuestReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidGuestReceivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidGuestReceivers.
     */
    skip?: number
    distinct?: InvalidGuestReceiverScalarFieldEnum | InvalidGuestReceiverScalarFieldEnum[]
  }

  /**
   * InvalidGuestReceiver create
   */
  export type InvalidGuestReceiverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverInclude<ExtArgs> | null
    /**
     * The data needed to create a InvalidGuestReceiver.
     */
    data: XOR<InvalidGuestReceiverCreateInput, InvalidGuestReceiverUncheckedCreateInput>
  }

  /**
   * InvalidGuestReceiver createMany
   */
  export type InvalidGuestReceiverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvalidGuestReceivers.
     */
    data: InvalidGuestReceiverCreateManyInput | InvalidGuestReceiverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvalidGuestReceiver createManyAndReturn
   */
  export type InvalidGuestReceiverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * The data used to create many InvalidGuestReceivers.
     */
    data: InvalidGuestReceiverCreateManyInput | InvalidGuestReceiverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvalidGuestReceiver update
   */
  export type InvalidGuestReceiverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverInclude<ExtArgs> | null
    /**
     * The data needed to update a InvalidGuestReceiver.
     */
    data: XOR<InvalidGuestReceiverUpdateInput, InvalidGuestReceiverUncheckedUpdateInput>
    /**
     * Choose, which InvalidGuestReceiver to update.
     */
    where: InvalidGuestReceiverWhereUniqueInput
  }

  /**
   * InvalidGuestReceiver updateMany
   */
  export type InvalidGuestReceiverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvalidGuestReceivers.
     */
    data: XOR<InvalidGuestReceiverUpdateManyMutationInput, InvalidGuestReceiverUncheckedUpdateManyInput>
    /**
     * Filter which InvalidGuestReceivers to update
     */
    where?: InvalidGuestReceiverWhereInput
    /**
     * Limit how many InvalidGuestReceivers to update.
     */
    limit?: number
  }

  /**
   * InvalidGuestReceiver updateManyAndReturn
   */
  export type InvalidGuestReceiverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * The data used to update InvalidGuestReceivers.
     */
    data: XOR<InvalidGuestReceiverUpdateManyMutationInput, InvalidGuestReceiverUncheckedUpdateManyInput>
    /**
     * Filter which InvalidGuestReceivers to update
     */
    where?: InvalidGuestReceiverWhereInput
    /**
     * Limit how many InvalidGuestReceivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvalidGuestReceiver upsert
   */
  export type InvalidGuestReceiverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverInclude<ExtArgs> | null
    /**
     * The filter to search for the InvalidGuestReceiver to update in case it exists.
     */
    where: InvalidGuestReceiverWhereUniqueInput
    /**
     * In case the InvalidGuestReceiver found by the `where` argument doesn't exist, create a new InvalidGuestReceiver with this data.
     */
    create: XOR<InvalidGuestReceiverCreateInput, InvalidGuestReceiverUncheckedCreateInput>
    /**
     * In case the InvalidGuestReceiver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvalidGuestReceiverUpdateInput, InvalidGuestReceiverUncheckedUpdateInput>
  }

  /**
   * InvalidGuestReceiver delete
   */
  export type InvalidGuestReceiverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverInclude<ExtArgs> | null
    /**
     * Filter which InvalidGuestReceiver to delete.
     */
    where: InvalidGuestReceiverWhereUniqueInput
  }

  /**
   * InvalidGuestReceiver deleteMany
   */
  export type InvalidGuestReceiverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvalidGuestReceivers to delete
     */
    where?: InvalidGuestReceiverWhereInput
    /**
     * Limit how many InvalidGuestReceivers to delete.
     */
    limit?: number
  }

  /**
   * InvalidGuestReceiver without action
   */
  export type InvalidGuestReceiverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidGuestReceiver
     */
    select?: InvalidGuestReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvalidGuestReceiver
     */
    omit?: InvalidGuestReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvalidGuestReceiverInclude<ExtArgs> | null
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
    email: 'email',
    phoneNumber: 'phoneNumber',
    hashedPassword: 'hashedPassword',
    firstName: 'firstName',
    lastName: 'lastName',
    organizationName: 'organizationName',
    profileImage: 'profileImage',
    accountType: 'accountType',
    isAccountVerified: 'isAccountVerified',
    role: 'role',
    citizenshipNumber: 'citizenshipNumber',
    citizenshipImage: 'citizenshipImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    otp: 'otp',
    otpExpires: 'otpExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    path: 'path',
    numberOfReceivers: 'numberOfReceivers',
    invalidRowsPath: 'invalidRowsPath',
    sizeInBytes: 'sizeInBytes',
    type: 'type',
    uploadStatus: 'uploadStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const Upload_ReceiverScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    firstName: 'firstName',
    lastName: 'lastName',
    province: 'province',
    district: 'district',
    municipality: 'municipality',
    phoneNumber: 'phoneNumber',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Upload_ReceiverScalarFieldEnum = (typeof Upload_ReceiverScalarFieldEnum)[keyof typeof Upload_ReceiverScalarFieldEnum]


  export const Invalid_Upload_ReceiverScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    firstName: 'firstName',
    lastName: 'lastName',
    province: 'province',
    district: 'district',
    municipality: 'municipality',
    phoneNumber: 'phoneNumber',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Invalid_Upload_ReceiverScalarFieldEnum = (typeof Invalid_Upload_ReceiverScalarFieldEnum)[keyof typeof Invalid_Upload_ReceiverScalarFieldEnum]


  export const ReceiverScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    province: 'province',
    district: 'district',
    municipality: 'municipality',
    phoneNumber: 'phoneNumber',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    receiverMessageId: 'receiverMessageId',
    userId: 'userId'
  };

  export type ReceiverScalarFieldEnum = (typeof ReceiverScalarFieldEnum)[keyof typeof ReceiverScalarFieldEnum]


  export const Receiver_MessageScalarFieldEnum: {
    id: 'id',
    textMessage: 'textMessage',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Receiver_MessageScalarFieldEnum = (typeof Receiver_MessageScalarFieldEnum)[keyof typeof Receiver_MessageScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    messageText: 'messageText',
    status: 'status',
    deliveryStatus: 'deliveryStatus',
    province: 'province',
    district: 'district',
    municipality: 'municipality',
    fileId: 'fileId',
    recipientsNumber: 'recipientsNumber',
    deliveredNumber: 'deliveredNumber',
    failedNumber: 'failedNumber',
    deliveryRate: 'deliveryRate',
    totalSmsCost: 'totalSmsCost',
    paymentReceiptImage: 'paymentReceiptImage',
    paid: 'paid',
    submitDate: 'submitDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const QuickSMSSendScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    toPhoneNumber: 'toPhoneNumber',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuickSMSSendScalarFieldEnum = (typeof QuickSMSSendScalarFieldEnum)[keyof typeof QuickSMSSendScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    paidOn: 'paidOn',
    isPaid: 'isPaid',
    isSmsSent: 'isSmsSent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    sessionId: 'sessionId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const GuestFileScalarFieldEnum: {
    id: 'id',
    guestId: 'guestId',
    name: 'name',
    path: 'path',
    sizeInBytes: 'sizeInBytes',
    type: 'type',
    uploadStatus: 'uploadStatus',
    numberOfReceivers: 'numberOfReceivers',
    invalidRowsPath: 'invalidRowsPath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuestFileScalarFieldEnum = (typeof GuestFileScalarFieldEnum)[keyof typeof GuestFileScalarFieldEnum]


  export const GuestReceiverScalarFieldEnum: {
    id: 'id',
    guestFileId: 'guestFileId',
    firstName: 'firstName',
    lastName: 'lastName',
    province: 'province',
    district: 'district',
    municipality: 'municipality',
    phoneNumber: 'phoneNumber',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type GuestReceiverScalarFieldEnum = (typeof GuestReceiverScalarFieldEnum)[keyof typeof GuestReceiverScalarFieldEnum]


  export const InvalidGuestReceiverScalarFieldEnum: {
    id: 'id',
    guestFileId: 'guestFileId',
    firstName: 'firstName',
    lastName: 'lastName',
    province: 'province',
    district: 'district',
    municipality: 'municipality',
    phoneNumber: 'phoneNumber',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type InvalidGuestReceiverScalarFieldEnum = (typeof InvalidGuestReceiverScalarFieldEnum)[keyof typeof InvalidGuestReceiverScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'FileType'
   */
  export type EnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType'>
    


  /**
   * Reference to a field of type 'FileType[]'
   */
  export type ListEnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType[]'>
    


  /**
   * Reference to a field of type 'UploadStatus'
   */
  export type EnumUploadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UploadStatus'>
    


  /**
   * Reference to a field of type 'UploadStatus[]'
   */
  export type ListEnumUploadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UploadStatus[]'>
    


  /**
   * Reference to a field of type 'DeliveryStatus'
   */
  export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>
    


  /**
   * Reference to a field of type 'DeliveryStatus[]'
   */
  export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'QuickSendStatus'
   */
  export type EnumQuickSendStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuickSendStatus'>
    


  /**
   * Reference to a field of type 'QuickSendStatus[]'
   */
  export type ListEnumQuickSendStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuickSendStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    organizationName?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    accountType?: EnumAccountTypeNullableFilter<"User"> | $Enums.AccountType | null
    isAccountVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    citizenshipNumber?: StringNullableFilter<"User"> | string | null
    citizenshipImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    otp?: StringNullableFilter<"User"> | string | null
    otpExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    files?: FilesListRelationFilter
    receiver?: ReceiverListRelationFilter
    campaigns?: CampaignListRelationFilter
    quickSends?: QuickSMSSendListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    organizationName?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    isAccountVerified?: SortOrder
    role?: SortOrder
    citizenshipNumber?: SortOrderInput | SortOrder
    citizenshipImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpires?: SortOrderInput | SortOrder
    files?: FilesOrderByRelationAggregateInput
    receiver?: ReceiverOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
    quickSends?: QuickSMSSendOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashedPassword?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    organizationName?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    accountType?: EnumAccountTypeNullableFilter<"User"> | $Enums.AccountType | null
    isAccountVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    citizenshipNumber?: StringNullableFilter<"User"> | string | null
    citizenshipImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    otp?: StringNullableFilter<"User"> | string | null
    otpExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    files?: FilesListRelationFilter
    receiver?: ReceiverListRelationFilter
    campaigns?: CampaignListRelationFilter
    quickSends?: QuickSMSSendListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    organizationName?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    isAccountVerified?: SortOrder
    role?: SortOrder
    citizenshipNumber?: SortOrderInput | SortOrder
    citizenshipImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    organizationName?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    accountType?: EnumAccountTypeNullableWithAggregatesFilter<"User"> | $Enums.AccountType | null
    isAccountVerified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    citizenshipNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    citizenshipImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type FilesWhereInput = {
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    id?: StringFilter<"Files"> | string
    userId?: StringFilter<"Files"> | string
    name?: StringFilter<"Files"> | string
    path?: StringFilter<"Files"> | string
    numberOfReceivers?: IntNullableFilter<"Files"> | number | null
    invalidRowsPath?: StringNullableFilter<"Files"> | string | null
    sizeInBytes?: BigIntFilter<"Files"> | bigint | number
    type?: EnumFileTypeFilter<"Files"> | $Enums.FileType
    uploadStatus?: EnumUploadStatusFilter<"Files"> | $Enums.UploadStatus
    createdAt?: DateTimeFilter<"Files"> | Date | string
    updatedAt?: DateTimeFilter<"Files"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    receivers?: Upload_ReceiverListRelationFilter
    campaigns?: CampaignListRelationFilter
    invalidUploadReceivers?: Invalid_Upload_ReceiverListRelationFilter
  }

  export type FilesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    numberOfReceivers?: SortOrderInput | SortOrder
    invalidRowsPath?: SortOrderInput | SortOrder
    sizeInBytes?: SortOrder
    type?: SortOrder
    uploadStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    receivers?: Upload_ReceiverOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverOrderByRelationAggregateInput
  }

  export type FilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    userId?: StringFilter<"Files"> | string
    name?: StringFilter<"Files"> | string
    path?: StringFilter<"Files"> | string
    numberOfReceivers?: IntNullableFilter<"Files"> | number | null
    invalidRowsPath?: StringNullableFilter<"Files"> | string | null
    sizeInBytes?: BigIntFilter<"Files"> | bigint | number
    type?: EnumFileTypeFilter<"Files"> | $Enums.FileType
    uploadStatus?: EnumUploadStatusFilter<"Files"> | $Enums.UploadStatus
    createdAt?: DateTimeFilter<"Files"> | Date | string
    updatedAt?: DateTimeFilter<"Files"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    receivers?: Upload_ReceiverListRelationFilter
    campaigns?: CampaignListRelationFilter
    invalidUploadReceivers?: Invalid_Upload_ReceiverListRelationFilter
  }, "id">

  export type FilesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    numberOfReceivers?: SortOrderInput | SortOrder
    invalidRowsPath?: SortOrderInput | SortOrder
    sizeInBytes?: SortOrder
    type?: SortOrder
    uploadStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FilesCountOrderByAggregateInput
    _avg?: FilesAvgOrderByAggregateInput
    _max?: FilesMaxOrderByAggregateInput
    _min?: FilesMinOrderByAggregateInput
    _sum?: FilesSumOrderByAggregateInput
  }

  export type FilesScalarWhereWithAggregatesInput = {
    AND?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[]
    OR?: FilesScalarWhereWithAggregatesInput[]
    NOT?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Files"> | string
    userId?: StringWithAggregatesFilter<"Files"> | string
    name?: StringWithAggregatesFilter<"Files"> | string
    path?: StringWithAggregatesFilter<"Files"> | string
    numberOfReceivers?: IntNullableWithAggregatesFilter<"Files"> | number | null
    invalidRowsPath?: StringNullableWithAggregatesFilter<"Files"> | string | null
    sizeInBytes?: BigIntWithAggregatesFilter<"Files"> | bigint | number
    type?: EnumFileTypeWithAggregatesFilter<"Files"> | $Enums.FileType
    uploadStatus?: EnumUploadStatusWithAggregatesFilter<"Files"> | $Enums.UploadStatus
    createdAt?: DateTimeWithAggregatesFilter<"Files"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Files"> | Date | string
  }

  export type Upload_ReceiverWhereInput = {
    AND?: Upload_ReceiverWhereInput | Upload_ReceiverWhereInput[]
    OR?: Upload_ReceiverWhereInput[]
    NOT?: Upload_ReceiverWhereInput | Upload_ReceiverWhereInput[]
    id?: StringFilter<"Upload_Receiver"> | string
    fileId?: StringFilter<"Upload_Receiver"> | string
    firstName?: StringNullableFilter<"Upload_Receiver"> | string | null
    lastName?: StringNullableFilter<"Upload_Receiver"> | string | null
    province?: StringNullableFilter<"Upload_Receiver"> | string | null
    district?: StringNullableFilter<"Upload_Receiver"> | string | null
    municipality?: StringNullableFilter<"Upload_Receiver"> | string | null
    phoneNumber?: StringFilter<"Upload_Receiver"> | string
    isDeleted?: BoolFilter<"Upload_Receiver"> | boolean
    createdAt?: DateTimeFilter<"Upload_Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Upload_Receiver"> | Date | string
    file?: XOR<FilesScalarRelationFilter, FilesWhereInput>
  }

  export type Upload_ReceiverOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    file?: FilesOrderByWithRelationInput
  }

  export type Upload_ReceiverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fileId_phoneNumber?: Upload_ReceiverFileIdPhoneNumberCompoundUniqueInput
    AND?: Upload_ReceiverWhereInput | Upload_ReceiverWhereInput[]
    OR?: Upload_ReceiverWhereInput[]
    NOT?: Upload_ReceiverWhereInput | Upload_ReceiverWhereInput[]
    fileId?: StringFilter<"Upload_Receiver"> | string
    firstName?: StringNullableFilter<"Upload_Receiver"> | string | null
    lastName?: StringNullableFilter<"Upload_Receiver"> | string | null
    province?: StringNullableFilter<"Upload_Receiver"> | string | null
    district?: StringNullableFilter<"Upload_Receiver"> | string | null
    municipality?: StringNullableFilter<"Upload_Receiver"> | string | null
    phoneNumber?: StringFilter<"Upload_Receiver"> | string
    isDeleted?: BoolFilter<"Upload_Receiver"> | boolean
    createdAt?: DateTimeFilter<"Upload_Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Upload_Receiver"> | Date | string
    file?: XOR<FilesScalarRelationFilter, FilesWhereInput>
  }, "id" | "fileId_phoneNumber">

  export type Upload_ReceiverOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Upload_ReceiverCountOrderByAggregateInput
    _max?: Upload_ReceiverMaxOrderByAggregateInput
    _min?: Upload_ReceiverMinOrderByAggregateInput
  }

  export type Upload_ReceiverScalarWhereWithAggregatesInput = {
    AND?: Upload_ReceiverScalarWhereWithAggregatesInput | Upload_ReceiverScalarWhereWithAggregatesInput[]
    OR?: Upload_ReceiverScalarWhereWithAggregatesInput[]
    NOT?: Upload_ReceiverScalarWhereWithAggregatesInput | Upload_ReceiverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Upload_Receiver"> | string
    fileId?: StringWithAggregatesFilter<"Upload_Receiver"> | string
    firstName?: StringNullableWithAggregatesFilter<"Upload_Receiver"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Upload_Receiver"> | string | null
    province?: StringNullableWithAggregatesFilter<"Upload_Receiver"> | string | null
    district?: StringNullableWithAggregatesFilter<"Upload_Receiver"> | string | null
    municipality?: StringNullableWithAggregatesFilter<"Upload_Receiver"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"Upload_Receiver"> | string
    isDeleted?: BoolWithAggregatesFilter<"Upload_Receiver"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Upload_Receiver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Upload_Receiver"> | Date | string
  }

  export type Invalid_Upload_ReceiverWhereInput = {
    AND?: Invalid_Upload_ReceiverWhereInput | Invalid_Upload_ReceiverWhereInput[]
    OR?: Invalid_Upload_ReceiverWhereInput[]
    NOT?: Invalid_Upload_ReceiverWhereInput | Invalid_Upload_ReceiverWhereInput[]
    id?: StringFilter<"Invalid_Upload_Receiver"> | string
    fileId?: StringFilter<"Invalid_Upload_Receiver"> | string
    firstName?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    lastName?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    province?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    district?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    municipality?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    phoneNumber?: StringFilter<"Invalid_Upload_Receiver"> | string
    isDeleted?: BoolFilter<"Invalid_Upload_Receiver"> | boolean
    createdAt?: DateTimeFilter<"Invalid_Upload_Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Invalid_Upload_Receiver"> | Date | string
    file?: XOR<FilesScalarRelationFilter, FilesWhereInput>
  }

  export type Invalid_Upload_ReceiverOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    file?: FilesOrderByWithRelationInput
  }

  export type Invalid_Upload_ReceiverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fileId_phoneNumber?: Invalid_Upload_ReceiverFileIdPhoneNumberCompoundUniqueInput
    AND?: Invalid_Upload_ReceiverWhereInput | Invalid_Upload_ReceiverWhereInput[]
    OR?: Invalid_Upload_ReceiverWhereInput[]
    NOT?: Invalid_Upload_ReceiverWhereInput | Invalid_Upload_ReceiverWhereInput[]
    fileId?: StringFilter<"Invalid_Upload_Receiver"> | string
    firstName?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    lastName?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    province?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    district?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    municipality?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    phoneNumber?: StringFilter<"Invalid_Upload_Receiver"> | string
    isDeleted?: BoolFilter<"Invalid_Upload_Receiver"> | boolean
    createdAt?: DateTimeFilter<"Invalid_Upload_Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Invalid_Upload_Receiver"> | Date | string
    file?: XOR<FilesScalarRelationFilter, FilesWhereInput>
  }, "id" | "fileId_phoneNumber">

  export type Invalid_Upload_ReceiverOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Invalid_Upload_ReceiverCountOrderByAggregateInput
    _max?: Invalid_Upload_ReceiverMaxOrderByAggregateInput
    _min?: Invalid_Upload_ReceiverMinOrderByAggregateInput
  }

  export type Invalid_Upload_ReceiverScalarWhereWithAggregatesInput = {
    AND?: Invalid_Upload_ReceiverScalarWhereWithAggregatesInput | Invalid_Upload_ReceiverScalarWhereWithAggregatesInput[]
    OR?: Invalid_Upload_ReceiverScalarWhereWithAggregatesInput[]
    NOT?: Invalid_Upload_ReceiverScalarWhereWithAggregatesInput | Invalid_Upload_ReceiverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invalid_Upload_Receiver"> | string
    fileId?: StringWithAggregatesFilter<"Invalid_Upload_Receiver"> | string
    firstName?: StringNullableWithAggregatesFilter<"Invalid_Upload_Receiver"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Invalid_Upload_Receiver"> | string | null
    province?: StringNullableWithAggregatesFilter<"Invalid_Upload_Receiver"> | string | null
    district?: StringNullableWithAggregatesFilter<"Invalid_Upload_Receiver"> | string | null
    municipality?: StringNullableWithAggregatesFilter<"Invalid_Upload_Receiver"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"Invalid_Upload_Receiver"> | string
    isDeleted?: BoolWithAggregatesFilter<"Invalid_Upload_Receiver"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Invalid_Upload_Receiver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invalid_Upload_Receiver"> | Date | string
  }

  export type ReceiverWhereInput = {
    AND?: ReceiverWhereInput | ReceiverWhereInput[]
    OR?: ReceiverWhereInput[]
    NOT?: ReceiverWhereInput | ReceiverWhereInput[]
    id?: StringFilter<"Receiver"> | string
    firstName?: StringNullableFilter<"Receiver"> | string | null
    lastName?: StringNullableFilter<"Receiver"> | string | null
    province?: StringNullableFilter<"Receiver"> | string | null
    district?: StringNullableFilter<"Receiver"> | string | null
    municipality?: StringNullableFilter<"Receiver"> | string | null
    phoneNumber?: StringFilter<"Receiver"> | string
    isDeleted?: BoolFilter<"Receiver"> | boolean
    createdAt?: DateTimeFilter<"Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Receiver"> | Date | string
    receiverMessageId?: StringNullableFilter<"Receiver"> | string | null
    userId?: StringFilter<"Receiver"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverMessage?: XOR<Receiver_MessageNullableScalarRelationFilter, Receiver_MessageWhereInput> | null
  }

  export type ReceiverOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiverMessageId?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    receiverMessage?: Receiver_MessageOrderByWithRelationInput
  }

  export type ReceiverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReceiverWhereInput | ReceiverWhereInput[]
    OR?: ReceiverWhereInput[]
    NOT?: ReceiverWhereInput | ReceiverWhereInput[]
    firstName?: StringNullableFilter<"Receiver"> | string | null
    lastName?: StringNullableFilter<"Receiver"> | string | null
    province?: StringNullableFilter<"Receiver"> | string | null
    district?: StringNullableFilter<"Receiver"> | string | null
    municipality?: StringNullableFilter<"Receiver"> | string | null
    phoneNumber?: StringFilter<"Receiver"> | string
    isDeleted?: BoolFilter<"Receiver"> | boolean
    createdAt?: DateTimeFilter<"Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Receiver"> | Date | string
    receiverMessageId?: StringNullableFilter<"Receiver"> | string | null
    userId?: StringFilter<"Receiver"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverMessage?: XOR<Receiver_MessageNullableScalarRelationFilter, Receiver_MessageWhereInput> | null
  }, "id">

  export type ReceiverOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiverMessageId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ReceiverCountOrderByAggregateInput
    _max?: ReceiverMaxOrderByAggregateInput
    _min?: ReceiverMinOrderByAggregateInput
  }

  export type ReceiverScalarWhereWithAggregatesInput = {
    AND?: ReceiverScalarWhereWithAggregatesInput | ReceiverScalarWhereWithAggregatesInput[]
    OR?: ReceiverScalarWhereWithAggregatesInput[]
    NOT?: ReceiverScalarWhereWithAggregatesInput | ReceiverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Receiver"> | string
    firstName?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    province?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    district?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    municipality?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"Receiver"> | string
    isDeleted?: BoolWithAggregatesFilter<"Receiver"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Receiver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Receiver"> | Date | string
    receiverMessageId?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    userId?: StringWithAggregatesFilter<"Receiver"> | string
  }

  export type Receiver_MessageWhereInput = {
    AND?: Receiver_MessageWhereInput | Receiver_MessageWhereInput[]
    OR?: Receiver_MessageWhereInput[]
    NOT?: Receiver_MessageWhereInput | Receiver_MessageWhereInput[]
    id?: StringFilter<"Receiver_Message"> | string
    textMessage?: StringFilter<"Receiver_Message"> | string
    status?: EnumDeliveryStatusFilter<"Receiver_Message"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Receiver_Message"> | Date | string
    updatedAt?: DateTimeFilter<"Receiver_Message"> | Date | string
    receiver?: ReceiverListRelationFilter
  }

  export type Receiver_MessageOrderByWithRelationInput = {
    id?: SortOrder
    textMessage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiver?: ReceiverOrderByRelationAggregateInput
  }

  export type Receiver_MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Receiver_MessageWhereInput | Receiver_MessageWhereInput[]
    OR?: Receiver_MessageWhereInput[]
    NOT?: Receiver_MessageWhereInput | Receiver_MessageWhereInput[]
    textMessage?: StringFilter<"Receiver_Message"> | string
    status?: EnumDeliveryStatusFilter<"Receiver_Message"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Receiver_Message"> | Date | string
    updatedAt?: DateTimeFilter<"Receiver_Message"> | Date | string
    receiver?: ReceiverListRelationFilter
  }, "id">

  export type Receiver_MessageOrderByWithAggregationInput = {
    id?: SortOrder
    textMessage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Receiver_MessageCountOrderByAggregateInput
    _max?: Receiver_MessageMaxOrderByAggregateInput
    _min?: Receiver_MessageMinOrderByAggregateInput
  }

  export type Receiver_MessageScalarWhereWithAggregatesInput = {
    AND?: Receiver_MessageScalarWhereWithAggregatesInput | Receiver_MessageScalarWhereWithAggregatesInput[]
    OR?: Receiver_MessageScalarWhereWithAggregatesInput[]
    NOT?: Receiver_MessageScalarWhereWithAggregatesInput | Receiver_MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Receiver_Message"> | string
    textMessage?: StringWithAggregatesFilter<"Receiver_Message"> | string
    status?: EnumDeliveryStatusWithAggregatesFilter<"Receiver_Message"> | $Enums.DeliveryStatus
    createdAt?: DateTimeWithAggregatesFilter<"Receiver_Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Receiver_Message"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    userId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    messageText?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFilter<"Campaign"> | $Enums.DeliveryStatus
    province?: StringNullableFilter<"Campaign"> | string | null
    district?: StringNullableFilter<"Campaign"> | string | null
    municipality?: StringNullableFilter<"Campaign"> | string | null
    fileId?: StringNullableFilter<"Campaign"> | string | null
    recipientsNumber?: IntNullableFilter<"Campaign"> | number | null
    deliveredNumber?: IntFilter<"Campaign"> | number
    failedNumber?: IntFilter<"Campaign"> | number
    deliveryRate?: FloatFilter<"Campaign"> | number
    totalSmsCost?: FloatNullableFilter<"Campaign"> | number | null
    paymentReceiptImage?: StringNullableFilter<"Campaign"> | string | null
    paid?: BoolFilter<"Campaign"> | boolean
    submitDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    file?: XOR<FilesNullableScalarRelationFilter, FilesWhereInput> | null
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    messageText?: SortOrder
    status?: SortOrder
    deliveryStatus?: SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    fileId?: SortOrderInput | SortOrder
    recipientsNumber?: SortOrderInput | SortOrder
    deliveredNumber?: SortOrder
    failedNumber?: SortOrder
    deliveryRate?: SortOrder
    totalSmsCost?: SortOrderInput | SortOrder
    paymentReceiptImage?: SortOrderInput | SortOrder
    paid?: SortOrder
    submitDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    file?: FilesOrderByWithRelationInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    userId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    messageText?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFilter<"Campaign"> | $Enums.DeliveryStatus
    province?: StringNullableFilter<"Campaign"> | string | null
    district?: StringNullableFilter<"Campaign"> | string | null
    municipality?: StringNullableFilter<"Campaign"> | string | null
    fileId?: StringNullableFilter<"Campaign"> | string | null
    recipientsNumber?: IntNullableFilter<"Campaign"> | number | null
    deliveredNumber?: IntFilter<"Campaign"> | number
    failedNumber?: IntFilter<"Campaign"> | number
    deliveryRate?: FloatFilter<"Campaign"> | number
    totalSmsCost?: FloatNullableFilter<"Campaign"> | number | null
    paymentReceiptImage?: StringNullableFilter<"Campaign"> | string | null
    paid?: BoolFilter<"Campaign"> | boolean
    submitDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    file?: XOR<FilesNullableScalarRelationFilter, FilesWhereInput> | null
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    messageText?: SortOrder
    status?: SortOrder
    deliveryStatus?: SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    fileId?: SortOrderInput | SortOrder
    recipientsNumber?: SortOrderInput | SortOrder
    deliveredNumber?: SortOrder
    failedNumber?: SortOrder
    deliveryRate?: SortOrder
    totalSmsCost?: SortOrderInput | SortOrder
    paymentReceiptImage?: SortOrderInput | SortOrder
    paid?: SortOrder
    submitDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    userId?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    messageText?: StringWithAggregatesFilter<"Campaign"> | string
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusWithAggregatesFilter<"Campaign"> | $Enums.DeliveryStatus
    province?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    district?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    municipality?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    fileId?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    recipientsNumber?: IntNullableWithAggregatesFilter<"Campaign"> | number | null
    deliveredNumber?: IntWithAggregatesFilter<"Campaign"> | number
    failedNumber?: IntWithAggregatesFilter<"Campaign"> | number
    deliveryRate?: FloatWithAggregatesFilter<"Campaign"> | number
    totalSmsCost?: FloatNullableWithAggregatesFilter<"Campaign"> | number | null
    paymentReceiptImage?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    paid?: BoolWithAggregatesFilter<"Campaign"> | boolean
    submitDate?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type QuickSMSSendWhereInput = {
    AND?: QuickSMSSendWhereInput | QuickSMSSendWhereInput[]
    OR?: QuickSMSSendWhereInput[]
    NOT?: QuickSMSSendWhereInput | QuickSMSSendWhereInput[]
    id?: StringFilter<"QuickSMSSend"> | string
    userId?: StringFilter<"QuickSMSSend"> | string
    toPhoneNumber?: StringFilter<"QuickSMSSend"> | string
    message?: StringFilter<"QuickSMSSend"> | string
    status?: EnumQuickSendStatusFilter<"QuickSMSSend"> | $Enums.QuickSendStatus
    createdAt?: DateTimeFilter<"QuickSMSSend"> | Date | string
    updatedAt?: DateTimeFilter<"QuickSMSSend"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QuickSMSSendOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    toPhoneNumber?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type QuickSMSSendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuickSMSSendWhereInput | QuickSMSSendWhereInput[]
    OR?: QuickSMSSendWhereInput[]
    NOT?: QuickSMSSendWhereInput | QuickSMSSendWhereInput[]
    userId?: StringFilter<"QuickSMSSend"> | string
    toPhoneNumber?: StringFilter<"QuickSMSSend"> | string
    message?: StringFilter<"QuickSMSSend"> | string
    status?: EnumQuickSendStatusFilter<"QuickSMSSend"> | $Enums.QuickSendStatus
    createdAt?: DateTimeFilter<"QuickSMSSend"> | Date | string
    updatedAt?: DateTimeFilter<"QuickSMSSend"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type QuickSMSSendOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    toPhoneNumber?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuickSMSSendCountOrderByAggregateInput
    _max?: QuickSMSSendMaxOrderByAggregateInput
    _min?: QuickSMSSendMinOrderByAggregateInput
  }

  export type QuickSMSSendScalarWhereWithAggregatesInput = {
    AND?: QuickSMSSendScalarWhereWithAggregatesInput | QuickSMSSendScalarWhereWithAggregatesInput[]
    OR?: QuickSMSSendScalarWhereWithAggregatesInput[]
    NOT?: QuickSMSSendScalarWhereWithAggregatesInput | QuickSMSSendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuickSMSSend"> | string
    userId?: StringWithAggregatesFilter<"QuickSMSSend"> | string
    toPhoneNumber?: StringWithAggregatesFilter<"QuickSMSSend"> | string
    message?: StringWithAggregatesFilter<"QuickSMSSend"> | string
    status?: EnumQuickSendStatusWithAggregatesFilter<"QuickSMSSend"> | $Enums.QuickSendStatus
    createdAt?: DateTimeWithAggregatesFilter<"QuickSMSSend"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuickSMSSend"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    paidOn?: DateTimeFilter<"Payment"> | Date | string
    isPaid?: BoolFilter<"Payment"> | boolean
    isSmsSent?: BoolFilter<"Payment"> | boolean
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    paidOn?: SortOrder
    isPaid?: SortOrder
    isSmsSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    paidOn?: DateTimeFilter<"Payment"> | Date | string
    isPaid?: BoolFilter<"Payment"> | boolean
    isSmsSent?: BoolFilter<"Payment"> | boolean
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    paidOn?: SortOrder
    isPaid?: SortOrder
    isSmsSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    paidOn?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    isPaid?: BoolWithAggregatesFilter<"Payment"> | boolean
    isSmsSent?: BoolWithAggregatesFilter<"Payment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: StringFilter<"Guest"> | string
    ipAddress?: StringNullableFilter<"Guest"> | string | null
    userAgent?: StringNullableFilter<"Guest"> | string | null
    sessionId?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    expiresAt?: DateTimeFilter<"Guest"> | Date | string
    files?: GuestFileListRelationFilter
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    files?: GuestFileOrderByRelationAggregateInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    ipAddress?: StringNullableFilter<"Guest"> | string | null
    userAgent?: StringNullableFilter<"Guest"> | string | null
    sessionId?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    expiresAt?: DateTimeFilter<"Guest"> | Date | string
    files?: GuestFileListRelationFilter
  }, "id">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: GuestCountOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guest"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    sessionId?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
  }

  export type GuestFileWhereInput = {
    AND?: GuestFileWhereInput | GuestFileWhereInput[]
    OR?: GuestFileWhereInput[]
    NOT?: GuestFileWhereInput | GuestFileWhereInput[]
    id?: StringFilter<"GuestFile"> | string
    guestId?: StringFilter<"GuestFile"> | string
    name?: StringFilter<"GuestFile"> | string
    path?: StringFilter<"GuestFile"> | string
    sizeInBytes?: BigIntFilter<"GuestFile"> | bigint | number
    type?: EnumFileTypeFilter<"GuestFile"> | $Enums.FileType
    uploadStatus?: EnumUploadStatusFilter<"GuestFile"> | $Enums.UploadStatus
    numberOfReceivers?: IntNullableFilter<"GuestFile"> | number | null
    invalidRowsPath?: StringNullableFilter<"GuestFile"> | string | null
    createdAt?: DateTimeFilter<"GuestFile"> | Date | string
    updatedAt?: DateTimeFilter<"GuestFile"> | Date | string
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    receivers?: GuestReceiverListRelationFilter
    invalidGuestReceivers?: InvalidGuestReceiverListRelationFilter
  }

  export type GuestFileOrderByWithRelationInput = {
    id?: SortOrder
    guestId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    sizeInBytes?: SortOrder
    type?: SortOrder
    uploadStatus?: SortOrder
    numberOfReceivers?: SortOrderInput | SortOrder
    invalidRowsPath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guest?: GuestOrderByWithRelationInput
    receivers?: GuestReceiverOrderByRelationAggregateInput
    invalidGuestReceivers?: InvalidGuestReceiverOrderByRelationAggregateInput
  }

  export type GuestFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuestFileWhereInput | GuestFileWhereInput[]
    OR?: GuestFileWhereInput[]
    NOT?: GuestFileWhereInput | GuestFileWhereInput[]
    guestId?: StringFilter<"GuestFile"> | string
    name?: StringFilter<"GuestFile"> | string
    path?: StringFilter<"GuestFile"> | string
    sizeInBytes?: BigIntFilter<"GuestFile"> | bigint | number
    type?: EnumFileTypeFilter<"GuestFile"> | $Enums.FileType
    uploadStatus?: EnumUploadStatusFilter<"GuestFile"> | $Enums.UploadStatus
    numberOfReceivers?: IntNullableFilter<"GuestFile"> | number | null
    invalidRowsPath?: StringNullableFilter<"GuestFile"> | string | null
    createdAt?: DateTimeFilter<"GuestFile"> | Date | string
    updatedAt?: DateTimeFilter<"GuestFile"> | Date | string
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    receivers?: GuestReceiverListRelationFilter
    invalidGuestReceivers?: InvalidGuestReceiverListRelationFilter
  }, "id">

  export type GuestFileOrderByWithAggregationInput = {
    id?: SortOrder
    guestId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    sizeInBytes?: SortOrder
    type?: SortOrder
    uploadStatus?: SortOrder
    numberOfReceivers?: SortOrderInput | SortOrder
    invalidRowsPath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuestFileCountOrderByAggregateInput
    _avg?: GuestFileAvgOrderByAggregateInput
    _max?: GuestFileMaxOrderByAggregateInput
    _min?: GuestFileMinOrderByAggregateInput
    _sum?: GuestFileSumOrderByAggregateInput
  }

  export type GuestFileScalarWhereWithAggregatesInput = {
    AND?: GuestFileScalarWhereWithAggregatesInput | GuestFileScalarWhereWithAggregatesInput[]
    OR?: GuestFileScalarWhereWithAggregatesInput[]
    NOT?: GuestFileScalarWhereWithAggregatesInput | GuestFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuestFile"> | string
    guestId?: StringWithAggregatesFilter<"GuestFile"> | string
    name?: StringWithAggregatesFilter<"GuestFile"> | string
    path?: StringWithAggregatesFilter<"GuestFile"> | string
    sizeInBytes?: BigIntWithAggregatesFilter<"GuestFile"> | bigint | number
    type?: EnumFileTypeWithAggregatesFilter<"GuestFile"> | $Enums.FileType
    uploadStatus?: EnumUploadStatusWithAggregatesFilter<"GuestFile"> | $Enums.UploadStatus
    numberOfReceivers?: IntNullableWithAggregatesFilter<"GuestFile"> | number | null
    invalidRowsPath?: StringNullableWithAggregatesFilter<"GuestFile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GuestFile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuestFile"> | Date | string
  }

  export type GuestReceiverWhereInput = {
    AND?: GuestReceiverWhereInput | GuestReceiverWhereInput[]
    OR?: GuestReceiverWhereInput[]
    NOT?: GuestReceiverWhereInput | GuestReceiverWhereInput[]
    id?: StringFilter<"GuestReceiver"> | string
    guestFileId?: StringFilter<"GuestReceiver"> | string
    firstName?: StringNullableFilter<"GuestReceiver"> | string | null
    lastName?: StringNullableFilter<"GuestReceiver"> | string | null
    province?: StringNullableFilter<"GuestReceiver"> | string | null
    district?: StringNullableFilter<"GuestReceiver"> | string | null
    municipality?: StringNullableFilter<"GuestReceiver"> | string | null
    phoneNumber?: StringFilter<"GuestReceiver"> | string
    isDeleted?: BoolFilter<"GuestReceiver"> | boolean
    createdAt?: DateTimeFilter<"GuestReceiver"> | Date | string
    file?: XOR<GuestFileScalarRelationFilter, GuestFileWhereInput>
  }

  export type GuestReceiverOrderByWithRelationInput = {
    id?: SortOrder
    guestFileId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    file?: GuestFileOrderByWithRelationInput
  }

  export type GuestReceiverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guestFileId_phoneNumber?: GuestReceiverGuestFileIdPhoneNumberCompoundUniqueInput
    AND?: GuestReceiverWhereInput | GuestReceiverWhereInput[]
    OR?: GuestReceiverWhereInput[]
    NOT?: GuestReceiverWhereInput | GuestReceiverWhereInput[]
    guestFileId?: StringFilter<"GuestReceiver"> | string
    firstName?: StringNullableFilter<"GuestReceiver"> | string | null
    lastName?: StringNullableFilter<"GuestReceiver"> | string | null
    province?: StringNullableFilter<"GuestReceiver"> | string | null
    district?: StringNullableFilter<"GuestReceiver"> | string | null
    municipality?: StringNullableFilter<"GuestReceiver"> | string | null
    phoneNumber?: StringFilter<"GuestReceiver"> | string
    isDeleted?: BoolFilter<"GuestReceiver"> | boolean
    createdAt?: DateTimeFilter<"GuestReceiver"> | Date | string
    file?: XOR<GuestFileScalarRelationFilter, GuestFileWhereInput>
  }, "id" | "guestFileId_phoneNumber">

  export type GuestReceiverOrderByWithAggregationInput = {
    id?: SortOrder
    guestFileId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: GuestReceiverCountOrderByAggregateInput
    _max?: GuestReceiverMaxOrderByAggregateInput
    _min?: GuestReceiverMinOrderByAggregateInput
  }

  export type GuestReceiverScalarWhereWithAggregatesInput = {
    AND?: GuestReceiverScalarWhereWithAggregatesInput | GuestReceiverScalarWhereWithAggregatesInput[]
    OR?: GuestReceiverScalarWhereWithAggregatesInput[]
    NOT?: GuestReceiverScalarWhereWithAggregatesInput | GuestReceiverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuestReceiver"> | string
    guestFileId?: StringWithAggregatesFilter<"GuestReceiver"> | string
    firstName?: StringNullableWithAggregatesFilter<"GuestReceiver"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"GuestReceiver"> | string | null
    province?: StringNullableWithAggregatesFilter<"GuestReceiver"> | string | null
    district?: StringNullableWithAggregatesFilter<"GuestReceiver"> | string | null
    municipality?: StringNullableWithAggregatesFilter<"GuestReceiver"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"GuestReceiver"> | string
    isDeleted?: BoolWithAggregatesFilter<"GuestReceiver"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GuestReceiver"> | Date | string
  }

  export type InvalidGuestReceiverWhereInput = {
    AND?: InvalidGuestReceiverWhereInput | InvalidGuestReceiverWhereInput[]
    OR?: InvalidGuestReceiverWhereInput[]
    NOT?: InvalidGuestReceiverWhereInput | InvalidGuestReceiverWhereInput[]
    id?: StringFilter<"InvalidGuestReceiver"> | string
    guestFileId?: StringFilter<"InvalidGuestReceiver"> | string
    firstName?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    lastName?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    province?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    district?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    municipality?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    phoneNumber?: StringFilter<"InvalidGuestReceiver"> | string
    isDeleted?: BoolFilter<"InvalidGuestReceiver"> | boolean
    createdAt?: DateTimeFilter<"InvalidGuestReceiver"> | Date | string
    file?: XOR<GuestFileScalarRelationFilter, GuestFileWhereInput>
  }

  export type InvalidGuestReceiverOrderByWithRelationInput = {
    id?: SortOrder
    guestFileId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    file?: GuestFileOrderByWithRelationInput
  }

  export type InvalidGuestReceiverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guestFileId_phoneNumber?: InvalidGuestReceiverGuestFileIdPhoneNumberCompoundUniqueInput
    AND?: InvalidGuestReceiverWhereInput | InvalidGuestReceiverWhereInput[]
    OR?: InvalidGuestReceiverWhereInput[]
    NOT?: InvalidGuestReceiverWhereInput | InvalidGuestReceiverWhereInput[]
    guestFileId?: StringFilter<"InvalidGuestReceiver"> | string
    firstName?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    lastName?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    province?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    district?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    municipality?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    phoneNumber?: StringFilter<"InvalidGuestReceiver"> | string
    isDeleted?: BoolFilter<"InvalidGuestReceiver"> | boolean
    createdAt?: DateTimeFilter<"InvalidGuestReceiver"> | Date | string
    file?: XOR<GuestFileScalarRelationFilter, GuestFileWhereInput>
  }, "id" | "guestFileId_phoneNumber">

  export type InvalidGuestReceiverOrderByWithAggregationInput = {
    id?: SortOrder
    guestFileId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: InvalidGuestReceiverCountOrderByAggregateInput
    _max?: InvalidGuestReceiverMaxOrderByAggregateInput
    _min?: InvalidGuestReceiverMinOrderByAggregateInput
  }

  export type InvalidGuestReceiverScalarWhereWithAggregatesInput = {
    AND?: InvalidGuestReceiverScalarWhereWithAggregatesInput | InvalidGuestReceiverScalarWhereWithAggregatesInput[]
    OR?: InvalidGuestReceiverScalarWhereWithAggregatesInput[]
    NOT?: InvalidGuestReceiverScalarWhereWithAggregatesInput | InvalidGuestReceiverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvalidGuestReceiver"> | string
    guestFileId?: StringWithAggregatesFilter<"InvalidGuestReceiver"> | string
    firstName?: StringNullableWithAggregatesFilter<"InvalidGuestReceiver"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"InvalidGuestReceiver"> | string | null
    province?: StringNullableWithAggregatesFilter<"InvalidGuestReceiver"> | string | null
    district?: StringNullableWithAggregatesFilter<"InvalidGuestReceiver"> | string | null
    municipality?: StringNullableWithAggregatesFilter<"InvalidGuestReceiver"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"InvalidGuestReceiver"> | string
    isDeleted?: BoolWithAggregatesFilter<"InvalidGuestReceiver"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"InvalidGuestReceiver"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    files?: FilesCreateNestedManyWithoutUserInput
    receiver?: ReceiverCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    quickSends?: QuickSMSSendCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    receiver?: ReceiverUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    quickSends?: QuickSMSSendUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FilesUpdateManyWithoutUserNestedInput
    receiver?: ReceiverUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    quickSends?: QuickSMSSendUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    receiver?: ReceiverUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    quickSends?: QuickSMSSendUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FilesCreateInput = {
    id?: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
    receivers?: Upload_ReceiverCreateNestedManyWithoutFileInput
    campaigns?: CampaignCreateNestedManyWithoutFileInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverCreateNestedManyWithoutFileInput
  }

  export type FilesUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: Upload_ReceiverUncheckedCreateNestedManyWithoutFileInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutFileInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUncheckedCreateNestedManyWithoutFileInput
  }

  export type FilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    receivers?: Upload_ReceiverUpdateManyWithoutFileNestedInput
    campaigns?: CampaignUpdateManyWithoutFileNestedInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: Upload_ReceiverUncheckedUpdateManyWithoutFileNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutFileNestedInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FilesCreateManyInput = {
    id?: string
    userId: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Upload_ReceiverCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    file: FilesCreateNestedOneWithoutReceiversInput
  }

  export type Upload_ReceiverUncheckedCreateInput = {
    id?: string
    fileId: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Upload_ReceiverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: FilesUpdateOneRequiredWithoutReceiversNestedInput
  }

  export type Upload_ReceiverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Upload_ReceiverCreateManyInput = {
    id?: string
    fileId: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Upload_ReceiverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Upload_ReceiverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_Upload_ReceiverCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    file: FilesCreateNestedOneWithoutInvalidUploadReceiversInput
  }

  export type Invalid_Upload_ReceiverUncheckedCreateInput = {
    id?: string
    fileId: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_Upload_ReceiverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: FilesUpdateOneRequiredWithoutInvalidUploadReceiversNestedInput
  }

  export type Invalid_Upload_ReceiverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_Upload_ReceiverCreateManyInput = {
    id?: string
    fileId: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_Upload_ReceiverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_Upload_ReceiverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiverCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReceiverInput
    receiverMessage?: Receiver_MessageCreateNestedOneWithoutReceiverInput
  }

  export type ReceiverUncheckedCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverMessageId?: string | null
    userId: string
  }

  export type ReceiverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReceiverNestedInput
    receiverMessage?: Receiver_MessageUpdateOneWithoutReceiverNestedInput
  }

  export type ReceiverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReceiverCreateManyInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverMessageId?: string | null
    userId: string
  }

  export type ReceiverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type Receiver_MessageCreateInput = {
    id?: string
    textMessage: string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver?: ReceiverCreateNestedManyWithoutReceiverMessageInput
  }

  export type Receiver_MessageUncheckedCreateInput = {
    id?: string
    textMessage: string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver?: ReceiverUncheckedCreateNestedManyWithoutReceiverMessageInput
  }

  export type Receiver_MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    textMessage?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: ReceiverUpdateManyWithoutReceiverMessageNestedInput
  }

  export type Receiver_MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    textMessage?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: ReceiverUncheckedUpdateManyWithoutReceiverMessageNestedInput
  }

  export type Receiver_MessageCreateManyInput = {
    id?: string
    textMessage: string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Receiver_MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    textMessage?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Receiver_MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    textMessage?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    messageText: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    recipientsNumber?: number | null
    deliveredNumber?: number
    failedNumber?: number
    deliveryRate?: number
    totalSmsCost?: number | null
    paymentReceiptImage?: string | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCampaignsInput
    file?: FilesCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    messageText: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    fileId?: string | null
    recipientsNumber?: number | null
    deliveredNumber?: number
    failedNumber?: number
    deliveryRate?: number
    totalSmsCost?: number | null
    paymentReceiptImage?: string | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageText?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    recipientsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    deliveredNumber?: IntFieldUpdateOperationsInput | number
    failedNumber?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalSmsCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentReceiptImage?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    file?: FilesUpdateOneWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageText?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    deliveredNumber?: IntFieldUpdateOperationsInput | number
    failedNumber?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalSmsCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentReceiptImage?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateManyInput = {
    id?: string
    userId: string
    name: string
    messageText: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    fileId?: string | null
    recipientsNumber?: number | null
    deliveredNumber?: number
    failedNumber?: number
    deliveryRate?: number
    totalSmsCost?: number | null
    paymentReceiptImage?: string | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageText?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    recipientsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    deliveredNumber?: IntFieldUpdateOperationsInput | number
    failedNumber?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalSmsCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentReceiptImage?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageText?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    deliveredNumber?: IntFieldUpdateOperationsInput | number
    failedNumber?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalSmsCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentReceiptImage?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuickSMSSendCreateInput = {
    id?: string
    toPhoneNumber: string
    message: string
    status?: $Enums.QuickSendStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuickSendsInput
  }

  export type QuickSMSSendUncheckedCreateInput = {
    id?: string
    userId: string
    toPhoneNumber: string
    message: string
    status?: $Enums.QuickSendStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuickSMSSendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    toPhoneNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumQuickSendStatusFieldUpdateOperationsInput | $Enums.QuickSendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuickSendsNestedInput
  }

  export type QuickSMSSendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    toPhoneNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumQuickSendStatusFieldUpdateOperationsInput | $Enums.QuickSendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuickSMSSendCreateManyInput = {
    id?: string
    userId: string
    toPhoneNumber: string
    message: string
    status?: $Enums.QuickSendStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuickSMSSendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    toPhoneNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumQuickSendStatusFieldUpdateOperationsInput | $Enums.QuickSendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuickSMSSendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    toPhoneNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumQuickSendStatusFieldUpdateOperationsInput | $Enums.QuickSendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    paidOn?: Date | string
    isPaid?: boolean
    isSmsSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    paidOn?: Date | string
    isPaid?: boolean
    isSmsSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isSmsSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isSmsSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    paidOn?: Date | string
    isPaid?: boolean
    isSmsSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isSmsSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isSmsSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateInput = {
    id?: string
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
    files?: GuestFileCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateInput = {
    id?: string
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
    files?: GuestFileUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: GuestFileUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: GuestFileUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestCreateManyInput = {
    id?: string
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
  }

  export type GuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestFileCreateInput = {
    id?: string
    name: string
    path: string
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guest: GuestCreateNestedOneWithoutFilesInput
    receivers?: GuestReceiverCreateNestedManyWithoutFileInput
    invalidGuestReceivers?: InvalidGuestReceiverCreateNestedManyWithoutFileInput
  }

  export type GuestFileUncheckedCreateInput = {
    id?: string
    guestId: string
    name: string
    path: string
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: GuestReceiverUncheckedCreateNestedManyWithoutFileInput
    invalidGuestReceivers?: InvalidGuestReceiverUncheckedCreateNestedManyWithoutFileInput
  }

  export type GuestFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutFilesNestedInput
    receivers?: GuestReceiverUpdateManyWithoutFileNestedInput
    invalidGuestReceivers?: InvalidGuestReceiverUpdateManyWithoutFileNestedInput
  }

  export type GuestFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: GuestReceiverUncheckedUpdateManyWithoutFileNestedInput
    invalidGuestReceivers?: InvalidGuestReceiverUncheckedUpdateManyWithoutFileNestedInput
  }

  export type GuestFileCreateManyInput = {
    id?: string
    guestId: string
    name: string
    path: string
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestReceiverCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    file: GuestFileCreateNestedOneWithoutReceiversInput
  }

  export type GuestReceiverUncheckedCreateInput = {
    id?: string
    guestFileId: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type GuestReceiverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: GuestFileUpdateOneRequiredWithoutReceiversNestedInput
  }

  export type GuestReceiverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestFileId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestReceiverCreateManyInput = {
    id?: string
    guestFileId: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type GuestReceiverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestReceiverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestFileId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvalidGuestReceiverCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    file: GuestFileCreateNestedOneWithoutInvalidGuestReceiversInput
  }

  export type InvalidGuestReceiverUncheckedCreateInput = {
    id?: string
    guestFileId: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type InvalidGuestReceiverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: GuestFileUpdateOneRequiredWithoutInvalidGuestReceiversNestedInput
  }

  export type InvalidGuestReceiverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestFileId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvalidGuestReceiverCreateManyInput = {
    id?: string
    guestFileId: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type InvalidGuestReceiverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvalidGuestReceiverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestFileId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAccountTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccountTypeNullableFilter<$PrismaModel> | $Enums.AccountType | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FilesListRelationFilter = {
    every?: FilesWhereInput
    some?: FilesWhereInput
    none?: FilesWhereInput
  }

  export type ReceiverListRelationFilter = {
    every?: ReceiverWhereInput
    some?: ReceiverWhereInput
    none?: ReceiverWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type QuickSMSSendListRelationFilter = {
    every?: QuickSMSSendWhereInput
    some?: QuickSMSSendWhereInput
    none?: QuickSMSSendWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceiverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuickSMSSendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    hashedPassword?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    organizationName?: SortOrder
    profileImage?: SortOrder
    accountType?: SortOrder
    isAccountVerified?: SortOrder
    role?: SortOrder
    citizenshipNumber?: SortOrder
    citizenshipImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    hashedPassword?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    organizationName?: SortOrder
    profileImage?: SortOrder
    accountType?: SortOrder
    isAccountVerified?: SortOrder
    role?: SortOrder
    citizenshipNumber?: SortOrder
    citizenshipImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    hashedPassword?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    organizationName?: SortOrder
    profileImage?: SortOrder
    accountType?: SortOrder
    isAccountVerified?: SortOrder
    role?: SortOrder
    citizenshipNumber?: SortOrder
    citizenshipImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAccountTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccountTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AccountType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type EnumUploadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusFilter<$PrismaModel> | $Enums.UploadStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Upload_ReceiverListRelationFilter = {
    every?: Upload_ReceiverWhereInput
    some?: Upload_ReceiverWhereInput
    none?: Upload_ReceiverWhereInput
  }

  export type Invalid_Upload_ReceiverListRelationFilter = {
    every?: Invalid_Upload_ReceiverWhereInput
    some?: Invalid_Upload_ReceiverWhereInput
    none?: Invalid_Upload_ReceiverWhereInput
  }

  export type Upload_ReceiverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Invalid_Upload_ReceiverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    numberOfReceivers?: SortOrder
    invalidRowsPath?: SortOrder
    sizeInBytes?: SortOrder
    type?: SortOrder
    uploadStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilesAvgOrderByAggregateInput = {
    numberOfReceivers?: SortOrder
    sizeInBytes?: SortOrder
  }

  export type FilesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    numberOfReceivers?: SortOrder
    invalidRowsPath?: SortOrder
    sizeInBytes?: SortOrder
    type?: SortOrder
    uploadStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    numberOfReceivers?: SortOrder
    invalidRowsPath?: SortOrder
    sizeInBytes?: SortOrder
    type?: SortOrder
    uploadStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilesSumOrderByAggregateInput = {
    numberOfReceivers?: SortOrder
    sizeInBytes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type EnumUploadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusWithAggregatesFilter<$PrismaModel> | $Enums.UploadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUploadStatusFilter<$PrismaModel>
    _max?: NestedEnumUploadStatusFilter<$PrismaModel>
  }

  export type FilesScalarRelationFilter = {
    is?: FilesWhereInput
    isNot?: FilesWhereInput
  }

  export type Upload_ReceiverFileIdPhoneNumberCompoundUniqueInput = {
    fileId: string
    phoneNumber: string
  }

  export type Upload_ReceiverCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Upload_ReceiverMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Upload_ReceiverMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Invalid_Upload_ReceiverFileIdPhoneNumberCompoundUniqueInput = {
    fileId: string
    phoneNumber: string
  }

  export type Invalid_Upload_ReceiverCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Invalid_Upload_ReceiverMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Invalid_Upload_ReceiverMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Receiver_MessageNullableScalarRelationFilter = {
    is?: Receiver_MessageWhereInput | null
    isNot?: Receiver_MessageWhereInput | null
  }

  export type ReceiverCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiverMessageId?: SortOrder
    userId?: SortOrder
  }

  export type ReceiverMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiverMessageId?: SortOrder
    userId?: SortOrder
  }

  export type ReceiverMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiverMessageId?: SortOrder
    userId?: SortOrder
  }

  export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type Receiver_MessageCountOrderByAggregateInput = {
    id?: SortOrder
    textMessage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Receiver_MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    textMessage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Receiver_MessageMinOrderByAggregateInput = {
    id?: SortOrder
    textMessage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FilesNullableScalarRelationFilter = {
    is?: FilesWhereInput | null
    isNot?: FilesWhereInput | null
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    messageText?: SortOrder
    status?: SortOrder
    deliveryStatus?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    fileId?: SortOrder
    recipientsNumber?: SortOrder
    deliveredNumber?: SortOrder
    failedNumber?: SortOrder
    deliveryRate?: SortOrder
    totalSmsCost?: SortOrder
    paymentReceiptImage?: SortOrder
    paid?: SortOrder
    submitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    recipientsNumber?: SortOrder
    deliveredNumber?: SortOrder
    failedNumber?: SortOrder
    deliveryRate?: SortOrder
    totalSmsCost?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    messageText?: SortOrder
    status?: SortOrder
    deliveryStatus?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    fileId?: SortOrder
    recipientsNumber?: SortOrder
    deliveredNumber?: SortOrder
    failedNumber?: SortOrder
    deliveryRate?: SortOrder
    totalSmsCost?: SortOrder
    paymentReceiptImage?: SortOrder
    paid?: SortOrder
    submitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    messageText?: SortOrder
    status?: SortOrder
    deliveryStatus?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    fileId?: SortOrder
    recipientsNumber?: SortOrder
    deliveredNumber?: SortOrder
    failedNumber?: SortOrder
    deliveryRate?: SortOrder
    totalSmsCost?: SortOrder
    paymentReceiptImage?: SortOrder
    paid?: SortOrder
    submitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    recipientsNumber?: SortOrder
    deliveredNumber?: SortOrder
    failedNumber?: SortOrder
    deliveryRate?: SortOrder
    totalSmsCost?: SortOrder
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumQuickSendStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuickSendStatus | EnumQuickSendStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuickSendStatus[] | ListEnumQuickSendStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuickSendStatus[] | ListEnumQuickSendStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuickSendStatusFilter<$PrismaModel> | $Enums.QuickSendStatus
  }

  export type QuickSMSSendCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    toPhoneNumber?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuickSMSSendMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    toPhoneNumber?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuickSMSSendMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    toPhoneNumber?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumQuickSendStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuickSendStatus | EnumQuickSendStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuickSendStatus[] | ListEnumQuickSendStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuickSendStatus[] | ListEnumQuickSendStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuickSendStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuickSendStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuickSendStatusFilter<$PrismaModel>
    _max?: NestedEnumQuickSendStatusFilter<$PrismaModel>
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    paidOn?: SortOrder
    isPaid?: SortOrder
    isSmsSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    paidOn?: SortOrder
    isPaid?: SortOrder
    isSmsSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    paidOn?: SortOrder
    isPaid?: SortOrder
    isSmsSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestFileListRelationFilter = {
    every?: GuestFileWhereInput
    some?: GuestFileWhereInput
    none?: GuestFileWhereInput
  }

  export type GuestFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type GuestScalarRelationFilter = {
    is?: GuestWhereInput
    isNot?: GuestWhereInput
  }

  export type GuestReceiverListRelationFilter = {
    every?: GuestReceiverWhereInput
    some?: GuestReceiverWhereInput
    none?: GuestReceiverWhereInput
  }

  export type InvalidGuestReceiverListRelationFilter = {
    every?: InvalidGuestReceiverWhereInput
    some?: InvalidGuestReceiverWhereInput
    none?: InvalidGuestReceiverWhereInput
  }

  export type GuestReceiverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvalidGuestReceiverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestFileCountOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    sizeInBytes?: SortOrder
    type?: SortOrder
    uploadStatus?: SortOrder
    numberOfReceivers?: SortOrder
    invalidRowsPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestFileAvgOrderByAggregateInput = {
    sizeInBytes?: SortOrder
    numberOfReceivers?: SortOrder
  }

  export type GuestFileMaxOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    sizeInBytes?: SortOrder
    type?: SortOrder
    uploadStatus?: SortOrder
    numberOfReceivers?: SortOrder
    invalidRowsPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestFileMinOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    sizeInBytes?: SortOrder
    type?: SortOrder
    uploadStatus?: SortOrder
    numberOfReceivers?: SortOrder
    invalidRowsPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestFileSumOrderByAggregateInput = {
    sizeInBytes?: SortOrder
    numberOfReceivers?: SortOrder
  }

  export type GuestFileScalarRelationFilter = {
    is?: GuestFileWhereInput
    isNot?: GuestFileWhereInput
  }

  export type GuestReceiverGuestFileIdPhoneNumberCompoundUniqueInput = {
    guestFileId: string
    phoneNumber: string
  }

  export type GuestReceiverCountOrderByAggregateInput = {
    id?: SortOrder
    guestFileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestReceiverMaxOrderByAggregateInput = {
    id?: SortOrder
    guestFileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestReceiverMinOrderByAggregateInput = {
    id?: SortOrder
    guestFileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type InvalidGuestReceiverGuestFileIdPhoneNumberCompoundUniqueInput = {
    guestFileId: string
    phoneNumber: string
  }

  export type InvalidGuestReceiverCountOrderByAggregateInput = {
    id?: SortOrder
    guestFileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type InvalidGuestReceiverMaxOrderByAggregateInput = {
    id?: SortOrder
    guestFileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type InvalidGuestReceiverMinOrderByAggregateInput = {
    id?: SortOrder
    guestFileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type FilesCreateNestedManyWithoutUserInput = {
    create?: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput> | FilesCreateWithoutUserInput[] | FilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutUserInput | FilesCreateOrConnectWithoutUserInput[]
    createMany?: FilesCreateManyUserInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type ReceiverCreateNestedManyWithoutUserInput = {
    create?: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput> | ReceiverCreateWithoutUserInput[] | ReceiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutUserInput | ReceiverCreateOrConnectWithoutUserInput[]
    createMany?: ReceiverCreateManyUserInputEnvelope
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type QuickSMSSendCreateNestedManyWithoutUserInput = {
    create?: XOR<QuickSMSSendCreateWithoutUserInput, QuickSMSSendUncheckedCreateWithoutUserInput> | QuickSMSSendCreateWithoutUserInput[] | QuickSMSSendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuickSMSSendCreateOrConnectWithoutUserInput | QuickSMSSendCreateOrConnectWithoutUserInput[]
    createMany?: QuickSMSSendCreateManyUserInputEnvelope
    connect?: QuickSMSSendWhereUniqueInput | QuickSMSSendWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FilesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput> | FilesCreateWithoutUserInput[] | FilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutUserInput | FilesCreateOrConnectWithoutUserInput[]
    createMany?: FilesCreateManyUserInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type ReceiverUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput> | ReceiverCreateWithoutUserInput[] | ReceiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutUserInput | ReceiverCreateOrConnectWithoutUserInput[]
    createMany?: ReceiverCreateManyUserInputEnvelope
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type QuickSMSSendUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuickSMSSendCreateWithoutUserInput, QuickSMSSendUncheckedCreateWithoutUserInput> | QuickSMSSendCreateWithoutUserInput[] | QuickSMSSendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuickSMSSendCreateOrConnectWithoutUserInput | QuickSMSSendCreateOrConnectWithoutUserInput[]
    createMany?: QuickSMSSendCreateManyUserInputEnvelope
    connect?: QuickSMSSendWhereUniqueInput | QuickSMSSendWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FilesUpdateManyWithoutUserNestedInput = {
    create?: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput> | FilesCreateWithoutUserInput[] | FilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutUserInput | FilesCreateOrConnectWithoutUserInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutUserInput | FilesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FilesCreateManyUserInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutUserInput | FilesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutUserInput | FilesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type ReceiverUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput> | ReceiverCreateWithoutUserInput[] | ReceiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutUserInput | ReceiverCreateOrConnectWithoutUserInput[]
    upsert?: ReceiverUpsertWithWhereUniqueWithoutUserInput | ReceiverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReceiverCreateManyUserInputEnvelope
    set?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    disconnect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    delete?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    update?: ReceiverUpdateWithWhereUniqueWithoutUserInput | ReceiverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReceiverUpdateManyWithWhereWithoutUserInput | ReceiverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReceiverScalarWhereInput | ReceiverScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type QuickSMSSendUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuickSMSSendCreateWithoutUserInput, QuickSMSSendUncheckedCreateWithoutUserInput> | QuickSMSSendCreateWithoutUserInput[] | QuickSMSSendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuickSMSSendCreateOrConnectWithoutUserInput | QuickSMSSendCreateOrConnectWithoutUserInput[]
    upsert?: QuickSMSSendUpsertWithWhereUniqueWithoutUserInput | QuickSMSSendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuickSMSSendCreateManyUserInputEnvelope
    set?: QuickSMSSendWhereUniqueInput | QuickSMSSendWhereUniqueInput[]
    disconnect?: QuickSMSSendWhereUniqueInput | QuickSMSSendWhereUniqueInput[]
    delete?: QuickSMSSendWhereUniqueInput | QuickSMSSendWhereUniqueInput[]
    connect?: QuickSMSSendWhereUniqueInput | QuickSMSSendWhereUniqueInput[]
    update?: QuickSMSSendUpdateWithWhereUniqueWithoutUserInput | QuickSMSSendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuickSMSSendUpdateManyWithWhereWithoutUserInput | QuickSMSSendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuickSMSSendScalarWhereInput | QuickSMSSendScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FilesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput> | FilesCreateWithoutUserInput[] | FilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutUserInput | FilesCreateOrConnectWithoutUserInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutUserInput | FilesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FilesCreateManyUserInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutUserInput | FilesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutUserInput | FilesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type ReceiverUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput> | ReceiverCreateWithoutUserInput[] | ReceiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutUserInput | ReceiverCreateOrConnectWithoutUserInput[]
    upsert?: ReceiverUpsertWithWhereUniqueWithoutUserInput | ReceiverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReceiverCreateManyUserInputEnvelope
    set?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    disconnect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    delete?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    update?: ReceiverUpdateWithWhereUniqueWithoutUserInput | ReceiverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReceiverUpdateManyWithWhereWithoutUserInput | ReceiverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReceiverScalarWhereInput | ReceiverScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type QuickSMSSendUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuickSMSSendCreateWithoutUserInput, QuickSMSSendUncheckedCreateWithoutUserInput> | QuickSMSSendCreateWithoutUserInput[] | QuickSMSSendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuickSMSSendCreateOrConnectWithoutUserInput | QuickSMSSendCreateOrConnectWithoutUserInput[]
    upsert?: QuickSMSSendUpsertWithWhereUniqueWithoutUserInput | QuickSMSSendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuickSMSSendCreateManyUserInputEnvelope
    set?: QuickSMSSendWhereUniqueInput | QuickSMSSendWhereUniqueInput[]
    disconnect?: QuickSMSSendWhereUniqueInput | QuickSMSSendWhereUniqueInput[]
    delete?: QuickSMSSendWhereUniqueInput | QuickSMSSendWhereUniqueInput[]
    connect?: QuickSMSSendWhereUniqueInput | QuickSMSSendWhereUniqueInput[]
    update?: QuickSMSSendUpdateWithWhereUniqueWithoutUserInput | QuickSMSSendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuickSMSSendUpdateManyWithWhereWithoutUserInput | QuickSMSSendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuickSMSSendScalarWhereInput | QuickSMSSendScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type Upload_ReceiverCreateNestedManyWithoutFileInput = {
    create?: XOR<Upload_ReceiverCreateWithoutFileInput, Upload_ReceiverUncheckedCreateWithoutFileInput> | Upload_ReceiverCreateWithoutFileInput[] | Upload_ReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Upload_ReceiverCreateOrConnectWithoutFileInput | Upload_ReceiverCreateOrConnectWithoutFileInput[]
    createMany?: Upload_ReceiverCreateManyFileInputEnvelope
    connect?: Upload_ReceiverWhereUniqueInput | Upload_ReceiverWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutFileInput = {
    create?: XOR<CampaignCreateWithoutFileInput, CampaignUncheckedCreateWithoutFileInput> | CampaignCreateWithoutFileInput[] | CampaignUncheckedCreateWithoutFileInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutFileInput | CampaignCreateOrConnectWithoutFileInput[]
    createMany?: CampaignCreateManyFileInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type Invalid_Upload_ReceiverCreateNestedManyWithoutFileInput = {
    create?: XOR<Invalid_Upload_ReceiverCreateWithoutFileInput, Invalid_Upload_ReceiverUncheckedCreateWithoutFileInput> | Invalid_Upload_ReceiverCreateWithoutFileInput[] | Invalid_Upload_ReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Invalid_Upload_ReceiverCreateOrConnectWithoutFileInput | Invalid_Upload_ReceiverCreateOrConnectWithoutFileInput[]
    createMany?: Invalid_Upload_ReceiverCreateManyFileInputEnvelope
    connect?: Invalid_Upload_ReceiverWhereUniqueInput | Invalid_Upload_ReceiverWhereUniqueInput[]
  }

  export type Upload_ReceiverUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<Upload_ReceiverCreateWithoutFileInput, Upload_ReceiverUncheckedCreateWithoutFileInput> | Upload_ReceiverCreateWithoutFileInput[] | Upload_ReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Upload_ReceiverCreateOrConnectWithoutFileInput | Upload_ReceiverCreateOrConnectWithoutFileInput[]
    createMany?: Upload_ReceiverCreateManyFileInputEnvelope
    connect?: Upload_ReceiverWhereUniqueInput | Upload_ReceiverWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<CampaignCreateWithoutFileInput, CampaignUncheckedCreateWithoutFileInput> | CampaignCreateWithoutFileInput[] | CampaignUncheckedCreateWithoutFileInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutFileInput | CampaignCreateOrConnectWithoutFileInput[]
    createMany?: CampaignCreateManyFileInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type Invalid_Upload_ReceiverUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<Invalid_Upload_ReceiverCreateWithoutFileInput, Invalid_Upload_ReceiverUncheckedCreateWithoutFileInput> | Invalid_Upload_ReceiverCreateWithoutFileInput[] | Invalid_Upload_ReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Invalid_Upload_ReceiverCreateOrConnectWithoutFileInput | Invalid_Upload_ReceiverCreateOrConnectWithoutFileInput[]
    createMany?: Invalid_Upload_ReceiverCreateManyFileInputEnvelope
    connect?: Invalid_Upload_ReceiverWhereUniqueInput | Invalid_Upload_ReceiverWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.FileType
  }

  export type EnumUploadStatusFieldUpdateOperationsInput = {
    set?: $Enums.UploadStatus
  }

  export type UserUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFilesInput, UserUpdateWithoutFilesInput>, UserUncheckedUpdateWithoutFilesInput>
  }

  export type Upload_ReceiverUpdateManyWithoutFileNestedInput = {
    create?: XOR<Upload_ReceiverCreateWithoutFileInput, Upload_ReceiverUncheckedCreateWithoutFileInput> | Upload_ReceiverCreateWithoutFileInput[] | Upload_ReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Upload_ReceiverCreateOrConnectWithoutFileInput | Upload_ReceiverCreateOrConnectWithoutFileInput[]
    upsert?: Upload_ReceiverUpsertWithWhereUniqueWithoutFileInput | Upload_ReceiverUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: Upload_ReceiverCreateManyFileInputEnvelope
    set?: Upload_ReceiverWhereUniqueInput | Upload_ReceiverWhereUniqueInput[]
    disconnect?: Upload_ReceiverWhereUniqueInput | Upload_ReceiverWhereUniqueInput[]
    delete?: Upload_ReceiverWhereUniqueInput | Upload_ReceiverWhereUniqueInput[]
    connect?: Upload_ReceiverWhereUniqueInput | Upload_ReceiverWhereUniqueInput[]
    update?: Upload_ReceiverUpdateWithWhereUniqueWithoutFileInput | Upload_ReceiverUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: Upload_ReceiverUpdateManyWithWhereWithoutFileInput | Upload_ReceiverUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: Upload_ReceiverScalarWhereInput | Upload_ReceiverScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutFileNestedInput = {
    create?: XOR<CampaignCreateWithoutFileInput, CampaignUncheckedCreateWithoutFileInput> | CampaignCreateWithoutFileInput[] | CampaignUncheckedCreateWithoutFileInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutFileInput | CampaignCreateOrConnectWithoutFileInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutFileInput | CampaignUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: CampaignCreateManyFileInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutFileInput | CampaignUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutFileInput | CampaignUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type Invalid_Upload_ReceiverUpdateManyWithoutFileNestedInput = {
    create?: XOR<Invalid_Upload_ReceiverCreateWithoutFileInput, Invalid_Upload_ReceiverUncheckedCreateWithoutFileInput> | Invalid_Upload_ReceiverCreateWithoutFileInput[] | Invalid_Upload_ReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Invalid_Upload_ReceiverCreateOrConnectWithoutFileInput | Invalid_Upload_ReceiverCreateOrConnectWithoutFileInput[]
    upsert?: Invalid_Upload_ReceiverUpsertWithWhereUniqueWithoutFileInput | Invalid_Upload_ReceiverUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: Invalid_Upload_ReceiverCreateManyFileInputEnvelope
    set?: Invalid_Upload_ReceiverWhereUniqueInput | Invalid_Upload_ReceiverWhereUniqueInput[]
    disconnect?: Invalid_Upload_ReceiverWhereUniqueInput | Invalid_Upload_ReceiverWhereUniqueInput[]
    delete?: Invalid_Upload_ReceiverWhereUniqueInput | Invalid_Upload_ReceiverWhereUniqueInput[]
    connect?: Invalid_Upload_ReceiverWhereUniqueInput | Invalid_Upload_ReceiverWhereUniqueInput[]
    update?: Invalid_Upload_ReceiverUpdateWithWhereUniqueWithoutFileInput | Invalid_Upload_ReceiverUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: Invalid_Upload_ReceiverUpdateManyWithWhereWithoutFileInput | Invalid_Upload_ReceiverUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: Invalid_Upload_ReceiverScalarWhereInput | Invalid_Upload_ReceiverScalarWhereInput[]
  }

  export type Upload_ReceiverUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<Upload_ReceiverCreateWithoutFileInput, Upload_ReceiverUncheckedCreateWithoutFileInput> | Upload_ReceiverCreateWithoutFileInput[] | Upload_ReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Upload_ReceiverCreateOrConnectWithoutFileInput | Upload_ReceiverCreateOrConnectWithoutFileInput[]
    upsert?: Upload_ReceiverUpsertWithWhereUniqueWithoutFileInput | Upload_ReceiverUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: Upload_ReceiverCreateManyFileInputEnvelope
    set?: Upload_ReceiverWhereUniqueInput | Upload_ReceiverWhereUniqueInput[]
    disconnect?: Upload_ReceiverWhereUniqueInput | Upload_ReceiverWhereUniqueInput[]
    delete?: Upload_ReceiverWhereUniqueInput | Upload_ReceiverWhereUniqueInput[]
    connect?: Upload_ReceiverWhereUniqueInput | Upload_ReceiverWhereUniqueInput[]
    update?: Upload_ReceiverUpdateWithWhereUniqueWithoutFileInput | Upload_ReceiverUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: Upload_ReceiverUpdateManyWithWhereWithoutFileInput | Upload_ReceiverUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: Upload_ReceiverScalarWhereInput | Upload_ReceiverScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<CampaignCreateWithoutFileInput, CampaignUncheckedCreateWithoutFileInput> | CampaignCreateWithoutFileInput[] | CampaignUncheckedCreateWithoutFileInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutFileInput | CampaignCreateOrConnectWithoutFileInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutFileInput | CampaignUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: CampaignCreateManyFileInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutFileInput | CampaignUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutFileInput | CampaignUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type Invalid_Upload_ReceiverUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<Invalid_Upload_ReceiverCreateWithoutFileInput, Invalid_Upload_ReceiverUncheckedCreateWithoutFileInput> | Invalid_Upload_ReceiverCreateWithoutFileInput[] | Invalid_Upload_ReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Invalid_Upload_ReceiverCreateOrConnectWithoutFileInput | Invalid_Upload_ReceiverCreateOrConnectWithoutFileInput[]
    upsert?: Invalid_Upload_ReceiverUpsertWithWhereUniqueWithoutFileInput | Invalid_Upload_ReceiverUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: Invalid_Upload_ReceiverCreateManyFileInputEnvelope
    set?: Invalid_Upload_ReceiverWhereUniqueInput | Invalid_Upload_ReceiverWhereUniqueInput[]
    disconnect?: Invalid_Upload_ReceiverWhereUniqueInput | Invalid_Upload_ReceiverWhereUniqueInput[]
    delete?: Invalid_Upload_ReceiverWhereUniqueInput | Invalid_Upload_ReceiverWhereUniqueInput[]
    connect?: Invalid_Upload_ReceiverWhereUniqueInput | Invalid_Upload_ReceiverWhereUniqueInput[]
    update?: Invalid_Upload_ReceiverUpdateWithWhereUniqueWithoutFileInput | Invalid_Upload_ReceiverUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: Invalid_Upload_ReceiverUpdateManyWithWhereWithoutFileInput | Invalid_Upload_ReceiverUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: Invalid_Upload_ReceiverScalarWhereInput | Invalid_Upload_ReceiverScalarWhereInput[]
  }

  export type FilesCreateNestedOneWithoutReceiversInput = {
    create?: XOR<FilesCreateWithoutReceiversInput, FilesUncheckedCreateWithoutReceiversInput>
    connectOrCreate?: FilesCreateOrConnectWithoutReceiversInput
    connect?: FilesWhereUniqueInput
  }

  export type FilesUpdateOneRequiredWithoutReceiversNestedInput = {
    create?: XOR<FilesCreateWithoutReceiversInput, FilesUncheckedCreateWithoutReceiversInput>
    connectOrCreate?: FilesCreateOrConnectWithoutReceiversInput
    upsert?: FilesUpsertWithoutReceiversInput
    connect?: FilesWhereUniqueInput
    update?: XOR<XOR<FilesUpdateToOneWithWhereWithoutReceiversInput, FilesUpdateWithoutReceiversInput>, FilesUncheckedUpdateWithoutReceiversInput>
  }

  export type FilesCreateNestedOneWithoutInvalidUploadReceiversInput = {
    create?: XOR<FilesCreateWithoutInvalidUploadReceiversInput, FilesUncheckedCreateWithoutInvalidUploadReceiversInput>
    connectOrCreate?: FilesCreateOrConnectWithoutInvalidUploadReceiversInput
    connect?: FilesWhereUniqueInput
  }

  export type FilesUpdateOneRequiredWithoutInvalidUploadReceiversNestedInput = {
    create?: XOR<FilesCreateWithoutInvalidUploadReceiversInput, FilesUncheckedCreateWithoutInvalidUploadReceiversInput>
    connectOrCreate?: FilesCreateOrConnectWithoutInvalidUploadReceiversInput
    upsert?: FilesUpsertWithoutInvalidUploadReceiversInput
    connect?: FilesWhereUniqueInput
    update?: XOR<XOR<FilesUpdateToOneWithWhereWithoutInvalidUploadReceiversInput, FilesUpdateWithoutInvalidUploadReceiversInput>, FilesUncheckedUpdateWithoutInvalidUploadReceiversInput>
  }

  export type UserCreateNestedOneWithoutReceiverInput = {
    create?: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverInput
    connect?: UserWhereUniqueInput
  }

  export type Receiver_MessageCreateNestedOneWithoutReceiverInput = {
    create?: XOR<Receiver_MessageCreateWithoutReceiverInput, Receiver_MessageUncheckedCreateWithoutReceiverInput>
    connectOrCreate?: Receiver_MessageCreateOrConnectWithoutReceiverInput
    connect?: Receiver_MessageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReceiverNestedInput = {
    create?: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverInput
    upsert?: UserUpsertWithoutReceiverInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiverInput, UserUpdateWithoutReceiverInput>, UserUncheckedUpdateWithoutReceiverInput>
  }

  export type Receiver_MessageUpdateOneWithoutReceiverNestedInput = {
    create?: XOR<Receiver_MessageCreateWithoutReceiverInput, Receiver_MessageUncheckedCreateWithoutReceiverInput>
    connectOrCreate?: Receiver_MessageCreateOrConnectWithoutReceiverInput
    upsert?: Receiver_MessageUpsertWithoutReceiverInput
    disconnect?: Receiver_MessageWhereInput | boolean
    delete?: Receiver_MessageWhereInput | boolean
    connect?: Receiver_MessageWhereUniqueInput
    update?: XOR<XOR<Receiver_MessageUpdateToOneWithWhereWithoutReceiverInput, Receiver_MessageUpdateWithoutReceiverInput>, Receiver_MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type ReceiverCreateNestedManyWithoutReceiverMessageInput = {
    create?: XOR<ReceiverCreateWithoutReceiverMessageInput, ReceiverUncheckedCreateWithoutReceiverMessageInput> | ReceiverCreateWithoutReceiverMessageInput[] | ReceiverUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutReceiverMessageInput | ReceiverCreateOrConnectWithoutReceiverMessageInput[]
    createMany?: ReceiverCreateManyReceiverMessageInputEnvelope
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
  }

  export type ReceiverUncheckedCreateNestedManyWithoutReceiverMessageInput = {
    create?: XOR<ReceiverCreateWithoutReceiverMessageInput, ReceiverUncheckedCreateWithoutReceiverMessageInput> | ReceiverCreateWithoutReceiverMessageInput[] | ReceiverUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutReceiverMessageInput | ReceiverCreateOrConnectWithoutReceiverMessageInput[]
    createMany?: ReceiverCreateManyReceiverMessageInputEnvelope
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
  }

  export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus
  }

  export type ReceiverUpdateManyWithoutReceiverMessageNestedInput = {
    create?: XOR<ReceiverCreateWithoutReceiverMessageInput, ReceiverUncheckedCreateWithoutReceiverMessageInput> | ReceiverCreateWithoutReceiverMessageInput[] | ReceiverUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutReceiverMessageInput | ReceiverCreateOrConnectWithoutReceiverMessageInput[]
    upsert?: ReceiverUpsertWithWhereUniqueWithoutReceiverMessageInput | ReceiverUpsertWithWhereUniqueWithoutReceiverMessageInput[]
    createMany?: ReceiverCreateManyReceiverMessageInputEnvelope
    set?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    disconnect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    delete?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    update?: ReceiverUpdateWithWhereUniqueWithoutReceiverMessageInput | ReceiverUpdateWithWhereUniqueWithoutReceiverMessageInput[]
    updateMany?: ReceiverUpdateManyWithWhereWithoutReceiverMessageInput | ReceiverUpdateManyWithWhereWithoutReceiverMessageInput[]
    deleteMany?: ReceiverScalarWhereInput | ReceiverScalarWhereInput[]
  }

  export type ReceiverUncheckedUpdateManyWithoutReceiverMessageNestedInput = {
    create?: XOR<ReceiverCreateWithoutReceiverMessageInput, ReceiverUncheckedCreateWithoutReceiverMessageInput> | ReceiverCreateWithoutReceiverMessageInput[] | ReceiverUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutReceiverMessageInput | ReceiverCreateOrConnectWithoutReceiverMessageInput[]
    upsert?: ReceiverUpsertWithWhereUniqueWithoutReceiverMessageInput | ReceiverUpsertWithWhereUniqueWithoutReceiverMessageInput[]
    createMany?: ReceiverCreateManyReceiverMessageInputEnvelope
    set?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    disconnect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    delete?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    update?: ReceiverUpdateWithWhereUniqueWithoutReceiverMessageInput | ReceiverUpdateWithWhereUniqueWithoutReceiverMessageInput[]
    updateMany?: ReceiverUpdateManyWithWhereWithoutReceiverMessageInput | ReceiverUpdateManyWithWhereWithoutReceiverMessageInput[]
    deleteMany?: ReceiverScalarWhereInput | ReceiverScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type FilesCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<FilesCreateWithoutCampaignsInput, FilesUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: FilesCreateOrConnectWithoutCampaignsInput
    connect?: FilesWhereUniqueInput
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type FilesUpdateOneWithoutCampaignsNestedInput = {
    create?: XOR<FilesCreateWithoutCampaignsInput, FilesUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: FilesCreateOrConnectWithoutCampaignsInput
    upsert?: FilesUpsertWithoutCampaignsInput
    disconnect?: FilesWhereInput | boolean
    delete?: FilesWhereInput | boolean
    connect?: FilesWhereUniqueInput
    update?: XOR<XOR<FilesUpdateToOneWithWhereWithoutCampaignsInput, FilesUpdateWithoutCampaignsInput>, FilesUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserCreateNestedOneWithoutQuickSendsInput = {
    create?: XOR<UserCreateWithoutQuickSendsInput, UserUncheckedCreateWithoutQuickSendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuickSendsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumQuickSendStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuickSendStatus
  }

  export type UserUpdateOneRequiredWithoutQuickSendsNestedInput = {
    create?: XOR<UserCreateWithoutQuickSendsInput, UserUncheckedCreateWithoutQuickSendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuickSendsInput
    upsert?: UserUpsertWithoutQuickSendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuickSendsInput, UserUpdateWithoutQuickSendsInput>, UserUncheckedUpdateWithoutQuickSendsInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type GuestFileCreateNestedManyWithoutGuestInput = {
    create?: XOR<GuestFileCreateWithoutGuestInput, GuestFileUncheckedCreateWithoutGuestInput> | GuestFileCreateWithoutGuestInput[] | GuestFileUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: GuestFileCreateOrConnectWithoutGuestInput | GuestFileCreateOrConnectWithoutGuestInput[]
    createMany?: GuestFileCreateManyGuestInputEnvelope
    connect?: GuestFileWhereUniqueInput | GuestFileWhereUniqueInput[]
  }

  export type GuestFileUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<GuestFileCreateWithoutGuestInput, GuestFileUncheckedCreateWithoutGuestInput> | GuestFileCreateWithoutGuestInput[] | GuestFileUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: GuestFileCreateOrConnectWithoutGuestInput | GuestFileCreateOrConnectWithoutGuestInput[]
    createMany?: GuestFileCreateManyGuestInputEnvelope
    connect?: GuestFileWhereUniqueInput | GuestFileWhereUniqueInput[]
  }

  export type GuestFileUpdateManyWithoutGuestNestedInput = {
    create?: XOR<GuestFileCreateWithoutGuestInput, GuestFileUncheckedCreateWithoutGuestInput> | GuestFileCreateWithoutGuestInput[] | GuestFileUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: GuestFileCreateOrConnectWithoutGuestInput | GuestFileCreateOrConnectWithoutGuestInput[]
    upsert?: GuestFileUpsertWithWhereUniqueWithoutGuestInput | GuestFileUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: GuestFileCreateManyGuestInputEnvelope
    set?: GuestFileWhereUniqueInput | GuestFileWhereUniqueInput[]
    disconnect?: GuestFileWhereUniqueInput | GuestFileWhereUniqueInput[]
    delete?: GuestFileWhereUniqueInput | GuestFileWhereUniqueInput[]
    connect?: GuestFileWhereUniqueInput | GuestFileWhereUniqueInput[]
    update?: GuestFileUpdateWithWhereUniqueWithoutGuestInput | GuestFileUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: GuestFileUpdateManyWithWhereWithoutGuestInput | GuestFileUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: GuestFileScalarWhereInput | GuestFileScalarWhereInput[]
  }

  export type GuestFileUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<GuestFileCreateWithoutGuestInput, GuestFileUncheckedCreateWithoutGuestInput> | GuestFileCreateWithoutGuestInput[] | GuestFileUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: GuestFileCreateOrConnectWithoutGuestInput | GuestFileCreateOrConnectWithoutGuestInput[]
    upsert?: GuestFileUpsertWithWhereUniqueWithoutGuestInput | GuestFileUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: GuestFileCreateManyGuestInputEnvelope
    set?: GuestFileWhereUniqueInput | GuestFileWhereUniqueInput[]
    disconnect?: GuestFileWhereUniqueInput | GuestFileWhereUniqueInput[]
    delete?: GuestFileWhereUniqueInput | GuestFileWhereUniqueInput[]
    connect?: GuestFileWhereUniqueInput | GuestFileWhereUniqueInput[]
    update?: GuestFileUpdateWithWhereUniqueWithoutGuestInput | GuestFileUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: GuestFileUpdateManyWithWhereWithoutGuestInput | GuestFileUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: GuestFileScalarWhereInput | GuestFileScalarWhereInput[]
  }

  export type GuestCreateNestedOneWithoutFilesInput = {
    create?: XOR<GuestCreateWithoutFilesInput, GuestUncheckedCreateWithoutFilesInput>
    connectOrCreate?: GuestCreateOrConnectWithoutFilesInput
    connect?: GuestWhereUniqueInput
  }

  export type GuestReceiverCreateNestedManyWithoutFileInput = {
    create?: XOR<GuestReceiverCreateWithoutFileInput, GuestReceiverUncheckedCreateWithoutFileInput> | GuestReceiverCreateWithoutFileInput[] | GuestReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: GuestReceiverCreateOrConnectWithoutFileInput | GuestReceiverCreateOrConnectWithoutFileInput[]
    createMany?: GuestReceiverCreateManyFileInputEnvelope
    connect?: GuestReceiverWhereUniqueInput | GuestReceiverWhereUniqueInput[]
  }

  export type InvalidGuestReceiverCreateNestedManyWithoutFileInput = {
    create?: XOR<InvalidGuestReceiverCreateWithoutFileInput, InvalidGuestReceiverUncheckedCreateWithoutFileInput> | InvalidGuestReceiverCreateWithoutFileInput[] | InvalidGuestReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: InvalidGuestReceiverCreateOrConnectWithoutFileInput | InvalidGuestReceiverCreateOrConnectWithoutFileInput[]
    createMany?: InvalidGuestReceiverCreateManyFileInputEnvelope
    connect?: InvalidGuestReceiverWhereUniqueInput | InvalidGuestReceiverWhereUniqueInput[]
  }

  export type GuestReceiverUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<GuestReceiverCreateWithoutFileInput, GuestReceiverUncheckedCreateWithoutFileInput> | GuestReceiverCreateWithoutFileInput[] | GuestReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: GuestReceiverCreateOrConnectWithoutFileInput | GuestReceiverCreateOrConnectWithoutFileInput[]
    createMany?: GuestReceiverCreateManyFileInputEnvelope
    connect?: GuestReceiverWhereUniqueInput | GuestReceiverWhereUniqueInput[]
  }

  export type InvalidGuestReceiverUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<InvalidGuestReceiverCreateWithoutFileInput, InvalidGuestReceiverUncheckedCreateWithoutFileInput> | InvalidGuestReceiverCreateWithoutFileInput[] | InvalidGuestReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: InvalidGuestReceiverCreateOrConnectWithoutFileInput | InvalidGuestReceiverCreateOrConnectWithoutFileInput[]
    createMany?: InvalidGuestReceiverCreateManyFileInputEnvelope
    connect?: InvalidGuestReceiverWhereUniqueInput | InvalidGuestReceiverWhereUniqueInput[]
  }

  export type GuestUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<GuestCreateWithoutFilesInput, GuestUncheckedCreateWithoutFilesInput>
    connectOrCreate?: GuestCreateOrConnectWithoutFilesInput
    upsert?: GuestUpsertWithoutFilesInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutFilesInput, GuestUpdateWithoutFilesInput>, GuestUncheckedUpdateWithoutFilesInput>
  }

  export type GuestReceiverUpdateManyWithoutFileNestedInput = {
    create?: XOR<GuestReceiverCreateWithoutFileInput, GuestReceiverUncheckedCreateWithoutFileInput> | GuestReceiverCreateWithoutFileInput[] | GuestReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: GuestReceiverCreateOrConnectWithoutFileInput | GuestReceiverCreateOrConnectWithoutFileInput[]
    upsert?: GuestReceiverUpsertWithWhereUniqueWithoutFileInput | GuestReceiverUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: GuestReceiverCreateManyFileInputEnvelope
    set?: GuestReceiverWhereUniqueInput | GuestReceiverWhereUniqueInput[]
    disconnect?: GuestReceiverWhereUniqueInput | GuestReceiverWhereUniqueInput[]
    delete?: GuestReceiverWhereUniqueInput | GuestReceiverWhereUniqueInput[]
    connect?: GuestReceiverWhereUniqueInput | GuestReceiverWhereUniqueInput[]
    update?: GuestReceiverUpdateWithWhereUniqueWithoutFileInput | GuestReceiverUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: GuestReceiverUpdateManyWithWhereWithoutFileInput | GuestReceiverUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: GuestReceiverScalarWhereInput | GuestReceiverScalarWhereInput[]
  }

  export type InvalidGuestReceiverUpdateManyWithoutFileNestedInput = {
    create?: XOR<InvalidGuestReceiverCreateWithoutFileInput, InvalidGuestReceiverUncheckedCreateWithoutFileInput> | InvalidGuestReceiverCreateWithoutFileInput[] | InvalidGuestReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: InvalidGuestReceiverCreateOrConnectWithoutFileInput | InvalidGuestReceiverCreateOrConnectWithoutFileInput[]
    upsert?: InvalidGuestReceiverUpsertWithWhereUniqueWithoutFileInput | InvalidGuestReceiverUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: InvalidGuestReceiverCreateManyFileInputEnvelope
    set?: InvalidGuestReceiverWhereUniqueInput | InvalidGuestReceiverWhereUniqueInput[]
    disconnect?: InvalidGuestReceiverWhereUniqueInput | InvalidGuestReceiverWhereUniqueInput[]
    delete?: InvalidGuestReceiverWhereUniqueInput | InvalidGuestReceiverWhereUniqueInput[]
    connect?: InvalidGuestReceiverWhereUniqueInput | InvalidGuestReceiverWhereUniqueInput[]
    update?: InvalidGuestReceiverUpdateWithWhereUniqueWithoutFileInput | InvalidGuestReceiverUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: InvalidGuestReceiverUpdateManyWithWhereWithoutFileInput | InvalidGuestReceiverUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: InvalidGuestReceiverScalarWhereInput | InvalidGuestReceiverScalarWhereInput[]
  }

  export type GuestReceiverUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<GuestReceiverCreateWithoutFileInput, GuestReceiverUncheckedCreateWithoutFileInput> | GuestReceiverCreateWithoutFileInput[] | GuestReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: GuestReceiverCreateOrConnectWithoutFileInput | GuestReceiverCreateOrConnectWithoutFileInput[]
    upsert?: GuestReceiverUpsertWithWhereUniqueWithoutFileInput | GuestReceiverUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: GuestReceiverCreateManyFileInputEnvelope
    set?: GuestReceiverWhereUniqueInput | GuestReceiverWhereUniqueInput[]
    disconnect?: GuestReceiverWhereUniqueInput | GuestReceiverWhereUniqueInput[]
    delete?: GuestReceiverWhereUniqueInput | GuestReceiverWhereUniqueInput[]
    connect?: GuestReceiverWhereUniqueInput | GuestReceiverWhereUniqueInput[]
    update?: GuestReceiverUpdateWithWhereUniqueWithoutFileInput | GuestReceiverUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: GuestReceiverUpdateManyWithWhereWithoutFileInput | GuestReceiverUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: GuestReceiverScalarWhereInput | GuestReceiverScalarWhereInput[]
  }

  export type InvalidGuestReceiverUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<InvalidGuestReceiverCreateWithoutFileInput, InvalidGuestReceiverUncheckedCreateWithoutFileInput> | InvalidGuestReceiverCreateWithoutFileInput[] | InvalidGuestReceiverUncheckedCreateWithoutFileInput[]
    connectOrCreate?: InvalidGuestReceiverCreateOrConnectWithoutFileInput | InvalidGuestReceiverCreateOrConnectWithoutFileInput[]
    upsert?: InvalidGuestReceiverUpsertWithWhereUniqueWithoutFileInput | InvalidGuestReceiverUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: InvalidGuestReceiverCreateManyFileInputEnvelope
    set?: InvalidGuestReceiverWhereUniqueInput | InvalidGuestReceiverWhereUniqueInput[]
    disconnect?: InvalidGuestReceiverWhereUniqueInput | InvalidGuestReceiverWhereUniqueInput[]
    delete?: InvalidGuestReceiverWhereUniqueInput | InvalidGuestReceiverWhereUniqueInput[]
    connect?: InvalidGuestReceiverWhereUniqueInput | InvalidGuestReceiverWhereUniqueInput[]
    update?: InvalidGuestReceiverUpdateWithWhereUniqueWithoutFileInput | InvalidGuestReceiverUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: InvalidGuestReceiverUpdateManyWithWhereWithoutFileInput | InvalidGuestReceiverUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: InvalidGuestReceiverScalarWhereInput | InvalidGuestReceiverScalarWhereInput[]
  }

  export type GuestFileCreateNestedOneWithoutReceiversInput = {
    create?: XOR<GuestFileCreateWithoutReceiversInput, GuestFileUncheckedCreateWithoutReceiversInput>
    connectOrCreate?: GuestFileCreateOrConnectWithoutReceiversInput
    connect?: GuestFileWhereUniqueInput
  }

  export type GuestFileUpdateOneRequiredWithoutReceiversNestedInput = {
    create?: XOR<GuestFileCreateWithoutReceiversInput, GuestFileUncheckedCreateWithoutReceiversInput>
    connectOrCreate?: GuestFileCreateOrConnectWithoutReceiversInput
    upsert?: GuestFileUpsertWithoutReceiversInput
    connect?: GuestFileWhereUniqueInput
    update?: XOR<XOR<GuestFileUpdateToOneWithWhereWithoutReceiversInput, GuestFileUpdateWithoutReceiversInput>, GuestFileUncheckedUpdateWithoutReceiversInput>
  }

  export type GuestFileCreateNestedOneWithoutInvalidGuestReceiversInput = {
    create?: XOR<GuestFileCreateWithoutInvalidGuestReceiversInput, GuestFileUncheckedCreateWithoutInvalidGuestReceiversInput>
    connectOrCreate?: GuestFileCreateOrConnectWithoutInvalidGuestReceiversInput
    connect?: GuestFileWhereUniqueInput
  }

  export type GuestFileUpdateOneRequiredWithoutInvalidGuestReceiversNestedInput = {
    create?: XOR<GuestFileCreateWithoutInvalidGuestReceiversInput, GuestFileUncheckedCreateWithoutInvalidGuestReceiversInput>
    connectOrCreate?: GuestFileCreateOrConnectWithoutInvalidGuestReceiversInput
    upsert?: GuestFileUpsertWithoutInvalidGuestReceiversInput
    connect?: GuestFileWhereUniqueInput
    update?: XOR<XOR<GuestFileUpdateToOneWithWhereWithoutInvalidGuestReceiversInput, GuestFileUpdateWithoutInvalidGuestReceiversInput>, GuestFileUncheckedUpdateWithoutInvalidGuestReceiversInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAccountTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccountTypeNullableFilter<$PrismaModel> | $Enums.AccountType | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAccountTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccountTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AccountType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type NestedEnumUploadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusFilter<$PrismaModel> | $Enums.UploadStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type NestedEnumUploadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusWithAggregatesFilter<$PrismaModel> | $Enums.UploadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUploadStatusFilter<$PrismaModel>
    _max?: NestedEnumUploadStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumQuickSendStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuickSendStatus | EnumQuickSendStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuickSendStatus[] | ListEnumQuickSendStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuickSendStatus[] | ListEnumQuickSendStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuickSendStatusFilter<$PrismaModel> | $Enums.QuickSendStatus
  }

  export type NestedEnumQuickSendStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuickSendStatus | EnumQuickSendStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuickSendStatus[] | ListEnumQuickSendStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuickSendStatus[] | ListEnumQuickSendStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuickSendStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuickSendStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuickSendStatusFilter<$PrismaModel>
    _max?: NestedEnumQuickSendStatusFilter<$PrismaModel>
  }

  export type FilesCreateWithoutUserInput = {
    id?: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: Upload_ReceiverCreateNestedManyWithoutFileInput
    campaigns?: CampaignCreateNestedManyWithoutFileInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverCreateNestedManyWithoutFileInput
  }

  export type FilesUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: Upload_ReceiverUncheckedCreateNestedManyWithoutFileInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutFileInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUncheckedCreateNestedManyWithoutFileInput
  }

  export type FilesCreateOrConnectWithoutUserInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput>
  }

  export type FilesCreateManyUserInputEnvelope = {
    data: FilesCreateManyUserInput | FilesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReceiverCreateWithoutUserInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverMessage?: Receiver_MessageCreateNestedOneWithoutReceiverInput
  }

  export type ReceiverUncheckedCreateWithoutUserInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverMessageId?: string | null
  }

  export type ReceiverCreateOrConnectWithoutUserInput = {
    where: ReceiverWhereUniqueInput
    create: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput>
  }

  export type ReceiverCreateManyUserInputEnvelope = {
    data: ReceiverCreateManyUserInput | ReceiverCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutUserInput = {
    id?: string
    name: string
    messageText: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    recipientsNumber?: number | null
    deliveredNumber?: number
    failedNumber?: number
    deliveryRate?: number
    totalSmsCost?: number | null
    paymentReceiptImage?: string | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    file?: FilesCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    messageText: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    fileId?: string | null
    recipientsNumber?: number | null
    deliveredNumber?: number
    failedNumber?: number
    deliveryRate?: number
    totalSmsCost?: number | null
    paymentReceiptImage?: string | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutUserInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignCreateManyUserInputEnvelope = {
    data: CampaignCreateManyUserInput | CampaignCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuickSMSSendCreateWithoutUserInput = {
    id?: string
    toPhoneNumber: string
    message: string
    status?: $Enums.QuickSendStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuickSMSSendUncheckedCreateWithoutUserInput = {
    id?: string
    toPhoneNumber: string
    message: string
    status?: $Enums.QuickSendStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuickSMSSendCreateOrConnectWithoutUserInput = {
    where: QuickSMSSendWhereUniqueInput
    create: XOR<QuickSMSSendCreateWithoutUserInput, QuickSMSSendUncheckedCreateWithoutUserInput>
  }

  export type QuickSMSSendCreateManyUserInputEnvelope = {
    data: QuickSMSSendCreateManyUserInput | QuickSMSSendCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    paidOn?: Date | string
    isPaid?: boolean
    isSmsSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    paidOn?: Date | string
    isPaid?: boolean
    isSmsSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FilesUpsertWithWhereUniqueWithoutUserInput = {
    where: FilesWhereUniqueInput
    update: XOR<FilesUpdateWithoutUserInput, FilesUncheckedUpdateWithoutUserInput>
    create: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput>
  }

  export type FilesUpdateWithWhereUniqueWithoutUserInput = {
    where: FilesWhereUniqueInput
    data: XOR<FilesUpdateWithoutUserInput, FilesUncheckedUpdateWithoutUserInput>
  }

  export type FilesUpdateManyWithWhereWithoutUserInput = {
    where: FilesScalarWhereInput
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyWithoutUserInput>
  }

  export type FilesScalarWhereInput = {
    AND?: FilesScalarWhereInput | FilesScalarWhereInput[]
    OR?: FilesScalarWhereInput[]
    NOT?: FilesScalarWhereInput | FilesScalarWhereInput[]
    id?: StringFilter<"Files"> | string
    userId?: StringFilter<"Files"> | string
    name?: StringFilter<"Files"> | string
    path?: StringFilter<"Files"> | string
    numberOfReceivers?: IntNullableFilter<"Files"> | number | null
    invalidRowsPath?: StringNullableFilter<"Files"> | string | null
    sizeInBytes?: BigIntFilter<"Files"> | bigint | number
    type?: EnumFileTypeFilter<"Files"> | $Enums.FileType
    uploadStatus?: EnumUploadStatusFilter<"Files"> | $Enums.UploadStatus
    createdAt?: DateTimeFilter<"Files"> | Date | string
    updatedAt?: DateTimeFilter<"Files"> | Date | string
  }

  export type ReceiverUpsertWithWhereUniqueWithoutUserInput = {
    where: ReceiverWhereUniqueInput
    update: XOR<ReceiverUpdateWithoutUserInput, ReceiverUncheckedUpdateWithoutUserInput>
    create: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput>
  }

  export type ReceiverUpdateWithWhereUniqueWithoutUserInput = {
    where: ReceiverWhereUniqueInput
    data: XOR<ReceiverUpdateWithoutUserInput, ReceiverUncheckedUpdateWithoutUserInput>
  }

  export type ReceiverUpdateManyWithWhereWithoutUserInput = {
    where: ReceiverScalarWhereInput
    data: XOR<ReceiverUpdateManyMutationInput, ReceiverUncheckedUpdateManyWithoutUserInput>
  }

  export type ReceiverScalarWhereInput = {
    AND?: ReceiverScalarWhereInput | ReceiverScalarWhereInput[]
    OR?: ReceiverScalarWhereInput[]
    NOT?: ReceiverScalarWhereInput | ReceiverScalarWhereInput[]
    id?: StringFilter<"Receiver"> | string
    firstName?: StringNullableFilter<"Receiver"> | string | null
    lastName?: StringNullableFilter<"Receiver"> | string | null
    province?: StringNullableFilter<"Receiver"> | string | null
    district?: StringNullableFilter<"Receiver"> | string | null
    municipality?: StringNullableFilter<"Receiver"> | string | null
    phoneNumber?: StringFilter<"Receiver"> | string
    isDeleted?: BoolFilter<"Receiver"> | boolean
    createdAt?: DateTimeFilter<"Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Receiver"> | Date | string
    receiverMessageId?: StringNullableFilter<"Receiver"> | string | null
    userId?: StringFilter<"Receiver"> | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
  }

  export type CampaignUpdateManyWithWhereWithoutUserInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutUserInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    userId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    messageText?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFilter<"Campaign"> | $Enums.DeliveryStatus
    province?: StringNullableFilter<"Campaign"> | string | null
    district?: StringNullableFilter<"Campaign"> | string | null
    municipality?: StringNullableFilter<"Campaign"> | string | null
    fileId?: StringNullableFilter<"Campaign"> | string | null
    recipientsNumber?: IntNullableFilter<"Campaign"> | number | null
    deliveredNumber?: IntFilter<"Campaign"> | number
    failedNumber?: IntFilter<"Campaign"> | number
    deliveryRate?: FloatFilter<"Campaign"> | number
    totalSmsCost?: FloatNullableFilter<"Campaign"> | number | null
    paymentReceiptImage?: StringNullableFilter<"Campaign"> | string | null
    paid?: BoolFilter<"Campaign"> | boolean
    submitDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type QuickSMSSendUpsertWithWhereUniqueWithoutUserInput = {
    where: QuickSMSSendWhereUniqueInput
    update: XOR<QuickSMSSendUpdateWithoutUserInput, QuickSMSSendUncheckedUpdateWithoutUserInput>
    create: XOR<QuickSMSSendCreateWithoutUserInput, QuickSMSSendUncheckedCreateWithoutUserInput>
  }

  export type QuickSMSSendUpdateWithWhereUniqueWithoutUserInput = {
    where: QuickSMSSendWhereUniqueInput
    data: XOR<QuickSMSSendUpdateWithoutUserInput, QuickSMSSendUncheckedUpdateWithoutUserInput>
  }

  export type QuickSMSSendUpdateManyWithWhereWithoutUserInput = {
    where: QuickSMSSendScalarWhereInput
    data: XOR<QuickSMSSendUpdateManyMutationInput, QuickSMSSendUncheckedUpdateManyWithoutUserInput>
  }

  export type QuickSMSSendScalarWhereInput = {
    AND?: QuickSMSSendScalarWhereInput | QuickSMSSendScalarWhereInput[]
    OR?: QuickSMSSendScalarWhereInput[]
    NOT?: QuickSMSSendScalarWhereInput | QuickSMSSendScalarWhereInput[]
    id?: StringFilter<"QuickSMSSend"> | string
    userId?: StringFilter<"QuickSMSSend"> | string
    toPhoneNumber?: StringFilter<"QuickSMSSend"> | string
    message?: StringFilter<"QuickSMSSend"> | string
    status?: EnumQuickSendStatusFilter<"QuickSMSSend"> | $Enums.QuickSendStatus
    createdAt?: DateTimeFilter<"QuickSMSSend"> | Date | string
    updatedAt?: DateTimeFilter<"QuickSMSSend"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    paidOn?: DateTimeFilter<"Payment"> | Date | string
    isPaid?: BoolFilter<"Payment"> | boolean
    isSmsSent?: BoolFilter<"Payment"> | boolean
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UserCreateWithoutFilesInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    receiver?: ReceiverCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    quickSends?: QuickSMSSendCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    receiver?: ReceiverUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    quickSends?: QuickSMSSendUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type Upload_ReceiverCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Upload_ReceiverUncheckedCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Upload_ReceiverCreateOrConnectWithoutFileInput = {
    where: Upload_ReceiverWhereUniqueInput
    create: XOR<Upload_ReceiverCreateWithoutFileInput, Upload_ReceiverUncheckedCreateWithoutFileInput>
  }

  export type Upload_ReceiverCreateManyFileInputEnvelope = {
    data: Upload_ReceiverCreateManyFileInput | Upload_ReceiverCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutFileInput = {
    id?: string
    name: string
    messageText: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    recipientsNumber?: number | null
    deliveredNumber?: number
    failedNumber?: number
    deliveryRate?: number
    totalSmsCost?: number | null
    paymentReceiptImage?: string | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutFileInput = {
    id?: string
    userId: string
    name: string
    messageText: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    recipientsNumber?: number | null
    deliveredNumber?: number
    failedNumber?: number
    deliveryRate?: number
    totalSmsCost?: number | null
    paymentReceiptImage?: string | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutFileInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutFileInput, CampaignUncheckedCreateWithoutFileInput>
  }

  export type CampaignCreateManyFileInputEnvelope = {
    data: CampaignCreateManyFileInput | CampaignCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type Invalid_Upload_ReceiverCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_Upload_ReceiverUncheckedCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_Upload_ReceiverCreateOrConnectWithoutFileInput = {
    where: Invalid_Upload_ReceiverWhereUniqueInput
    create: XOR<Invalid_Upload_ReceiverCreateWithoutFileInput, Invalid_Upload_ReceiverUncheckedCreateWithoutFileInput>
  }

  export type Invalid_Upload_ReceiverCreateManyFileInputEnvelope = {
    data: Invalid_Upload_ReceiverCreateManyFileInput | Invalid_Upload_ReceiverCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiver?: ReceiverUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    quickSends?: QuickSMSSendUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiver?: ReceiverUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    quickSends?: QuickSMSSendUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Upload_ReceiverUpsertWithWhereUniqueWithoutFileInput = {
    where: Upload_ReceiverWhereUniqueInput
    update: XOR<Upload_ReceiverUpdateWithoutFileInput, Upload_ReceiverUncheckedUpdateWithoutFileInput>
    create: XOR<Upload_ReceiverCreateWithoutFileInput, Upload_ReceiverUncheckedCreateWithoutFileInput>
  }

  export type Upload_ReceiverUpdateWithWhereUniqueWithoutFileInput = {
    where: Upload_ReceiverWhereUniqueInput
    data: XOR<Upload_ReceiverUpdateWithoutFileInput, Upload_ReceiverUncheckedUpdateWithoutFileInput>
  }

  export type Upload_ReceiverUpdateManyWithWhereWithoutFileInput = {
    where: Upload_ReceiverScalarWhereInput
    data: XOR<Upload_ReceiverUpdateManyMutationInput, Upload_ReceiverUncheckedUpdateManyWithoutFileInput>
  }

  export type Upload_ReceiverScalarWhereInput = {
    AND?: Upload_ReceiverScalarWhereInput | Upload_ReceiverScalarWhereInput[]
    OR?: Upload_ReceiverScalarWhereInput[]
    NOT?: Upload_ReceiverScalarWhereInput | Upload_ReceiverScalarWhereInput[]
    id?: StringFilter<"Upload_Receiver"> | string
    fileId?: StringFilter<"Upload_Receiver"> | string
    firstName?: StringNullableFilter<"Upload_Receiver"> | string | null
    lastName?: StringNullableFilter<"Upload_Receiver"> | string | null
    province?: StringNullableFilter<"Upload_Receiver"> | string | null
    district?: StringNullableFilter<"Upload_Receiver"> | string | null
    municipality?: StringNullableFilter<"Upload_Receiver"> | string | null
    phoneNumber?: StringFilter<"Upload_Receiver"> | string
    isDeleted?: BoolFilter<"Upload_Receiver"> | boolean
    createdAt?: DateTimeFilter<"Upload_Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Upload_Receiver"> | Date | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutFileInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutFileInput, CampaignUncheckedUpdateWithoutFileInput>
    create: XOR<CampaignCreateWithoutFileInput, CampaignUncheckedCreateWithoutFileInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutFileInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutFileInput, CampaignUncheckedUpdateWithoutFileInput>
  }

  export type CampaignUpdateManyWithWhereWithoutFileInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutFileInput>
  }

  export type Invalid_Upload_ReceiverUpsertWithWhereUniqueWithoutFileInput = {
    where: Invalid_Upload_ReceiverWhereUniqueInput
    update: XOR<Invalid_Upload_ReceiverUpdateWithoutFileInput, Invalid_Upload_ReceiverUncheckedUpdateWithoutFileInput>
    create: XOR<Invalid_Upload_ReceiverCreateWithoutFileInput, Invalid_Upload_ReceiverUncheckedCreateWithoutFileInput>
  }

  export type Invalid_Upload_ReceiverUpdateWithWhereUniqueWithoutFileInput = {
    where: Invalid_Upload_ReceiverWhereUniqueInput
    data: XOR<Invalid_Upload_ReceiverUpdateWithoutFileInput, Invalid_Upload_ReceiverUncheckedUpdateWithoutFileInput>
  }

  export type Invalid_Upload_ReceiverUpdateManyWithWhereWithoutFileInput = {
    where: Invalid_Upload_ReceiverScalarWhereInput
    data: XOR<Invalid_Upload_ReceiverUpdateManyMutationInput, Invalid_Upload_ReceiverUncheckedUpdateManyWithoutFileInput>
  }

  export type Invalid_Upload_ReceiverScalarWhereInput = {
    AND?: Invalid_Upload_ReceiverScalarWhereInput | Invalid_Upload_ReceiverScalarWhereInput[]
    OR?: Invalid_Upload_ReceiverScalarWhereInput[]
    NOT?: Invalid_Upload_ReceiverScalarWhereInput | Invalid_Upload_ReceiverScalarWhereInput[]
    id?: StringFilter<"Invalid_Upload_Receiver"> | string
    fileId?: StringFilter<"Invalid_Upload_Receiver"> | string
    firstName?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    lastName?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    province?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    district?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    municipality?: StringNullableFilter<"Invalid_Upload_Receiver"> | string | null
    phoneNumber?: StringFilter<"Invalid_Upload_Receiver"> | string
    isDeleted?: BoolFilter<"Invalid_Upload_Receiver"> | boolean
    createdAt?: DateTimeFilter<"Invalid_Upload_Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Invalid_Upload_Receiver"> | Date | string
  }

  export type FilesCreateWithoutReceiversInput = {
    id?: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
    campaigns?: CampaignCreateNestedManyWithoutFileInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverCreateNestedManyWithoutFileInput
  }

  export type FilesUncheckedCreateWithoutReceiversInput = {
    id?: string
    userId: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutFileInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUncheckedCreateNestedManyWithoutFileInput
  }

  export type FilesCreateOrConnectWithoutReceiversInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutReceiversInput, FilesUncheckedCreateWithoutReceiversInput>
  }

  export type FilesUpsertWithoutReceiversInput = {
    update: XOR<FilesUpdateWithoutReceiversInput, FilesUncheckedUpdateWithoutReceiversInput>
    create: XOR<FilesCreateWithoutReceiversInput, FilesUncheckedCreateWithoutReceiversInput>
    where?: FilesWhereInput
  }

  export type FilesUpdateToOneWithWhereWithoutReceiversInput = {
    where?: FilesWhereInput
    data: XOR<FilesUpdateWithoutReceiversInput, FilesUncheckedUpdateWithoutReceiversInput>
  }

  export type FilesUpdateWithoutReceiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    campaigns?: CampaignUpdateManyWithoutFileNestedInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateWithoutReceiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutFileNestedInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FilesCreateWithoutInvalidUploadReceiversInput = {
    id?: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
    receivers?: Upload_ReceiverCreateNestedManyWithoutFileInput
    campaigns?: CampaignCreateNestedManyWithoutFileInput
  }

  export type FilesUncheckedCreateWithoutInvalidUploadReceiversInput = {
    id?: string
    userId: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: Upload_ReceiverUncheckedCreateNestedManyWithoutFileInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutFileInput
  }

  export type FilesCreateOrConnectWithoutInvalidUploadReceiversInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutInvalidUploadReceiversInput, FilesUncheckedCreateWithoutInvalidUploadReceiversInput>
  }

  export type FilesUpsertWithoutInvalidUploadReceiversInput = {
    update: XOR<FilesUpdateWithoutInvalidUploadReceiversInput, FilesUncheckedUpdateWithoutInvalidUploadReceiversInput>
    create: XOR<FilesCreateWithoutInvalidUploadReceiversInput, FilesUncheckedCreateWithoutInvalidUploadReceiversInput>
    where?: FilesWhereInput
  }

  export type FilesUpdateToOneWithWhereWithoutInvalidUploadReceiversInput = {
    where?: FilesWhereInput
    data: XOR<FilesUpdateWithoutInvalidUploadReceiversInput, FilesUncheckedUpdateWithoutInvalidUploadReceiversInput>
  }

  export type FilesUpdateWithoutInvalidUploadReceiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    receivers?: Upload_ReceiverUpdateManyWithoutFileNestedInput
    campaigns?: CampaignUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateWithoutInvalidUploadReceiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: Upload_ReceiverUncheckedUpdateManyWithoutFileNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutFileNestedInput
  }

  export type UserCreateWithoutReceiverInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    files?: FilesCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    quickSends?: QuickSMSSendCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceiverInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    quickSends?: QuickSMSSendUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceiverInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
  }

  export type Receiver_MessageCreateWithoutReceiverInput = {
    id?: string
    textMessage: string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Receiver_MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    textMessage: string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Receiver_MessageCreateOrConnectWithoutReceiverInput = {
    where: Receiver_MessageWhereUniqueInput
    create: XOR<Receiver_MessageCreateWithoutReceiverInput, Receiver_MessageUncheckedCreateWithoutReceiverInput>
  }

  export type UserUpsertWithoutReceiverInput = {
    update: XOR<UserUpdateWithoutReceiverInput, UserUncheckedUpdateWithoutReceiverInput>
    create: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiverInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiverInput, UserUncheckedUpdateWithoutReceiverInput>
  }

  export type UserUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FilesUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    quickSends?: QuickSMSSendUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    quickSends?: QuickSMSSendUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Receiver_MessageUpsertWithoutReceiverInput = {
    update: XOR<Receiver_MessageUpdateWithoutReceiverInput, Receiver_MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<Receiver_MessageCreateWithoutReceiverInput, Receiver_MessageUncheckedCreateWithoutReceiverInput>
    where?: Receiver_MessageWhereInput
  }

  export type Receiver_MessageUpdateToOneWithWhereWithoutReceiverInput = {
    where?: Receiver_MessageWhereInput
    data: XOR<Receiver_MessageUpdateWithoutReceiverInput, Receiver_MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type Receiver_MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    textMessage?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Receiver_MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    textMessage?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiverCreateWithoutReceiverMessageInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReceiverInput
  }

  export type ReceiverUncheckedCreateWithoutReceiverMessageInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ReceiverCreateOrConnectWithoutReceiverMessageInput = {
    where: ReceiverWhereUniqueInput
    create: XOR<ReceiverCreateWithoutReceiverMessageInput, ReceiverUncheckedCreateWithoutReceiverMessageInput>
  }

  export type ReceiverCreateManyReceiverMessageInputEnvelope = {
    data: ReceiverCreateManyReceiverMessageInput | ReceiverCreateManyReceiverMessageInput[]
    skipDuplicates?: boolean
  }

  export type ReceiverUpsertWithWhereUniqueWithoutReceiverMessageInput = {
    where: ReceiverWhereUniqueInput
    update: XOR<ReceiverUpdateWithoutReceiverMessageInput, ReceiverUncheckedUpdateWithoutReceiverMessageInput>
    create: XOR<ReceiverCreateWithoutReceiverMessageInput, ReceiverUncheckedCreateWithoutReceiverMessageInput>
  }

  export type ReceiverUpdateWithWhereUniqueWithoutReceiverMessageInput = {
    where: ReceiverWhereUniqueInput
    data: XOR<ReceiverUpdateWithoutReceiverMessageInput, ReceiverUncheckedUpdateWithoutReceiverMessageInput>
  }

  export type ReceiverUpdateManyWithWhereWithoutReceiverMessageInput = {
    where: ReceiverScalarWhereInput
    data: XOR<ReceiverUpdateManyMutationInput, ReceiverUncheckedUpdateManyWithoutReceiverMessageInput>
  }

  export type UserCreateWithoutCampaignsInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    files?: FilesCreateNestedManyWithoutUserInput
    receiver?: ReceiverCreateNestedManyWithoutUserInput
    quickSends?: QuickSMSSendCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    receiver?: ReceiverUncheckedCreateNestedManyWithoutUserInput
    quickSends?: QuickSMSSendUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type FilesCreateWithoutCampaignsInput = {
    id?: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
    receivers?: Upload_ReceiverCreateNestedManyWithoutFileInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverCreateNestedManyWithoutFileInput
  }

  export type FilesUncheckedCreateWithoutCampaignsInput = {
    id?: string
    userId: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: Upload_ReceiverUncheckedCreateNestedManyWithoutFileInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUncheckedCreateNestedManyWithoutFileInput
  }

  export type FilesCreateOrConnectWithoutCampaignsInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutCampaignsInput, FilesUncheckedCreateWithoutCampaignsInput>
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FilesUpdateManyWithoutUserNestedInput
    receiver?: ReceiverUpdateManyWithoutUserNestedInput
    quickSends?: QuickSMSSendUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    receiver?: ReceiverUncheckedUpdateManyWithoutUserNestedInput
    quickSends?: QuickSMSSendUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FilesUpsertWithoutCampaignsInput = {
    update: XOR<FilesUpdateWithoutCampaignsInput, FilesUncheckedUpdateWithoutCampaignsInput>
    create: XOR<FilesCreateWithoutCampaignsInput, FilesUncheckedCreateWithoutCampaignsInput>
    where?: FilesWhereInput
  }

  export type FilesUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: FilesWhereInput
    data: XOR<FilesUpdateWithoutCampaignsInput, FilesUncheckedUpdateWithoutCampaignsInput>
  }

  export type FilesUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    receivers?: Upload_ReceiverUpdateManyWithoutFileNestedInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: Upload_ReceiverUncheckedUpdateManyWithoutFileNestedInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUncheckedUpdateManyWithoutFileNestedInput
  }

  export type UserCreateWithoutQuickSendsInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    files?: FilesCreateNestedManyWithoutUserInput
    receiver?: ReceiverCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuickSendsInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    receiver?: ReceiverUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuickSendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuickSendsInput, UserUncheckedCreateWithoutQuickSendsInput>
  }

  export type UserUpsertWithoutQuickSendsInput = {
    update: XOR<UserUpdateWithoutQuickSendsInput, UserUncheckedUpdateWithoutQuickSendsInput>
    create: XOR<UserCreateWithoutQuickSendsInput, UserUncheckedCreateWithoutQuickSendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuickSendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuickSendsInput, UserUncheckedUpdateWithoutQuickSendsInput>
  }

  export type UserUpdateWithoutQuickSendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FilesUpdateManyWithoutUserNestedInput
    receiver?: ReceiverUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuickSendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    receiver?: ReceiverUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    files?: FilesCreateNestedManyWithoutUserInput
    receiver?: ReceiverCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    quickSends?: QuickSMSSendCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    hashedPassword?: string | null
    firstName?: string | null
    lastName?: string | null
    organizationName?: string | null
    profileImage?: string | null
    accountType?: $Enums.AccountType | null
    isAccountVerified?: boolean
    role?: $Enums.Role
    citizenshipNumber?: string | null
    citizenshipImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpires?: Date | string | null
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    receiver?: ReceiverUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    quickSends?: QuickSMSSendUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FilesUpdateManyWithoutUserNestedInput
    receiver?: ReceiverUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    quickSends?: QuickSMSSendUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableEnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType | null
    isAccountVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    citizenshipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizenshipImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    receiver?: ReceiverUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    quickSends?: QuickSMSSendUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GuestFileCreateWithoutGuestInput = {
    id?: string
    name: string
    path: string
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: GuestReceiverCreateNestedManyWithoutFileInput
    invalidGuestReceivers?: InvalidGuestReceiverCreateNestedManyWithoutFileInput
  }

  export type GuestFileUncheckedCreateWithoutGuestInput = {
    id?: string
    name: string
    path: string
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: GuestReceiverUncheckedCreateNestedManyWithoutFileInput
    invalidGuestReceivers?: InvalidGuestReceiverUncheckedCreateNestedManyWithoutFileInput
  }

  export type GuestFileCreateOrConnectWithoutGuestInput = {
    where: GuestFileWhereUniqueInput
    create: XOR<GuestFileCreateWithoutGuestInput, GuestFileUncheckedCreateWithoutGuestInput>
  }

  export type GuestFileCreateManyGuestInputEnvelope = {
    data: GuestFileCreateManyGuestInput | GuestFileCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type GuestFileUpsertWithWhereUniqueWithoutGuestInput = {
    where: GuestFileWhereUniqueInput
    update: XOR<GuestFileUpdateWithoutGuestInput, GuestFileUncheckedUpdateWithoutGuestInput>
    create: XOR<GuestFileCreateWithoutGuestInput, GuestFileUncheckedCreateWithoutGuestInput>
  }

  export type GuestFileUpdateWithWhereUniqueWithoutGuestInput = {
    where: GuestFileWhereUniqueInput
    data: XOR<GuestFileUpdateWithoutGuestInput, GuestFileUncheckedUpdateWithoutGuestInput>
  }

  export type GuestFileUpdateManyWithWhereWithoutGuestInput = {
    where: GuestFileScalarWhereInput
    data: XOR<GuestFileUpdateManyMutationInput, GuestFileUncheckedUpdateManyWithoutGuestInput>
  }

  export type GuestFileScalarWhereInput = {
    AND?: GuestFileScalarWhereInput | GuestFileScalarWhereInput[]
    OR?: GuestFileScalarWhereInput[]
    NOT?: GuestFileScalarWhereInput | GuestFileScalarWhereInput[]
    id?: StringFilter<"GuestFile"> | string
    guestId?: StringFilter<"GuestFile"> | string
    name?: StringFilter<"GuestFile"> | string
    path?: StringFilter<"GuestFile"> | string
    sizeInBytes?: BigIntFilter<"GuestFile"> | bigint | number
    type?: EnumFileTypeFilter<"GuestFile"> | $Enums.FileType
    uploadStatus?: EnumUploadStatusFilter<"GuestFile"> | $Enums.UploadStatus
    numberOfReceivers?: IntNullableFilter<"GuestFile"> | number | null
    invalidRowsPath?: StringNullableFilter<"GuestFile"> | string | null
    createdAt?: DateTimeFilter<"GuestFile"> | Date | string
    updatedAt?: DateTimeFilter<"GuestFile"> | Date | string
  }

  export type GuestCreateWithoutFilesInput = {
    id?: string
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
  }

  export type GuestUncheckedCreateWithoutFilesInput = {
    id?: string
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
  }

  export type GuestCreateOrConnectWithoutFilesInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutFilesInput, GuestUncheckedCreateWithoutFilesInput>
  }

  export type GuestReceiverCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type GuestReceiverUncheckedCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type GuestReceiverCreateOrConnectWithoutFileInput = {
    where: GuestReceiverWhereUniqueInput
    create: XOR<GuestReceiverCreateWithoutFileInput, GuestReceiverUncheckedCreateWithoutFileInput>
  }

  export type GuestReceiverCreateManyFileInputEnvelope = {
    data: GuestReceiverCreateManyFileInput | GuestReceiverCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type InvalidGuestReceiverCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type InvalidGuestReceiverUncheckedCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type InvalidGuestReceiverCreateOrConnectWithoutFileInput = {
    where: InvalidGuestReceiverWhereUniqueInput
    create: XOR<InvalidGuestReceiverCreateWithoutFileInput, InvalidGuestReceiverUncheckedCreateWithoutFileInput>
  }

  export type InvalidGuestReceiverCreateManyFileInputEnvelope = {
    data: InvalidGuestReceiverCreateManyFileInput | InvalidGuestReceiverCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type GuestUpsertWithoutFilesInput = {
    update: XOR<GuestUpdateWithoutFilesInput, GuestUncheckedUpdateWithoutFilesInput>
    create: XOR<GuestCreateWithoutFilesInput, GuestUncheckedCreateWithoutFilesInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutFilesInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutFilesInput, GuestUncheckedUpdateWithoutFilesInput>
  }

  export type GuestUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestReceiverUpsertWithWhereUniqueWithoutFileInput = {
    where: GuestReceiverWhereUniqueInput
    update: XOR<GuestReceiverUpdateWithoutFileInput, GuestReceiverUncheckedUpdateWithoutFileInput>
    create: XOR<GuestReceiverCreateWithoutFileInput, GuestReceiverUncheckedCreateWithoutFileInput>
  }

  export type GuestReceiverUpdateWithWhereUniqueWithoutFileInput = {
    where: GuestReceiverWhereUniqueInput
    data: XOR<GuestReceiverUpdateWithoutFileInput, GuestReceiverUncheckedUpdateWithoutFileInput>
  }

  export type GuestReceiverUpdateManyWithWhereWithoutFileInput = {
    where: GuestReceiverScalarWhereInput
    data: XOR<GuestReceiverUpdateManyMutationInput, GuestReceiverUncheckedUpdateManyWithoutFileInput>
  }

  export type GuestReceiverScalarWhereInput = {
    AND?: GuestReceiverScalarWhereInput | GuestReceiverScalarWhereInput[]
    OR?: GuestReceiverScalarWhereInput[]
    NOT?: GuestReceiverScalarWhereInput | GuestReceiverScalarWhereInput[]
    id?: StringFilter<"GuestReceiver"> | string
    guestFileId?: StringFilter<"GuestReceiver"> | string
    firstName?: StringNullableFilter<"GuestReceiver"> | string | null
    lastName?: StringNullableFilter<"GuestReceiver"> | string | null
    province?: StringNullableFilter<"GuestReceiver"> | string | null
    district?: StringNullableFilter<"GuestReceiver"> | string | null
    municipality?: StringNullableFilter<"GuestReceiver"> | string | null
    phoneNumber?: StringFilter<"GuestReceiver"> | string
    isDeleted?: BoolFilter<"GuestReceiver"> | boolean
    createdAt?: DateTimeFilter<"GuestReceiver"> | Date | string
  }

  export type InvalidGuestReceiverUpsertWithWhereUniqueWithoutFileInput = {
    where: InvalidGuestReceiverWhereUniqueInput
    update: XOR<InvalidGuestReceiverUpdateWithoutFileInput, InvalidGuestReceiverUncheckedUpdateWithoutFileInput>
    create: XOR<InvalidGuestReceiverCreateWithoutFileInput, InvalidGuestReceiverUncheckedCreateWithoutFileInput>
  }

  export type InvalidGuestReceiverUpdateWithWhereUniqueWithoutFileInput = {
    where: InvalidGuestReceiverWhereUniqueInput
    data: XOR<InvalidGuestReceiverUpdateWithoutFileInput, InvalidGuestReceiverUncheckedUpdateWithoutFileInput>
  }

  export type InvalidGuestReceiverUpdateManyWithWhereWithoutFileInput = {
    where: InvalidGuestReceiverScalarWhereInput
    data: XOR<InvalidGuestReceiverUpdateManyMutationInput, InvalidGuestReceiverUncheckedUpdateManyWithoutFileInput>
  }

  export type InvalidGuestReceiverScalarWhereInput = {
    AND?: InvalidGuestReceiverScalarWhereInput | InvalidGuestReceiverScalarWhereInput[]
    OR?: InvalidGuestReceiverScalarWhereInput[]
    NOT?: InvalidGuestReceiverScalarWhereInput | InvalidGuestReceiverScalarWhereInput[]
    id?: StringFilter<"InvalidGuestReceiver"> | string
    guestFileId?: StringFilter<"InvalidGuestReceiver"> | string
    firstName?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    lastName?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    province?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    district?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    municipality?: StringNullableFilter<"InvalidGuestReceiver"> | string | null
    phoneNumber?: StringFilter<"InvalidGuestReceiver"> | string
    isDeleted?: BoolFilter<"InvalidGuestReceiver"> | boolean
    createdAt?: DateTimeFilter<"InvalidGuestReceiver"> | Date | string
  }

  export type GuestFileCreateWithoutReceiversInput = {
    id?: string
    name: string
    path: string
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guest: GuestCreateNestedOneWithoutFilesInput
    invalidGuestReceivers?: InvalidGuestReceiverCreateNestedManyWithoutFileInput
  }

  export type GuestFileUncheckedCreateWithoutReceiversInput = {
    id?: string
    guestId: string
    name: string
    path: string
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invalidGuestReceivers?: InvalidGuestReceiverUncheckedCreateNestedManyWithoutFileInput
  }

  export type GuestFileCreateOrConnectWithoutReceiversInput = {
    where: GuestFileWhereUniqueInput
    create: XOR<GuestFileCreateWithoutReceiversInput, GuestFileUncheckedCreateWithoutReceiversInput>
  }

  export type GuestFileUpsertWithoutReceiversInput = {
    update: XOR<GuestFileUpdateWithoutReceiversInput, GuestFileUncheckedUpdateWithoutReceiversInput>
    create: XOR<GuestFileCreateWithoutReceiversInput, GuestFileUncheckedCreateWithoutReceiversInput>
    where?: GuestFileWhereInput
  }

  export type GuestFileUpdateToOneWithWhereWithoutReceiversInput = {
    where?: GuestFileWhereInput
    data: XOR<GuestFileUpdateWithoutReceiversInput, GuestFileUncheckedUpdateWithoutReceiversInput>
  }

  export type GuestFileUpdateWithoutReceiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutFilesNestedInput
    invalidGuestReceivers?: InvalidGuestReceiverUpdateManyWithoutFileNestedInput
  }

  export type GuestFileUncheckedUpdateWithoutReceiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invalidGuestReceivers?: InvalidGuestReceiverUncheckedUpdateManyWithoutFileNestedInput
  }

  export type GuestFileCreateWithoutInvalidGuestReceiversInput = {
    id?: string
    name: string
    path: string
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guest: GuestCreateNestedOneWithoutFilesInput
    receivers?: GuestReceiverCreateNestedManyWithoutFileInput
  }

  export type GuestFileUncheckedCreateWithoutInvalidGuestReceiversInput = {
    id?: string
    guestId: string
    name: string
    path: string
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: GuestReceiverUncheckedCreateNestedManyWithoutFileInput
  }

  export type GuestFileCreateOrConnectWithoutInvalidGuestReceiversInput = {
    where: GuestFileWhereUniqueInput
    create: XOR<GuestFileCreateWithoutInvalidGuestReceiversInput, GuestFileUncheckedCreateWithoutInvalidGuestReceiversInput>
  }

  export type GuestFileUpsertWithoutInvalidGuestReceiversInput = {
    update: XOR<GuestFileUpdateWithoutInvalidGuestReceiversInput, GuestFileUncheckedUpdateWithoutInvalidGuestReceiversInput>
    create: XOR<GuestFileCreateWithoutInvalidGuestReceiversInput, GuestFileUncheckedCreateWithoutInvalidGuestReceiversInput>
    where?: GuestFileWhereInput
  }

  export type GuestFileUpdateToOneWithWhereWithoutInvalidGuestReceiversInput = {
    where?: GuestFileWhereInput
    data: XOR<GuestFileUpdateWithoutInvalidGuestReceiversInput, GuestFileUncheckedUpdateWithoutInvalidGuestReceiversInput>
  }

  export type GuestFileUpdateWithoutInvalidGuestReceiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutFilesNestedInput
    receivers?: GuestReceiverUpdateManyWithoutFileNestedInput
  }

  export type GuestFileUncheckedUpdateWithoutInvalidGuestReceiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: GuestReceiverUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FilesCreateManyUserInput = {
    id?: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReceiverCreateManyUserInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverMessageId?: string | null
  }

  export type CampaignCreateManyUserInput = {
    id?: string
    name: string
    messageText: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    fileId?: string | null
    recipientsNumber?: number | null
    deliveredNumber?: number
    failedNumber?: number
    deliveryRate?: number
    totalSmsCost?: number | null
    paymentReceiptImage?: string | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuickSMSSendCreateManyUserInput = {
    id?: string
    toPhoneNumber: string
    message: string
    status?: $Enums.QuickSendStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    paidOn?: Date | string
    isPaid?: boolean
    isSmsSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FilesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: Upload_ReceiverUpdateManyWithoutFileNestedInput
    campaigns?: CampaignUpdateManyWithoutFileNestedInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: Upload_ReceiverUncheckedUpdateManyWithoutFileNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutFileNestedInput
    invalidUploadReceivers?: Invalid_Upload_ReceiverUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiverUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessage?: Receiver_MessageUpdateOneWithoutReceiverNestedInput
  }

  export type ReceiverUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceiverUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageText?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    recipientsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    deliveredNumber?: IntFieldUpdateOperationsInput | number
    failedNumber?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalSmsCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentReceiptImage?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: FilesUpdateOneWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageText?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    deliveredNumber?: IntFieldUpdateOperationsInput | number
    failedNumber?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalSmsCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentReceiptImage?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageText?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    deliveredNumber?: IntFieldUpdateOperationsInput | number
    failedNumber?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalSmsCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentReceiptImage?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuickSMSSendUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toPhoneNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumQuickSendStatusFieldUpdateOperationsInput | $Enums.QuickSendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuickSMSSendUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toPhoneNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumQuickSendStatusFieldUpdateOperationsInput | $Enums.QuickSendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuickSMSSendUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toPhoneNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumQuickSendStatusFieldUpdateOperationsInput | $Enums.QuickSendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isSmsSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isSmsSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isSmsSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Upload_ReceiverCreateManyFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateManyFileInput = {
    id?: string
    userId: string
    name: string
    messageText: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    recipientsNumber?: number | null
    deliveredNumber?: number
    failedNumber?: number
    deliveryRate?: number
    totalSmsCost?: number | null
    paymentReceiptImage?: string | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_Upload_ReceiverCreateManyFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Upload_ReceiverUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Upload_ReceiverUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Upload_ReceiverUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageText?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    recipientsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    deliveredNumber?: IntFieldUpdateOperationsInput | number
    failedNumber?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalSmsCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentReceiptImage?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageText?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    recipientsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    deliveredNumber?: IntFieldUpdateOperationsInput | number
    failedNumber?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalSmsCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentReceiptImage?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageText?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    recipientsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    deliveredNumber?: IntFieldUpdateOperationsInput | number
    failedNumber?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalSmsCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentReceiptImage?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_Upload_ReceiverUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_Upload_ReceiverUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_Upload_ReceiverUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiverCreateManyReceiverMessageInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ReceiverUpdateWithoutReceiverMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReceiverNestedInput
  }

  export type ReceiverUncheckedUpdateWithoutReceiverMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReceiverUncheckedUpdateManyWithoutReceiverMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GuestFileCreateManyGuestInput = {
    id?: string
    name: string
    path: string
    sizeInBytes: bigint | number
    type: $Enums.FileType
    uploadStatus?: $Enums.UploadStatus
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestFileUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: GuestReceiverUpdateManyWithoutFileNestedInput
    invalidGuestReceivers?: InvalidGuestReceiverUpdateManyWithoutFileNestedInput
  }

  export type GuestFileUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: GuestReceiverUncheckedUpdateManyWithoutFileNestedInput
    invalidGuestReceivers?: InvalidGuestReceiverUncheckedUpdateManyWithoutFileNestedInput
  }

  export type GuestFileUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestReceiverCreateManyFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type InvalidGuestReceiverCreateManyFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type GuestReceiverUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestReceiverUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestReceiverUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvalidGuestReceiverUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvalidGuestReceiverUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvalidGuestReceiverUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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