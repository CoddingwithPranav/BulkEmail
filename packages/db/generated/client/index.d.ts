
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Files
 * 
 */
export type Files = $Result.DefaultSelection<Prisma.$FilesPayload>
/**
 * Model My_Contact
 * 
 */
export type My_Contact = $Result.DefaultSelection<Prisma.$My_ContactPayload>
/**
 * Model Invalid_My_Contact
 * 
 */
export type Invalid_My_Contact = $Result.DefaultSelection<Prisma.$Invalid_My_ContactPayload>
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
 * Model EmailPricing
 * 
 */
export type EmailPricing = $Result.DefaultSelection<Prisma.$EmailPricingPayload>
/**
 * Model CampaignPayment
 * 
 */
export type CampaignPayment = $Result.DefaultSelection<Prisma.$CampaignPaymentPayload>

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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.my_Contact`: Exposes CRUD operations for the **My_Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more My_Contacts
    * const my_Contacts = await prisma.my_Contact.findMany()
    * ```
    */
  get my_Contact(): Prisma.My_ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invalid_My_Contact`: Exposes CRUD operations for the **Invalid_My_Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invalid_My_Contacts
    * const invalid_My_Contacts = await prisma.invalid_My_Contact.findMany()
    * ```
    */
  get invalid_My_Contact(): Prisma.Invalid_My_ContactDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.emailPricing`: Exposes CRUD operations for the **EmailPricing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailPricings
    * const emailPricings = await prisma.emailPricing.findMany()
    * ```
    */
  get emailPricing(): Prisma.EmailPricingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignPayment`: Exposes CRUD operations for the **CampaignPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignPayments
    * const campaignPayments = await prisma.campaignPayment.findMany()
    * ```
    */
  get campaignPayment(): Prisma.CampaignPaymentDelegate<ExtArgs, ClientOptions>;
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
    Category: 'Category',
    Files: 'Files',
    My_Contact: 'My_Contact',
    Invalid_My_Contact: 'Invalid_My_Contact',
    Receiver: 'Receiver',
    Receiver_Message: 'Receiver_Message',
    Campaign: 'Campaign',
    EmailPricing: 'EmailPricing',
    CampaignPayment: 'CampaignPayment'
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
      modelProps: "user" | "category" | "files" | "my_Contact" | "invalid_My_Contact" | "receiver" | "receiver_Message" | "campaign" | "emailPricing" | "campaignPayment"
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
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
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
      My_Contact: {
        payload: Prisma.$My_ContactPayload<ExtArgs>
        fields: Prisma.My_ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.My_ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.My_ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ContactPayload>
          }
          findFirst: {
            args: Prisma.My_ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.My_ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ContactPayload>
          }
          findMany: {
            args: Prisma.My_ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ContactPayload>[]
          }
          create: {
            args: Prisma.My_ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ContactPayload>
          }
          createMany: {
            args: Prisma.My_ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.My_ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ContactPayload>[]
          }
          delete: {
            args: Prisma.My_ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ContactPayload>
          }
          update: {
            args: Prisma.My_ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ContactPayload>
          }
          deleteMany: {
            args: Prisma.My_ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.My_ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.My_ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ContactPayload>[]
          }
          upsert: {
            args: Prisma.My_ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ContactPayload>
          }
          aggregate: {
            args: Prisma.My_ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMy_Contact>
          }
          groupBy: {
            args: Prisma.My_ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<My_ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.My_ContactCountArgs<ExtArgs>
            result: $Utils.Optional<My_ContactCountAggregateOutputType> | number
          }
        }
      }
      Invalid_My_Contact: {
        payload: Prisma.$Invalid_My_ContactPayload<ExtArgs>
        fields: Prisma.Invalid_My_ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Invalid_My_ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_My_ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Invalid_My_ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_My_ContactPayload>
          }
          findFirst: {
            args: Prisma.Invalid_My_ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_My_ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Invalid_My_ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_My_ContactPayload>
          }
          findMany: {
            args: Prisma.Invalid_My_ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_My_ContactPayload>[]
          }
          create: {
            args: Prisma.Invalid_My_ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_My_ContactPayload>
          }
          createMany: {
            args: Prisma.Invalid_My_ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Invalid_My_ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_My_ContactPayload>[]
          }
          delete: {
            args: Prisma.Invalid_My_ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_My_ContactPayload>
          }
          update: {
            args: Prisma.Invalid_My_ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_My_ContactPayload>
          }
          deleteMany: {
            args: Prisma.Invalid_My_ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Invalid_My_ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Invalid_My_ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_My_ContactPayload>[]
          }
          upsert: {
            args: Prisma.Invalid_My_ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invalid_My_ContactPayload>
          }
          aggregate: {
            args: Prisma.Invalid_My_ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvalid_My_Contact>
          }
          groupBy: {
            args: Prisma.Invalid_My_ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invalid_My_ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.Invalid_My_ContactCountArgs<ExtArgs>
            result: $Utils.Optional<Invalid_My_ContactCountAggregateOutputType> | number
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
      EmailPricing: {
        payload: Prisma.$EmailPricingPayload<ExtArgs>
        fields: Prisma.EmailPricingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailPricingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPricingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailPricingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPricingPayload>
          }
          findFirst: {
            args: Prisma.EmailPricingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPricingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailPricingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPricingPayload>
          }
          findMany: {
            args: Prisma.EmailPricingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPricingPayload>[]
          }
          create: {
            args: Prisma.EmailPricingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPricingPayload>
          }
          createMany: {
            args: Prisma.EmailPricingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailPricingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPricingPayload>[]
          }
          delete: {
            args: Prisma.EmailPricingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPricingPayload>
          }
          update: {
            args: Prisma.EmailPricingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPricingPayload>
          }
          deleteMany: {
            args: Prisma.EmailPricingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailPricingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailPricingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPricingPayload>[]
          }
          upsert: {
            args: Prisma.EmailPricingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPricingPayload>
          }
          aggregate: {
            args: Prisma.EmailPricingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailPricing>
          }
          groupBy: {
            args: Prisma.EmailPricingGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailPricingGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailPricingCountArgs<ExtArgs>
            result: $Utils.Optional<EmailPricingCountAggregateOutputType> | number
          }
        }
      }
      CampaignPayment: {
        payload: Prisma.$CampaignPaymentPayload<ExtArgs>
        fields: Prisma.CampaignPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          findFirst: {
            args: Prisma.CampaignPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          findMany: {
            args: Prisma.CampaignPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>[]
          }
          create: {
            args: Prisma.CampaignPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          createMany: {
            args: Prisma.CampaignPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>[]
          }
          delete: {
            args: Prisma.CampaignPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          update: {
            args: Prisma.CampaignPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          deleteMany: {
            args: Prisma.CampaignPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>[]
          }
          upsert: {
            args: Prisma.CampaignPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          aggregate: {
            args: Prisma.CampaignPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignPayment>
          }
          groupBy: {
            args: Prisma.CampaignPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignPaymentCountAggregateOutputType> | number
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
    category?: CategoryOmit
    files?: FilesOmit
    my_Contact?: My_ContactOmit
    invalid_My_Contact?: Invalid_My_ContactOmit
    receiver?: ReceiverOmit
    receiver_Message?: Receiver_MessageOmit
    campaign?: CampaignOmit
    emailPricing?: EmailPricingOmit
    campaignPayment?: CampaignPaymentOmit
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
    myContacts: number
    categories: number
    invalidMyContacts: number
    campaignPayments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | UserCountOutputTypeCountFilesArgs
    receiver?: boolean | UserCountOutputTypeCountReceiverArgs
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
    myContacts?: boolean | UserCountOutputTypeCountMyContactsArgs
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    invalidMyContacts?: boolean | UserCountOutputTypeCountInvalidMyContactsArgs
    campaignPayments?: boolean | UserCountOutputTypeCountCampaignPaymentsArgs
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
  export type UserCountOutputTypeCountMyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: My_ContactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvalidMyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invalid_My_ContactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignPaymentWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    myContacts: number
    files: number
    campaigns: number
    invalidMyContacts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    myContacts?: boolean | CategoryCountOutputTypeCountMyContactsArgs
    files?: boolean | CategoryCountOutputTypeCountFilesArgs
    campaigns?: boolean | CategoryCountOutputTypeCountCampaignsArgs
    invalidMyContacts?: boolean | CategoryCountOutputTypeCountInvalidMyContactsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: My_ContactWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountInvalidMyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invalid_My_ContactWhereInput
  }


  /**
   * Count Type FilesCountOutputType
   */

  export type FilesCountOutputType = {
    myContact: number
    Invalid_My_Contact: number
  }

  export type FilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    myContact?: boolean | FilesCountOutputTypeCountMyContactArgs
    Invalid_My_Contact?: boolean | FilesCountOutputTypeCountInvalid_My_ContactArgs
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
  export type FilesCountOutputTypeCountMyContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: My_ContactWhereInput
  }

  /**
   * FilesCountOutputType without action
   */
  export type FilesCountOutputTypeCountInvalid_My_ContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invalid_My_ContactWhereInput
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
    myContacts?: boolean | User$myContactsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    invalidMyContacts?: boolean | User$invalidMyContactsArgs<ExtArgs>
    campaignPayments?: boolean | User$campaignPaymentsArgs<ExtArgs>
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
    myContacts?: boolean | User$myContactsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    invalidMyContacts?: boolean | User$invalidMyContactsArgs<ExtArgs>
    campaignPayments?: boolean | User$campaignPaymentsArgs<ExtArgs>
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
      myContacts: Prisma.$My_ContactPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      invalidMyContacts: Prisma.$Invalid_My_ContactPayload<ExtArgs>[]
      campaignPayments: Prisma.$CampaignPaymentPayload<ExtArgs>[]
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
    myContacts<T extends User$myContactsArgs<ExtArgs> = {}>(args?: Subset<T, User$myContactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invalidMyContacts<T extends User$invalidMyContactsArgs<ExtArgs> = {}>(args?: Subset<T, User$invalidMyContactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaignPayments<T extends User$campaignPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.myContacts
   */
  export type User$myContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    where?: My_ContactWhereInput
    orderBy?: My_ContactOrderByWithRelationInput | My_ContactOrderByWithRelationInput[]
    cursor?: My_ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: My_ContactScalarFieldEnum | My_ContactScalarFieldEnum[]
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * User.invalidMyContacts
   */
  export type User$invalidMyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    where?: Invalid_My_ContactWhereInput
    orderBy?: Invalid_My_ContactOrderByWithRelationInput | Invalid_My_ContactOrderByWithRelationInput[]
    cursor?: Invalid_My_ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invalid_My_ContactScalarFieldEnum | Invalid_My_ContactScalarFieldEnum[]
  }

  /**
   * User.campaignPayments
   */
  export type User$campaignPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    where?: CampaignPaymentWhereInput
    orderBy?: CampaignPaymentOrderByWithRelationInput | CampaignPaymentOrderByWithRelationInput[]
    cursor?: CampaignPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignPaymentScalarFieldEnum | CampaignPaymentScalarFieldEnum[]
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
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    description: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    description: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    description: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    userId: string
    description: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    description?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    myContacts?: boolean | Category$myContactsArgs<ExtArgs>
    files?: boolean | Category$filesArgs<ExtArgs>
    campaigns?: boolean | Category$campaignsArgs<ExtArgs>
    invalidMyContacts?: boolean | Category$invalidMyContactsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    description?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    description?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    description?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "description" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    myContacts?: boolean | Category$myContactsArgs<ExtArgs>
    files?: boolean | Category$filesArgs<ExtArgs>
    campaigns?: boolean | Category$campaignsArgs<ExtArgs>
    invalidMyContacts?: boolean | Category$invalidMyContactsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      myContacts: Prisma.$My_ContactPayload<ExtArgs>[]
      files: Prisma.$FilesPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      invalidMyContacts: Prisma.$Invalid_My_ContactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      description: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    myContacts<T extends Category$myContactsArgs<ExtArgs> = {}>(args?: Subset<T, Category$myContactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Category$filesArgs<ExtArgs> = {}>(args?: Subset<T, Category$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends Category$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Category$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invalidMyContacts<T extends Category$invalidMyContactsArgs<ExtArgs> = {}>(args?: Subset<T, Category$invalidMyContactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly userId: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly isDeleted: FieldRef<"Category", 'Boolean'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.myContacts
   */
  export type Category$myContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    where?: My_ContactWhereInput
    orderBy?: My_ContactOrderByWithRelationInput | My_ContactOrderByWithRelationInput[]
    cursor?: My_ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: My_ContactScalarFieldEnum | My_ContactScalarFieldEnum[]
  }

  /**
   * Category.files
   */
  export type Category$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Category.campaigns
   */
  export type Category$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Category.invalidMyContacts
   */
  export type Category$invalidMyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    where?: Invalid_My_ContactWhereInput
    orderBy?: Invalid_My_ContactOrderByWithRelationInput | Invalid_My_ContactOrderByWithRelationInput[]
    cursor?: Invalid_My_ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invalid_My_ContactScalarFieldEnum | Invalid_My_ContactScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
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
    CategoryId: string | null
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
    CategoryId: string | null
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
    CategoryId: number
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
    CategoryId?: true
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
    CategoryId?: true
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
    CategoryId?: true
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
    CategoryId: string
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
    CategoryId?: boolean
    uploadStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    myContact?: boolean | Files$myContactArgs<ExtArgs>
    Invalid_My_Contact?: boolean | Files$Invalid_My_ContactArgs<ExtArgs>
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
    CategoryId?: boolean
    uploadStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
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
    CategoryId?: boolean
    uploadStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
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
    CategoryId?: boolean
    uploadStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "path" | "numberOfReceivers" | "invalidRowsPath" | "sizeInBytes" | "type" | "CategoryId" | "uploadStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["files"]>
  export type FilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    myContact?: boolean | Files$myContactArgs<ExtArgs>
    Invalid_My_Contact?: boolean | Files$Invalid_My_ContactArgs<ExtArgs>
    _count?: boolean | FilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Files"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      myContact: Prisma.$My_ContactPayload<ExtArgs>[]
      Invalid_My_Contact: Prisma.$Invalid_My_ContactPayload<ExtArgs>[]
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
      CategoryId: string
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
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    myContact<T extends Files$myContactArgs<ExtArgs> = {}>(args?: Subset<T, Files$myContactArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Invalid_My_Contact<T extends Files$Invalid_My_ContactArgs<ExtArgs> = {}>(args?: Subset<T, Files$Invalid_My_ContactArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly CategoryId: FieldRef<"Files", 'String'>
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
   * Files.myContact
   */
  export type Files$myContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    where?: My_ContactWhereInput
    orderBy?: My_ContactOrderByWithRelationInput | My_ContactOrderByWithRelationInput[]
    cursor?: My_ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: My_ContactScalarFieldEnum | My_ContactScalarFieldEnum[]
  }

  /**
   * Files.Invalid_My_Contact
   */
  export type Files$Invalid_My_ContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    where?: Invalid_My_ContactWhereInput
    orderBy?: Invalid_My_ContactOrderByWithRelationInput | Invalid_My_ContactOrderByWithRelationInput[]
    cursor?: Invalid_My_ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invalid_My_ContactScalarFieldEnum | Invalid_My_ContactScalarFieldEnum[]
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
   * Model My_Contact
   */

  export type AggregateMy_Contact = {
    _count: My_ContactCountAggregateOutputType | null
    _min: My_ContactMinAggregateOutputType | null
    _max: My_ContactMaxAggregateOutputType | null
  }

  export type My_ContactMinAggregateOutputType = {
    id: string | null
    fileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    email: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    categoryId: string | null
    userId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type My_ContactMaxAggregateOutputType = {
    id: string | null
    fileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    email: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    categoryId: string | null
    userId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type My_ContactCountAggregateOutputType = {
    id: number
    fileId: number
    firstName: number
    lastName: number
    province: number
    email: number
    district: number
    municipality: number
    phoneNumber: number
    categoryId: number
    userId: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type My_ContactMinAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    email?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    categoryId?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type My_ContactMaxAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    email?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    categoryId?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type My_ContactCountAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    email?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    categoryId?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type My_ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which My_Contact to aggregate.
     */
    where?: My_ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_Contacts to fetch.
     */
    orderBy?: My_ContactOrderByWithRelationInput | My_ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: My_ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned My_Contacts
    **/
    _count?: true | My_ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: My_ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: My_ContactMaxAggregateInputType
  }

  export type GetMy_ContactAggregateType<T extends My_ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateMy_Contact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMy_Contact[P]>
      : GetScalarType<T[P], AggregateMy_Contact[P]>
  }




  export type My_ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: My_ContactWhereInput
    orderBy?: My_ContactOrderByWithAggregationInput | My_ContactOrderByWithAggregationInput[]
    by: My_ContactScalarFieldEnum[] | My_ContactScalarFieldEnum
    having?: My_ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: My_ContactCountAggregateInputType | true
    _min?: My_ContactMinAggregateInputType
    _max?: My_ContactMaxAggregateInputType
  }

  export type My_ContactGroupByOutputType = {
    id: string
    fileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    email: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string
    categoryId: string | null
    userId: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: My_ContactCountAggregateOutputType | null
    _min: My_ContactMinAggregateOutputType | null
    _max: My_ContactMaxAggregateOutputType | null
  }

  type GetMy_ContactGroupByPayload<T extends My_ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<My_ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof My_ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], My_ContactGroupByOutputType[P]>
            : GetScalarType<T[P], My_ContactGroupByOutputType[P]>
        }
      >
    >


  export type My_ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    email?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    categoryId?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | My_Contact$categoryArgs<ExtArgs>
    file?: boolean | My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["my_Contact"]>

  export type My_ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    email?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    categoryId?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | My_Contact$categoryArgs<ExtArgs>
    file?: boolean | My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["my_Contact"]>

  export type My_ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    email?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    categoryId?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | My_Contact$categoryArgs<ExtArgs>
    file?: boolean | My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["my_Contact"]>

  export type My_ContactSelectScalar = {
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    email?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    categoryId?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type My_ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "firstName" | "lastName" | "province" | "email" | "district" | "municipality" | "phoneNumber" | "categoryId" | "userId" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["my_Contact"]>
  export type My_ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | My_Contact$categoryArgs<ExtArgs>
    file?: boolean | My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type My_ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | My_Contact$categoryArgs<ExtArgs>
    file?: boolean | My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type My_ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | My_Contact$categoryArgs<ExtArgs>
    file?: boolean | My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $My_ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "My_Contact"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      file: Prisma.$FilesPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileId: string | null
      firstName: string | null
      lastName: string | null
      province: string | null
      email: string | null
      district: string | null
      municipality: string | null
      phoneNumber: string
      categoryId: string | null
      userId: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["my_Contact"]>
    composites: {}
  }

  type My_ContactGetPayload<S extends boolean | null | undefined | My_ContactDefaultArgs> = $Result.GetResult<Prisma.$My_ContactPayload, S>

  type My_ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<My_ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: My_ContactCountAggregateInputType | true
    }

  export interface My_ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['My_Contact'], meta: { name: 'My_Contact' } }
    /**
     * Find zero or one My_Contact that matches the filter.
     * @param {My_ContactFindUniqueArgs} args - Arguments to find a My_Contact
     * @example
     * // Get one My_Contact
     * const my_Contact = await prisma.my_Contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends My_ContactFindUniqueArgs>(args: SelectSubset<T, My_ContactFindUniqueArgs<ExtArgs>>): Prisma__My_ContactClient<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one My_Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {My_ContactFindUniqueOrThrowArgs} args - Arguments to find a My_Contact
     * @example
     * // Get one My_Contact
     * const my_Contact = await prisma.my_Contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends My_ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, My_ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__My_ContactClient<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first My_Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ContactFindFirstArgs} args - Arguments to find a My_Contact
     * @example
     * // Get one My_Contact
     * const my_Contact = await prisma.my_Contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends My_ContactFindFirstArgs>(args?: SelectSubset<T, My_ContactFindFirstArgs<ExtArgs>>): Prisma__My_ContactClient<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first My_Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ContactFindFirstOrThrowArgs} args - Arguments to find a My_Contact
     * @example
     * // Get one My_Contact
     * const my_Contact = await prisma.my_Contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends My_ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, My_ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__My_ContactClient<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more My_Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all My_Contacts
     * const my_Contacts = await prisma.my_Contact.findMany()
     * 
     * // Get first 10 My_Contacts
     * const my_Contacts = await prisma.my_Contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const my_ContactWithIdOnly = await prisma.my_Contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends My_ContactFindManyArgs>(args?: SelectSubset<T, My_ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a My_Contact.
     * @param {My_ContactCreateArgs} args - Arguments to create a My_Contact.
     * @example
     * // Create one My_Contact
     * const My_Contact = await prisma.my_Contact.create({
     *   data: {
     *     // ... data to create a My_Contact
     *   }
     * })
     * 
     */
    create<T extends My_ContactCreateArgs>(args: SelectSubset<T, My_ContactCreateArgs<ExtArgs>>): Prisma__My_ContactClient<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many My_Contacts.
     * @param {My_ContactCreateManyArgs} args - Arguments to create many My_Contacts.
     * @example
     * // Create many My_Contacts
     * const my_Contact = await prisma.my_Contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends My_ContactCreateManyArgs>(args?: SelectSubset<T, My_ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many My_Contacts and returns the data saved in the database.
     * @param {My_ContactCreateManyAndReturnArgs} args - Arguments to create many My_Contacts.
     * @example
     * // Create many My_Contacts
     * const my_Contact = await prisma.my_Contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many My_Contacts and only return the `id`
     * const my_ContactWithIdOnly = await prisma.my_Contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends My_ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, My_ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a My_Contact.
     * @param {My_ContactDeleteArgs} args - Arguments to delete one My_Contact.
     * @example
     * // Delete one My_Contact
     * const My_Contact = await prisma.my_Contact.delete({
     *   where: {
     *     // ... filter to delete one My_Contact
     *   }
     * })
     * 
     */
    delete<T extends My_ContactDeleteArgs>(args: SelectSubset<T, My_ContactDeleteArgs<ExtArgs>>): Prisma__My_ContactClient<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one My_Contact.
     * @param {My_ContactUpdateArgs} args - Arguments to update one My_Contact.
     * @example
     * // Update one My_Contact
     * const my_Contact = await prisma.my_Contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends My_ContactUpdateArgs>(args: SelectSubset<T, My_ContactUpdateArgs<ExtArgs>>): Prisma__My_ContactClient<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more My_Contacts.
     * @param {My_ContactDeleteManyArgs} args - Arguments to filter My_Contacts to delete.
     * @example
     * // Delete a few My_Contacts
     * const { count } = await prisma.my_Contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends My_ContactDeleteManyArgs>(args?: SelectSubset<T, My_ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more My_Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many My_Contacts
     * const my_Contact = await prisma.my_Contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends My_ContactUpdateManyArgs>(args: SelectSubset<T, My_ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more My_Contacts and returns the data updated in the database.
     * @param {My_ContactUpdateManyAndReturnArgs} args - Arguments to update many My_Contacts.
     * @example
     * // Update many My_Contacts
     * const my_Contact = await prisma.my_Contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more My_Contacts and only return the `id`
     * const my_ContactWithIdOnly = await prisma.my_Contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends My_ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, My_ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one My_Contact.
     * @param {My_ContactUpsertArgs} args - Arguments to update or create a My_Contact.
     * @example
     * // Update or create a My_Contact
     * const my_Contact = await prisma.my_Contact.upsert({
     *   create: {
     *     // ... data to create a My_Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the My_Contact we want to update
     *   }
     * })
     */
    upsert<T extends My_ContactUpsertArgs>(args: SelectSubset<T, My_ContactUpsertArgs<ExtArgs>>): Prisma__My_ContactClient<$Result.GetResult<Prisma.$My_ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of My_Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ContactCountArgs} args - Arguments to filter My_Contacts to count.
     * @example
     * // Count the number of My_Contacts
     * const count = await prisma.my_Contact.count({
     *   where: {
     *     // ... the filter for the My_Contacts we want to count
     *   }
     * })
    **/
    count<T extends My_ContactCountArgs>(
      args?: Subset<T, My_ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], My_ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a My_Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends My_ContactAggregateArgs>(args: Subset<T, My_ContactAggregateArgs>): Prisma.PrismaPromise<GetMy_ContactAggregateType<T>>

    /**
     * Group by My_Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ContactGroupByArgs} args - Group by arguments.
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
      T extends My_ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: My_ContactGroupByArgs['orderBy'] }
        : { orderBy?: My_ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, My_ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMy_ContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the My_Contact model
   */
  readonly fields: My_ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for My_Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__My_ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends My_Contact$categoryArgs<ExtArgs> = {}>(args?: Subset<T, My_Contact$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    file<T extends My_Contact$fileArgs<ExtArgs> = {}>(args?: Subset<T, My_Contact$fileArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the My_Contact model
   */
  interface My_ContactFieldRefs {
    readonly id: FieldRef<"My_Contact", 'String'>
    readonly fileId: FieldRef<"My_Contact", 'String'>
    readonly firstName: FieldRef<"My_Contact", 'String'>
    readonly lastName: FieldRef<"My_Contact", 'String'>
    readonly province: FieldRef<"My_Contact", 'String'>
    readonly email: FieldRef<"My_Contact", 'String'>
    readonly district: FieldRef<"My_Contact", 'String'>
    readonly municipality: FieldRef<"My_Contact", 'String'>
    readonly phoneNumber: FieldRef<"My_Contact", 'String'>
    readonly categoryId: FieldRef<"My_Contact", 'String'>
    readonly userId: FieldRef<"My_Contact", 'String'>
    readonly isDeleted: FieldRef<"My_Contact", 'Boolean'>
    readonly createdAt: FieldRef<"My_Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"My_Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * My_Contact findUnique
   */
  export type My_ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    /**
     * Filter, which My_Contact to fetch.
     */
    where: My_ContactWhereUniqueInput
  }

  /**
   * My_Contact findUniqueOrThrow
   */
  export type My_ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    /**
     * Filter, which My_Contact to fetch.
     */
    where: My_ContactWhereUniqueInput
  }

  /**
   * My_Contact findFirst
   */
  export type My_ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    /**
     * Filter, which My_Contact to fetch.
     */
    where?: My_ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_Contacts to fetch.
     */
    orderBy?: My_ContactOrderByWithRelationInput | My_ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for My_Contacts.
     */
    cursor?: My_ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of My_Contacts.
     */
    distinct?: My_ContactScalarFieldEnum | My_ContactScalarFieldEnum[]
  }

  /**
   * My_Contact findFirstOrThrow
   */
  export type My_ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    /**
     * Filter, which My_Contact to fetch.
     */
    where?: My_ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_Contacts to fetch.
     */
    orderBy?: My_ContactOrderByWithRelationInput | My_ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for My_Contacts.
     */
    cursor?: My_ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of My_Contacts.
     */
    distinct?: My_ContactScalarFieldEnum | My_ContactScalarFieldEnum[]
  }

  /**
   * My_Contact findMany
   */
  export type My_ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    /**
     * Filter, which My_Contacts to fetch.
     */
    where?: My_ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_Contacts to fetch.
     */
    orderBy?: My_ContactOrderByWithRelationInput | My_ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing My_Contacts.
     */
    cursor?: My_ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_Contacts.
     */
    skip?: number
    distinct?: My_ContactScalarFieldEnum | My_ContactScalarFieldEnum[]
  }

  /**
   * My_Contact create
   */
  export type My_ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a My_Contact.
     */
    data: XOR<My_ContactCreateInput, My_ContactUncheckedCreateInput>
  }

  /**
   * My_Contact createMany
   */
  export type My_ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many My_Contacts.
     */
    data: My_ContactCreateManyInput | My_ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * My_Contact createManyAndReturn
   */
  export type My_ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * The data used to create many My_Contacts.
     */
    data: My_ContactCreateManyInput | My_ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * My_Contact update
   */
  export type My_ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a My_Contact.
     */
    data: XOR<My_ContactUpdateInput, My_ContactUncheckedUpdateInput>
    /**
     * Choose, which My_Contact to update.
     */
    where: My_ContactWhereUniqueInput
  }

  /**
   * My_Contact updateMany
   */
  export type My_ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update My_Contacts.
     */
    data: XOR<My_ContactUpdateManyMutationInput, My_ContactUncheckedUpdateManyInput>
    /**
     * Filter which My_Contacts to update
     */
    where?: My_ContactWhereInput
    /**
     * Limit how many My_Contacts to update.
     */
    limit?: number
  }

  /**
   * My_Contact updateManyAndReturn
   */
  export type My_ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * The data used to update My_Contacts.
     */
    data: XOR<My_ContactUpdateManyMutationInput, My_ContactUncheckedUpdateManyInput>
    /**
     * Filter which My_Contacts to update
     */
    where?: My_ContactWhereInput
    /**
     * Limit how many My_Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * My_Contact upsert
   */
  export type My_ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the My_Contact to update in case it exists.
     */
    where: My_ContactWhereUniqueInput
    /**
     * In case the My_Contact found by the `where` argument doesn't exist, create a new My_Contact with this data.
     */
    create: XOR<My_ContactCreateInput, My_ContactUncheckedCreateInput>
    /**
     * In case the My_Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<My_ContactUpdateInput, My_ContactUncheckedUpdateInput>
  }

  /**
   * My_Contact delete
   */
  export type My_ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
    /**
     * Filter which My_Contact to delete.
     */
    where: My_ContactWhereUniqueInput
  }

  /**
   * My_Contact deleteMany
   */
  export type My_ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which My_Contacts to delete
     */
    where?: My_ContactWhereInput
    /**
     * Limit how many My_Contacts to delete.
     */
    limit?: number
  }

  /**
   * My_Contact.category
   */
  export type My_Contact$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * My_Contact.file
   */
  export type My_Contact$fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * My_Contact without action
   */
  export type My_ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Contact
     */
    select?: My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Contact
     */
    omit?: My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ContactInclude<ExtArgs> | null
  }


  /**
   * Model Invalid_My_Contact
   */

  export type AggregateInvalid_My_Contact = {
    _count: Invalid_My_ContactCountAggregateOutputType | null
    _min: Invalid_My_ContactMinAggregateOutputType | null
    _max: Invalid_My_ContactMaxAggregateOutputType | null
  }

  export type Invalid_My_ContactMinAggregateOutputType = {
    id: string | null
    fileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    email: string | null
    categoryId: string | null
    userId: string | null
    errorReason: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Invalid_My_ContactMaxAggregateOutputType = {
    id: string | null
    fileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    email: string | null
    categoryId: string | null
    userId: string | null
    errorReason: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Invalid_My_ContactCountAggregateOutputType = {
    id: number
    fileId: number
    firstName: number
    lastName: number
    province: number
    district: number
    municipality: number
    phoneNumber: number
    email: number
    categoryId: number
    userId: number
    errorReason: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Invalid_My_ContactMinAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    email?: true
    categoryId?: true
    userId?: true
    errorReason?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Invalid_My_ContactMaxAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    email?: true
    categoryId?: true
    userId?: true
    errorReason?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Invalid_My_ContactCountAggregateInputType = {
    id?: true
    fileId?: true
    firstName?: true
    lastName?: true
    province?: true
    district?: true
    municipality?: true
    phoneNumber?: true
    email?: true
    categoryId?: true
    userId?: true
    errorReason?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Invalid_My_ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invalid_My_Contact to aggregate.
     */
    where?: Invalid_My_ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invalid_My_Contacts to fetch.
     */
    orderBy?: Invalid_My_ContactOrderByWithRelationInput | Invalid_My_ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Invalid_My_ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invalid_My_Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invalid_My_Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invalid_My_Contacts
    **/
    _count?: true | Invalid_My_ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invalid_My_ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invalid_My_ContactMaxAggregateInputType
  }

  export type GetInvalid_My_ContactAggregateType<T extends Invalid_My_ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateInvalid_My_Contact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvalid_My_Contact[P]>
      : GetScalarType<T[P], AggregateInvalid_My_Contact[P]>
  }




  export type Invalid_My_ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invalid_My_ContactWhereInput
    orderBy?: Invalid_My_ContactOrderByWithAggregationInput | Invalid_My_ContactOrderByWithAggregationInput[]
    by: Invalid_My_ContactScalarFieldEnum[] | Invalid_My_ContactScalarFieldEnum
    having?: Invalid_My_ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invalid_My_ContactCountAggregateInputType | true
    _min?: Invalid_My_ContactMinAggregateInputType
    _max?: Invalid_My_ContactMaxAggregateInputType
  }

  export type Invalid_My_ContactGroupByOutputType = {
    id: string
    fileId: string | null
    firstName: string | null
    lastName: string | null
    province: string | null
    district: string | null
    municipality: string | null
    phoneNumber: string | null
    email: string | null
    categoryId: string | null
    userId: string
    errorReason: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: Invalid_My_ContactCountAggregateOutputType | null
    _min: Invalid_My_ContactMinAggregateOutputType | null
    _max: Invalid_My_ContactMaxAggregateOutputType | null
  }

  type GetInvalid_My_ContactGroupByPayload<T extends Invalid_My_ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invalid_My_ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invalid_My_ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invalid_My_ContactGroupByOutputType[P]>
            : GetScalarType<T[P], Invalid_My_ContactGroupByOutputType[P]>
        }
      >
    >


  export type Invalid_My_ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    email?: boolean
    categoryId?: boolean
    userId?: boolean
    errorReason?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Invalid_My_Contact$categoryArgs<ExtArgs>
    file?: boolean | Invalid_My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invalid_My_Contact"]>

  export type Invalid_My_ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    email?: boolean
    categoryId?: boolean
    userId?: boolean
    errorReason?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Invalid_My_Contact$categoryArgs<ExtArgs>
    file?: boolean | Invalid_My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invalid_My_Contact"]>

  export type Invalid_My_ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    email?: boolean
    categoryId?: boolean
    userId?: boolean
    errorReason?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Invalid_My_Contact$categoryArgs<ExtArgs>
    file?: boolean | Invalid_My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invalid_My_Contact"]>

  export type Invalid_My_ContactSelectScalar = {
    id?: boolean
    fileId?: boolean
    firstName?: boolean
    lastName?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    phoneNumber?: boolean
    email?: boolean
    categoryId?: boolean
    userId?: boolean
    errorReason?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Invalid_My_ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "firstName" | "lastName" | "province" | "district" | "municipality" | "phoneNumber" | "email" | "categoryId" | "userId" | "errorReason" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["invalid_My_Contact"]>
  export type Invalid_My_ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Invalid_My_Contact$categoryArgs<ExtArgs>
    file?: boolean | Invalid_My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Invalid_My_ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Invalid_My_Contact$categoryArgs<ExtArgs>
    file?: boolean | Invalid_My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Invalid_My_ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Invalid_My_Contact$categoryArgs<ExtArgs>
    file?: boolean | Invalid_My_Contact$fileArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Invalid_My_ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invalid_My_Contact"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      file: Prisma.$FilesPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileId: string | null
      firstName: string | null
      lastName: string | null
      province: string | null
      district: string | null
      municipality: string | null
      phoneNumber: string | null
      email: string | null
      categoryId: string | null
      userId: string
      errorReason: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invalid_My_Contact"]>
    composites: {}
  }

  type Invalid_My_ContactGetPayload<S extends boolean | null | undefined | Invalid_My_ContactDefaultArgs> = $Result.GetResult<Prisma.$Invalid_My_ContactPayload, S>

  type Invalid_My_ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Invalid_My_ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invalid_My_ContactCountAggregateInputType | true
    }

  export interface Invalid_My_ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invalid_My_Contact'], meta: { name: 'Invalid_My_Contact' } }
    /**
     * Find zero or one Invalid_My_Contact that matches the filter.
     * @param {Invalid_My_ContactFindUniqueArgs} args - Arguments to find a Invalid_My_Contact
     * @example
     * // Get one Invalid_My_Contact
     * const invalid_My_Contact = await prisma.invalid_My_Contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Invalid_My_ContactFindUniqueArgs>(args: SelectSubset<T, Invalid_My_ContactFindUniqueArgs<ExtArgs>>): Prisma__Invalid_My_ContactClient<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invalid_My_Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Invalid_My_ContactFindUniqueOrThrowArgs} args - Arguments to find a Invalid_My_Contact
     * @example
     * // Get one Invalid_My_Contact
     * const invalid_My_Contact = await prisma.invalid_My_Contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Invalid_My_ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, Invalid_My_ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Invalid_My_ContactClient<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invalid_My_Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_My_ContactFindFirstArgs} args - Arguments to find a Invalid_My_Contact
     * @example
     * // Get one Invalid_My_Contact
     * const invalid_My_Contact = await prisma.invalid_My_Contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Invalid_My_ContactFindFirstArgs>(args?: SelectSubset<T, Invalid_My_ContactFindFirstArgs<ExtArgs>>): Prisma__Invalid_My_ContactClient<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invalid_My_Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_My_ContactFindFirstOrThrowArgs} args - Arguments to find a Invalid_My_Contact
     * @example
     * // Get one Invalid_My_Contact
     * const invalid_My_Contact = await prisma.invalid_My_Contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Invalid_My_ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, Invalid_My_ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__Invalid_My_ContactClient<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invalid_My_Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_My_ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invalid_My_Contacts
     * const invalid_My_Contacts = await prisma.invalid_My_Contact.findMany()
     * 
     * // Get first 10 Invalid_My_Contacts
     * const invalid_My_Contacts = await prisma.invalid_My_Contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invalid_My_ContactWithIdOnly = await prisma.invalid_My_Contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Invalid_My_ContactFindManyArgs>(args?: SelectSubset<T, Invalid_My_ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invalid_My_Contact.
     * @param {Invalid_My_ContactCreateArgs} args - Arguments to create a Invalid_My_Contact.
     * @example
     * // Create one Invalid_My_Contact
     * const Invalid_My_Contact = await prisma.invalid_My_Contact.create({
     *   data: {
     *     // ... data to create a Invalid_My_Contact
     *   }
     * })
     * 
     */
    create<T extends Invalid_My_ContactCreateArgs>(args: SelectSubset<T, Invalid_My_ContactCreateArgs<ExtArgs>>): Prisma__Invalid_My_ContactClient<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invalid_My_Contacts.
     * @param {Invalid_My_ContactCreateManyArgs} args - Arguments to create many Invalid_My_Contacts.
     * @example
     * // Create many Invalid_My_Contacts
     * const invalid_My_Contact = await prisma.invalid_My_Contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Invalid_My_ContactCreateManyArgs>(args?: SelectSubset<T, Invalid_My_ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invalid_My_Contacts and returns the data saved in the database.
     * @param {Invalid_My_ContactCreateManyAndReturnArgs} args - Arguments to create many Invalid_My_Contacts.
     * @example
     * // Create many Invalid_My_Contacts
     * const invalid_My_Contact = await prisma.invalid_My_Contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invalid_My_Contacts and only return the `id`
     * const invalid_My_ContactWithIdOnly = await prisma.invalid_My_Contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Invalid_My_ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, Invalid_My_ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invalid_My_Contact.
     * @param {Invalid_My_ContactDeleteArgs} args - Arguments to delete one Invalid_My_Contact.
     * @example
     * // Delete one Invalid_My_Contact
     * const Invalid_My_Contact = await prisma.invalid_My_Contact.delete({
     *   where: {
     *     // ... filter to delete one Invalid_My_Contact
     *   }
     * })
     * 
     */
    delete<T extends Invalid_My_ContactDeleteArgs>(args: SelectSubset<T, Invalid_My_ContactDeleteArgs<ExtArgs>>): Prisma__Invalid_My_ContactClient<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invalid_My_Contact.
     * @param {Invalid_My_ContactUpdateArgs} args - Arguments to update one Invalid_My_Contact.
     * @example
     * // Update one Invalid_My_Contact
     * const invalid_My_Contact = await prisma.invalid_My_Contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Invalid_My_ContactUpdateArgs>(args: SelectSubset<T, Invalid_My_ContactUpdateArgs<ExtArgs>>): Prisma__Invalid_My_ContactClient<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invalid_My_Contacts.
     * @param {Invalid_My_ContactDeleteManyArgs} args - Arguments to filter Invalid_My_Contacts to delete.
     * @example
     * // Delete a few Invalid_My_Contacts
     * const { count } = await prisma.invalid_My_Contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Invalid_My_ContactDeleteManyArgs>(args?: SelectSubset<T, Invalid_My_ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invalid_My_Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_My_ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invalid_My_Contacts
     * const invalid_My_Contact = await prisma.invalid_My_Contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Invalid_My_ContactUpdateManyArgs>(args: SelectSubset<T, Invalid_My_ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invalid_My_Contacts and returns the data updated in the database.
     * @param {Invalid_My_ContactUpdateManyAndReturnArgs} args - Arguments to update many Invalid_My_Contacts.
     * @example
     * // Update many Invalid_My_Contacts
     * const invalid_My_Contact = await prisma.invalid_My_Contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invalid_My_Contacts and only return the `id`
     * const invalid_My_ContactWithIdOnly = await prisma.invalid_My_Contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends Invalid_My_ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, Invalid_My_ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invalid_My_Contact.
     * @param {Invalid_My_ContactUpsertArgs} args - Arguments to update or create a Invalid_My_Contact.
     * @example
     * // Update or create a Invalid_My_Contact
     * const invalid_My_Contact = await prisma.invalid_My_Contact.upsert({
     *   create: {
     *     // ... data to create a Invalid_My_Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invalid_My_Contact we want to update
     *   }
     * })
     */
    upsert<T extends Invalid_My_ContactUpsertArgs>(args: SelectSubset<T, Invalid_My_ContactUpsertArgs<ExtArgs>>): Prisma__Invalid_My_ContactClient<$Result.GetResult<Prisma.$Invalid_My_ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invalid_My_Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_My_ContactCountArgs} args - Arguments to filter Invalid_My_Contacts to count.
     * @example
     * // Count the number of Invalid_My_Contacts
     * const count = await prisma.invalid_My_Contact.count({
     *   where: {
     *     // ... the filter for the Invalid_My_Contacts we want to count
     *   }
     * })
    **/
    count<T extends Invalid_My_ContactCountArgs>(
      args?: Subset<T, Invalid_My_ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invalid_My_ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invalid_My_Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_My_ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Invalid_My_ContactAggregateArgs>(args: Subset<T, Invalid_My_ContactAggregateArgs>): Prisma.PrismaPromise<GetInvalid_My_ContactAggregateType<T>>

    /**
     * Group by Invalid_My_Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_My_ContactGroupByArgs} args - Group by arguments.
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
      T extends Invalid_My_ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Invalid_My_ContactGroupByArgs['orderBy'] }
        : { orderBy?: Invalid_My_ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Invalid_My_ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvalid_My_ContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invalid_My_Contact model
   */
  readonly fields: Invalid_My_ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invalid_My_Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Invalid_My_ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Invalid_My_Contact$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Invalid_My_Contact$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    file<T extends Invalid_My_Contact$fileArgs<ExtArgs> = {}>(args?: Subset<T, Invalid_My_Contact$fileArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invalid_My_Contact model
   */
  interface Invalid_My_ContactFieldRefs {
    readonly id: FieldRef<"Invalid_My_Contact", 'String'>
    readonly fileId: FieldRef<"Invalid_My_Contact", 'String'>
    readonly firstName: FieldRef<"Invalid_My_Contact", 'String'>
    readonly lastName: FieldRef<"Invalid_My_Contact", 'String'>
    readonly province: FieldRef<"Invalid_My_Contact", 'String'>
    readonly district: FieldRef<"Invalid_My_Contact", 'String'>
    readonly municipality: FieldRef<"Invalid_My_Contact", 'String'>
    readonly phoneNumber: FieldRef<"Invalid_My_Contact", 'String'>
    readonly email: FieldRef<"Invalid_My_Contact", 'String'>
    readonly categoryId: FieldRef<"Invalid_My_Contact", 'String'>
    readonly userId: FieldRef<"Invalid_My_Contact", 'String'>
    readonly errorReason: FieldRef<"Invalid_My_Contact", 'String'>
    readonly isDeleted: FieldRef<"Invalid_My_Contact", 'Boolean'>
    readonly createdAt: FieldRef<"Invalid_My_Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Invalid_My_Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invalid_My_Contact findUnique
   */
  export type Invalid_My_ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    /**
     * Filter, which Invalid_My_Contact to fetch.
     */
    where: Invalid_My_ContactWhereUniqueInput
  }

  /**
   * Invalid_My_Contact findUniqueOrThrow
   */
  export type Invalid_My_ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    /**
     * Filter, which Invalid_My_Contact to fetch.
     */
    where: Invalid_My_ContactWhereUniqueInput
  }

  /**
   * Invalid_My_Contact findFirst
   */
  export type Invalid_My_ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    /**
     * Filter, which Invalid_My_Contact to fetch.
     */
    where?: Invalid_My_ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invalid_My_Contacts to fetch.
     */
    orderBy?: Invalid_My_ContactOrderByWithRelationInput | Invalid_My_ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invalid_My_Contacts.
     */
    cursor?: Invalid_My_ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invalid_My_Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invalid_My_Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invalid_My_Contacts.
     */
    distinct?: Invalid_My_ContactScalarFieldEnum | Invalid_My_ContactScalarFieldEnum[]
  }

  /**
   * Invalid_My_Contact findFirstOrThrow
   */
  export type Invalid_My_ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    /**
     * Filter, which Invalid_My_Contact to fetch.
     */
    where?: Invalid_My_ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invalid_My_Contacts to fetch.
     */
    orderBy?: Invalid_My_ContactOrderByWithRelationInput | Invalid_My_ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invalid_My_Contacts.
     */
    cursor?: Invalid_My_ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invalid_My_Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invalid_My_Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invalid_My_Contacts.
     */
    distinct?: Invalid_My_ContactScalarFieldEnum | Invalid_My_ContactScalarFieldEnum[]
  }

  /**
   * Invalid_My_Contact findMany
   */
  export type Invalid_My_ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    /**
     * Filter, which Invalid_My_Contacts to fetch.
     */
    where?: Invalid_My_ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invalid_My_Contacts to fetch.
     */
    orderBy?: Invalid_My_ContactOrderByWithRelationInput | Invalid_My_ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invalid_My_Contacts.
     */
    cursor?: Invalid_My_ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invalid_My_Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invalid_My_Contacts.
     */
    skip?: number
    distinct?: Invalid_My_ContactScalarFieldEnum | Invalid_My_ContactScalarFieldEnum[]
  }

  /**
   * Invalid_My_Contact create
   */
  export type Invalid_My_ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Invalid_My_Contact.
     */
    data: XOR<Invalid_My_ContactCreateInput, Invalid_My_ContactUncheckedCreateInput>
  }

  /**
   * Invalid_My_Contact createMany
   */
  export type Invalid_My_ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invalid_My_Contacts.
     */
    data: Invalid_My_ContactCreateManyInput | Invalid_My_ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invalid_My_Contact createManyAndReturn
   */
  export type Invalid_My_ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Invalid_My_Contacts.
     */
    data: Invalid_My_ContactCreateManyInput | Invalid_My_ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invalid_My_Contact update
   */
  export type Invalid_My_ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Invalid_My_Contact.
     */
    data: XOR<Invalid_My_ContactUpdateInput, Invalid_My_ContactUncheckedUpdateInput>
    /**
     * Choose, which Invalid_My_Contact to update.
     */
    where: Invalid_My_ContactWhereUniqueInput
  }

  /**
   * Invalid_My_Contact updateMany
   */
  export type Invalid_My_ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invalid_My_Contacts.
     */
    data: XOR<Invalid_My_ContactUpdateManyMutationInput, Invalid_My_ContactUncheckedUpdateManyInput>
    /**
     * Filter which Invalid_My_Contacts to update
     */
    where?: Invalid_My_ContactWhereInput
    /**
     * Limit how many Invalid_My_Contacts to update.
     */
    limit?: number
  }

  /**
   * Invalid_My_Contact updateManyAndReturn
   */
  export type Invalid_My_ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * The data used to update Invalid_My_Contacts.
     */
    data: XOR<Invalid_My_ContactUpdateManyMutationInput, Invalid_My_ContactUncheckedUpdateManyInput>
    /**
     * Filter which Invalid_My_Contacts to update
     */
    where?: Invalid_My_ContactWhereInput
    /**
     * Limit how many Invalid_My_Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invalid_My_Contact upsert
   */
  export type Invalid_My_ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Invalid_My_Contact to update in case it exists.
     */
    where: Invalid_My_ContactWhereUniqueInput
    /**
     * In case the Invalid_My_Contact found by the `where` argument doesn't exist, create a new Invalid_My_Contact with this data.
     */
    create: XOR<Invalid_My_ContactCreateInput, Invalid_My_ContactUncheckedCreateInput>
    /**
     * In case the Invalid_My_Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Invalid_My_ContactUpdateInput, Invalid_My_ContactUncheckedUpdateInput>
  }

  /**
   * Invalid_My_Contact delete
   */
  export type Invalid_My_ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
    /**
     * Filter which Invalid_My_Contact to delete.
     */
    where: Invalid_My_ContactWhereUniqueInput
  }

  /**
   * Invalid_My_Contact deleteMany
   */
  export type Invalid_My_ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invalid_My_Contacts to delete
     */
    where?: Invalid_My_ContactWhereInput
    /**
     * Limit how many Invalid_My_Contacts to delete.
     */
    limit?: number
  }

  /**
   * Invalid_My_Contact.category
   */
  export type Invalid_My_Contact$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Invalid_My_Contact.file
   */
  export type Invalid_My_Contact$fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Invalid_My_Contact without action
   */
  export type Invalid_My_ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invalid_My_Contact
     */
    select?: Invalid_My_ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invalid_My_Contact
     */
    omit?: Invalid_My_ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invalid_My_ContactInclude<ExtArgs> | null
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
    email: string | null
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
    email: string | null
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
    email: number
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
    email?: true
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
    email?: true
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
    email?: true
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
    email: string | null
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
    email?: boolean
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
    email?: boolean
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
    email?: boolean
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
    email?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiverMessageId?: boolean
    userId?: boolean
  }

  export type ReceiverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "province" | "district" | "municipality" | "phoneNumber" | "email" | "isDeleted" | "createdAt" | "updatedAt" | "receiverMessageId" | "userId", ExtArgs["result"]["receiver"]>
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
      email: string | null
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
    readonly email: FieldRef<"Receiver", 'String'>
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
    totalRecipients: number | null
    totalDelivered: number | null
    totalBounced: number | null
    totalFailed: number | null
    deliveryRate: number | null
    totalCost: number | null
  }

  export type CampaignSumAggregateOutputType = {
    totalRecipients: number | null
    totalDelivered: number | null
    totalBounced: number | null
    totalFailed: number | null
    deliveryRate: number | null
    totalCost: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    userId: string | null
    categoryId: string | null
    name: string | null
    subject: string | null
    emailBody: string | null
    status: $Enums.CampaignStatus | null
    deliveryStatus: $Enums.DeliveryStatus | null
    province: string | null
    district: string | null
    municipality: string | null
    totalRecipients: number | null
    totalDelivered: number | null
    totalBounced: number | null
    totalFailed: number | null
    deliveryRate: number | null
    totalCost: number | null
    paid: boolean | null
    submitDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    categoryId: string | null
    name: string | null
    subject: string | null
    emailBody: string | null
    status: $Enums.CampaignStatus | null
    deliveryStatus: $Enums.DeliveryStatus | null
    province: string | null
    district: string | null
    municipality: string | null
    totalRecipients: number | null
    totalDelivered: number | null
    totalBounced: number | null
    totalFailed: number | null
    deliveryRate: number | null
    totalCost: number | null
    paid: boolean | null
    submitDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    name: number
    subject: number
    emailBody: number
    status: number
    deliveryStatus: number
    province: number
    district: number
    municipality: number
    totalRecipients: number
    totalDelivered: number
    totalBounced: number
    totalFailed: number
    deliveryRate: number
    totalCost: number
    paid: number
    submitDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    totalRecipients?: true
    totalDelivered?: true
    totalBounced?: true
    totalFailed?: true
    deliveryRate?: true
    totalCost?: true
  }

  export type CampaignSumAggregateInputType = {
    totalRecipients?: true
    totalDelivered?: true
    totalBounced?: true
    totalFailed?: true
    deliveryRate?: true
    totalCost?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    name?: true
    subject?: true
    emailBody?: true
    status?: true
    deliveryStatus?: true
    province?: true
    district?: true
    municipality?: true
    totalRecipients?: true
    totalDelivered?: true
    totalBounced?: true
    totalFailed?: true
    deliveryRate?: true
    totalCost?: true
    paid?: true
    submitDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    name?: true
    subject?: true
    emailBody?: true
    status?: true
    deliveryStatus?: true
    province?: true
    district?: true
    municipality?: true
    totalRecipients?: true
    totalDelivered?: true
    totalBounced?: true
    totalFailed?: true
    deliveryRate?: true
    totalCost?: true
    paid?: true
    submitDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    name?: true
    subject?: true
    emailBody?: true
    status?: true
    deliveryStatus?: true
    province?: true
    district?: true
    municipality?: true
    totalRecipients?: true
    totalDelivered?: true
    totalBounced?: true
    totalFailed?: true
    deliveryRate?: true
    totalCost?: true
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
    categoryId: string
    name: string
    subject: string
    emailBody: string
    status: $Enums.CampaignStatus
    deliveryStatus: $Enums.DeliveryStatus
    province: string | null
    district: string | null
    municipality: string | null
    totalRecipients: number | null
    totalDelivered: number
    totalBounced: number
    totalFailed: number
    deliveryRate: number
    totalCost: number | null
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
    categoryId?: boolean
    name?: boolean
    subject?: boolean
    emailBody?: boolean
    status?: boolean
    deliveryStatus?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    totalRecipients?: boolean
    totalDelivered?: boolean
    totalBounced?: boolean
    totalFailed?: boolean
    deliveryRate?: boolean
    totalCost?: boolean
    paid?: boolean
    submitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | Campaign$paymentArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    name?: boolean
    subject?: boolean
    emailBody?: boolean
    status?: boolean
    deliveryStatus?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    totalRecipients?: boolean
    totalDelivered?: boolean
    totalBounced?: boolean
    totalFailed?: boolean
    deliveryRate?: boolean
    totalCost?: boolean
    paid?: boolean
    submitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    name?: boolean
    subject?: boolean
    emailBody?: boolean
    status?: boolean
    deliveryStatus?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    totalRecipients?: boolean
    totalDelivered?: boolean
    totalBounced?: boolean
    totalFailed?: boolean
    deliveryRate?: boolean
    totalCost?: boolean
    paid?: boolean
    submitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    name?: boolean
    subject?: boolean
    emailBody?: boolean
    status?: boolean
    deliveryStatus?: boolean
    province?: boolean
    district?: boolean
    municipality?: boolean
    totalRecipients?: boolean
    totalDelivered?: boolean
    totalBounced?: boolean
    totalFailed?: boolean
    deliveryRate?: boolean
    totalCost?: boolean
    paid?: boolean
    submitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "name" | "subject" | "emailBody" | "status" | "deliveryStatus" | "province" | "district" | "municipality" | "totalRecipients" | "totalDelivered" | "totalBounced" | "totalFailed" | "deliveryRate" | "totalCost" | "paid" | "submitDate" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | Campaign$paymentArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      payment: Prisma.$CampaignPaymentPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      categoryId: string
      name: string
      subject: string
      emailBody: string
      status: $Enums.CampaignStatus
      deliveryStatus: $Enums.DeliveryStatus
      province: string | null
      district: string | null
      municipality: string | null
      totalRecipients: number | null
      totalDelivered: number
      totalBounced: number
      totalFailed: number
      deliveryRate: number
      totalCost: number | null
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
    payment<T extends Campaign$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$paymentArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly userId: FieldRef<"Campaign", 'String'>
    readonly categoryId: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly subject: FieldRef<"Campaign", 'String'>
    readonly emailBody: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly deliveryStatus: FieldRef<"Campaign", 'DeliveryStatus'>
    readonly province: FieldRef<"Campaign", 'String'>
    readonly district: FieldRef<"Campaign", 'String'>
    readonly municipality: FieldRef<"Campaign", 'String'>
    readonly totalRecipients: FieldRef<"Campaign", 'Int'>
    readonly totalDelivered: FieldRef<"Campaign", 'Int'>
    readonly totalBounced: FieldRef<"Campaign", 'Int'>
    readonly totalFailed: FieldRef<"Campaign", 'Int'>
    readonly deliveryRate: FieldRef<"Campaign", 'Float'>
    readonly totalCost: FieldRef<"Campaign", 'Float'>
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
   * Campaign.payment
   */
  export type Campaign$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    where?: CampaignPaymentWhereInput
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
   * Model EmailPricing
   */

  export type AggregateEmailPricing = {
    _count: EmailPricingCountAggregateOutputType | null
    _avg: EmailPricingAvgAggregateOutputType | null
    _sum: EmailPricingSumAggregateOutputType | null
    _min: EmailPricingMinAggregateOutputType | null
    _max: EmailPricingMaxAggregateOutputType | null
  }

  export type EmailPricingAvgAggregateOutputType = {
    pricePerEmailPaisa: number | null
  }

  export type EmailPricingSumAggregateOutputType = {
    pricePerEmailPaisa: number | null
  }

  export type EmailPricingMinAggregateOutputType = {
    id: string | null
    pricePerEmailPaisa: number | null
    currency: string | null
    isActive: boolean | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailPricingMaxAggregateOutputType = {
    id: string | null
    pricePerEmailPaisa: number | null
    currency: string | null
    isActive: boolean | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailPricingCountAggregateOutputType = {
    id: number
    pricePerEmailPaisa: number
    currency: number
    isActive: number
    effectiveFrom: number
    effectiveTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailPricingAvgAggregateInputType = {
    pricePerEmailPaisa?: true
  }

  export type EmailPricingSumAggregateInputType = {
    pricePerEmailPaisa?: true
  }

  export type EmailPricingMinAggregateInputType = {
    id?: true
    pricePerEmailPaisa?: true
    currency?: true
    isActive?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailPricingMaxAggregateInputType = {
    id?: true
    pricePerEmailPaisa?: true
    currency?: true
    isActive?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailPricingCountAggregateInputType = {
    id?: true
    pricePerEmailPaisa?: true
    currency?: true
    isActive?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailPricingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailPricing to aggregate.
     */
    where?: EmailPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailPricings to fetch.
     */
    orderBy?: EmailPricingOrderByWithRelationInput | EmailPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailPricings
    **/
    _count?: true | EmailPricingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailPricingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailPricingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailPricingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailPricingMaxAggregateInputType
  }

  export type GetEmailPricingAggregateType<T extends EmailPricingAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailPricing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailPricing[P]>
      : GetScalarType<T[P], AggregateEmailPricing[P]>
  }




  export type EmailPricingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailPricingWhereInput
    orderBy?: EmailPricingOrderByWithAggregationInput | EmailPricingOrderByWithAggregationInput[]
    by: EmailPricingScalarFieldEnum[] | EmailPricingScalarFieldEnum
    having?: EmailPricingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailPricingCountAggregateInputType | true
    _avg?: EmailPricingAvgAggregateInputType
    _sum?: EmailPricingSumAggregateInputType
    _min?: EmailPricingMinAggregateInputType
    _max?: EmailPricingMaxAggregateInputType
  }

  export type EmailPricingGroupByOutputType = {
    id: string
    pricePerEmailPaisa: number
    currency: string
    isActive: boolean
    effectiveFrom: Date
    effectiveTo: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EmailPricingCountAggregateOutputType | null
    _avg: EmailPricingAvgAggregateOutputType | null
    _sum: EmailPricingSumAggregateOutputType | null
    _min: EmailPricingMinAggregateOutputType | null
    _max: EmailPricingMaxAggregateOutputType | null
  }

  type GetEmailPricingGroupByPayload<T extends EmailPricingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailPricingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailPricingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailPricingGroupByOutputType[P]>
            : GetScalarType<T[P], EmailPricingGroupByOutputType[P]>
        }
      >
    >


  export type EmailPricingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePerEmailPaisa?: boolean
    currency?: boolean
    isActive?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailPricing"]>

  export type EmailPricingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePerEmailPaisa?: boolean
    currency?: boolean
    isActive?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailPricing"]>

  export type EmailPricingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePerEmailPaisa?: boolean
    currency?: boolean
    isActive?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailPricing"]>

  export type EmailPricingSelectScalar = {
    id?: boolean
    pricePerEmailPaisa?: boolean
    currency?: boolean
    isActive?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailPricingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pricePerEmailPaisa" | "currency" | "isActive" | "effectiveFrom" | "effectiveTo" | "createdAt" | "updatedAt", ExtArgs["result"]["emailPricing"]>

  export type $EmailPricingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailPricing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pricePerEmailPaisa: number
      currency: string
      isActive: boolean
      effectiveFrom: Date
      effectiveTo: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailPricing"]>
    composites: {}
  }

  type EmailPricingGetPayload<S extends boolean | null | undefined | EmailPricingDefaultArgs> = $Result.GetResult<Prisma.$EmailPricingPayload, S>

  type EmailPricingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailPricingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailPricingCountAggregateInputType | true
    }

  export interface EmailPricingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailPricing'], meta: { name: 'EmailPricing' } }
    /**
     * Find zero or one EmailPricing that matches the filter.
     * @param {EmailPricingFindUniqueArgs} args - Arguments to find a EmailPricing
     * @example
     * // Get one EmailPricing
     * const emailPricing = await prisma.emailPricing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailPricingFindUniqueArgs>(args: SelectSubset<T, EmailPricingFindUniqueArgs<ExtArgs>>): Prisma__EmailPricingClient<$Result.GetResult<Prisma.$EmailPricingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailPricing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailPricingFindUniqueOrThrowArgs} args - Arguments to find a EmailPricing
     * @example
     * // Get one EmailPricing
     * const emailPricing = await prisma.emailPricing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailPricingFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailPricingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailPricingClient<$Result.GetResult<Prisma.$EmailPricingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailPricing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailPricingFindFirstArgs} args - Arguments to find a EmailPricing
     * @example
     * // Get one EmailPricing
     * const emailPricing = await prisma.emailPricing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailPricingFindFirstArgs>(args?: SelectSubset<T, EmailPricingFindFirstArgs<ExtArgs>>): Prisma__EmailPricingClient<$Result.GetResult<Prisma.$EmailPricingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailPricing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailPricingFindFirstOrThrowArgs} args - Arguments to find a EmailPricing
     * @example
     * // Get one EmailPricing
     * const emailPricing = await prisma.emailPricing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailPricingFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailPricingFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailPricingClient<$Result.GetResult<Prisma.$EmailPricingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailPricings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailPricingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailPricings
     * const emailPricings = await prisma.emailPricing.findMany()
     * 
     * // Get first 10 EmailPricings
     * const emailPricings = await prisma.emailPricing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailPricingWithIdOnly = await prisma.emailPricing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailPricingFindManyArgs>(args?: SelectSubset<T, EmailPricingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPricingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailPricing.
     * @param {EmailPricingCreateArgs} args - Arguments to create a EmailPricing.
     * @example
     * // Create one EmailPricing
     * const EmailPricing = await prisma.emailPricing.create({
     *   data: {
     *     // ... data to create a EmailPricing
     *   }
     * })
     * 
     */
    create<T extends EmailPricingCreateArgs>(args: SelectSubset<T, EmailPricingCreateArgs<ExtArgs>>): Prisma__EmailPricingClient<$Result.GetResult<Prisma.$EmailPricingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailPricings.
     * @param {EmailPricingCreateManyArgs} args - Arguments to create many EmailPricings.
     * @example
     * // Create many EmailPricings
     * const emailPricing = await prisma.emailPricing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailPricingCreateManyArgs>(args?: SelectSubset<T, EmailPricingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailPricings and returns the data saved in the database.
     * @param {EmailPricingCreateManyAndReturnArgs} args - Arguments to create many EmailPricings.
     * @example
     * // Create many EmailPricings
     * const emailPricing = await prisma.emailPricing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailPricings and only return the `id`
     * const emailPricingWithIdOnly = await prisma.emailPricing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailPricingCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailPricingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPricingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailPricing.
     * @param {EmailPricingDeleteArgs} args - Arguments to delete one EmailPricing.
     * @example
     * // Delete one EmailPricing
     * const EmailPricing = await prisma.emailPricing.delete({
     *   where: {
     *     // ... filter to delete one EmailPricing
     *   }
     * })
     * 
     */
    delete<T extends EmailPricingDeleteArgs>(args: SelectSubset<T, EmailPricingDeleteArgs<ExtArgs>>): Prisma__EmailPricingClient<$Result.GetResult<Prisma.$EmailPricingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailPricing.
     * @param {EmailPricingUpdateArgs} args - Arguments to update one EmailPricing.
     * @example
     * // Update one EmailPricing
     * const emailPricing = await prisma.emailPricing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailPricingUpdateArgs>(args: SelectSubset<T, EmailPricingUpdateArgs<ExtArgs>>): Prisma__EmailPricingClient<$Result.GetResult<Prisma.$EmailPricingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailPricings.
     * @param {EmailPricingDeleteManyArgs} args - Arguments to filter EmailPricings to delete.
     * @example
     * // Delete a few EmailPricings
     * const { count } = await prisma.emailPricing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailPricingDeleteManyArgs>(args?: SelectSubset<T, EmailPricingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailPricingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailPricings
     * const emailPricing = await prisma.emailPricing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailPricingUpdateManyArgs>(args: SelectSubset<T, EmailPricingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailPricings and returns the data updated in the database.
     * @param {EmailPricingUpdateManyAndReturnArgs} args - Arguments to update many EmailPricings.
     * @example
     * // Update many EmailPricings
     * const emailPricing = await prisma.emailPricing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailPricings and only return the `id`
     * const emailPricingWithIdOnly = await prisma.emailPricing.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailPricingUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailPricingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPricingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailPricing.
     * @param {EmailPricingUpsertArgs} args - Arguments to update or create a EmailPricing.
     * @example
     * // Update or create a EmailPricing
     * const emailPricing = await prisma.emailPricing.upsert({
     *   create: {
     *     // ... data to create a EmailPricing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailPricing we want to update
     *   }
     * })
     */
    upsert<T extends EmailPricingUpsertArgs>(args: SelectSubset<T, EmailPricingUpsertArgs<ExtArgs>>): Prisma__EmailPricingClient<$Result.GetResult<Prisma.$EmailPricingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailPricingCountArgs} args - Arguments to filter EmailPricings to count.
     * @example
     * // Count the number of EmailPricings
     * const count = await prisma.emailPricing.count({
     *   where: {
     *     // ... the filter for the EmailPricings we want to count
     *   }
     * })
    **/
    count<T extends EmailPricingCountArgs>(
      args?: Subset<T, EmailPricingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailPricingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailPricingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailPricingAggregateArgs>(args: Subset<T, EmailPricingAggregateArgs>): Prisma.PrismaPromise<GetEmailPricingAggregateType<T>>

    /**
     * Group by EmailPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailPricingGroupByArgs} args - Group by arguments.
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
      T extends EmailPricingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailPricingGroupByArgs['orderBy'] }
        : { orderBy?: EmailPricingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailPricingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailPricingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailPricing model
   */
  readonly fields: EmailPricingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailPricing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailPricingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EmailPricing model
   */
  interface EmailPricingFieldRefs {
    readonly id: FieldRef<"EmailPricing", 'String'>
    readonly pricePerEmailPaisa: FieldRef<"EmailPricing", 'Int'>
    readonly currency: FieldRef<"EmailPricing", 'String'>
    readonly isActive: FieldRef<"EmailPricing", 'Boolean'>
    readonly effectiveFrom: FieldRef<"EmailPricing", 'DateTime'>
    readonly effectiveTo: FieldRef<"EmailPricing", 'DateTime'>
    readonly createdAt: FieldRef<"EmailPricing", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailPricing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailPricing findUnique
   */
  export type EmailPricingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
    /**
     * Filter, which EmailPricing to fetch.
     */
    where: EmailPricingWhereUniqueInput
  }

  /**
   * EmailPricing findUniqueOrThrow
   */
  export type EmailPricingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
    /**
     * Filter, which EmailPricing to fetch.
     */
    where: EmailPricingWhereUniqueInput
  }

  /**
   * EmailPricing findFirst
   */
  export type EmailPricingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
    /**
     * Filter, which EmailPricing to fetch.
     */
    where?: EmailPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailPricings to fetch.
     */
    orderBy?: EmailPricingOrderByWithRelationInput | EmailPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailPricings.
     */
    cursor?: EmailPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailPricings.
     */
    distinct?: EmailPricingScalarFieldEnum | EmailPricingScalarFieldEnum[]
  }

  /**
   * EmailPricing findFirstOrThrow
   */
  export type EmailPricingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
    /**
     * Filter, which EmailPricing to fetch.
     */
    where?: EmailPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailPricings to fetch.
     */
    orderBy?: EmailPricingOrderByWithRelationInput | EmailPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailPricings.
     */
    cursor?: EmailPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailPricings.
     */
    distinct?: EmailPricingScalarFieldEnum | EmailPricingScalarFieldEnum[]
  }

  /**
   * EmailPricing findMany
   */
  export type EmailPricingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
    /**
     * Filter, which EmailPricings to fetch.
     */
    where?: EmailPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailPricings to fetch.
     */
    orderBy?: EmailPricingOrderByWithRelationInput | EmailPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailPricings.
     */
    cursor?: EmailPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailPricings.
     */
    skip?: number
    distinct?: EmailPricingScalarFieldEnum | EmailPricingScalarFieldEnum[]
  }

  /**
   * EmailPricing create
   */
  export type EmailPricingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailPricing.
     */
    data: XOR<EmailPricingCreateInput, EmailPricingUncheckedCreateInput>
  }

  /**
   * EmailPricing createMany
   */
  export type EmailPricingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailPricings.
     */
    data: EmailPricingCreateManyInput | EmailPricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailPricing createManyAndReturn
   */
  export type EmailPricingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
    /**
     * The data used to create many EmailPricings.
     */
    data: EmailPricingCreateManyInput | EmailPricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailPricing update
   */
  export type EmailPricingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailPricing.
     */
    data: XOR<EmailPricingUpdateInput, EmailPricingUncheckedUpdateInput>
    /**
     * Choose, which EmailPricing to update.
     */
    where: EmailPricingWhereUniqueInput
  }

  /**
   * EmailPricing updateMany
   */
  export type EmailPricingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailPricings.
     */
    data: XOR<EmailPricingUpdateManyMutationInput, EmailPricingUncheckedUpdateManyInput>
    /**
     * Filter which EmailPricings to update
     */
    where?: EmailPricingWhereInput
    /**
     * Limit how many EmailPricings to update.
     */
    limit?: number
  }

  /**
   * EmailPricing updateManyAndReturn
   */
  export type EmailPricingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
    /**
     * The data used to update EmailPricings.
     */
    data: XOR<EmailPricingUpdateManyMutationInput, EmailPricingUncheckedUpdateManyInput>
    /**
     * Filter which EmailPricings to update
     */
    where?: EmailPricingWhereInput
    /**
     * Limit how many EmailPricings to update.
     */
    limit?: number
  }

  /**
   * EmailPricing upsert
   */
  export type EmailPricingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailPricing to update in case it exists.
     */
    where: EmailPricingWhereUniqueInput
    /**
     * In case the EmailPricing found by the `where` argument doesn't exist, create a new EmailPricing with this data.
     */
    create: XOR<EmailPricingCreateInput, EmailPricingUncheckedCreateInput>
    /**
     * In case the EmailPricing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailPricingUpdateInput, EmailPricingUncheckedUpdateInput>
  }

  /**
   * EmailPricing delete
   */
  export type EmailPricingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
    /**
     * Filter which EmailPricing to delete.
     */
    where: EmailPricingWhereUniqueInput
  }

  /**
   * EmailPricing deleteMany
   */
  export type EmailPricingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailPricings to delete
     */
    where?: EmailPricingWhereInput
    /**
     * Limit how many EmailPricings to delete.
     */
    limit?: number
  }

  /**
   * EmailPricing without action
   */
  export type EmailPricingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailPricing
     */
    select?: EmailPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailPricing
     */
    omit?: EmailPricingOmit<ExtArgs> | null
  }


  /**
   * Model CampaignPayment
   */

  export type AggregateCampaignPayment = {
    _count: CampaignPaymentCountAggregateOutputType | null
    _avg: CampaignPaymentAvgAggregateOutputType | null
    _sum: CampaignPaymentSumAggregateOutputType | null
    _min: CampaignPaymentMinAggregateOutputType | null
    _max: CampaignPaymentMaxAggregateOutputType | null
  }

  export type CampaignPaymentAvgAggregateOutputType = {
    amount: number | null
    amountInPaisa: number | null
  }

  export type CampaignPaymentSumAggregateOutputType = {
    amount: number | null
    amountInPaisa: number | null
  }

  export type CampaignPaymentMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    userId: string | null
    amount: number | null
    amountInPaisa: number | null
    paymentMethod: string | null
    status: string | null
    transactionId: string | null
    transactionCode: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignPaymentMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    userId: string | null
    amount: number | null
    amountInPaisa: number | null
    paymentMethod: string | null
    status: string | null
    transactionId: string | null
    transactionCode: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignPaymentCountAggregateOutputType = {
    id: number
    campaignId: number
    userId: number
    amount: number
    amountInPaisa: number
    paymentMethod: number
    status: number
    transactionId: number
    transactionCode: number
    gatewayData: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignPaymentAvgAggregateInputType = {
    amount?: true
    amountInPaisa?: true
  }

  export type CampaignPaymentSumAggregateInputType = {
    amount?: true
    amountInPaisa?: true
  }

  export type CampaignPaymentMinAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    amount?: true
    amountInPaisa?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    transactionCode?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignPaymentMaxAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    amount?: true
    amountInPaisa?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    transactionCode?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignPaymentCountAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    amount?: true
    amountInPaisa?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    transactionCode?: true
    gatewayData?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignPayment to aggregate.
     */
    where?: CampaignPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPayments to fetch.
     */
    orderBy?: CampaignPaymentOrderByWithRelationInput | CampaignPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignPayments
    **/
    _count?: true | CampaignPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignPaymentMaxAggregateInputType
  }

  export type GetCampaignPaymentAggregateType<T extends CampaignPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignPayment[P]>
      : GetScalarType<T[P], AggregateCampaignPayment[P]>
  }




  export type CampaignPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignPaymentWhereInput
    orderBy?: CampaignPaymentOrderByWithAggregationInput | CampaignPaymentOrderByWithAggregationInput[]
    by: CampaignPaymentScalarFieldEnum[] | CampaignPaymentScalarFieldEnum
    having?: CampaignPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignPaymentCountAggregateInputType | true
    _avg?: CampaignPaymentAvgAggregateInputType
    _sum?: CampaignPaymentSumAggregateInputType
    _min?: CampaignPaymentMinAggregateInputType
    _max?: CampaignPaymentMaxAggregateInputType
  }

  export type CampaignPaymentGroupByOutputType = {
    id: string
    campaignId: string
    userId: string
    amount: number
    amountInPaisa: number
    paymentMethod: string
    status: string
    transactionId: string | null
    transactionCode: string | null
    gatewayData: JsonValue | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CampaignPaymentCountAggregateOutputType | null
    _avg: CampaignPaymentAvgAggregateOutputType | null
    _sum: CampaignPaymentSumAggregateOutputType | null
    _min: CampaignPaymentMinAggregateOutputType | null
    _max: CampaignPaymentMaxAggregateOutputType | null
  }

  type GetCampaignPaymentGroupByPayload<T extends CampaignPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignPaymentGroupByOutputType[P]>
        }
      >
    >


  export type CampaignPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    amount?: boolean
    amountInPaisa?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    transactionCode?: boolean
    gatewayData?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignPayment"]>

  export type CampaignPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    amount?: boolean
    amountInPaisa?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    transactionCode?: boolean
    gatewayData?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignPayment"]>

  export type CampaignPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    amount?: boolean
    amountInPaisa?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    transactionCode?: boolean
    gatewayData?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignPayment"]>

  export type CampaignPaymentSelectScalar = {
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    amount?: boolean
    amountInPaisa?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    transactionCode?: boolean
    gatewayData?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "userId" | "amount" | "amountInPaisa" | "paymentMethod" | "status" | "transactionId" | "transactionCode" | "gatewayData" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["campaignPayment"]>
  export type CampaignPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type CampaignPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type CampaignPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $CampaignPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignPayment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      userId: string
      amount: number
      amountInPaisa: number
      paymentMethod: string
      status: string
      transactionId: string | null
      transactionCode: string | null
      gatewayData: Prisma.JsonValue | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaignPayment"]>
    composites: {}
  }

  type CampaignPaymentGetPayload<S extends boolean | null | undefined | CampaignPaymentDefaultArgs> = $Result.GetResult<Prisma.$CampaignPaymentPayload, S>

  type CampaignPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignPaymentCountAggregateInputType | true
    }

  export interface CampaignPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignPayment'], meta: { name: 'CampaignPayment' } }
    /**
     * Find zero or one CampaignPayment that matches the filter.
     * @param {CampaignPaymentFindUniqueArgs} args - Arguments to find a CampaignPayment
     * @example
     * // Get one CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignPaymentFindUniqueArgs>(args: SelectSubset<T, CampaignPaymentFindUniqueArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignPaymentFindUniqueOrThrowArgs} args - Arguments to find a CampaignPayment
     * @example
     * // Get one CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentFindFirstArgs} args - Arguments to find a CampaignPayment
     * @example
     * // Get one CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignPaymentFindFirstArgs>(args?: SelectSubset<T, CampaignPaymentFindFirstArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentFindFirstOrThrowArgs} args - Arguments to find a CampaignPayment
     * @example
     * // Get one CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignPayments
     * const campaignPayments = await prisma.campaignPayment.findMany()
     * 
     * // Get first 10 CampaignPayments
     * const campaignPayments = await prisma.campaignPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignPaymentWithIdOnly = await prisma.campaignPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignPaymentFindManyArgs>(args?: SelectSubset<T, CampaignPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignPayment.
     * @param {CampaignPaymentCreateArgs} args - Arguments to create a CampaignPayment.
     * @example
     * // Create one CampaignPayment
     * const CampaignPayment = await prisma.campaignPayment.create({
     *   data: {
     *     // ... data to create a CampaignPayment
     *   }
     * })
     * 
     */
    create<T extends CampaignPaymentCreateArgs>(args: SelectSubset<T, CampaignPaymentCreateArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignPayments.
     * @param {CampaignPaymentCreateManyArgs} args - Arguments to create many CampaignPayments.
     * @example
     * // Create many CampaignPayments
     * const campaignPayment = await prisma.campaignPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignPaymentCreateManyArgs>(args?: SelectSubset<T, CampaignPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignPayments and returns the data saved in the database.
     * @param {CampaignPaymentCreateManyAndReturnArgs} args - Arguments to create many CampaignPayments.
     * @example
     * // Create many CampaignPayments
     * const campaignPayment = await prisma.campaignPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignPayments and only return the `id`
     * const campaignPaymentWithIdOnly = await prisma.campaignPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignPayment.
     * @param {CampaignPaymentDeleteArgs} args - Arguments to delete one CampaignPayment.
     * @example
     * // Delete one CampaignPayment
     * const CampaignPayment = await prisma.campaignPayment.delete({
     *   where: {
     *     // ... filter to delete one CampaignPayment
     *   }
     * })
     * 
     */
    delete<T extends CampaignPaymentDeleteArgs>(args: SelectSubset<T, CampaignPaymentDeleteArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignPayment.
     * @param {CampaignPaymentUpdateArgs} args - Arguments to update one CampaignPayment.
     * @example
     * // Update one CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignPaymentUpdateArgs>(args: SelectSubset<T, CampaignPaymentUpdateArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignPayments.
     * @param {CampaignPaymentDeleteManyArgs} args - Arguments to filter CampaignPayments to delete.
     * @example
     * // Delete a few CampaignPayments
     * const { count } = await prisma.campaignPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignPaymentDeleteManyArgs>(args?: SelectSubset<T, CampaignPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignPayments
     * const campaignPayment = await prisma.campaignPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignPaymentUpdateManyArgs>(args: SelectSubset<T, CampaignPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignPayments and returns the data updated in the database.
     * @param {CampaignPaymentUpdateManyAndReturnArgs} args - Arguments to update many CampaignPayments.
     * @example
     * // Update many CampaignPayments
     * const campaignPayment = await prisma.campaignPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignPayments and only return the `id`
     * const campaignPaymentWithIdOnly = await prisma.campaignPayment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaignPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignPayment.
     * @param {CampaignPaymentUpsertArgs} args - Arguments to update or create a CampaignPayment.
     * @example
     * // Update or create a CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.upsert({
     *   create: {
     *     // ... data to create a CampaignPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignPayment we want to update
     *   }
     * })
     */
    upsert<T extends CampaignPaymentUpsertArgs>(args: SelectSubset<T, CampaignPaymentUpsertArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentCountArgs} args - Arguments to filter CampaignPayments to count.
     * @example
     * // Count the number of CampaignPayments
     * const count = await prisma.campaignPayment.count({
     *   where: {
     *     // ... the filter for the CampaignPayments we want to count
     *   }
     * })
    **/
    count<T extends CampaignPaymentCountArgs>(
      args?: Subset<T, CampaignPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignPaymentAggregateArgs>(args: Subset<T, CampaignPaymentAggregateArgs>): Prisma.PrismaPromise<GetCampaignPaymentAggregateType<T>>

    /**
     * Group by CampaignPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentGroupByArgs} args - Group by arguments.
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
      T extends CampaignPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignPaymentGroupByArgs['orderBy'] }
        : { orderBy?: CampaignPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignPayment model
   */
  readonly fields: CampaignPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CampaignPayment model
   */
  interface CampaignPaymentFieldRefs {
    readonly id: FieldRef<"CampaignPayment", 'String'>
    readonly campaignId: FieldRef<"CampaignPayment", 'String'>
    readonly userId: FieldRef<"CampaignPayment", 'String'>
    readonly amount: FieldRef<"CampaignPayment", 'Float'>
    readonly amountInPaisa: FieldRef<"CampaignPayment", 'Int'>
    readonly paymentMethod: FieldRef<"CampaignPayment", 'String'>
    readonly status: FieldRef<"CampaignPayment", 'String'>
    readonly transactionId: FieldRef<"CampaignPayment", 'String'>
    readonly transactionCode: FieldRef<"CampaignPayment", 'String'>
    readonly gatewayData: FieldRef<"CampaignPayment", 'Json'>
    readonly paidAt: FieldRef<"CampaignPayment", 'DateTime'>
    readonly createdAt: FieldRef<"CampaignPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"CampaignPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaignPayment findUnique
   */
  export type CampaignPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPayment to fetch.
     */
    where: CampaignPaymentWhereUniqueInput
  }

  /**
   * CampaignPayment findUniqueOrThrow
   */
  export type CampaignPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPayment to fetch.
     */
    where: CampaignPaymentWhereUniqueInput
  }

  /**
   * CampaignPayment findFirst
   */
  export type CampaignPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPayment to fetch.
     */
    where?: CampaignPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPayments to fetch.
     */
    orderBy?: CampaignPaymentOrderByWithRelationInput | CampaignPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignPayments.
     */
    cursor?: CampaignPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignPayments.
     */
    distinct?: CampaignPaymentScalarFieldEnum | CampaignPaymentScalarFieldEnum[]
  }

  /**
   * CampaignPayment findFirstOrThrow
   */
  export type CampaignPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPayment to fetch.
     */
    where?: CampaignPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPayments to fetch.
     */
    orderBy?: CampaignPaymentOrderByWithRelationInput | CampaignPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignPayments.
     */
    cursor?: CampaignPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignPayments.
     */
    distinct?: CampaignPaymentScalarFieldEnum | CampaignPaymentScalarFieldEnum[]
  }

  /**
   * CampaignPayment findMany
   */
  export type CampaignPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPayments to fetch.
     */
    where?: CampaignPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPayments to fetch.
     */
    orderBy?: CampaignPaymentOrderByWithRelationInput | CampaignPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignPayments.
     */
    cursor?: CampaignPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPayments.
     */
    skip?: number
    distinct?: CampaignPaymentScalarFieldEnum | CampaignPaymentScalarFieldEnum[]
  }

  /**
   * CampaignPayment create
   */
  export type CampaignPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignPayment.
     */
    data: XOR<CampaignPaymentCreateInput, CampaignPaymentUncheckedCreateInput>
  }

  /**
   * CampaignPayment createMany
   */
  export type CampaignPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignPayments.
     */
    data: CampaignPaymentCreateManyInput | CampaignPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignPayment createManyAndReturn
   */
  export type CampaignPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignPayments.
     */
    data: CampaignPaymentCreateManyInput | CampaignPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignPayment update
   */
  export type CampaignPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignPayment.
     */
    data: XOR<CampaignPaymentUpdateInput, CampaignPaymentUncheckedUpdateInput>
    /**
     * Choose, which CampaignPayment to update.
     */
    where: CampaignPaymentWhereUniqueInput
  }

  /**
   * CampaignPayment updateMany
   */
  export type CampaignPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignPayments.
     */
    data: XOR<CampaignPaymentUpdateManyMutationInput, CampaignPaymentUncheckedUpdateManyInput>
    /**
     * Filter which CampaignPayments to update
     */
    where?: CampaignPaymentWhereInput
    /**
     * Limit how many CampaignPayments to update.
     */
    limit?: number
  }

  /**
   * CampaignPayment updateManyAndReturn
   */
  export type CampaignPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * The data used to update CampaignPayments.
     */
    data: XOR<CampaignPaymentUpdateManyMutationInput, CampaignPaymentUncheckedUpdateManyInput>
    /**
     * Filter which CampaignPayments to update
     */
    where?: CampaignPaymentWhereInput
    /**
     * Limit how many CampaignPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignPayment upsert
   */
  export type CampaignPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignPayment to update in case it exists.
     */
    where: CampaignPaymentWhereUniqueInput
    /**
     * In case the CampaignPayment found by the `where` argument doesn't exist, create a new CampaignPayment with this data.
     */
    create: XOR<CampaignPaymentCreateInput, CampaignPaymentUncheckedCreateInput>
    /**
     * In case the CampaignPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignPaymentUpdateInput, CampaignPaymentUncheckedUpdateInput>
  }

  /**
   * CampaignPayment delete
   */
  export type CampaignPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter which CampaignPayment to delete.
     */
    where: CampaignPaymentWhereUniqueInput
  }

  /**
   * CampaignPayment deleteMany
   */
  export type CampaignPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignPayments to delete
     */
    where?: CampaignPaymentWhereInput
    /**
     * Limit how many CampaignPayments to delete.
     */
    limit?: number
  }

  /**
   * CampaignPayment without action
   */
  export type CampaignPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    description: 'description',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    path: 'path',
    numberOfReceivers: 'numberOfReceivers',
    invalidRowsPath: 'invalidRowsPath',
    sizeInBytes: 'sizeInBytes',
    type: 'type',
    CategoryId: 'CategoryId',
    uploadStatus: 'uploadStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const My_ContactScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    firstName: 'firstName',
    lastName: 'lastName',
    province: 'province',
    email: 'email',
    district: 'district',
    municipality: 'municipality',
    phoneNumber: 'phoneNumber',
    categoryId: 'categoryId',
    userId: 'userId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type My_ContactScalarFieldEnum = (typeof My_ContactScalarFieldEnum)[keyof typeof My_ContactScalarFieldEnum]


  export const Invalid_My_ContactScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    firstName: 'firstName',
    lastName: 'lastName',
    province: 'province',
    district: 'district',
    municipality: 'municipality',
    phoneNumber: 'phoneNumber',
    email: 'email',
    categoryId: 'categoryId',
    userId: 'userId',
    errorReason: 'errorReason',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Invalid_My_ContactScalarFieldEnum = (typeof Invalid_My_ContactScalarFieldEnum)[keyof typeof Invalid_My_ContactScalarFieldEnum]


  export const ReceiverScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    province: 'province',
    district: 'district',
    municipality: 'municipality',
    phoneNumber: 'phoneNumber',
    email: 'email',
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
    categoryId: 'categoryId',
    name: 'name',
    subject: 'subject',
    emailBody: 'emailBody',
    status: 'status',
    deliveryStatus: 'deliveryStatus',
    province: 'province',
    district: 'district',
    municipality: 'municipality',
    totalRecipients: 'totalRecipients',
    totalDelivered: 'totalDelivered',
    totalBounced: 'totalBounced',
    totalFailed: 'totalFailed',
    deliveryRate: 'deliveryRate',
    totalCost: 'totalCost',
    paid: 'paid',
    submitDate: 'submitDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const EmailPricingScalarFieldEnum: {
    id: 'id',
    pricePerEmailPaisa: 'pricePerEmailPaisa',
    currency: 'currency',
    isActive: 'isActive',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailPricingScalarFieldEnum = (typeof EmailPricingScalarFieldEnum)[keyof typeof EmailPricingScalarFieldEnum]


  export const CampaignPaymentScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    userId: 'userId',
    amount: 'amount',
    amountInPaisa: 'amountInPaisa',
    paymentMethod: 'paymentMethod',
    status: 'status',
    transactionId: 'transactionId',
    transactionCode: 'transactionCode',
    gatewayData: 'gatewayData',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignPaymentScalarFieldEnum = (typeof CampaignPaymentScalarFieldEnum)[keyof typeof CampaignPaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
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
    myContacts?: My_ContactListRelationFilter
    categories?: CategoryListRelationFilter
    invalidMyContacts?: Invalid_My_ContactListRelationFilter
    campaignPayments?: CampaignPaymentListRelationFilter
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
    myContacts?: My_ContactOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    invalidMyContacts?: Invalid_My_ContactOrderByRelationAggregateInput
    campaignPayments?: CampaignPaymentOrderByRelationAggregateInput
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
    myContacts?: My_ContactListRelationFilter
    categories?: CategoryListRelationFilter
    invalidMyContacts?: Invalid_My_ContactListRelationFilter
    campaignPayments?: CampaignPaymentListRelationFilter
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

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    userId?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    isDeleted?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    myContacts?: My_ContactListRelationFilter
    files?: FilesListRelationFilter
    campaigns?: CampaignListRelationFilter
    invalidMyContacts?: Invalid_My_ContactListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    myContacts?: My_ContactOrderByRelationAggregateInput
    files?: FilesOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
    invalidMyContacts?: Invalid_My_ContactOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    userId?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    isDeleted?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    myContacts?: My_ContactListRelationFilter
    files?: FilesListRelationFilter
    campaigns?: CampaignListRelationFilter
    invalidMyContacts?: Invalid_My_ContactListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    userId?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Category"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
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
    CategoryId?: StringFilter<"Files"> | string
    uploadStatus?: EnumUploadStatusFilter<"Files"> | $Enums.UploadStatus
    createdAt?: DateTimeFilter<"Files"> | Date | string
    updatedAt?: DateTimeFilter<"Files"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    myContact?: My_ContactListRelationFilter
    Invalid_My_Contact?: Invalid_My_ContactListRelationFilter
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
    CategoryId?: SortOrder
    uploadStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    myContact?: My_ContactOrderByRelationAggregateInput
    Invalid_My_Contact?: Invalid_My_ContactOrderByRelationAggregateInput
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
    CategoryId?: StringFilter<"Files"> | string
    uploadStatus?: EnumUploadStatusFilter<"Files"> | $Enums.UploadStatus
    createdAt?: DateTimeFilter<"Files"> | Date | string
    updatedAt?: DateTimeFilter<"Files"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    myContact?: My_ContactListRelationFilter
    Invalid_My_Contact?: Invalid_My_ContactListRelationFilter
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
    CategoryId?: SortOrder
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
    CategoryId?: StringWithAggregatesFilter<"Files"> | string
    uploadStatus?: EnumUploadStatusWithAggregatesFilter<"Files"> | $Enums.UploadStatus
    createdAt?: DateTimeWithAggregatesFilter<"Files"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Files"> | Date | string
  }

  export type My_ContactWhereInput = {
    AND?: My_ContactWhereInput | My_ContactWhereInput[]
    OR?: My_ContactWhereInput[]
    NOT?: My_ContactWhereInput | My_ContactWhereInput[]
    id?: StringFilter<"My_Contact"> | string
    fileId?: StringNullableFilter<"My_Contact"> | string | null
    firstName?: StringNullableFilter<"My_Contact"> | string | null
    lastName?: StringNullableFilter<"My_Contact"> | string | null
    province?: StringNullableFilter<"My_Contact"> | string | null
    email?: StringNullableFilter<"My_Contact"> | string | null
    district?: StringNullableFilter<"My_Contact"> | string | null
    municipality?: StringNullableFilter<"My_Contact"> | string | null
    phoneNumber?: StringFilter<"My_Contact"> | string
    categoryId?: StringNullableFilter<"My_Contact"> | string | null
    userId?: StringFilter<"My_Contact"> | string
    isDeleted?: BoolFilter<"My_Contact"> | boolean
    createdAt?: DateTimeFilter<"My_Contact"> | Date | string
    updatedAt?: DateTimeFilter<"My_Contact"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    file?: XOR<FilesNullableScalarRelationFilter, FilesWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type My_ContactOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    file?: FilesOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type My_ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_categoryId_phoneNumber?: My_ContactUserIdCategoryIdPhoneNumberCompoundUniqueInput
    AND?: My_ContactWhereInput | My_ContactWhereInput[]
    OR?: My_ContactWhereInput[]
    NOT?: My_ContactWhereInput | My_ContactWhereInput[]
    fileId?: StringNullableFilter<"My_Contact"> | string | null
    firstName?: StringNullableFilter<"My_Contact"> | string | null
    lastName?: StringNullableFilter<"My_Contact"> | string | null
    province?: StringNullableFilter<"My_Contact"> | string | null
    email?: StringNullableFilter<"My_Contact"> | string | null
    district?: StringNullableFilter<"My_Contact"> | string | null
    municipality?: StringNullableFilter<"My_Contact"> | string | null
    phoneNumber?: StringFilter<"My_Contact"> | string
    categoryId?: StringNullableFilter<"My_Contact"> | string | null
    userId?: StringFilter<"My_Contact"> | string
    isDeleted?: BoolFilter<"My_Contact"> | boolean
    createdAt?: DateTimeFilter<"My_Contact"> | Date | string
    updatedAt?: DateTimeFilter<"My_Contact"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    file?: XOR<FilesNullableScalarRelationFilter, FilesWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_categoryId_phoneNumber">

  export type My_ContactOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: My_ContactCountOrderByAggregateInput
    _max?: My_ContactMaxOrderByAggregateInput
    _min?: My_ContactMinOrderByAggregateInput
  }

  export type My_ContactScalarWhereWithAggregatesInput = {
    AND?: My_ContactScalarWhereWithAggregatesInput | My_ContactScalarWhereWithAggregatesInput[]
    OR?: My_ContactScalarWhereWithAggregatesInput[]
    NOT?: My_ContactScalarWhereWithAggregatesInput | My_ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"My_Contact"> | string
    fileId?: StringNullableWithAggregatesFilter<"My_Contact"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"My_Contact"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"My_Contact"> | string | null
    province?: StringNullableWithAggregatesFilter<"My_Contact"> | string | null
    email?: StringNullableWithAggregatesFilter<"My_Contact"> | string | null
    district?: StringNullableWithAggregatesFilter<"My_Contact"> | string | null
    municipality?: StringNullableWithAggregatesFilter<"My_Contact"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"My_Contact"> | string
    categoryId?: StringNullableWithAggregatesFilter<"My_Contact"> | string | null
    userId?: StringWithAggregatesFilter<"My_Contact"> | string
    isDeleted?: BoolWithAggregatesFilter<"My_Contact"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"My_Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"My_Contact"> | Date | string
  }

  export type Invalid_My_ContactWhereInput = {
    AND?: Invalid_My_ContactWhereInput | Invalid_My_ContactWhereInput[]
    OR?: Invalid_My_ContactWhereInput[]
    NOT?: Invalid_My_ContactWhereInput | Invalid_My_ContactWhereInput[]
    id?: StringFilter<"Invalid_My_Contact"> | string
    fileId?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    firstName?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    lastName?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    province?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    district?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    municipality?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    phoneNumber?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    email?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    categoryId?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    userId?: StringFilter<"Invalid_My_Contact"> | string
    errorReason?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    isDeleted?: BoolFilter<"Invalid_My_Contact"> | boolean
    createdAt?: DateTimeFilter<"Invalid_My_Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Invalid_My_Contact"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    file?: XOR<FilesNullableScalarRelationFilter, FilesWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Invalid_My_ContactOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    userId?: SortOrder
    errorReason?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    file?: FilesOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type Invalid_My_ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Invalid_My_ContactWhereInput | Invalid_My_ContactWhereInput[]
    OR?: Invalid_My_ContactWhereInput[]
    NOT?: Invalid_My_ContactWhereInput | Invalid_My_ContactWhereInput[]
    fileId?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    firstName?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    lastName?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    province?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    district?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    municipality?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    phoneNumber?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    email?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    categoryId?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    userId?: StringFilter<"Invalid_My_Contact"> | string
    errorReason?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    isDeleted?: BoolFilter<"Invalid_My_Contact"> | boolean
    createdAt?: DateTimeFilter<"Invalid_My_Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Invalid_My_Contact"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    file?: XOR<FilesNullableScalarRelationFilter, FilesWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type Invalid_My_ContactOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    userId?: SortOrder
    errorReason?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Invalid_My_ContactCountOrderByAggregateInput
    _max?: Invalid_My_ContactMaxOrderByAggregateInput
    _min?: Invalid_My_ContactMinOrderByAggregateInput
  }

  export type Invalid_My_ContactScalarWhereWithAggregatesInput = {
    AND?: Invalid_My_ContactScalarWhereWithAggregatesInput | Invalid_My_ContactScalarWhereWithAggregatesInput[]
    OR?: Invalid_My_ContactScalarWhereWithAggregatesInput[]
    NOT?: Invalid_My_ContactScalarWhereWithAggregatesInput | Invalid_My_ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invalid_My_Contact"> | string
    fileId?: StringNullableWithAggregatesFilter<"Invalid_My_Contact"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"Invalid_My_Contact"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Invalid_My_Contact"> | string | null
    province?: StringNullableWithAggregatesFilter<"Invalid_My_Contact"> | string | null
    district?: StringNullableWithAggregatesFilter<"Invalid_My_Contact"> | string | null
    municipality?: StringNullableWithAggregatesFilter<"Invalid_My_Contact"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Invalid_My_Contact"> | string | null
    email?: StringNullableWithAggregatesFilter<"Invalid_My_Contact"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Invalid_My_Contact"> | string | null
    userId?: StringWithAggregatesFilter<"Invalid_My_Contact"> | string
    errorReason?: StringNullableWithAggregatesFilter<"Invalid_My_Contact"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Invalid_My_Contact"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Invalid_My_Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invalid_My_Contact"> | Date | string
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
    email?: StringNullableFilter<"Receiver"> | string | null
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
    email?: SortOrderInput | SortOrder
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
    email?: StringNullableFilter<"Receiver"> | string | null
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
    email?: SortOrderInput | SortOrder
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
    email?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
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
    categoryId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    subject?: StringFilter<"Campaign"> | string
    emailBody?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFilter<"Campaign"> | $Enums.DeliveryStatus
    province?: StringNullableFilter<"Campaign"> | string | null
    district?: StringNullableFilter<"Campaign"> | string | null
    municipality?: StringNullableFilter<"Campaign"> | string | null
    totalRecipients?: IntNullableFilter<"Campaign"> | number | null
    totalDelivered?: IntFilter<"Campaign"> | number
    totalBounced?: IntFilter<"Campaign"> | number
    totalFailed?: IntFilter<"Campaign"> | number
    deliveryRate?: FloatFilter<"Campaign"> | number
    totalCost?: FloatNullableFilter<"Campaign"> | number | null
    paid?: BoolFilter<"Campaign"> | boolean
    submitDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    payment?: XOR<CampaignPaymentNullableScalarRelationFilter, CampaignPaymentWhereInput> | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    emailBody?: SortOrder
    status?: SortOrder
    deliveryStatus?: SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    totalRecipients?: SortOrderInput | SortOrder
    totalDelivered?: SortOrder
    totalBounced?: SortOrder
    totalFailed?: SortOrder
    deliveryRate?: SortOrder
    totalCost?: SortOrderInput | SortOrder
    paid?: SortOrder
    submitDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payment?: CampaignPaymentOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    userId?: StringFilter<"Campaign"> | string
    categoryId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    subject?: StringFilter<"Campaign"> | string
    emailBody?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFilter<"Campaign"> | $Enums.DeliveryStatus
    province?: StringNullableFilter<"Campaign"> | string | null
    district?: StringNullableFilter<"Campaign"> | string | null
    municipality?: StringNullableFilter<"Campaign"> | string | null
    totalRecipients?: IntNullableFilter<"Campaign"> | number | null
    totalDelivered?: IntFilter<"Campaign"> | number
    totalBounced?: IntFilter<"Campaign"> | number
    totalFailed?: IntFilter<"Campaign"> | number
    deliveryRate?: FloatFilter<"Campaign"> | number
    totalCost?: FloatNullableFilter<"Campaign"> | number | null
    paid?: BoolFilter<"Campaign"> | boolean
    submitDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    payment?: XOR<CampaignPaymentNullableScalarRelationFilter, CampaignPaymentWhereInput> | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    emailBody?: SortOrder
    status?: SortOrder
    deliveryStatus?: SortOrder
    province?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    totalRecipients?: SortOrderInput | SortOrder
    totalDelivered?: SortOrder
    totalBounced?: SortOrder
    totalFailed?: SortOrder
    deliveryRate?: SortOrder
    totalCost?: SortOrderInput | SortOrder
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
    categoryId?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    subject?: StringWithAggregatesFilter<"Campaign"> | string
    emailBody?: StringWithAggregatesFilter<"Campaign"> | string
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusWithAggregatesFilter<"Campaign"> | $Enums.DeliveryStatus
    province?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    district?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    municipality?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    totalRecipients?: IntNullableWithAggregatesFilter<"Campaign"> | number | null
    totalDelivered?: IntWithAggregatesFilter<"Campaign"> | number
    totalBounced?: IntWithAggregatesFilter<"Campaign"> | number
    totalFailed?: IntWithAggregatesFilter<"Campaign"> | number
    deliveryRate?: FloatWithAggregatesFilter<"Campaign"> | number
    totalCost?: FloatNullableWithAggregatesFilter<"Campaign"> | number | null
    paid?: BoolWithAggregatesFilter<"Campaign"> | boolean
    submitDate?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type EmailPricingWhereInput = {
    AND?: EmailPricingWhereInput | EmailPricingWhereInput[]
    OR?: EmailPricingWhereInput[]
    NOT?: EmailPricingWhereInput | EmailPricingWhereInput[]
    id?: StringFilter<"EmailPricing"> | string
    pricePerEmailPaisa?: IntFilter<"EmailPricing"> | number
    currency?: StringFilter<"EmailPricing"> | string
    isActive?: BoolFilter<"EmailPricing"> | boolean
    effectiveFrom?: DateTimeFilter<"EmailPricing"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"EmailPricing"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailPricing"> | Date | string
    updatedAt?: DateTimeFilter<"EmailPricing"> | Date | string
  }

  export type EmailPricingOrderByWithRelationInput = {
    id?: SortOrder
    pricePerEmailPaisa?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailPricingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailPricingWhereInput | EmailPricingWhereInput[]
    OR?: EmailPricingWhereInput[]
    NOT?: EmailPricingWhereInput | EmailPricingWhereInput[]
    pricePerEmailPaisa?: IntFilter<"EmailPricing"> | number
    currency?: StringFilter<"EmailPricing"> | string
    isActive?: BoolFilter<"EmailPricing"> | boolean
    effectiveFrom?: DateTimeFilter<"EmailPricing"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"EmailPricing"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailPricing"> | Date | string
    updatedAt?: DateTimeFilter<"EmailPricing"> | Date | string
  }, "id">

  export type EmailPricingOrderByWithAggregationInput = {
    id?: SortOrder
    pricePerEmailPaisa?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailPricingCountOrderByAggregateInput
    _avg?: EmailPricingAvgOrderByAggregateInput
    _max?: EmailPricingMaxOrderByAggregateInput
    _min?: EmailPricingMinOrderByAggregateInput
    _sum?: EmailPricingSumOrderByAggregateInput
  }

  export type EmailPricingScalarWhereWithAggregatesInput = {
    AND?: EmailPricingScalarWhereWithAggregatesInput | EmailPricingScalarWhereWithAggregatesInput[]
    OR?: EmailPricingScalarWhereWithAggregatesInput[]
    NOT?: EmailPricingScalarWhereWithAggregatesInput | EmailPricingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailPricing"> | string
    pricePerEmailPaisa?: IntWithAggregatesFilter<"EmailPricing"> | number
    currency?: StringWithAggregatesFilter<"EmailPricing"> | string
    isActive?: BoolWithAggregatesFilter<"EmailPricing"> | boolean
    effectiveFrom?: DateTimeWithAggregatesFilter<"EmailPricing"> | Date | string
    effectiveTo?: DateTimeNullableWithAggregatesFilter<"EmailPricing"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailPricing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailPricing"> | Date | string
  }

  export type CampaignPaymentWhereInput = {
    AND?: CampaignPaymentWhereInput | CampaignPaymentWhereInput[]
    OR?: CampaignPaymentWhereInput[]
    NOT?: CampaignPaymentWhereInput | CampaignPaymentWhereInput[]
    id?: StringFilter<"CampaignPayment"> | string
    campaignId?: StringFilter<"CampaignPayment"> | string
    userId?: StringFilter<"CampaignPayment"> | string
    amount?: FloatFilter<"CampaignPayment"> | number
    amountInPaisa?: IntFilter<"CampaignPayment"> | number
    paymentMethod?: StringFilter<"CampaignPayment"> | string
    status?: StringFilter<"CampaignPayment"> | string
    transactionId?: StringNullableFilter<"CampaignPayment"> | string | null
    transactionCode?: StringNullableFilter<"CampaignPayment"> | string | null
    gatewayData?: JsonNullableFilter<"CampaignPayment">
    paidAt?: DateTimeNullableFilter<"CampaignPayment"> | Date | string | null
    createdAt?: DateTimeFilter<"CampaignPayment"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignPayment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type CampaignPaymentOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    amountInPaisa?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    transactionCode?: SortOrderInput | SortOrder
    gatewayData?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
  }

  export type CampaignPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId?: string
    AND?: CampaignPaymentWhereInput | CampaignPaymentWhereInput[]
    OR?: CampaignPaymentWhereInput[]
    NOT?: CampaignPaymentWhereInput | CampaignPaymentWhereInput[]
    userId?: StringFilter<"CampaignPayment"> | string
    amount?: FloatFilter<"CampaignPayment"> | number
    amountInPaisa?: IntFilter<"CampaignPayment"> | number
    paymentMethod?: StringFilter<"CampaignPayment"> | string
    status?: StringFilter<"CampaignPayment"> | string
    transactionId?: StringNullableFilter<"CampaignPayment"> | string | null
    transactionCode?: StringNullableFilter<"CampaignPayment"> | string | null
    gatewayData?: JsonNullableFilter<"CampaignPayment">
    paidAt?: DateTimeNullableFilter<"CampaignPayment"> | Date | string | null
    createdAt?: DateTimeFilter<"CampaignPayment"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignPayment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id" | "campaignId">

  export type CampaignPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    amountInPaisa?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    transactionCode?: SortOrderInput | SortOrder
    gatewayData?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignPaymentCountOrderByAggregateInput
    _avg?: CampaignPaymentAvgOrderByAggregateInput
    _max?: CampaignPaymentMaxOrderByAggregateInput
    _min?: CampaignPaymentMinOrderByAggregateInput
    _sum?: CampaignPaymentSumOrderByAggregateInput
  }

  export type CampaignPaymentScalarWhereWithAggregatesInput = {
    AND?: CampaignPaymentScalarWhereWithAggregatesInput | CampaignPaymentScalarWhereWithAggregatesInput[]
    OR?: CampaignPaymentScalarWhereWithAggregatesInput[]
    NOT?: CampaignPaymentScalarWhereWithAggregatesInput | CampaignPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampaignPayment"> | string
    campaignId?: StringWithAggregatesFilter<"CampaignPayment"> | string
    userId?: StringWithAggregatesFilter<"CampaignPayment"> | string
    amount?: FloatWithAggregatesFilter<"CampaignPayment"> | number
    amountInPaisa?: IntWithAggregatesFilter<"CampaignPayment"> | number
    paymentMethod?: StringWithAggregatesFilter<"CampaignPayment"> | string
    status?: StringWithAggregatesFilter<"CampaignPayment"> | string
    transactionId?: StringNullableWithAggregatesFilter<"CampaignPayment"> | string | null
    transactionCode?: StringNullableWithAggregatesFilter<"CampaignPayment"> | string | null
    gatewayData?: JsonNullableWithAggregatesFilter<"CampaignPayment">
    paidAt?: DateTimeNullableWithAggregatesFilter<"CampaignPayment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CampaignPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaignPayment"> | Date | string
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
    myContacts?: My_ContactCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutUserInput
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
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutUserInput
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
    myContacts?: My_ContactUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutUserNestedInput
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
    myContacts?: My_ContactUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutUserNestedInput
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

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    myContacts?: My_ContactCreateNestedManyWithoutCategoryInput
    files?: FilesCreateNestedManyWithoutCategoryInput
    campaigns?: CampaignCreateNestedManyWithoutCategoryInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutCategoryInput
    files?: FilesUncheckedCreateNestedManyWithoutCategoryInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCategoryInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    myContacts?: My_ContactUpdateManyWithoutCategoryNestedInput
    files?: FilesUpdateManyWithoutCategoryNestedInput
    campaigns?: CampaignUpdateManyWithoutCategoryNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    myContacts?: My_ContactUncheckedUpdateManyWithoutCategoryNestedInput
    files?: FilesUncheckedUpdateManyWithoutCategoryNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCategoryNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    userId: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    category: CategoryCreateNestedOneWithoutFilesInput
    user: UserCreateNestedOneWithoutFilesInput
    myContact?: My_ContactCreateNestedManyWithoutFileInput
    Invalid_My_Contact?: Invalid_My_ContactCreateNestedManyWithoutFileInput
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
    CategoryId: string
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    myContact?: My_ContactUncheckedCreateNestedManyWithoutFileInput
    Invalid_My_Contact?: Invalid_My_ContactUncheckedCreateNestedManyWithoutFileInput
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
    category?: CategoryUpdateOneRequiredWithoutFilesNestedInput
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    myContact?: My_ContactUpdateManyWithoutFileNestedInput
    Invalid_My_Contact?: Invalid_My_ContactUpdateManyWithoutFileNestedInput
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
    CategoryId?: StringFieldUpdateOperationsInput | string
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    myContact?: My_ContactUncheckedUpdateManyWithoutFileNestedInput
    Invalid_My_Contact?: Invalid_My_ContactUncheckedUpdateManyWithoutFileNestedInput
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
    CategoryId: string
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
    CategoryId?: StringFieldUpdateOperationsInput | string
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_ContactCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutMyContactsInput
    file?: FilesCreateNestedOneWithoutMyContactInput
    user: UserCreateNestedOneWithoutMyContactsInput
  }

  export type My_ContactUncheckedCreateInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    categoryId?: string | null
    userId: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type My_ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutMyContactsNestedInput
    file?: FilesUpdateOneWithoutMyContactNestedInput
    user?: UserUpdateOneRequiredWithoutMyContactsNestedInput
  }

  export type My_ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_ContactCreateManyInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    categoryId?: string | null
    userId: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type My_ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_My_ContactCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutInvalidMyContactsInput
    file?: FilesCreateNestedOneWithoutInvalid_My_ContactInput
    user: UserCreateNestedOneWithoutInvalidMyContactsInput
  }

  export type Invalid_My_ContactUncheckedCreateInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    categoryId?: string | null
    userId: string
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_My_ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutInvalidMyContactsNestedInput
    file?: FilesUpdateOneWithoutInvalid_My_ContactNestedInput
    user?: UserUpdateOneRequiredWithoutInvalidMyContactsNestedInput
  }

  export type Invalid_My_ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_My_ContactCreateManyInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    categoryId?: string | null
    userId: string
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_My_ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_My_ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    email?: string | null
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
    email?: string | null
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
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
    email?: string | null
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
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
    subject?: string
    emailBody?: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    totalRecipients?: number | null
    totalDelivered?: number
    totalBounced?: number
    totalFailed?: number
    deliveryRate?: number
    totalCost?: number | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: CampaignPaymentCreateNestedOneWithoutCampaignInput
    category: CategoryCreateNestedOneWithoutCampaignsInput
    user: UserCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    subject?: string
    emailBody?: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    totalRecipients?: number | null
    totalDelivered?: number
    totalBounced?: number
    totalFailed?: number
    deliveryRate?: number
    totalCost?: number | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: CampaignPaymentUncheckedCreateNestedOneWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: CampaignPaymentUpdateOneWithoutCampaignNestedInput
    category?: CategoryUpdateOneRequiredWithoutCampaignsNestedInput
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: CampaignPaymentUncheckedUpdateOneWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    subject?: string
    emailBody?: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    totalRecipients?: number | null
    totalDelivered?: number
    totalBounced?: number
    totalFailed?: number
    deliveryRate?: number
    totalCost?: number | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailPricingCreateInput = {
    id?: string
    pricePerEmailPaisa: number
    currency?: string
    isActive?: boolean
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailPricingUncheckedCreateInput = {
    id?: string
    pricePerEmailPaisa: number
    currency?: string
    isActive?: boolean
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailPricingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePerEmailPaisa?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailPricingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePerEmailPaisa?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailPricingCreateManyInput = {
    id?: string
    pricePerEmailPaisa: number
    currency?: string
    isActive?: boolean
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailPricingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePerEmailPaisa?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailPricingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePerEmailPaisa?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignPaymentCreateInput = {
    id?: string
    amount: number
    amountInPaisa: number
    paymentMethod: string
    status?: string
    transactionId?: string | null
    transactionCode?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCampaignPaymentsInput
    campaign: CampaignCreateNestedOneWithoutPaymentInput
  }

  export type CampaignPaymentUncheckedCreateInput = {
    id?: string
    campaignId: string
    userId: string
    amount: number
    amountInPaisa: number
    paymentMethod: string
    status?: string
    transactionId?: string | null
    transactionCode?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    amountInPaisa?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionCode?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampaignPaymentsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type CampaignPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    amountInPaisa?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionCode?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignPaymentCreateManyInput = {
    id?: string
    campaignId: string
    userId: string
    amount: number
    amountInPaisa: number
    paymentMethod: string
    status?: string
    transactionId?: string | null
    transactionCode?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    amountInPaisa?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionCode?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    amountInPaisa?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionCode?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type My_ContactListRelationFilter = {
    every?: My_ContactWhereInput
    some?: My_ContactWhereInput
    none?: My_ContactWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type Invalid_My_ContactListRelationFilter = {
    every?: Invalid_My_ContactWhereInput
    some?: Invalid_My_ContactWhereInput
    none?: Invalid_My_ContactWhereInput
  }

  export type CampaignPaymentListRelationFilter = {
    every?: CampaignPaymentWhereInput
    some?: CampaignPaymentWhereInput
    none?: CampaignPaymentWhereInput
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

  export type My_ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Invalid_My_ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignPaymentOrderByRelationAggregateInput = {
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
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
    CategoryId?: SortOrder
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
    CategoryId?: SortOrder
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
    CategoryId?: SortOrder
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

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type FilesNullableScalarRelationFilter = {
    is?: FilesWhereInput | null
    isNot?: FilesWhereInput | null
  }

  export type My_ContactUserIdCategoryIdPhoneNumberCompoundUniqueInput = {
    userId: string
    categoryId: string
    phoneNumber: string
  }

  export type My_ContactCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    email?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type My_ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    email?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type My_ContactMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    email?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Invalid_My_ContactCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    errorReason?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Invalid_My_ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    errorReason?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Invalid_My_ContactMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    errorReason?: SortOrder
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
    email?: SortOrder
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
    email?: SortOrder
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
    email?: SortOrder
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

  export type CampaignPaymentNullableScalarRelationFilter = {
    is?: CampaignPaymentWhereInput | null
    isNot?: CampaignPaymentWhereInput | null
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    emailBody?: SortOrder
    status?: SortOrder
    deliveryStatus?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    totalRecipients?: SortOrder
    totalDelivered?: SortOrder
    totalBounced?: SortOrder
    totalFailed?: SortOrder
    deliveryRate?: SortOrder
    totalCost?: SortOrder
    paid?: SortOrder
    submitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    totalRecipients?: SortOrder
    totalDelivered?: SortOrder
    totalBounced?: SortOrder
    totalFailed?: SortOrder
    deliveryRate?: SortOrder
    totalCost?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    emailBody?: SortOrder
    status?: SortOrder
    deliveryStatus?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    totalRecipients?: SortOrder
    totalDelivered?: SortOrder
    totalBounced?: SortOrder
    totalFailed?: SortOrder
    deliveryRate?: SortOrder
    totalCost?: SortOrder
    paid?: SortOrder
    submitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    emailBody?: SortOrder
    status?: SortOrder
    deliveryStatus?: SortOrder
    province?: SortOrder
    district?: SortOrder
    municipality?: SortOrder
    totalRecipients?: SortOrder
    totalDelivered?: SortOrder
    totalBounced?: SortOrder
    totalFailed?: SortOrder
    deliveryRate?: SortOrder
    totalCost?: SortOrder
    paid?: SortOrder
    submitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    totalRecipients?: SortOrder
    totalDelivered?: SortOrder
    totalBounced?: SortOrder
    totalFailed?: SortOrder
    deliveryRate?: SortOrder
    totalCost?: SortOrder
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

  export type EmailPricingCountOrderByAggregateInput = {
    id?: SortOrder
    pricePerEmailPaisa?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailPricingAvgOrderByAggregateInput = {
    pricePerEmailPaisa?: SortOrder
  }

  export type EmailPricingMaxOrderByAggregateInput = {
    id?: SortOrder
    pricePerEmailPaisa?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailPricingMinOrderByAggregateInput = {
    id?: SortOrder
    pricePerEmailPaisa?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailPricingSumOrderByAggregateInput = {
    pricePerEmailPaisa?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type CampaignPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    amountInPaisa?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    transactionCode?: SortOrder
    gatewayData?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    amountInPaisa?: SortOrder
  }

  export type CampaignPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    amountInPaisa?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    transactionCode?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    amountInPaisa?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    transactionCode?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    amountInPaisa?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type My_ContactCreateNestedManyWithoutUserInput = {
    create?: XOR<My_ContactCreateWithoutUserInput, My_ContactUncheckedCreateWithoutUserInput> | My_ContactCreateWithoutUserInput[] | My_ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutUserInput | My_ContactCreateOrConnectWithoutUserInput[]
    createMany?: My_ContactCreateManyUserInputEnvelope
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type Invalid_My_ContactCreateNestedManyWithoutUserInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutUserInput, Invalid_My_ContactUncheckedCreateWithoutUserInput> | Invalid_My_ContactCreateWithoutUserInput[] | Invalid_My_ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutUserInput | Invalid_My_ContactCreateOrConnectWithoutUserInput[]
    createMany?: Invalid_My_ContactCreateManyUserInputEnvelope
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
  }

  export type CampaignPaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignPaymentCreateWithoutUserInput, CampaignPaymentUncheckedCreateWithoutUserInput> | CampaignPaymentCreateWithoutUserInput[] | CampaignPaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutUserInput | CampaignPaymentCreateOrConnectWithoutUserInput[]
    createMany?: CampaignPaymentCreateManyUserInputEnvelope
    connect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
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

  export type My_ContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<My_ContactCreateWithoutUserInput, My_ContactUncheckedCreateWithoutUserInput> | My_ContactCreateWithoutUserInput[] | My_ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutUserInput | My_ContactCreateOrConnectWithoutUserInput[]
    createMany?: My_ContactCreateManyUserInputEnvelope
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type Invalid_My_ContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutUserInput, Invalid_My_ContactUncheckedCreateWithoutUserInput> | Invalid_My_ContactCreateWithoutUserInput[] | Invalid_My_ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutUserInput | Invalid_My_ContactCreateOrConnectWithoutUserInput[]
    createMany?: Invalid_My_ContactCreateManyUserInputEnvelope
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
  }

  export type CampaignPaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignPaymentCreateWithoutUserInput, CampaignPaymentUncheckedCreateWithoutUserInput> | CampaignPaymentCreateWithoutUserInput[] | CampaignPaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutUserInput | CampaignPaymentCreateOrConnectWithoutUserInput[]
    createMany?: CampaignPaymentCreateManyUserInputEnvelope
    connect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
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

  export type My_ContactUpdateManyWithoutUserNestedInput = {
    create?: XOR<My_ContactCreateWithoutUserInput, My_ContactUncheckedCreateWithoutUserInput> | My_ContactCreateWithoutUserInput[] | My_ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutUserInput | My_ContactCreateOrConnectWithoutUserInput[]
    upsert?: My_ContactUpsertWithWhereUniqueWithoutUserInput | My_ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: My_ContactCreateManyUserInputEnvelope
    set?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    disconnect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    delete?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    update?: My_ContactUpdateWithWhereUniqueWithoutUserInput | My_ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: My_ContactUpdateManyWithWhereWithoutUserInput | My_ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: My_ContactScalarWhereInput | My_ContactScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type Invalid_My_ContactUpdateManyWithoutUserNestedInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutUserInput, Invalid_My_ContactUncheckedCreateWithoutUserInput> | Invalid_My_ContactCreateWithoutUserInput[] | Invalid_My_ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutUserInput | Invalid_My_ContactCreateOrConnectWithoutUserInput[]
    upsert?: Invalid_My_ContactUpsertWithWhereUniqueWithoutUserInput | Invalid_My_ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Invalid_My_ContactCreateManyUserInputEnvelope
    set?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    disconnect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    delete?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    update?: Invalid_My_ContactUpdateWithWhereUniqueWithoutUserInput | Invalid_My_ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Invalid_My_ContactUpdateManyWithWhereWithoutUserInput | Invalid_My_ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Invalid_My_ContactScalarWhereInput | Invalid_My_ContactScalarWhereInput[]
  }

  export type CampaignPaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignPaymentCreateWithoutUserInput, CampaignPaymentUncheckedCreateWithoutUserInput> | CampaignPaymentCreateWithoutUserInput[] | CampaignPaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutUserInput | CampaignPaymentCreateOrConnectWithoutUserInput[]
    upsert?: CampaignPaymentUpsertWithWhereUniqueWithoutUserInput | CampaignPaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignPaymentCreateManyUserInputEnvelope
    set?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    disconnect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    delete?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    connect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    update?: CampaignPaymentUpdateWithWhereUniqueWithoutUserInput | CampaignPaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignPaymentUpdateManyWithWhereWithoutUserInput | CampaignPaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignPaymentScalarWhereInput | CampaignPaymentScalarWhereInput[]
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

  export type My_ContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<My_ContactCreateWithoutUserInput, My_ContactUncheckedCreateWithoutUserInput> | My_ContactCreateWithoutUserInput[] | My_ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutUserInput | My_ContactCreateOrConnectWithoutUserInput[]
    upsert?: My_ContactUpsertWithWhereUniqueWithoutUserInput | My_ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: My_ContactCreateManyUserInputEnvelope
    set?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    disconnect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    delete?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    update?: My_ContactUpdateWithWhereUniqueWithoutUserInput | My_ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: My_ContactUpdateManyWithWhereWithoutUserInput | My_ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: My_ContactScalarWhereInput | My_ContactScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type Invalid_My_ContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutUserInput, Invalid_My_ContactUncheckedCreateWithoutUserInput> | Invalid_My_ContactCreateWithoutUserInput[] | Invalid_My_ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutUserInput | Invalid_My_ContactCreateOrConnectWithoutUserInput[]
    upsert?: Invalid_My_ContactUpsertWithWhereUniqueWithoutUserInput | Invalid_My_ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Invalid_My_ContactCreateManyUserInputEnvelope
    set?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    disconnect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    delete?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    update?: Invalid_My_ContactUpdateWithWhereUniqueWithoutUserInput | Invalid_My_ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Invalid_My_ContactUpdateManyWithWhereWithoutUserInput | Invalid_My_ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Invalid_My_ContactScalarWhereInput | Invalid_My_ContactScalarWhereInput[]
  }

  export type CampaignPaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignPaymentCreateWithoutUserInput, CampaignPaymentUncheckedCreateWithoutUserInput> | CampaignPaymentCreateWithoutUserInput[] | CampaignPaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutUserInput | CampaignPaymentCreateOrConnectWithoutUserInput[]
    upsert?: CampaignPaymentUpsertWithWhereUniqueWithoutUserInput | CampaignPaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignPaymentCreateManyUserInputEnvelope
    set?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    disconnect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    delete?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    connect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    update?: CampaignPaymentUpdateWithWhereUniqueWithoutUserInput | CampaignPaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignPaymentUpdateManyWithWhereWithoutUserInput | CampaignPaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignPaymentScalarWhereInput | CampaignPaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type My_ContactCreateNestedManyWithoutCategoryInput = {
    create?: XOR<My_ContactCreateWithoutCategoryInput, My_ContactUncheckedCreateWithoutCategoryInput> | My_ContactCreateWithoutCategoryInput[] | My_ContactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutCategoryInput | My_ContactCreateOrConnectWithoutCategoryInput[]
    createMany?: My_ContactCreateManyCategoryInputEnvelope
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
  }

  export type FilesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FilesCreateWithoutCategoryInput, FilesUncheckedCreateWithoutCategoryInput> | FilesCreateWithoutCategoryInput[] | FilesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutCategoryInput | FilesCreateOrConnectWithoutCategoryInput[]
    createMany?: FilesCreateManyCategoryInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CampaignCreateWithoutCategoryInput, CampaignUncheckedCreateWithoutCategoryInput> | CampaignCreateWithoutCategoryInput[] | CampaignUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCategoryInput | CampaignCreateOrConnectWithoutCategoryInput[]
    createMany?: CampaignCreateManyCategoryInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type Invalid_My_ContactCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutCategoryInput, Invalid_My_ContactUncheckedCreateWithoutCategoryInput> | Invalid_My_ContactCreateWithoutCategoryInput[] | Invalid_My_ContactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutCategoryInput | Invalid_My_ContactCreateOrConnectWithoutCategoryInput[]
    createMany?: Invalid_My_ContactCreateManyCategoryInputEnvelope
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
  }

  export type My_ContactUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<My_ContactCreateWithoutCategoryInput, My_ContactUncheckedCreateWithoutCategoryInput> | My_ContactCreateWithoutCategoryInput[] | My_ContactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutCategoryInput | My_ContactCreateOrConnectWithoutCategoryInput[]
    createMany?: My_ContactCreateManyCategoryInputEnvelope
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
  }

  export type FilesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FilesCreateWithoutCategoryInput, FilesUncheckedCreateWithoutCategoryInput> | FilesCreateWithoutCategoryInput[] | FilesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutCategoryInput | FilesCreateOrConnectWithoutCategoryInput[]
    createMany?: FilesCreateManyCategoryInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CampaignCreateWithoutCategoryInput, CampaignUncheckedCreateWithoutCategoryInput> | CampaignCreateWithoutCategoryInput[] | CampaignUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCategoryInput | CampaignCreateOrConnectWithoutCategoryInput[]
    createMany?: CampaignCreateManyCategoryInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type Invalid_My_ContactUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutCategoryInput, Invalid_My_ContactUncheckedCreateWithoutCategoryInput> | Invalid_My_ContactCreateWithoutCategoryInput[] | Invalid_My_ContactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutCategoryInput | Invalid_My_ContactCreateOrConnectWithoutCategoryInput[]
    createMany?: Invalid_My_ContactCreateManyCategoryInputEnvelope
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type My_ContactUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<My_ContactCreateWithoutCategoryInput, My_ContactUncheckedCreateWithoutCategoryInput> | My_ContactCreateWithoutCategoryInput[] | My_ContactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutCategoryInput | My_ContactCreateOrConnectWithoutCategoryInput[]
    upsert?: My_ContactUpsertWithWhereUniqueWithoutCategoryInput | My_ContactUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: My_ContactCreateManyCategoryInputEnvelope
    set?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    disconnect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    delete?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    update?: My_ContactUpdateWithWhereUniqueWithoutCategoryInput | My_ContactUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: My_ContactUpdateManyWithWhereWithoutCategoryInput | My_ContactUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: My_ContactScalarWhereInput | My_ContactScalarWhereInput[]
  }

  export type FilesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FilesCreateWithoutCategoryInput, FilesUncheckedCreateWithoutCategoryInput> | FilesCreateWithoutCategoryInput[] | FilesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutCategoryInput | FilesCreateOrConnectWithoutCategoryInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutCategoryInput | FilesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FilesCreateManyCategoryInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutCategoryInput | FilesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutCategoryInput | FilesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CampaignCreateWithoutCategoryInput, CampaignUncheckedCreateWithoutCategoryInput> | CampaignCreateWithoutCategoryInput[] | CampaignUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCategoryInput | CampaignCreateOrConnectWithoutCategoryInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCategoryInput | CampaignUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CampaignCreateManyCategoryInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCategoryInput | CampaignUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCategoryInput | CampaignUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type Invalid_My_ContactUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutCategoryInput, Invalid_My_ContactUncheckedCreateWithoutCategoryInput> | Invalid_My_ContactCreateWithoutCategoryInput[] | Invalid_My_ContactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutCategoryInput | Invalid_My_ContactCreateOrConnectWithoutCategoryInput[]
    upsert?: Invalid_My_ContactUpsertWithWhereUniqueWithoutCategoryInput | Invalid_My_ContactUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: Invalid_My_ContactCreateManyCategoryInputEnvelope
    set?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    disconnect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    delete?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    update?: Invalid_My_ContactUpdateWithWhereUniqueWithoutCategoryInput | Invalid_My_ContactUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: Invalid_My_ContactUpdateManyWithWhereWithoutCategoryInput | Invalid_My_ContactUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: Invalid_My_ContactScalarWhereInput | Invalid_My_ContactScalarWhereInput[]
  }

  export type My_ContactUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<My_ContactCreateWithoutCategoryInput, My_ContactUncheckedCreateWithoutCategoryInput> | My_ContactCreateWithoutCategoryInput[] | My_ContactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutCategoryInput | My_ContactCreateOrConnectWithoutCategoryInput[]
    upsert?: My_ContactUpsertWithWhereUniqueWithoutCategoryInput | My_ContactUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: My_ContactCreateManyCategoryInputEnvelope
    set?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    disconnect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    delete?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    update?: My_ContactUpdateWithWhereUniqueWithoutCategoryInput | My_ContactUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: My_ContactUpdateManyWithWhereWithoutCategoryInput | My_ContactUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: My_ContactScalarWhereInput | My_ContactScalarWhereInput[]
  }

  export type FilesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FilesCreateWithoutCategoryInput, FilesUncheckedCreateWithoutCategoryInput> | FilesCreateWithoutCategoryInput[] | FilesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutCategoryInput | FilesCreateOrConnectWithoutCategoryInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutCategoryInput | FilesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FilesCreateManyCategoryInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutCategoryInput | FilesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutCategoryInput | FilesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CampaignCreateWithoutCategoryInput, CampaignUncheckedCreateWithoutCategoryInput> | CampaignCreateWithoutCategoryInput[] | CampaignUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCategoryInput | CampaignCreateOrConnectWithoutCategoryInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCategoryInput | CampaignUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CampaignCreateManyCategoryInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCategoryInput | CampaignUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCategoryInput | CampaignUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type Invalid_My_ContactUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutCategoryInput, Invalid_My_ContactUncheckedCreateWithoutCategoryInput> | Invalid_My_ContactCreateWithoutCategoryInput[] | Invalid_My_ContactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutCategoryInput | Invalid_My_ContactCreateOrConnectWithoutCategoryInput[]
    upsert?: Invalid_My_ContactUpsertWithWhereUniqueWithoutCategoryInput | Invalid_My_ContactUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: Invalid_My_ContactCreateManyCategoryInputEnvelope
    set?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    disconnect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    delete?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    update?: Invalid_My_ContactUpdateWithWhereUniqueWithoutCategoryInput | Invalid_My_ContactUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: Invalid_My_ContactUpdateManyWithWhereWithoutCategoryInput | Invalid_My_ContactUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: Invalid_My_ContactScalarWhereInput | Invalid_My_ContactScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutFilesInput = {
    create?: XOR<CategoryCreateWithoutFilesInput, CategoryUncheckedCreateWithoutFilesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFilesInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type My_ContactCreateNestedManyWithoutFileInput = {
    create?: XOR<My_ContactCreateWithoutFileInput, My_ContactUncheckedCreateWithoutFileInput> | My_ContactCreateWithoutFileInput[] | My_ContactUncheckedCreateWithoutFileInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutFileInput | My_ContactCreateOrConnectWithoutFileInput[]
    createMany?: My_ContactCreateManyFileInputEnvelope
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
  }

  export type Invalid_My_ContactCreateNestedManyWithoutFileInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutFileInput, Invalid_My_ContactUncheckedCreateWithoutFileInput> | Invalid_My_ContactCreateWithoutFileInput[] | Invalid_My_ContactUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutFileInput | Invalid_My_ContactCreateOrConnectWithoutFileInput[]
    createMany?: Invalid_My_ContactCreateManyFileInputEnvelope
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
  }

  export type My_ContactUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<My_ContactCreateWithoutFileInput, My_ContactUncheckedCreateWithoutFileInput> | My_ContactCreateWithoutFileInput[] | My_ContactUncheckedCreateWithoutFileInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutFileInput | My_ContactCreateOrConnectWithoutFileInput[]
    createMany?: My_ContactCreateManyFileInputEnvelope
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
  }

  export type Invalid_My_ContactUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutFileInput, Invalid_My_ContactUncheckedCreateWithoutFileInput> | Invalid_My_ContactCreateWithoutFileInput[] | Invalid_My_ContactUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutFileInput | Invalid_My_ContactCreateOrConnectWithoutFileInput[]
    createMany?: Invalid_My_ContactCreateManyFileInputEnvelope
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
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

  export type CategoryUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<CategoryCreateWithoutFilesInput, CategoryUncheckedCreateWithoutFilesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFilesInput
    upsert?: CategoryUpsertWithoutFilesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutFilesInput, CategoryUpdateWithoutFilesInput>, CategoryUncheckedUpdateWithoutFilesInput>
  }

  export type UserUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFilesInput, UserUpdateWithoutFilesInput>, UserUncheckedUpdateWithoutFilesInput>
  }

  export type My_ContactUpdateManyWithoutFileNestedInput = {
    create?: XOR<My_ContactCreateWithoutFileInput, My_ContactUncheckedCreateWithoutFileInput> | My_ContactCreateWithoutFileInput[] | My_ContactUncheckedCreateWithoutFileInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutFileInput | My_ContactCreateOrConnectWithoutFileInput[]
    upsert?: My_ContactUpsertWithWhereUniqueWithoutFileInput | My_ContactUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: My_ContactCreateManyFileInputEnvelope
    set?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    disconnect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    delete?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    update?: My_ContactUpdateWithWhereUniqueWithoutFileInput | My_ContactUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: My_ContactUpdateManyWithWhereWithoutFileInput | My_ContactUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: My_ContactScalarWhereInput | My_ContactScalarWhereInput[]
  }

  export type Invalid_My_ContactUpdateManyWithoutFileNestedInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutFileInput, Invalid_My_ContactUncheckedCreateWithoutFileInput> | Invalid_My_ContactCreateWithoutFileInput[] | Invalid_My_ContactUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutFileInput | Invalid_My_ContactCreateOrConnectWithoutFileInput[]
    upsert?: Invalid_My_ContactUpsertWithWhereUniqueWithoutFileInput | Invalid_My_ContactUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: Invalid_My_ContactCreateManyFileInputEnvelope
    set?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    disconnect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    delete?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    update?: Invalid_My_ContactUpdateWithWhereUniqueWithoutFileInput | Invalid_My_ContactUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: Invalid_My_ContactUpdateManyWithWhereWithoutFileInput | Invalid_My_ContactUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: Invalid_My_ContactScalarWhereInput | Invalid_My_ContactScalarWhereInput[]
  }

  export type My_ContactUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<My_ContactCreateWithoutFileInput, My_ContactUncheckedCreateWithoutFileInput> | My_ContactCreateWithoutFileInput[] | My_ContactUncheckedCreateWithoutFileInput[]
    connectOrCreate?: My_ContactCreateOrConnectWithoutFileInput | My_ContactCreateOrConnectWithoutFileInput[]
    upsert?: My_ContactUpsertWithWhereUniqueWithoutFileInput | My_ContactUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: My_ContactCreateManyFileInputEnvelope
    set?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    disconnect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    delete?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    connect?: My_ContactWhereUniqueInput | My_ContactWhereUniqueInput[]
    update?: My_ContactUpdateWithWhereUniqueWithoutFileInput | My_ContactUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: My_ContactUpdateManyWithWhereWithoutFileInput | My_ContactUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: My_ContactScalarWhereInput | My_ContactScalarWhereInput[]
  }

  export type Invalid_My_ContactUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<Invalid_My_ContactCreateWithoutFileInput, Invalid_My_ContactUncheckedCreateWithoutFileInput> | Invalid_My_ContactCreateWithoutFileInput[] | Invalid_My_ContactUncheckedCreateWithoutFileInput[]
    connectOrCreate?: Invalid_My_ContactCreateOrConnectWithoutFileInput | Invalid_My_ContactCreateOrConnectWithoutFileInput[]
    upsert?: Invalid_My_ContactUpsertWithWhereUniqueWithoutFileInput | Invalid_My_ContactUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: Invalid_My_ContactCreateManyFileInputEnvelope
    set?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    disconnect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    delete?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    connect?: Invalid_My_ContactWhereUniqueInput | Invalid_My_ContactWhereUniqueInput[]
    update?: Invalid_My_ContactUpdateWithWhereUniqueWithoutFileInput | Invalid_My_ContactUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: Invalid_My_ContactUpdateManyWithWhereWithoutFileInput | Invalid_My_ContactUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: Invalid_My_ContactScalarWhereInput | Invalid_My_ContactScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutMyContactsInput = {
    create?: XOR<CategoryCreateWithoutMyContactsInput, CategoryUncheckedCreateWithoutMyContactsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMyContactsInput
    connect?: CategoryWhereUniqueInput
  }

  export type FilesCreateNestedOneWithoutMyContactInput = {
    create?: XOR<FilesCreateWithoutMyContactInput, FilesUncheckedCreateWithoutMyContactInput>
    connectOrCreate?: FilesCreateOrConnectWithoutMyContactInput
    connect?: FilesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMyContactsInput = {
    create?: XOR<UserCreateWithoutMyContactsInput, UserUncheckedCreateWithoutMyContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyContactsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryUpdateOneWithoutMyContactsNestedInput = {
    create?: XOR<CategoryCreateWithoutMyContactsInput, CategoryUncheckedCreateWithoutMyContactsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMyContactsInput
    upsert?: CategoryUpsertWithoutMyContactsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMyContactsInput, CategoryUpdateWithoutMyContactsInput>, CategoryUncheckedUpdateWithoutMyContactsInput>
  }

  export type FilesUpdateOneWithoutMyContactNestedInput = {
    create?: XOR<FilesCreateWithoutMyContactInput, FilesUncheckedCreateWithoutMyContactInput>
    connectOrCreate?: FilesCreateOrConnectWithoutMyContactInput
    upsert?: FilesUpsertWithoutMyContactInput
    disconnect?: FilesWhereInput | boolean
    delete?: FilesWhereInput | boolean
    connect?: FilesWhereUniqueInput
    update?: XOR<XOR<FilesUpdateToOneWithWhereWithoutMyContactInput, FilesUpdateWithoutMyContactInput>, FilesUncheckedUpdateWithoutMyContactInput>
  }

  export type UserUpdateOneRequiredWithoutMyContactsNestedInput = {
    create?: XOR<UserCreateWithoutMyContactsInput, UserUncheckedCreateWithoutMyContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyContactsInput
    upsert?: UserUpsertWithoutMyContactsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMyContactsInput, UserUpdateWithoutMyContactsInput>, UserUncheckedUpdateWithoutMyContactsInput>
  }

  export type CategoryCreateNestedOneWithoutInvalidMyContactsInput = {
    create?: XOR<CategoryCreateWithoutInvalidMyContactsInput, CategoryUncheckedCreateWithoutInvalidMyContactsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutInvalidMyContactsInput
    connect?: CategoryWhereUniqueInput
  }

  export type FilesCreateNestedOneWithoutInvalid_My_ContactInput = {
    create?: XOR<FilesCreateWithoutInvalid_My_ContactInput, FilesUncheckedCreateWithoutInvalid_My_ContactInput>
    connectOrCreate?: FilesCreateOrConnectWithoutInvalid_My_ContactInput
    connect?: FilesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvalidMyContactsInput = {
    create?: XOR<UserCreateWithoutInvalidMyContactsInput, UserUncheckedCreateWithoutInvalidMyContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvalidMyContactsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryUpdateOneWithoutInvalidMyContactsNestedInput = {
    create?: XOR<CategoryCreateWithoutInvalidMyContactsInput, CategoryUncheckedCreateWithoutInvalidMyContactsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutInvalidMyContactsInput
    upsert?: CategoryUpsertWithoutInvalidMyContactsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutInvalidMyContactsInput, CategoryUpdateWithoutInvalidMyContactsInput>, CategoryUncheckedUpdateWithoutInvalidMyContactsInput>
  }

  export type FilesUpdateOneWithoutInvalid_My_ContactNestedInput = {
    create?: XOR<FilesCreateWithoutInvalid_My_ContactInput, FilesUncheckedCreateWithoutInvalid_My_ContactInput>
    connectOrCreate?: FilesCreateOrConnectWithoutInvalid_My_ContactInput
    upsert?: FilesUpsertWithoutInvalid_My_ContactInput
    disconnect?: FilesWhereInput | boolean
    delete?: FilesWhereInput | boolean
    connect?: FilesWhereUniqueInput
    update?: XOR<XOR<FilesUpdateToOneWithWhereWithoutInvalid_My_ContactInput, FilesUpdateWithoutInvalid_My_ContactInput>, FilesUncheckedUpdateWithoutInvalid_My_ContactInput>
  }

  export type UserUpdateOneRequiredWithoutInvalidMyContactsNestedInput = {
    create?: XOR<UserCreateWithoutInvalidMyContactsInput, UserUncheckedCreateWithoutInvalidMyContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvalidMyContactsInput
    upsert?: UserUpsertWithoutInvalidMyContactsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvalidMyContactsInput, UserUpdateWithoutInvalidMyContactsInput>, UserUncheckedUpdateWithoutInvalidMyContactsInput>
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

  export type CampaignPaymentCreateNestedOneWithoutCampaignInput = {
    create?: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutCampaignInput
    connect?: CampaignPaymentWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<CategoryCreateWithoutCampaignsInput, CategoryUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCampaignsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignPaymentUncheckedCreateNestedOneWithoutCampaignInput = {
    create?: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutCampaignInput
    connect?: CampaignPaymentWhereUniqueInput
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

  export type CampaignPaymentUpdateOneWithoutCampaignNestedInput = {
    create?: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutCampaignInput
    upsert?: CampaignPaymentUpsertWithoutCampaignInput
    disconnect?: CampaignPaymentWhereInput | boolean
    delete?: CampaignPaymentWhereInput | boolean
    connect?: CampaignPaymentWhereUniqueInput
    update?: XOR<XOR<CampaignPaymentUpdateToOneWithWhereWithoutCampaignInput, CampaignPaymentUpdateWithoutCampaignInput>, CampaignPaymentUncheckedUpdateWithoutCampaignInput>
  }

  export type CategoryUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<CategoryCreateWithoutCampaignsInput, CategoryUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCampaignsInput
    upsert?: CategoryUpsertWithoutCampaignsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCampaignsInput, CategoryUpdateWithoutCampaignsInput>, CategoryUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type CampaignPaymentUncheckedUpdateOneWithoutCampaignNestedInput = {
    create?: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutCampaignInput
    upsert?: CampaignPaymentUpsertWithoutCampaignInput
    disconnect?: CampaignPaymentWhereInput | boolean
    delete?: CampaignPaymentWhereInput | boolean
    connect?: CampaignPaymentWhereUniqueInput
    update?: XOR<XOR<CampaignPaymentUpdateToOneWithWhereWithoutCampaignInput, CampaignPaymentUpdateWithoutCampaignInput>, CampaignPaymentUncheckedUpdateWithoutCampaignInput>
  }

  export type UserCreateNestedOneWithoutCampaignPaymentsInput = {
    create?: XOR<UserCreateWithoutCampaignPaymentsInput, UserUncheckedCreateWithoutCampaignPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutPaymentInput = {
    create?: XOR<CampaignCreateWithoutPaymentInput, CampaignUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutPaymentInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCampaignPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignPaymentsInput, UserUncheckedCreateWithoutCampaignPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignPaymentsInput
    upsert?: UserUpsertWithoutCampaignPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignPaymentsInput, UserUpdateWithoutCampaignPaymentsInput>, UserUncheckedUpdateWithoutCampaignPaymentsInput>
  }

  export type CampaignUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<CampaignCreateWithoutPaymentInput, CampaignUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutPaymentInput
    upsert?: CampaignUpsertWithoutPaymentInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutPaymentInput, CampaignUpdateWithoutPaymentInput>, CampaignUncheckedUpdateWithoutPaymentInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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
    category: CategoryCreateNestedOneWithoutFilesInput
    myContact?: My_ContactCreateNestedManyWithoutFileInput
    Invalid_My_Contact?: Invalid_My_ContactCreateNestedManyWithoutFileInput
  }

  export type FilesUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    CategoryId: string
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    myContact?: My_ContactUncheckedCreateNestedManyWithoutFileInput
    Invalid_My_Contact?: Invalid_My_ContactUncheckedCreateNestedManyWithoutFileInput
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
    email?: string | null
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
    email?: string | null
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
    subject?: string
    emailBody?: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    totalRecipients?: number | null
    totalDelivered?: number
    totalBounced?: number
    totalFailed?: number
    deliveryRate?: number
    totalCost?: number | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: CampaignPaymentCreateNestedOneWithoutCampaignInput
    category: CategoryCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutUserInput = {
    id?: string
    categoryId: string
    name: string
    subject?: string
    emailBody?: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    totalRecipients?: number | null
    totalDelivered?: number
    totalBounced?: number
    totalFailed?: number
    deliveryRate?: number
    totalCost?: number | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: CampaignPaymentUncheckedCreateNestedOneWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutUserInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignCreateManyUserInputEnvelope = {
    data: CampaignCreateManyUserInput | CampaignCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type My_ContactCreateWithoutUserInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutMyContactsInput
    file?: FilesCreateNestedOneWithoutMyContactInput
  }

  export type My_ContactUncheckedCreateWithoutUserInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    categoryId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type My_ContactCreateOrConnectWithoutUserInput = {
    where: My_ContactWhereUniqueInput
    create: XOR<My_ContactCreateWithoutUserInput, My_ContactUncheckedCreateWithoutUserInput>
  }

  export type My_ContactCreateManyUserInputEnvelope = {
    data: My_ContactCreateManyUserInput | My_ContactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    myContacts?: My_ContactCreateNestedManyWithoutCategoryInput
    files?: FilesCreateNestedManyWithoutCategoryInput
    campaigns?: CampaignCreateNestedManyWithoutCategoryInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutCategoryInput
    files?: FilesUncheckedCreateNestedManyWithoutCategoryInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCategoryInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Invalid_My_ContactCreateWithoutUserInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutInvalidMyContactsInput
    file?: FilesCreateNestedOneWithoutInvalid_My_ContactInput
  }

  export type Invalid_My_ContactUncheckedCreateWithoutUserInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    categoryId?: string | null
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_My_ContactCreateOrConnectWithoutUserInput = {
    where: Invalid_My_ContactWhereUniqueInput
    create: XOR<Invalid_My_ContactCreateWithoutUserInput, Invalid_My_ContactUncheckedCreateWithoutUserInput>
  }

  export type Invalid_My_ContactCreateManyUserInputEnvelope = {
    data: Invalid_My_ContactCreateManyUserInput | Invalid_My_ContactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampaignPaymentCreateWithoutUserInput = {
    id?: string
    amount: number
    amountInPaisa: number
    paymentMethod: string
    status?: string
    transactionId?: string | null
    transactionCode?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutPaymentInput
  }

  export type CampaignPaymentUncheckedCreateWithoutUserInput = {
    id?: string
    campaignId: string
    amount: number
    amountInPaisa: number
    paymentMethod: string
    status?: string
    transactionId?: string | null
    transactionCode?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignPaymentCreateOrConnectWithoutUserInput = {
    where: CampaignPaymentWhereUniqueInput
    create: XOR<CampaignPaymentCreateWithoutUserInput, CampaignPaymentUncheckedCreateWithoutUserInput>
  }

  export type CampaignPaymentCreateManyUserInputEnvelope = {
    data: CampaignPaymentCreateManyUserInput | CampaignPaymentCreateManyUserInput[]
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
    CategoryId?: StringFilter<"Files"> | string
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
    email?: StringNullableFilter<"Receiver"> | string | null
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
    categoryId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    subject?: StringFilter<"Campaign"> | string
    emailBody?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFilter<"Campaign"> | $Enums.DeliveryStatus
    province?: StringNullableFilter<"Campaign"> | string | null
    district?: StringNullableFilter<"Campaign"> | string | null
    municipality?: StringNullableFilter<"Campaign"> | string | null
    totalRecipients?: IntNullableFilter<"Campaign"> | number | null
    totalDelivered?: IntFilter<"Campaign"> | number
    totalBounced?: IntFilter<"Campaign"> | number
    totalFailed?: IntFilter<"Campaign"> | number
    deliveryRate?: FloatFilter<"Campaign"> | number
    totalCost?: FloatNullableFilter<"Campaign"> | number | null
    paid?: BoolFilter<"Campaign"> | boolean
    submitDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type My_ContactUpsertWithWhereUniqueWithoutUserInput = {
    where: My_ContactWhereUniqueInput
    update: XOR<My_ContactUpdateWithoutUserInput, My_ContactUncheckedUpdateWithoutUserInput>
    create: XOR<My_ContactCreateWithoutUserInput, My_ContactUncheckedCreateWithoutUserInput>
  }

  export type My_ContactUpdateWithWhereUniqueWithoutUserInput = {
    where: My_ContactWhereUniqueInput
    data: XOR<My_ContactUpdateWithoutUserInput, My_ContactUncheckedUpdateWithoutUserInput>
  }

  export type My_ContactUpdateManyWithWhereWithoutUserInput = {
    where: My_ContactScalarWhereInput
    data: XOR<My_ContactUpdateManyMutationInput, My_ContactUncheckedUpdateManyWithoutUserInput>
  }

  export type My_ContactScalarWhereInput = {
    AND?: My_ContactScalarWhereInput | My_ContactScalarWhereInput[]
    OR?: My_ContactScalarWhereInput[]
    NOT?: My_ContactScalarWhereInput | My_ContactScalarWhereInput[]
    id?: StringFilter<"My_Contact"> | string
    fileId?: StringNullableFilter<"My_Contact"> | string | null
    firstName?: StringNullableFilter<"My_Contact"> | string | null
    lastName?: StringNullableFilter<"My_Contact"> | string | null
    province?: StringNullableFilter<"My_Contact"> | string | null
    email?: StringNullableFilter<"My_Contact"> | string | null
    district?: StringNullableFilter<"My_Contact"> | string | null
    municipality?: StringNullableFilter<"My_Contact"> | string | null
    phoneNumber?: StringFilter<"My_Contact"> | string
    categoryId?: StringNullableFilter<"My_Contact"> | string | null
    userId?: StringFilter<"My_Contact"> | string
    isDeleted?: BoolFilter<"My_Contact"> | boolean
    createdAt?: DateTimeFilter<"My_Contact"> | Date | string
    updatedAt?: DateTimeFilter<"My_Contact"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    userId?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    isDeleted?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type Invalid_My_ContactUpsertWithWhereUniqueWithoutUserInput = {
    where: Invalid_My_ContactWhereUniqueInput
    update: XOR<Invalid_My_ContactUpdateWithoutUserInput, Invalid_My_ContactUncheckedUpdateWithoutUserInput>
    create: XOR<Invalid_My_ContactCreateWithoutUserInput, Invalid_My_ContactUncheckedCreateWithoutUserInput>
  }

  export type Invalid_My_ContactUpdateWithWhereUniqueWithoutUserInput = {
    where: Invalid_My_ContactWhereUniqueInput
    data: XOR<Invalid_My_ContactUpdateWithoutUserInput, Invalid_My_ContactUncheckedUpdateWithoutUserInput>
  }

  export type Invalid_My_ContactUpdateManyWithWhereWithoutUserInput = {
    where: Invalid_My_ContactScalarWhereInput
    data: XOR<Invalid_My_ContactUpdateManyMutationInput, Invalid_My_ContactUncheckedUpdateManyWithoutUserInput>
  }

  export type Invalid_My_ContactScalarWhereInput = {
    AND?: Invalid_My_ContactScalarWhereInput | Invalid_My_ContactScalarWhereInput[]
    OR?: Invalid_My_ContactScalarWhereInput[]
    NOT?: Invalid_My_ContactScalarWhereInput | Invalid_My_ContactScalarWhereInput[]
    id?: StringFilter<"Invalid_My_Contact"> | string
    fileId?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    firstName?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    lastName?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    province?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    district?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    municipality?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    phoneNumber?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    email?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    categoryId?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    userId?: StringFilter<"Invalid_My_Contact"> | string
    errorReason?: StringNullableFilter<"Invalid_My_Contact"> | string | null
    isDeleted?: BoolFilter<"Invalid_My_Contact"> | boolean
    createdAt?: DateTimeFilter<"Invalid_My_Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Invalid_My_Contact"> | Date | string
  }

  export type CampaignPaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: CampaignPaymentWhereUniqueInput
    update: XOR<CampaignPaymentUpdateWithoutUserInput, CampaignPaymentUncheckedUpdateWithoutUserInput>
    create: XOR<CampaignPaymentCreateWithoutUserInput, CampaignPaymentUncheckedCreateWithoutUserInput>
  }

  export type CampaignPaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: CampaignPaymentWhereUniqueInput
    data: XOR<CampaignPaymentUpdateWithoutUserInput, CampaignPaymentUncheckedUpdateWithoutUserInput>
  }

  export type CampaignPaymentUpdateManyWithWhereWithoutUserInput = {
    where: CampaignPaymentScalarWhereInput
    data: XOR<CampaignPaymentUpdateManyMutationInput, CampaignPaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type CampaignPaymentScalarWhereInput = {
    AND?: CampaignPaymentScalarWhereInput | CampaignPaymentScalarWhereInput[]
    OR?: CampaignPaymentScalarWhereInput[]
    NOT?: CampaignPaymentScalarWhereInput | CampaignPaymentScalarWhereInput[]
    id?: StringFilter<"CampaignPayment"> | string
    campaignId?: StringFilter<"CampaignPayment"> | string
    userId?: StringFilter<"CampaignPayment"> | string
    amount?: FloatFilter<"CampaignPayment"> | number
    amountInPaisa?: IntFilter<"CampaignPayment"> | number
    paymentMethod?: StringFilter<"CampaignPayment"> | string
    status?: StringFilter<"CampaignPayment"> | string
    transactionId?: StringNullableFilter<"CampaignPayment"> | string | null
    transactionCode?: StringNullableFilter<"CampaignPayment"> | string | null
    gatewayData?: JsonNullableFilter<"CampaignPayment">
    paidAt?: DateTimeNullableFilter<"CampaignPayment"> | Date | string | null
    createdAt?: DateTimeFilter<"CampaignPayment"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignPayment"> | Date | string
  }

  export type UserCreateWithoutCategoriesInput = {
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
    myContacts?: My_ContactCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
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
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type My_ContactCreateWithoutCategoryInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    file?: FilesCreateNestedOneWithoutMyContactInput
    user: UserCreateNestedOneWithoutMyContactsInput
  }

  export type My_ContactUncheckedCreateWithoutCategoryInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    userId: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type My_ContactCreateOrConnectWithoutCategoryInput = {
    where: My_ContactWhereUniqueInput
    create: XOR<My_ContactCreateWithoutCategoryInput, My_ContactUncheckedCreateWithoutCategoryInput>
  }

  export type My_ContactCreateManyCategoryInputEnvelope = {
    data: My_ContactCreateManyCategoryInput | My_ContactCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FilesCreateWithoutCategoryInput = {
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
    myContact?: My_ContactCreateNestedManyWithoutFileInput
    Invalid_My_Contact?: Invalid_My_ContactCreateNestedManyWithoutFileInput
  }

  export type FilesUncheckedCreateWithoutCategoryInput = {
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
    myContact?: My_ContactUncheckedCreateNestedManyWithoutFileInput
    Invalid_My_Contact?: Invalid_My_ContactUncheckedCreateNestedManyWithoutFileInput
  }

  export type FilesCreateOrConnectWithoutCategoryInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutCategoryInput, FilesUncheckedCreateWithoutCategoryInput>
  }

  export type FilesCreateManyCategoryInputEnvelope = {
    data: FilesCreateManyCategoryInput | FilesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutCategoryInput = {
    id?: string
    name: string
    subject?: string
    emailBody?: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    totalRecipients?: number | null
    totalDelivered?: number
    totalBounced?: number
    totalFailed?: number
    deliveryRate?: number
    totalCost?: number | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: CampaignPaymentCreateNestedOneWithoutCampaignInput
    user: UserCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutCategoryInput = {
    id?: string
    userId: string
    name: string
    subject?: string
    emailBody?: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    totalRecipients?: number | null
    totalDelivered?: number
    totalBounced?: number
    totalFailed?: number
    deliveryRate?: number
    totalCost?: number | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: CampaignPaymentUncheckedCreateNestedOneWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutCategoryInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCategoryInput, CampaignUncheckedCreateWithoutCategoryInput>
  }

  export type CampaignCreateManyCategoryInputEnvelope = {
    data: CampaignCreateManyCategoryInput | CampaignCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type Invalid_My_ContactCreateWithoutCategoryInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    file?: FilesCreateNestedOneWithoutInvalid_My_ContactInput
    user: UserCreateNestedOneWithoutInvalidMyContactsInput
  }

  export type Invalid_My_ContactUncheckedCreateWithoutCategoryInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    userId: string
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_My_ContactCreateOrConnectWithoutCategoryInput = {
    where: Invalid_My_ContactWhereUniqueInput
    create: XOR<Invalid_My_ContactCreateWithoutCategoryInput, Invalid_My_ContactUncheckedCreateWithoutCategoryInput>
  }

  export type Invalid_My_ContactCreateManyCategoryInputEnvelope = {
    data: Invalid_My_ContactCreateManyCategoryInput | Invalid_My_ContactCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
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
    myContacts?: My_ContactUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
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
    myContacts?: My_ContactUncheckedUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type My_ContactUpsertWithWhereUniqueWithoutCategoryInput = {
    where: My_ContactWhereUniqueInput
    update: XOR<My_ContactUpdateWithoutCategoryInput, My_ContactUncheckedUpdateWithoutCategoryInput>
    create: XOR<My_ContactCreateWithoutCategoryInput, My_ContactUncheckedCreateWithoutCategoryInput>
  }

  export type My_ContactUpdateWithWhereUniqueWithoutCategoryInput = {
    where: My_ContactWhereUniqueInput
    data: XOR<My_ContactUpdateWithoutCategoryInput, My_ContactUncheckedUpdateWithoutCategoryInput>
  }

  export type My_ContactUpdateManyWithWhereWithoutCategoryInput = {
    where: My_ContactScalarWhereInput
    data: XOR<My_ContactUpdateManyMutationInput, My_ContactUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FilesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FilesWhereUniqueInput
    update: XOR<FilesUpdateWithoutCategoryInput, FilesUncheckedUpdateWithoutCategoryInput>
    create: XOR<FilesCreateWithoutCategoryInput, FilesUncheckedCreateWithoutCategoryInput>
  }

  export type FilesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FilesWhereUniqueInput
    data: XOR<FilesUpdateWithoutCategoryInput, FilesUncheckedUpdateWithoutCategoryInput>
  }

  export type FilesUpdateManyWithWhereWithoutCategoryInput = {
    where: FilesScalarWhereInput
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CampaignUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutCategoryInput, CampaignUncheckedUpdateWithoutCategoryInput>
    create: XOR<CampaignCreateWithoutCategoryInput, CampaignUncheckedCreateWithoutCategoryInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutCategoryInput, CampaignUncheckedUpdateWithoutCategoryInput>
  }

  export type CampaignUpdateManyWithWhereWithoutCategoryInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutCategoryInput>
  }

  export type Invalid_My_ContactUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Invalid_My_ContactWhereUniqueInput
    update: XOR<Invalid_My_ContactUpdateWithoutCategoryInput, Invalid_My_ContactUncheckedUpdateWithoutCategoryInput>
    create: XOR<Invalid_My_ContactCreateWithoutCategoryInput, Invalid_My_ContactUncheckedCreateWithoutCategoryInput>
  }

  export type Invalid_My_ContactUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Invalid_My_ContactWhereUniqueInput
    data: XOR<Invalid_My_ContactUpdateWithoutCategoryInput, Invalid_My_ContactUncheckedUpdateWithoutCategoryInput>
  }

  export type Invalid_My_ContactUpdateManyWithWhereWithoutCategoryInput = {
    where: Invalid_My_ContactScalarWhereInput
    data: XOR<Invalid_My_ContactUpdateManyMutationInput, Invalid_My_ContactUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutFilesInput = {
    id?: string
    name: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    myContacts?: My_ContactCreateNestedManyWithoutCategoryInput
    campaigns?: CampaignCreateNestedManyWithoutCategoryInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutFilesInput = {
    id?: string
    name: string
    userId: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutCategoryInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCategoryInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutFilesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFilesInput, CategoryUncheckedCreateWithoutFilesInput>
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
    myContacts?: My_ContactCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutUserInput
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
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type My_ContactCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutMyContactsInput
    user: UserCreateNestedOneWithoutMyContactsInput
  }

  export type My_ContactUncheckedCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    categoryId?: string | null
    userId: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type My_ContactCreateOrConnectWithoutFileInput = {
    where: My_ContactWhereUniqueInput
    create: XOR<My_ContactCreateWithoutFileInput, My_ContactUncheckedCreateWithoutFileInput>
  }

  export type My_ContactCreateManyFileInputEnvelope = {
    data: My_ContactCreateManyFileInput | My_ContactCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type Invalid_My_ContactCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutInvalidMyContactsInput
    user: UserCreateNestedOneWithoutInvalidMyContactsInput
  }

  export type Invalid_My_ContactUncheckedCreateWithoutFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    categoryId?: string | null
    userId: string
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_My_ContactCreateOrConnectWithoutFileInput = {
    where: Invalid_My_ContactWhereUniqueInput
    create: XOR<Invalid_My_ContactCreateWithoutFileInput, Invalid_My_ContactUncheckedCreateWithoutFileInput>
  }

  export type Invalid_My_ContactCreateManyFileInputEnvelope = {
    data: Invalid_My_ContactCreateManyFileInput | Invalid_My_ContactCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutFilesInput = {
    update: XOR<CategoryUpdateWithoutFilesInput, CategoryUncheckedUpdateWithoutFilesInput>
    create: XOR<CategoryCreateWithoutFilesInput, CategoryUncheckedCreateWithoutFilesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutFilesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutFilesInput, CategoryUncheckedUpdateWithoutFilesInput>
  }

  export type CategoryUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    myContacts?: My_ContactUpdateManyWithoutCategoryNestedInput
    campaigns?: CampaignUpdateManyWithoutCategoryNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    myContacts?: My_ContactUncheckedUpdateManyWithoutCategoryNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCategoryNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutCategoryNestedInput
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
    myContacts?: My_ContactUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutUserNestedInput
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
    myContacts?: My_ContactUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type My_ContactUpsertWithWhereUniqueWithoutFileInput = {
    where: My_ContactWhereUniqueInput
    update: XOR<My_ContactUpdateWithoutFileInput, My_ContactUncheckedUpdateWithoutFileInput>
    create: XOR<My_ContactCreateWithoutFileInput, My_ContactUncheckedCreateWithoutFileInput>
  }

  export type My_ContactUpdateWithWhereUniqueWithoutFileInput = {
    where: My_ContactWhereUniqueInput
    data: XOR<My_ContactUpdateWithoutFileInput, My_ContactUncheckedUpdateWithoutFileInput>
  }

  export type My_ContactUpdateManyWithWhereWithoutFileInput = {
    where: My_ContactScalarWhereInput
    data: XOR<My_ContactUpdateManyMutationInput, My_ContactUncheckedUpdateManyWithoutFileInput>
  }

  export type Invalid_My_ContactUpsertWithWhereUniqueWithoutFileInput = {
    where: Invalid_My_ContactWhereUniqueInput
    update: XOR<Invalid_My_ContactUpdateWithoutFileInput, Invalid_My_ContactUncheckedUpdateWithoutFileInput>
    create: XOR<Invalid_My_ContactCreateWithoutFileInput, Invalid_My_ContactUncheckedCreateWithoutFileInput>
  }

  export type Invalid_My_ContactUpdateWithWhereUniqueWithoutFileInput = {
    where: Invalid_My_ContactWhereUniqueInput
    data: XOR<Invalid_My_ContactUpdateWithoutFileInput, Invalid_My_ContactUncheckedUpdateWithoutFileInput>
  }

  export type Invalid_My_ContactUpdateManyWithWhereWithoutFileInput = {
    where: Invalid_My_ContactScalarWhereInput
    data: XOR<Invalid_My_ContactUpdateManyMutationInput, Invalid_My_ContactUncheckedUpdateManyWithoutFileInput>
  }

  export type CategoryCreateWithoutMyContactsInput = {
    id?: string
    name: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    files?: FilesCreateNestedManyWithoutCategoryInput
    campaigns?: CampaignCreateNestedManyWithoutCategoryInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutMyContactsInput = {
    id?: string
    name: string
    userId: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FilesUncheckedCreateNestedManyWithoutCategoryInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCategoryInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutMyContactsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMyContactsInput, CategoryUncheckedCreateWithoutMyContactsInput>
  }

  export type FilesCreateWithoutMyContactInput = {
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
    category: CategoryCreateNestedOneWithoutFilesInput
    user: UserCreateNestedOneWithoutFilesInput
    Invalid_My_Contact?: Invalid_My_ContactCreateNestedManyWithoutFileInput
  }

  export type FilesUncheckedCreateWithoutMyContactInput = {
    id?: string
    userId: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    CategoryId: string
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Invalid_My_Contact?: Invalid_My_ContactUncheckedCreateNestedManyWithoutFileInput
  }

  export type FilesCreateOrConnectWithoutMyContactInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutMyContactInput, FilesUncheckedCreateWithoutMyContactInput>
  }

  export type UserCreateWithoutMyContactsInput = {
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
    categories?: CategoryCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMyContactsInput = {
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
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMyContactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMyContactsInput, UserUncheckedCreateWithoutMyContactsInput>
  }

  export type CategoryUpsertWithoutMyContactsInput = {
    update: XOR<CategoryUpdateWithoutMyContactsInput, CategoryUncheckedUpdateWithoutMyContactsInput>
    create: XOR<CategoryCreateWithoutMyContactsInput, CategoryUncheckedCreateWithoutMyContactsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMyContactsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMyContactsInput, CategoryUncheckedUpdateWithoutMyContactsInput>
  }

  export type CategoryUpdateWithoutMyContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    files?: FilesUpdateManyWithoutCategoryNestedInput
    campaigns?: CampaignUpdateManyWithoutCategoryNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMyContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FilesUncheckedUpdateManyWithoutCategoryNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCategoryNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type FilesUpsertWithoutMyContactInput = {
    update: XOR<FilesUpdateWithoutMyContactInput, FilesUncheckedUpdateWithoutMyContactInput>
    create: XOR<FilesCreateWithoutMyContactInput, FilesUncheckedCreateWithoutMyContactInput>
    where?: FilesWhereInput
  }

  export type FilesUpdateToOneWithWhereWithoutMyContactInput = {
    where?: FilesWhereInput
    data: XOR<FilesUpdateWithoutMyContactInput, FilesUncheckedUpdateWithoutMyContactInput>
  }

  export type FilesUpdateWithoutMyContactInput = {
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
    category?: CategoryUpdateOneRequiredWithoutFilesNestedInput
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    Invalid_My_Contact?: Invalid_My_ContactUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateWithoutMyContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    CategoryId?: StringFieldUpdateOperationsInput | string
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invalid_My_Contact?: Invalid_My_ContactUncheckedUpdateManyWithoutFileNestedInput
  }

  export type UserUpsertWithoutMyContactsInput = {
    update: XOR<UserUpdateWithoutMyContactsInput, UserUncheckedUpdateWithoutMyContactsInput>
    create: XOR<UserCreateWithoutMyContactsInput, UserUncheckedCreateWithoutMyContactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMyContactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMyContactsInput, UserUncheckedUpdateWithoutMyContactsInput>
  }

  export type UserUpdateWithoutMyContactsInput = {
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
    categories?: CategoryUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMyContactsInput = {
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
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryCreateWithoutInvalidMyContactsInput = {
    id?: string
    name: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    myContacts?: My_ContactCreateNestedManyWithoutCategoryInput
    files?: FilesCreateNestedManyWithoutCategoryInput
    campaigns?: CampaignCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutInvalidMyContactsInput = {
    id?: string
    name: string
    userId: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutCategoryInput
    files?: FilesUncheckedCreateNestedManyWithoutCategoryInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutInvalidMyContactsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutInvalidMyContactsInput, CategoryUncheckedCreateWithoutInvalidMyContactsInput>
  }

  export type FilesCreateWithoutInvalid_My_ContactInput = {
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
    category: CategoryCreateNestedOneWithoutFilesInput
    user: UserCreateNestedOneWithoutFilesInput
    myContact?: My_ContactCreateNestedManyWithoutFileInput
  }

  export type FilesUncheckedCreateWithoutInvalid_My_ContactInput = {
    id?: string
    userId: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    CategoryId: string
    uploadStatus?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    myContact?: My_ContactUncheckedCreateNestedManyWithoutFileInput
  }

  export type FilesCreateOrConnectWithoutInvalid_My_ContactInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutInvalid_My_ContactInput, FilesUncheckedCreateWithoutInvalid_My_ContactInput>
  }

  export type UserCreateWithoutInvalidMyContactsInput = {
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
    myContacts?: My_ContactCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvalidMyContactsInput = {
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
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvalidMyContactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvalidMyContactsInput, UserUncheckedCreateWithoutInvalidMyContactsInput>
  }

  export type CategoryUpsertWithoutInvalidMyContactsInput = {
    update: XOR<CategoryUpdateWithoutInvalidMyContactsInput, CategoryUncheckedUpdateWithoutInvalidMyContactsInput>
    create: XOR<CategoryCreateWithoutInvalidMyContactsInput, CategoryUncheckedCreateWithoutInvalidMyContactsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutInvalidMyContactsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutInvalidMyContactsInput, CategoryUncheckedUpdateWithoutInvalidMyContactsInput>
  }

  export type CategoryUpdateWithoutInvalidMyContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    myContacts?: My_ContactUpdateManyWithoutCategoryNestedInput
    files?: FilesUpdateManyWithoutCategoryNestedInput
    campaigns?: CampaignUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutInvalidMyContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    myContacts?: My_ContactUncheckedUpdateManyWithoutCategoryNestedInput
    files?: FilesUncheckedUpdateManyWithoutCategoryNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type FilesUpsertWithoutInvalid_My_ContactInput = {
    update: XOR<FilesUpdateWithoutInvalid_My_ContactInput, FilesUncheckedUpdateWithoutInvalid_My_ContactInput>
    create: XOR<FilesCreateWithoutInvalid_My_ContactInput, FilesUncheckedCreateWithoutInvalid_My_ContactInput>
    where?: FilesWhereInput
  }

  export type FilesUpdateToOneWithWhereWithoutInvalid_My_ContactInput = {
    where?: FilesWhereInput
    data: XOR<FilesUpdateWithoutInvalid_My_ContactInput, FilesUncheckedUpdateWithoutInvalid_My_ContactInput>
  }

  export type FilesUpdateWithoutInvalid_My_ContactInput = {
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
    category?: CategoryUpdateOneRequiredWithoutFilesNestedInput
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    myContact?: My_ContactUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateWithoutInvalid_My_ContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    CategoryId?: StringFieldUpdateOperationsInput | string
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    myContact?: My_ContactUncheckedUpdateManyWithoutFileNestedInput
  }

  export type UserUpsertWithoutInvalidMyContactsInput = {
    update: XOR<UserUpdateWithoutInvalidMyContactsInput, UserUncheckedUpdateWithoutInvalidMyContactsInput>
    create: XOR<UserCreateWithoutInvalidMyContactsInput, UserUncheckedCreateWithoutInvalidMyContactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvalidMyContactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvalidMyContactsInput, UserUncheckedUpdateWithoutInvalidMyContactsInput>
  }

  export type UserUpdateWithoutInvalidMyContactsInput = {
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
    myContacts?: My_ContactUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvalidMyContactsInput = {
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
    myContacts?: My_ContactUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutUserNestedInput
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
    myContacts?: My_ContactCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutUserInput
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
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutUserInput
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
    myContacts?: My_ContactUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutUserNestedInput
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
    myContacts?: My_ContactUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutUserNestedInput
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
    email?: string | null
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
    email?: string | null
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

  export type CampaignPaymentCreateWithoutCampaignInput = {
    id?: string
    amount: number
    amountInPaisa: number
    paymentMethod: string
    status?: string
    transactionId?: string | null
    transactionCode?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCampaignPaymentsInput
  }

  export type CampaignPaymentUncheckedCreateWithoutCampaignInput = {
    id?: string
    userId: string
    amount: number
    amountInPaisa: number
    paymentMethod: string
    status?: string
    transactionId?: string | null
    transactionCode?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignPaymentCreateOrConnectWithoutCampaignInput = {
    where: CampaignPaymentWhereUniqueInput
    create: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
  }

  export type CategoryCreateWithoutCampaignsInput = {
    id?: string
    name: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    myContacts?: My_ContactCreateNestedManyWithoutCategoryInput
    files?: FilesCreateNestedManyWithoutCategoryInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    userId: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutCategoryInput
    files?: FilesUncheckedCreateNestedManyWithoutCategoryInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCampaignsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCampaignsInput, CategoryUncheckedCreateWithoutCampaignsInput>
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
    myContacts?: My_ContactCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutUserInput
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
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type CampaignPaymentUpsertWithoutCampaignInput = {
    update: XOR<CampaignPaymentUpdateWithoutCampaignInput, CampaignPaymentUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
    where?: CampaignPaymentWhereInput
  }

  export type CampaignPaymentUpdateToOneWithWhereWithoutCampaignInput = {
    where?: CampaignPaymentWhereInput
    data: XOR<CampaignPaymentUpdateWithoutCampaignInput, CampaignPaymentUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignPaymentUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    amountInPaisa?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionCode?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampaignPaymentsNestedInput
  }

  export type CampaignPaymentUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    amountInPaisa?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionCode?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutCampaignsInput = {
    update: XOR<CategoryUpdateWithoutCampaignsInput, CategoryUncheckedUpdateWithoutCampaignsInput>
    create: XOR<CategoryCreateWithoutCampaignsInput, CategoryUncheckedCreateWithoutCampaignsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCampaignsInput, CategoryUncheckedUpdateWithoutCampaignsInput>
  }

  export type CategoryUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    myContacts?: My_ContactUpdateManyWithoutCategoryNestedInput
    files?: FilesUpdateManyWithoutCategoryNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    myContacts?: My_ContactUncheckedUpdateManyWithoutCategoryNestedInput
    files?: FilesUncheckedUpdateManyWithoutCategoryNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutCategoryNestedInput
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
    myContacts?: My_ContactUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutUserNestedInput
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
    myContacts?: My_ContactUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCampaignPaymentsInput = {
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
    myContacts?: My_ContactCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCampaignPaymentsInput = {
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
    myContacts?: My_ContactUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    invalidMyContacts?: Invalid_My_ContactUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCampaignPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignPaymentsInput, UserUncheckedCreateWithoutCampaignPaymentsInput>
  }

  export type CampaignCreateWithoutPaymentInput = {
    id?: string
    name: string
    subject?: string
    emailBody?: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    totalRecipients?: number | null
    totalDelivered?: number
    totalBounced?: number
    totalFailed?: number
    deliveryRate?: number
    totalCost?: number | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutCampaignsInput
    user: UserCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    categoryId: string
    name: string
    subject?: string
    emailBody?: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    totalRecipients?: number | null
    totalDelivered?: number
    totalBounced?: number
    totalFailed?: number
    deliveryRate?: number
    totalCost?: number | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutPaymentInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutPaymentInput, CampaignUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutCampaignPaymentsInput = {
    update: XOR<UserUpdateWithoutCampaignPaymentsInput, UserUncheckedUpdateWithoutCampaignPaymentsInput>
    create: XOR<UserCreateWithoutCampaignPaymentsInput, UserUncheckedCreateWithoutCampaignPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignPaymentsInput, UserUncheckedUpdateWithoutCampaignPaymentsInput>
  }

  export type UserUpdateWithoutCampaignPaymentsInput = {
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
    myContacts?: My_ContactUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignPaymentsInput = {
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
    myContacts?: My_ContactUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignUpsertWithoutPaymentInput = {
    update: XOR<CampaignUpdateWithoutPaymentInput, CampaignUncheckedUpdateWithoutPaymentInput>
    create: XOR<CampaignCreateWithoutPaymentInput, CampaignUncheckedCreateWithoutPaymentInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutPaymentInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutPaymentInput, CampaignUncheckedUpdateWithoutPaymentInput>
  }

  export type CampaignUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutCampaignsNestedInput
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesCreateManyUserInput = {
    id?: string
    name: string
    path: string
    numberOfReceivers?: number | null
    invalidRowsPath?: string | null
    sizeInBytes: bigint | number
    type: $Enums.FileType
    CategoryId: string
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
    email?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverMessageId?: string | null
  }

  export type CampaignCreateManyUserInput = {
    id?: string
    categoryId: string
    name: string
    subject?: string
    emailBody?: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    totalRecipients?: number | null
    totalDelivered?: number
    totalBounced?: number
    totalFailed?: number
    deliveryRate?: number
    totalCost?: number | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type My_ContactCreateManyUserInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    categoryId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_My_ContactCreateManyUserInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    categoryId?: string | null
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignPaymentCreateManyUserInput = {
    id?: string
    campaignId: string
    amount: number
    amountInPaisa: number
    paymentMethod: string
    status?: string
    transactionId?: string | null
    transactionCode?: string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
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
    category?: CategoryUpdateOneRequiredWithoutFilesNestedInput
    myContact?: My_ContactUpdateManyWithoutFileNestedInput
    Invalid_My_Contact?: Invalid_My_ContactUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    CategoryId?: StringFieldUpdateOperationsInput | string
    uploadStatus?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    myContact?: My_ContactUncheckedUpdateManyWithoutFileNestedInput
    Invalid_My_Contact?: Invalid_My_ContactUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    numberOfReceivers?: NullableIntFieldUpdateOperationsInput | number | null
    invalidRowsPath?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    CategoryId?: StringFieldUpdateOperationsInput | string
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: CampaignPaymentUpdateOneWithoutCampaignNestedInput
    category?: CategoryUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: CampaignPaymentUncheckedUpdateOneWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_ContactUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutMyContactsNestedInput
    file?: FilesUpdateOneWithoutMyContactNestedInput
  }

  export type My_ContactUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_ContactUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    myContacts?: My_ContactUpdateManyWithoutCategoryNestedInput
    files?: FilesUpdateManyWithoutCategoryNestedInput
    campaigns?: CampaignUpdateManyWithoutCategoryNestedInput
    invalidMyContacts?: Invalid_My_ContactUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    myContacts?: My_ContactUncheckedUpdateManyWithoutCategoryNestedInput
    files?: FilesUncheckedUpdateManyWithoutCategoryNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCategoryNestedInput
    invalidMyContacts?: Invalid_My_ContactUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_My_ContactUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutInvalidMyContactsNestedInput
    file?: FilesUpdateOneWithoutInvalid_My_ContactNestedInput
  }

  export type Invalid_My_ContactUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_My_ContactUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignPaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    amountInPaisa?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionCode?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type CampaignPaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    amountInPaisa?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionCode?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignPaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    amountInPaisa?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionCode?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayData?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_ContactCreateManyCategoryInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    userId: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FilesCreateManyCategoryInput = {
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

  export type CampaignCreateManyCategoryInput = {
    id?: string
    userId: string
    name: string
    subject?: string
    emailBody?: string
    status?: $Enums.CampaignStatus
    deliveryStatus?: $Enums.DeliveryStatus
    province?: string | null
    district?: string | null
    municipality?: string | null
    totalRecipients?: number | null
    totalDelivered?: number
    totalBounced?: number
    totalFailed?: number
    deliveryRate?: number
    totalCost?: number | null
    paid?: boolean
    submitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_My_ContactCreateManyCategoryInput = {
    id?: string
    fileId?: string | null
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    userId: string
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type My_ContactUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: FilesUpdateOneWithoutMyContactNestedInput
    user?: UserUpdateOneRequiredWithoutMyContactsNestedInput
  }

  export type My_ContactUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_ContactUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesUpdateWithoutCategoryInput = {
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
    myContact?: My_ContactUpdateManyWithoutFileNestedInput
    Invalid_My_Contact?: Invalid_My_ContactUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateWithoutCategoryInput = {
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
    myContact?: My_ContactUncheckedUpdateManyWithoutFileNestedInput
    Invalid_My_Contact?: Invalid_My_ContactUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FilesUncheckedUpdateManyWithoutCategoryInput = {
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

  export type CampaignUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: CampaignPaymentUpdateOneWithoutCampaignNestedInput
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: CampaignPaymentUncheckedUpdateOneWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBody?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    totalRecipients?: NullableIntFieldUpdateOperationsInput | number | null
    totalDelivered?: IntFieldUpdateOperationsInput | number
    totalBounced?: IntFieldUpdateOperationsInput | number
    totalFailed?: IntFieldUpdateOperationsInput | number
    deliveryRate?: FloatFieldUpdateOperationsInput | number
    totalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    submitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_My_ContactUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: FilesUpdateOneWithoutInvalid_My_ContactNestedInput
    user?: UserUpdateOneRequiredWithoutInvalidMyContactsNestedInput
  }

  export type Invalid_My_ContactUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_My_ContactUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_ContactCreateManyFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    email?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber: string
    categoryId?: string | null
    userId: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Invalid_My_ContactCreateManyFileInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    province?: string | null
    district?: string | null
    municipality?: string | null
    phoneNumber?: string | null
    email?: string | null
    categoryId?: string | null
    userId: string
    errorReason?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type My_ContactUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutMyContactsNestedInput
    user?: UserUpdateOneRequiredWithoutMyContactsNestedInput
  }

  export type My_ContactUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_ContactUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_My_ContactUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutInvalidMyContactsNestedInput
    user?: UserUpdateOneRequiredWithoutInvalidMyContactsNestedInput
  }

  export type Invalid_My_ContactUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invalid_My_ContactUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    errorReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    email?: string | null
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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