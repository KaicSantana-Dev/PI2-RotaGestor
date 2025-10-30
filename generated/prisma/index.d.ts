
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Carro
 * 
 */
export type Carro = $Result.DefaultSelection<Prisma.$CarroPayload>
/**
 * Model GastosCombustivel
 * 
 */
export type GastosCombustivel = $Result.DefaultSelection<Prisma.$GastosCombustivelPayload>
/**
 * Model GastosManutencao
 * 
 */
export type GastosManutencao = $Result.DefaultSelection<Prisma.$GastosManutencaoPayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipodeGasto: {
  Combustivel: 'Combustivel',
  Manutencao: 'Manutencao'
};

export type TipodeGasto = (typeof TipodeGasto)[keyof typeof TipodeGasto]


export const Cargo: {
  Gerente: 'Gerente',
  Motorista: 'Motorista',
  Administrador: 'Administrador'
};

export type Cargo = (typeof Cargo)[keyof typeof Cargo]

}

export type TipodeGasto = $Enums.TipodeGasto

export const TipodeGasto: typeof $Enums.TipodeGasto

export type Cargo = $Enums.Cargo

export const Cargo: typeof $Enums.Cargo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carro`: Exposes CRUD operations for the **Carro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carros
    * const carros = await prisma.carro.findMany()
    * ```
    */
  get carro(): Prisma.CarroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gastosCombustivel`: Exposes CRUD operations for the **GastosCombustivel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GastosCombustivels
    * const gastosCombustivels = await prisma.gastosCombustivel.findMany()
    * ```
    */
  get gastosCombustivel(): Prisma.GastosCombustivelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gastosManutencao`: Exposes CRUD operations for the **GastosManutencao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GastosManutencaos
    * const gastosManutencaos = await prisma.gastosManutencao.findMany()
    * ```
    */
  get gastosManutencao(): Prisma.GastosManutencaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
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
    Usuario: 'Usuario',
    Carro: 'Carro',
    GastosCombustivel: 'GastosCombustivel',
    GastosManutencao: 'GastosManutencao',
    Funcionario: 'Funcionario'
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
      modelProps: "usuario" | "carro" | "gastosCombustivel" | "gastosManutencao" | "funcionario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Carro: {
        payload: Prisma.$CarroPayload<ExtArgs>
        fields: Prisma.CarroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarroPayload>
          }
          findFirst: {
            args: Prisma.CarroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarroPayload>
          }
          findMany: {
            args: Prisma.CarroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarroPayload>[]
          }
          create: {
            args: Prisma.CarroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarroPayload>
          }
          createMany: {
            args: Prisma.CarroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarroPayload>[]
          }
          delete: {
            args: Prisma.CarroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarroPayload>
          }
          update: {
            args: Prisma.CarroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarroPayload>
          }
          deleteMany: {
            args: Prisma.CarroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarroPayload>[]
          }
          upsert: {
            args: Prisma.CarroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarroPayload>
          }
          aggregate: {
            args: Prisma.CarroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarro>
          }
          groupBy: {
            args: Prisma.CarroGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarroGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarroCountArgs<ExtArgs>
            result: $Utils.Optional<CarroCountAggregateOutputType> | number
          }
        }
      }
      GastosCombustivel: {
        payload: Prisma.$GastosCombustivelPayload<ExtArgs>
        fields: Prisma.GastosCombustivelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GastosCombustivelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosCombustivelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GastosCombustivelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosCombustivelPayload>
          }
          findFirst: {
            args: Prisma.GastosCombustivelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosCombustivelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GastosCombustivelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosCombustivelPayload>
          }
          findMany: {
            args: Prisma.GastosCombustivelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosCombustivelPayload>[]
          }
          create: {
            args: Prisma.GastosCombustivelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosCombustivelPayload>
          }
          createMany: {
            args: Prisma.GastosCombustivelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GastosCombustivelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosCombustivelPayload>[]
          }
          delete: {
            args: Prisma.GastosCombustivelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosCombustivelPayload>
          }
          update: {
            args: Prisma.GastosCombustivelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosCombustivelPayload>
          }
          deleteMany: {
            args: Prisma.GastosCombustivelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GastosCombustivelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GastosCombustivelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosCombustivelPayload>[]
          }
          upsert: {
            args: Prisma.GastosCombustivelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosCombustivelPayload>
          }
          aggregate: {
            args: Prisma.GastosCombustivelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGastosCombustivel>
          }
          groupBy: {
            args: Prisma.GastosCombustivelGroupByArgs<ExtArgs>
            result: $Utils.Optional<GastosCombustivelGroupByOutputType>[]
          }
          count: {
            args: Prisma.GastosCombustivelCountArgs<ExtArgs>
            result: $Utils.Optional<GastosCombustivelCountAggregateOutputType> | number
          }
        }
      }
      GastosManutencao: {
        payload: Prisma.$GastosManutencaoPayload<ExtArgs>
        fields: Prisma.GastosManutencaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GastosManutencaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosManutencaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GastosManutencaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosManutencaoPayload>
          }
          findFirst: {
            args: Prisma.GastosManutencaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosManutencaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GastosManutencaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosManutencaoPayload>
          }
          findMany: {
            args: Prisma.GastosManutencaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosManutencaoPayload>[]
          }
          create: {
            args: Prisma.GastosManutencaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosManutencaoPayload>
          }
          createMany: {
            args: Prisma.GastosManutencaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GastosManutencaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosManutencaoPayload>[]
          }
          delete: {
            args: Prisma.GastosManutencaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosManutencaoPayload>
          }
          update: {
            args: Prisma.GastosManutencaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosManutencaoPayload>
          }
          deleteMany: {
            args: Prisma.GastosManutencaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GastosManutencaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GastosManutencaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosManutencaoPayload>[]
          }
          upsert: {
            args: Prisma.GastosManutencaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosManutencaoPayload>
          }
          aggregate: {
            args: Prisma.GastosManutencaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGastosManutencao>
          }
          groupBy: {
            args: Prisma.GastosManutencaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GastosManutencaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GastosManutencaoCountArgs<ExtArgs>
            result: $Utils.Optional<GastosManutencaoCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    carro?: CarroOmit
    gastosCombustivel?: GastosCombustivelOmit
    gastosManutencao?: GastosManutencaoOmit
    funcionario?: FuncionarioOmit
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
   * Count Type CarroCountOutputType
   */

  export type CarroCountOutputType = {
    GastosCombustivel: number
    GastosManutencao: number
  }

  export type CarroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GastosCombustivel?: boolean | CarroCountOutputTypeCountGastosCombustivelArgs
    GastosManutencao?: boolean | CarroCountOutputTypeCountGastosManutencaoArgs
  }

  // Custom InputTypes
  /**
   * CarroCountOutputType without action
   */
  export type CarroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarroCountOutputType
     */
    select?: CarroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarroCountOutputType without action
   */
  export type CarroCountOutputTypeCountGastosCombustivelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastosCombustivelWhereInput
  }

  /**
   * CarroCountOutputType without action
   */
  export type CarroCountOutputTypeCountGastosManutencaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastosManutencaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    Nome: string | null
    Senha: string | null
    Email: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    Nome: string | null
    Senha: string | null
    Email: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    Nome: number
    Senha: number
    Email: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    Nome?: true
    Senha?: true
    Email?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    Nome?: true
    Senha?: true
    Email?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    Nome?: true
    Senha?: true
    Email?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    Nome: string
    Senha: string
    Email: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nome?: boolean
    Senha?: boolean
    Email?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nome?: boolean
    Senha?: boolean
    Email?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nome?: boolean
    Senha?: boolean
    Email?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    Nome?: boolean
    Senha?: boolean
    Email?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Nome" | "Senha" | "Email", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Nome: string
      Senha: string
      Email: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly Nome: FieldRef<"Usuario", 'String'>
    readonly Senha: FieldRef<"Usuario", 'String'>
    readonly Email: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput,Usuario>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Carro
   */

  export type AggregateCarro = {
    _count: CarroCountAggregateOutputType | null
    _avg: CarroAvgAggregateOutputType | null
    _sum: CarroSumAggregateOutputType | null
    _min: CarroMinAggregateOutputType | null
    _max: CarroMaxAggregateOutputType | null
  }

  export type CarroAvgAggregateOutputType = {
    id: number | null
    Ano: number | null
    motoristaId: number | null
  }

  export type CarroSumAggregateOutputType = {
    id: number | null
    Ano: number | null
    motoristaId: number | null
  }

  export type CarroMinAggregateOutputType = {
    id: number | null
    Modelo: string | null
    Placa: string | null
    Ano: number | null
    Marca: string | null
    URL_Imagem: string | null
    motoristaId: number | null
  }

  export type CarroMaxAggregateOutputType = {
    id: number | null
    Modelo: string | null
    Placa: string | null
    Ano: number | null
    Marca: string | null
    URL_Imagem: string | null
    motoristaId: number | null
  }

  export type CarroCountAggregateOutputType = {
    id: number
    Modelo: number
    Placa: number
    Ano: number
    Marca: number
    URL_Imagem: number
    motoristaId: number
    _all: number
  }


  export type CarroAvgAggregateInputType = {
    id?: true
    Ano?: true
    motoristaId?: true
  }

  export type CarroSumAggregateInputType = {
    id?: true
    Ano?: true
    motoristaId?: true
  }

  export type CarroMinAggregateInputType = {
    id?: true
    Modelo?: true
    Placa?: true
    Ano?: true
    Marca?: true
    URL_Imagem?: true
    motoristaId?: true
  }

  export type CarroMaxAggregateInputType = {
    id?: true
    Modelo?: true
    Placa?: true
    Ano?: true
    Marca?: true
    URL_Imagem?: true
    motoristaId?: true
  }

  export type CarroCountAggregateInputType = {
    id?: true
    Modelo?: true
    Placa?: true
    Ano?: true
    Marca?: true
    URL_Imagem?: true
    motoristaId?: true
    _all?: true
  }

  export type CarroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carro to aggregate.
     */
    where?: CarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carros to fetch.
     */
    orderBy?: CarroOrderByWithRelationInput | CarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carros
    **/
    _count?: true | CarroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarroMaxAggregateInputType
  }

  export type GetCarroAggregateType<T extends CarroAggregateArgs> = {
        [P in keyof T & keyof AggregateCarro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarro[P]>
      : GetScalarType<T[P], AggregateCarro[P]>
  }




  export type CarroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarroWhereInput
    orderBy?: CarroOrderByWithAggregationInput | CarroOrderByWithAggregationInput[]
    by: CarroScalarFieldEnum[] | CarroScalarFieldEnum
    having?: CarroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarroCountAggregateInputType | true
    _avg?: CarroAvgAggregateInputType
    _sum?: CarroSumAggregateInputType
    _min?: CarroMinAggregateInputType
    _max?: CarroMaxAggregateInputType
  }

  export type CarroGroupByOutputType = {
    id: number
    Modelo: string
    Placa: string
    Ano: number
    Marca: string
    URL_Imagem: string
    motoristaId: number
    _count: CarroCountAggregateOutputType | null
    _avg: CarroAvgAggregateOutputType | null
    _sum: CarroSumAggregateOutputType | null
    _min: CarroMinAggregateOutputType | null
    _max: CarroMaxAggregateOutputType | null
  }

  type GetCarroGroupByPayload<T extends CarroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarroGroupByOutputType[P]>
            : GetScalarType<T[P], CarroGroupByOutputType[P]>
        }
      >
    >


  export type CarroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Modelo?: boolean
    Placa?: boolean
    Ano?: boolean
    Marca?: boolean
    URL_Imagem?: boolean
    motoristaId?: boolean
    Motorista?: boolean | FuncionarioDefaultArgs<ExtArgs>
    GastosCombustivel?: boolean | Carro$GastosCombustivelArgs<ExtArgs>
    GastosManutencao?: boolean | Carro$GastosManutencaoArgs<ExtArgs>
    _count?: boolean | CarroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carro"]>

  export type CarroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Modelo?: boolean
    Placa?: boolean
    Ano?: boolean
    Marca?: boolean
    URL_Imagem?: boolean
    motoristaId?: boolean
    Motorista?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carro"]>

  export type CarroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Modelo?: boolean
    Placa?: boolean
    Ano?: boolean
    Marca?: boolean
    URL_Imagem?: boolean
    motoristaId?: boolean
    Motorista?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carro"]>

  export type CarroSelectScalar = {
    id?: boolean
    Modelo?: boolean
    Placa?: boolean
    Ano?: boolean
    Marca?: boolean
    URL_Imagem?: boolean
    motoristaId?: boolean
  }

  export type CarroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Modelo" | "Placa" | "Ano" | "Marca" | "URL_Imagem" | "motoristaId", ExtArgs["result"]["carro"]>
  export type CarroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Motorista?: boolean | FuncionarioDefaultArgs<ExtArgs>
    GastosCombustivel?: boolean | Carro$GastosCombustivelArgs<ExtArgs>
    GastosManutencao?: boolean | Carro$GastosManutencaoArgs<ExtArgs>
    _count?: boolean | CarroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Motorista?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }
  export type CarroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Motorista?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }

  export type $CarroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carro"
    objects: {
      Motorista: Prisma.$FuncionarioPayload<ExtArgs>
      GastosCombustivel: Prisma.$GastosCombustivelPayload<ExtArgs>[]
      GastosManutencao: Prisma.$GastosManutencaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Modelo: string
      Placa: string
      Ano: number
      Marca: string
      URL_Imagem: string
      motoristaId: number
    }, ExtArgs["result"]["carro"]>
    composites: {}
  }

  type CarroGetPayload<S extends boolean | null | undefined | CarroDefaultArgs> = $Result.GetResult<Prisma.$CarroPayload, S>

  type CarroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarroCountAggregateInputType | true
    }

  export interface CarroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carro'], meta: { name: 'Carro' } }
    /**
     * Find zero or one Carro that matches the filter.
     * @param {CarroFindUniqueArgs} args - Arguments to find a Carro
     * @example
     * // Get one Carro
     * const carro = await prisma.carro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarroFindUniqueArgs>(args: SelectSubset<T, CarroFindUniqueArgs<ExtArgs>>): Prisma__CarroClient<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarroFindUniqueOrThrowArgs} args - Arguments to find a Carro
     * @example
     * // Get one Carro
     * const carro = await prisma.carro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarroFindUniqueOrThrowArgs>(args: SelectSubset<T, CarroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarroClient<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarroFindFirstArgs} args - Arguments to find a Carro
     * @example
     * // Get one Carro
     * const carro = await prisma.carro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarroFindFirstArgs>(args?: SelectSubset<T, CarroFindFirstArgs<ExtArgs>>): Prisma__CarroClient<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarroFindFirstOrThrowArgs} args - Arguments to find a Carro
     * @example
     * // Get one Carro
     * const carro = await prisma.carro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarroFindFirstOrThrowArgs>(args?: SelectSubset<T, CarroFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarroClient<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carros
     * const carros = await prisma.carro.findMany()
     * 
     * // Get first 10 Carros
     * const carros = await prisma.carro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carroWithIdOnly = await prisma.carro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarroFindManyArgs>(args?: SelectSubset<T, CarroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carro.
     * @param {CarroCreateArgs} args - Arguments to create a Carro.
     * @example
     * // Create one Carro
     * const Carro = await prisma.carro.create({
     *   data: {
     *     // ... data to create a Carro
     *   }
     * })
     * 
     */
    create<T extends CarroCreateArgs>(args: SelectSubset<T, CarroCreateArgs<ExtArgs>>): Prisma__CarroClient<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carros.
     * @param {CarroCreateManyArgs} args - Arguments to create many Carros.
     * @example
     * // Create many Carros
     * const carro = await prisma.carro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarroCreateManyArgs>(args?: SelectSubset<T, CarroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carros and returns the data saved in the database.
     * @param {CarroCreateManyAndReturnArgs} args - Arguments to create many Carros.
     * @example
     * // Create many Carros
     * const carro = await prisma.carro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carros and only return the `id`
     * const carroWithIdOnly = await prisma.carro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarroCreateManyAndReturnArgs>(args?: SelectSubset<T, CarroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carro.
     * @param {CarroDeleteArgs} args - Arguments to delete one Carro.
     * @example
     * // Delete one Carro
     * const Carro = await prisma.carro.delete({
     *   where: {
     *     // ... filter to delete one Carro
     *   }
     * })
     * 
     */
    delete<T extends CarroDeleteArgs>(args: SelectSubset<T, CarroDeleteArgs<ExtArgs>>): Prisma__CarroClient<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carro.
     * @param {CarroUpdateArgs} args - Arguments to update one Carro.
     * @example
     * // Update one Carro
     * const carro = await prisma.carro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarroUpdateArgs>(args: SelectSubset<T, CarroUpdateArgs<ExtArgs>>): Prisma__CarroClient<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carros.
     * @param {CarroDeleteManyArgs} args - Arguments to filter Carros to delete.
     * @example
     * // Delete a few Carros
     * const { count } = await prisma.carro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarroDeleteManyArgs>(args?: SelectSubset<T, CarroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carros
     * const carro = await prisma.carro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarroUpdateManyArgs>(args: SelectSubset<T, CarroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carros and returns the data updated in the database.
     * @param {CarroUpdateManyAndReturnArgs} args - Arguments to update many Carros.
     * @example
     * // Update many Carros
     * const carro = await prisma.carro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carros and only return the `id`
     * const carroWithIdOnly = await prisma.carro.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarroUpdateManyAndReturnArgs>(args: SelectSubset<T, CarroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carro.
     * @param {CarroUpsertArgs} args - Arguments to update or create a Carro.
     * @example
     * // Update or create a Carro
     * const carro = await prisma.carro.upsert({
     *   create: {
     *     // ... data to create a Carro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carro we want to update
     *   }
     * })
     */
    upsert<T extends CarroUpsertArgs>(args: SelectSubset<T, CarroUpsertArgs<ExtArgs>>): Prisma__CarroClient<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarroCountArgs} args - Arguments to filter Carros to count.
     * @example
     * // Count the number of Carros
     * const count = await prisma.carro.count({
     *   where: {
     *     // ... the filter for the Carros we want to count
     *   }
     * })
    **/
    count<T extends CarroCountArgs>(
      args?: Subset<T, CarroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarroAggregateArgs>(args: Subset<T, CarroAggregateArgs>): Prisma.PrismaPromise<GetCarroAggregateType<T>>

    /**
     * Group by Carro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarroGroupByArgs} args - Group by arguments.
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
      T extends CarroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarroGroupByArgs['orderBy'] }
        : { orderBy?: CarroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carro model
   */
  readonly fields: CarroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Motorista<T extends FuncionarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FuncionarioDefaultArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    GastosCombustivel<T extends Carro$GastosCombustivelArgs<ExtArgs> = {}>(args?: Subset<T, Carro$GastosCombustivelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GastosManutencao<T extends Carro$GastosManutencaoArgs<ExtArgs> = {}>(args?: Subset<T, Carro$GastosManutencaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Carro model
   */
  interface CarroFieldRefs {
    readonly id: FieldRef<"Carro", 'Int'>
    readonly Modelo: FieldRef<"Carro", 'String'>
    readonly Placa: FieldRef<"Carro", 'String'>
    readonly Ano: FieldRef<"Carro", 'Int'>
    readonly Marca: FieldRef<"Carro", 'String'>
    readonly URL_Imagem: FieldRef<"Carro", 'String'>
    readonly motoristaId: FieldRef<"Carro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Carro findUnique
   */
  export type CarroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroInclude<ExtArgs> | null
    /**
     * Filter, which Carro to fetch.
     */
    where: CarroWhereUniqueInput
  }

  /**
   * Carro findUniqueOrThrow
   */
  export type CarroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroInclude<ExtArgs> | null
    /**
     * Filter, which Carro to fetch.
     */
    where: CarroWhereUniqueInput
  }

  /**
   * Carro findFirst
   */
  export type CarroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroInclude<ExtArgs> | null
    /**
     * Filter, which Carro to fetch.
     */
    where?: CarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carros to fetch.
     */
    orderBy?: CarroOrderByWithRelationInput | CarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carros.
     */
    cursor?: CarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carros.
     */
    distinct?: CarroScalarFieldEnum | CarroScalarFieldEnum[]
  }

  /**
   * Carro findFirstOrThrow
   */
  export type CarroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroInclude<ExtArgs> | null
    /**
     * Filter, which Carro to fetch.
     */
    where?: CarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carros to fetch.
     */
    orderBy?: CarroOrderByWithRelationInput | CarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carros.
     */
    cursor?: CarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carros.
     */
    distinct?: CarroScalarFieldEnum | CarroScalarFieldEnum[]
  }

  /**
   * Carro findMany
   */
  export type CarroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroInclude<ExtArgs> | null
    /**
     * Filter, which Carros to fetch.
     */
    where?: CarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carros to fetch.
     */
    orderBy?: CarroOrderByWithRelationInput | CarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carros.
     */
    cursor?: CarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carros.
     */
    skip?: number
    distinct?: CarroScalarFieldEnum | CarroScalarFieldEnum[]
  }

  /**
   * Carro create
   */
  export type CarroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroInclude<ExtArgs> | null
    /**
     * The data needed to create a Carro.
     */
    data: XOR<CarroCreateInput, CarroUncheckedCreateInput>
  }

  /**
   * Carro createMany
   */
  export type CarroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carros.
     */
    data: CarroCreateManyInput | CarroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carro createManyAndReturn
   */
  export type CarroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * The data used to create many Carros.
     */
    data: CarroCreateManyInput | CarroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carro update
   */
  export type CarroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroInclude<ExtArgs> | null
    /**
     * The data needed to update a Carro.
     */
    data: XOR<CarroUpdateInput, CarroUncheckedUpdateInput>
    /**
     * Choose, which Carro to update.
     */
    where: CarroWhereUniqueInput
  }

  /**
   * Carro updateMany
   */
  export type CarroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carros.
     */
    data: XOR<CarroUpdateManyMutationInput, CarroUncheckedUpdateManyInput>
    /**
     * Filter which Carros to update
     */
    where?: CarroWhereInput
    /**
     * Limit how many Carros to update.
     */
    limit?: number
  }

  /**
   * Carro updateManyAndReturn
   */
  export type CarroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * The data used to update Carros.
     */
    data: XOR<CarroUpdateManyMutationInput, CarroUncheckedUpdateManyInput>
    /**
     * Filter which Carros to update
     */
    where?: CarroWhereInput
    /**
     * Limit how many Carros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carro upsert
   */
  export type CarroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroInclude<ExtArgs> | null
    /**
     * The filter to search for the Carro to update in case it exists.
     */
    where: CarroWhereUniqueInput
    /**
     * In case the Carro found by the `where` argument doesn't exist, create a new Carro with this data.
     */
    create: XOR<CarroCreateInput, CarroUncheckedCreateInput>
    /**
     * In case the Carro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarroUpdateInput, CarroUncheckedUpdateInput>
  }

  /**
   * Carro delete
   */
  export type CarroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroInclude<ExtArgs> | null
    /**
     * Filter which Carro to delete.
     */
    where: CarroWhereUniqueInput
  }

  /**
   * Carro deleteMany
   */
  export type CarroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carros to delete
     */
    where?: CarroWhereInput
    /**
     * Limit how many Carros to delete.
     */
    limit?: number
  }

  /**
   * Carro.GastosCombustivel
   */
  export type Carro$GastosCombustivelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelInclude<ExtArgs> | null
    where?: GastosCombustivelWhereInput
    orderBy?: GastosCombustivelOrderByWithRelationInput | GastosCombustivelOrderByWithRelationInput[]
    cursor?: GastosCombustivelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastosCombustivelScalarFieldEnum | GastosCombustivelScalarFieldEnum[]
  }

  /**
   * Carro.GastosManutencao
   */
  export type Carro$GastosManutencaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoInclude<ExtArgs> | null
    where?: GastosManutencaoWhereInput
    orderBy?: GastosManutencaoOrderByWithRelationInput | GastosManutencaoOrderByWithRelationInput[]
    cursor?: GastosManutencaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastosManutencaoScalarFieldEnum | GastosManutencaoScalarFieldEnum[]
  }

  /**
   * Carro without action
   */
  export type CarroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroInclude<ExtArgs> | null
  }


  /**
   * Model GastosCombustivel
   */

  export type AggregateGastosCombustivel = {
    _count: GastosCombustivelCountAggregateOutputType | null
    _avg: GastosCombustivelAvgAggregateOutputType | null
    _sum: GastosCombustivelSumAggregateOutputType | null
    _min: GastosCombustivelMinAggregateOutputType | null
    _max: GastosCombustivelMaxAggregateOutputType | null
  }

  export type GastosCombustivelAvgAggregateOutputType = {
    id: number | null
    carroId: number | null
    Valor: Decimal | null
  }

  export type GastosCombustivelSumAggregateOutputType = {
    id: number | null
    carroId: number | null
    Valor: Decimal | null
  }

  export type GastosCombustivelMinAggregateOutputType = {
    id: number | null
    carroId: number | null
    Valor: Decimal | null
    Gasto: $Enums.TipodeGasto | null
    Data: Date | null
    Posto: string | null
  }

  export type GastosCombustivelMaxAggregateOutputType = {
    id: number | null
    carroId: number | null
    Valor: Decimal | null
    Gasto: $Enums.TipodeGasto | null
    Data: Date | null
    Posto: string | null
  }

  export type GastosCombustivelCountAggregateOutputType = {
    id: number
    carroId: number
    Valor: number
    Gasto: number
    Data: number
    Posto: number
    _all: number
  }


  export type GastosCombustivelAvgAggregateInputType = {
    id?: true
    carroId?: true
    Valor?: true
  }

  export type GastosCombustivelSumAggregateInputType = {
    id?: true
    carroId?: true
    Valor?: true
  }

  export type GastosCombustivelMinAggregateInputType = {
    id?: true
    carroId?: true
    Valor?: true
    Gasto?: true
    Data?: true
    Posto?: true
  }

  export type GastosCombustivelMaxAggregateInputType = {
    id?: true
    carroId?: true
    Valor?: true
    Gasto?: true
    Data?: true
    Posto?: true
  }

  export type GastosCombustivelCountAggregateInputType = {
    id?: true
    carroId?: true
    Valor?: true
    Gasto?: true
    Data?: true
    Posto?: true
    _all?: true
  }

  export type GastosCombustivelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GastosCombustivel to aggregate.
     */
    where?: GastosCombustivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosCombustivels to fetch.
     */
    orderBy?: GastosCombustivelOrderByWithRelationInput | GastosCombustivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GastosCombustivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosCombustivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosCombustivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GastosCombustivels
    **/
    _count?: true | GastosCombustivelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GastosCombustivelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GastosCombustivelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GastosCombustivelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GastosCombustivelMaxAggregateInputType
  }

  export type GetGastosCombustivelAggregateType<T extends GastosCombustivelAggregateArgs> = {
        [P in keyof T & keyof AggregateGastosCombustivel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGastosCombustivel[P]>
      : GetScalarType<T[P], AggregateGastosCombustivel[P]>
  }




  export type GastosCombustivelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastosCombustivelWhereInput
    orderBy?: GastosCombustivelOrderByWithAggregationInput | GastosCombustivelOrderByWithAggregationInput[]
    by: GastosCombustivelScalarFieldEnum[] | GastosCombustivelScalarFieldEnum
    having?: GastosCombustivelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GastosCombustivelCountAggregateInputType | true
    _avg?: GastosCombustivelAvgAggregateInputType
    _sum?: GastosCombustivelSumAggregateInputType
    _min?: GastosCombustivelMinAggregateInputType
    _max?: GastosCombustivelMaxAggregateInputType
  }

  export type GastosCombustivelGroupByOutputType = {
    id: number
    carroId: number
    Valor: Decimal
    Gasto: $Enums.TipodeGasto
    Data: Date
    Posto: string
    _count: GastosCombustivelCountAggregateOutputType | null
    _avg: GastosCombustivelAvgAggregateOutputType | null
    _sum: GastosCombustivelSumAggregateOutputType | null
    _min: GastosCombustivelMinAggregateOutputType | null
    _max: GastosCombustivelMaxAggregateOutputType | null
  }

  type GetGastosCombustivelGroupByPayload<T extends GastosCombustivelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GastosCombustivelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GastosCombustivelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GastosCombustivelGroupByOutputType[P]>
            : GetScalarType<T[P], GastosCombustivelGroupByOutputType[P]>
        }
      >
    >


  export type GastosCombustivelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carroId?: boolean
    Valor?: boolean
    Gasto?: boolean
    Data?: boolean
    Posto?: boolean
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gastosCombustivel"]>

  export type GastosCombustivelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carroId?: boolean
    Valor?: boolean
    Gasto?: boolean
    Data?: boolean
    Posto?: boolean
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gastosCombustivel"]>

  export type GastosCombustivelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carroId?: boolean
    Valor?: boolean
    Gasto?: boolean
    Data?: boolean
    Posto?: boolean
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gastosCombustivel"]>

  export type GastosCombustivelSelectScalar = {
    id?: boolean
    carroId?: boolean
    Valor?: boolean
    Gasto?: boolean
    Data?: boolean
    Posto?: boolean
  }

  export type GastosCombustivelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carroId" | "Valor" | "Gasto" | "Data" | "Posto", ExtArgs["result"]["gastosCombustivel"]>
  export type GastosCombustivelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }
  export type GastosCombustivelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }
  export type GastosCombustivelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }

  export type $GastosCombustivelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GastosCombustivel"
    objects: {
      Carro: Prisma.$CarroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carroId: number
      Valor: Prisma.Decimal
      Gasto: $Enums.TipodeGasto
      Data: Date
      Posto: string
    }, ExtArgs["result"]["gastosCombustivel"]>
    composites: {}
  }

  type GastosCombustivelGetPayload<S extends boolean | null | undefined | GastosCombustivelDefaultArgs> = $Result.GetResult<Prisma.$GastosCombustivelPayload, S>

  type GastosCombustivelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GastosCombustivelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GastosCombustivelCountAggregateInputType | true
    }

  export interface GastosCombustivelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GastosCombustivel'], meta: { name: 'GastosCombustivel' } }
    /**
     * Find zero or one GastosCombustivel that matches the filter.
     * @param {GastosCombustivelFindUniqueArgs} args - Arguments to find a GastosCombustivel
     * @example
     * // Get one GastosCombustivel
     * const gastosCombustivel = await prisma.gastosCombustivel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GastosCombustivelFindUniqueArgs>(args: SelectSubset<T, GastosCombustivelFindUniqueArgs<ExtArgs>>): Prisma__GastosCombustivelClient<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GastosCombustivel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GastosCombustivelFindUniqueOrThrowArgs} args - Arguments to find a GastosCombustivel
     * @example
     * // Get one GastosCombustivel
     * const gastosCombustivel = await prisma.gastosCombustivel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GastosCombustivelFindUniqueOrThrowArgs>(args: SelectSubset<T, GastosCombustivelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GastosCombustivelClient<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GastosCombustivel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosCombustivelFindFirstArgs} args - Arguments to find a GastosCombustivel
     * @example
     * // Get one GastosCombustivel
     * const gastosCombustivel = await prisma.gastosCombustivel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GastosCombustivelFindFirstArgs>(args?: SelectSubset<T, GastosCombustivelFindFirstArgs<ExtArgs>>): Prisma__GastosCombustivelClient<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GastosCombustivel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosCombustivelFindFirstOrThrowArgs} args - Arguments to find a GastosCombustivel
     * @example
     * // Get one GastosCombustivel
     * const gastosCombustivel = await prisma.gastosCombustivel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GastosCombustivelFindFirstOrThrowArgs>(args?: SelectSubset<T, GastosCombustivelFindFirstOrThrowArgs<ExtArgs>>): Prisma__GastosCombustivelClient<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GastosCombustivels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosCombustivelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GastosCombustivels
     * const gastosCombustivels = await prisma.gastosCombustivel.findMany()
     * 
     * // Get first 10 GastosCombustivels
     * const gastosCombustivels = await prisma.gastosCombustivel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gastosCombustivelWithIdOnly = await prisma.gastosCombustivel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GastosCombustivelFindManyArgs>(args?: SelectSubset<T, GastosCombustivelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GastosCombustivel.
     * @param {GastosCombustivelCreateArgs} args - Arguments to create a GastosCombustivel.
     * @example
     * // Create one GastosCombustivel
     * const GastosCombustivel = await prisma.gastosCombustivel.create({
     *   data: {
     *     // ... data to create a GastosCombustivel
     *   }
     * })
     * 
     */
    create<T extends GastosCombustivelCreateArgs>(args: SelectSubset<T, GastosCombustivelCreateArgs<ExtArgs>>): Prisma__GastosCombustivelClient<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GastosCombustivels.
     * @param {GastosCombustivelCreateManyArgs} args - Arguments to create many GastosCombustivels.
     * @example
     * // Create many GastosCombustivels
     * const gastosCombustivel = await prisma.gastosCombustivel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GastosCombustivelCreateManyArgs>(args?: SelectSubset<T, GastosCombustivelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GastosCombustivels and returns the data saved in the database.
     * @param {GastosCombustivelCreateManyAndReturnArgs} args - Arguments to create many GastosCombustivels.
     * @example
     * // Create many GastosCombustivels
     * const gastosCombustivel = await prisma.gastosCombustivel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GastosCombustivels and only return the `id`
     * const gastosCombustivelWithIdOnly = await prisma.gastosCombustivel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GastosCombustivelCreateManyAndReturnArgs>(args?: SelectSubset<T, GastosCombustivelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GastosCombustivel.
     * @param {GastosCombustivelDeleteArgs} args - Arguments to delete one GastosCombustivel.
     * @example
     * // Delete one GastosCombustivel
     * const GastosCombustivel = await prisma.gastosCombustivel.delete({
     *   where: {
     *     // ... filter to delete one GastosCombustivel
     *   }
     * })
     * 
     */
    delete<T extends GastosCombustivelDeleteArgs>(args: SelectSubset<T, GastosCombustivelDeleteArgs<ExtArgs>>): Prisma__GastosCombustivelClient<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GastosCombustivel.
     * @param {GastosCombustivelUpdateArgs} args - Arguments to update one GastosCombustivel.
     * @example
     * // Update one GastosCombustivel
     * const gastosCombustivel = await prisma.gastosCombustivel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GastosCombustivelUpdateArgs>(args: SelectSubset<T, GastosCombustivelUpdateArgs<ExtArgs>>): Prisma__GastosCombustivelClient<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GastosCombustivels.
     * @param {GastosCombustivelDeleteManyArgs} args - Arguments to filter GastosCombustivels to delete.
     * @example
     * // Delete a few GastosCombustivels
     * const { count } = await prisma.gastosCombustivel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GastosCombustivelDeleteManyArgs>(args?: SelectSubset<T, GastosCombustivelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GastosCombustivels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosCombustivelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GastosCombustivels
     * const gastosCombustivel = await prisma.gastosCombustivel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GastosCombustivelUpdateManyArgs>(args: SelectSubset<T, GastosCombustivelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GastosCombustivels and returns the data updated in the database.
     * @param {GastosCombustivelUpdateManyAndReturnArgs} args - Arguments to update many GastosCombustivels.
     * @example
     * // Update many GastosCombustivels
     * const gastosCombustivel = await prisma.gastosCombustivel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GastosCombustivels and only return the `id`
     * const gastosCombustivelWithIdOnly = await prisma.gastosCombustivel.updateManyAndReturn({
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
    updateManyAndReturn<T extends GastosCombustivelUpdateManyAndReturnArgs>(args: SelectSubset<T, GastosCombustivelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GastosCombustivel.
     * @param {GastosCombustivelUpsertArgs} args - Arguments to update or create a GastosCombustivel.
     * @example
     * // Update or create a GastosCombustivel
     * const gastosCombustivel = await prisma.gastosCombustivel.upsert({
     *   create: {
     *     // ... data to create a GastosCombustivel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GastosCombustivel we want to update
     *   }
     * })
     */
    upsert<T extends GastosCombustivelUpsertArgs>(args: SelectSubset<T, GastosCombustivelUpsertArgs<ExtArgs>>): Prisma__GastosCombustivelClient<$Result.GetResult<Prisma.$GastosCombustivelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GastosCombustivels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosCombustivelCountArgs} args - Arguments to filter GastosCombustivels to count.
     * @example
     * // Count the number of GastosCombustivels
     * const count = await prisma.gastosCombustivel.count({
     *   where: {
     *     // ... the filter for the GastosCombustivels we want to count
     *   }
     * })
    **/
    count<T extends GastosCombustivelCountArgs>(
      args?: Subset<T, GastosCombustivelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GastosCombustivelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GastosCombustivel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosCombustivelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GastosCombustivelAggregateArgs>(args: Subset<T, GastosCombustivelAggregateArgs>): Prisma.PrismaPromise<GetGastosCombustivelAggregateType<T>>

    /**
     * Group by GastosCombustivel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosCombustivelGroupByArgs} args - Group by arguments.
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
      T extends GastosCombustivelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GastosCombustivelGroupByArgs['orderBy'] }
        : { orderBy?: GastosCombustivelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GastosCombustivelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastosCombustivelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GastosCombustivel model
   */
  readonly fields: GastosCombustivelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GastosCombustivel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GastosCombustivelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Carro<T extends CarroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarroDefaultArgs<ExtArgs>>): Prisma__CarroClient<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GastosCombustivel model
   */
  interface GastosCombustivelFieldRefs {
    readonly id: FieldRef<"GastosCombustivel", 'Int'>
    readonly carroId: FieldRef<"GastosCombustivel", 'Int'>
    readonly Valor: FieldRef<"GastosCombustivel", 'Decimal'>
    readonly Gasto: FieldRef<"GastosCombustivel", 'TipodeGasto'>
    readonly Data: FieldRef<"GastosCombustivel", 'DateTime'>
    readonly Posto: FieldRef<"GastosCombustivel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GastosCombustivel findUnique
   */
  export type GastosCombustivelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelInclude<ExtArgs> | null
    /**
     * Filter, which GastosCombustivel to fetch.
     */
    where: GastosCombustivelWhereUniqueInput
  }

  /**
   * GastosCombustivel findUniqueOrThrow
   */
  export type GastosCombustivelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelInclude<ExtArgs> | null
    /**
     * Filter, which GastosCombustivel to fetch.
     */
    where: GastosCombustivelWhereUniqueInput
  }

  /**
   * GastosCombustivel findFirst
   */
  export type GastosCombustivelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelInclude<ExtArgs> | null
    /**
     * Filter, which GastosCombustivel to fetch.
     */
    where?: GastosCombustivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosCombustivels to fetch.
     */
    orderBy?: GastosCombustivelOrderByWithRelationInput | GastosCombustivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GastosCombustivels.
     */
    cursor?: GastosCombustivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosCombustivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosCombustivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GastosCombustivels.
     */
    distinct?: GastosCombustivelScalarFieldEnum | GastosCombustivelScalarFieldEnum[]
  }

  /**
   * GastosCombustivel findFirstOrThrow
   */
  export type GastosCombustivelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelInclude<ExtArgs> | null
    /**
     * Filter, which GastosCombustivel to fetch.
     */
    where?: GastosCombustivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosCombustivels to fetch.
     */
    orderBy?: GastosCombustivelOrderByWithRelationInput | GastosCombustivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GastosCombustivels.
     */
    cursor?: GastosCombustivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosCombustivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosCombustivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GastosCombustivels.
     */
    distinct?: GastosCombustivelScalarFieldEnum | GastosCombustivelScalarFieldEnum[]
  }

  /**
   * GastosCombustivel findMany
   */
  export type GastosCombustivelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelInclude<ExtArgs> | null
    /**
     * Filter, which GastosCombustivels to fetch.
     */
    where?: GastosCombustivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosCombustivels to fetch.
     */
    orderBy?: GastosCombustivelOrderByWithRelationInput | GastosCombustivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GastosCombustivels.
     */
    cursor?: GastosCombustivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosCombustivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosCombustivels.
     */
    skip?: number
    distinct?: GastosCombustivelScalarFieldEnum | GastosCombustivelScalarFieldEnum[]
  }

  /**
   * GastosCombustivel create
   */
  export type GastosCombustivelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelInclude<ExtArgs> | null
    /**
     * The data needed to create a GastosCombustivel.
     */
    data: XOR<GastosCombustivelCreateInput, GastosCombustivelUncheckedCreateInput>
  }

  /**
   * GastosCombustivel createMany
   */
  export type GastosCombustivelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GastosCombustivels.
     */
    data: GastosCombustivelCreateManyInput | GastosCombustivelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GastosCombustivel createManyAndReturn
   */
  export type GastosCombustivelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * The data used to create many GastosCombustivels.
     */
    data: GastosCombustivelCreateManyInput | GastosCombustivelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GastosCombustivel update
   */
  export type GastosCombustivelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelInclude<ExtArgs> | null
    /**
     * The data needed to update a GastosCombustivel.
     */
    data: XOR<GastosCombustivelUpdateInput, GastosCombustivelUncheckedUpdateInput>
    /**
     * Choose, which GastosCombustivel to update.
     */
    where: GastosCombustivelWhereUniqueInput
  }

  /**
   * GastosCombustivel updateMany
   */
  export type GastosCombustivelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GastosCombustivels.
     */
    data: XOR<GastosCombustivelUpdateManyMutationInput, GastosCombustivelUncheckedUpdateManyInput>
    /**
     * Filter which GastosCombustivels to update
     */
    where?: GastosCombustivelWhereInput
    /**
     * Limit how many GastosCombustivels to update.
     */
    limit?: number
  }

  /**
   * GastosCombustivel updateManyAndReturn
   */
  export type GastosCombustivelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * The data used to update GastosCombustivels.
     */
    data: XOR<GastosCombustivelUpdateManyMutationInput, GastosCombustivelUncheckedUpdateManyInput>
    /**
     * Filter which GastosCombustivels to update
     */
    where?: GastosCombustivelWhereInput
    /**
     * Limit how many GastosCombustivels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GastosCombustivel upsert
   */
  export type GastosCombustivelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelInclude<ExtArgs> | null
    /**
     * The filter to search for the GastosCombustivel to update in case it exists.
     */
    where: GastosCombustivelWhereUniqueInput
    /**
     * In case the GastosCombustivel found by the `where` argument doesn't exist, create a new GastosCombustivel with this data.
     */
    create: XOR<GastosCombustivelCreateInput, GastosCombustivelUncheckedCreateInput>
    /**
     * In case the GastosCombustivel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GastosCombustivelUpdateInput, GastosCombustivelUncheckedUpdateInput>
  }

  /**
   * GastosCombustivel delete
   */
  export type GastosCombustivelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelInclude<ExtArgs> | null
    /**
     * Filter which GastosCombustivel to delete.
     */
    where: GastosCombustivelWhereUniqueInput
  }

  /**
   * GastosCombustivel deleteMany
   */
  export type GastosCombustivelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GastosCombustivels to delete
     */
    where?: GastosCombustivelWhereInput
    /**
     * Limit how many GastosCombustivels to delete.
     */
    limit?: number
  }

  /**
   * GastosCombustivel without action
   */
  export type GastosCombustivelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosCombustivel
     */
    select?: GastosCombustivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosCombustivel
     */
    omit?: GastosCombustivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosCombustivelInclude<ExtArgs> | null
  }


  /**
   * Model GastosManutencao
   */

  export type AggregateGastosManutencao = {
    _count: GastosManutencaoCountAggregateOutputType | null
    _avg: GastosManutencaoAvgAggregateOutputType | null
    _sum: GastosManutencaoSumAggregateOutputType | null
    _min: GastosManutencaoMinAggregateOutputType | null
    _max: GastosManutencaoMaxAggregateOutputType | null
  }

  export type GastosManutencaoAvgAggregateOutputType = {
    id: number | null
    carroId: number | null
    Valor: Decimal | null
  }

  export type GastosManutencaoSumAggregateOutputType = {
    id: number | null
    carroId: number | null
    Valor: Decimal | null
  }

  export type GastosManutencaoMinAggregateOutputType = {
    id: number | null
    carroId: number | null
    Valor: Decimal | null
    Gasto: $Enums.TipodeGasto | null
    Data: Date | null
    Local: string | null
  }

  export type GastosManutencaoMaxAggregateOutputType = {
    id: number | null
    carroId: number | null
    Valor: Decimal | null
    Gasto: $Enums.TipodeGasto | null
    Data: Date | null
    Local: string | null
  }

  export type GastosManutencaoCountAggregateOutputType = {
    id: number
    carroId: number
    Valor: number
    Gasto: number
    Data: number
    Local: number
    _all: number
  }


  export type GastosManutencaoAvgAggregateInputType = {
    id?: true
    carroId?: true
    Valor?: true
  }

  export type GastosManutencaoSumAggregateInputType = {
    id?: true
    carroId?: true
    Valor?: true
  }

  export type GastosManutencaoMinAggregateInputType = {
    id?: true
    carroId?: true
    Valor?: true
    Gasto?: true
    Data?: true
    Local?: true
  }

  export type GastosManutencaoMaxAggregateInputType = {
    id?: true
    carroId?: true
    Valor?: true
    Gasto?: true
    Data?: true
    Local?: true
  }

  export type GastosManutencaoCountAggregateInputType = {
    id?: true
    carroId?: true
    Valor?: true
    Gasto?: true
    Data?: true
    Local?: true
    _all?: true
  }

  export type GastosManutencaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GastosManutencao to aggregate.
     */
    where?: GastosManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosManutencaos to fetch.
     */
    orderBy?: GastosManutencaoOrderByWithRelationInput | GastosManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GastosManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosManutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GastosManutencaos
    **/
    _count?: true | GastosManutencaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GastosManutencaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GastosManutencaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GastosManutencaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GastosManutencaoMaxAggregateInputType
  }

  export type GetGastosManutencaoAggregateType<T extends GastosManutencaoAggregateArgs> = {
        [P in keyof T & keyof AggregateGastosManutencao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGastosManutencao[P]>
      : GetScalarType<T[P], AggregateGastosManutencao[P]>
  }




  export type GastosManutencaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastosManutencaoWhereInput
    orderBy?: GastosManutencaoOrderByWithAggregationInput | GastosManutencaoOrderByWithAggregationInput[]
    by: GastosManutencaoScalarFieldEnum[] | GastosManutencaoScalarFieldEnum
    having?: GastosManutencaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GastosManutencaoCountAggregateInputType | true
    _avg?: GastosManutencaoAvgAggregateInputType
    _sum?: GastosManutencaoSumAggregateInputType
    _min?: GastosManutencaoMinAggregateInputType
    _max?: GastosManutencaoMaxAggregateInputType
  }

  export type GastosManutencaoGroupByOutputType = {
    id: number
    carroId: number
    Valor: Decimal
    Gasto: $Enums.TipodeGasto
    Data: Date
    Local: string
    _count: GastosManutencaoCountAggregateOutputType | null
    _avg: GastosManutencaoAvgAggregateOutputType | null
    _sum: GastosManutencaoSumAggregateOutputType | null
    _min: GastosManutencaoMinAggregateOutputType | null
    _max: GastosManutencaoMaxAggregateOutputType | null
  }

  type GetGastosManutencaoGroupByPayload<T extends GastosManutencaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GastosManutencaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GastosManutencaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GastosManutencaoGroupByOutputType[P]>
            : GetScalarType<T[P], GastosManutencaoGroupByOutputType[P]>
        }
      >
    >


  export type GastosManutencaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carroId?: boolean
    Valor?: boolean
    Gasto?: boolean
    Data?: boolean
    Local?: boolean
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gastosManutencao"]>

  export type GastosManutencaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carroId?: boolean
    Valor?: boolean
    Gasto?: boolean
    Data?: boolean
    Local?: boolean
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gastosManutencao"]>

  export type GastosManutencaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carroId?: boolean
    Valor?: boolean
    Gasto?: boolean
    Data?: boolean
    Local?: boolean
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gastosManutencao"]>

  export type GastosManutencaoSelectScalar = {
    id?: boolean
    carroId?: boolean
    Valor?: boolean
    Gasto?: boolean
    Data?: boolean
    Local?: boolean
  }

  export type GastosManutencaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carroId" | "Valor" | "Gasto" | "Data" | "Local", ExtArgs["result"]["gastosManutencao"]>
  export type GastosManutencaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }
  export type GastosManutencaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }
  export type GastosManutencaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carro?: boolean | CarroDefaultArgs<ExtArgs>
  }

  export type $GastosManutencaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GastosManutencao"
    objects: {
      Carro: Prisma.$CarroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carroId: number
      Valor: Prisma.Decimal
      Gasto: $Enums.TipodeGasto
      Data: Date
      Local: string
    }, ExtArgs["result"]["gastosManutencao"]>
    composites: {}
  }

  type GastosManutencaoGetPayload<S extends boolean | null | undefined | GastosManutencaoDefaultArgs> = $Result.GetResult<Prisma.$GastosManutencaoPayload, S>

  type GastosManutencaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GastosManutencaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GastosManutencaoCountAggregateInputType | true
    }

  export interface GastosManutencaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GastosManutencao'], meta: { name: 'GastosManutencao' } }
    /**
     * Find zero or one GastosManutencao that matches the filter.
     * @param {GastosManutencaoFindUniqueArgs} args - Arguments to find a GastosManutencao
     * @example
     * // Get one GastosManutencao
     * const gastosManutencao = await prisma.gastosManutencao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GastosManutencaoFindUniqueArgs>(args: SelectSubset<T, GastosManutencaoFindUniqueArgs<ExtArgs>>): Prisma__GastosManutencaoClient<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GastosManutencao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GastosManutencaoFindUniqueOrThrowArgs} args - Arguments to find a GastosManutencao
     * @example
     * // Get one GastosManutencao
     * const gastosManutencao = await prisma.gastosManutencao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GastosManutencaoFindUniqueOrThrowArgs>(args: SelectSubset<T, GastosManutencaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GastosManutencaoClient<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GastosManutencao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosManutencaoFindFirstArgs} args - Arguments to find a GastosManutencao
     * @example
     * // Get one GastosManutencao
     * const gastosManutencao = await prisma.gastosManutencao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GastosManutencaoFindFirstArgs>(args?: SelectSubset<T, GastosManutencaoFindFirstArgs<ExtArgs>>): Prisma__GastosManutencaoClient<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GastosManutencao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosManutencaoFindFirstOrThrowArgs} args - Arguments to find a GastosManutencao
     * @example
     * // Get one GastosManutencao
     * const gastosManutencao = await prisma.gastosManutencao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GastosManutencaoFindFirstOrThrowArgs>(args?: SelectSubset<T, GastosManutencaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GastosManutencaoClient<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GastosManutencaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosManutencaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GastosManutencaos
     * const gastosManutencaos = await prisma.gastosManutencao.findMany()
     * 
     * // Get first 10 GastosManutencaos
     * const gastosManutencaos = await prisma.gastosManutencao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gastosManutencaoWithIdOnly = await prisma.gastosManutencao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GastosManutencaoFindManyArgs>(args?: SelectSubset<T, GastosManutencaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GastosManutencao.
     * @param {GastosManutencaoCreateArgs} args - Arguments to create a GastosManutencao.
     * @example
     * // Create one GastosManutencao
     * const GastosManutencao = await prisma.gastosManutencao.create({
     *   data: {
     *     // ... data to create a GastosManutencao
     *   }
     * })
     * 
     */
    create<T extends GastosManutencaoCreateArgs>(args: SelectSubset<T, GastosManutencaoCreateArgs<ExtArgs>>): Prisma__GastosManutencaoClient<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GastosManutencaos.
     * @param {GastosManutencaoCreateManyArgs} args - Arguments to create many GastosManutencaos.
     * @example
     * // Create many GastosManutencaos
     * const gastosManutencao = await prisma.gastosManutencao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GastosManutencaoCreateManyArgs>(args?: SelectSubset<T, GastosManutencaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GastosManutencaos and returns the data saved in the database.
     * @param {GastosManutencaoCreateManyAndReturnArgs} args - Arguments to create many GastosManutencaos.
     * @example
     * // Create many GastosManutencaos
     * const gastosManutencao = await prisma.gastosManutencao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GastosManutencaos and only return the `id`
     * const gastosManutencaoWithIdOnly = await prisma.gastosManutencao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GastosManutencaoCreateManyAndReturnArgs>(args?: SelectSubset<T, GastosManutencaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GastosManutencao.
     * @param {GastosManutencaoDeleteArgs} args - Arguments to delete one GastosManutencao.
     * @example
     * // Delete one GastosManutencao
     * const GastosManutencao = await prisma.gastosManutencao.delete({
     *   where: {
     *     // ... filter to delete one GastosManutencao
     *   }
     * })
     * 
     */
    delete<T extends GastosManutencaoDeleteArgs>(args: SelectSubset<T, GastosManutencaoDeleteArgs<ExtArgs>>): Prisma__GastosManutencaoClient<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GastosManutencao.
     * @param {GastosManutencaoUpdateArgs} args - Arguments to update one GastosManutencao.
     * @example
     * // Update one GastosManutencao
     * const gastosManutencao = await prisma.gastosManutencao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GastosManutencaoUpdateArgs>(args: SelectSubset<T, GastosManutencaoUpdateArgs<ExtArgs>>): Prisma__GastosManutencaoClient<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GastosManutencaos.
     * @param {GastosManutencaoDeleteManyArgs} args - Arguments to filter GastosManutencaos to delete.
     * @example
     * // Delete a few GastosManutencaos
     * const { count } = await prisma.gastosManutencao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GastosManutencaoDeleteManyArgs>(args?: SelectSubset<T, GastosManutencaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GastosManutencaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosManutencaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GastosManutencaos
     * const gastosManutencao = await prisma.gastosManutencao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GastosManutencaoUpdateManyArgs>(args: SelectSubset<T, GastosManutencaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GastosManutencaos and returns the data updated in the database.
     * @param {GastosManutencaoUpdateManyAndReturnArgs} args - Arguments to update many GastosManutencaos.
     * @example
     * // Update many GastosManutencaos
     * const gastosManutencao = await prisma.gastosManutencao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GastosManutencaos and only return the `id`
     * const gastosManutencaoWithIdOnly = await prisma.gastosManutencao.updateManyAndReturn({
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
    updateManyAndReturn<T extends GastosManutencaoUpdateManyAndReturnArgs>(args: SelectSubset<T, GastosManutencaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GastosManutencao.
     * @param {GastosManutencaoUpsertArgs} args - Arguments to update or create a GastosManutencao.
     * @example
     * // Update or create a GastosManutencao
     * const gastosManutencao = await prisma.gastosManutencao.upsert({
     *   create: {
     *     // ... data to create a GastosManutencao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GastosManutencao we want to update
     *   }
     * })
     */
    upsert<T extends GastosManutencaoUpsertArgs>(args: SelectSubset<T, GastosManutencaoUpsertArgs<ExtArgs>>): Prisma__GastosManutencaoClient<$Result.GetResult<Prisma.$GastosManutencaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GastosManutencaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosManutencaoCountArgs} args - Arguments to filter GastosManutencaos to count.
     * @example
     * // Count the number of GastosManutencaos
     * const count = await prisma.gastosManutencao.count({
     *   where: {
     *     // ... the filter for the GastosManutencaos we want to count
     *   }
     * })
    **/
    count<T extends GastosManutencaoCountArgs>(
      args?: Subset<T, GastosManutencaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GastosManutencaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GastosManutencao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosManutencaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GastosManutencaoAggregateArgs>(args: Subset<T, GastosManutencaoAggregateArgs>): Prisma.PrismaPromise<GetGastosManutencaoAggregateType<T>>

    /**
     * Group by GastosManutencao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosManutencaoGroupByArgs} args - Group by arguments.
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
      T extends GastosManutencaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GastosManutencaoGroupByArgs['orderBy'] }
        : { orderBy?: GastosManutencaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GastosManutencaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastosManutencaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GastosManutencao model
   */
  readonly fields: GastosManutencaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GastosManutencao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GastosManutencaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Carro<T extends CarroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarroDefaultArgs<ExtArgs>>): Prisma__CarroClient<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GastosManutencao model
   */
  interface GastosManutencaoFieldRefs {
    readonly id: FieldRef<"GastosManutencao", 'Int'>
    readonly carroId: FieldRef<"GastosManutencao", 'Int'>
    readonly Valor: FieldRef<"GastosManutencao", 'Decimal'>
    readonly Gasto: FieldRef<"GastosManutencao", 'TipodeGasto'>
    readonly Data: FieldRef<"GastosManutencao", 'DateTime'>
    readonly Local: FieldRef<"GastosManutencao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GastosManutencao findUnique
   */
  export type GastosManutencaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which GastosManutencao to fetch.
     */
    where: GastosManutencaoWhereUniqueInput
  }

  /**
   * GastosManutencao findUniqueOrThrow
   */
  export type GastosManutencaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which GastosManutencao to fetch.
     */
    where: GastosManutencaoWhereUniqueInput
  }

  /**
   * GastosManutencao findFirst
   */
  export type GastosManutencaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which GastosManutencao to fetch.
     */
    where?: GastosManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosManutencaos to fetch.
     */
    orderBy?: GastosManutencaoOrderByWithRelationInput | GastosManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GastosManutencaos.
     */
    cursor?: GastosManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosManutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GastosManutencaos.
     */
    distinct?: GastosManutencaoScalarFieldEnum | GastosManutencaoScalarFieldEnum[]
  }

  /**
   * GastosManutencao findFirstOrThrow
   */
  export type GastosManutencaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which GastosManutencao to fetch.
     */
    where?: GastosManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosManutencaos to fetch.
     */
    orderBy?: GastosManutencaoOrderByWithRelationInput | GastosManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GastosManutencaos.
     */
    cursor?: GastosManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosManutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GastosManutencaos.
     */
    distinct?: GastosManutencaoScalarFieldEnum | GastosManutencaoScalarFieldEnum[]
  }

  /**
   * GastosManutencao findMany
   */
  export type GastosManutencaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which GastosManutencaos to fetch.
     */
    where?: GastosManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosManutencaos to fetch.
     */
    orderBy?: GastosManutencaoOrderByWithRelationInput | GastosManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GastosManutencaos.
     */
    cursor?: GastosManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosManutencaos.
     */
    skip?: number
    distinct?: GastosManutencaoScalarFieldEnum | GastosManutencaoScalarFieldEnum[]
  }

  /**
   * GastosManutencao create
   */
  export type GastosManutencaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoInclude<ExtArgs> | null
    /**
     * The data needed to create a GastosManutencao.
     */
    data: XOR<GastosManutencaoCreateInput, GastosManutencaoUncheckedCreateInput>
  }

  /**
   * GastosManutencao createMany
   */
  export type GastosManutencaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GastosManutencaos.
     */
    data: GastosManutencaoCreateManyInput | GastosManutencaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GastosManutencao createManyAndReturn
   */
  export type GastosManutencaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * The data used to create many GastosManutencaos.
     */
    data: GastosManutencaoCreateManyInput | GastosManutencaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GastosManutencao update
   */
  export type GastosManutencaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoInclude<ExtArgs> | null
    /**
     * The data needed to update a GastosManutencao.
     */
    data: XOR<GastosManutencaoUpdateInput, GastosManutencaoUncheckedUpdateInput>
    /**
     * Choose, which GastosManutencao to update.
     */
    where: GastosManutencaoWhereUniqueInput
  }

  /**
   * GastosManutencao updateMany
   */
  export type GastosManutencaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GastosManutencaos.
     */
    data: XOR<GastosManutencaoUpdateManyMutationInput, GastosManutencaoUncheckedUpdateManyInput>
    /**
     * Filter which GastosManutencaos to update
     */
    where?: GastosManutencaoWhereInput
    /**
     * Limit how many GastosManutencaos to update.
     */
    limit?: number
  }

  /**
   * GastosManutencao updateManyAndReturn
   */
  export type GastosManutencaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * The data used to update GastosManutencaos.
     */
    data: XOR<GastosManutencaoUpdateManyMutationInput, GastosManutencaoUncheckedUpdateManyInput>
    /**
     * Filter which GastosManutencaos to update
     */
    where?: GastosManutencaoWhereInput
    /**
     * Limit how many GastosManutencaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GastosManutencao upsert
   */
  export type GastosManutencaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoInclude<ExtArgs> | null
    /**
     * The filter to search for the GastosManutencao to update in case it exists.
     */
    where: GastosManutencaoWhereUniqueInput
    /**
     * In case the GastosManutencao found by the `where` argument doesn't exist, create a new GastosManutencao with this data.
     */
    create: XOR<GastosManutencaoCreateInput, GastosManutencaoUncheckedCreateInput>
    /**
     * In case the GastosManutencao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GastosManutencaoUpdateInput, GastosManutencaoUncheckedUpdateInput>
  }

  /**
   * GastosManutencao delete
   */
  export type GastosManutencaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoInclude<ExtArgs> | null
    /**
     * Filter which GastosManutencao to delete.
     */
    where: GastosManutencaoWhereUniqueInput
  }

  /**
   * GastosManutencao deleteMany
   */
  export type GastosManutencaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GastosManutencaos to delete
     */
    where?: GastosManutencaoWhereInput
    /**
     * Limit how many GastosManutencaos to delete.
     */
    limit?: number
  }

  /**
   * GastosManutencao without action
   */
  export type GastosManutencaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosManutencao
     */
    select?: GastosManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosManutencao
     */
    omit?: GastosManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosManutencaoInclude<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: number | null
    Nome: string | null
    CPF: string | null
    Email: string | null
    Cargo: $Enums.Cargo | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: number | null
    Nome: string | null
    CPF: string | null
    Email: string | null
    Cargo: $Enums.Cargo | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    Nome: number
    CPF: number
    Email: number
    Cargo: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    id?: true
  }

  export type FuncionarioSumAggregateInputType = {
    id?: true
  }

  export type FuncionarioMinAggregateInputType = {
    id?: true
    Nome?: true
    CPF?: true
    Email?: true
    Cargo?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
    Nome?: true
    CPF?: true
    Email?: true
    Cargo?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    Nome?: true
    CPF?: true
    Email?: true
    Cargo?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: number
    Nome: string
    CPF: string
    Email: string
    Cargo: $Enums.Cargo
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nome?: boolean
    CPF?: boolean
    Email?: boolean
    Cargo?: boolean
    Carro?: boolean | Funcionario$CarroArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nome?: boolean
    CPF?: boolean
    Email?: boolean
    Cargo?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nome?: boolean
    CPF?: boolean
    Email?: boolean
    Cargo?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectScalar = {
    id?: boolean
    Nome?: boolean
    CPF?: boolean
    Email?: boolean
    Cargo?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Nome" | "CPF" | "Email" | "Cargo", ExtArgs["result"]["funcionario"]>
  export type FuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carro?: boolean | Funcionario$CarroArgs<ExtArgs>
  }
  export type FuncionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FuncionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {
      Carro: Prisma.$CarroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Nome: string
      CPF: string
      Email: string
      Cargo: $Enums.Cargo
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {FuncionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {FuncionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.updateManyAndReturn({
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
    updateManyAndReturn<T extends FuncionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
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
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Carro<T extends Funcionario$CarroArgs<ExtArgs> = {}>(args?: Subset<T, Funcionario$CarroArgs<ExtArgs>>): Prisma__CarroClient<$Result.GetResult<Prisma.$CarroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly id: FieldRef<"Funcionario", 'Int'>
    readonly Nome: FieldRef<"Funcionario", 'String'>
    readonly CPF: FieldRef<"Funcionario", 'String'>
    readonly Email: FieldRef<"Funcionario", 'String'>
    readonly Cargo: FieldRef<"Funcionario", 'Cargo'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario createManyAndReturn
   */
  export type FuncionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario updateManyAndReturn
   */
  export type FuncionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario.Carro
   */
  export type Funcionario$CarroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carro
     */
    select?: CarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carro
     */
    omit?: CarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarroInclude<ExtArgs> | null
    where?: CarroWhereInput
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    Nome: 'Nome',
    Senha: 'Senha',
    Email: 'Email'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CarroScalarFieldEnum: {
    id: 'id',
    Modelo: 'Modelo',
    Placa: 'Placa',
    Ano: 'Ano',
    Marca: 'Marca',
    URL_Imagem: 'URL_Imagem',
    motoristaId: 'motoristaId'
  };

  export type CarroScalarFieldEnum = (typeof CarroScalarFieldEnum)[keyof typeof CarroScalarFieldEnum]


  export const GastosCombustivelScalarFieldEnum: {
    id: 'id',
    carroId: 'carroId',
    Valor: 'Valor',
    Gasto: 'Gasto',
    Data: 'Data',
    Posto: 'Posto'
  };

  export type GastosCombustivelScalarFieldEnum = (typeof GastosCombustivelScalarFieldEnum)[keyof typeof GastosCombustivelScalarFieldEnum]


  export const GastosManutencaoScalarFieldEnum: {
    id: 'id',
    carroId: 'carroId',
    Valor: 'Valor',
    Gasto: 'Gasto',
    Data: 'Data',
    Local: 'Local'
  };

  export type GastosManutencaoScalarFieldEnum = (typeof GastosManutencaoScalarFieldEnum)[keyof typeof GastosManutencaoScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    id: 'id',
    Nome: 'Nome',
    CPF: 'CPF',
    Email: 'Email',
    Cargo: 'Cargo'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TipodeGasto'
   */
  export type EnumTipodeGastoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipodeGasto'>
    


  /**
   * Reference to a field of type 'TipodeGasto[]'
   */
  export type ListEnumTipodeGastoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipodeGasto[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Cargo'
   */
  export type EnumCargoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Cargo'>
    


  /**
   * Reference to a field of type 'Cargo[]'
   */
  export type ListEnumCargoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Cargo[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    Nome?: StringFilter<"Usuario"> | string
    Senha?: StringFilter<"Usuario"> | string
    Email?: StringFilter<"Usuario"> | string
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    Nome?: SortOrder
    Senha?: SortOrder
    Email?: SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    Nome?: StringFilter<"Usuario"> | string
    Senha?: StringFilter<"Usuario"> | string
    Email?: StringFilter<"Usuario"> | string
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    Nome?: SortOrder
    Senha?: SortOrder
    Email?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    Nome?: StringWithAggregatesFilter<"Usuario"> | string
    Senha?: StringWithAggregatesFilter<"Usuario"> | string
    Email?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type CarroWhereInput = {
    AND?: CarroWhereInput | CarroWhereInput[]
    OR?: CarroWhereInput[]
    NOT?: CarroWhereInput | CarroWhereInput[]
    id?: IntFilter<"Carro"> | number
    Modelo?: StringFilter<"Carro"> | string
    Placa?: StringFilter<"Carro"> | string
    Ano?: IntFilter<"Carro"> | number
    Marca?: StringFilter<"Carro"> | string
    URL_Imagem?: StringFilter<"Carro"> | string
    motoristaId?: IntFilter<"Carro"> | number
    Motorista?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
    GastosCombustivel?: GastosCombustivelListRelationFilter
    GastosManutencao?: GastosManutencaoListRelationFilter
  }

  export type CarroOrderByWithRelationInput = {
    id?: SortOrder
    Modelo?: SortOrder
    Placa?: SortOrder
    Ano?: SortOrder
    Marca?: SortOrder
    URL_Imagem?: SortOrder
    motoristaId?: SortOrder
    Motorista?: FuncionarioOrderByWithRelationInput
    GastosCombustivel?: GastosCombustivelOrderByRelationAggregateInput
    GastosManutencao?: GastosManutencaoOrderByRelationAggregateInput
  }

  export type CarroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    motoristaId?: number
    AND?: CarroWhereInput | CarroWhereInput[]
    OR?: CarroWhereInput[]
    NOT?: CarroWhereInput | CarroWhereInput[]
    Modelo?: StringFilter<"Carro"> | string
    Placa?: StringFilter<"Carro"> | string
    Ano?: IntFilter<"Carro"> | number
    Marca?: StringFilter<"Carro"> | string
    URL_Imagem?: StringFilter<"Carro"> | string
    Motorista?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
    GastosCombustivel?: GastosCombustivelListRelationFilter
    GastosManutencao?: GastosManutencaoListRelationFilter
  }, "id" | "motoristaId">

  export type CarroOrderByWithAggregationInput = {
    id?: SortOrder
    Modelo?: SortOrder
    Placa?: SortOrder
    Ano?: SortOrder
    Marca?: SortOrder
    URL_Imagem?: SortOrder
    motoristaId?: SortOrder
    _count?: CarroCountOrderByAggregateInput
    _avg?: CarroAvgOrderByAggregateInput
    _max?: CarroMaxOrderByAggregateInput
    _min?: CarroMinOrderByAggregateInput
    _sum?: CarroSumOrderByAggregateInput
  }

  export type CarroScalarWhereWithAggregatesInput = {
    AND?: CarroScalarWhereWithAggregatesInput | CarroScalarWhereWithAggregatesInput[]
    OR?: CarroScalarWhereWithAggregatesInput[]
    NOT?: CarroScalarWhereWithAggregatesInput | CarroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carro"> | number
    Modelo?: StringWithAggregatesFilter<"Carro"> | string
    Placa?: StringWithAggregatesFilter<"Carro"> | string
    Ano?: IntWithAggregatesFilter<"Carro"> | number
    Marca?: StringWithAggregatesFilter<"Carro"> | string
    URL_Imagem?: StringWithAggregatesFilter<"Carro"> | string
    motoristaId?: IntWithAggregatesFilter<"Carro"> | number
  }

  export type GastosCombustivelWhereInput = {
    AND?: GastosCombustivelWhereInput | GastosCombustivelWhereInput[]
    OR?: GastosCombustivelWhereInput[]
    NOT?: GastosCombustivelWhereInput | GastosCombustivelWhereInput[]
    id?: IntFilter<"GastosCombustivel"> | number
    carroId?: IntFilter<"GastosCombustivel"> | number
    Valor?: DecimalFilter<"GastosCombustivel"> | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFilter<"GastosCombustivel"> | $Enums.TipodeGasto
    Data?: DateTimeFilter<"GastosCombustivel"> | Date | string
    Posto?: StringFilter<"GastosCombustivel"> | string
    Carro?: XOR<CarroScalarRelationFilter, CarroWhereInput>
  }

  export type GastosCombustivelOrderByWithRelationInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
    Gasto?: SortOrder
    Data?: SortOrder
    Posto?: SortOrder
    Carro?: CarroOrderByWithRelationInput
  }

  export type GastosCombustivelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GastosCombustivelWhereInput | GastosCombustivelWhereInput[]
    OR?: GastosCombustivelWhereInput[]
    NOT?: GastosCombustivelWhereInput | GastosCombustivelWhereInput[]
    carroId?: IntFilter<"GastosCombustivel"> | number
    Valor?: DecimalFilter<"GastosCombustivel"> | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFilter<"GastosCombustivel"> | $Enums.TipodeGasto
    Data?: DateTimeFilter<"GastosCombustivel"> | Date | string
    Posto?: StringFilter<"GastosCombustivel"> | string
    Carro?: XOR<CarroScalarRelationFilter, CarroWhereInput>
  }, "id">

  export type GastosCombustivelOrderByWithAggregationInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
    Gasto?: SortOrder
    Data?: SortOrder
    Posto?: SortOrder
    _count?: GastosCombustivelCountOrderByAggregateInput
    _avg?: GastosCombustivelAvgOrderByAggregateInput
    _max?: GastosCombustivelMaxOrderByAggregateInput
    _min?: GastosCombustivelMinOrderByAggregateInput
    _sum?: GastosCombustivelSumOrderByAggregateInput
  }

  export type GastosCombustivelScalarWhereWithAggregatesInput = {
    AND?: GastosCombustivelScalarWhereWithAggregatesInput | GastosCombustivelScalarWhereWithAggregatesInput[]
    OR?: GastosCombustivelScalarWhereWithAggregatesInput[]
    NOT?: GastosCombustivelScalarWhereWithAggregatesInput | GastosCombustivelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GastosCombustivel"> | number
    carroId?: IntWithAggregatesFilter<"GastosCombustivel"> | number
    Valor?: DecimalWithAggregatesFilter<"GastosCombustivel"> | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoWithAggregatesFilter<"GastosCombustivel"> | $Enums.TipodeGasto
    Data?: DateTimeWithAggregatesFilter<"GastosCombustivel"> | Date | string
    Posto?: StringWithAggregatesFilter<"GastosCombustivel"> | string
  }

  export type GastosManutencaoWhereInput = {
    AND?: GastosManutencaoWhereInput | GastosManutencaoWhereInput[]
    OR?: GastosManutencaoWhereInput[]
    NOT?: GastosManutencaoWhereInput | GastosManutencaoWhereInput[]
    id?: IntFilter<"GastosManutencao"> | number
    carroId?: IntFilter<"GastosManutencao"> | number
    Valor?: DecimalFilter<"GastosManutencao"> | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFilter<"GastosManutencao"> | $Enums.TipodeGasto
    Data?: DateTimeFilter<"GastosManutencao"> | Date | string
    Local?: StringFilter<"GastosManutencao"> | string
    Carro?: XOR<CarroScalarRelationFilter, CarroWhereInput>
  }

  export type GastosManutencaoOrderByWithRelationInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
    Gasto?: SortOrder
    Data?: SortOrder
    Local?: SortOrder
    Carro?: CarroOrderByWithRelationInput
  }

  export type GastosManutencaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GastosManutencaoWhereInput | GastosManutencaoWhereInput[]
    OR?: GastosManutencaoWhereInput[]
    NOT?: GastosManutencaoWhereInput | GastosManutencaoWhereInput[]
    carroId?: IntFilter<"GastosManutencao"> | number
    Valor?: DecimalFilter<"GastosManutencao"> | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFilter<"GastosManutencao"> | $Enums.TipodeGasto
    Data?: DateTimeFilter<"GastosManutencao"> | Date | string
    Local?: StringFilter<"GastosManutencao"> | string
    Carro?: XOR<CarroScalarRelationFilter, CarroWhereInput>
  }, "id">

  export type GastosManutencaoOrderByWithAggregationInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
    Gasto?: SortOrder
    Data?: SortOrder
    Local?: SortOrder
    _count?: GastosManutencaoCountOrderByAggregateInput
    _avg?: GastosManutencaoAvgOrderByAggregateInput
    _max?: GastosManutencaoMaxOrderByAggregateInput
    _min?: GastosManutencaoMinOrderByAggregateInput
    _sum?: GastosManutencaoSumOrderByAggregateInput
  }

  export type GastosManutencaoScalarWhereWithAggregatesInput = {
    AND?: GastosManutencaoScalarWhereWithAggregatesInput | GastosManutencaoScalarWhereWithAggregatesInput[]
    OR?: GastosManutencaoScalarWhereWithAggregatesInput[]
    NOT?: GastosManutencaoScalarWhereWithAggregatesInput | GastosManutencaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GastosManutencao"> | number
    carroId?: IntWithAggregatesFilter<"GastosManutencao"> | number
    Valor?: DecimalWithAggregatesFilter<"GastosManutencao"> | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoWithAggregatesFilter<"GastosManutencao"> | $Enums.TipodeGasto
    Data?: DateTimeWithAggregatesFilter<"GastosManutencao"> | Date | string
    Local?: StringWithAggregatesFilter<"GastosManutencao"> | string
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    id?: IntFilter<"Funcionario"> | number
    Nome?: StringFilter<"Funcionario"> | string
    CPF?: StringFilter<"Funcionario"> | string
    Email?: StringFilter<"Funcionario"> | string
    Cargo?: EnumCargoFilter<"Funcionario"> | $Enums.Cargo
    Carro?: XOR<CarroNullableScalarRelationFilter, CarroWhereInput> | null
  }

  export type FuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    Nome?: SortOrder
    CPF?: SortOrder
    Email?: SortOrder
    Cargo?: SortOrder
    Carro?: CarroOrderByWithRelationInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    Nome?: StringFilter<"Funcionario"> | string
    CPF?: StringFilter<"Funcionario"> | string
    Email?: StringFilter<"Funcionario"> | string
    Cargo?: EnumCargoFilter<"Funcionario"> | $Enums.Cargo
    Carro?: XOR<CarroNullableScalarRelationFilter, CarroWhereInput> | null
  }, "id">

  export type FuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    Nome?: SortOrder
    CPF?: SortOrder
    Email?: SortOrder
    Cargo?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _avg?: FuncionarioAvgOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
    _sum?: FuncionarioSumOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Funcionario"> | number
    Nome?: StringWithAggregatesFilter<"Funcionario"> | string
    CPF?: StringWithAggregatesFilter<"Funcionario"> | string
    Email?: StringWithAggregatesFilter<"Funcionario"> | string
    Cargo?: EnumCargoWithAggregatesFilter<"Funcionario"> | $Enums.Cargo
  }

  export type UsuarioCreateInput = {
    Nome: string
    Senha: string
    Email: string
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    Nome: string
    Senha: string
    Email: string
  }

  export type UsuarioUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateManyInput = {
    id?: number
    Nome: string
    Senha: string
    Email: string
  }

  export type UsuarioUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type CarroCreateInput = {
    Modelo: string
    Placa: string
    Ano: number
    Marca: string
    URL_Imagem: string
    Motorista: FuncionarioCreateNestedOneWithoutCarroInput
    GastosCombustivel?: GastosCombustivelCreateNestedManyWithoutCarroInput
    GastosManutencao?: GastosManutencaoCreateNestedManyWithoutCarroInput
  }

  export type CarroUncheckedCreateInput = {
    id?: number
    Modelo: string
    Placa: string
    Ano: number
    Marca: string
    URL_Imagem: string
    motoristaId: number
    GastosCombustivel?: GastosCombustivelUncheckedCreateNestedManyWithoutCarroInput
    GastosManutencao?: GastosManutencaoUncheckedCreateNestedManyWithoutCarroInput
  }

  export type CarroUpdateInput = {
    Modelo?: StringFieldUpdateOperationsInput | string
    Placa?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Marca?: StringFieldUpdateOperationsInput | string
    URL_Imagem?: StringFieldUpdateOperationsInput | string
    Motorista?: FuncionarioUpdateOneRequiredWithoutCarroNestedInput
    GastosCombustivel?: GastosCombustivelUpdateManyWithoutCarroNestedInput
    GastosManutencao?: GastosManutencaoUpdateManyWithoutCarroNestedInput
  }

  export type CarroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Modelo?: StringFieldUpdateOperationsInput | string
    Placa?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Marca?: StringFieldUpdateOperationsInput | string
    URL_Imagem?: StringFieldUpdateOperationsInput | string
    motoristaId?: IntFieldUpdateOperationsInput | number
    GastosCombustivel?: GastosCombustivelUncheckedUpdateManyWithoutCarroNestedInput
    GastosManutencao?: GastosManutencaoUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type CarroCreateManyInput = {
    id?: number
    Modelo: string
    Placa: string
    Ano: number
    Marca: string
    URL_Imagem: string
    motoristaId: number
  }

  export type CarroUpdateManyMutationInput = {
    Modelo?: StringFieldUpdateOperationsInput | string
    Placa?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Marca?: StringFieldUpdateOperationsInput | string
    URL_Imagem?: StringFieldUpdateOperationsInput | string
  }

  export type CarroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Modelo?: StringFieldUpdateOperationsInput | string
    Placa?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Marca?: StringFieldUpdateOperationsInput | string
    URL_Imagem?: StringFieldUpdateOperationsInput | string
    motoristaId?: IntFieldUpdateOperationsInput | number
  }

  export type GastosCombustivelCreateInput = {
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Posto: string
    Carro: CarroCreateNestedOneWithoutGastosCombustivelInput
  }

  export type GastosCombustivelUncheckedCreateInput = {
    id?: number
    carroId: number
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Posto: string
  }

  export type GastosCombustivelUpdateInput = {
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Posto?: StringFieldUpdateOperationsInput | string
    Carro?: CarroUpdateOneRequiredWithoutGastosCombustivelNestedInput
  }

  export type GastosCombustivelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carroId?: IntFieldUpdateOperationsInput | number
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Posto?: StringFieldUpdateOperationsInput | string
  }

  export type GastosCombustivelCreateManyInput = {
    id?: number
    carroId: number
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Posto: string
  }

  export type GastosCombustivelUpdateManyMutationInput = {
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Posto?: StringFieldUpdateOperationsInput | string
  }

  export type GastosCombustivelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carroId?: IntFieldUpdateOperationsInput | number
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Posto?: StringFieldUpdateOperationsInput | string
  }

  export type GastosManutencaoCreateInput = {
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Local: string
    Carro: CarroCreateNestedOneWithoutGastosManutencaoInput
  }

  export type GastosManutencaoUncheckedCreateInput = {
    id?: number
    carroId: number
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Local: string
  }

  export type GastosManutencaoUpdateInput = {
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Local?: StringFieldUpdateOperationsInput | string
    Carro?: CarroUpdateOneRequiredWithoutGastosManutencaoNestedInput
  }

  export type GastosManutencaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carroId?: IntFieldUpdateOperationsInput | number
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Local?: StringFieldUpdateOperationsInput | string
  }

  export type GastosManutencaoCreateManyInput = {
    id?: number
    carroId: number
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Local: string
  }

  export type GastosManutencaoUpdateManyMutationInput = {
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Local?: StringFieldUpdateOperationsInput | string
  }

  export type GastosManutencaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carroId?: IntFieldUpdateOperationsInput | number
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Local?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioCreateInput = {
    Nome: string
    CPF: string
    Email: string
    Cargo: $Enums.Cargo
    Carro?: CarroCreateNestedOneWithoutMotoristaInput
  }

  export type FuncionarioUncheckedCreateInput = {
    id?: number
    Nome: string
    CPF: string
    Email: string
    Cargo: $Enums.Cargo
    Carro?: CarroUncheckedCreateNestedOneWithoutMotoristaInput
  }

  export type FuncionarioUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
    Carro?: CarroUpdateOneWithoutMotoristaNestedInput
  }

  export type FuncionarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
    Carro?: CarroUncheckedUpdateOneWithoutMotoristaNestedInput
  }

  export type FuncionarioCreateManyInput = {
    id?: number
    Nome: string
    CPF: string
    Email: string
    Cargo: $Enums.Cargo
  }

  export type FuncionarioUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
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

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    Nome?: SortOrder
    Senha?: SortOrder
    Email?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    Nome?: SortOrder
    Senha?: SortOrder
    Email?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    Nome?: SortOrder
    Senha?: SortOrder
    Email?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FuncionarioScalarRelationFilter = {
    is?: FuncionarioWhereInput
    isNot?: FuncionarioWhereInput
  }

  export type GastosCombustivelListRelationFilter = {
    every?: GastosCombustivelWhereInput
    some?: GastosCombustivelWhereInput
    none?: GastosCombustivelWhereInput
  }

  export type GastosManutencaoListRelationFilter = {
    every?: GastosManutencaoWhereInput
    some?: GastosManutencaoWhereInput
    none?: GastosManutencaoWhereInput
  }

  export type GastosCombustivelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GastosManutencaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarroCountOrderByAggregateInput = {
    id?: SortOrder
    Modelo?: SortOrder
    Placa?: SortOrder
    Ano?: SortOrder
    Marca?: SortOrder
    URL_Imagem?: SortOrder
    motoristaId?: SortOrder
  }

  export type CarroAvgOrderByAggregateInput = {
    id?: SortOrder
    Ano?: SortOrder
    motoristaId?: SortOrder
  }

  export type CarroMaxOrderByAggregateInput = {
    id?: SortOrder
    Modelo?: SortOrder
    Placa?: SortOrder
    Ano?: SortOrder
    Marca?: SortOrder
    URL_Imagem?: SortOrder
    motoristaId?: SortOrder
  }

  export type CarroMinOrderByAggregateInput = {
    id?: SortOrder
    Modelo?: SortOrder
    Placa?: SortOrder
    Ano?: SortOrder
    Marca?: SortOrder
    URL_Imagem?: SortOrder
    motoristaId?: SortOrder
  }

  export type CarroSumOrderByAggregateInput = {
    id?: SortOrder
    Ano?: SortOrder
    motoristaId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumTipodeGastoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipodeGasto | EnumTipodeGastoFieldRefInput<$PrismaModel>
    in?: $Enums.TipodeGasto[] | ListEnumTipodeGastoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipodeGasto[] | ListEnumTipodeGastoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipodeGastoFilter<$PrismaModel> | $Enums.TipodeGasto
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

  export type CarroScalarRelationFilter = {
    is?: CarroWhereInput
    isNot?: CarroWhereInput
  }

  export type GastosCombustivelCountOrderByAggregateInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
    Gasto?: SortOrder
    Data?: SortOrder
    Posto?: SortOrder
  }

  export type GastosCombustivelAvgOrderByAggregateInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
  }

  export type GastosCombustivelMaxOrderByAggregateInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
    Gasto?: SortOrder
    Data?: SortOrder
    Posto?: SortOrder
  }

  export type GastosCombustivelMinOrderByAggregateInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
    Gasto?: SortOrder
    Data?: SortOrder
    Posto?: SortOrder
  }

  export type GastosCombustivelSumOrderByAggregateInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTipodeGastoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipodeGasto | EnumTipodeGastoFieldRefInput<$PrismaModel>
    in?: $Enums.TipodeGasto[] | ListEnumTipodeGastoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipodeGasto[] | ListEnumTipodeGastoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipodeGastoWithAggregatesFilter<$PrismaModel> | $Enums.TipodeGasto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipodeGastoFilter<$PrismaModel>
    _max?: NestedEnumTipodeGastoFilter<$PrismaModel>
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

  export type GastosManutencaoCountOrderByAggregateInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
    Gasto?: SortOrder
    Data?: SortOrder
    Local?: SortOrder
  }

  export type GastosManutencaoAvgOrderByAggregateInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
  }

  export type GastosManutencaoMaxOrderByAggregateInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
    Gasto?: SortOrder
    Data?: SortOrder
    Local?: SortOrder
  }

  export type GastosManutencaoMinOrderByAggregateInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
    Gasto?: SortOrder
    Data?: SortOrder
    Local?: SortOrder
  }

  export type GastosManutencaoSumOrderByAggregateInput = {
    id?: SortOrder
    carroId?: SortOrder
    Valor?: SortOrder
  }

  export type EnumCargoFilter<$PrismaModel = never> = {
    equals?: $Enums.Cargo | EnumCargoFieldRefInput<$PrismaModel>
    in?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoFilter<$PrismaModel> | $Enums.Cargo
  }

  export type CarroNullableScalarRelationFilter = {
    is?: CarroWhereInput | null
    isNot?: CarroWhereInput | null
  }

  export type FuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
    Nome?: SortOrder
    CPF?: SortOrder
    Email?: SortOrder
    Cargo?: SortOrder
  }

  export type FuncionarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    Nome?: SortOrder
    CPF?: SortOrder
    Email?: SortOrder
    Cargo?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
    Nome?: SortOrder
    CPF?: SortOrder
    Email?: SortOrder
    Cargo?: SortOrder
  }

  export type FuncionarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCargoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Cargo | EnumCargoFieldRefInput<$PrismaModel>
    in?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoWithAggregatesFilter<$PrismaModel> | $Enums.Cargo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoFilter<$PrismaModel>
    _max?: NestedEnumCargoFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FuncionarioCreateNestedOneWithoutCarroInput = {
    create?: XOR<FuncionarioCreateWithoutCarroInput, FuncionarioUncheckedCreateWithoutCarroInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutCarroInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type GastosCombustivelCreateNestedManyWithoutCarroInput = {
    create?: XOR<GastosCombustivelCreateWithoutCarroInput, GastosCombustivelUncheckedCreateWithoutCarroInput> | GastosCombustivelCreateWithoutCarroInput[] | GastosCombustivelUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: GastosCombustivelCreateOrConnectWithoutCarroInput | GastosCombustivelCreateOrConnectWithoutCarroInput[]
    createMany?: GastosCombustivelCreateManyCarroInputEnvelope
    connect?: GastosCombustivelWhereUniqueInput | GastosCombustivelWhereUniqueInput[]
  }

  export type GastosManutencaoCreateNestedManyWithoutCarroInput = {
    create?: XOR<GastosManutencaoCreateWithoutCarroInput, GastosManutencaoUncheckedCreateWithoutCarroInput> | GastosManutencaoCreateWithoutCarroInput[] | GastosManutencaoUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: GastosManutencaoCreateOrConnectWithoutCarroInput | GastosManutencaoCreateOrConnectWithoutCarroInput[]
    createMany?: GastosManutencaoCreateManyCarroInputEnvelope
    connect?: GastosManutencaoWhereUniqueInput | GastosManutencaoWhereUniqueInput[]
  }

  export type GastosCombustivelUncheckedCreateNestedManyWithoutCarroInput = {
    create?: XOR<GastosCombustivelCreateWithoutCarroInput, GastosCombustivelUncheckedCreateWithoutCarroInput> | GastosCombustivelCreateWithoutCarroInput[] | GastosCombustivelUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: GastosCombustivelCreateOrConnectWithoutCarroInput | GastosCombustivelCreateOrConnectWithoutCarroInput[]
    createMany?: GastosCombustivelCreateManyCarroInputEnvelope
    connect?: GastosCombustivelWhereUniqueInput | GastosCombustivelWhereUniqueInput[]
  }

  export type GastosManutencaoUncheckedCreateNestedManyWithoutCarroInput = {
    create?: XOR<GastosManutencaoCreateWithoutCarroInput, GastosManutencaoUncheckedCreateWithoutCarroInput> | GastosManutencaoCreateWithoutCarroInput[] | GastosManutencaoUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: GastosManutencaoCreateOrConnectWithoutCarroInput | GastosManutencaoCreateOrConnectWithoutCarroInput[]
    createMany?: GastosManutencaoCreateManyCarroInputEnvelope
    connect?: GastosManutencaoWhereUniqueInput | GastosManutencaoWhereUniqueInput[]
  }

  export type FuncionarioUpdateOneRequiredWithoutCarroNestedInput = {
    create?: XOR<FuncionarioCreateWithoutCarroInput, FuncionarioUncheckedCreateWithoutCarroInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutCarroInput
    upsert?: FuncionarioUpsertWithoutCarroInput
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutCarroInput, FuncionarioUpdateWithoutCarroInput>, FuncionarioUncheckedUpdateWithoutCarroInput>
  }

  export type GastosCombustivelUpdateManyWithoutCarroNestedInput = {
    create?: XOR<GastosCombustivelCreateWithoutCarroInput, GastosCombustivelUncheckedCreateWithoutCarroInput> | GastosCombustivelCreateWithoutCarroInput[] | GastosCombustivelUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: GastosCombustivelCreateOrConnectWithoutCarroInput | GastosCombustivelCreateOrConnectWithoutCarroInput[]
    upsert?: GastosCombustivelUpsertWithWhereUniqueWithoutCarroInput | GastosCombustivelUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: GastosCombustivelCreateManyCarroInputEnvelope
    set?: GastosCombustivelWhereUniqueInput | GastosCombustivelWhereUniqueInput[]
    disconnect?: GastosCombustivelWhereUniqueInput | GastosCombustivelWhereUniqueInput[]
    delete?: GastosCombustivelWhereUniqueInput | GastosCombustivelWhereUniqueInput[]
    connect?: GastosCombustivelWhereUniqueInput | GastosCombustivelWhereUniqueInput[]
    update?: GastosCombustivelUpdateWithWhereUniqueWithoutCarroInput | GastosCombustivelUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: GastosCombustivelUpdateManyWithWhereWithoutCarroInput | GastosCombustivelUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: GastosCombustivelScalarWhereInput | GastosCombustivelScalarWhereInput[]
  }

  export type GastosManutencaoUpdateManyWithoutCarroNestedInput = {
    create?: XOR<GastosManutencaoCreateWithoutCarroInput, GastosManutencaoUncheckedCreateWithoutCarroInput> | GastosManutencaoCreateWithoutCarroInput[] | GastosManutencaoUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: GastosManutencaoCreateOrConnectWithoutCarroInput | GastosManutencaoCreateOrConnectWithoutCarroInput[]
    upsert?: GastosManutencaoUpsertWithWhereUniqueWithoutCarroInput | GastosManutencaoUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: GastosManutencaoCreateManyCarroInputEnvelope
    set?: GastosManutencaoWhereUniqueInput | GastosManutencaoWhereUniqueInput[]
    disconnect?: GastosManutencaoWhereUniqueInput | GastosManutencaoWhereUniqueInput[]
    delete?: GastosManutencaoWhereUniqueInput | GastosManutencaoWhereUniqueInput[]
    connect?: GastosManutencaoWhereUniqueInput | GastosManutencaoWhereUniqueInput[]
    update?: GastosManutencaoUpdateWithWhereUniqueWithoutCarroInput | GastosManutencaoUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: GastosManutencaoUpdateManyWithWhereWithoutCarroInput | GastosManutencaoUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: GastosManutencaoScalarWhereInput | GastosManutencaoScalarWhereInput[]
  }

  export type GastosCombustivelUncheckedUpdateManyWithoutCarroNestedInput = {
    create?: XOR<GastosCombustivelCreateWithoutCarroInput, GastosCombustivelUncheckedCreateWithoutCarroInput> | GastosCombustivelCreateWithoutCarroInput[] | GastosCombustivelUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: GastosCombustivelCreateOrConnectWithoutCarroInput | GastosCombustivelCreateOrConnectWithoutCarroInput[]
    upsert?: GastosCombustivelUpsertWithWhereUniqueWithoutCarroInput | GastosCombustivelUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: GastosCombustivelCreateManyCarroInputEnvelope
    set?: GastosCombustivelWhereUniqueInput | GastosCombustivelWhereUniqueInput[]
    disconnect?: GastosCombustivelWhereUniqueInput | GastosCombustivelWhereUniqueInput[]
    delete?: GastosCombustivelWhereUniqueInput | GastosCombustivelWhereUniqueInput[]
    connect?: GastosCombustivelWhereUniqueInput | GastosCombustivelWhereUniqueInput[]
    update?: GastosCombustivelUpdateWithWhereUniqueWithoutCarroInput | GastosCombustivelUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: GastosCombustivelUpdateManyWithWhereWithoutCarroInput | GastosCombustivelUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: GastosCombustivelScalarWhereInput | GastosCombustivelScalarWhereInput[]
  }

  export type GastosManutencaoUncheckedUpdateManyWithoutCarroNestedInput = {
    create?: XOR<GastosManutencaoCreateWithoutCarroInput, GastosManutencaoUncheckedCreateWithoutCarroInput> | GastosManutencaoCreateWithoutCarroInput[] | GastosManutencaoUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: GastosManutencaoCreateOrConnectWithoutCarroInput | GastosManutencaoCreateOrConnectWithoutCarroInput[]
    upsert?: GastosManutencaoUpsertWithWhereUniqueWithoutCarroInput | GastosManutencaoUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: GastosManutencaoCreateManyCarroInputEnvelope
    set?: GastosManutencaoWhereUniqueInput | GastosManutencaoWhereUniqueInput[]
    disconnect?: GastosManutencaoWhereUniqueInput | GastosManutencaoWhereUniqueInput[]
    delete?: GastosManutencaoWhereUniqueInput | GastosManutencaoWhereUniqueInput[]
    connect?: GastosManutencaoWhereUniqueInput | GastosManutencaoWhereUniqueInput[]
    update?: GastosManutencaoUpdateWithWhereUniqueWithoutCarroInput | GastosManutencaoUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: GastosManutencaoUpdateManyWithWhereWithoutCarroInput | GastosManutencaoUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: GastosManutencaoScalarWhereInput | GastosManutencaoScalarWhereInput[]
  }

  export type CarroCreateNestedOneWithoutGastosCombustivelInput = {
    create?: XOR<CarroCreateWithoutGastosCombustivelInput, CarroUncheckedCreateWithoutGastosCombustivelInput>
    connectOrCreate?: CarroCreateOrConnectWithoutGastosCombustivelInput
    connect?: CarroWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumTipodeGastoFieldUpdateOperationsInput = {
    set?: $Enums.TipodeGasto
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CarroUpdateOneRequiredWithoutGastosCombustivelNestedInput = {
    create?: XOR<CarroCreateWithoutGastosCombustivelInput, CarroUncheckedCreateWithoutGastosCombustivelInput>
    connectOrCreate?: CarroCreateOrConnectWithoutGastosCombustivelInput
    upsert?: CarroUpsertWithoutGastosCombustivelInput
    connect?: CarroWhereUniqueInput
    update?: XOR<XOR<CarroUpdateToOneWithWhereWithoutGastosCombustivelInput, CarroUpdateWithoutGastosCombustivelInput>, CarroUncheckedUpdateWithoutGastosCombustivelInput>
  }

  export type CarroCreateNestedOneWithoutGastosManutencaoInput = {
    create?: XOR<CarroCreateWithoutGastosManutencaoInput, CarroUncheckedCreateWithoutGastosManutencaoInput>
    connectOrCreate?: CarroCreateOrConnectWithoutGastosManutencaoInput
    connect?: CarroWhereUniqueInput
  }

  export type CarroUpdateOneRequiredWithoutGastosManutencaoNestedInput = {
    create?: XOR<CarroCreateWithoutGastosManutencaoInput, CarroUncheckedCreateWithoutGastosManutencaoInput>
    connectOrCreate?: CarroCreateOrConnectWithoutGastosManutencaoInput
    upsert?: CarroUpsertWithoutGastosManutencaoInput
    connect?: CarroWhereUniqueInput
    update?: XOR<XOR<CarroUpdateToOneWithWhereWithoutGastosManutencaoInput, CarroUpdateWithoutGastosManutencaoInput>, CarroUncheckedUpdateWithoutGastosManutencaoInput>
  }

  export type CarroCreateNestedOneWithoutMotoristaInput = {
    create?: XOR<CarroCreateWithoutMotoristaInput, CarroUncheckedCreateWithoutMotoristaInput>
    connectOrCreate?: CarroCreateOrConnectWithoutMotoristaInput
    connect?: CarroWhereUniqueInput
  }

  export type CarroUncheckedCreateNestedOneWithoutMotoristaInput = {
    create?: XOR<CarroCreateWithoutMotoristaInput, CarroUncheckedCreateWithoutMotoristaInput>
    connectOrCreate?: CarroCreateOrConnectWithoutMotoristaInput
    connect?: CarroWhereUniqueInput
  }

  export type EnumCargoFieldUpdateOperationsInput = {
    set?: $Enums.Cargo
  }

  export type CarroUpdateOneWithoutMotoristaNestedInput = {
    create?: XOR<CarroCreateWithoutMotoristaInput, CarroUncheckedCreateWithoutMotoristaInput>
    connectOrCreate?: CarroCreateOrConnectWithoutMotoristaInput
    upsert?: CarroUpsertWithoutMotoristaInput
    disconnect?: CarroWhereInput | boolean
    delete?: CarroWhereInput | boolean
    connect?: CarroWhereUniqueInput
    update?: XOR<XOR<CarroUpdateToOneWithWhereWithoutMotoristaInput, CarroUpdateWithoutMotoristaInput>, CarroUncheckedUpdateWithoutMotoristaInput>
  }

  export type CarroUncheckedUpdateOneWithoutMotoristaNestedInput = {
    create?: XOR<CarroCreateWithoutMotoristaInput, CarroUncheckedCreateWithoutMotoristaInput>
    connectOrCreate?: CarroCreateOrConnectWithoutMotoristaInput
    upsert?: CarroUpsertWithoutMotoristaInput
    disconnect?: CarroWhereInput | boolean
    delete?: CarroWhereInput | boolean
    connect?: CarroWhereUniqueInput
    update?: XOR<XOR<CarroUpdateToOneWithWhereWithoutMotoristaInput, CarroUpdateWithoutMotoristaInput>, CarroUncheckedUpdateWithoutMotoristaInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumTipodeGastoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipodeGasto | EnumTipodeGastoFieldRefInput<$PrismaModel>
    in?: $Enums.TipodeGasto[] | ListEnumTipodeGastoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipodeGasto[] | ListEnumTipodeGastoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipodeGastoFilter<$PrismaModel> | $Enums.TipodeGasto
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTipodeGastoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipodeGasto | EnumTipodeGastoFieldRefInput<$PrismaModel>
    in?: $Enums.TipodeGasto[] | ListEnumTipodeGastoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipodeGasto[] | ListEnumTipodeGastoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipodeGastoWithAggregatesFilter<$PrismaModel> | $Enums.TipodeGasto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipodeGastoFilter<$PrismaModel>
    _max?: NestedEnumTipodeGastoFilter<$PrismaModel>
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

  export type NestedEnumCargoFilter<$PrismaModel = never> = {
    equals?: $Enums.Cargo | EnumCargoFieldRefInput<$PrismaModel>
    in?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoFilter<$PrismaModel> | $Enums.Cargo
  }

  export type NestedEnumCargoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Cargo | EnumCargoFieldRefInput<$PrismaModel>
    in?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoWithAggregatesFilter<$PrismaModel> | $Enums.Cargo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoFilter<$PrismaModel>
    _max?: NestedEnumCargoFilter<$PrismaModel>
  }

  export type FuncionarioCreateWithoutCarroInput = {
    Nome: string
    CPF: string
    Email: string
    Cargo: $Enums.Cargo
  }

  export type FuncionarioUncheckedCreateWithoutCarroInput = {
    id?: number
    Nome: string
    CPF: string
    Email: string
    Cargo: $Enums.Cargo
  }

  export type FuncionarioCreateOrConnectWithoutCarroInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutCarroInput, FuncionarioUncheckedCreateWithoutCarroInput>
  }

  export type GastosCombustivelCreateWithoutCarroInput = {
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Posto: string
  }

  export type GastosCombustivelUncheckedCreateWithoutCarroInput = {
    id?: number
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Posto: string
  }

  export type GastosCombustivelCreateOrConnectWithoutCarroInput = {
    where: GastosCombustivelWhereUniqueInput
    create: XOR<GastosCombustivelCreateWithoutCarroInput, GastosCombustivelUncheckedCreateWithoutCarroInput>
  }

  export type GastosCombustivelCreateManyCarroInputEnvelope = {
    data: GastosCombustivelCreateManyCarroInput | GastosCombustivelCreateManyCarroInput[]
    skipDuplicates?: boolean
  }

  export type GastosManutencaoCreateWithoutCarroInput = {
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Local: string
  }

  export type GastosManutencaoUncheckedCreateWithoutCarroInput = {
    id?: number
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Local: string
  }

  export type GastosManutencaoCreateOrConnectWithoutCarroInput = {
    where: GastosManutencaoWhereUniqueInput
    create: XOR<GastosManutencaoCreateWithoutCarroInput, GastosManutencaoUncheckedCreateWithoutCarroInput>
  }

  export type GastosManutencaoCreateManyCarroInputEnvelope = {
    data: GastosManutencaoCreateManyCarroInput | GastosManutencaoCreateManyCarroInput[]
    skipDuplicates?: boolean
  }

  export type FuncionarioUpsertWithoutCarroInput = {
    update: XOR<FuncionarioUpdateWithoutCarroInput, FuncionarioUncheckedUpdateWithoutCarroInput>
    create: XOR<FuncionarioCreateWithoutCarroInput, FuncionarioUncheckedCreateWithoutCarroInput>
    where?: FuncionarioWhereInput
  }

  export type FuncionarioUpdateToOneWithWhereWithoutCarroInput = {
    where?: FuncionarioWhereInput
    data: XOR<FuncionarioUpdateWithoutCarroInput, FuncionarioUncheckedUpdateWithoutCarroInput>
  }

  export type FuncionarioUpdateWithoutCarroInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
  }

  export type FuncionarioUncheckedUpdateWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
  }

  export type GastosCombustivelUpsertWithWhereUniqueWithoutCarroInput = {
    where: GastosCombustivelWhereUniqueInput
    update: XOR<GastosCombustivelUpdateWithoutCarroInput, GastosCombustivelUncheckedUpdateWithoutCarroInput>
    create: XOR<GastosCombustivelCreateWithoutCarroInput, GastosCombustivelUncheckedCreateWithoutCarroInput>
  }

  export type GastosCombustivelUpdateWithWhereUniqueWithoutCarroInput = {
    where: GastosCombustivelWhereUniqueInput
    data: XOR<GastosCombustivelUpdateWithoutCarroInput, GastosCombustivelUncheckedUpdateWithoutCarroInput>
  }

  export type GastosCombustivelUpdateManyWithWhereWithoutCarroInput = {
    where: GastosCombustivelScalarWhereInput
    data: XOR<GastosCombustivelUpdateManyMutationInput, GastosCombustivelUncheckedUpdateManyWithoutCarroInput>
  }

  export type GastosCombustivelScalarWhereInput = {
    AND?: GastosCombustivelScalarWhereInput | GastosCombustivelScalarWhereInput[]
    OR?: GastosCombustivelScalarWhereInput[]
    NOT?: GastosCombustivelScalarWhereInput | GastosCombustivelScalarWhereInput[]
    id?: IntFilter<"GastosCombustivel"> | number
    carroId?: IntFilter<"GastosCombustivel"> | number
    Valor?: DecimalFilter<"GastosCombustivel"> | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFilter<"GastosCombustivel"> | $Enums.TipodeGasto
    Data?: DateTimeFilter<"GastosCombustivel"> | Date | string
    Posto?: StringFilter<"GastosCombustivel"> | string
  }

  export type GastosManutencaoUpsertWithWhereUniqueWithoutCarroInput = {
    where: GastosManutencaoWhereUniqueInput
    update: XOR<GastosManutencaoUpdateWithoutCarroInput, GastosManutencaoUncheckedUpdateWithoutCarroInput>
    create: XOR<GastosManutencaoCreateWithoutCarroInput, GastosManutencaoUncheckedCreateWithoutCarroInput>
  }

  export type GastosManutencaoUpdateWithWhereUniqueWithoutCarroInput = {
    where: GastosManutencaoWhereUniqueInput
    data: XOR<GastosManutencaoUpdateWithoutCarroInput, GastosManutencaoUncheckedUpdateWithoutCarroInput>
  }

  export type GastosManutencaoUpdateManyWithWhereWithoutCarroInput = {
    where: GastosManutencaoScalarWhereInput
    data: XOR<GastosManutencaoUpdateManyMutationInput, GastosManutencaoUncheckedUpdateManyWithoutCarroInput>
  }

  export type GastosManutencaoScalarWhereInput = {
    AND?: GastosManutencaoScalarWhereInput | GastosManutencaoScalarWhereInput[]
    OR?: GastosManutencaoScalarWhereInput[]
    NOT?: GastosManutencaoScalarWhereInput | GastosManutencaoScalarWhereInput[]
    id?: IntFilter<"GastosManutencao"> | number
    carroId?: IntFilter<"GastosManutencao"> | number
    Valor?: DecimalFilter<"GastosManutencao"> | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFilter<"GastosManutencao"> | $Enums.TipodeGasto
    Data?: DateTimeFilter<"GastosManutencao"> | Date | string
    Local?: StringFilter<"GastosManutencao"> | string
  }

  export type CarroCreateWithoutGastosCombustivelInput = {
    Modelo: string
    Placa: string
    Ano: number
    Marca: string
    URL_Imagem: string
    Motorista: FuncionarioCreateNestedOneWithoutCarroInput
    GastosManutencao?: GastosManutencaoCreateNestedManyWithoutCarroInput
  }

  export type CarroUncheckedCreateWithoutGastosCombustivelInput = {
    id?: number
    Modelo: string
    Placa: string
    Ano: number
    Marca: string
    URL_Imagem: string
    motoristaId: number
    GastosManutencao?: GastosManutencaoUncheckedCreateNestedManyWithoutCarroInput
  }

  export type CarroCreateOrConnectWithoutGastosCombustivelInput = {
    where: CarroWhereUniqueInput
    create: XOR<CarroCreateWithoutGastosCombustivelInput, CarroUncheckedCreateWithoutGastosCombustivelInput>
  }

  export type CarroUpsertWithoutGastosCombustivelInput = {
    update: XOR<CarroUpdateWithoutGastosCombustivelInput, CarroUncheckedUpdateWithoutGastosCombustivelInput>
    create: XOR<CarroCreateWithoutGastosCombustivelInput, CarroUncheckedCreateWithoutGastosCombustivelInput>
    where?: CarroWhereInput
  }

  export type CarroUpdateToOneWithWhereWithoutGastosCombustivelInput = {
    where?: CarroWhereInput
    data: XOR<CarroUpdateWithoutGastosCombustivelInput, CarroUncheckedUpdateWithoutGastosCombustivelInput>
  }

  export type CarroUpdateWithoutGastosCombustivelInput = {
    Modelo?: StringFieldUpdateOperationsInput | string
    Placa?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Marca?: StringFieldUpdateOperationsInput | string
    URL_Imagem?: StringFieldUpdateOperationsInput | string
    Motorista?: FuncionarioUpdateOneRequiredWithoutCarroNestedInput
    GastosManutencao?: GastosManutencaoUpdateManyWithoutCarroNestedInput
  }

  export type CarroUncheckedUpdateWithoutGastosCombustivelInput = {
    id?: IntFieldUpdateOperationsInput | number
    Modelo?: StringFieldUpdateOperationsInput | string
    Placa?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Marca?: StringFieldUpdateOperationsInput | string
    URL_Imagem?: StringFieldUpdateOperationsInput | string
    motoristaId?: IntFieldUpdateOperationsInput | number
    GastosManutencao?: GastosManutencaoUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type CarroCreateWithoutGastosManutencaoInput = {
    Modelo: string
    Placa: string
    Ano: number
    Marca: string
    URL_Imagem: string
    Motorista: FuncionarioCreateNestedOneWithoutCarroInput
    GastosCombustivel?: GastosCombustivelCreateNestedManyWithoutCarroInput
  }

  export type CarroUncheckedCreateWithoutGastosManutencaoInput = {
    id?: number
    Modelo: string
    Placa: string
    Ano: number
    Marca: string
    URL_Imagem: string
    motoristaId: number
    GastosCombustivel?: GastosCombustivelUncheckedCreateNestedManyWithoutCarroInput
  }

  export type CarroCreateOrConnectWithoutGastosManutencaoInput = {
    where: CarroWhereUniqueInput
    create: XOR<CarroCreateWithoutGastosManutencaoInput, CarroUncheckedCreateWithoutGastosManutencaoInput>
  }

  export type CarroUpsertWithoutGastosManutencaoInput = {
    update: XOR<CarroUpdateWithoutGastosManutencaoInput, CarroUncheckedUpdateWithoutGastosManutencaoInput>
    create: XOR<CarroCreateWithoutGastosManutencaoInput, CarroUncheckedCreateWithoutGastosManutencaoInput>
    where?: CarroWhereInput
  }

  export type CarroUpdateToOneWithWhereWithoutGastosManutencaoInput = {
    where?: CarroWhereInput
    data: XOR<CarroUpdateWithoutGastosManutencaoInput, CarroUncheckedUpdateWithoutGastosManutencaoInput>
  }

  export type CarroUpdateWithoutGastosManutencaoInput = {
    Modelo?: StringFieldUpdateOperationsInput | string
    Placa?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Marca?: StringFieldUpdateOperationsInput | string
    URL_Imagem?: StringFieldUpdateOperationsInput | string
    Motorista?: FuncionarioUpdateOneRequiredWithoutCarroNestedInput
    GastosCombustivel?: GastosCombustivelUpdateManyWithoutCarroNestedInput
  }

  export type CarroUncheckedUpdateWithoutGastosManutencaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    Modelo?: StringFieldUpdateOperationsInput | string
    Placa?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Marca?: StringFieldUpdateOperationsInput | string
    URL_Imagem?: StringFieldUpdateOperationsInput | string
    motoristaId?: IntFieldUpdateOperationsInput | number
    GastosCombustivel?: GastosCombustivelUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type CarroCreateWithoutMotoristaInput = {
    Modelo: string
    Placa: string
    Ano: number
    Marca: string
    URL_Imagem: string
    GastosCombustivel?: GastosCombustivelCreateNestedManyWithoutCarroInput
    GastosManutencao?: GastosManutencaoCreateNestedManyWithoutCarroInput
  }

  export type CarroUncheckedCreateWithoutMotoristaInput = {
    id?: number
    Modelo: string
    Placa: string
    Ano: number
    Marca: string
    URL_Imagem: string
    GastosCombustivel?: GastosCombustivelUncheckedCreateNestedManyWithoutCarroInput
    GastosManutencao?: GastosManutencaoUncheckedCreateNestedManyWithoutCarroInput
  }

  export type CarroCreateOrConnectWithoutMotoristaInput = {
    where: CarroWhereUniqueInput
    create: XOR<CarroCreateWithoutMotoristaInput, CarroUncheckedCreateWithoutMotoristaInput>
  }

  export type CarroUpsertWithoutMotoristaInput = {
    update: XOR<CarroUpdateWithoutMotoristaInput, CarroUncheckedUpdateWithoutMotoristaInput>
    create: XOR<CarroCreateWithoutMotoristaInput, CarroUncheckedCreateWithoutMotoristaInput>
    where?: CarroWhereInput
  }

  export type CarroUpdateToOneWithWhereWithoutMotoristaInput = {
    where?: CarroWhereInput
    data: XOR<CarroUpdateWithoutMotoristaInput, CarroUncheckedUpdateWithoutMotoristaInput>
  }

  export type CarroUpdateWithoutMotoristaInput = {
    Modelo?: StringFieldUpdateOperationsInput | string
    Placa?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Marca?: StringFieldUpdateOperationsInput | string
    URL_Imagem?: StringFieldUpdateOperationsInput | string
    GastosCombustivel?: GastosCombustivelUpdateManyWithoutCarroNestedInput
    GastosManutencao?: GastosManutencaoUpdateManyWithoutCarroNestedInput
  }

  export type CarroUncheckedUpdateWithoutMotoristaInput = {
    id?: IntFieldUpdateOperationsInput | number
    Modelo?: StringFieldUpdateOperationsInput | string
    Placa?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Marca?: StringFieldUpdateOperationsInput | string
    URL_Imagem?: StringFieldUpdateOperationsInput | string
    GastosCombustivel?: GastosCombustivelUncheckedUpdateManyWithoutCarroNestedInput
    GastosManutencao?: GastosManutencaoUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type GastosCombustivelCreateManyCarroInput = {
    id?: number
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Posto: string
  }

  export type GastosManutencaoCreateManyCarroInput = {
    id?: number
    Valor: Decimal | DecimalJsLike | number | string
    Gasto: $Enums.TipodeGasto
    Data: Date | string
    Local: string
  }

  export type GastosCombustivelUpdateWithoutCarroInput = {
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Posto?: StringFieldUpdateOperationsInput | string
  }

  export type GastosCombustivelUncheckedUpdateWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Posto?: StringFieldUpdateOperationsInput | string
  }

  export type GastosCombustivelUncheckedUpdateManyWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Posto?: StringFieldUpdateOperationsInput | string
  }

  export type GastosManutencaoUpdateWithoutCarroInput = {
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Local?: StringFieldUpdateOperationsInput | string
  }

  export type GastosManutencaoUncheckedUpdateWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Local?: StringFieldUpdateOperationsInput | string
  }

  export type GastosManutencaoUncheckedUpdateManyWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    Valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Gasto?: EnumTipodeGastoFieldUpdateOperationsInput | $Enums.TipodeGasto
    Data?: DateTimeFieldUpdateOperationsInput | Date | string
    Local?: StringFieldUpdateOperationsInput | string
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