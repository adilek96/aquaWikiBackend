
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
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model SubCategories
 * 
 */
export type SubCategories = $Result.DefaultSelection<Prisma.$SubCategoriesPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostImages
 * 
 */
export type PostImages = $Result.DefaultSelection<Prisma.$PostImagesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCategories`: Exposes CRUD operations for the **SubCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategories.findMany()
    * ```
    */
  get subCategories(): Prisma.SubCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postImages`: Exposes CRUD operations for the **PostImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostImages
    * const postImages = await prisma.postImages.findMany()
    * ```
    */
  get postImages(): Prisma.PostImagesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Categories: 'Categories',
    SubCategories: 'SubCategories',
    Post: 'Post',
    PostImages: 'PostImages'
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
      modelProps: "categories" | "subCategories" | "post" | "postImages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      SubCategories: {
        payload: Prisma.$SubCategoriesPayload<ExtArgs>
        fields: Prisma.SubCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          findFirst: {
            args: Prisma.SubCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          findMany: {
            args: Prisma.SubCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>[]
          }
          create: {
            args: Prisma.SubCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          createMany: {
            args: Prisma.SubCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubCategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>[]
          }
          delete: {
            args: Prisma.SubCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          update: {
            args: Prisma.SubCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubCategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>[]
          }
          upsert: {
            args: Prisma.SubCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          aggregate: {
            args: Prisma.SubCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategories>
          }
          groupBy: {
            args: Prisma.SubCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoriesCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostImages: {
        payload: Prisma.$PostImagesPayload<ExtArgs>
        fields: Prisma.PostImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          findFirst: {
            args: Prisma.PostImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          findMany: {
            args: Prisma.PostImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>[]
          }
          create: {
            args: Prisma.PostImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          createMany: {
            args: Prisma.PostImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>[]
          }
          delete: {
            args: Prisma.PostImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          update: {
            args: Prisma.PostImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          deleteMany: {
            args: Prisma.PostImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>[]
          }
          upsert: {
            args: Prisma.PostImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          aggregate: {
            args: Prisma.PostImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostImages>
          }
          groupBy: {
            args: Prisma.PostImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostImagesCountArgs<ExtArgs>
            result: $Utils.Optional<PostImagesCountAggregateOutputType> | number
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
    categories?: CategoriesOmit
    subCategories?: SubCategoriesOmit
    post?: PostOmit
    postImages?: PostImagesOmit
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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    subCategories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | CategoriesCountOutputTypeCountSubCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoriesWhereInput
  }


  /**
   * Count Type SubCategoriesCountOutputType
   */

  export type SubCategoriesCountOutputType = {
    post: number
  }

  export type SubCategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | SubCategoriesCountOutputTypeCountPostArgs
  }

  // Custom InputTypes
  /**
   * SubCategoriesCountOutputType without action
   */
  export type SubCategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoriesCountOutputType
     */
    select?: SubCategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCategoriesCountOutputType without action
   */
  export type SubCategoriesCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    postImages: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postImages?: boolean | PostCountOutputTypeCountPostImagesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostImagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    titleAz: string | null
    titleRu: string | null
    titleEn: string | null
    descriptionAz: string | null
    descriptionRu: string | null
    descriptionEn: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    titleAz: string | null
    titleRu: string | null
    titleEn: string | null
    descriptionAz: string | null
    descriptionRu: string | null
    descriptionEn: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    titleAz: number
    titleRu: number
    titleEn: number
    descriptionAz: number
    descriptionRu: number
    descriptionEn: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    titleAz?: true
    titleRu?: true
    titleEn?: true
    descriptionAz?: true
    descriptionRu?: true
    descriptionEn?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    titleAz?: true
    titleRu?: true
    titleEn?: true
    descriptionAz?: true
    descriptionRu?: true
    descriptionEn?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    titleAz?: true
    titleRu?: true
    titleEn?: true
    descriptionAz?: true
    descriptionRu?: true
    descriptionEn?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
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
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    subCategories?: boolean | Categories$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titleAz" | "titleRu" | "titleEn" | "descriptionAz" | "descriptionRu" | "descriptionEn", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | Categories$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      subCategories: Prisma.$SubCategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titleAz: string
      titleRu: string
      titleEn: string
      descriptionAz: string
      descriptionRu: string
      descriptionEn: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subCategories<T extends Categories$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Categories$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'String'>
    readonly titleAz: FieldRef<"Categories", 'String'>
    readonly titleRu: FieldRef<"Categories", 'String'>
    readonly titleEn: FieldRef<"Categories", 'String'>
    readonly descriptionAz: FieldRef<"Categories", 'String'>
    readonly descriptionRu: FieldRef<"Categories", 'String'>
    readonly descriptionEn: FieldRef<"Categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
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
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
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
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
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
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.subCategories
   */
  export type Categories$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    where?: SubCategoriesWhereInput
    orderBy?: SubCategoriesOrderByWithRelationInput | SubCategoriesOrderByWithRelationInput[]
    cursor?: SubCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model SubCategories
   */

  export type AggregateSubCategories = {
    _count: SubCategoriesCountAggregateOutputType | null
    _min: SubCategoriesMinAggregateOutputType | null
    _max: SubCategoriesMaxAggregateOutputType | null
  }

  export type SubCategoriesMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    titleAz: string | null
    titleRu: string | null
    titleEn: string | null
    descriptionAz: string | null
    descriptionRu: string | null
    descriptionEn: string | null
  }

  export type SubCategoriesMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    titleAz: string | null
    titleRu: string | null
    titleEn: string | null
    descriptionAz: string | null
    descriptionRu: string | null
    descriptionEn: string | null
  }

  export type SubCategoriesCountAggregateOutputType = {
    id: number
    categoryId: number
    titleAz: number
    titleRu: number
    titleEn: number
    descriptionAz: number
    descriptionRu: number
    descriptionEn: number
    _all: number
  }


  export type SubCategoriesMinAggregateInputType = {
    id?: true
    categoryId?: true
    titleAz?: true
    titleRu?: true
    titleEn?: true
    descriptionAz?: true
    descriptionRu?: true
    descriptionEn?: true
  }

  export type SubCategoriesMaxAggregateInputType = {
    id?: true
    categoryId?: true
    titleAz?: true
    titleRu?: true
    titleEn?: true
    descriptionAz?: true
    descriptionRu?: true
    descriptionEn?: true
  }

  export type SubCategoriesCountAggregateInputType = {
    id?: true
    categoryId?: true
    titleAz?: true
    titleRu?: true
    titleEn?: true
    descriptionAz?: true
    descriptionRu?: true
    descriptionEn?: true
    _all?: true
  }

  export type SubCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to aggregate.
     */
    where?: SubCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoriesOrderByWithRelationInput | SubCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoriesMaxAggregateInputType
  }

  export type GetSubCategoriesAggregateType<T extends SubCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategories[P]>
      : GetScalarType<T[P], AggregateSubCategories[P]>
  }




  export type SubCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoriesWhereInput
    orderBy?: SubCategoriesOrderByWithAggregationInput | SubCategoriesOrderByWithAggregationInput[]
    by: SubCategoriesScalarFieldEnum[] | SubCategoriesScalarFieldEnum
    having?: SubCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoriesCountAggregateInputType | true
    _min?: SubCategoriesMinAggregateInputType
    _max?: SubCategoriesMaxAggregateInputType
  }

  export type SubCategoriesGroupByOutputType = {
    id: string
    categoryId: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    _count: SubCategoriesCountAggregateOutputType | null
    _min: SubCategoriesMinAggregateOutputType | null
    _max: SubCategoriesMaxAggregateOutputType | null
  }

  type GetSubCategoriesGroupByPayload<T extends SubCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type SubCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    post?: boolean | SubCategories$postArgs<ExtArgs>
    _count?: boolean | SubCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategories"]>

  export type SubCategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategories"]>

  export type SubCategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategories"]>

  export type SubCategoriesSelectScalar = {
    id?: boolean
    categoryId?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
  }

  export type SubCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "titleAz" | "titleRu" | "titleEn" | "descriptionAz" | "descriptionRu" | "descriptionEn", ExtArgs["result"]["subCategories"]>
  export type SubCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    post?: boolean | SubCategories$postArgs<ExtArgs>
    _count?: boolean | SubCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubCategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type SubCategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $SubCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategories"
    objects: {
      category: Prisma.$CategoriesPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      titleAz: string
      titleRu: string
      titleEn: string
      descriptionAz: string
      descriptionRu: string
      descriptionEn: string
    }, ExtArgs["result"]["subCategories"]>
    composites: {}
  }

  type SubCategoriesGetPayload<S extends boolean | null | undefined | SubCategoriesDefaultArgs> = $Result.GetResult<Prisma.$SubCategoriesPayload, S>

  type SubCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoriesCountAggregateInputType | true
    }

  export interface SubCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategories'], meta: { name: 'SubCategories' } }
    /**
     * Find zero or one SubCategories that matches the filter.
     * @param {SubCategoriesFindUniqueArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoriesFindUniqueArgs>(args: SelectSubset<T, SubCategoriesFindUniqueArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCategoriesFindUniqueOrThrowArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesFindFirstArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoriesFindFirstArgs>(args?: SelectSubset<T, SubCategoriesFindFirstArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesFindFirstOrThrowArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategories.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoriesWithIdOnly = await prisma.subCategories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubCategoriesFindManyArgs>(args?: SelectSubset<T, SubCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCategories.
     * @param {SubCategoriesCreateArgs} args - Arguments to create a SubCategories.
     * @example
     * // Create one SubCategories
     * const SubCategories = await prisma.subCategories.create({
     *   data: {
     *     // ... data to create a SubCategories
     *   }
     * })
     * 
     */
    create<T extends SubCategoriesCreateArgs>(args: SelectSubset<T, SubCategoriesCreateArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCategories.
     * @param {SubCategoriesCreateManyArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategories = await prisma.subCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoriesCreateManyArgs>(args?: SelectSubset<T, SubCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubCategories and returns the data saved in the database.
     * @param {SubCategoriesCreateManyAndReturnArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategories = await prisma.subCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubCategories and only return the `id`
     * const subCategoriesWithIdOnly = await prisma.subCategories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubCategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, SubCategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubCategories.
     * @param {SubCategoriesDeleteArgs} args - Arguments to delete one SubCategories.
     * @example
     * // Delete one SubCategories
     * const SubCategories = await prisma.subCategories.delete({
     *   where: {
     *     // ... filter to delete one SubCategories
     *   }
     * })
     * 
     */
    delete<T extends SubCategoriesDeleteArgs>(args: SelectSubset<T, SubCategoriesDeleteArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCategories.
     * @param {SubCategoriesUpdateArgs} args - Arguments to update one SubCategories.
     * @example
     * // Update one SubCategories
     * const subCategories = await prisma.subCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoriesUpdateArgs>(args: SelectSubset<T, SubCategoriesUpdateArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoriesDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoriesDeleteManyArgs>(args?: SelectSubset<T, SubCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategories = await prisma.subCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoriesUpdateManyArgs>(args: SelectSubset<T, SubCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories and returns the data updated in the database.
     * @param {SubCategoriesUpdateManyAndReturnArgs} args - Arguments to update many SubCategories.
     * @example
     * // Update many SubCategories
     * const subCategories = await prisma.subCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubCategories and only return the `id`
     * const subCategoriesWithIdOnly = await prisma.subCategories.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubCategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, SubCategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubCategories.
     * @param {SubCategoriesUpsertArgs} args - Arguments to update or create a SubCategories.
     * @example
     * // Update or create a SubCategories
     * const subCategories = await prisma.subCategories.upsert({
     *   create: {
     *     // ... data to create a SubCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategories we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoriesUpsertArgs>(args: SelectSubset<T, SubCategoriesUpsertArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategories.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoriesCountArgs>(
      args?: Subset<T, SubCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubCategoriesAggregateArgs>(args: Subset<T, SubCategoriesAggregateArgs>): Prisma.PrismaPromise<GetSubCategoriesAggregateType<T>>

    /**
     * Group by SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesGroupByArgs} args - Group by arguments.
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
      T extends SubCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategories model
   */
  readonly fields: SubCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends SubCategories$postArgs<ExtArgs> = {}>(args?: Subset<T, SubCategories$postArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubCategories model
   */
  interface SubCategoriesFieldRefs {
    readonly id: FieldRef<"SubCategories", 'String'>
    readonly categoryId: FieldRef<"SubCategories", 'String'>
    readonly titleAz: FieldRef<"SubCategories", 'String'>
    readonly titleRu: FieldRef<"SubCategories", 'String'>
    readonly titleEn: FieldRef<"SubCategories", 'String'>
    readonly descriptionAz: FieldRef<"SubCategories", 'String'>
    readonly descriptionRu: FieldRef<"SubCategories", 'String'>
    readonly descriptionEn: FieldRef<"SubCategories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubCategories findUnique
   */
  export type SubCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where: SubCategoriesWhereUniqueInput
  }

  /**
   * SubCategories findUniqueOrThrow
   */
  export type SubCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where: SubCategoriesWhereUniqueInput
  }

  /**
   * SubCategories findFirst
   */
  export type SubCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoriesOrderByWithRelationInput | SubCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * SubCategories findFirstOrThrow
   */
  export type SubCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoriesOrderByWithRelationInput | SubCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * SubCategories findMany
   */
  export type SubCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoriesOrderByWithRelationInput | SubCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * SubCategories create
   */
  export type SubCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategories.
     */
    data: XOR<SubCategoriesCreateInput, SubCategoriesUncheckedCreateInput>
  }

  /**
   * SubCategories createMany
   */
  export type SubCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoriesCreateManyInput | SubCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubCategories createManyAndReturn
   */
  export type SubCategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoriesCreateManyInput | SubCategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategories update
   */
  export type SubCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategories.
     */
    data: XOR<SubCategoriesUpdateInput, SubCategoriesUncheckedUpdateInput>
    /**
     * Choose, which SubCategories to update.
     */
    where: SubCategoriesWhereUniqueInput
  }

  /**
   * SubCategories updateMany
   */
  export type SubCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoriesUpdateManyMutationInput, SubCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoriesWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
  }

  /**
   * SubCategories updateManyAndReturn
   */
  export type SubCategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoriesUpdateManyMutationInput, SubCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoriesWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategories upsert
   */
  export type SubCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategories to update in case it exists.
     */
    where: SubCategoriesWhereUniqueInput
    /**
     * In case the SubCategories found by the `where` argument doesn't exist, create a new SubCategories with this data.
     */
    create: XOR<SubCategoriesCreateInput, SubCategoriesUncheckedCreateInput>
    /**
     * In case the SubCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoriesUpdateInput, SubCategoriesUncheckedUpdateInput>
  }

  /**
   * SubCategories delete
   */
  export type SubCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter which SubCategories to delete.
     */
    where: SubCategoriesWhereUniqueInput
  }

  /**
   * SubCategories deleteMany
   */
  export type SubCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoriesWhereInput
    /**
     * Limit how many SubCategories to delete.
     */
    limit?: number
  }

  /**
   * SubCategories.post
   */
  export type SubCategories$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * SubCategories without action
   */
  export type SubCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    subCategoryId: string | null
    titleAz: string | null
    titleRu: string | null
    titleEn: string | null
    descriptionAz: string | null
    descriptionRu: string | null
    descriptionEn: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    subCategoryId: string | null
    titleAz: string | null
    titleRu: string | null
    titleEn: string | null
    descriptionAz: string | null
    descriptionRu: string | null
    descriptionEn: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    subCategoryId: number
    titleAz: number
    titleRu: number
    titleEn: number
    descriptionAz: number
    descriptionRu: number
    descriptionEn: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    subCategoryId?: true
    titleAz?: true
    titleRu?: true
    titleEn?: true
    descriptionAz?: true
    descriptionRu?: true
    descriptionEn?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    subCategoryId?: true
    titleAz?: true
    titleRu?: true
    titleEn?: true
    descriptionAz?: true
    descriptionRu?: true
    descriptionEn?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    subCategoryId?: true
    titleAz?: true
    titleRu?: true
    titleEn?: true
    descriptionAz?: true
    descriptionRu?: true
    descriptionEn?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    subCategoryId: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subCategoryId?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
    postImages?: boolean | Post$postImagesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subCategoryId?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subCategoryId?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    subCategoryId?: boolean
    titleAz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    descriptionAz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subCategoryId" | "titleAz" | "titleRu" | "titleEn" | "descriptionAz" | "descriptionRu" | "descriptionEn", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
    postImages?: boolean | Post$postImagesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      category: Prisma.$SubCategoriesPayload<ExtArgs>
      postImages: Prisma.$PostImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subCategoryId: string
      titleAz: string
      titleRu: string
      titleEn: string
      descriptionAz: string
      descriptionRu: string
      descriptionEn: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends SubCategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoriesDefaultArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    postImages<T extends Post$postImagesArgs<ExtArgs> = {}>(args?: Subset<T, Post$postImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly subCategoryId: FieldRef<"Post", 'String'>
    readonly titleAz: FieldRef<"Post", 'String'>
    readonly titleRu: FieldRef<"Post", 'String'>
    readonly titleEn: FieldRef<"Post", 'String'>
    readonly descriptionAz: FieldRef<"Post", 'String'>
    readonly descriptionRu: FieldRef<"Post", 'String'>
    readonly descriptionEn: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.postImages
   */
  export type Post$postImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    where?: PostImagesWhereInput
    orderBy?: PostImagesOrderByWithRelationInput | PostImagesOrderByWithRelationInput[]
    cursor?: PostImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostImagesScalarFieldEnum | PostImagesScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostImages
   */

  export type AggregatePostImages = {
    _count: PostImagesCountAggregateOutputType | null
    _min: PostImagesMinAggregateOutputType | null
    _max: PostImagesMaxAggregateOutputType | null
  }

  export type PostImagesMinAggregateOutputType = {
    id: string | null
    postId: string | null
    url: string | null
    uploadedAt: Date | null
  }

  export type PostImagesMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    url: string | null
    uploadedAt: Date | null
  }

  export type PostImagesCountAggregateOutputType = {
    id: number
    postId: number
    url: number
    uploadedAt: number
    _all: number
  }


  export type PostImagesMinAggregateInputType = {
    id?: true
    postId?: true
    url?: true
    uploadedAt?: true
  }

  export type PostImagesMaxAggregateInputType = {
    id?: true
    postId?: true
    url?: true
    uploadedAt?: true
  }

  export type PostImagesCountAggregateInputType = {
    id?: true
    postId?: true
    url?: true
    uploadedAt?: true
    _all?: true
  }

  export type PostImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostImages to aggregate.
     */
    where?: PostImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImagesOrderByWithRelationInput | PostImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostImages
    **/
    _count?: true | PostImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostImagesMaxAggregateInputType
  }

  export type GetPostImagesAggregateType<T extends PostImagesAggregateArgs> = {
        [P in keyof T & keyof AggregatePostImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostImages[P]>
      : GetScalarType<T[P], AggregatePostImages[P]>
  }




  export type PostImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostImagesWhereInput
    orderBy?: PostImagesOrderByWithAggregationInput | PostImagesOrderByWithAggregationInput[]
    by: PostImagesScalarFieldEnum[] | PostImagesScalarFieldEnum
    having?: PostImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostImagesCountAggregateInputType | true
    _min?: PostImagesMinAggregateInputType
    _max?: PostImagesMaxAggregateInputType
  }

  export type PostImagesGroupByOutputType = {
    id: string
    postId: string
    url: string
    uploadedAt: Date
    _count: PostImagesCountAggregateOutputType | null
    _min: PostImagesMinAggregateOutputType | null
    _max: PostImagesMaxAggregateOutputType | null
  }

  type GetPostImagesGroupByPayload<T extends PostImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostImagesGroupByOutputType[P]>
            : GetScalarType<T[P], PostImagesGroupByOutputType[P]>
        }
      >
    >


  export type PostImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    url?: boolean
    uploadedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImages"]>

  export type PostImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    url?: boolean
    uploadedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImages"]>

  export type PostImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    url?: boolean
    uploadedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImages"]>

  export type PostImagesSelectScalar = {
    id?: boolean
    postId?: boolean
    url?: boolean
    uploadedAt?: boolean
  }

  export type PostImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "url" | "uploadedAt", ExtArgs["result"]["postImages"]>
  export type PostImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostImages"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      url: string
      uploadedAt: Date
    }, ExtArgs["result"]["postImages"]>
    composites: {}
  }

  type PostImagesGetPayload<S extends boolean | null | undefined | PostImagesDefaultArgs> = $Result.GetResult<Prisma.$PostImagesPayload, S>

  type PostImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostImagesCountAggregateInputType | true
    }

  export interface PostImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostImages'], meta: { name: 'PostImages' } }
    /**
     * Find zero or one PostImages that matches the filter.
     * @param {PostImagesFindUniqueArgs} args - Arguments to find a PostImages
     * @example
     * // Get one PostImages
     * const postImages = await prisma.postImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostImagesFindUniqueArgs>(args: SelectSubset<T, PostImagesFindUniqueArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostImagesFindUniqueOrThrowArgs} args - Arguments to find a PostImages
     * @example
     * // Get one PostImages
     * const postImages = await prisma.postImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, PostImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesFindFirstArgs} args - Arguments to find a PostImages
     * @example
     * // Get one PostImages
     * const postImages = await prisma.postImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostImagesFindFirstArgs>(args?: SelectSubset<T, PostImagesFindFirstArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesFindFirstOrThrowArgs} args - Arguments to find a PostImages
     * @example
     * // Get one PostImages
     * const postImages = await prisma.postImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, PostImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostImages
     * const postImages = await prisma.postImages.findMany()
     * 
     * // Get first 10 PostImages
     * const postImages = await prisma.postImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postImagesWithIdOnly = await prisma.postImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostImagesFindManyArgs>(args?: SelectSubset<T, PostImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostImages.
     * @param {PostImagesCreateArgs} args - Arguments to create a PostImages.
     * @example
     * // Create one PostImages
     * const PostImages = await prisma.postImages.create({
     *   data: {
     *     // ... data to create a PostImages
     *   }
     * })
     * 
     */
    create<T extends PostImagesCreateArgs>(args: SelectSubset<T, PostImagesCreateArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostImages.
     * @param {PostImagesCreateManyArgs} args - Arguments to create many PostImages.
     * @example
     * // Create many PostImages
     * const postImages = await prisma.postImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostImagesCreateManyArgs>(args?: SelectSubset<T, PostImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostImages and returns the data saved in the database.
     * @param {PostImagesCreateManyAndReturnArgs} args - Arguments to create many PostImages.
     * @example
     * // Create many PostImages
     * const postImages = await prisma.postImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostImages and only return the `id`
     * const postImagesWithIdOnly = await prisma.postImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, PostImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostImages.
     * @param {PostImagesDeleteArgs} args - Arguments to delete one PostImages.
     * @example
     * // Delete one PostImages
     * const PostImages = await prisma.postImages.delete({
     *   where: {
     *     // ... filter to delete one PostImages
     *   }
     * })
     * 
     */
    delete<T extends PostImagesDeleteArgs>(args: SelectSubset<T, PostImagesDeleteArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostImages.
     * @param {PostImagesUpdateArgs} args - Arguments to update one PostImages.
     * @example
     * // Update one PostImages
     * const postImages = await prisma.postImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostImagesUpdateArgs>(args: SelectSubset<T, PostImagesUpdateArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostImages.
     * @param {PostImagesDeleteManyArgs} args - Arguments to filter PostImages to delete.
     * @example
     * // Delete a few PostImages
     * const { count } = await prisma.postImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostImagesDeleteManyArgs>(args?: SelectSubset<T, PostImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostImages
     * const postImages = await prisma.postImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostImagesUpdateManyArgs>(args: SelectSubset<T, PostImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostImages and returns the data updated in the database.
     * @param {PostImagesUpdateManyAndReturnArgs} args - Arguments to update many PostImages.
     * @example
     * // Update many PostImages
     * const postImages = await prisma.postImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostImages and only return the `id`
     * const postImagesWithIdOnly = await prisma.postImages.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, PostImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostImages.
     * @param {PostImagesUpsertArgs} args - Arguments to update or create a PostImages.
     * @example
     * // Update or create a PostImages
     * const postImages = await prisma.postImages.upsert({
     *   create: {
     *     // ... data to create a PostImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostImages we want to update
     *   }
     * })
     */
    upsert<T extends PostImagesUpsertArgs>(args: SelectSubset<T, PostImagesUpsertArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesCountArgs} args - Arguments to filter PostImages to count.
     * @example
     * // Count the number of PostImages
     * const count = await prisma.postImages.count({
     *   where: {
     *     // ... the filter for the PostImages we want to count
     *   }
     * })
    **/
    count<T extends PostImagesCountArgs>(
      args?: Subset<T, PostImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostImagesAggregateArgs>(args: Subset<T, PostImagesAggregateArgs>): Prisma.PrismaPromise<GetPostImagesAggregateType<T>>

    /**
     * Group by PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesGroupByArgs} args - Group by arguments.
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
      T extends PostImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostImagesGroupByArgs['orderBy'] }
        : { orderBy?: PostImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostImages model
   */
  readonly fields: PostImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostImages model
   */
  interface PostImagesFieldRefs {
    readonly id: FieldRef<"PostImages", 'String'>
    readonly postId: FieldRef<"PostImages", 'String'>
    readonly url: FieldRef<"PostImages", 'String'>
    readonly uploadedAt: FieldRef<"PostImages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostImages findUnique
   */
  export type PostImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where: PostImagesWhereUniqueInput
  }

  /**
   * PostImages findUniqueOrThrow
   */
  export type PostImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where: PostImagesWhereUniqueInput
  }

  /**
   * PostImages findFirst
   */
  export type PostImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where?: PostImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImagesOrderByWithRelationInput | PostImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostImages.
     */
    cursor?: PostImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostImages.
     */
    distinct?: PostImagesScalarFieldEnum | PostImagesScalarFieldEnum[]
  }

  /**
   * PostImages findFirstOrThrow
   */
  export type PostImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where?: PostImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImagesOrderByWithRelationInput | PostImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostImages.
     */
    cursor?: PostImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostImages.
     */
    distinct?: PostImagesScalarFieldEnum | PostImagesScalarFieldEnum[]
  }

  /**
   * PostImages findMany
   */
  export type PostImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where?: PostImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImagesOrderByWithRelationInput | PostImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostImages.
     */
    cursor?: PostImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    distinct?: PostImagesScalarFieldEnum | PostImagesScalarFieldEnum[]
  }

  /**
   * PostImages create
   */
  export type PostImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a PostImages.
     */
    data: XOR<PostImagesCreateInput, PostImagesUncheckedCreateInput>
  }

  /**
   * PostImages createMany
   */
  export type PostImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostImages.
     */
    data: PostImagesCreateManyInput | PostImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostImages createManyAndReturn
   */
  export type PostImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * The data used to create many PostImages.
     */
    data: PostImagesCreateManyInput | PostImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostImages update
   */
  export type PostImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a PostImages.
     */
    data: XOR<PostImagesUpdateInput, PostImagesUncheckedUpdateInput>
    /**
     * Choose, which PostImages to update.
     */
    where: PostImagesWhereUniqueInput
  }

  /**
   * PostImages updateMany
   */
  export type PostImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostImages.
     */
    data: XOR<PostImagesUpdateManyMutationInput, PostImagesUncheckedUpdateManyInput>
    /**
     * Filter which PostImages to update
     */
    where?: PostImagesWhereInput
    /**
     * Limit how many PostImages to update.
     */
    limit?: number
  }

  /**
   * PostImages updateManyAndReturn
   */
  export type PostImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * The data used to update PostImages.
     */
    data: XOR<PostImagesUpdateManyMutationInput, PostImagesUncheckedUpdateManyInput>
    /**
     * Filter which PostImages to update
     */
    where?: PostImagesWhereInput
    /**
     * Limit how many PostImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostImages upsert
   */
  export type PostImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the PostImages to update in case it exists.
     */
    where: PostImagesWhereUniqueInput
    /**
     * In case the PostImages found by the `where` argument doesn't exist, create a new PostImages with this data.
     */
    create: XOR<PostImagesCreateInput, PostImagesUncheckedCreateInput>
    /**
     * In case the PostImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostImagesUpdateInput, PostImagesUncheckedUpdateInput>
  }

  /**
   * PostImages delete
   */
  export type PostImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter which PostImages to delete.
     */
    where: PostImagesWhereUniqueInput
  }

  /**
   * PostImages deleteMany
   */
  export type PostImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostImages to delete
     */
    where?: PostImagesWhereInput
    /**
     * Limit how many PostImages to delete.
     */
    limit?: number
  }

  /**
   * PostImages without action
   */
  export type PostImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
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


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    titleAz: 'titleAz',
    titleRu: 'titleRu',
    titleEn: 'titleEn',
    descriptionAz: 'descriptionAz',
    descriptionRu: 'descriptionRu',
    descriptionEn: 'descriptionEn'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const SubCategoriesScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    titleAz: 'titleAz',
    titleRu: 'titleRu',
    titleEn: 'titleEn',
    descriptionAz: 'descriptionAz',
    descriptionRu: 'descriptionRu',
    descriptionEn: 'descriptionEn'
  };

  export type SubCategoriesScalarFieldEnum = (typeof SubCategoriesScalarFieldEnum)[keyof typeof SubCategoriesScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    subCategoryId: 'subCategoryId',
    titleAz: 'titleAz',
    titleRu: 'titleRu',
    titleEn: 'titleEn',
    descriptionAz: 'descriptionAz',
    descriptionRu: 'descriptionRu',
    descriptionEn: 'descriptionEn'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostImagesScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    url: 'url',
    uploadedAt: 'uploadedAt'
  };

  export type PostImagesScalarFieldEnum = (typeof PostImagesScalarFieldEnum)[keyof typeof PostImagesScalarFieldEnum]


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
   * Deep Input Types
   */


  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: StringFilter<"Categories"> | string
    titleAz?: StringFilter<"Categories"> | string
    titleRu?: StringFilter<"Categories"> | string
    titleEn?: StringFilter<"Categories"> | string
    descriptionAz?: StringFilter<"Categories"> | string
    descriptionRu?: StringFilter<"Categories"> | string
    descriptionEn?: StringFilter<"Categories"> | string
    subCategories?: SubCategoriesListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    subCategories?: SubCategoriesOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    titleAz?: StringFilter<"Categories"> | string
    titleRu?: StringFilter<"Categories"> | string
    titleEn?: StringFilter<"Categories"> | string
    descriptionAz?: StringFilter<"Categories"> | string
    descriptionRu?: StringFilter<"Categories"> | string
    descriptionEn?: StringFilter<"Categories"> | string
    subCategories?: SubCategoriesListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categories"> | string
    titleAz?: StringWithAggregatesFilter<"Categories"> | string
    titleRu?: StringWithAggregatesFilter<"Categories"> | string
    titleEn?: StringWithAggregatesFilter<"Categories"> | string
    descriptionAz?: StringWithAggregatesFilter<"Categories"> | string
    descriptionRu?: StringWithAggregatesFilter<"Categories"> | string
    descriptionEn?: StringWithAggregatesFilter<"Categories"> | string
  }

  export type SubCategoriesWhereInput = {
    AND?: SubCategoriesWhereInput | SubCategoriesWhereInput[]
    OR?: SubCategoriesWhereInput[]
    NOT?: SubCategoriesWhereInput | SubCategoriesWhereInput[]
    id?: StringFilter<"SubCategories"> | string
    categoryId?: StringFilter<"SubCategories"> | string
    titleAz?: StringFilter<"SubCategories"> | string
    titleRu?: StringFilter<"SubCategories"> | string
    titleEn?: StringFilter<"SubCategories"> | string
    descriptionAz?: StringFilter<"SubCategories"> | string
    descriptionRu?: StringFilter<"SubCategories"> | string
    descriptionEn?: StringFilter<"SubCategories"> | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    post?: PostListRelationFilter
  }

  export type SubCategoriesOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    category?: CategoriesOrderByWithRelationInput
    post?: PostOrderByRelationAggregateInput
  }

  export type SubCategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubCategoriesWhereInput | SubCategoriesWhereInput[]
    OR?: SubCategoriesWhereInput[]
    NOT?: SubCategoriesWhereInput | SubCategoriesWhereInput[]
    categoryId?: StringFilter<"SubCategories"> | string
    titleAz?: StringFilter<"SubCategories"> | string
    titleRu?: StringFilter<"SubCategories"> | string
    titleEn?: StringFilter<"SubCategories"> | string
    descriptionAz?: StringFilter<"SubCategories"> | string
    descriptionRu?: StringFilter<"SubCategories"> | string
    descriptionEn?: StringFilter<"SubCategories"> | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    post?: PostListRelationFilter
  }, "id">

  export type SubCategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    _count?: SubCategoriesCountOrderByAggregateInput
    _max?: SubCategoriesMaxOrderByAggregateInput
    _min?: SubCategoriesMinOrderByAggregateInput
  }

  export type SubCategoriesScalarWhereWithAggregatesInput = {
    AND?: SubCategoriesScalarWhereWithAggregatesInput | SubCategoriesScalarWhereWithAggregatesInput[]
    OR?: SubCategoriesScalarWhereWithAggregatesInput[]
    NOT?: SubCategoriesScalarWhereWithAggregatesInput | SubCategoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubCategories"> | string
    categoryId?: StringWithAggregatesFilter<"SubCategories"> | string
    titleAz?: StringWithAggregatesFilter<"SubCategories"> | string
    titleRu?: StringWithAggregatesFilter<"SubCategories"> | string
    titleEn?: StringWithAggregatesFilter<"SubCategories"> | string
    descriptionAz?: StringWithAggregatesFilter<"SubCategories"> | string
    descriptionRu?: StringWithAggregatesFilter<"SubCategories"> | string
    descriptionEn?: StringWithAggregatesFilter<"SubCategories"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    subCategoryId?: StringFilter<"Post"> | string
    titleAz?: StringFilter<"Post"> | string
    titleRu?: StringFilter<"Post"> | string
    titleEn?: StringFilter<"Post"> | string
    descriptionAz?: StringFilter<"Post"> | string
    descriptionRu?: StringFilter<"Post"> | string
    descriptionEn?: StringFilter<"Post"> | string
    category?: XOR<SubCategoriesScalarRelationFilter, SubCategoriesWhereInput>
    postImages?: PostImagesListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    subCategoryId?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    category?: SubCategoriesOrderByWithRelationInput
    postImages?: PostImagesOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    subCategoryId?: StringFilter<"Post"> | string
    titleAz?: StringFilter<"Post"> | string
    titleRu?: StringFilter<"Post"> | string
    titleEn?: StringFilter<"Post"> | string
    descriptionAz?: StringFilter<"Post"> | string
    descriptionRu?: StringFilter<"Post"> | string
    descriptionEn?: StringFilter<"Post"> | string
    category?: XOR<SubCategoriesScalarRelationFilter, SubCategoriesWhereInput>
    postImages?: PostImagesListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    subCategoryId?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    subCategoryId?: StringWithAggregatesFilter<"Post"> | string
    titleAz?: StringWithAggregatesFilter<"Post"> | string
    titleRu?: StringWithAggregatesFilter<"Post"> | string
    titleEn?: StringWithAggregatesFilter<"Post"> | string
    descriptionAz?: StringWithAggregatesFilter<"Post"> | string
    descriptionRu?: StringWithAggregatesFilter<"Post"> | string
    descriptionEn?: StringWithAggregatesFilter<"Post"> | string
  }

  export type PostImagesWhereInput = {
    AND?: PostImagesWhereInput | PostImagesWhereInput[]
    OR?: PostImagesWhereInput[]
    NOT?: PostImagesWhereInput | PostImagesWhereInput[]
    id?: StringFilter<"PostImages"> | string
    postId?: StringFilter<"PostImages"> | string
    url?: StringFilter<"PostImages"> | string
    uploadedAt?: DateTimeFilter<"PostImages"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostImagesOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostImagesWhereInput | PostImagesWhereInput[]
    OR?: PostImagesWhereInput[]
    NOT?: PostImagesWhereInput | PostImagesWhereInput[]
    postId?: StringFilter<"PostImages"> | string
    url?: StringFilter<"PostImages"> | string
    uploadedAt?: DateTimeFilter<"PostImages"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type PostImagesOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    _count?: PostImagesCountOrderByAggregateInput
    _max?: PostImagesMaxOrderByAggregateInput
    _min?: PostImagesMinOrderByAggregateInput
  }

  export type PostImagesScalarWhereWithAggregatesInput = {
    AND?: PostImagesScalarWhereWithAggregatesInput | PostImagesScalarWhereWithAggregatesInput[]
    OR?: PostImagesScalarWhereWithAggregatesInput[]
    NOT?: PostImagesScalarWhereWithAggregatesInput | PostImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostImages"> | string
    postId?: StringWithAggregatesFilter<"PostImages"> | string
    url?: StringWithAggregatesFilter<"PostImages"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"PostImages"> | Date | string
  }

  export type CategoriesCreateInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    subCategories?: SubCategoriesCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    subCategories?: SubCategoriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    subCategories?: SubCategoriesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    subCategories?: SubCategoriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
  }

  export type CategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoriesCreateInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    category: CategoriesCreateNestedOneWithoutSubCategoriesInput
    post?: PostCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoriesUncheckedCreateInput = {
    id?: string
    categoryId: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    post?: PostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    category?: CategoriesUpdateOneRequiredWithoutSubCategoriesNestedInput
    post?: PostUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    post?: PostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoriesCreateManyInput = {
    id?: string
    categoryId: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
  }

  export type SubCategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    category: SubCategoriesCreateNestedOneWithoutPostInput
    postImages?: PostImagesCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    subCategoryId: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    postImages?: PostImagesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    category?: SubCategoriesUpdateOneRequiredWithoutPostNestedInput
    postImages?: PostImagesUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategoryId?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    postImages?: PostImagesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    subCategoryId: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategoryId?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type PostImagesCreateInput = {
    id?: string
    url: string
    uploadedAt?: Date | string
    post: PostCreateNestedOneWithoutPostImagesInput
  }

  export type PostImagesUncheckedCreateInput = {
    id?: string
    postId: string
    url: string
    uploadedAt?: Date | string
  }

  export type PostImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostImagesNestedInput
  }

  export type PostImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImagesCreateManyInput = {
    id?: string
    postId: string
    url: string
    uploadedAt?: Date | string
  }

  export type PostImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SubCategoriesListRelationFilter = {
    every?: SubCategoriesWhereInput
    some?: SubCategoriesWhereInput
    none?: SubCategoriesWhereInput
  }

  export type SubCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
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

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
  }

  export type SubCategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
  }

  export type SubCategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
  }

  export type SubCategoriesScalarRelationFilter = {
    is?: SubCategoriesWhereInput
    isNot?: SubCategoriesWhereInput
  }

  export type PostImagesListRelationFilter = {
    every?: PostImagesWhereInput
    some?: PostImagesWhereInput
    none?: PostImagesWhereInput
  }

  export type PostImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    subCategoryId?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    subCategoryId?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    subCategoryId?: SortOrder
    titleAz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    descriptionAz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
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

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostImagesCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
  }

  export type PostImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
  }

  export type PostImagesMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
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

  export type SubCategoriesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput> | SubCategoriesCreateWithoutCategoryInput[] | SubCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutCategoryInput | SubCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoriesCreateManyCategoryInputEnvelope
    connect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
  }

  export type SubCategoriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput> | SubCategoriesCreateWithoutCategoryInput[] | SubCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutCategoryInput | SubCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoriesCreateManyCategoryInputEnvelope
    connect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SubCategoriesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput> | SubCategoriesCreateWithoutCategoryInput[] | SubCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutCategoryInput | SubCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoriesUpsertWithWhereUniqueWithoutCategoryInput | SubCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoriesCreateManyCategoryInputEnvelope
    set?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    disconnect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    delete?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    connect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    update?: SubCategoriesUpdateWithWhereUniqueWithoutCategoryInput | SubCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoriesUpdateManyWithWhereWithoutCategoryInput | SubCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoriesScalarWhereInput | SubCategoriesScalarWhereInput[]
  }

  export type SubCategoriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput> | SubCategoriesCreateWithoutCategoryInput[] | SubCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutCategoryInput | SubCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoriesUpsertWithWhereUniqueWithoutCategoryInput | SubCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoriesCreateManyCategoryInputEnvelope
    set?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    disconnect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    delete?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    connect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    update?: SubCategoriesUpdateWithWhereUniqueWithoutCategoryInput | SubCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoriesUpdateManyWithWhereWithoutCategoryInput | SubCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoriesScalarWhereInput | SubCategoriesScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<CategoriesCreateWithoutSubCategoriesInput, CategoriesUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutSubCategoriesInput
    connect?: CategoriesWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CategoriesUpdateOneRequiredWithoutSubCategoriesNestedInput = {
    create?: XOR<CategoriesCreateWithoutSubCategoriesInput, CategoriesUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutSubCategoriesInput
    upsert?: CategoriesUpsertWithoutSubCategoriesInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutSubCategoriesInput, CategoriesUpdateWithoutSubCategoriesInput>, CategoriesUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type PostUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoryInput | PostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoryInput | PostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoryInput | PostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoryInput | PostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoryInput | PostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoryInput | PostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SubCategoriesCreateNestedOneWithoutPostInput = {
    create?: XOR<SubCategoriesCreateWithoutPostInput, SubCategoriesUncheckedCreateWithoutPostInput>
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutPostInput
    connect?: SubCategoriesWhereUniqueInput
  }

  export type PostImagesCreateNestedManyWithoutPostInput = {
    create?: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput> | PostImagesCreateWithoutPostInput[] | PostImagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImagesCreateOrConnectWithoutPostInput | PostImagesCreateOrConnectWithoutPostInput[]
    createMany?: PostImagesCreateManyPostInputEnvelope
    connect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
  }

  export type PostImagesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput> | PostImagesCreateWithoutPostInput[] | PostImagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImagesCreateOrConnectWithoutPostInput | PostImagesCreateOrConnectWithoutPostInput[]
    createMany?: PostImagesCreateManyPostInputEnvelope
    connect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
  }

  export type SubCategoriesUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<SubCategoriesCreateWithoutPostInput, SubCategoriesUncheckedCreateWithoutPostInput>
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutPostInput
    upsert?: SubCategoriesUpsertWithoutPostInput
    connect?: SubCategoriesWhereUniqueInput
    update?: XOR<XOR<SubCategoriesUpdateToOneWithWhereWithoutPostInput, SubCategoriesUpdateWithoutPostInput>, SubCategoriesUncheckedUpdateWithoutPostInput>
  }

  export type PostImagesUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput> | PostImagesCreateWithoutPostInput[] | PostImagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImagesCreateOrConnectWithoutPostInput | PostImagesCreateOrConnectWithoutPostInput[]
    upsert?: PostImagesUpsertWithWhereUniqueWithoutPostInput | PostImagesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostImagesCreateManyPostInputEnvelope
    set?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    disconnect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    delete?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    connect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    update?: PostImagesUpdateWithWhereUniqueWithoutPostInput | PostImagesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostImagesUpdateManyWithWhereWithoutPostInput | PostImagesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostImagesScalarWhereInput | PostImagesScalarWhereInput[]
  }

  export type PostImagesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput> | PostImagesCreateWithoutPostInput[] | PostImagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImagesCreateOrConnectWithoutPostInput | PostImagesCreateOrConnectWithoutPostInput[]
    upsert?: PostImagesUpsertWithWhereUniqueWithoutPostInput | PostImagesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostImagesCreateManyPostInputEnvelope
    set?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    disconnect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    delete?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    connect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    update?: PostImagesUpdateWithWhereUniqueWithoutPostInput | PostImagesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostImagesUpdateManyWithWhereWithoutPostInput | PostImagesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostImagesScalarWhereInput | PostImagesScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutPostImagesInput = {
    create?: XOR<PostCreateWithoutPostImagesInput, PostUncheckedCreateWithoutPostImagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostImagesInput
    connect?: PostWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateOneRequiredWithoutPostImagesNestedInput = {
    create?: XOR<PostCreateWithoutPostImagesInput, PostUncheckedCreateWithoutPostImagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostImagesInput
    upsert?: PostUpsertWithoutPostImagesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostImagesInput, PostUpdateWithoutPostImagesInput>, PostUncheckedUpdateWithoutPostImagesInput>
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

  export type SubCategoriesCreateWithoutCategoryInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    post?: PostCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoriesUncheckedCreateWithoutCategoryInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    post?: PostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoriesCreateOrConnectWithoutCategoryInput = {
    where: SubCategoriesWhereUniqueInput
    create: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoriesCreateManyCategoryInputEnvelope = {
    data: SubCategoriesCreateManyCategoryInput | SubCategoriesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoriesWhereUniqueInput
    update: XOR<SubCategoriesUpdateWithoutCategoryInput, SubCategoriesUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoriesWhereUniqueInput
    data: XOR<SubCategoriesUpdateWithoutCategoryInput, SubCategoriesUncheckedUpdateWithoutCategoryInput>
  }

  export type SubCategoriesUpdateManyWithWhereWithoutCategoryInput = {
    where: SubCategoriesScalarWhereInput
    data: XOR<SubCategoriesUpdateManyMutationInput, SubCategoriesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubCategoriesScalarWhereInput = {
    AND?: SubCategoriesScalarWhereInput | SubCategoriesScalarWhereInput[]
    OR?: SubCategoriesScalarWhereInput[]
    NOT?: SubCategoriesScalarWhereInput | SubCategoriesScalarWhereInput[]
    id?: StringFilter<"SubCategories"> | string
    categoryId?: StringFilter<"SubCategories"> | string
    titleAz?: StringFilter<"SubCategories"> | string
    titleRu?: StringFilter<"SubCategories"> | string
    titleEn?: StringFilter<"SubCategories"> | string
    descriptionAz?: StringFilter<"SubCategories"> | string
    descriptionRu?: StringFilter<"SubCategories"> | string
    descriptionEn?: StringFilter<"SubCategories"> | string
  }

  export type CategoriesCreateWithoutSubCategoriesInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
  }

  export type CategoriesUncheckedCreateWithoutSubCategoriesInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
  }

  export type CategoriesCreateOrConnectWithoutSubCategoriesInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutSubCategoriesInput, CategoriesUncheckedCreateWithoutSubCategoriesInput>
  }

  export type PostCreateWithoutCategoryInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    postImages?: PostImagesCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCategoryInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    postImages?: PostImagesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCategoryInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
  }

  export type PostCreateManyCategoryInputEnvelope = {
    data: PostCreateManyCategoryInput | PostCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutSubCategoriesInput = {
    update: XOR<CategoriesUpdateWithoutSubCategoriesInput, CategoriesUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<CategoriesCreateWithoutSubCategoriesInput, CategoriesUncheckedCreateWithoutSubCategoriesInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutSubCategoriesInput, CategoriesUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CategoriesUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
    create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
  }

  export type PostUpdateManyWithWhereWithoutCategoryInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    subCategoryId?: StringFilter<"Post"> | string
    titleAz?: StringFilter<"Post"> | string
    titleRu?: StringFilter<"Post"> | string
    titleEn?: StringFilter<"Post"> | string
    descriptionAz?: StringFilter<"Post"> | string
    descriptionRu?: StringFilter<"Post"> | string
    descriptionEn?: StringFilter<"Post"> | string
  }

  export type SubCategoriesCreateWithoutPostInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    category: CategoriesCreateNestedOneWithoutSubCategoriesInput
  }

  export type SubCategoriesUncheckedCreateWithoutPostInput = {
    id?: string
    categoryId: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
  }

  export type SubCategoriesCreateOrConnectWithoutPostInput = {
    where: SubCategoriesWhereUniqueInput
    create: XOR<SubCategoriesCreateWithoutPostInput, SubCategoriesUncheckedCreateWithoutPostInput>
  }

  export type PostImagesCreateWithoutPostInput = {
    id?: string
    url: string
    uploadedAt?: Date | string
  }

  export type PostImagesUncheckedCreateWithoutPostInput = {
    id?: string
    url: string
    uploadedAt?: Date | string
  }

  export type PostImagesCreateOrConnectWithoutPostInput = {
    where: PostImagesWhereUniqueInput
    create: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput>
  }

  export type PostImagesCreateManyPostInputEnvelope = {
    data: PostImagesCreateManyPostInput | PostImagesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoriesUpsertWithoutPostInput = {
    update: XOR<SubCategoriesUpdateWithoutPostInput, SubCategoriesUncheckedUpdateWithoutPostInput>
    create: XOR<SubCategoriesCreateWithoutPostInput, SubCategoriesUncheckedCreateWithoutPostInput>
    where?: SubCategoriesWhereInput
  }

  export type SubCategoriesUpdateToOneWithWhereWithoutPostInput = {
    where?: SubCategoriesWhereInput
    data: XOR<SubCategoriesUpdateWithoutPostInput, SubCategoriesUncheckedUpdateWithoutPostInput>
  }

  export type SubCategoriesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    category?: CategoriesUpdateOneRequiredWithoutSubCategoriesNestedInput
  }

  export type SubCategoriesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type PostImagesUpsertWithWhereUniqueWithoutPostInput = {
    where: PostImagesWhereUniqueInput
    update: XOR<PostImagesUpdateWithoutPostInput, PostImagesUncheckedUpdateWithoutPostInput>
    create: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput>
  }

  export type PostImagesUpdateWithWhereUniqueWithoutPostInput = {
    where: PostImagesWhereUniqueInput
    data: XOR<PostImagesUpdateWithoutPostInput, PostImagesUncheckedUpdateWithoutPostInput>
  }

  export type PostImagesUpdateManyWithWhereWithoutPostInput = {
    where: PostImagesScalarWhereInput
    data: XOR<PostImagesUpdateManyMutationInput, PostImagesUncheckedUpdateManyWithoutPostInput>
  }

  export type PostImagesScalarWhereInput = {
    AND?: PostImagesScalarWhereInput | PostImagesScalarWhereInput[]
    OR?: PostImagesScalarWhereInput[]
    NOT?: PostImagesScalarWhereInput | PostImagesScalarWhereInput[]
    id?: StringFilter<"PostImages"> | string
    postId?: StringFilter<"PostImages"> | string
    url?: StringFilter<"PostImages"> | string
    uploadedAt?: DateTimeFilter<"PostImages"> | Date | string
  }

  export type PostCreateWithoutPostImagesInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
    category: SubCategoriesCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostImagesInput = {
    id?: string
    subCategoryId: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
  }

  export type PostCreateOrConnectWithoutPostImagesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostImagesInput, PostUncheckedCreateWithoutPostImagesInput>
  }

  export type PostUpsertWithoutPostImagesInput = {
    update: XOR<PostUpdateWithoutPostImagesInput, PostUncheckedUpdateWithoutPostImagesInput>
    create: XOR<PostCreateWithoutPostImagesInput, PostUncheckedCreateWithoutPostImagesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostImagesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostImagesInput, PostUncheckedUpdateWithoutPostImagesInput>
  }

  export type PostUpdateWithoutPostImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    category?: SubCategoriesUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategoryId?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoriesCreateManyCategoryInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
  }

  export type SubCategoriesUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoriesUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    post?: PostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoriesUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyCategoryInput = {
    id?: string
    titleAz: string
    titleRu: string
    titleEn: string
    descriptionAz: string
    descriptionRu: string
    descriptionEn: string
  }

  export type PostUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    postImages?: PostImagesUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    postImages?: PostImagesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleAz?: StringFieldUpdateOperationsInput | string
    titleRu?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionAz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
  }

  export type PostImagesCreateManyPostInput = {
    id?: string
    url: string
    uploadedAt?: Date | string
  }

  export type PostImagesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImagesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImagesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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